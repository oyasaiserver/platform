import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ZeroTrustAccessPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#account_id ZeroTrustAccessPolicy#account_id}
    */
    readonly accountId?: string;
    /**
    * Administrators who can approve a temporary authentication request.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#approval_groups ZeroTrustAccessPolicy#approval_groups}
    */
    readonly approvalGroups?: ZeroTrustAccessPolicyApprovalGroups[] | cdktf.IResolvable;
    /**
    * Requires the user to request access from an administrator at the start of each session.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#approval_required ZeroTrustAccessPolicy#approval_required}
    */
    readonly approvalRequired?: boolean | cdktf.IResolvable;
    /**
    * The rules that define how users may connect to targets secured by your application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#connection_rules ZeroTrustAccessPolicy#connection_rules}
    */
    readonly connectionRules?: ZeroTrustAccessPolicyConnectionRules;
    /**
    * The action Access will take if a user matches this policy. Infrastructure application policies can only use the Allow action.
    * Available values: "allow", "deny", "non_identity", "bypass".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#decision ZeroTrustAccessPolicy#decision}
    */
    readonly decision: string;
    /**
    * Rules evaluated with a NOT logical operator. To match the policy, a user cannot meet any of the Exclude rules.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#exclude ZeroTrustAccessPolicy#exclude}
    */
    readonly exclude?: ZeroTrustAccessPolicyExclude[] | cdktf.IResolvable;
    /**
    * Rules evaluated with an OR logical operator. A user needs to meet only one of the Include rules.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#include ZeroTrustAccessPolicy#include}
    */
    readonly include?: ZeroTrustAccessPolicyInclude[] | cdktf.IResolvable;
    /**
    * Require this application to be served in an isolated browser for users matching this policy. 'Client Web Isolation' must be on for the account in order to use this feature.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#isolation_required ZeroTrustAccessPolicy#isolation_required}
    */
    readonly isolationRequired?: boolean | cdktf.IResolvable;
    /**
    * Configures multi-factor authentication (MFA) settings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#mfa_config ZeroTrustAccessPolicy#mfa_config}
    */
    readonly mfaConfig?: ZeroTrustAccessPolicyMfaConfig;
    /**
    * The name of the Access policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#name ZeroTrustAccessPolicy#name}
    */
    readonly name: string;
    /**
    * A custom message that will appear on the purpose justification screen.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#purpose_justification_prompt ZeroTrustAccessPolicy#purpose_justification_prompt}
    */
    readonly purposeJustificationPrompt?: string;
    /**
    * Require users to enter a justification when they log in to the application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#purpose_justification_required ZeroTrustAccessPolicy#purpose_justification_required}
    */
    readonly purposeJustificationRequired?: boolean | cdktf.IResolvable;
    /**
    * Rules evaluated with an AND logical operator. To match the policy, a user must meet all of the Require rules.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#require ZeroTrustAccessPolicy#require}
    */
    readonly require?: ZeroTrustAccessPolicyRequire[] | cdktf.IResolvable;
    /**
    * The amount of time that tokens issued for the application will be valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s, m, h.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#session_duration ZeroTrustAccessPolicy#session_duration}
    */
    readonly sessionDuration?: string;
}
export interface ZeroTrustAccessPolicyApprovalGroups {
    /**
    * The number of approvals needed to obtain access.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#approvals_needed ZeroTrustAccessPolicy#approvals_needed}
    */
    readonly approvalsNeeded: number;
    /**
    * A list of emails that can approve the access request.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#email_addresses ZeroTrustAccessPolicy#email_addresses}
    */
    readonly emailAddresses?: string[];
    /**
    * The UUID of an re-usable email list.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#email_list_uuid ZeroTrustAccessPolicy#email_list_uuid}
    */
    readonly emailListUuid?: string;
}
export declare function zeroTrustAccessPolicyApprovalGroupsToTerraform(struct?: ZeroTrustAccessPolicyApprovalGroups | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyApprovalGroupsToHclTerraform(struct?: ZeroTrustAccessPolicyApprovalGroups | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyApprovalGroupsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ZeroTrustAccessPolicyApprovalGroups | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyApprovalGroups | cdktf.IResolvable | undefined);
    private _approvalsNeeded?;
    get approvalsNeeded(): number;
    set approvalsNeeded(value: number);
    get approvalsNeededInput(): number;
    private _emailAddresses?;
    get emailAddresses(): string[];
    set emailAddresses(value: string[]);
    resetEmailAddresses(): void;
    get emailAddressesInput(): string[];
    private _emailListUuid?;
    get emailListUuid(): string;
    set emailListUuid(value: string);
    resetEmailListUuid(): void;
    get emailListUuidInput(): string;
}
export declare class ZeroTrustAccessPolicyApprovalGroupsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ZeroTrustAccessPolicyApprovalGroups[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ZeroTrustAccessPolicyApprovalGroupsOutputReference;
}
export interface ZeroTrustAccessPolicyConnectionRulesRdp {
    /**
    * Clipboard formats allowed when copying from local machine to remote RDP session.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#allowed_clipboard_local_to_remote_formats ZeroTrustAccessPolicy#allowed_clipboard_local_to_remote_formats}
    */
    readonly allowedClipboardLocalToRemoteFormats?: string[];
    /**
    * Clipboard formats allowed when copying from remote RDP session to local machine.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#allowed_clipboard_remote_to_local_formats ZeroTrustAccessPolicy#allowed_clipboard_remote_to_local_formats}
    */
    readonly allowedClipboardRemoteToLocalFormats?: string[];
}
export declare function zeroTrustAccessPolicyConnectionRulesRdpToTerraform(struct?: ZeroTrustAccessPolicyConnectionRulesRdp | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyConnectionRulesRdpToHclTerraform(struct?: ZeroTrustAccessPolicyConnectionRulesRdp | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyConnectionRulesRdpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyConnectionRulesRdp | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyConnectionRulesRdp | cdktf.IResolvable | undefined);
    private _allowedClipboardLocalToRemoteFormats?;
    get allowedClipboardLocalToRemoteFormats(): string[];
    set allowedClipboardLocalToRemoteFormats(value: string[]);
    resetAllowedClipboardLocalToRemoteFormats(): void;
    get allowedClipboardLocalToRemoteFormatsInput(): string[];
    private _allowedClipboardRemoteToLocalFormats?;
    get allowedClipboardRemoteToLocalFormats(): string[];
    set allowedClipboardRemoteToLocalFormats(value: string[]);
    resetAllowedClipboardRemoteToLocalFormats(): void;
    get allowedClipboardRemoteToLocalFormatsInput(): string[];
}
export interface ZeroTrustAccessPolicyConnectionRules {
    /**
    * The RDP-specific rules that define clipboard behavior for RDP connections.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#rdp ZeroTrustAccessPolicy#rdp}
    */
    readonly rdp?: ZeroTrustAccessPolicyConnectionRulesRdp;
}
export declare function zeroTrustAccessPolicyConnectionRulesToTerraform(struct?: ZeroTrustAccessPolicyConnectionRules | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyConnectionRulesToHclTerraform(struct?: ZeroTrustAccessPolicyConnectionRules | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyConnectionRulesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyConnectionRules | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyConnectionRules | cdktf.IResolvable | undefined);
    private _rdp;
    get rdp(): ZeroTrustAccessPolicyConnectionRulesRdpOutputReference;
    putRdp(value: ZeroTrustAccessPolicyConnectionRulesRdp): void;
    resetRdp(): void;
    get rdpInput(): any;
}
export interface ZeroTrustAccessPolicyExcludeAnyValidServiceToken {
}
export declare function zeroTrustAccessPolicyExcludeAnyValidServiceTokenToTerraform(struct?: ZeroTrustAccessPolicyExcludeAnyValidServiceToken | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyExcludeAnyValidServiceTokenToHclTerraform(struct?: ZeroTrustAccessPolicyExcludeAnyValidServiceToken | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyExcludeAnyValidServiceTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyExcludeAnyValidServiceToken | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyExcludeAnyValidServiceToken | cdktf.IResolvable | undefined);
}
export interface ZeroTrustAccessPolicyExcludeAuthContext {
    /**
    * The ACID of an Authentication context.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#ac_id ZeroTrustAccessPolicy#ac_id}
    */
    readonly acId: string;
    /**
    * The ID of an Authentication context.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#id ZeroTrustAccessPolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
    /**
    * The ID of your Azure identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}
    */
    readonly identityProviderId: string;
}
export declare function zeroTrustAccessPolicyExcludeAuthContextToTerraform(struct?: ZeroTrustAccessPolicyExcludeAuthContext | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyExcludeAuthContextToHclTerraform(struct?: ZeroTrustAccessPolicyExcludeAuthContext | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyExcludeAuthContextOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyExcludeAuthContext | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyExcludeAuthContext | cdktf.IResolvable | undefined);
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
export interface ZeroTrustAccessPolicyExcludeAuthMethod {
    /**
    * The type of authentication method https://datatracker.ietf.org/doc/html/rfc8176#section-2.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#auth_method ZeroTrustAccessPolicy#auth_method}
    */
    readonly authMethod: string;
}
export declare function zeroTrustAccessPolicyExcludeAuthMethodToTerraform(struct?: ZeroTrustAccessPolicyExcludeAuthMethod | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyExcludeAuthMethodToHclTerraform(struct?: ZeroTrustAccessPolicyExcludeAuthMethod | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyExcludeAuthMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyExcludeAuthMethod | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyExcludeAuthMethod | cdktf.IResolvable | undefined);
    private _authMethod?;
    get authMethod(): string;
    set authMethod(value: string);
    get authMethodInput(): string;
}
export interface ZeroTrustAccessPolicyExcludeAzureAd {
    /**
    * The ID of an Azure group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#id ZeroTrustAccessPolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
    /**
    * The ID of your Azure identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}
    */
    readonly identityProviderId: string;
}
export declare function zeroTrustAccessPolicyExcludeAzureAdToTerraform(struct?: ZeroTrustAccessPolicyExcludeAzureAd | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyExcludeAzureAdToHclTerraform(struct?: ZeroTrustAccessPolicyExcludeAzureAd | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyExcludeAzureAdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyExcludeAzureAd | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyExcludeAzureAd | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    private _identityProviderId?;
    get identityProviderId(): string;
    set identityProviderId(value: string);
    get identityProviderIdInput(): string;
}
export interface ZeroTrustAccessPolicyExcludeCertificate {
}
export declare function zeroTrustAccessPolicyExcludeCertificateToTerraform(struct?: ZeroTrustAccessPolicyExcludeCertificate | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyExcludeCertificateToHclTerraform(struct?: ZeroTrustAccessPolicyExcludeCertificate | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyExcludeCertificateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyExcludeCertificate | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyExcludeCertificate | cdktf.IResolvable | undefined);
}
export interface ZeroTrustAccessPolicyExcludeCommonName {
    /**
    * The common name to match.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#common_name ZeroTrustAccessPolicy#common_name}
    */
    readonly commonName: string;
}
export declare function zeroTrustAccessPolicyExcludeCommonNameToTerraform(struct?: ZeroTrustAccessPolicyExcludeCommonName | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyExcludeCommonNameToHclTerraform(struct?: ZeroTrustAccessPolicyExcludeCommonName | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyExcludeCommonNameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyExcludeCommonName | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyExcludeCommonName | cdktf.IResolvable | undefined);
    private _commonName?;
    get commonName(): string;
    set commonName(value: string);
    get commonNameInput(): string;
}
export interface ZeroTrustAccessPolicyExcludeDevicePosture {
    /**
    * The ID of a device posture integration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#integration_uid ZeroTrustAccessPolicy#integration_uid}
    */
    readonly integrationUid: string;
}
export declare function zeroTrustAccessPolicyExcludeDevicePostureToTerraform(struct?: ZeroTrustAccessPolicyExcludeDevicePosture | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyExcludeDevicePostureToHclTerraform(struct?: ZeroTrustAccessPolicyExcludeDevicePosture | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyExcludeDevicePostureOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyExcludeDevicePosture | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyExcludeDevicePosture | cdktf.IResolvable | undefined);
    private _integrationUid?;
    get integrationUid(): string;
    set integrationUid(value: string);
    get integrationUidInput(): string;
}
export interface ZeroTrustAccessPolicyExcludeEmail {
    /**
    * The email of the user.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#email ZeroTrustAccessPolicy#email}
    */
    readonly email: string;
}
export declare function zeroTrustAccessPolicyExcludeEmailToTerraform(struct?: ZeroTrustAccessPolicyExcludeEmail | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyExcludeEmailToHclTerraform(struct?: ZeroTrustAccessPolicyExcludeEmail | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyExcludeEmailOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyExcludeEmail | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyExcludeEmail | cdktf.IResolvable | undefined);
    private _email?;
    get email(): string;
    set email(value: string);
    get emailInput(): string;
}
export interface ZeroTrustAccessPolicyExcludeEmailDomain {
    /**
    * The email domain to match.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#domain ZeroTrustAccessPolicy#domain}
    */
    readonly domain: string;
}
export declare function zeroTrustAccessPolicyExcludeEmailDomainToTerraform(struct?: ZeroTrustAccessPolicyExcludeEmailDomain | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyExcludeEmailDomainToHclTerraform(struct?: ZeroTrustAccessPolicyExcludeEmailDomain | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyExcludeEmailDomainOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyExcludeEmailDomain | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyExcludeEmailDomain | cdktf.IResolvable | undefined);
    private _domain?;
    get domain(): string;
    set domain(value: string);
    get domainInput(): string;
}
export interface ZeroTrustAccessPolicyExcludeEmailListStruct {
    /**
    * The ID of a previously created email list.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#id ZeroTrustAccessPolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
}
export declare function zeroTrustAccessPolicyExcludeEmailListStructToTerraform(struct?: ZeroTrustAccessPolicyExcludeEmailListStruct | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyExcludeEmailListStructToHclTerraform(struct?: ZeroTrustAccessPolicyExcludeEmailListStruct | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyExcludeEmailListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyExcludeEmailListStruct | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyExcludeEmailListStruct | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
}
export interface ZeroTrustAccessPolicyExcludeEveryone {
}
export declare function zeroTrustAccessPolicyExcludeEveryoneToTerraform(struct?: ZeroTrustAccessPolicyExcludeEveryone | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyExcludeEveryoneToHclTerraform(struct?: ZeroTrustAccessPolicyExcludeEveryone | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyExcludeEveryoneOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyExcludeEveryone | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyExcludeEveryone | cdktf.IResolvable | undefined);
}
export interface ZeroTrustAccessPolicyExcludeExternalEvaluation {
    /**
    * The API endpoint containing your business logic.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#evaluate_url ZeroTrustAccessPolicy#evaluate_url}
    */
    readonly evaluateUrl: string;
    /**
    * The API endpoint containing the key that Access uses to verify that the response came from your API.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#keys_url ZeroTrustAccessPolicy#keys_url}
    */
    readonly keysUrl: string;
}
export declare function zeroTrustAccessPolicyExcludeExternalEvaluationToTerraform(struct?: ZeroTrustAccessPolicyExcludeExternalEvaluation | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyExcludeExternalEvaluationToHclTerraform(struct?: ZeroTrustAccessPolicyExcludeExternalEvaluation | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyExcludeExternalEvaluation | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyExcludeExternalEvaluation | cdktf.IResolvable | undefined);
    private _evaluateUrl?;
    get evaluateUrl(): string;
    set evaluateUrl(value: string);
    get evaluateUrlInput(): string;
    private _keysUrl?;
    get keysUrl(): string;
    set keysUrl(value: string);
    get keysUrlInput(): string;
}
export interface ZeroTrustAccessPolicyExcludeGeo {
    /**
    * The country code that should be matched.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#country_code ZeroTrustAccessPolicy#country_code}
    */
    readonly countryCode: string;
}
export declare function zeroTrustAccessPolicyExcludeGeoToTerraform(struct?: ZeroTrustAccessPolicyExcludeGeo | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyExcludeGeoToHclTerraform(struct?: ZeroTrustAccessPolicyExcludeGeo | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyExcludeGeoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyExcludeGeo | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyExcludeGeo | cdktf.IResolvable | undefined);
    private _countryCode?;
    get countryCode(): string;
    set countryCode(value: string);
    get countryCodeInput(): string;
}
export interface ZeroTrustAccessPolicyExcludeGithubOrganization {
    /**
    * The ID of your Github identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}
    */
    readonly identityProviderId: string;
    /**
    * The name of the organization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#name ZeroTrustAccessPolicy#name}
    */
    readonly name: string;
    /**
    * The name of the team
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#team ZeroTrustAccessPolicy#team}
    */
    readonly team?: string;
}
export declare function zeroTrustAccessPolicyExcludeGithubOrganizationToTerraform(struct?: ZeroTrustAccessPolicyExcludeGithubOrganization | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyExcludeGithubOrganizationToHclTerraform(struct?: ZeroTrustAccessPolicyExcludeGithubOrganization | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyExcludeGithubOrganizationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyExcludeGithubOrganization | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyExcludeGithubOrganization | cdktf.IResolvable | undefined);
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
export interface ZeroTrustAccessPolicyExcludeGroup {
    /**
    * The ID of a previously created Access group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#id ZeroTrustAccessPolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
}
export declare function zeroTrustAccessPolicyExcludeGroupToTerraform(struct?: ZeroTrustAccessPolicyExcludeGroup | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyExcludeGroupToHclTerraform(struct?: ZeroTrustAccessPolicyExcludeGroup | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyExcludeGroupOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyExcludeGroup | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyExcludeGroup | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
}
export interface ZeroTrustAccessPolicyExcludeGsuite {
    /**
    * The email of the Google Workspace group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#email ZeroTrustAccessPolicy#email}
    */
    readonly email: string;
    /**
    * The ID of your Google Workspace identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}
    */
    readonly identityProviderId: string;
}
export declare function zeroTrustAccessPolicyExcludeGsuiteToTerraform(struct?: ZeroTrustAccessPolicyExcludeGsuite | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyExcludeGsuiteToHclTerraform(struct?: ZeroTrustAccessPolicyExcludeGsuite | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyExcludeGsuiteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyExcludeGsuite | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyExcludeGsuite | cdktf.IResolvable | undefined);
    private _email?;
    get email(): string;
    set email(value: string);
    get emailInput(): string;
    private _identityProviderId?;
    get identityProviderId(): string;
    set identityProviderId(value: string);
    get identityProviderIdInput(): string;
}
export interface ZeroTrustAccessPolicyExcludeIp {
    /**
    * An IPv4 or IPv6 CIDR block.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#ip ZeroTrustAccessPolicy#ip}
    */
    readonly ip: string;
}
export declare function zeroTrustAccessPolicyExcludeIpToTerraform(struct?: ZeroTrustAccessPolicyExcludeIp | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyExcludeIpToHclTerraform(struct?: ZeroTrustAccessPolicyExcludeIp | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyExcludeIpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyExcludeIp | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyExcludeIp | cdktf.IResolvable | undefined);
    private _ip?;
    get ip(): string;
    set ip(value: string);
    get ipInput(): string;
}
export interface ZeroTrustAccessPolicyExcludeIpListStruct {
    /**
    * The ID of a previously created IP list.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#id ZeroTrustAccessPolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
}
export declare function zeroTrustAccessPolicyExcludeIpListStructToTerraform(struct?: ZeroTrustAccessPolicyExcludeIpListStruct | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyExcludeIpListStructToHclTerraform(struct?: ZeroTrustAccessPolicyExcludeIpListStruct | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyExcludeIpListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyExcludeIpListStruct | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyExcludeIpListStruct | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
}
export interface ZeroTrustAccessPolicyExcludeLinkedAppToken {
    /**
    * The ID of an Access OIDC SaaS application
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#app_uid ZeroTrustAccessPolicy#app_uid}
    */
    readonly appUid: string;
}
export declare function zeroTrustAccessPolicyExcludeLinkedAppTokenToTerraform(struct?: ZeroTrustAccessPolicyExcludeLinkedAppToken | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyExcludeLinkedAppTokenToHclTerraform(struct?: ZeroTrustAccessPolicyExcludeLinkedAppToken | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyExcludeLinkedAppTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyExcludeLinkedAppToken | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyExcludeLinkedAppToken | cdktf.IResolvable | undefined);
    private _appUid?;
    get appUid(): string;
    set appUid(value: string);
    get appUidInput(): string;
}
export interface ZeroTrustAccessPolicyExcludeLoginMethod {
    /**
    * The ID of an identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#id ZeroTrustAccessPolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
}
export declare function zeroTrustAccessPolicyExcludeLoginMethodToTerraform(struct?: ZeroTrustAccessPolicyExcludeLoginMethod | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyExcludeLoginMethodToHclTerraform(struct?: ZeroTrustAccessPolicyExcludeLoginMethod | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyExcludeLoginMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyExcludeLoginMethod | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyExcludeLoginMethod | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
}
export interface ZeroTrustAccessPolicyExcludeOidc {
    /**
    * The name of the OIDC claim.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#claim_name ZeroTrustAccessPolicy#claim_name}
    */
    readonly claimName: string;
    /**
    * The OIDC claim value to look for.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#claim_value ZeroTrustAccessPolicy#claim_value}
    */
    readonly claimValue: string;
    /**
    * The ID of your OIDC identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}
    */
    readonly identityProviderId: string;
}
export declare function zeroTrustAccessPolicyExcludeOidcToTerraform(struct?: ZeroTrustAccessPolicyExcludeOidc | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyExcludeOidcToHclTerraform(struct?: ZeroTrustAccessPolicyExcludeOidc | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyExcludeOidcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyExcludeOidc | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyExcludeOidc | cdktf.IResolvable | undefined);
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
export interface ZeroTrustAccessPolicyExcludeOkta {
    /**
    * The ID of your Okta identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}
    */
    readonly identityProviderId: string;
    /**
    * The name of the Okta group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#name ZeroTrustAccessPolicy#name}
    */
    readonly name: string;
}
export declare function zeroTrustAccessPolicyExcludeOktaToTerraform(struct?: ZeroTrustAccessPolicyExcludeOkta | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyExcludeOktaToHclTerraform(struct?: ZeroTrustAccessPolicyExcludeOkta | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyExcludeOktaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyExcludeOkta | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyExcludeOkta | cdktf.IResolvable | undefined);
    private _identityProviderId?;
    get identityProviderId(): string;
    set identityProviderId(value: string);
    get identityProviderIdInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface ZeroTrustAccessPolicyExcludeSaml {
    /**
    * The name of the SAML attribute.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#attribute_name ZeroTrustAccessPolicy#attribute_name}
    */
    readonly attributeName: string;
    /**
    * The SAML attribute value to look for.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#attribute_value ZeroTrustAccessPolicy#attribute_value}
    */
    readonly attributeValue: string;
    /**
    * The ID of your SAML identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}
    */
    readonly identityProviderId: string;
}
export declare function zeroTrustAccessPolicyExcludeSamlToTerraform(struct?: ZeroTrustAccessPolicyExcludeSaml | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyExcludeSamlToHclTerraform(struct?: ZeroTrustAccessPolicyExcludeSaml | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyExcludeSamlOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyExcludeSaml | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyExcludeSaml | cdktf.IResolvable | undefined);
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
export interface ZeroTrustAccessPolicyExcludeServiceToken {
    /**
    * The ID of a Service Token.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#token_id ZeroTrustAccessPolicy#token_id}
    */
    readonly tokenId: string;
}
export declare function zeroTrustAccessPolicyExcludeServiceTokenToTerraform(struct?: ZeroTrustAccessPolicyExcludeServiceToken | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyExcludeServiceTokenToHclTerraform(struct?: ZeroTrustAccessPolicyExcludeServiceToken | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyExcludeServiceTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyExcludeServiceToken | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyExcludeServiceToken | cdktf.IResolvable | undefined);
    private _tokenId?;
    get tokenId(): string;
    set tokenId(value: string);
    get tokenIdInput(): string;
}
export interface ZeroTrustAccessPolicyExcludeUserRiskScore {
    /**
    * A list of risk score levels to match. Values can be low, medium, high, or unscored.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#user_risk_score ZeroTrustAccessPolicy#user_risk_score}
    */
    readonly userRiskScore: string[];
}
export declare function zeroTrustAccessPolicyExcludeUserRiskScoreToTerraform(struct?: ZeroTrustAccessPolicyExcludeUserRiskScore | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyExcludeUserRiskScoreToHclTerraform(struct?: ZeroTrustAccessPolicyExcludeUserRiskScore | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyExcludeUserRiskScoreOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyExcludeUserRiskScore | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyExcludeUserRiskScore | cdktf.IResolvable | undefined);
    private _userRiskScore?;
    get userRiskScore(): string[];
    set userRiskScore(value: string[]);
    get userRiskScoreInput(): string[];
}
export interface ZeroTrustAccessPolicyExclude {
    /**
    * An empty object which matches on all service tokens.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#any_valid_service_token ZeroTrustAccessPolicy#any_valid_service_token}
    */
    readonly anyValidServiceToken?: ZeroTrustAccessPolicyExcludeAnyValidServiceToken;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#auth_context ZeroTrustAccessPolicy#auth_context}
    */
    readonly authContext?: ZeroTrustAccessPolicyExcludeAuthContext;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#auth_method ZeroTrustAccessPolicy#auth_method}
    */
    readonly authMethod?: ZeroTrustAccessPolicyExcludeAuthMethod;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#azure_ad ZeroTrustAccessPolicy#azure_ad}
    */
    readonly azureAd?: ZeroTrustAccessPolicyExcludeAzureAd;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#certificate ZeroTrustAccessPolicy#certificate}
    */
    readonly certificate?: ZeroTrustAccessPolicyExcludeCertificate;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#common_name ZeroTrustAccessPolicy#common_name}
    */
    readonly commonName?: ZeroTrustAccessPolicyExcludeCommonName;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#device_posture ZeroTrustAccessPolicy#device_posture}
    */
    readonly devicePosture?: ZeroTrustAccessPolicyExcludeDevicePosture;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#email ZeroTrustAccessPolicy#email}
    */
    readonly email?: ZeroTrustAccessPolicyExcludeEmail;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#email_domain ZeroTrustAccessPolicy#email_domain}
    */
    readonly emailDomain?: ZeroTrustAccessPolicyExcludeEmailDomain;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#email_list ZeroTrustAccessPolicy#email_list}
    */
    readonly emailList?: ZeroTrustAccessPolicyExcludeEmailListStruct;
    /**
    * An empty object which matches on all users.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#everyone ZeroTrustAccessPolicy#everyone}
    */
    readonly everyone?: ZeroTrustAccessPolicyExcludeEveryone;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#external_evaluation ZeroTrustAccessPolicy#external_evaluation}
    */
    readonly externalEvaluation?: ZeroTrustAccessPolicyExcludeExternalEvaluation;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#geo ZeroTrustAccessPolicy#geo}
    */
    readonly geo?: ZeroTrustAccessPolicyExcludeGeo;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#github_organization ZeroTrustAccessPolicy#github_organization}
    */
    readonly githubOrganization?: ZeroTrustAccessPolicyExcludeGithubOrganization;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#group ZeroTrustAccessPolicy#group}
    */
    readonly group?: ZeroTrustAccessPolicyExcludeGroup;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#gsuite ZeroTrustAccessPolicy#gsuite}
    */
    readonly gsuite?: ZeroTrustAccessPolicyExcludeGsuite;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#ip ZeroTrustAccessPolicy#ip}
    */
    readonly ip?: ZeroTrustAccessPolicyExcludeIp;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#ip_list ZeroTrustAccessPolicy#ip_list}
    */
    readonly ipList?: ZeroTrustAccessPolicyExcludeIpListStruct;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#linked_app_token ZeroTrustAccessPolicy#linked_app_token}
    */
    readonly linkedAppToken?: ZeroTrustAccessPolicyExcludeLinkedAppToken;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#login_method ZeroTrustAccessPolicy#login_method}
    */
    readonly loginMethod?: ZeroTrustAccessPolicyExcludeLoginMethod;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#oidc ZeroTrustAccessPolicy#oidc}
    */
    readonly oidc?: ZeroTrustAccessPolicyExcludeOidc;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#okta ZeroTrustAccessPolicy#okta}
    */
    readonly okta?: ZeroTrustAccessPolicyExcludeOkta;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#saml ZeroTrustAccessPolicy#saml}
    */
    readonly saml?: ZeroTrustAccessPolicyExcludeSaml;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#service_token ZeroTrustAccessPolicy#service_token}
    */
    readonly serviceToken?: ZeroTrustAccessPolicyExcludeServiceToken;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#user_risk_score ZeroTrustAccessPolicy#user_risk_score}
    */
    readonly userRiskScore?: ZeroTrustAccessPolicyExcludeUserRiskScore;
}
export declare function zeroTrustAccessPolicyExcludeToTerraform(struct?: ZeroTrustAccessPolicyExclude | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyExcludeToHclTerraform(struct?: ZeroTrustAccessPolicyExclude | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyExcludeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ZeroTrustAccessPolicyExclude | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyExclude | cdktf.IResolvable | undefined);
    private _anyValidServiceToken;
    get anyValidServiceToken(): ZeroTrustAccessPolicyExcludeAnyValidServiceTokenOutputReference;
    putAnyValidServiceToken(value: ZeroTrustAccessPolicyExcludeAnyValidServiceToken): void;
    resetAnyValidServiceToken(): void;
    get anyValidServiceTokenInput(): any;
    private _authContext;
    get authContext(): ZeroTrustAccessPolicyExcludeAuthContextOutputReference;
    putAuthContext(value: ZeroTrustAccessPolicyExcludeAuthContext): void;
    resetAuthContext(): void;
    get authContextInput(): any;
    private _authMethod;
    get authMethod(): ZeroTrustAccessPolicyExcludeAuthMethodOutputReference;
    putAuthMethod(value: ZeroTrustAccessPolicyExcludeAuthMethod): void;
    resetAuthMethod(): void;
    get authMethodInput(): any;
    private _azureAd;
    get azureAd(): ZeroTrustAccessPolicyExcludeAzureAdOutputReference;
    putAzureAd(value: ZeroTrustAccessPolicyExcludeAzureAd): void;
    resetAzureAd(): void;
    get azureAdInput(): any;
    private _certificate;
    get certificate(): ZeroTrustAccessPolicyExcludeCertificateOutputReference;
    putCertificate(value: ZeroTrustAccessPolicyExcludeCertificate): void;
    resetCertificate(): void;
    get certificateInput(): any;
    private _commonName;
    get commonName(): ZeroTrustAccessPolicyExcludeCommonNameOutputReference;
    putCommonName(value: ZeroTrustAccessPolicyExcludeCommonName): void;
    resetCommonName(): void;
    get commonNameInput(): any;
    private _devicePosture;
    get devicePosture(): ZeroTrustAccessPolicyExcludeDevicePostureOutputReference;
    putDevicePosture(value: ZeroTrustAccessPolicyExcludeDevicePosture): void;
    resetDevicePosture(): void;
    get devicePostureInput(): any;
    private _email;
    get email(): ZeroTrustAccessPolicyExcludeEmailOutputReference;
    putEmail(value: ZeroTrustAccessPolicyExcludeEmail): void;
    resetEmail(): void;
    get emailInput(): any;
    private _emailDomain;
    get emailDomain(): ZeroTrustAccessPolicyExcludeEmailDomainOutputReference;
    putEmailDomain(value: ZeroTrustAccessPolicyExcludeEmailDomain): void;
    resetEmailDomain(): void;
    get emailDomainInput(): any;
    private _emailList;
    get emailList(): ZeroTrustAccessPolicyExcludeEmailListStructOutputReference;
    putEmailList(value: ZeroTrustAccessPolicyExcludeEmailListStruct): void;
    resetEmailList(): void;
    get emailListInput(): any;
    private _everyone;
    get everyone(): ZeroTrustAccessPolicyExcludeEveryoneOutputReference;
    putEveryone(value: ZeroTrustAccessPolicyExcludeEveryone): void;
    resetEveryone(): void;
    get everyoneInput(): any;
    private _externalEvaluation;
    get externalEvaluation(): ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference;
    putExternalEvaluation(value: ZeroTrustAccessPolicyExcludeExternalEvaluation): void;
    resetExternalEvaluation(): void;
    get externalEvaluationInput(): any;
    private _geo;
    get geo(): ZeroTrustAccessPolicyExcludeGeoOutputReference;
    putGeo(value: ZeroTrustAccessPolicyExcludeGeo): void;
    resetGeo(): void;
    get geoInput(): any;
    private _githubOrganization;
    get githubOrganization(): ZeroTrustAccessPolicyExcludeGithubOrganizationOutputReference;
    putGithubOrganization(value: ZeroTrustAccessPolicyExcludeGithubOrganization): void;
    resetGithubOrganization(): void;
    get githubOrganizationInput(): any;
    private _group;
    get group(): ZeroTrustAccessPolicyExcludeGroupOutputReference;
    putGroup(value: ZeroTrustAccessPolicyExcludeGroup): void;
    resetGroup(): void;
    get groupInput(): any;
    private _gsuite;
    get gsuite(): ZeroTrustAccessPolicyExcludeGsuiteOutputReference;
    putGsuite(value: ZeroTrustAccessPolicyExcludeGsuite): void;
    resetGsuite(): void;
    get gsuiteInput(): any;
    private _ip;
    get ip(): ZeroTrustAccessPolicyExcludeIpOutputReference;
    putIp(value: ZeroTrustAccessPolicyExcludeIp): void;
    resetIp(): void;
    get ipInput(): any;
    private _ipList;
    get ipList(): ZeroTrustAccessPolicyExcludeIpListStructOutputReference;
    putIpList(value: ZeroTrustAccessPolicyExcludeIpListStruct): void;
    resetIpList(): void;
    get ipListInput(): any;
    private _linkedAppToken;
    get linkedAppToken(): ZeroTrustAccessPolicyExcludeLinkedAppTokenOutputReference;
    putLinkedAppToken(value: ZeroTrustAccessPolicyExcludeLinkedAppToken): void;
    resetLinkedAppToken(): void;
    get linkedAppTokenInput(): any;
    private _loginMethod;
    get loginMethod(): ZeroTrustAccessPolicyExcludeLoginMethodOutputReference;
    putLoginMethod(value: ZeroTrustAccessPolicyExcludeLoginMethod): void;
    resetLoginMethod(): void;
    get loginMethodInput(): any;
    private _oidc;
    get oidc(): ZeroTrustAccessPolicyExcludeOidcOutputReference;
    putOidc(value: ZeroTrustAccessPolicyExcludeOidc): void;
    resetOidc(): void;
    get oidcInput(): any;
    private _okta;
    get okta(): ZeroTrustAccessPolicyExcludeOktaOutputReference;
    putOkta(value: ZeroTrustAccessPolicyExcludeOkta): void;
    resetOkta(): void;
    get oktaInput(): any;
    private _saml;
    get saml(): ZeroTrustAccessPolicyExcludeSamlOutputReference;
    putSaml(value: ZeroTrustAccessPolicyExcludeSaml): void;
    resetSaml(): void;
    get samlInput(): any;
    private _serviceToken;
    get serviceToken(): ZeroTrustAccessPolicyExcludeServiceTokenOutputReference;
    putServiceToken(value: ZeroTrustAccessPolicyExcludeServiceToken): void;
    resetServiceToken(): void;
    get serviceTokenInput(): any;
    private _userRiskScore;
    get userRiskScore(): ZeroTrustAccessPolicyExcludeUserRiskScoreOutputReference;
    putUserRiskScore(value: ZeroTrustAccessPolicyExcludeUserRiskScore): void;
    resetUserRiskScore(): void;
    get userRiskScoreInput(): any;
}
export declare class ZeroTrustAccessPolicyExcludeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ZeroTrustAccessPolicyExclude[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ZeroTrustAccessPolicyExcludeOutputReference;
}
export interface ZeroTrustAccessPolicyIncludeAnyValidServiceToken {
}
export declare function zeroTrustAccessPolicyIncludeAnyValidServiceTokenToTerraform(struct?: ZeroTrustAccessPolicyIncludeAnyValidServiceToken | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyIncludeAnyValidServiceTokenToHclTerraform(struct?: ZeroTrustAccessPolicyIncludeAnyValidServiceToken | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyIncludeAnyValidServiceTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyIncludeAnyValidServiceToken | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyIncludeAnyValidServiceToken | cdktf.IResolvable | undefined);
}
export interface ZeroTrustAccessPolicyIncludeAuthContext {
    /**
    * The ACID of an Authentication context.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#ac_id ZeroTrustAccessPolicy#ac_id}
    */
    readonly acId: string;
    /**
    * The ID of an Authentication context.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#id ZeroTrustAccessPolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
    /**
    * The ID of your Azure identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}
    */
    readonly identityProviderId: string;
}
export declare function zeroTrustAccessPolicyIncludeAuthContextToTerraform(struct?: ZeroTrustAccessPolicyIncludeAuthContext | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyIncludeAuthContextToHclTerraform(struct?: ZeroTrustAccessPolicyIncludeAuthContext | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyIncludeAuthContextOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyIncludeAuthContext | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyIncludeAuthContext | cdktf.IResolvable | undefined);
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
export interface ZeroTrustAccessPolicyIncludeAuthMethod {
    /**
    * The type of authentication method https://datatracker.ietf.org/doc/html/rfc8176#section-2.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#auth_method ZeroTrustAccessPolicy#auth_method}
    */
    readonly authMethod: string;
}
export declare function zeroTrustAccessPolicyIncludeAuthMethodToTerraform(struct?: ZeroTrustAccessPolicyIncludeAuthMethod | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyIncludeAuthMethodToHclTerraform(struct?: ZeroTrustAccessPolicyIncludeAuthMethod | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyIncludeAuthMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyIncludeAuthMethod | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyIncludeAuthMethod | cdktf.IResolvable | undefined);
    private _authMethod?;
    get authMethod(): string;
    set authMethod(value: string);
    get authMethodInput(): string;
}
export interface ZeroTrustAccessPolicyIncludeAzureAd {
    /**
    * The ID of an Azure group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#id ZeroTrustAccessPolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
    /**
    * The ID of your Azure identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}
    */
    readonly identityProviderId: string;
}
export declare function zeroTrustAccessPolicyIncludeAzureAdToTerraform(struct?: ZeroTrustAccessPolicyIncludeAzureAd | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyIncludeAzureAdToHclTerraform(struct?: ZeroTrustAccessPolicyIncludeAzureAd | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyIncludeAzureAdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyIncludeAzureAd | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyIncludeAzureAd | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    private _identityProviderId?;
    get identityProviderId(): string;
    set identityProviderId(value: string);
    get identityProviderIdInput(): string;
}
export interface ZeroTrustAccessPolicyIncludeCertificate {
}
export declare function zeroTrustAccessPolicyIncludeCertificateToTerraform(struct?: ZeroTrustAccessPolicyIncludeCertificate | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyIncludeCertificateToHclTerraform(struct?: ZeroTrustAccessPolicyIncludeCertificate | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyIncludeCertificateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyIncludeCertificate | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyIncludeCertificate | cdktf.IResolvable | undefined);
}
export interface ZeroTrustAccessPolicyIncludeCommonName {
    /**
    * The common name to match.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#common_name ZeroTrustAccessPolicy#common_name}
    */
    readonly commonName: string;
}
export declare function zeroTrustAccessPolicyIncludeCommonNameToTerraform(struct?: ZeroTrustAccessPolicyIncludeCommonName | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyIncludeCommonNameToHclTerraform(struct?: ZeroTrustAccessPolicyIncludeCommonName | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyIncludeCommonNameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyIncludeCommonName | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyIncludeCommonName | cdktf.IResolvable | undefined);
    private _commonName?;
    get commonName(): string;
    set commonName(value: string);
    get commonNameInput(): string;
}
export interface ZeroTrustAccessPolicyIncludeDevicePosture {
    /**
    * The ID of a device posture integration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#integration_uid ZeroTrustAccessPolicy#integration_uid}
    */
    readonly integrationUid: string;
}
export declare function zeroTrustAccessPolicyIncludeDevicePostureToTerraform(struct?: ZeroTrustAccessPolicyIncludeDevicePosture | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyIncludeDevicePostureToHclTerraform(struct?: ZeroTrustAccessPolicyIncludeDevicePosture | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyIncludeDevicePostureOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyIncludeDevicePosture | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyIncludeDevicePosture | cdktf.IResolvable | undefined);
    private _integrationUid?;
    get integrationUid(): string;
    set integrationUid(value: string);
    get integrationUidInput(): string;
}
export interface ZeroTrustAccessPolicyIncludeEmail {
    /**
    * The email of the user.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#email ZeroTrustAccessPolicy#email}
    */
    readonly email: string;
}
export declare function zeroTrustAccessPolicyIncludeEmailToTerraform(struct?: ZeroTrustAccessPolicyIncludeEmail | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyIncludeEmailToHclTerraform(struct?: ZeroTrustAccessPolicyIncludeEmail | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyIncludeEmailOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyIncludeEmail | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyIncludeEmail | cdktf.IResolvable | undefined);
    private _email?;
    get email(): string;
    set email(value: string);
    get emailInput(): string;
}
export interface ZeroTrustAccessPolicyIncludeEmailDomain {
    /**
    * The email domain to match.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#domain ZeroTrustAccessPolicy#domain}
    */
    readonly domain: string;
}
export declare function zeroTrustAccessPolicyIncludeEmailDomainToTerraform(struct?: ZeroTrustAccessPolicyIncludeEmailDomain | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyIncludeEmailDomainToHclTerraform(struct?: ZeroTrustAccessPolicyIncludeEmailDomain | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyIncludeEmailDomainOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyIncludeEmailDomain | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyIncludeEmailDomain | cdktf.IResolvable | undefined);
    private _domain?;
    get domain(): string;
    set domain(value: string);
    get domainInput(): string;
}
export interface ZeroTrustAccessPolicyIncludeEmailListStruct {
    /**
    * The ID of a previously created email list.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#id ZeroTrustAccessPolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
}
export declare function zeroTrustAccessPolicyIncludeEmailListStructToTerraform(struct?: ZeroTrustAccessPolicyIncludeEmailListStruct | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyIncludeEmailListStructToHclTerraform(struct?: ZeroTrustAccessPolicyIncludeEmailListStruct | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyIncludeEmailListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyIncludeEmailListStruct | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyIncludeEmailListStruct | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
}
export interface ZeroTrustAccessPolicyIncludeEveryone {
}
export declare function zeroTrustAccessPolicyIncludeEveryoneToTerraform(struct?: ZeroTrustAccessPolicyIncludeEveryone | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyIncludeEveryoneToHclTerraform(struct?: ZeroTrustAccessPolicyIncludeEveryone | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyIncludeEveryoneOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyIncludeEveryone | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyIncludeEveryone | cdktf.IResolvable | undefined);
}
export interface ZeroTrustAccessPolicyIncludeExternalEvaluation {
    /**
    * The API endpoint containing your business logic.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#evaluate_url ZeroTrustAccessPolicy#evaluate_url}
    */
    readonly evaluateUrl: string;
    /**
    * The API endpoint containing the key that Access uses to verify that the response came from your API.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#keys_url ZeroTrustAccessPolicy#keys_url}
    */
    readonly keysUrl: string;
}
export declare function zeroTrustAccessPolicyIncludeExternalEvaluationToTerraform(struct?: ZeroTrustAccessPolicyIncludeExternalEvaluation | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyIncludeExternalEvaluationToHclTerraform(struct?: ZeroTrustAccessPolicyIncludeExternalEvaluation | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyIncludeExternalEvaluation | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyIncludeExternalEvaluation | cdktf.IResolvable | undefined);
    private _evaluateUrl?;
    get evaluateUrl(): string;
    set evaluateUrl(value: string);
    get evaluateUrlInput(): string;
    private _keysUrl?;
    get keysUrl(): string;
    set keysUrl(value: string);
    get keysUrlInput(): string;
}
export interface ZeroTrustAccessPolicyIncludeGeo {
    /**
    * The country code that should be matched.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#country_code ZeroTrustAccessPolicy#country_code}
    */
    readonly countryCode: string;
}
export declare function zeroTrustAccessPolicyIncludeGeoToTerraform(struct?: ZeroTrustAccessPolicyIncludeGeo | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyIncludeGeoToHclTerraform(struct?: ZeroTrustAccessPolicyIncludeGeo | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyIncludeGeoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyIncludeGeo | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyIncludeGeo | cdktf.IResolvable | undefined);
    private _countryCode?;
    get countryCode(): string;
    set countryCode(value: string);
    get countryCodeInput(): string;
}
export interface ZeroTrustAccessPolicyIncludeGithubOrganization {
    /**
    * The ID of your Github identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}
    */
    readonly identityProviderId: string;
    /**
    * The name of the organization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#name ZeroTrustAccessPolicy#name}
    */
    readonly name: string;
    /**
    * The name of the team
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#team ZeroTrustAccessPolicy#team}
    */
    readonly team?: string;
}
export declare function zeroTrustAccessPolicyIncludeGithubOrganizationToTerraform(struct?: ZeroTrustAccessPolicyIncludeGithubOrganization | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyIncludeGithubOrganizationToHclTerraform(struct?: ZeroTrustAccessPolicyIncludeGithubOrganization | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyIncludeGithubOrganizationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyIncludeGithubOrganization | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyIncludeGithubOrganization | cdktf.IResolvable | undefined);
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
export interface ZeroTrustAccessPolicyIncludeGroup {
    /**
    * The ID of a previously created Access group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#id ZeroTrustAccessPolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
}
export declare function zeroTrustAccessPolicyIncludeGroupToTerraform(struct?: ZeroTrustAccessPolicyIncludeGroup | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyIncludeGroupToHclTerraform(struct?: ZeroTrustAccessPolicyIncludeGroup | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyIncludeGroupOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyIncludeGroup | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyIncludeGroup | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
}
export interface ZeroTrustAccessPolicyIncludeGsuite {
    /**
    * The email of the Google Workspace group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#email ZeroTrustAccessPolicy#email}
    */
    readonly email: string;
    /**
    * The ID of your Google Workspace identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}
    */
    readonly identityProviderId: string;
}
export declare function zeroTrustAccessPolicyIncludeGsuiteToTerraform(struct?: ZeroTrustAccessPolicyIncludeGsuite | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyIncludeGsuiteToHclTerraform(struct?: ZeroTrustAccessPolicyIncludeGsuite | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyIncludeGsuiteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyIncludeGsuite | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyIncludeGsuite | cdktf.IResolvable | undefined);
    private _email?;
    get email(): string;
    set email(value: string);
    get emailInput(): string;
    private _identityProviderId?;
    get identityProviderId(): string;
    set identityProviderId(value: string);
    get identityProviderIdInput(): string;
}
export interface ZeroTrustAccessPolicyIncludeIp {
    /**
    * An IPv4 or IPv6 CIDR block.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#ip ZeroTrustAccessPolicy#ip}
    */
    readonly ip: string;
}
export declare function zeroTrustAccessPolicyIncludeIpToTerraform(struct?: ZeroTrustAccessPolicyIncludeIp | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyIncludeIpToHclTerraform(struct?: ZeroTrustAccessPolicyIncludeIp | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyIncludeIpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyIncludeIp | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyIncludeIp | cdktf.IResolvable | undefined);
    private _ip?;
    get ip(): string;
    set ip(value: string);
    get ipInput(): string;
}
export interface ZeroTrustAccessPolicyIncludeIpListStruct {
    /**
    * The ID of a previously created IP list.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#id ZeroTrustAccessPolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
}
export declare function zeroTrustAccessPolicyIncludeIpListStructToTerraform(struct?: ZeroTrustAccessPolicyIncludeIpListStruct | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyIncludeIpListStructToHclTerraform(struct?: ZeroTrustAccessPolicyIncludeIpListStruct | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyIncludeIpListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyIncludeIpListStruct | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyIncludeIpListStruct | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
}
export interface ZeroTrustAccessPolicyIncludeLinkedAppToken {
    /**
    * The ID of an Access OIDC SaaS application
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#app_uid ZeroTrustAccessPolicy#app_uid}
    */
    readonly appUid: string;
}
export declare function zeroTrustAccessPolicyIncludeLinkedAppTokenToTerraform(struct?: ZeroTrustAccessPolicyIncludeLinkedAppToken | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyIncludeLinkedAppTokenToHclTerraform(struct?: ZeroTrustAccessPolicyIncludeLinkedAppToken | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyIncludeLinkedAppTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyIncludeLinkedAppToken | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyIncludeLinkedAppToken | cdktf.IResolvable | undefined);
    private _appUid?;
    get appUid(): string;
    set appUid(value: string);
    get appUidInput(): string;
}
export interface ZeroTrustAccessPolicyIncludeLoginMethod {
    /**
    * The ID of an identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#id ZeroTrustAccessPolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
}
export declare function zeroTrustAccessPolicyIncludeLoginMethodToTerraform(struct?: ZeroTrustAccessPolicyIncludeLoginMethod | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyIncludeLoginMethodToHclTerraform(struct?: ZeroTrustAccessPolicyIncludeLoginMethod | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyIncludeLoginMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyIncludeLoginMethod | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyIncludeLoginMethod | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
}
export interface ZeroTrustAccessPolicyIncludeOidc {
    /**
    * The name of the OIDC claim.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#claim_name ZeroTrustAccessPolicy#claim_name}
    */
    readonly claimName: string;
    /**
    * The OIDC claim value to look for.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#claim_value ZeroTrustAccessPolicy#claim_value}
    */
    readonly claimValue: string;
    /**
    * The ID of your OIDC identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}
    */
    readonly identityProviderId: string;
}
export declare function zeroTrustAccessPolicyIncludeOidcToTerraform(struct?: ZeroTrustAccessPolicyIncludeOidc | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyIncludeOidcToHclTerraform(struct?: ZeroTrustAccessPolicyIncludeOidc | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyIncludeOidcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyIncludeOidc | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyIncludeOidc | cdktf.IResolvable | undefined);
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
export interface ZeroTrustAccessPolicyIncludeOkta {
    /**
    * The ID of your Okta identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}
    */
    readonly identityProviderId: string;
    /**
    * The name of the Okta group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#name ZeroTrustAccessPolicy#name}
    */
    readonly name: string;
}
export declare function zeroTrustAccessPolicyIncludeOktaToTerraform(struct?: ZeroTrustAccessPolicyIncludeOkta | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyIncludeOktaToHclTerraform(struct?: ZeroTrustAccessPolicyIncludeOkta | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyIncludeOktaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyIncludeOkta | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyIncludeOkta | cdktf.IResolvable | undefined);
    private _identityProviderId?;
    get identityProviderId(): string;
    set identityProviderId(value: string);
    get identityProviderIdInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface ZeroTrustAccessPolicyIncludeSaml {
    /**
    * The name of the SAML attribute.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#attribute_name ZeroTrustAccessPolicy#attribute_name}
    */
    readonly attributeName: string;
    /**
    * The SAML attribute value to look for.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#attribute_value ZeroTrustAccessPolicy#attribute_value}
    */
    readonly attributeValue: string;
    /**
    * The ID of your SAML identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}
    */
    readonly identityProviderId: string;
}
export declare function zeroTrustAccessPolicyIncludeSamlToTerraform(struct?: ZeroTrustAccessPolicyIncludeSaml | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyIncludeSamlToHclTerraform(struct?: ZeroTrustAccessPolicyIncludeSaml | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyIncludeSamlOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyIncludeSaml | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyIncludeSaml | cdktf.IResolvable | undefined);
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
export interface ZeroTrustAccessPolicyIncludeServiceToken {
    /**
    * The ID of a Service Token.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#token_id ZeroTrustAccessPolicy#token_id}
    */
    readonly tokenId: string;
}
export declare function zeroTrustAccessPolicyIncludeServiceTokenToTerraform(struct?: ZeroTrustAccessPolicyIncludeServiceToken | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyIncludeServiceTokenToHclTerraform(struct?: ZeroTrustAccessPolicyIncludeServiceToken | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyIncludeServiceTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyIncludeServiceToken | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyIncludeServiceToken | cdktf.IResolvable | undefined);
    private _tokenId?;
    get tokenId(): string;
    set tokenId(value: string);
    get tokenIdInput(): string;
}
export interface ZeroTrustAccessPolicyIncludeUserRiskScore {
    /**
    * A list of risk score levels to match. Values can be low, medium, high, or unscored.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#user_risk_score ZeroTrustAccessPolicy#user_risk_score}
    */
    readonly userRiskScore: string[];
}
export declare function zeroTrustAccessPolicyIncludeUserRiskScoreToTerraform(struct?: ZeroTrustAccessPolicyIncludeUserRiskScore | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyIncludeUserRiskScoreToHclTerraform(struct?: ZeroTrustAccessPolicyIncludeUserRiskScore | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyIncludeUserRiskScoreOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyIncludeUserRiskScore | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyIncludeUserRiskScore | cdktf.IResolvable | undefined);
    private _userRiskScore?;
    get userRiskScore(): string[];
    set userRiskScore(value: string[]);
    get userRiskScoreInput(): string[];
}
export interface ZeroTrustAccessPolicyInclude {
    /**
    * An empty object which matches on all service tokens.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#any_valid_service_token ZeroTrustAccessPolicy#any_valid_service_token}
    */
    readonly anyValidServiceToken?: ZeroTrustAccessPolicyIncludeAnyValidServiceToken;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#auth_context ZeroTrustAccessPolicy#auth_context}
    */
    readonly authContext?: ZeroTrustAccessPolicyIncludeAuthContext;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#auth_method ZeroTrustAccessPolicy#auth_method}
    */
    readonly authMethod?: ZeroTrustAccessPolicyIncludeAuthMethod;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#azure_ad ZeroTrustAccessPolicy#azure_ad}
    */
    readonly azureAd?: ZeroTrustAccessPolicyIncludeAzureAd;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#certificate ZeroTrustAccessPolicy#certificate}
    */
    readonly certificate?: ZeroTrustAccessPolicyIncludeCertificate;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#common_name ZeroTrustAccessPolicy#common_name}
    */
    readonly commonName?: ZeroTrustAccessPolicyIncludeCommonName;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#device_posture ZeroTrustAccessPolicy#device_posture}
    */
    readonly devicePosture?: ZeroTrustAccessPolicyIncludeDevicePosture;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#email ZeroTrustAccessPolicy#email}
    */
    readonly email?: ZeroTrustAccessPolicyIncludeEmail;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#email_domain ZeroTrustAccessPolicy#email_domain}
    */
    readonly emailDomain?: ZeroTrustAccessPolicyIncludeEmailDomain;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#email_list ZeroTrustAccessPolicy#email_list}
    */
    readonly emailList?: ZeroTrustAccessPolicyIncludeEmailListStruct;
    /**
    * An empty object which matches on all users.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#everyone ZeroTrustAccessPolicy#everyone}
    */
    readonly everyone?: ZeroTrustAccessPolicyIncludeEveryone;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#external_evaluation ZeroTrustAccessPolicy#external_evaluation}
    */
    readonly externalEvaluation?: ZeroTrustAccessPolicyIncludeExternalEvaluation;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#geo ZeroTrustAccessPolicy#geo}
    */
    readonly geo?: ZeroTrustAccessPolicyIncludeGeo;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#github_organization ZeroTrustAccessPolicy#github_organization}
    */
    readonly githubOrganization?: ZeroTrustAccessPolicyIncludeGithubOrganization;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#group ZeroTrustAccessPolicy#group}
    */
    readonly group?: ZeroTrustAccessPolicyIncludeGroup;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#gsuite ZeroTrustAccessPolicy#gsuite}
    */
    readonly gsuite?: ZeroTrustAccessPolicyIncludeGsuite;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#ip ZeroTrustAccessPolicy#ip}
    */
    readonly ip?: ZeroTrustAccessPolicyIncludeIp;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#ip_list ZeroTrustAccessPolicy#ip_list}
    */
    readonly ipList?: ZeroTrustAccessPolicyIncludeIpListStruct;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#linked_app_token ZeroTrustAccessPolicy#linked_app_token}
    */
    readonly linkedAppToken?: ZeroTrustAccessPolicyIncludeLinkedAppToken;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#login_method ZeroTrustAccessPolicy#login_method}
    */
    readonly loginMethod?: ZeroTrustAccessPolicyIncludeLoginMethod;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#oidc ZeroTrustAccessPolicy#oidc}
    */
    readonly oidc?: ZeroTrustAccessPolicyIncludeOidc;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#okta ZeroTrustAccessPolicy#okta}
    */
    readonly okta?: ZeroTrustAccessPolicyIncludeOkta;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#saml ZeroTrustAccessPolicy#saml}
    */
    readonly saml?: ZeroTrustAccessPolicyIncludeSaml;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#service_token ZeroTrustAccessPolicy#service_token}
    */
    readonly serviceToken?: ZeroTrustAccessPolicyIncludeServiceToken;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#user_risk_score ZeroTrustAccessPolicy#user_risk_score}
    */
    readonly userRiskScore?: ZeroTrustAccessPolicyIncludeUserRiskScore;
}
export declare function zeroTrustAccessPolicyIncludeToTerraform(struct?: ZeroTrustAccessPolicyInclude | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyIncludeToHclTerraform(struct?: ZeroTrustAccessPolicyInclude | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyIncludeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ZeroTrustAccessPolicyInclude | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyInclude | cdktf.IResolvable | undefined);
    private _anyValidServiceToken;
    get anyValidServiceToken(): ZeroTrustAccessPolicyIncludeAnyValidServiceTokenOutputReference;
    putAnyValidServiceToken(value: ZeroTrustAccessPolicyIncludeAnyValidServiceToken): void;
    resetAnyValidServiceToken(): void;
    get anyValidServiceTokenInput(): any;
    private _authContext;
    get authContext(): ZeroTrustAccessPolicyIncludeAuthContextOutputReference;
    putAuthContext(value: ZeroTrustAccessPolicyIncludeAuthContext): void;
    resetAuthContext(): void;
    get authContextInput(): any;
    private _authMethod;
    get authMethod(): ZeroTrustAccessPolicyIncludeAuthMethodOutputReference;
    putAuthMethod(value: ZeroTrustAccessPolicyIncludeAuthMethod): void;
    resetAuthMethod(): void;
    get authMethodInput(): any;
    private _azureAd;
    get azureAd(): ZeroTrustAccessPolicyIncludeAzureAdOutputReference;
    putAzureAd(value: ZeroTrustAccessPolicyIncludeAzureAd): void;
    resetAzureAd(): void;
    get azureAdInput(): any;
    private _certificate;
    get certificate(): ZeroTrustAccessPolicyIncludeCertificateOutputReference;
    putCertificate(value: ZeroTrustAccessPolicyIncludeCertificate): void;
    resetCertificate(): void;
    get certificateInput(): any;
    private _commonName;
    get commonName(): ZeroTrustAccessPolicyIncludeCommonNameOutputReference;
    putCommonName(value: ZeroTrustAccessPolicyIncludeCommonName): void;
    resetCommonName(): void;
    get commonNameInput(): any;
    private _devicePosture;
    get devicePosture(): ZeroTrustAccessPolicyIncludeDevicePostureOutputReference;
    putDevicePosture(value: ZeroTrustAccessPolicyIncludeDevicePosture): void;
    resetDevicePosture(): void;
    get devicePostureInput(): any;
    private _email;
    get email(): ZeroTrustAccessPolicyIncludeEmailOutputReference;
    putEmail(value: ZeroTrustAccessPolicyIncludeEmail): void;
    resetEmail(): void;
    get emailInput(): any;
    private _emailDomain;
    get emailDomain(): ZeroTrustAccessPolicyIncludeEmailDomainOutputReference;
    putEmailDomain(value: ZeroTrustAccessPolicyIncludeEmailDomain): void;
    resetEmailDomain(): void;
    get emailDomainInput(): any;
    private _emailList;
    get emailList(): ZeroTrustAccessPolicyIncludeEmailListStructOutputReference;
    putEmailList(value: ZeroTrustAccessPolicyIncludeEmailListStruct): void;
    resetEmailList(): void;
    get emailListInput(): any;
    private _everyone;
    get everyone(): ZeroTrustAccessPolicyIncludeEveryoneOutputReference;
    putEveryone(value: ZeroTrustAccessPolicyIncludeEveryone): void;
    resetEveryone(): void;
    get everyoneInput(): any;
    private _externalEvaluation;
    get externalEvaluation(): ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference;
    putExternalEvaluation(value: ZeroTrustAccessPolicyIncludeExternalEvaluation): void;
    resetExternalEvaluation(): void;
    get externalEvaluationInput(): any;
    private _geo;
    get geo(): ZeroTrustAccessPolicyIncludeGeoOutputReference;
    putGeo(value: ZeroTrustAccessPolicyIncludeGeo): void;
    resetGeo(): void;
    get geoInput(): any;
    private _githubOrganization;
    get githubOrganization(): ZeroTrustAccessPolicyIncludeGithubOrganizationOutputReference;
    putGithubOrganization(value: ZeroTrustAccessPolicyIncludeGithubOrganization): void;
    resetGithubOrganization(): void;
    get githubOrganizationInput(): any;
    private _group;
    get group(): ZeroTrustAccessPolicyIncludeGroupOutputReference;
    putGroup(value: ZeroTrustAccessPolicyIncludeGroup): void;
    resetGroup(): void;
    get groupInput(): any;
    private _gsuite;
    get gsuite(): ZeroTrustAccessPolicyIncludeGsuiteOutputReference;
    putGsuite(value: ZeroTrustAccessPolicyIncludeGsuite): void;
    resetGsuite(): void;
    get gsuiteInput(): any;
    private _ip;
    get ip(): ZeroTrustAccessPolicyIncludeIpOutputReference;
    putIp(value: ZeroTrustAccessPolicyIncludeIp): void;
    resetIp(): void;
    get ipInput(): any;
    private _ipList;
    get ipList(): ZeroTrustAccessPolicyIncludeIpListStructOutputReference;
    putIpList(value: ZeroTrustAccessPolicyIncludeIpListStruct): void;
    resetIpList(): void;
    get ipListInput(): any;
    private _linkedAppToken;
    get linkedAppToken(): ZeroTrustAccessPolicyIncludeLinkedAppTokenOutputReference;
    putLinkedAppToken(value: ZeroTrustAccessPolicyIncludeLinkedAppToken): void;
    resetLinkedAppToken(): void;
    get linkedAppTokenInput(): any;
    private _loginMethod;
    get loginMethod(): ZeroTrustAccessPolicyIncludeLoginMethodOutputReference;
    putLoginMethod(value: ZeroTrustAccessPolicyIncludeLoginMethod): void;
    resetLoginMethod(): void;
    get loginMethodInput(): any;
    private _oidc;
    get oidc(): ZeroTrustAccessPolicyIncludeOidcOutputReference;
    putOidc(value: ZeroTrustAccessPolicyIncludeOidc): void;
    resetOidc(): void;
    get oidcInput(): any;
    private _okta;
    get okta(): ZeroTrustAccessPolicyIncludeOktaOutputReference;
    putOkta(value: ZeroTrustAccessPolicyIncludeOkta): void;
    resetOkta(): void;
    get oktaInput(): any;
    private _saml;
    get saml(): ZeroTrustAccessPolicyIncludeSamlOutputReference;
    putSaml(value: ZeroTrustAccessPolicyIncludeSaml): void;
    resetSaml(): void;
    get samlInput(): any;
    private _serviceToken;
    get serviceToken(): ZeroTrustAccessPolicyIncludeServiceTokenOutputReference;
    putServiceToken(value: ZeroTrustAccessPolicyIncludeServiceToken): void;
    resetServiceToken(): void;
    get serviceTokenInput(): any;
    private _userRiskScore;
    get userRiskScore(): ZeroTrustAccessPolicyIncludeUserRiskScoreOutputReference;
    putUserRiskScore(value: ZeroTrustAccessPolicyIncludeUserRiskScore): void;
    resetUserRiskScore(): void;
    get userRiskScoreInput(): any;
}
export declare class ZeroTrustAccessPolicyIncludeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ZeroTrustAccessPolicyInclude[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ZeroTrustAccessPolicyIncludeOutputReference;
}
export interface ZeroTrustAccessPolicyMfaConfig {
    /**
    * Lists the MFA methods that users can authenticate with.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#allowed_authenticators ZeroTrustAccessPolicy#allowed_authenticators}
    */
    readonly allowedAuthenticators?: string[];
    /**
    * Indicates whether to disable MFA for this resource. This option is available at the application and policy level.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#mfa_disabled ZeroTrustAccessPolicy#mfa_disabled}
    */
    readonly mfaDisabled?: boolean | cdktf.IResolvable;
    /**
    * Defines the duration of an MFA session. Must be in minutes (m) or hours (h). Minimum: 0m. Maximum: 720h (30 days). Examples:`5m` or `24h`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#session_duration ZeroTrustAccessPolicy#session_duration}
    */
    readonly sessionDuration?: string;
}
export declare function zeroTrustAccessPolicyMfaConfigToTerraform(struct?: ZeroTrustAccessPolicyMfaConfig | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyMfaConfigToHclTerraform(struct?: ZeroTrustAccessPolicyMfaConfig | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyMfaConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyMfaConfig | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyMfaConfig | cdktf.IResolvable | undefined);
    private _allowedAuthenticators?;
    get allowedAuthenticators(): string[];
    set allowedAuthenticators(value: string[]);
    resetAllowedAuthenticators(): void;
    get allowedAuthenticatorsInput(): string[];
    private _mfaDisabled?;
    get mfaDisabled(): boolean | cdktf.IResolvable;
    set mfaDisabled(value: boolean | cdktf.IResolvable);
    resetMfaDisabled(): void;
    get mfaDisabledInput(): any;
    private _sessionDuration?;
    get sessionDuration(): string;
    set sessionDuration(value: string);
    resetSessionDuration(): void;
    get sessionDurationInput(): string;
}
export interface ZeroTrustAccessPolicyRequireAnyValidServiceToken {
}
export declare function zeroTrustAccessPolicyRequireAnyValidServiceTokenToTerraform(struct?: ZeroTrustAccessPolicyRequireAnyValidServiceToken | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyRequireAnyValidServiceTokenToHclTerraform(struct?: ZeroTrustAccessPolicyRequireAnyValidServiceToken | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyRequireAnyValidServiceTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyRequireAnyValidServiceToken | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyRequireAnyValidServiceToken | cdktf.IResolvable | undefined);
}
export interface ZeroTrustAccessPolicyRequireAuthContext {
    /**
    * The ACID of an Authentication context.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#ac_id ZeroTrustAccessPolicy#ac_id}
    */
    readonly acId: string;
    /**
    * The ID of an Authentication context.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#id ZeroTrustAccessPolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
    /**
    * The ID of your Azure identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}
    */
    readonly identityProviderId: string;
}
export declare function zeroTrustAccessPolicyRequireAuthContextToTerraform(struct?: ZeroTrustAccessPolicyRequireAuthContext | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyRequireAuthContextToHclTerraform(struct?: ZeroTrustAccessPolicyRequireAuthContext | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyRequireAuthContextOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyRequireAuthContext | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyRequireAuthContext | cdktf.IResolvable | undefined);
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
export interface ZeroTrustAccessPolicyRequireAuthMethod {
    /**
    * The type of authentication method https://datatracker.ietf.org/doc/html/rfc8176#section-2.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#auth_method ZeroTrustAccessPolicy#auth_method}
    */
    readonly authMethod: string;
}
export declare function zeroTrustAccessPolicyRequireAuthMethodToTerraform(struct?: ZeroTrustAccessPolicyRequireAuthMethod | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyRequireAuthMethodToHclTerraform(struct?: ZeroTrustAccessPolicyRequireAuthMethod | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyRequireAuthMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyRequireAuthMethod | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyRequireAuthMethod | cdktf.IResolvable | undefined);
    private _authMethod?;
    get authMethod(): string;
    set authMethod(value: string);
    get authMethodInput(): string;
}
export interface ZeroTrustAccessPolicyRequireAzureAd {
    /**
    * The ID of an Azure group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#id ZeroTrustAccessPolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
    /**
    * The ID of your Azure identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}
    */
    readonly identityProviderId: string;
}
export declare function zeroTrustAccessPolicyRequireAzureAdToTerraform(struct?: ZeroTrustAccessPolicyRequireAzureAd | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyRequireAzureAdToHclTerraform(struct?: ZeroTrustAccessPolicyRequireAzureAd | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyRequireAzureAdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyRequireAzureAd | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyRequireAzureAd | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    private _identityProviderId?;
    get identityProviderId(): string;
    set identityProviderId(value: string);
    get identityProviderIdInput(): string;
}
export interface ZeroTrustAccessPolicyRequireCertificate {
}
export declare function zeroTrustAccessPolicyRequireCertificateToTerraform(struct?: ZeroTrustAccessPolicyRequireCertificate | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyRequireCertificateToHclTerraform(struct?: ZeroTrustAccessPolicyRequireCertificate | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyRequireCertificateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyRequireCertificate | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyRequireCertificate | cdktf.IResolvable | undefined);
}
export interface ZeroTrustAccessPolicyRequireCommonName {
    /**
    * The common name to match.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#common_name ZeroTrustAccessPolicy#common_name}
    */
    readonly commonName: string;
}
export declare function zeroTrustAccessPolicyRequireCommonNameToTerraform(struct?: ZeroTrustAccessPolicyRequireCommonName | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyRequireCommonNameToHclTerraform(struct?: ZeroTrustAccessPolicyRequireCommonName | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyRequireCommonNameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyRequireCommonName | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyRequireCommonName | cdktf.IResolvable | undefined);
    private _commonName?;
    get commonName(): string;
    set commonName(value: string);
    get commonNameInput(): string;
}
export interface ZeroTrustAccessPolicyRequireDevicePosture {
    /**
    * The ID of a device posture integration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#integration_uid ZeroTrustAccessPolicy#integration_uid}
    */
    readonly integrationUid: string;
}
export declare function zeroTrustAccessPolicyRequireDevicePostureToTerraform(struct?: ZeroTrustAccessPolicyRequireDevicePosture | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyRequireDevicePostureToHclTerraform(struct?: ZeroTrustAccessPolicyRequireDevicePosture | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyRequireDevicePostureOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyRequireDevicePosture | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyRequireDevicePosture | cdktf.IResolvable | undefined);
    private _integrationUid?;
    get integrationUid(): string;
    set integrationUid(value: string);
    get integrationUidInput(): string;
}
export interface ZeroTrustAccessPolicyRequireEmail {
    /**
    * The email of the user.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#email ZeroTrustAccessPolicy#email}
    */
    readonly email: string;
}
export declare function zeroTrustAccessPolicyRequireEmailToTerraform(struct?: ZeroTrustAccessPolicyRequireEmail | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyRequireEmailToHclTerraform(struct?: ZeroTrustAccessPolicyRequireEmail | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyRequireEmailOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyRequireEmail | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyRequireEmail | cdktf.IResolvable | undefined);
    private _email?;
    get email(): string;
    set email(value: string);
    get emailInput(): string;
}
export interface ZeroTrustAccessPolicyRequireEmailDomain {
    /**
    * The email domain to match.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#domain ZeroTrustAccessPolicy#domain}
    */
    readonly domain: string;
}
export declare function zeroTrustAccessPolicyRequireEmailDomainToTerraform(struct?: ZeroTrustAccessPolicyRequireEmailDomain | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyRequireEmailDomainToHclTerraform(struct?: ZeroTrustAccessPolicyRequireEmailDomain | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyRequireEmailDomainOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyRequireEmailDomain | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyRequireEmailDomain | cdktf.IResolvable | undefined);
    private _domain?;
    get domain(): string;
    set domain(value: string);
    get domainInput(): string;
}
export interface ZeroTrustAccessPolicyRequireEmailListStruct {
    /**
    * The ID of a previously created email list.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#id ZeroTrustAccessPolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
}
export declare function zeroTrustAccessPolicyRequireEmailListStructToTerraform(struct?: ZeroTrustAccessPolicyRequireEmailListStruct | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyRequireEmailListStructToHclTerraform(struct?: ZeroTrustAccessPolicyRequireEmailListStruct | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyRequireEmailListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyRequireEmailListStruct | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyRequireEmailListStruct | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
}
export interface ZeroTrustAccessPolicyRequireEveryone {
}
export declare function zeroTrustAccessPolicyRequireEveryoneToTerraform(struct?: ZeroTrustAccessPolicyRequireEveryone | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyRequireEveryoneToHclTerraform(struct?: ZeroTrustAccessPolicyRequireEveryone | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyRequireEveryoneOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyRequireEveryone | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyRequireEveryone | cdktf.IResolvable | undefined);
}
export interface ZeroTrustAccessPolicyRequireExternalEvaluation {
    /**
    * The API endpoint containing your business logic.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#evaluate_url ZeroTrustAccessPolicy#evaluate_url}
    */
    readonly evaluateUrl: string;
    /**
    * The API endpoint containing the key that Access uses to verify that the response came from your API.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#keys_url ZeroTrustAccessPolicy#keys_url}
    */
    readonly keysUrl: string;
}
export declare function zeroTrustAccessPolicyRequireExternalEvaluationToTerraform(struct?: ZeroTrustAccessPolicyRequireExternalEvaluation | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyRequireExternalEvaluationToHclTerraform(struct?: ZeroTrustAccessPolicyRequireExternalEvaluation | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyRequireExternalEvaluation | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyRequireExternalEvaluation | cdktf.IResolvable | undefined);
    private _evaluateUrl?;
    get evaluateUrl(): string;
    set evaluateUrl(value: string);
    get evaluateUrlInput(): string;
    private _keysUrl?;
    get keysUrl(): string;
    set keysUrl(value: string);
    get keysUrlInput(): string;
}
export interface ZeroTrustAccessPolicyRequireGeo {
    /**
    * The country code that should be matched.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#country_code ZeroTrustAccessPolicy#country_code}
    */
    readonly countryCode: string;
}
export declare function zeroTrustAccessPolicyRequireGeoToTerraform(struct?: ZeroTrustAccessPolicyRequireGeo | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyRequireGeoToHclTerraform(struct?: ZeroTrustAccessPolicyRequireGeo | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyRequireGeoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyRequireGeo | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyRequireGeo | cdktf.IResolvable | undefined);
    private _countryCode?;
    get countryCode(): string;
    set countryCode(value: string);
    get countryCodeInput(): string;
}
export interface ZeroTrustAccessPolicyRequireGithubOrganization {
    /**
    * The ID of your Github identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}
    */
    readonly identityProviderId: string;
    /**
    * The name of the organization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#name ZeroTrustAccessPolicy#name}
    */
    readonly name: string;
    /**
    * The name of the team
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#team ZeroTrustAccessPolicy#team}
    */
    readonly team?: string;
}
export declare function zeroTrustAccessPolicyRequireGithubOrganizationToTerraform(struct?: ZeroTrustAccessPolicyRequireGithubOrganization | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyRequireGithubOrganizationToHclTerraform(struct?: ZeroTrustAccessPolicyRequireGithubOrganization | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyRequireGithubOrganizationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyRequireGithubOrganization | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyRequireGithubOrganization | cdktf.IResolvable | undefined);
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
export interface ZeroTrustAccessPolicyRequireGroup {
    /**
    * The ID of a previously created Access group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#id ZeroTrustAccessPolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
}
export declare function zeroTrustAccessPolicyRequireGroupToTerraform(struct?: ZeroTrustAccessPolicyRequireGroup | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyRequireGroupToHclTerraform(struct?: ZeroTrustAccessPolicyRequireGroup | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyRequireGroupOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyRequireGroup | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyRequireGroup | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
}
export interface ZeroTrustAccessPolicyRequireGsuite {
    /**
    * The email of the Google Workspace group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#email ZeroTrustAccessPolicy#email}
    */
    readonly email: string;
    /**
    * The ID of your Google Workspace identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}
    */
    readonly identityProviderId: string;
}
export declare function zeroTrustAccessPolicyRequireGsuiteToTerraform(struct?: ZeroTrustAccessPolicyRequireGsuite | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyRequireGsuiteToHclTerraform(struct?: ZeroTrustAccessPolicyRequireGsuite | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyRequireGsuiteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyRequireGsuite | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyRequireGsuite | cdktf.IResolvable | undefined);
    private _email?;
    get email(): string;
    set email(value: string);
    get emailInput(): string;
    private _identityProviderId?;
    get identityProviderId(): string;
    set identityProviderId(value: string);
    get identityProviderIdInput(): string;
}
export interface ZeroTrustAccessPolicyRequireIp {
    /**
    * An IPv4 or IPv6 CIDR block.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#ip ZeroTrustAccessPolicy#ip}
    */
    readonly ip: string;
}
export declare function zeroTrustAccessPolicyRequireIpToTerraform(struct?: ZeroTrustAccessPolicyRequireIp | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyRequireIpToHclTerraform(struct?: ZeroTrustAccessPolicyRequireIp | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyRequireIpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyRequireIp | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyRequireIp | cdktf.IResolvable | undefined);
    private _ip?;
    get ip(): string;
    set ip(value: string);
    get ipInput(): string;
}
export interface ZeroTrustAccessPolicyRequireIpListStruct {
    /**
    * The ID of a previously created IP list.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#id ZeroTrustAccessPolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
}
export declare function zeroTrustAccessPolicyRequireIpListStructToTerraform(struct?: ZeroTrustAccessPolicyRequireIpListStruct | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyRequireIpListStructToHclTerraform(struct?: ZeroTrustAccessPolicyRequireIpListStruct | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyRequireIpListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyRequireIpListStruct | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyRequireIpListStruct | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
}
export interface ZeroTrustAccessPolicyRequireLinkedAppToken {
    /**
    * The ID of an Access OIDC SaaS application
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#app_uid ZeroTrustAccessPolicy#app_uid}
    */
    readonly appUid: string;
}
export declare function zeroTrustAccessPolicyRequireLinkedAppTokenToTerraform(struct?: ZeroTrustAccessPolicyRequireLinkedAppToken | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyRequireLinkedAppTokenToHclTerraform(struct?: ZeroTrustAccessPolicyRequireLinkedAppToken | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyRequireLinkedAppTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyRequireLinkedAppToken | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyRequireLinkedAppToken | cdktf.IResolvable | undefined);
    private _appUid?;
    get appUid(): string;
    set appUid(value: string);
    get appUidInput(): string;
}
export interface ZeroTrustAccessPolicyRequireLoginMethod {
    /**
    * The ID of an identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#id ZeroTrustAccessPolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
}
export declare function zeroTrustAccessPolicyRequireLoginMethodToTerraform(struct?: ZeroTrustAccessPolicyRequireLoginMethod | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyRequireLoginMethodToHclTerraform(struct?: ZeroTrustAccessPolicyRequireLoginMethod | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyRequireLoginMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyRequireLoginMethod | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyRequireLoginMethod | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
}
export interface ZeroTrustAccessPolicyRequireOidc {
    /**
    * The name of the OIDC claim.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#claim_name ZeroTrustAccessPolicy#claim_name}
    */
    readonly claimName: string;
    /**
    * The OIDC claim value to look for.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#claim_value ZeroTrustAccessPolicy#claim_value}
    */
    readonly claimValue: string;
    /**
    * The ID of your OIDC identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}
    */
    readonly identityProviderId: string;
}
export declare function zeroTrustAccessPolicyRequireOidcToTerraform(struct?: ZeroTrustAccessPolicyRequireOidc | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyRequireOidcToHclTerraform(struct?: ZeroTrustAccessPolicyRequireOidc | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyRequireOidcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyRequireOidc | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyRequireOidc | cdktf.IResolvable | undefined);
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
export interface ZeroTrustAccessPolicyRequireOkta {
    /**
    * The ID of your Okta identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}
    */
    readonly identityProviderId: string;
    /**
    * The name of the Okta group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#name ZeroTrustAccessPolicy#name}
    */
    readonly name: string;
}
export declare function zeroTrustAccessPolicyRequireOktaToTerraform(struct?: ZeroTrustAccessPolicyRequireOkta | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyRequireOktaToHclTerraform(struct?: ZeroTrustAccessPolicyRequireOkta | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyRequireOktaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyRequireOkta | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyRequireOkta | cdktf.IResolvable | undefined);
    private _identityProviderId?;
    get identityProviderId(): string;
    set identityProviderId(value: string);
    get identityProviderIdInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface ZeroTrustAccessPolicyRequireSaml {
    /**
    * The name of the SAML attribute.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#attribute_name ZeroTrustAccessPolicy#attribute_name}
    */
    readonly attributeName: string;
    /**
    * The SAML attribute value to look for.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#attribute_value ZeroTrustAccessPolicy#attribute_value}
    */
    readonly attributeValue: string;
    /**
    * The ID of your SAML identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}
    */
    readonly identityProviderId: string;
}
export declare function zeroTrustAccessPolicyRequireSamlToTerraform(struct?: ZeroTrustAccessPolicyRequireSaml | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyRequireSamlToHclTerraform(struct?: ZeroTrustAccessPolicyRequireSaml | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyRequireSamlOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyRequireSaml | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyRequireSaml | cdktf.IResolvable | undefined);
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
export interface ZeroTrustAccessPolicyRequireServiceToken {
    /**
    * The ID of a Service Token.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#token_id ZeroTrustAccessPolicy#token_id}
    */
    readonly tokenId: string;
}
export declare function zeroTrustAccessPolicyRequireServiceTokenToTerraform(struct?: ZeroTrustAccessPolicyRequireServiceToken | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyRequireServiceTokenToHclTerraform(struct?: ZeroTrustAccessPolicyRequireServiceToken | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyRequireServiceTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyRequireServiceToken | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyRequireServiceToken | cdktf.IResolvable | undefined);
    private _tokenId?;
    get tokenId(): string;
    set tokenId(value: string);
    get tokenIdInput(): string;
}
export interface ZeroTrustAccessPolicyRequireUserRiskScore {
    /**
    * A list of risk score levels to match. Values can be low, medium, high, or unscored.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#user_risk_score ZeroTrustAccessPolicy#user_risk_score}
    */
    readonly userRiskScore: string[];
}
export declare function zeroTrustAccessPolicyRequireUserRiskScoreToTerraform(struct?: ZeroTrustAccessPolicyRequireUserRiskScore | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyRequireUserRiskScoreToHclTerraform(struct?: ZeroTrustAccessPolicyRequireUserRiskScore | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyRequireUserRiskScoreOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessPolicyRequireUserRiskScore | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyRequireUserRiskScore | cdktf.IResolvable | undefined);
    private _userRiskScore?;
    get userRiskScore(): string[];
    set userRiskScore(value: string[]);
    get userRiskScoreInput(): string[];
}
export interface ZeroTrustAccessPolicyRequire {
    /**
    * An empty object which matches on all service tokens.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#any_valid_service_token ZeroTrustAccessPolicy#any_valid_service_token}
    */
    readonly anyValidServiceToken?: ZeroTrustAccessPolicyRequireAnyValidServiceToken;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#auth_context ZeroTrustAccessPolicy#auth_context}
    */
    readonly authContext?: ZeroTrustAccessPolicyRequireAuthContext;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#auth_method ZeroTrustAccessPolicy#auth_method}
    */
    readonly authMethod?: ZeroTrustAccessPolicyRequireAuthMethod;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#azure_ad ZeroTrustAccessPolicy#azure_ad}
    */
    readonly azureAd?: ZeroTrustAccessPolicyRequireAzureAd;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#certificate ZeroTrustAccessPolicy#certificate}
    */
    readonly certificate?: ZeroTrustAccessPolicyRequireCertificate;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#common_name ZeroTrustAccessPolicy#common_name}
    */
    readonly commonName?: ZeroTrustAccessPolicyRequireCommonName;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#device_posture ZeroTrustAccessPolicy#device_posture}
    */
    readonly devicePosture?: ZeroTrustAccessPolicyRequireDevicePosture;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#email ZeroTrustAccessPolicy#email}
    */
    readonly email?: ZeroTrustAccessPolicyRequireEmail;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#email_domain ZeroTrustAccessPolicy#email_domain}
    */
    readonly emailDomain?: ZeroTrustAccessPolicyRequireEmailDomain;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#email_list ZeroTrustAccessPolicy#email_list}
    */
    readonly emailList?: ZeroTrustAccessPolicyRequireEmailListStruct;
    /**
    * An empty object which matches on all users.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#everyone ZeroTrustAccessPolicy#everyone}
    */
    readonly everyone?: ZeroTrustAccessPolicyRequireEveryone;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#external_evaluation ZeroTrustAccessPolicy#external_evaluation}
    */
    readonly externalEvaluation?: ZeroTrustAccessPolicyRequireExternalEvaluation;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#geo ZeroTrustAccessPolicy#geo}
    */
    readonly geo?: ZeroTrustAccessPolicyRequireGeo;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#github_organization ZeroTrustAccessPolicy#github_organization}
    */
    readonly githubOrganization?: ZeroTrustAccessPolicyRequireGithubOrganization;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#group ZeroTrustAccessPolicy#group}
    */
    readonly group?: ZeroTrustAccessPolicyRequireGroup;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#gsuite ZeroTrustAccessPolicy#gsuite}
    */
    readonly gsuite?: ZeroTrustAccessPolicyRequireGsuite;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#ip ZeroTrustAccessPolicy#ip}
    */
    readonly ip?: ZeroTrustAccessPolicyRequireIp;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#ip_list ZeroTrustAccessPolicy#ip_list}
    */
    readonly ipList?: ZeroTrustAccessPolicyRequireIpListStruct;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#linked_app_token ZeroTrustAccessPolicy#linked_app_token}
    */
    readonly linkedAppToken?: ZeroTrustAccessPolicyRequireLinkedAppToken;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#login_method ZeroTrustAccessPolicy#login_method}
    */
    readonly loginMethod?: ZeroTrustAccessPolicyRequireLoginMethod;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#oidc ZeroTrustAccessPolicy#oidc}
    */
    readonly oidc?: ZeroTrustAccessPolicyRequireOidc;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#okta ZeroTrustAccessPolicy#okta}
    */
    readonly okta?: ZeroTrustAccessPolicyRequireOkta;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#saml ZeroTrustAccessPolicy#saml}
    */
    readonly saml?: ZeroTrustAccessPolicyRequireSaml;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#service_token ZeroTrustAccessPolicy#service_token}
    */
    readonly serviceToken?: ZeroTrustAccessPolicyRequireServiceToken;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#user_risk_score ZeroTrustAccessPolicy#user_risk_score}
    */
    readonly userRiskScore?: ZeroTrustAccessPolicyRequireUserRiskScore;
}
export declare function zeroTrustAccessPolicyRequireToTerraform(struct?: ZeroTrustAccessPolicyRequire | cdktf.IResolvable): any;
export declare function zeroTrustAccessPolicyRequireToHclTerraform(struct?: ZeroTrustAccessPolicyRequire | cdktf.IResolvable): any;
export declare class ZeroTrustAccessPolicyRequireOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ZeroTrustAccessPolicyRequire | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessPolicyRequire | cdktf.IResolvable | undefined);
    private _anyValidServiceToken;
    get anyValidServiceToken(): ZeroTrustAccessPolicyRequireAnyValidServiceTokenOutputReference;
    putAnyValidServiceToken(value: ZeroTrustAccessPolicyRequireAnyValidServiceToken): void;
    resetAnyValidServiceToken(): void;
    get anyValidServiceTokenInput(): any;
    private _authContext;
    get authContext(): ZeroTrustAccessPolicyRequireAuthContextOutputReference;
    putAuthContext(value: ZeroTrustAccessPolicyRequireAuthContext): void;
    resetAuthContext(): void;
    get authContextInput(): any;
    private _authMethod;
    get authMethod(): ZeroTrustAccessPolicyRequireAuthMethodOutputReference;
    putAuthMethod(value: ZeroTrustAccessPolicyRequireAuthMethod): void;
    resetAuthMethod(): void;
    get authMethodInput(): any;
    private _azureAd;
    get azureAd(): ZeroTrustAccessPolicyRequireAzureAdOutputReference;
    putAzureAd(value: ZeroTrustAccessPolicyRequireAzureAd): void;
    resetAzureAd(): void;
    get azureAdInput(): any;
    private _certificate;
    get certificate(): ZeroTrustAccessPolicyRequireCertificateOutputReference;
    putCertificate(value: ZeroTrustAccessPolicyRequireCertificate): void;
    resetCertificate(): void;
    get certificateInput(): any;
    private _commonName;
    get commonName(): ZeroTrustAccessPolicyRequireCommonNameOutputReference;
    putCommonName(value: ZeroTrustAccessPolicyRequireCommonName): void;
    resetCommonName(): void;
    get commonNameInput(): any;
    private _devicePosture;
    get devicePosture(): ZeroTrustAccessPolicyRequireDevicePostureOutputReference;
    putDevicePosture(value: ZeroTrustAccessPolicyRequireDevicePosture): void;
    resetDevicePosture(): void;
    get devicePostureInput(): any;
    private _email;
    get email(): ZeroTrustAccessPolicyRequireEmailOutputReference;
    putEmail(value: ZeroTrustAccessPolicyRequireEmail): void;
    resetEmail(): void;
    get emailInput(): any;
    private _emailDomain;
    get emailDomain(): ZeroTrustAccessPolicyRequireEmailDomainOutputReference;
    putEmailDomain(value: ZeroTrustAccessPolicyRequireEmailDomain): void;
    resetEmailDomain(): void;
    get emailDomainInput(): any;
    private _emailList;
    get emailList(): ZeroTrustAccessPolicyRequireEmailListStructOutputReference;
    putEmailList(value: ZeroTrustAccessPolicyRequireEmailListStruct): void;
    resetEmailList(): void;
    get emailListInput(): any;
    private _everyone;
    get everyone(): ZeroTrustAccessPolicyRequireEveryoneOutputReference;
    putEveryone(value: ZeroTrustAccessPolicyRequireEveryone): void;
    resetEveryone(): void;
    get everyoneInput(): any;
    private _externalEvaluation;
    get externalEvaluation(): ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference;
    putExternalEvaluation(value: ZeroTrustAccessPolicyRequireExternalEvaluation): void;
    resetExternalEvaluation(): void;
    get externalEvaluationInput(): any;
    private _geo;
    get geo(): ZeroTrustAccessPolicyRequireGeoOutputReference;
    putGeo(value: ZeroTrustAccessPolicyRequireGeo): void;
    resetGeo(): void;
    get geoInput(): any;
    private _githubOrganization;
    get githubOrganization(): ZeroTrustAccessPolicyRequireGithubOrganizationOutputReference;
    putGithubOrganization(value: ZeroTrustAccessPolicyRequireGithubOrganization): void;
    resetGithubOrganization(): void;
    get githubOrganizationInput(): any;
    private _group;
    get group(): ZeroTrustAccessPolicyRequireGroupOutputReference;
    putGroup(value: ZeroTrustAccessPolicyRequireGroup): void;
    resetGroup(): void;
    get groupInput(): any;
    private _gsuite;
    get gsuite(): ZeroTrustAccessPolicyRequireGsuiteOutputReference;
    putGsuite(value: ZeroTrustAccessPolicyRequireGsuite): void;
    resetGsuite(): void;
    get gsuiteInput(): any;
    private _ip;
    get ip(): ZeroTrustAccessPolicyRequireIpOutputReference;
    putIp(value: ZeroTrustAccessPolicyRequireIp): void;
    resetIp(): void;
    get ipInput(): any;
    private _ipList;
    get ipList(): ZeroTrustAccessPolicyRequireIpListStructOutputReference;
    putIpList(value: ZeroTrustAccessPolicyRequireIpListStruct): void;
    resetIpList(): void;
    get ipListInput(): any;
    private _linkedAppToken;
    get linkedAppToken(): ZeroTrustAccessPolicyRequireLinkedAppTokenOutputReference;
    putLinkedAppToken(value: ZeroTrustAccessPolicyRequireLinkedAppToken): void;
    resetLinkedAppToken(): void;
    get linkedAppTokenInput(): any;
    private _loginMethod;
    get loginMethod(): ZeroTrustAccessPolicyRequireLoginMethodOutputReference;
    putLoginMethod(value: ZeroTrustAccessPolicyRequireLoginMethod): void;
    resetLoginMethod(): void;
    get loginMethodInput(): any;
    private _oidc;
    get oidc(): ZeroTrustAccessPolicyRequireOidcOutputReference;
    putOidc(value: ZeroTrustAccessPolicyRequireOidc): void;
    resetOidc(): void;
    get oidcInput(): any;
    private _okta;
    get okta(): ZeroTrustAccessPolicyRequireOktaOutputReference;
    putOkta(value: ZeroTrustAccessPolicyRequireOkta): void;
    resetOkta(): void;
    get oktaInput(): any;
    private _saml;
    get saml(): ZeroTrustAccessPolicyRequireSamlOutputReference;
    putSaml(value: ZeroTrustAccessPolicyRequireSaml): void;
    resetSaml(): void;
    get samlInput(): any;
    private _serviceToken;
    get serviceToken(): ZeroTrustAccessPolicyRequireServiceTokenOutputReference;
    putServiceToken(value: ZeroTrustAccessPolicyRequireServiceToken): void;
    resetServiceToken(): void;
    get serviceTokenInput(): any;
    private _userRiskScore;
    get userRiskScore(): ZeroTrustAccessPolicyRequireUserRiskScoreOutputReference;
    putUserRiskScore(value: ZeroTrustAccessPolicyRequireUserRiskScore): void;
    resetUserRiskScore(): void;
    get userRiskScoreInput(): any;
}
export declare class ZeroTrustAccessPolicyRequireList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ZeroTrustAccessPolicyRequire[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ZeroTrustAccessPolicyRequireOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy cloudflare_zero_trust_access_policy}
*/
export declare class ZeroTrustAccessPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_zero_trust_access_policy";
    /**
    * Generates CDKTF code for importing a ZeroTrustAccessPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustAccessPolicy to import
    * @param importFromId The id of the existing ZeroTrustAccessPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustAccessPolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy cloudflare_zero_trust_access_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustAccessPolicyConfig
    */
    constructor(scope: Construct, id: string, config: ZeroTrustAccessPolicyConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _approvalGroups;
    get approvalGroups(): ZeroTrustAccessPolicyApprovalGroupsList;
    putApprovalGroups(value: ZeroTrustAccessPolicyApprovalGroups[] | cdktf.IResolvable): void;
    resetApprovalGroups(): void;
    get approvalGroupsInput(): any;
    private _approvalRequired?;
    get approvalRequired(): boolean | cdktf.IResolvable;
    set approvalRequired(value: boolean | cdktf.IResolvable);
    resetApprovalRequired(): void;
    get approvalRequiredInput(): any;
    private _connectionRules;
    get connectionRules(): ZeroTrustAccessPolicyConnectionRulesOutputReference;
    putConnectionRules(value: ZeroTrustAccessPolicyConnectionRules): void;
    resetConnectionRules(): void;
    get connectionRulesInput(): any;
    private _decision?;
    get decision(): string;
    set decision(value: string);
    get decisionInput(): string;
    private _exclude;
    get exclude(): ZeroTrustAccessPolicyExcludeList;
    putExclude(value: ZeroTrustAccessPolicyExclude[] | cdktf.IResolvable): void;
    resetExclude(): void;
    get excludeInput(): any;
    get id(): any;
    private _include;
    get include(): ZeroTrustAccessPolicyIncludeList;
    putInclude(value: ZeroTrustAccessPolicyInclude[] | cdktf.IResolvable): void;
    resetInclude(): void;
    get includeInput(): any;
    private _isolationRequired?;
    get isolationRequired(): boolean | cdktf.IResolvable;
    set isolationRequired(value: boolean | cdktf.IResolvable);
    resetIsolationRequired(): void;
    get isolationRequiredInput(): any;
    private _mfaConfig;
    get mfaConfig(): ZeroTrustAccessPolicyMfaConfigOutputReference;
    putMfaConfig(value: ZeroTrustAccessPolicyMfaConfig): void;
    resetMfaConfig(): void;
    get mfaConfigInput(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _purposeJustificationPrompt?;
    get purposeJustificationPrompt(): string;
    set purposeJustificationPrompt(value: string);
    resetPurposeJustificationPrompt(): void;
    get purposeJustificationPromptInput(): string;
    private _purposeJustificationRequired?;
    get purposeJustificationRequired(): boolean | cdktf.IResolvable;
    set purposeJustificationRequired(value: boolean | cdktf.IResolvable);
    resetPurposeJustificationRequired(): void;
    get purposeJustificationRequiredInput(): any;
    private _require;
    get require(): ZeroTrustAccessPolicyRequireList;
    putRequire(value: ZeroTrustAccessPolicyRequire[] | cdktf.IResolvable): void;
    resetRequire(): void;
    get requireInput(): any;
    private _sessionDuration?;
    get sessionDuration(): string;
    set sessionDuration(value: string);
    resetSessionDuration(): void;
    get sessionDurationInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
