import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ZeroTrustAccessIdentityProviderConfig extends cdktf.TerraformMetaArguments {
    /**
    * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_identity_provider#account_id ZeroTrustAccessIdentityProvider#account_id}
    */
    readonly accountId?: string;
    /**
    * The configuration parameters for the identity provider. To view the required parameters for a specific provider, refer to our [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_identity_provider#config ZeroTrustAccessIdentityProvider#config}
    */
    readonly config: ZeroTrustAccessIdentityProviderConfigA;
    /**
    * The name of the identity provider, shown to users on the login page.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_identity_provider#name ZeroTrustAccessIdentityProvider#name}
    */
    readonly name: string;
    /**
    * The configuration settings for enabling a System for Cross-Domain Identity Management (SCIM) with the identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_identity_provider#scim_config ZeroTrustAccessIdentityProvider#scim_config}
    */
    readonly scimConfig?: ZeroTrustAccessIdentityProviderScimConfig;
    /**
    * The type of identity provider. To determine the value for a specific provider, refer to our [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
    * Available values: "onetimepin", "azureAD", "saml", "centrify", "facebook", "github", "google-apps", "google", "linkedin", "oidc", "okta", "onelogin", "pingone", "yandex".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_identity_provider#type ZeroTrustAccessIdentityProvider#type}
    */
    readonly type: string;
    /**
    * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_identity_provider#zone_id ZeroTrustAccessIdentityProvider#zone_id}
    */
    readonly zoneId?: string;
}
export interface ZeroTrustAccessIdentityProviderConfigHeaderAttributes {
    /**
    * attribute name from the IDP
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_identity_provider#attribute_name ZeroTrustAccessIdentityProvider#attribute_name}
    */
    readonly attributeName?: string;
    /**
    * header that will be added on the request to the origin
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_identity_provider#header_name ZeroTrustAccessIdentityProvider#header_name}
    */
    readonly headerName?: string;
}
export declare function zeroTrustAccessIdentityProviderConfigHeaderAttributesToTerraform(struct?: ZeroTrustAccessIdentityProviderConfigHeaderAttributes | cdktf.IResolvable): any;
export declare function zeroTrustAccessIdentityProviderConfigHeaderAttributesToHclTerraform(struct?: ZeroTrustAccessIdentityProviderConfigHeaderAttributes | cdktf.IResolvable): any;
export declare class ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ZeroTrustAccessIdentityProviderConfigHeaderAttributes | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessIdentityProviderConfigHeaderAttributes | cdktf.IResolvable | undefined);
    private _attributeName?;
    get attributeName(): string;
    set attributeName(value: string);
    resetAttributeName(): void;
    get attributeNameInput(): string;
    private _headerName?;
    get headerName(): string;
    set headerName(value: string);
    resetHeaderName(): void;
    get headerNameInput(): string;
}
export declare class ZeroTrustAccessIdentityProviderConfigHeaderAttributesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ZeroTrustAccessIdentityProviderConfigHeaderAttributes[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference;
}
export interface ZeroTrustAccessIdentityProviderConfigA {
    /**
    * Your companies TLD
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_identity_provider#apps_domain ZeroTrustAccessIdentityProvider#apps_domain}
    */
    readonly appsDomain?: string;
    /**
    * A list of SAML attribute names that will be added to your signed JWT token and can be used in SAML policy rules.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_identity_provider#attributes ZeroTrustAccessIdentityProvider#attributes}
    */
    readonly attributes?: string[];
    /**
    * The authorization_endpoint URL of your IdP
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_identity_provider#auth_url ZeroTrustAccessIdentityProvider#auth_url}
    */
    readonly authUrl?: string;
    /**
    * Your okta authorization server id
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_identity_provider#authorization_server_id ZeroTrustAccessIdentityProvider#authorization_server_id}
    */
    readonly authorizationServerId?: string;
    /**
    * Your centrify account url
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_identity_provider#centrify_account ZeroTrustAccessIdentityProvider#centrify_account}
    */
    readonly centrifyAccount?: string;
    /**
    * Your centrify app id
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_identity_provider#centrify_app_id ZeroTrustAccessIdentityProvider#centrify_app_id}
    */
    readonly centrifyAppId?: string;
    /**
    * The jwks_uri endpoint of your IdP to allow the IdP keys to sign the tokens
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_identity_provider#certs_url ZeroTrustAccessIdentityProvider#certs_url}
    */
    readonly certsUrl?: string;
    /**
    * Custom claims
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_identity_provider#claims ZeroTrustAccessIdentityProvider#claims}
    */
    readonly claims?: string[];
    /**
    * Your OAuth Client ID
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_identity_provider#client_id ZeroTrustAccessIdentityProvider#client_id}
    */
    readonly clientId?: string;
    /**
    * Your OAuth Client Secret
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_identity_provider#client_secret ZeroTrustAccessIdentityProvider#client_secret}
    */
    readonly clientSecret?: string;
    /**
    * Should Cloudflare try to load authentication contexts from your account
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_identity_provider#conditional_access_enabled ZeroTrustAccessIdentityProvider#conditional_access_enabled}
    */
    readonly conditionalAccessEnabled?: boolean | cdktf.IResolvable;
    /**
    * Your Azure directory uuid
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_identity_provider#directory_id ZeroTrustAccessIdentityProvider#directory_id}
    */
    readonly directoryId?: string;
    /**
    * The attribute name for email in the SAML response.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_identity_provider#email_attribute_name ZeroTrustAccessIdentityProvider#email_attribute_name}
    */
    readonly emailAttributeName?: string;
    /**
    * The claim name for email in the id_token response.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_identity_provider#email_claim_name ZeroTrustAccessIdentityProvider#email_claim_name}
    */
    readonly emailClaimName?: string;
    /**
    * Add a list of attribute names that will be returned in the response header from the Access callback.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_identity_provider#header_attributes ZeroTrustAccessIdentityProvider#header_attributes}
    */
    readonly headerAttributes?: ZeroTrustAccessIdentityProviderConfigHeaderAttributes[] | cdktf.IResolvable;
    /**
    * X509 certificate to verify the signature in the SAML authentication response
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_identity_provider#idp_public_certs ZeroTrustAccessIdentityProvider#idp_public_certs}
    */
    readonly idpPublicCerts?: string[];
    /**
    * IdP Entity ID or Issuer URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_identity_provider#issuer_url ZeroTrustAccessIdentityProvider#issuer_url}
    */
    readonly issuerUrl?: string;
    /**
    * Your okta account url
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_identity_provider#okta_account ZeroTrustAccessIdentityProvider#okta_account}
    */
    readonly oktaAccount?: string;
    /**
    * Your OneLogin account url
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_identity_provider#onelogin_account ZeroTrustAccessIdentityProvider#onelogin_account}
    */
    readonly oneloginAccount?: string;
    /**
    * Your PingOne environment identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_identity_provider#ping_env_id ZeroTrustAccessIdentityProvider#ping_env_id}
    */
    readonly pingEnvId?: string;
    /**
    * Enable Proof Key for Code Exchange (PKCE)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_identity_provider#pkce_enabled ZeroTrustAccessIdentityProvider#pkce_enabled}
    */
    readonly pkceEnabled?: boolean | cdktf.IResolvable;
    /**
    * Indicates the type of user interaction that is required. prompt=login forces the user to enter their credentials on that request, negating single-sign on. prompt=none is the opposite. It ensures that the user isn't presented with any interactive prompt. If the request can't be completed silently by using single-sign on, the Microsoft identity platform returns an interaction_required error. prompt=select_account interrupts single sign-on providing account selection experience listing all the accounts either in session or any remembered account or an option to choose to use a different account altogether.
    * Available values: "login", "select_account", "none".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_identity_provider#prompt ZeroTrustAccessIdentityProvider#prompt}
    */
    readonly prompt?: string;
    /**
    * OAuth scopes
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_identity_provider#scopes ZeroTrustAccessIdentityProvider#scopes}
    */
    readonly scopes?: string[];
    /**
    * Sign the SAML authentication request with Access credentials. To verify the signature, use the public key from the Access certs endpoints.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_identity_provider#sign_request ZeroTrustAccessIdentityProvider#sign_request}
    */
    readonly signRequest?: boolean | cdktf.IResolvable;
    /**
    * URL to send the SAML authentication requests to
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_identity_provider#sso_target_url ZeroTrustAccessIdentityProvider#sso_target_url}
    */
    readonly ssoTargetUrl?: string;
    /**
    * Should Cloudflare try to load groups from your account
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_identity_provider#support_groups ZeroTrustAccessIdentityProvider#support_groups}
    */
    readonly supportGroups?: boolean | cdktf.IResolvable;
    /**
    * The token_endpoint URL of your IdP
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_identity_provider#token_url ZeroTrustAccessIdentityProvider#token_url}
    */
    readonly tokenUrl?: string;
}
export declare function zeroTrustAccessIdentityProviderConfigAToTerraform(struct?: ZeroTrustAccessIdentityProviderConfigA | cdktf.IResolvable): any;
export declare function zeroTrustAccessIdentityProviderConfigAToHclTerraform(struct?: ZeroTrustAccessIdentityProviderConfigA | cdktf.IResolvable): any;
export declare class ZeroTrustAccessIdentityProviderConfigAOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessIdentityProviderConfigA | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessIdentityProviderConfigA | cdktf.IResolvable | undefined);
    private _appsDomain?;
    get appsDomain(): string;
    set appsDomain(value: string);
    resetAppsDomain(): void;
    get appsDomainInput(): string;
    private _attributes?;
    get attributes(): string[];
    set attributes(value: string[]);
    resetAttributes(): void;
    get attributesInput(): string[];
    private _authUrl?;
    get authUrl(): string;
    set authUrl(value: string);
    resetAuthUrl(): void;
    get authUrlInput(): string;
    private _authorizationServerId?;
    get authorizationServerId(): string;
    set authorizationServerId(value: string);
    resetAuthorizationServerId(): void;
    get authorizationServerIdInput(): string;
    private _centrifyAccount?;
    get centrifyAccount(): string;
    set centrifyAccount(value: string);
    resetCentrifyAccount(): void;
    get centrifyAccountInput(): string;
    private _centrifyAppId?;
    get centrifyAppId(): string;
    set centrifyAppId(value: string);
    resetCentrifyAppId(): void;
    get centrifyAppIdInput(): string;
    private _certsUrl?;
    get certsUrl(): string;
    set certsUrl(value: string);
    resetCertsUrl(): void;
    get certsUrlInput(): string;
    private _claims?;
    get claims(): string[];
    set claims(value: string[]);
    resetClaims(): void;
    get claimsInput(): string[];
    private _clientId?;
    get clientId(): string;
    set clientId(value: string);
    resetClientId(): void;
    get clientIdInput(): string;
    private _clientSecret?;
    get clientSecret(): string;
    set clientSecret(value: string);
    resetClientSecret(): void;
    get clientSecretInput(): string;
    private _conditionalAccessEnabled?;
    get conditionalAccessEnabled(): boolean | cdktf.IResolvable;
    set conditionalAccessEnabled(value: boolean | cdktf.IResolvable);
    resetConditionalAccessEnabled(): void;
    get conditionalAccessEnabledInput(): any;
    private _directoryId?;
    get directoryId(): string;
    set directoryId(value: string);
    resetDirectoryId(): void;
    get directoryIdInput(): string;
    private _emailAttributeName?;
    get emailAttributeName(): string;
    set emailAttributeName(value: string);
    resetEmailAttributeName(): void;
    get emailAttributeNameInput(): string;
    private _emailClaimName?;
    get emailClaimName(): string;
    set emailClaimName(value: string);
    resetEmailClaimName(): void;
    get emailClaimNameInput(): string;
    private _headerAttributes;
    get headerAttributes(): ZeroTrustAccessIdentityProviderConfigHeaderAttributesList;
    putHeaderAttributes(value: ZeroTrustAccessIdentityProviderConfigHeaderAttributes[] | cdktf.IResolvable): void;
    resetHeaderAttributes(): void;
    get headerAttributesInput(): any;
    private _idpPublicCerts?;
    get idpPublicCerts(): string[];
    set idpPublicCerts(value: string[]);
    resetIdpPublicCerts(): void;
    get idpPublicCertsInput(): string[];
    private _issuerUrl?;
    get issuerUrl(): string;
    set issuerUrl(value: string);
    resetIssuerUrl(): void;
    get issuerUrlInput(): string;
    private _oktaAccount?;
    get oktaAccount(): string;
    set oktaAccount(value: string);
    resetOktaAccount(): void;
    get oktaAccountInput(): string;
    private _oneloginAccount?;
    get oneloginAccount(): string;
    set oneloginAccount(value: string);
    resetOneloginAccount(): void;
    get oneloginAccountInput(): string;
    private _pingEnvId?;
    get pingEnvId(): string;
    set pingEnvId(value: string);
    resetPingEnvId(): void;
    get pingEnvIdInput(): string;
    private _pkceEnabled?;
    get pkceEnabled(): boolean | cdktf.IResolvable;
    set pkceEnabled(value: boolean | cdktf.IResolvable);
    resetPkceEnabled(): void;
    get pkceEnabledInput(): any;
    private _prompt?;
    get prompt(): string;
    set prompt(value: string);
    resetPrompt(): void;
    get promptInput(): string;
    get redirectUrl(): any;
    private _scopes?;
    get scopes(): string[];
    set scopes(value: string[]);
    resetScopes(): void;
    get scopesInput(): string[];
    private _signRequest?;
    get signRequest(): boolean | cdktf.IResolvable;
    set signRequest(value: boolean | cdktf.IResolvable);
    resetSignRequest(): void;
    get signRequestInput(): any;
    private _ssoTargetUrl?;
    get ssoTargetUrl(): string;
    set ssoTargetUrl(value: string);
    resetSsoTargetUrl(): void;
    get ssoTargetUrlInput(): string;
    private _supportGroups?;
    get supportGroups(): boolean | cdktf.IResolvable;
    set supportGroups(value: boolean | cdktf.IResolvable);
    resetSupportGroups(): void;
    get supportGroupsInput(): any;
    private _tokenUrl?;
    get tokenUrl(): string;
    set tokenUrl(value: string);
    resetTokenUrl(): void;
    get tokenUrlInput(): string;
}
export interface ZeroTrustAccessIdentityProviderScimConfig {
    /**
    * A flag to enable or disable SCIM for the identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_identity_provider#enabled ZeroTrustAccessIdentityProvider#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Indicates how a SCIM event updates a user identity used for policy evaluation. Use "automatic" to automatically update a user's identity and augment it with fields from the SCIM user resource. Use "reauth" to force re-authentication on group membership updates, user identity update will only occur after successful re-authentication. With "reauth" identities will not contain fields from the SCIM user resource. With "no_action" identities will not be changed by SCIM updates in any way and users will not be prompted to reauthenticate.
    * Available values: "automatic", "reauth", "no_action".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_identity_provider#identity_update_behavior ZeroTrustAccessIdentityProvider#identity_update_behavior}
    */
    readonly identityUpdateBehavior?: string;
    /**
    * A flag to remove a user's seat in Zero Trust when they have been deprovisioned in the Identity Provider.  This cannot be enabled unless user_deprovision is also enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_identity_provider#seat_deprovision ZeroTrustAccessIdentityProvider#seat_deprovision}
    */
    readonly seatDeprovision?: boolean | cdktf.IResolvable;
    /**
    * A flag to enable revoking a user's session in Access and Gateway when they have been deprovisioned in the Identity Provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_identity_provider#user_deprovision ZeroTrustAccessIdentityProvider#user_deprovision}
    */
    readonly userDeprovision?: boolean | cdktf.IResolvable;
}
export declare function zeroTrustAccessIdentityProviderScimConfigToTerraform(struct?: ZeroTrustAccessIdentityProviderScimConfig | cdktf.IResolvable): any;
export declare function zeroTrustAccessIdentityProviderScimConfigToHclTerraform(struct?: ZeroTrustAccessIdentityProviderScimConfig | cdktf.IResolvable): any;
export declare class ZeroTrustAccessIdentityProviderScimConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessIdentityProviderScimConfig | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessIdentityProviderScimConfig | cdktf.IResolvable | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): any;
    private _identityUpdateBehavior?;
    get identityUpdateBehavior(): string;
    set identityUpdateBehavior(value: string);
    resetIdentityUpdateBehavior(): void;
    get identityUpdateBehaviorInput(): string;
    get scimBaseUrl(): any;
    private _seatDeprovision?;
    get seatDeprovision(): boolean | cdktf.IResolvable;
    set seatDeprovision(value: boolean | cdktf.IResolvable);
    resetSeatDeprovision(): void;
    get seatDeprovisionInput(): any;
    get secret(): any;
    private _userDeprovision?;
    get userDeprovision(): boolean | cdktf.IResolvable;
    set userDeprovision(value: boolean | cdktf.IResolvable);
    resetUserDeprovision(): void;
    get userDeprovisionInput(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_identity_provider cloudflare_zero_trust_access_identity_provider}
*/
export declare class ZeroTrustAccessIdentityProvider extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_zero_trust_access_identity_provider";
    /**
    * Generates CDKTF code for importing a ZeroTrustAccessIdentityProvider resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustAccessIdentityProvider to import
    * @param importFromId The id of the existing ZeroTrustAccessIdentityProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_identity_provider#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustAccessIdentityProvider to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_identity_provider cloudflare_zero_trust_access_identity_provider} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustAccessIdentityProviderConfig
    */
    constructor(scope: Construct, id: string, config: ZeroTrustAccessIdentityProviderConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _config;
    get config(): ZeroTrustAccessIdentityProviderConfigAOutputReference;
    putConfig(value: ZeroTrustAccessIdentityProviderConfigA): void;
    get configInput(): any;
    get id(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _scimConfig;
    get scimConfig(): ZeroTrustAccessIdentityProviderScimConfigOutputReference;
    putScimConfig(value: ZeroTrustAccessIdentityProviderScimConfig): void;
    resetScimConfig(): void;
    get scimConfigInput(): any;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
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
