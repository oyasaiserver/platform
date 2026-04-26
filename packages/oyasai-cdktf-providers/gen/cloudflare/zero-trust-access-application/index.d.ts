import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ZeroTrustAccessApplicationConfig extends cdktf.TerraformMetaArguments {
    /**
    * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#account_id ZeroTrustAccessApplication#account_id}
    */
    readonly accountId?: string;
    /**
    * When set to true, users can authenticate to this application using their WARP session.  When set to false this application will always require direct IdP authentication. This setting always overrides the organization setting for WARP authentication.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#allow_authenticate_via_warp ZeroTrustAccessApplication#allow_authenticate_via_warp}
    */
    readonly allowAuthenticateViaWarp?: boolean | cdktf.IResolvable;
    /**
    * Enables loading application content in an iFrame.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#allow_iframe ZeroTrustAccessApplication#allow_iframe}
    */
    readonly allowIframe?: boolean | cdktf.IResolvable;
    /**
    * The identity providers your users can select when connecting to this application. Defaults to all IdPs configured in your account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#allowed_idps ZeroTrustAccessApplication#allowed_idps}
    */
    readonly allowedIdps?: string[];
    /**
    * The image URL of the logo shown in the App Launcher header.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#app_launcher_logo_url ZeroTrustAccessApplication#app_launcher_logo_url}
    */
    readonly appLauncherLogoUrl?: string;
    /**
    * Displays the application in the App Launcher.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#app_launcher_visible ZeroTrustAccessApplication#app_launcher_visible}
    */
    readonly appLauncherVisible?: boolean | cdktf.IResolvable;
    /**
    * When set to `true`, users skip the identity provider selection step during login. You must specify only one identity provider in allowed_idps.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#auto_redirect_to_identity ZeroTrustAccessApplication#auto_redirect_to_identity}
    */
    readonly autoRedirectToIdentity?: boolean | cdktf.IResolvable;
    /**
    * The background color of the App Launcher page.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#bg_color ZeroTrustAccessApplication#bg_color}
    */
    readonly bgColor?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#cors_headers ZeroTrustAccessApplication#cors_headers}
    */
    readonly corsHeaders?: ZeroTrustAccessApplicationCorsHeaders;
    /**
    * The custom error message shown to a user when they are denied access to the application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#custom_deny_message ZeroTrustAccessApplication#custom_deny_message}
    */
    readonly customDenyMessage?: string;
    /**
    * The custom URL a user is redirected to when they are denied access to the application when failing identity-based rules.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#custom_deny_url ZeroTrustAccessApplication#custom_deny_url}
    */
    readonly customDenyUrl?: string;
    /**
    * The custom URL a user is redirected to when they are denied access to the application when failing non-identity rules.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#custom_non_identity_deny_url ZeroTrustAccessApplication#custom_non_identity_deny_url}
    */
    readonly customNonIdentityDenyUrl?: string;
    /**
    * The custom pages that will be displayed when applicable for this application
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#custom_pages ZeroTrustAccessApplication#custom_pages}
    */
    readonly customPages?: string[];
    /**
    * List of destinations secured by Access. This supersedes `self_hosted_domains` to allow for more flexibility in defining different types of domains. If `destinations` are provided, then `self_hosted_domains` will be ignored.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#destinations ZeroTrustAccessApplication#destinations}
    */
    readonly destinations?: ZeroTrustAccessApplicationDestinations[] | cdktf.IResolvable;
    /**
    * The primary hostname and path secured by Access. This domain will be displayed if the app is visible in the App Launcher.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#domain ZeroTrustAccessApplication#domain}
    */
    readonly domain?: string;
    /**
    * Enables the binding cookie, which increases security against compromised authorization tokens and CSRF attacks.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#enable_binding_cookie ZeroTrustAccessApplication#enable_binding_cookie}
    */
    readonly enableBindingCookie?: boolean | cdktf.IResolvable;
    /**
    * The links in the App Launcher footer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#footer_links ZeroTrustAccessApplication#footer_links}
    */
    readonly footerLinks?: ZeroTrustAccessApplicationFooterLinks[] | cdktf.IResolvable;
    /**
    * The background color of the App Launcher header.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#header_bg_color ZeroTrustAccessApplication#header_bg_color}
    */
    readonly headerBgColor?: string;
    /**
    * Enables the HttpOnly cookie attribute, which increases security against XSS attacks.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#http_only_cookie_attribute ZeroTrustAccessApplication#http_only_cookie_attribute}
    */
    readonly httpOnlyCookieAttribute?: boolean | cdktf.IResolvable;
    /**
    * The design of the App Launcher landing page shown to users when they log in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#landing_page_design ZeroTrustAccessApplication#landing_page_design}
    */
    readonly landingPageDesign?: ZeroTrustAccessApplicationLandingPageDesign;
    /**
    * The image URL for the logo shown in the App Launcher dashboard.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#logo_url ZeroTrustAccessApplication#logo_url}
    */
    readonly logoUrl?: string;
    /**
    * The name of the application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#name ZeroTrustAccessApplication#name}
    */
    readonly name?: string;
    /**
    * Optional configuration for managing an OAuth authorization flow controlled by Access. When set, Access will act as the OAuth authorization server for this application. This feature is currently in beta.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#oauth_configuration ZeroTrustAccessApplication#oauth_configuration}
    */
    readonly oauthConfiguration?: ZeroTrustAccessApplicationOauthConfiguration;
    /**
    * Allows options preflight requests to bypass Access authentication and go directly to the origin. Cannot turn on if cors_headers is set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#options_preflight_bypass ZeroTrustAccessApplication#options_preflight_bypass}
    */
    readonly optionsPreflightBypass?: boolean | cdktf.IResolvable;
    /**
    * Enables cookie paths to scope an application's JWT to the application path. If disabled, the JWT will scope to the hostname by default
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#path_cookie_attribute ZeroTrustAccessApplication#path_cookie_attribute}
    */
    readonly pathCookieAttribute?: boolean | cdktf.IResolvable;
    /**
    * The policies that Access applies to the application, in ascending order of precedence. Items can reference existing policies or create new policies exclusive to the application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#policies ZeroTrustAccessApplication#policies}
    */
    readonly policies?: ZeroTrustAccessApplicationPolicies[] | cdktf.IResolvable;
    /**
    * Allows matching Access Service Tokens passed HTTP in a single header with this name.
    * This works as an alternative to the (CF-Access-Client-Id, CF-Access-Client-Secret) pair of headers.
    * The header value will be interpreted as a json object similar to:
    *   {
    *     "cf-access-client-id": "88bf3b6d86161464f6509f7219099e57.access.example.com",
    *     "cf-access-client-secret": "bdd31cbc4dec990953e39163fbbb194c93313ca9f0a6e420346af9d326b1d2a5"
    *   }
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#read_service_tokens_from_header ZeroTrustAccessApplication#read_service_tokens_from_header}
    */
    readonly readServiceTokensFromHeader?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#saas_app ZeroTrustAccessApplication#saas_app}
    */
    readonly saasApp?: ZeroTrustAccessApplicationSaasApp;
    /**
    * Sets the SameSite cookie setting, which provides increased security against CSRF attacks.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#same_site_cookie_attribute ZeroTrustAccessApplication#same_site_cookie_attribute}
    */
    readonly sameSiteCookieAttribute?: string;
    /**
    * Configuration for provisioning to this application via SCIM. This is currently in closed beta.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#scim_config ZeroTrustAccessApplication#scim_config}
    */
    readonly scimConfig?: ZeroTrustAccessApplicationScimConfig;
    /**
    * List of public domains that Access will secure. This field is deprecated in favor of `destinations` and will be supported until **November 21, 2025.** If `destinations` are provided, then `self_hosted_domains` will be ignored.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#self_hosted_domains ZeroTrustAccessApplication#self_hosted_domains}
    */
    readonly selfHostedDomains?: string[];
    /**
    * Returns a 401 status code when the request is blocked by a Service Auth policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#service_auth_401_redirect ZeroTrustAccessApplication#service_auth_401_redirect}
    */
    readonly serviceAuth401Redirect?: boolean | cdktf.IResolvable;
    /**
    * The amount of time that tokens issued for this application will be valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s, m, h. Note: unsupported for infrastructure type applications.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#session_duration ZeroTrustAccessApplication#session_duration}
    */
    readonly sessionDuration?: string;
    /**
    * Determines when to skip the App Launcher landing page.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#skip_app_launcher_login_page ZeroTrustAccessApplication#skip_app_launcher_login_page}
    */
    readonly skipAppLauncherLoginPage?: boolean | cdktf.IResolvable;
    /**
    * Enables automatic authentication through cloudflared.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#skip_interstitial ZeroTrustAccessApplication#skip_interstitial}
    */
    readonly skipInterstitial?: boolean | cdktf.IResolvable;
    /**
    * The tags you want assigned to an application. Tags are used to filter applications in the App Launcher dashboard.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#tags ZeroTrustAccessApplication#tags}
    */
    readonly tags?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#target_criteria ZeroTrustAccessApplication#target_criteria}
    */
    readonly targetCriteria?: ZeroTrustAccessApplicationTargetCriteria[] | cdktf.IResolvable;
    /**
    * The application type.
    * Available values: "self_hosted", "saas", "ssh", "vnc", "app_launcher", "warp", "biso", "bookmark", "dash_sso", "infrastructure", "rdp", "mcp", "mcp_portal", "proxy_endpoint".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#type ZeroTrustAccessApplication#type}
    */
    readonly type?: string;
    /**
    * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#zone_id ZeroTrustAccessApplication#zone_id}
    */
    readonly zoneId?: string;
}
export interface ZeroTrustAccessApplicationCorsHeaders {
    /**
    * Allows all HTTP request headers.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#allow_all_headers ZeroTrustAccessApplication#allow_all_headers}
    */
    readonly allowAllHeaders?: boolean | cdktf.IResolvable;
    /**
    * Allows all HTTP request methods.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#allow_all_methods ZeroTrustAccessApplication#allow_all_methods}
    */
    readonly allowAllMethods?: boolean | cdktf.IResolvable;
    /**
    * Allows all origins.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#allow_all_origins ZeroTrustAccessApplication#allow_all_origins}
    */
    readonly allowAllOrigins?: boolean | cdktf.IResolvable;
    /**
    * When set to `true`, includes credentials (cookies, authorization headers, or TLS client certificates) with requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#allow_credentials ZeroTrustAccessApplication#allow_credentials}
    */
    readonly allowCredentials?: boolean | cdktf.IResolvable;
    /**
    * Allowed HTTP request headers.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#allowed_headers ZeroTrustAccessApplication#allowed_headers}
    */
    readonly allowedHeaders?: string[];
    /**
    * Allowed HTTP request methods.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#allowed_methods ZeroTrustAccessApplication#allowed_methods}
    */
    readonly allowedMethods?: string[];
    /**
    * Allowed origins.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#allowed_origins ZeroTrustAccessApplication#allowed_origins}
    */
    readonly allowedOrigins?: string[];
    /**
    * The maximum number of seconds the results of a preflight request can be cached.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#max_age ZeroTrustAccessApplication#max_age}
    */
    readonly maxAge?: number;
}
export declare function zeroTrustAccessApplicationCorsHeadersToTerraform(struct?: ZeroTrustAccessApplicationCorsHeaders | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationCorsHeadersToHclTerraform(struct?: ZeroTrustAccessApplicationCorsHeaders | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationCorsHeadersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationCorsHeaders | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationCorsHeaders | cdktf.IResolvable | undefined);
    private _allowAllHeaders?;
    get allowAllHeaders(): boolean | cdktf.IResolvable;
    set allowAllHeaders(value: boolean | cdktf.IResolvable);
    resetAllowAllHeaders(): void;
    get allowAllHeadersInput(): any;
    private _allowAllMethods?;
    get allowAllMethods(): boolean | cdktf.IResolvable;
    set allowAllMethods(value: boolean | cdktf.IResolvable);
    resetAllowAllMethods(): void;
    get allowAllMethodsInput(): any;
    private _allowAllOrigins?;
    get allowAllOrigins(): boolean | cdktf.IResolvable;
    set allowAllOrigins(value: boolean | cdktf.IResolvable);
    resetAllowAllOrigins(): void;
    get allowAllOriginsInput(): any;
    private _allowCredentials?;
    get allowCredentials(): boolean | cdktf.IResolvable;
    set allowCredentials(value: boolean | cdktf.IResolvable);
    resetAllowCredentials(): void;
    get allowCredentialsInput(): any;
    private _allowedHeaders?;
    get allowedHeaders(): string[];
    set allowedHeaders(value: string[]);
    resetAllowedHeaders(): void;
    get allowedHeadersInput(): string[];
    private _allowedMethods?;
    get allowedMethods(): string[];
    set allowedMethods(value: string[]);
    resetAllowedMethods(): void;
    get allowedMethodsInput(): string[];
    private _allowedOrigins?;
    get allowedOrigins(): string[];
    set allowedOrigins(value: string[]);
    resetAllowedOrigins(): void;
    get allowedOriginsInput(): string[];
    private _maxAge?;
    get maxAge(): number;
    set maxAge(value: number);
    resetMaxAge(): void;
    get maxAgeInput(): number;
}
export interface ZeroTrustAccessApplicationDestinations {
    /**
    * The CIDR range of the destination. Single IPs will be computed as /32.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#cidr ZeroTrustAccessApplication#cidr}
    */
    readonly cidr?: string;
    /**
    * The hostname of the destination. Matches a valid SNI served by an HTTPS origin.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#hostname ZeroTrustAccessApplication#hostname}
    */
    readonly hostname?: string;
    /**
    * The L4 protocol of the destination. When omitted, both UDP and TCP traffic will match.
    * Available values: "tcp", "udp".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#l4_protocol ZeroTrustAccessApplication#l4_protocol}
    */
    readonly l4Protocol?: string;
    /**
    * A MCP server id configured in ai-controls. Access will secure the MCP server if accessed through a MCP portal.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#mcp_server_id ZeroTrustAccessApplication#mcp_server_id}
    */
    readonly mcpServerId?: string;
    /**
    * The port range of the destination. Can be a single port or a range of ports. When omitted, all ports will match.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#port_range ZeroTrustAccessApplication#port_range}
    */
    readonly portRange?: string;
    /**
    * Available values: "public", "private".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#type ZeroTrustAccessApplication#type}
    */
    readonly type?: string;
    /**
    * The URI of the destination. Public destinations' URIs can include a domain and path with [wildcards](https://developers.cloudflare.com/cloudflare-one/policies/access/app-paths/).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#uri ZeroTrustAccessApplication#uri}
    */
    readonly uri?: string;
    /**
    * The VNET ID to match the destination. When omitted, all VNETs will match.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#vnet_id ZeroTrustAccessApplication#vnet_id}
    */
    readonly vnetId?: string;
}
export declare function zeroTrustAccessApplicationDestinationsToTerraform(struct?: ZeroTrustAccessApplicationDestinations | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationDestinationsToHclTerraform(struct?: ZeroTrustAccessApplicationDestinations | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationDestinationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ZeroTrustAccessApplicationDestinations | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationDestinations | cdktf.IResolvable | undefined);
    private _cidr?;
    get cidr(): string;
    set cidr(value: string);
    resetCidr(): void;
    get cidrInput(): string;
    private _hostname?;
    get hostname(): string;
    set hostname(value: string);
    resetHostname(): void;
    get hostnameInput(): string;
    private _l4Protocol?;
    get l4Protocol(): string;
    set l4Protocol(value: string);
    resetL4Protocol(): void;
    get l4ProtocolInput(): string;
    private _mcpServerId?;
    get mcpServerId(): string;
    set mcpServerId(value: string);
    resetMcpServerId(): void;
    get mcpServerIdInput(): string;
    private _portRange?;
    get portRange(): string;
    set portRange(value: string);
    resetPortRange(): void;
    get portRangeInput(): string;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string;
    private _uri?;
    get uri(): string;
    set uri(value: string);
    resetUri(): void;
    get uriInput(): string;
    private _vnetId?;
    get vnetId(): string;
    set vnetId(value: string);
    resetVnetId(): void;
    get vnetIdInput(): string;
}
export declare class ZeroTrustAccessApplicationDestinationsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ZeroTrustAccessApplicationDestinations[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ZeroTrustAccessApplicationDestinationsOutputReference;
}
export interface ZeroTrustAccessApplicationFooterLinks {
    /**
    * The hypertext in the footer link.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#name ZeroTrustAccessApplication#name}
    */
    readonly name: string;
    /**
    * the hyperlink in the footer link.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#url ZeroTrustAccessApplication#url}
    */
    readonly url: string;
}
export declare function zeroTrustAccessApplicationFooterLinksToTerraform(struct?: ZeroTrustAccessApplicationFooterLinks | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationFooterLinksToHclTerraform(struct?: ZeroTrustAccessApplicationFooterLinks | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationFooterLinksOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ZeroTrustAccessApplicationFooterLinks | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationFooterLinks | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _url?;
    get url(): string;
    set url(value: string);
    get urlInput(): string;
}
export declare class ZeroTrustAccessApplicationFooterLinksList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ZeroTrustAccessApplicationFooterLinks[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ZeroTrustAccessApplicationFooterLinksOutputReference;
}
export interface ZeroTrustAccessApplicationLandingPageDesign {
    /**
    * The background color of the log in button on the landing page.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#button_color ZeroTrustAccessApplication#button_color}
    */
    readonly buttonColor?: string;
    /**
    * The color of the text in the log in button on the landing page.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#button_text_color ZeroTrustAccessApplication#button_text_color}
    */
    readonly buttonTextColor?: string;
    /**
    * The URL of the image shown on the landing page.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#image_url ZeroTrustAccessApplication#image_url}
    */
    readonly imageUrl?: string;
    /**
    * The message shown on the landing page.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#message ZeroTrustAccessApplication#message}
    */
    readonly message?: string;
    /**
    * The title shown on the landing page.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#title ZeroTrustAccessApplication#title}
    */
    readonly title?: string;
}
export declare function zeroTrustAccessApplicationLandingPageDesignToTerraform(struct?: ZeroTrustAccessApplicationLandingPageDesign | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationLandingPageDesignToHclTerraform(struct?: ZeroTrustAccessApplicationLandingPageDesign | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationLandingPageDesignOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationLandingPageDesign | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationLandingPageDesign | cdktf.IResolvable | undefined);
    private _buttonColor?;
    get buttonColor(): string;
    set buttonColor(value: string);
    resetButtonColor(): void;
    get buttonColorInput(): string;
    private _buttonTextColor?;
    get buttonTextColor(): string;
    set buttonTextColor(value: string);
    resetButtonTextColor(): void;
    get buttonTextColorInput(): string;
    private _imageUrl?;
    get imageUrl(): string;
    set imageUrl(value: string);
    resetImageUrl(): void;
    get imageUrlInput(): string;
    private _message?;
    get message(): string;
    set message(value: string);
    resetMessage(): void;
    get messageInput(): string;
    private _title?;
    get title(): string;
    set title(value: string);
    resetTitle(): void;
    get titleInput(): string;
}
export interface ZeroTrustAccessApplicationOauthConfigurationDynamicClientRegistration {
    /**
    * Allows any client with redirect URIs on localhost.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#allow_any_on_localhost ZeroTrustAccessApplication#allow_any_on_localhost}
    */
    readonly allowAnyOnLocalhost?: boolean | cdktf.IResolvable;
    /**
    * Allows any client with redirect URIs on 127.0.0.1.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#allow_any_on_loopback ZeroTrustAccessApplication#allow_any_on_loopback}
    */
    readonly allowAnyOnLoopback?: boolean | cdktf.IResolvable;
    /**
    * The URIs that are allowed as redirect URIs for dynamically registered clients. Must use the `https` protocol. Paths may end in `/*` to match all sub-paths.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#allowed_uris ZeroTrustAccessApplication#allowed_uris}
    */
    readonly allowedUris?: string[];
    /**
    * Whether dynamic client registration is enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#enabled ZeroTrustAccessApplication#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
}
export declare function zeroTrustAccessApplicationOauthConfigurationDynamicClientRegistrationToTerraform(struct?: ZeroTrustAccessApplicationOauthConfigurationDynamicClientRegistration | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationOauthConfigurationDynamicClientRegistrationToHclTerraform(struct?: ZeroTrustAccessApplicationOauthConfigurationDynamicClientRegistration | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationOauthConfigurationDynamicClientRegistrationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationOauthConfigurationDynamicClientRegistration | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationOauthConfigurationDynamicClientRegistration | cdktf.IResolvable | undefined);
    private _allowAnyOnLocalhost?;
    get allowAnyOnLocalhost(): boolean | cdktf.IResolvable;
    set allowAnyOnLocalhost(value: boolean | cdktf.IResolvable);
    resetAllowAnyOnLocalhost(): void;
    get allowAnyOnLocalhostInput(): any;
    private _allowAnyOnLoopback?;
    get allowAnyOnLoopback(): boolean | cdktf.IResolvable;
    set allowAnyOnLoopback(value: boolean | cdktf.IResolvable);
    resetAllowAnyOnLoopback(): void;
    get allowAnyOnLoopbackInput(): any;
    private _allowedUris?;
    get allowedUris(): string[];
    set allowedUris(value: string[]);
    resetAllowedUris(): void;
    get allowedUrisInput(): string[];
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): any;
}
export interface ZeroTrustAccessApplicationOauthConfigurationGrant {
    /**
    * The lifetime of the access token. Must be in the format `300ms` or `2h45m`. Valid time units are ns, us (or µs), ms, s, m, h.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#access_token_lifetime ZeroTrustAccessApplication#access_token_lifetime}
    */
    readonly accessTokenLifetime?: string;
    /**
    * The duration of the OAuth session. Must be in the format `300ms` or `2h45m`. Valid time units are ns, us (or µs), ms, s, m, h.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#session_duration ZeroTrustAccessApplication#session_duration}
    */
    readonly sessionDuration?: string;
}
export declare function zeroTrustAccessApplicationOauthConfigurationGrantToTerraform(struct?: ZeroTrustAccessApplicationOauthConfigurationGrant | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationOauthConfigurationGrantToHclTerraform(struct?: ZeroTrustAccessApplicationOauthConfigurationGrant | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationOauthConfigurationGrantOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationOauthConfigurationGrant | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationOauthConfigurationGrant | cdktf.IResolvable | undefined);
    private _accessTokenLifetime?;
    get accessTokenLifetime(): string;
    set accessTokenLifetime(value: string);
    resetAccessTokenLifetime(): void;
    get accessTokenLifetimeInput(): string;
    private _sessionDuration?;
    get sessionDuration(): string;
    set sessionDuration(value: string);
    resetSessionDuration(): void;
    get sessionDurationInput(): string;
}
export interface ZeroTrustAccessApplicationOauthConfiguration {
    /**
    * Settings for OAuth dynamic client registration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#dynamic_client_registration ZeroTrustAccessApplication#dynamic_client_registration}
    */
    readonly dynamicClientRegistration?: ZeroTrustAccessApplicationOauthConfigurationDynamicClientRegistration;
    /**
    * Whether the OAuth configuration is enabled for this application. When set to `false`, Access will not handle OAuth for this application. Defaults to `true` if omitted.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#enabled ZeroTrustAccessApplication#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Settings for OAuth grant behavior.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#grant ZeroTrustAccessApplication#grant}
    */
    readonly grant?: ZeroTrustAccessApplicationOauthConfigurationGrant;
}
export declare function zeroTrustAccessApplicationOauthConfigurationToTerraform(struct?: ZeroTrustAccessApplicationOauthConfiguration | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationOauthConfigurationToHclTerraform(struct?: ZeroTrustAccessApplicationOauthConfiguration | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationOauthConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationOauthConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationOauthConfiguration | cdktf.IResolvable | undefined);
    private _dynamicClientRegistration;
    get dynamicClientRegistration(): ZeroTrustAccessApplicationOauthConfigurationDynamicClientRegistrationOutputReference;
    putDynamicClientRegistration(value: ZeroTrustAccessApplicationOauthConfigurationDynamicClientRegistration): void;
    resetDynamicClientRegistration(): void;
    get dynamicClientRegistrationInput(): any;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): any;
    private _grant;
    get grant(): ZeroTrustAccessApplicationOauthConfigurationGrantOutputReference;
    putGrant(value: ZeroTrustAccessApplicationOauthConfigurationGrant): void;
    resetGrant(): void;
    get grantInput(): any;
}
export interface ZeroTrustAccessApplicationPoliciesConnectionRulesRdp {
    /**
    * Clipboard formats allowed when copying from local machine to remote RDP session.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#allowed_clipboard_local_to_remote_formats ZeroTrustAccessApplication#allowed_clipboard_local_to_remote_formats}
    */
    readonly allowedClipboardLocalToRemoteFormats?: string[];
    /**
    * Clipboard formats allowed when copying from remote RDP session to local machine.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#allowed_clipboard_remote_to_local_formats ZeroTrustAccessApplication#allowed_clipboard_remote_to_local_formats}
    */
    readonly allowedClipboardRemoteToLocalFormats?: string[];
}
export declare function zeroTrustAccessApplicationPoliciesConnectionRulesRdpToTerraform(struct?: ZeroTrustAccessApplicationPoliciesConnectionRulesRdp | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesConnectionRulesRdpToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesConnectionRulesRdp | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesConnectionRulesRdpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesConnectionRulesRdp | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesConnectionRulesRdp | cdktf.IResolvable | undefined);
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
export interface ZeroTrustAccessApplicationPoliciesConnectionRulesSsh {
    /**
    * Enables using Identity Provider email alias as SSH username.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#allow_email_alias ZeroTrustAccessApplication#allow_email_alias}
    */
    readonly allowEmailAlias?: boolean | cdktf.IResolvable;
    /**
    * Contains the Unix usernames that may be used when connecting over SSH.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#usernames ZeroTrustAccessApplication#usernames}
    */
    readonly usernames: string[];
}
export declare function zeroTrustAccessApplicationPoliciesConnectionRulesSshToTerraform(struct?: ZeroTrustAccessApplicationPoliciesConnectionRulesSsh | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesConnectionRulesSshToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesConnectionRulesSsh | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesConnectionRulesSshOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesConnectionRulesSsh | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesConnectionRulesSsh | cdktf.IResolvable | undefined);
    private _allowEmailAlias?;
    get allowEmailAlias(): boolean | cdktf.IResolvable;
    set allowEmailAlias(value: boolean | cdktf.IResolvable);
    resetAllowEmailAlias(): void;
    get allowEmailAliasInput(): any;
    private _usernames?;
    get usernames(): string[];
    set usernames(value: string[]);
    get usernamesInput(): string[];
}
export interface ZeroTrustAccessApplicationPoliciesConnectionRules {
    /**
    * The RDP-specific rules that define clipboard behavior for RDP connections.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#rdp ZeroTrustAccessApplication#rdp}
    */
    readonly rdp?: ZeroTrustAccessApplicationPoliciesConnectionRulesRdp;
    /**
    * The SSH-specific rules that define how users may connect to the targets secured by your application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#ssh ZeroTrustAccessApplication#ssh}
    */
    readonly ssh?: ZeroTrustAccessApplicationPoliciesConnectionRulesSsh;
}
export declare function zeroTrustAccessApplicationPoliciesConnectionRulesToTerraform(struct?: ZeroTrustAccessApplicationPoliciesConnectionRules | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesConnectionRulesToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesConnectionRules | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesConnectionRulesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesConnectionRules | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesConnectionRules | cdktf.IResolvable | undefined);
    private _rdp;
    get rdp(): ZeroTrustAccessApplicationPoliciesConnectionRulesRdpOutputReference;
    putRdp(value: ZeroTrustAccessApplicationPoliciesConnectionRulesRdp): void;
    resetRdp(): void;
    get rdpInput(): any;
    private _ssh;
    get ssh(): ZeroTrustAccessApplicationPoliciesConnectionRulesSshOutputReference;
    putSsh(value: ZeroTrustAccessApplicationPoliciesConnectionRulesSsh): void;
    resetSsh(): void;
    get sshInput(): any;
}
export interface ZeroTrustAccessApplicationPoliciesExcludeAnyValidServiceToken {
}
export declare function zeroTrustAccessApplicationPoliciesExcludeAnyValidServiceTokenToTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeAnyValidServiceToken | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesExcludeAnyValidServiceTokenToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeAnyValidServiceToken | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesExcludeAnyValidServiceTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesExcludeAnyValidServiceToken | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesExcludeAnyValidServiceToken | cdktf.IResolvable | undefined);
}
export interface ZeroTrustAccessApplicationPoliciesExcludeAuthContext {
    /**
    * The ACID of an Authentication context.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#ac_id ZeroTrustAccessApplication#ac_id}
    */
    readonly acId: string;
    /**
    * The ID of an Authentication context.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#id ZeroTrustAccessApplication#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
    /**
    * The ID of your Azure identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#identity_provider_id ZeroTrustAccessApplication#identity_provider_id}
    */
    readonly identityProviderId: string;
}
export declare function zeroTrustAccessApplicationPoliciesExcludeAuthContextToTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeAuthContext | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesExcludeAuthContextToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeAuthContext | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesExcludeAuthContextOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesExcludeAuthContext | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesExcludeAuthContext | cdktf.IResolvable | undefined);
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
export interface ZeroTrustAccessApplicationPoliciesExcludeAuthMethod {
    /**
    * The type of authentication method https://datatracker.ietf.org/doc/html/rfc8176#section-2.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#auth_method ZeroTrustAccessApplication#auth_method}
    */
    readonly authMethod: string;
}
export declare function zeroTrustAccessApplicationPoliciesExcludeAuthMethodToTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeAuthMethod | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesExcludeAuthMethodToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeAuthMethod | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesExcludeAuthMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesExcludeAuthMethod | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesExcludeAuthMethod | cdktf.IResolvable | undefined);
    private _authMethod?;
    get authMethod(): string;
    set authMethod(value: string);
    get authMethodInput(): string;
}
export interface ZeroTrustAccessApplicationPoliciesExcludeAzureAd {
    /**
    * The ID of an Azure group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#id ZeroTrustAccessApplication#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
    /**
    * The ID of your Azure identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#identity_provider_id ZeroTrustAccessApplication#identity_provider_id}
    */
    readonly identityProviderId: string;
}
export declare function zeroTrustAccessApplicationPoliciesExcludeAzureAdToTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeAzureAd | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesExcludeAzureAdToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeAzureAd | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesExcludeAzureAdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesExcludeAzureAd | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesExcludeAzureAd | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    private _identityProviderId?;
    get identityProviderId(): string;
    set identityProviderId(value: string);
    get identityProviderIdInput(): string;
}
export interface ZeroTrustAccessApplicationPoliciesExcludeCertificate {
}
export declare function zeroTrustAccessApplicationPoliciesExcludeCertificateToTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeCertificate | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesExcludeCertificateToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeCertificate | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesExcludeCertificateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesExcludeCertificate | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesExcludeCertificate | cdktf.IResolvable | undefined);
}
export interface ZeroTrustAccessApplicationPoliciesExcludeCommonName {
    /**
    * The common name to match.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#common_name ZeroTrustAccessApplication#common_name}
    */
    readonly commonName: string;
}
export declare function zeroTrustAccessApplicationPoliciesExcludeCommonNameToTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeCommonName | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesExcludeCommonNameToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeCommonName | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesExcludeCommonNameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesExcludeCommonName | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesExcludeCommonName | cdktf.IResolvable | undefined);
    private _commonName?;
    get commonName(): string;
    set commonName(value: string);
    get commonNameInput(): string;
}
export interface ZeroTrustAccessApplicationPoliciesExcludeDevicePosture {
    /**
    * The ID of a device posture integration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#integration_uid ZeroTrustAccessApplication#integration_uid}
    */
    readonly integrationUid: string;
}
export declare function zeroTrustAccessApplicationPoliciesExcludeDevicePostureToTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeDevicePosture | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesExcludeDevicePostureToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeDevicePosture | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesExcludeDevicePostureOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesExcludeDevicePosture | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesExcludeDevicePosture | cdktf.IResolvable | undefined);
    private _integrationUid?;
    get integrationUid(): string;
    set integrationUid(value: string);
    get integrationUidInput(): string;
}
export interface ZeroTrustAccessApplicationPoliciesExcludeEmail {
    /**
    * The email of the user.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#email ZeroTrustAccessApplication#email}
    */
    readonly email: string;
}
export declare function zeroTrustAccessApplicationPoliciesExcludeEmailToTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeEmail | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesExcludeEmailToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeEmail | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesExcludeEmailOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesExcludeEmail | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesExcludeEmail | cdktf.IResolvable | undefined);
    private _email?;
    get email(): string;
    set email(value: string);
    get emailInput(): string;
}
export interface ZeroTrustAccessApplicationPoliciesExcludeEmailDomain {
    /**
    * The email domain to match.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#domain ZeroTrustAccessApplication#domain}
    */
    readonly domain: string;
}
export declare function zeroTrustAccessApplicationPoliciesExcludeEmailDomainToTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeEmailDomain | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesExcludeEmailDomainToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeEmailDomain | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesExcludeEmailDomainOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesExcludeEmailDomain | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesExcludeEmailDomain | cdktf.IResolvable | undefined);
    private _domain?;
    get domain(): string;
    set domain(value: string);
    get domainInput(): string;
}
export interface ZeroTrustAccessApplicationPoliciesExcludeEmailListStruct {
    /**
    * The ID of a previously created email list.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#id ZeroTrustAccessApplication#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
}
export declare function zeroTrustAccessApplicationPoliciesExcludeEmailListStructToTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeEmailListStruct | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesExcludeEmailListStructToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeEmailListStruct | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesExcludeEmailListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesExcludeEmailListStruct | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesExcludeEmailListStruct | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
}
export interface ZeroTrustAccessApplicationPoliciesExcludeEveryone {
}
export declare function zeroTrustAccessApplicationPoliciesExcludeEveryoneToTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeEveryone | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesExcludeEveryoneToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeEveryone | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesExcludeEveryoneOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesExcludeEveryone | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesExcludeEveryone | cdktf.IResolvable | undefined);
}
export interface ZeroTrustAccessApplicationPoliciesExcludeExternalEvaluation {
    /**
    * The API endpoint containing your business logic.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#evaluate_url ZeroTrustAccessApplication#evaluate_url}
    */
    readonly evaluateUrl: string;
    /**
    * The API endpoint containing the key that Access uses to verify that the response came from your API.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#keys_url ZeroTrustAccessApplication#keys_url}
    */
    readonly keysUrl: string;
}
export declare function zeroTrustAccessApplicationPoliciesExcludeExternalEvaluationToTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeExternalEvaluation | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesExcludeExternalEvaluationToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeExternalEvaluation | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesExcludeExternalEvaluationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesExcludeExternalEvaluation | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesExcludeExternalEvaluation | cdktf.IResolvable | undefined);
    private _evaluateUrl?;
    get evaluateUrl(): string;
    set evaluateUrl(value: string);
    get evaluateUrlInput(): string;
    private _keysUrl?;
    get keysUrl(): string;
    set keysUrl(value: string);
    get keysUrlInput(): string;
}
export interface ZeroTrustAccessApplicationPoliciesExcludeGeo {
    /**
    * The country code that should be matched.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#country_code ZeroTrustAccessApplication#country_code}
    */
    readonly countryCode: string;
}
export declare function zeroTrustAccessApplicationPoliciesExcludeGeoToTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeGeo | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesExcludeGeoToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeGeo | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesExcludeGeoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesExcludeGeo | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesExcludeGeo | cdktf.IResolvable | undefined);
    private _countryCode?;
    get countryCode(): string;
    set countryCode(value: string);
    get countryCodeInput(): string;
}
export interface ZeroTrustAccessApplicationPoliciesExcludeGithubOrganization {
    /**
    * The ID of your Github identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#identity_provider_id ZeroTrustAccessApplication#identity_provider_id}
    */
    readonly identityProviderId: string;
    /**
    * The name of the organization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#name ZeroTrustAccessApplication#name}
    */
    readonly name: string;
    /**
    * The name of the team
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#team ZeroTrustAccessApplication#team}
    */
    readonly team?: string;
}
export declare function zeroTrustAccessApplicationPoliciesExcludeGithubOrganizationToTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeGithubOrganization | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesExcludeGithubOrganizationToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeGithubOrganization | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesExcludeGithubOrganizationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesExcludeGithubOrganization | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesExcludeGithubOrganization | cdktf.IResolvable | undefined);
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
export interface ZeroTrustAccessApplicationPoliciesExcludeGroup {
    /**
    * The ID of a previously created Access group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#id ZeroTrustAccessApplication#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
}
export declare function zeroTrustAccessApplicationPoliciesExcludeGroupToTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeGroup | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesExcludeGroupToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeGroup | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesExcludeGroupOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesExcludeGroup | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesExcludeGroup | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
}
export interface ZeroTrustAccessApplicationPoliciesExcludeGsuite {
    /**
    * The email of the Google Workspace group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#email ZeroTrustAccessApplication#email}
    */
    readonly email: string;
    /**
    * The ID of your Google Workspace identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#identity_provider_id ZeroTrustAccessApplication#identity_provider_id}
    */
    readonly identityProviderId: string;
}
export declare function zeroTrustAccessApplicationPoliciesExcludeGsuiteToTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeGsuite | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesExcludeGsuiteToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeGsuite | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesExcludeGsuiteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesExcludeGsuite | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesExcludeGsuite | cdktf.IResolvable | undefined);
    private _email?;
    get email(): string;
    set email(value: string);
    get emailInput(): string;
    private _identityProviderId?;
    get identityProviderId(): string;
    set identityProviderId(value: string);
    get identityProviderIdInput(): string;
}
export interface ZeroTrustAccessApplicationPoliciesExcludeIp {
    /**
    * An IPv4 or IPv6 CIDR block.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#ip ZeroTrustAccessApplication#ip}
    */
    readonly ip: string;
}
export declare function zeroTrustAccessApplicationPoliciesExcludeIpToTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeIp | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesExcludeIpToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeIp | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesExcludeIpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesExcludeIp | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesExcludeIp | cdktf.IResolvable | undefined);
    private _ip?;
    get ip(): string;
    set ip(value: string);
    get ipInput(): string;
}
export interface ZeroTrustAccessApplicationPoliciesExcludeIpListStruct {
    /**
    * The ID of a previously created IP list.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#id ZeroTrustAccessApplication#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
}
export declare function zeroTrustAccessApplicationPoliciesExcludeIpListStructToTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeIpListStruct | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesExcludeIpListStructToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeIpListStruct | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesExcludeIpListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesExcludeIpListStruct | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesExcludeIpListStruct | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
}
export interface ZeroTrustAccessApplicationPoliciesExcludeLinkedAppToken {
    /**
    * The ID of an Access OIDC SaaS application
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#app_uid ZeroTrustAccessApplication#app_uid}
    */
    readonly appUid: string;
}
export declare function zeroTrustAccessApplicationPoliciesExcludeLinkedAppTokenToTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeLinkedAppToken | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesExcludeLinkedAppTokenToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeLinkedAppToken | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesExcludeLinkedAppTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesExcludeLinkedAppToken | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesExcludeLinkedAppToken | cdktf.IResolvable | undefined);
    private _appUid?;
    get appUid(): string;
    set appUid(value: string);
    get appUidInput(): string;
}
export interface ZeroTrustAccessApplicationPoliciesExcludeLoginMethod {
    /**
    * The ID of an identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#id ZeroTrustAccessApplication#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
}
export declare function zeroTrustAccessApplicationPoliciesExcludeLoginMethodToTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeLoginMethod | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesExcludeLoginMethodToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeLoginMethod | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesExcludeLoginMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesExcludeLoginMethod | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesExcludeLoginMethod | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
}
export interface ZeroTrustAccessApplicationPoliciesExcludeOidc {
    /**
    * The name of the OIDC claim.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#claim_name ZeroTrustAccessApplication#claim_name}
    */
    readonly claimName: string;
    /**
    * The OIDC claim value to look for.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#claim_value ZeroTrustAccessApplication#claim_value}
    */
    readonly claimValue: string;
    /**
    * The ID of your OIDC identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#identity_provider_id ZeroTrustAccessApplication#identity_provider_id}
    */
    readonly identityProviderId: string;
}
export declare function zeroTrustAccessApplicationPoliciesExcludeOidcToTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeOidc | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesExcludeOidcToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeOidc | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesExcludeOidcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesExcludeOidc | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesExcludeOidc | cdktf.IResolvable | undefined);
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
export interface ZeroTrustAccessApplicationPoliciesExcludeOkta {
    /**
    * The ID of your Okta identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#identity_provider_id ZeroTrustAccessApplication#identity_provider_id}
    */
    readonly identityProviderId: string;
    /**
    * The name of the Okta group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#name ZeroTrustAccessApplication#name}
    */
    readonly name: string;
}
export declare function zeroTrustAccessApplicationPoliciesExcludeOktaToTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeOkta | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesExcludeOktaToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeOkta | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesExcludeOktaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesExcludeOkta | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesExcludeOkta | cdktf.IResolvable | undefined);
    private _identityProviderId?;
    get identityProviderId(): string;
    set identityProviderId(value: string);
    get identityProviderIdInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface ZeroTrustAccessApplicationPoliciesExcludeSaml {
    /**
    * The name of the SAML attribute.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#attribute_name ZeroTrustAccessApplication#attribute_name}
    */
    readonly attributeName: string;
    /**
    * The SAML attribute value to look for.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#attribute_value ZeroTrustAccessApplication#attribute_value}
    */
    readonly attributeValue: string;
    /**
    * The ID of your SAML identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#identity_provider_id ZeroTrustAccessApplication#identity_provider_id}
    */
    readonly identityProviderId: string;
}
export declare function zeroTrustAccessApplicationPoliciesExcludeSamlToTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeSaml | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesExcludeSamlToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeSaml | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesExcludeSamlOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesExcludeSaml | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesExcludeSaml | cdktf.IResolvable | undefined);
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
export interface ZeroTrustAccessApplicationPoliciesExcludeServiceToken {
    /**
    * The ID of a Service Token.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#token_id ZeroTrustAccessApplication#token_id}
    */
    readonly tokenId: string;
}
export declare function zeroTrustAccessApplicationPoliciesExcludeServiceTokenToTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeServiceToken | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesExcludeServiceTokenToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeServiceToken | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesExcludeServiceTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesExcludeServiceToken | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesExcludeServiceToken | cdktf.IResolvable | undefined);
    private _tokenId?;
    get tokenId(): string;
    set tokenId(value: string);
    get tokenIdInput(): string;
}
export interface ZeroTrustAccessApplicationPoliciesExclude {
    /**
    * An empty object which matches on all service tokens.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#any_valid_service_token ZeroTrustAccessApplication#any_valid_service_token}
    */
    readonly anyValidServiceToken?: ZeroTrustAccessApplicationPoliciesExcludeAnyValidServiceToken;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#auth_context ZeroTrustAccessApplication#auth_context}
    */
    readonly authContext?: ZeroTrustAccessApplicationPoliciesExcludeAuthContext;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#auth_method ZeroTrustAccessApplication#auth_method}
    */
    readonly authMethod?: ZeroTrustAccessApplicationPoliciesExcludeAuthMethod;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#azure_ad ZeroTrustAccessApplication#azure_ad}
    */
    readonly azureAd?: ZeroTrustAccessApplicationPoliciesExcludeAzureAd;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#certificate ZeroTrustAccessApplication#certificate}
    */
    readonly certificate?: ZeroTrustAccessApplicationPoliciesExcludeCertificate;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#common_name ZeroTrustAccessApplication#common_name}
    */
    readonly commonName?: ZeroTrustAccessApplicationPoliciesExcludeCommonName;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#device_posture ZeroTrustAccessApplication#device_posture}
    */
    readonly devicePosture?: ZeroTrustAccessApplicationPoliciesExcludeDevicePosture;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#email ZeroTrustAccessApplication#email}
    */
    readonly email?: ZeroTrustAccessApplicationPoliciesExcludeEmail;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#email_domain ZeroTrustAccessApplication#email_domain}
    */
    readonly emailDomain?: ZeroTrustAccessApplicationPoliciesExcludeEmailDomain;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#email_list ZeroTrustAccessApplication#email_list}
    */
    readonly emailList?: ZeroTrustAccessApplicationPoliciesExcludeEmailListStruct;
    /**
    * An empty object which matches on all users.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#everyone ZeroTrustAccessApplication#everyone}
    */
    readonly everyone?: ZeroTrustAccessApplicationPoliciesExcludeEveryone;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#external_evaluation ZeroTrustAccessApplication#external_evaluation}
    */
    readonly externalEvaluation?: ZeroTrustAccessApplicationPoliciesExcludeExternalEvaluation;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#geo ZeroTrustAccessApplication#geo}
    */
    readonly geo?: ZeroTrustAccessApplicationPoliciesExcludeGeo;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#github_organization ZeroTrustAccessApplication#github_organization}
    */
    readonly githubOrganization?: ZeroTrustAccessApplicationPoliciesExcludeGithubOrganization;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#group ZeroTrustAccessApplication#group}
    */
    readonly group?: ZeroTrustAccessApplicationPoliciesExcludeGroup;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#gsuite ZeroTrustAccessApplication#gsuite}
    */
    readonly gsuite?: ZeroTrustAccessApplicationPoliciesExcludeGsuite;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#ip ZeroTrustAccessApplication#ip}
    */
    readonly ip?: ZeroTrustAccessApplicationPoliciesExcludeIp;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#ip_list ZeroTrustAccessApplication#ip_list}
    */
    readonly ipList?: ZeroTrustAccessApplicationPoliciesExcludeIpListStruct;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#linked_app_token ZeroTrustAccessApplication#linked_app_token}
    */
    readonly linkedAppToken?: ZeroTrustAccessApplicationPoliciesExcludeLinkedAppToken;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#login_method ZeroTrustAccessApplication#login_method}
    */
    readonly loginMethod?: ZeroTrustAccessApplicationPoliciesExcludeLoginMethod;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#oidc ZeroTrustAccessApplication#oidc}
    */
    readonly oidc?: ZeroTrustAccessApplicationPoliciesExcludeOidc;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#okta ZeroTrustAccessApplication#okta}
    */
    readonly okta?: ZeroTrustAccessApplicationPoliciesExcludeOkta;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#saml ZeroTrustAccessApplication#saml}
    */
    readonly saml?: ZeroTrustAccessApplicationPoliciesExcludeSaml;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#service_token ZeroTrustAccessApplication#service_token}
    */
    readonly serviceToken?: ZeroTrustAccessApplicationPoliciesExcludeServiceToken;
}
export declare function zeroTrustAccessApplicationPoliciesExcludeToTerraform(struct?: ZeroTrustAccessApplicationPoliciesExclude | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesExcludeToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesExclude | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesExcludeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ZeroTrustAccessApplicationPoliciesExclude | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesExclude | cdktf.IResolvable | undefined);
    private _anyValidServiceToken;
    get anyValidServiceToken(): ZeroTrustAccessApplicationPoliciesExcludeAnyValidServiceTokenOutputReference;
    putAnyValidServiceToken(value: ZeroTrustAccessApplicationPoliciesExcludeAnyValidServiceToken): void;
    resetAnyValidServiceToken(): void;
    get anyValidServiceTokenInput(): any;
    private _authContext;
    get authContext(): ZeroTrustAccessApplicationPoliciesExcludeAuthContextOutputReference;
    putAuthContext(value: ZeroTrustAccessApplicationPoliciesExcludeAuthContext): void;
    resetAuthContext(): void;
    get authContextInput(): any;
    private _authMethod;
    get authMethod(): ZeroTrustAccessApplicationPoliciesExcludeAuthMethodOutputReference;
    putAuthMethod(value: ZeroTrustAccessApplicationPoliciesExcludeAuthMethod): void;
    resetAuthMethod(): void;
    get authMethodInput(): any;
    private _azureAd;
    get azureAd(): ZeroTrustAccessApplicationPoliciesExcludeAzureAdOutputReference;
    putAzureAd(value: ZeroTrustAccessApplicationPoliciesExcludeAzureAd): void;
    resetAzureAd(): void;
    get azureAdInput(): any;
    private _certificate;
    get certificate(): ZeroTrustAccessApplicationPoliciesExcludeCertificateOutputReference;
    putCertificate(value: ZeroTrustAccessApplicationPoliciesExcludeCertificate): void;
    resetCertificate(): void;
    get certificateInput(): any;
    private _commonName;
    get commonName(): ZeroTrustAccessApplicationPoliciesExcludeCommonNameOutputReference;
    putCommonName(value: ZeroTrustAccessApplicationPoliciesExcludeCommonName): void;
    resetCommonName(): void;
    get commonNameInput(): any;
    private _devicePosture;
    get devicePosture(): ZeroTrustAccessApplicationPoliciesExcludeDevicePostureOutputReference;
    putDevicePosture(value: ZeroTrustAccessApplicationPoliciesExcludeDevicePosture): void;
    resetDevicePosture(): void;
    get devicePostureInput(): any;
    private _email;
    get email(): ZeroTrustAccessApplicationPoliciesExcludeEmailOutputReference;
    putEmail(value: ZeroTrustAccessApplicationPoliciesExcludeEmail): void;
    resetEmail(): void;
    get emailInput(): any;
    private _emailDomain;
    get emailDomain(): ZeroTrustAccessApplicationPoliciesExcludeEmailDomainOutputReference;
    putEmailDomain(value: ZeroTrustAccessApplicationPoliciesExcludeEmailDomain): void;
    resetEmailDomain(): void;
    get emailDomainInput(): any;
    private _emailList;
    get emailList(): ZeroTrustAccessApplicationPoliciesExcludeEmailListStructOutputReference;
    putEmailList(value: ZeroTrustAccessApplicationPoliciesExcludeEmailListStruct): void;
    resetEmailList(): void;
    get emailListInput(): any;
    private _everyone;
    get everyone(): ZeroTrustAccessApplicationPoliciesExcludeEveryoneOutputReference;
    putEveryone(value: ZeroTrustAccessApplicationPoliciesExcludeEveryone): void;
    resetEveryone(): void;
    get everyoneInput(): any;
    private _externalEvaluation;
    get externalEvaluation(): ZeroTrustAccessApplicationPoliciesExcludeExternalEvaluationOutputReference;
    putExternalEvaluation(value: ZeroTrustAccessApplicationPoliciesExcludeExternalEvaluation): void;
    resetExternalEvaluation(): void;
    get externalEvaluationInput(): any;
    private _geo;
    get geo(): ZeroTrustAccessApplicationPoliciesExcludeGeoOutputReference;
    putGeo(value: ZeroTrustAccessApplicationPoliciesExcludeGeo): void;
    resetGeo(): void;
    get geoInput(): any;
    private _githubOrganization;
    get githubOrganization(): ZeroTrustAccessApplicationPoliciesExcludeGithubOrganizationOutputReference;
    putGithubOrganization(value: ZeroTrustAccessApplicationPoliciesExcludeGithubOrganization): void;
    resetGithubOrganization(): void;
    get githubOrganizationInput(): any;
    private _group;
    get group(): ZeroTrustAccessApplicationPoliciesExcludeGroupOutputReference;
    putGroup(value: ZeroTrustAccessApplicationPoliciesExcludeGroup): void;
    resetGroup(): void;
    get groupInput(): any;
    private _gsuite;
    get gsuite(): ZeroTrustAccessApplicationPoliciesExcludeGsuiteOutputReference;
    putGsuite(value: ZeroTrustAccessApplicationPoliciesExcludeGsuite): void;
    resetGsuite(): void;
    get gsuiteInput(): any;
    private _ip;
    get ip(): ZeroTrustAccessApplicationPoliciesExcludeIpOutputReference;
    putIp(value: ZeroTrustAccessApplicationPoliciesExcludeIp): void;
    resetIp(): void;
    get ipInput(): any;
    private _ipList;
    get ipList(): ZeroTrustAccessApplicationPoliciesExcludeIpListStructOutputReference;
    putIpList(value: ZeroTrustAccessApplicationPoliciesExcludeIpListStruct): void;
    resetIpList(): void;
    get ipListInput(): any;
    private _linkedAppToken;
    get linkedAppToken(): ZeroTrustAccessApplicationPoliciesExcludeLinkedAppTokenOutputReference;
    putLinkedAppToken(value: ZeroTrustAccessApplicationPoliciesExcludeLinkedAppToken): void;
    resetLinkedAppToken(): void;
    get linkedAppTokenInput(): any;
    private _loginMethod;
    get loginMethod(): ZeroTrustAccessApplicationPoliciesExcludeLoginMethodOutputReference;
    putLoginMethod(value: ZeroTrustAccessApplicationPoliciesExcludeLoginMethod): void;
    resetLoginMethod(): void;
    get loginMethodInput(): any;
    private _oidc;
    get oidc(): ZeroTrustAccessApplicationPoliciesExcludeOidcOutputReference;
    putOidc(value: ZeroTrustAccessApplicationPoliciesExcludeOidc): void;
    resetOidc(): void;
    get oidcInput(): any;
    private _okta;
    get okta(): ZeroTrustAccessApplicationPoliciesExcludeOktaOutputReference;
    putOkta(value: ZeroTrustAccessApplicationPoliciesExcludeOkta): void;
    resetOkta(): void;
    get oktaInput(): any;
    private _saml;
    get saml(): ZeroTrustAccessApplicationPoliciesExcludeSamlOutputReference;
    putSaml(value: ZeroTrustAccessApplicationPoliciesExcludeSaml): void;
    resetSaml(): void;
    get samlInput(): any;
    private _serviceToken;
    get serviceToken(): ZeroTrustAccessApplicationPoliciesExcludeServiceTokenOutputReference;
    putServiceToken(value: ZeroTrustAccessApplicationPoliciesExcludeServiceToken): void;
    resetServiceToken(): void;
    get serviceTokenInput(): any;
}
export declare class ZeroTrustAccessApplicationPoliciesExcludeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ZeroTrustAccessApplicationPoliciesExclude[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ZeroTrustAccessApplicationPoliciesExcludeOutputReference;
}
export interface ZeroTrustAccessApplicationPoliciesIncludeAnyValidServiceToken {
}
export declare function zeroTrustAccessApplicationPoliciesIncludeAnyValidServiceTokenToTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeAnyValidServiceToken | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesIncludeAnyValidServiceTokenToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeAnyValidServiceToken | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesIncludeAnyValidServiceTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesIncludeAnyValidServiceToken | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesIncludeAnyValidServiceToken | cdktf.IResolvable | undefined);
}
export interface ZeroTrustAccessApplicationPoliciesIncludeAuthContext {
    /**
    * The ACID of an Authentication context.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#ac_id ZeroTrustAccessApplication#ac_id}
    */
    readonly acId: string;
    /**
    * The ID of an Authentication context.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#id ZeroTrustAccessApplication#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
    /**
    * The ID of your Azure identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#identity_provider_id ZeroTrustAccessApplication#identity_provider_id}
    */
    readonly identityProviderId: string;
}
export declare function zeroTrustAccessApplicationPoliciesIncludeAuthContextToTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeAuthContext | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesIncludeAuthContextToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeAuthContext | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesIncludeAuthContextOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesIncludeAuthContext | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesIncludeAuthContext | cdktf.IResolvable | undefined);
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
export interface ZeroTrustAccessApplicationPoliciesIncludeAuthMethod {
    /**
    * The type of authentication method https://datatracker.ietf.org/doc/html/rfc8176#section-2.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#auth_method ZeroTrustAccessApplication#auth_method}
    */
    readonly authMethod: string;
}
export declare function zeroTrustAccessApplicationPoliciesIncludeAuthMethodToTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeAuthMethod | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesIncludeAuthMethodToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeAuthMethod | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesIncludeAuthMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesIncludeAuthMethod | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesIncludeAuthMethod | cdktf.IResolvable | undefined);
    private _authMethod?;
    get authMethod(): string;
    set authMethod(value: string);
    get authMethodInput(): string;
}
export interface ZeroTrustAccessApplicationPoliciesIncludeAzureAd {
    /**
    * The ID of an Azure group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#id ZeroTrustAccessApplication#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
    /**
    * The ID of your Azure identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#identity_provider_id ZeroTrustAccessApplication#identity_provider_id}
    */
    readonly identityProviderId: string;
}
export declare function zeroTrustAccessApplicationPoliciesIncludeAzureAdToTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeAzureAd | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesIncludeAzureAdToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeAzureAd | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesIncludeAzureAdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesIncludeAzureAd | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesIncludeAzureAd | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    private _identityProviderId?;
    get identityProviderId(): string;
    set identityProviderId(value: string);
    get identityProviderIdInput(): string;
}
export interface ZeroTrustAccessApplicationPoliciesIncludeCertificate {
}
export declare function zeroTrustAccessApplicationPoliciesIncludeCertificateToTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeCertificate | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesIncludeCertificateToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeCertificate | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesIncludeCertificateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesIncludeCertificate | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesIncludeCertificate | cdktf.IResolvable | undefined);
}
export interface ZeroTrustAccessApplicationPoliciesIncludeCommonName {
    /**
    * The common name to match.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#common_name ZeroTrustAccessApplication#common_name}
    */
    readonly commonName: string;
}
export declare function zeroTrustAccessApplicationPoliciesIncludeCommonNameToTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeCommonName | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesIncludeCommonNameToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeCommonName | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesIncludeCommonNameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesIncludeCommonName | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesIncludeCommonName | cdktf.IResolvable | undefined);
    private _commonName?;
    get commonName(): string;
    set commonName(value: string);
    get commonNameInput(): string;
}
export interface ZeroTrustAccessApplicationPoliciesIncludeDevicePosture {
    /**
    * The ID of a device posture integration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#integration_uid ZeroTrustAccessApplication#integration_uid}
    */
    readonly integrationUid: string;
}
export declare function zeroTrustAccessApplicationPoliciesIncludeDevicePostureToTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeDevicePosture | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesIncludeDevicePostureToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeDevicePosture | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesIncludeDevicePostureOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesIncludeDevicePosture | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesIncludeDevicePosture | cdktf.IResolvable | undefined);
    private _integrationUid?;
    get integrationUid(): string;
    set integrationUid(value: string);
    get integrationUidInput(): string;
}
export interface ZeroTrustAccessApplicationPoliciesIncludeEmail {
    /**
    * The email of the user.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#email ZeroTrustAccessApplication#email}
    */
    readonly email: string;
}
export declare function zeroTrustAccessApplicationPoliciesIncludeEmailToTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeEmail | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesIncludeEmailToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeEmail | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesIncludeEmailOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesIncludeEmail | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesIncludeEmail | cdktf.IResolvable | undefined);
    private _email?;
    get email(): string;
    set email(value: string);
    get emailInput(): string;
}
export interface ZeroTrustAccessApplicationPoliciesIncludeEmailDomain {
    /**
    * The email domain to match.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#domain ZeroTrustAccessApplication#domain}
    */
    readonly domain: string;
}
export declare function zeroTrustAccessApplicationPoliciesIncludeEmailDomainToTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeEmailDomain | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesIncludeEmailDomainToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeEmailDomain | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesIncludeEmailDomainOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesIncludeEmailDomain | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesIncludeEmailDomain | cdktf.IResolvable | undefined);
    private _domain?;
    get domain(): string;
    set domain(value: string);
    get domainInput(): string;
}
export interface ZeroTrustAccessApplicationPoliciesIncludeEmailListStruct {
    /**
    * The ID of a previously created email list.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#id ZeroTrustAccessApplication#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
}
export declare function zeroTrustAccessApplicationPoliciesIncludeEmailListStructToTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeEmailListStruct | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesIncludeEmailListStructToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeEmailListStruct | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesIncludeEmailListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesIncludeEmailListStruct | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesIncludeEmailListStruct | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
}
export interface ZeroTrustAccessApplicationPoliciesIncludeEveryone {
}
export declare function zeroTrustAccessApplicationPoliciesIncludeEveryoneToTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeEveryone | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesIncludeEveryoneToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeEveryone | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesIncludeEveryoneOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesIncludeEveryone | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesIncludeEveryone | cdktf.IResolvable | undefined);
}
export interface ZeroTrustAccessApplicationPoliciesIncludeExternalEvaluation {
    /**
    * The API endpoint containing your business logic.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#evaluate_url ZeroTrustAccessApplication#evaluate_url}
    */
    readonly evaluateUrl: string;
    /**
    * The API endpoint containing the key that Access uses to verify that the response came from your API.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#keys_url ZeroTrustAccessApplication#keys_url}
    */
    readonly keysUrl: string;
}
export declare function zeroTrustAccessApplicationPoliciesIncludeExternalEvaluationToTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeExternalEvaluation | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesIncludeExternalEvaluationToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeExternalEvaluation | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesIncludeExternalEvaluationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesIncludeExternalEvaluation | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesIncludeExternalEvaluation | cdktf.IResolvable | undefined);
    private _evaluateUrl?;
    get evaluateUrl(): string;
    set evaluateUrl(value: string);
    get evaluateUrlInput(): string;
    private _keysUrl?;
    get keysUrl(): string;
    set keysUrl(value: string);
    get keysUrlInput(): string;
}
export interface ZeroTrustAccessApplicationPoliciesIncludeGeo {
    /**
    * The country code that should be matched.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#country_code ZeroTrustAccessApplication#country_code}
    */
    readonly countryCode: string;
}
export declare function zeroTrustAccessApplicationPoliciesIncludeGeoToTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeGeo | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesIncludeGeoToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeGeo | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesIncludeGeoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesIncludeGeo | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesIncludeGeo | cdktf.IResolvable | undefined);
    private _countryCode?;
    get countryCode(): string;
    set countryCode(value: string);
    get countryCodeInput(): string;
}
export interface ZeroTrustAccessApplicationPoliciesIncludeGithubOrganization {
    /**
    * The ID of your Github identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#identity_provider_id ZeroTrustAccessApplication#identity_provider_id}
    */
    readonly identityProviderId: string;
    /**
    * The name of the organization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#name ZeroTrustAccessApplication#name}
    */
    readonly name: string;
    /**
    * The name of the team
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#team ZeroTrustAccessApplication#team}
    */
    readonly team?: string;
}
export declare function zeroTrustAccessApplicationPoliciesIncludeGithubOrganizationToTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeGithubOrganization | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesIncludeGithubOrganizationToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeGithubOrganization | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesIncludeGithubOrganizationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesIncludeGithubOrganization | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesIncludeGithubOrganization | cdktf.IResolvable | undefined);
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
export interface ZeroTrustAccessApplicationPoliciesIncludeGroup {
    /**
    * The ID of a previously created Access group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#id ZeroTrustAccessApplication#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
}
export declare function zeroTrustAccessApplicationPoliciesIncludeGroupToTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeGroup | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesIncludeGroupToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeGroup | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesIncludeGroupOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesIncludeGroup | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesIncludeGroup | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
}
export interface ZeroTrustAccessApplicationPoliciesIncludeGsuite {
    /**
    * The email of the Google Workspace group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#email ZeroTrustAccessApplication#email}
    */
    readonly email: string;
    /**
    * The ID of your Google Workspace identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#identity_provider_id ZeroTrustAccessApplication#identity_provider_id}
    */
    readonly identityProviderId: string;
}
export declare function zeroTrustAccessApplicationPoliciesIncludeGsuiteToTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeGsuite | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesIncludeGsuiteToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeGsuite | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesIncludeGsuiteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesIncludeGsuite | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesIncludeGsuite | cdktf.IResolvable | undefined);
    private _email?;
    get email(): string;
    set email(value: string);
    get emailInput(): string;
    private _identityProviderId?;
    get identityProviderId(): string;
    set identityProviderId(value: string);
    get identityProviderIdInput(): string;
}
export interface ZeroTrustAccessApplicationPoliciesIncludeIp {
    /**
    * An IPv4 or IPv6 CIDR block.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#ip ZeroTrustAccessApplication#ip}
    */
    readonly ip: string;
}
export declare function zeroTrustAccessApplicationPoliciesIncludeIpToTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeIp | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesIncludeIpToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeIp | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesIncludeIpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesIncludeIp | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesIncludeIp | cdktf.IResolvable | undefined);
    private _ip?;
    get ip(): string;
    set ip(value: string);
    get ipInput(): string;
}
export interface ZeroTrustAccessApplicationPoliciesIncludeIpListStruct {
    /**
    * The ID of a previously created IP list.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#id ZeroTrustAccessApplication#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
}
export declare function zeroTrustAccessApplicationPoliciesIncludeIpListStructToTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeIpListStruct | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesIncludeIpListStructToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeIpListStruct | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesIncludeIpListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesIncludeIpListStruct | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesIncludeIpListStruct | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
}
export interface ZeroTrustAccessApplicationPoliciesIncludeLinkedAppToken {
    /**
    * The ID of an Access OIDC SaaS application
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#app_uid ZeroTrustAccessApplication#app_uid}
    */
    readonly appUid: string;
}
export declare function zeroTrustAccessApplicationPoliciesIncludeLinkedAppTokenToTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeLinkedAppToken | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesIncludeLinkedAppTokenToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeLinkedAppToken | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesIncludeLinkedAppTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesIncludeLinkedAppToken | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesIncludeLinkedAppToken | cdktf.IResolvable | undefined);
    private _appUid?;
    get appUid(): string;
    set appUid(value: string);
    get appUidInput(): string;
}
export interface ZeroTrustAccessApplicationPoliciesIncludeLoginMethod {
    /**
    * The ID of an identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#id ZeroTrustAccessApplication#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
}
export declare function zeroTrustAccessApplicationPoliciesIncludeLoginMethodToTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeLoginMethod | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesIncludeLoginMethodToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeLoginMethod | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesIncludeLoginMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesIncludeLoginMethod | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesIncludeLoginMethod | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
}
export interface ZeroTrustAccessApplicationPoliciesIncludeOidc {
    /**
    * The name of the OIDC claim.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#claim_name ZeroTrustAccessApplication#claim_name}
    */
    readonly claimName: string;
    /**
    * The OIDC claim value to look for.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#claim_value ZeroTrustAccessApplication#claim_value}
    */
    readonly claimValue: string;
    /**
    * The ID of your OIDC identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#identity_provider_id ZeroTrustAccessApplication#identity_provider_id}
    */
    readonly identityProviderId: string;
}
export declare function zeroTrustAccessApplicationPoliciesIncludeOidcToTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeOidc | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesIncludeOidcToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeOidc | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesIncludeOidcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesIncludeOidc | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesIncludeOidc | cdktf.IResolvable | undefined);
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
export interface ZeroTrustAccessApplicationPoliciesIncludeOkta {
    /**
    * The ID of your Okta identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#identity_provider_id ZeroTrustAccessApplication#identity_provider_id}
    */
    readonly identityProviderId: string;
    /**
    * The name of the Okta group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#name ZeroTrustAccessApplication#name}
    */
    readonly name: string;
}
export declare function zeroTrustAccessApplicationPoliciesIncludeOktaToTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeOkta | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesIncludeOktaToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeOkta | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesIncludeOktaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesIncludeOkta | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesIncludeOkta | cdktf.IResolvable | undefined);
    private _identityProviderId?;
    get identityProviderId(): string;
    set identityProviderId(value: string);
    get identityProviderIdInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface ZeroTrustAccessApplicationPoliciesIncludeSaml {
    /**
    * The name of the SAML attribute.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#attribute_name ZeroTrustAccessApplication#attribute_name}
    */
    readonly attributeName: string;
    /**
    * The SAML attribute value to look for.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#attribute_value ZeroTrustAccessApplication#attribute_value}
    */
    readonly attributeValue: string;
    /**
    * The ID of your SAML identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#identity_provider_id ZeroTrustAccessApplication#identity_provider_id}
    */
    readonly identityProviderId: string;
}
export declare function zeroTrustAccessApplicationPoliciesIncludeSamlToTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeSaml | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesIncludeSamlToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeSaml | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesIncludeSamlOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesIncludeSaml | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesIncludeSaml | cdktf.IResolvable | undefined);
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
export interface ZeroTrustAccessApplicationPoliciesIncludeServiceToken {
    /**
    * The ID of a Service Token.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#token_id ZeroTrustAccessApplication#token_id}
    */
    readonly tokenId: string;
}
export declare function zeroTrustAccessApplicationPoliciesIncludeServiceTokenToTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeServiceToken | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesIncludeServiceTokenToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeServiceToken | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesIncludeServiceTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesIncludeServiceToken | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesIncludeServiceToken | cdktf.IResolvable | undefined);
    private _tokenId?;
    get tokenId(): string;
    set tokenId(value: string);
    get tokenIdInput(): string;
}
export interface ZeroTrustAccessApplicationPoliciesInclude {
    /**
    * An empty object which matches on all service tokens.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#any_valid_service_token ZeroTrustAccessApplication#any_valid_service_token}
    */
    readonly anyValidServiceToken?: ZeroTrustAccessApplicationPoliciesIncludeAnyValidServiceToken;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#auth_context ZeroTrustAccessApplication#auth_context}
    */
    readonly authContext?: ZeroTrustAccessApplicationPoliciesIncludeAuthContext;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#auth_method ZeroTrustAccessApplication#auth_method}
    */
    readonly authMethod?: ZeroTrustAccessApplicationPoliciesIncludeAuthMethod;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#azure_ad ZeroTrustAccessApplication#azure_ad}
    */
    readonly azureAd?: ZeroTrustAccessApplicationPoliciesIncludeAzureAd;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#certificate ZeroTrustAccessApplication#certificate}
    */
    readonly certificate?: ZeroTrustAccessApplicationPoliciesIncludeCertificate;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#common_name ZeroTrustAccessApplication#common_name}
    */
    readonly commonName?: ZeroTrustAccessApplicationPoliciesIncludeCommonName;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#device_posture ZeroTrustAccessApplication#device_posture}
    */
    readonly devicePosture?: ZeroTrustAccessApplicationPoliciesIncludeDevicePosture;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#email ZeroTrustAccessApplication#email}
    */
    readonly email?: ZeroTrustAccessApplicationPoliciesIncludeEmail;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#email_domain ZeroTrustAccessApplication#email_domain}
    */
    readonly emailDomain?: ZeroTrustAccessApplicationPoliciesIncludeEmailDomain;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#email_list ZeroTrustAccessApplication#email_list}
    */
    readonly emailList?: ZeroTrustAccessApplicationPoliciesIncludeEmailListStruct;
    /**
    * An empty object which matches on all users.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#everyone ZeroTrustAccessApplication#everyone}
    */
    readonly everyone?: ZeroTrustAccessApplicationPoliciesIncludeEveryone;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#external_evaluation ZeroTrustAccessApplication#external_evaluation}
    */
    readonly externalEvaluation?: ZeroTrustAccessApplicationPoliciesIncludeExternalEvaluation;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#geo ZeroTrustAccessApplication#geo}
    */
    readonly geo?: ZeroTrustAccessApplicationPoliciesIncludeGeo;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#github_organization ZeroTrustAccessApplication#github_organization}
    */
    readonly githubOrganization?: ZeroTrustAccessApplicationPoliciesIncludeGithubOrganization;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#group ZeroTrustAccessApplication#group}
    */
    readonly group?: ZeroTrustAccessApplicationPoliciesIncludeGroup;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#gsuite ZeroTrustAccessApplication#gsuite}
    */
    readonly gsuite?: ZeroTrustAccessApplicationPoliciesIncludeGsuite;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#ip ZeroTrustAccessApplication#ip}
    */
    readonly ip?: ZeroTrustAccessApplicationPoliciesIncludeIp;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#ip_list ZeroTrustAccessApplication#ip_list}
    */
    readonly ipList?: ZeroTrustAccessApplicationPoliciesIncludeIpListStruct;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#linked_app_token ZeroTrustAccessApplication#linked_app_token}
    */
    readonly linkedAppToken?: ZeroTrustAccessApplicationPoliciesIncludeLinkedAppToken;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#login_method ZeroTrustAccessApplication#login_method}
    */
    readonly loginMethod?: ZeroTrustAccessApplicationPoliciesIncludeLoginMethod;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#oidc ZeroTrustAccessApplication#oidc}
    */
    readonly oidc?: ZeroTrustAccessApplicationPoliciesIncludeOidc;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#okta ZeroTrustAccessApplication#okta}
    */
    readonly okta?: ZeroTrustAccessApplicationPoliciesIncludeOkta;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#saml ZeroTrustAccessApplication#saml}
    */
    readonly saml?: ZeroTrustAccessApplicationPoliciesIncludeSaml;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#service_token ZeroTrustAccessApplication#service_token}
    */
    readonly serviceToken?: ZeroTrustAccessApplicationPoliciesIncludeServiceToken;
}
export declare function zeroTrustAccessApplicationPoliciesIncludeToTerraform(struct?: ZeroTrustAccessApplicationPoliciesInclude | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesIncludeToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesInclude | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesIncludeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ZeroTrustAccessApplicationPoliciesInclude | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesInclude | cdktf.IResolvable | undefined);
    private _anyValidServiceToken;
    get anyValidServiceToken(): ZeroTrustAccessApplicationPoliciesIncludeAnyValidServiceTokenOutputReference;
    putAnyValidServiceToken(value: ZeroTrustAccessApplicationPoliciesIncludeAnyValidServiceToken): void;
    resetAnyValidServiceToken(): void;
    get anyValidServiceTokenInput(): any;
    private _authContext;
    get authContext(): ZeroTrustAccessApplicationPoliciesIncludeAuthContextOutputReference;
    putAuthContext(value: ZeroTrustAccessApplicationPoliciesIncludeAuthContext): void;
    resetAuthContext(): void;
    get authContextInput(): any;
    private _authMethod;
    get authMethod(): ZeroTrustAccessApplicationPoliciesIncludeAuthMethodOutputReference;
    putAuthMethod(value: ZeroTrustAccessApplicationPoliciesIncludeAuthMethod): void;
    resetAuthMethod(): void;
    get authMethodInput(): any;
    private _azureAd;
    get azureAd(): ZeroTrustAccessApplicationPoliciesIncludeAzureAdOutputReference;
    putAzureAd(value: ZeroTrustAccessApplicationPoliciesIncludeAzureAd): void;
    resetAzureAd(): void;
    get azureAdInput(): any;
    private _certificate;
    get certificate(): ZeroTrustAccessApplicationPoliciesIncludeCertificateOutputReference;
    putCertificate(value: ZeroTrustAccessApplicationPoliciesIncludeCertificate): void;
    resetCertificate(): void;
    get certificateInput(): any;
    private _commonName;
    get commonName(): ZeroTrustAccessApplicationPoliciesIncludeCommonNameOutputReference;
    putCommonName(value: ZeroTrustAccessApplicationPoliciesIncludeCommonName): void;
    resetCommonName(): void;
    get commonNameInput(): any;
    private _devicePosture;
    get devicePosture(): ZeroTrustAccessApplicationPoliciesIncludeDevicePostureOutputReference;
    putDevicePosture(value: ZeroTrustAccessApplicationPoliciesIncludeDevicePosture): void;
    resetDevicePosture(): void;
    get devicePostureInput(): any;
    private _email;
    get email(): ZeroTrustAccessApplicationPoliciesIncludeEmailOutputReference;
    putEmail(value: ZeroTrustAccessApplicationPoliciesIncludeEmail): void;
    resetEmail(): void;
    get emailInput(): any;
    private _emailDomain;
    get emailDomain(): ZeroTrustAccessApplicationPoliciesIncludeEmailDomainOutputReference;
    putEmailDomain(value: ZeroTrustAccessApplicationPoliciesIncludeEmailDomain): void;
    resetEmailDomain(): void;
    get emailDomainInput(): any;
    private _emailList;
    get emailList(): ZeroTrustAccessApplicationPoliciesIncludeEmailListStructOutputReference;
    putEmailList(value: ZeroTrustAccessApplicationPoliciesIncludeEmailListStruct): void;
    resetEmailList(): void;
    get emailListInput(): any;
    private _everyone;
    get everyone(): ZeroTrustAccessApplicationPoliciesIncludeEveryoneOutputReference;
    putEveryone(value: ZeroTrustAccessApplicationPoliciesIncludeEveryone): void;
    resetEveryone(): void;
    get everyoneInput(): any;
    private _externalEvaluation;
    get externalEvaluation(): ZeroTrustAccessApplicationPoliciesIncludeExternalEvaluationOutputReference;
    putExternalEvaluation(value: ZeroTrustAccessApplicationPoliciesIncludeExternalEvaluation): void;
    resetExternalEvaluation(): void;
    get externalEvaluationInput(): any;
    private _geo;
    get geo(): ZeroTrustAccessApplicationPoliciesIncludeGeoOutputReference;
    putGeo(value: ZeroTrustAccessApplicationPoliciesIncludeGeo): void;
    resetGeo(): void;
    get geoInput(): any;
    private _githubOrganization;
    get githubOrganization(): ZeroTrustAccessApplicationPoliciesIncludeGithubOrganizationOutputReference;
    putGithubOrganization(value: ZeroTrustAccessApplicationPoliciesIncludeGithubOrganization): void;
    resetGithubOrganization(): void;
    get githubOrganizationInput(): any;
    private _group;
    get group(): ZeroTrustAccessApplicationPoliciesIncludeGroupOutputReference;
    putGroup(value: ZeroTrustAccessApplicationPoliciesIncludeGroup): void;
    resetGroup(): void;
    get groupInput(): any;
    private _gsuite;
    get gsuite(): ZeroTrustAccessApplicationPoliciesIncludeGsuiteOutputReference;
    putGsuite(value: ZeroTrustAccessApplicationPoliciesIncludeGsuite): void;
    resetGsuite(): void;
    get gsuiteInput(): any;
    private _ip;
    get ip(): ZeroTrustAccessApplicationPoliciesIncludeIpOutputReference;
    putIp(value: ZeroTrustAccessApplicationPoliciesIncludeIp): void;
    resetIp(): void;
    get ipInput(): any;
    private _ipList;
    get ipList(): ZeroTrustAccessApplicationPoliciesIncludeIpListStructOutputReference;
    putIpList(value: ZeroTrustAccessApplicationPoliciesIncludeIpListStruct): void;
    resetIpList(): void;
    get ipListInput(): any;
    private _linkedAppToken;
    get linkedAppToken(): ZeroTrustAccessApplicationPoliciesIncludeLinkedAppTokenOutputReference;
    putLinkedAppToken(value: ZeroTrustAccessApplicationPoliciesIncludeLinkedAppToken): void;
    resetLinkedAppToken(): void;
    get linkedAppTokenInput(): any;
    private _loginMethod;
    get loginMethod(): ZeroTrustAccessApplicationPoliciesIncludeLoginMethodOutputReference;
    putLoginMethod(value: ZeroTrustAccessApplicationPoliciesIncludeLoginMethod): void;
    resetLoginMethod(): void;
    get loginMethodInput(): any;
    private _oidc;
    get oidc(): ZeroTrustAccessApplicationPoliciesIncludeOidcOutputReference;
    putOidc(value: ZeroTrustAccessApplicationPoliciesIncludeOidc): void;
    resetOidc(): void;
    get oidcInput(): any;
    private _okta;
    get okta(): ZeroTrustAccessApplicationPoliciesIncludeOktaOutputReference;
    putOkta(value: ZeroTrustAccessApplicationPoliciesIncludeOkta): void;
    resetOkta(): void;
    get oktaInput(): any;
    private _saml;
    get saml(): ZeroTrustAccessApplicationPoliciesIncludeSamlOutputReference;
    putSaml(value: ZeroTrustAccessApplicationPoliciesIncludeSaml): void;
    resetSaml(): void;
    get samlInput(): any;
    private _serviceToken;
    get serviceToken(): ZeroTrustAccessApplicationPoliciesIncludeServiceTokenOutputReference;
    putServiceToken(value: ZeroTrustAccessApplicationPoliciesIncludeServiceToken): void;
    resetServiceToken(): void;
    get serviceTokenInput(): any;
}
export declare class ZeroTrustAccessApplicationPoliciesIncludeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ZeroTrustAccessApplicationPoliciesInclude[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ZeroTrustAccessApplicationPoliciesIncludeOutputReference;
}
export interface ZeroTrustAccessApplicationPoliciesRequireAnyValidServiceToken {
}
export declare function zeroTrustAccessApplicationPoliciesRequireAnyValidServiceTokenToTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireAnyValidServiceToken | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesRequireAnyValidServiceTokenToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireAnyValidServiceToken | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesRequireAnyValidServiceTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesRequireAnyValidServiceToken | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesRequireAnyValidServiceToken | cdktf.IResolvable | undefined);
}
export interface ZeroTrustAccessApplicationPoliciesRequireAuthContext {
    /**
    * The ACID of an Authentication context.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#ac_id ZeroTrustAccessApplication#ac_id}
    */
    readonly acId: string;
    /**
    * The ID of an Authentication context.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#id ZeroTrustAccessApplication#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
    /**
    * The ID of your Azure identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#identity_provider_id ZeroTrustAccessApplication#identity_provider_id}
    */
    readonly identityProviderId: string;
}
export declare function zeroTrustAccessApplicationPoliciesRequireAuthContextToTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireAuthContext | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesRequireAuthContextToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireAuthContext | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesRequireAuthContextOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesRequireAuthContext | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesRequireAuthContext | cdktf.IResolvable | undefined);
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
export interface ZeroTrustAccessApplicationPoliciesRequireAuthMethod {
    /**
    * The type of authentication method https://datatracker.ietf.org/doc/html/rfc8176#section-2.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#auth_method ZeroTrustAccessApplication#auth_method}
    */
    readonly authMethod: string;
}
export declare function zeroTrustAccessApplicationPoliciesRequireAuthMethodToTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireAuthMethod | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesRequireAuthMethodToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireAuthMethod | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesRequireAuthMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesRequireAuthMethod | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesRequireAuthMethod | cdktf.IResolvable | undefined);
    private _authMethod?;
    get authMethod(): string;
    set authMethod(value: string);
    get authMethodInput(): string;
}
export interface ZeroTrustAccessApplicationPoliciesRequireAzureAd {
    /**
    * The ID of an Azure group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#id ZeroTrustAccessApplication#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
    /**
    * The ID of your Azure identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#identity_provider_id ZeroTrustAccessApplication#identity_provider_id}
    */
    readonly identityProviderId: string;
}
export declare function zeroTrustAccessApplicationPoliciesRequireAzureAdToTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireAzureAd | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesRequireAzureAdToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireAzureAd | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesRequireAzureAdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesRequireAzureAd | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesRequireAzureAd | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    private _identityProviderId?;
    get identityProviderId(): string;
    set identityProviderId(value: string);
    get identityProviderIdInput(): string;
}
export interface ZeroTrustAccessApplicationPoliciesRequireCertificate {
}
export declare function zeroTrustAccessApplicationPoliciesRequireCertificateToTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireCertificate | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesRequireCertificateToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireCertificate | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesRequireCertificateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesRequireCertificate | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesRequireCertificate | cdktf.IResolvable | undefined);
}
export interface ZeroTrustAccessApplicationPoliciesRequireCommonName {
    /**
    * The common name to match.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#common_name ZeroTrustAccessApplication#common_name}
    */
    readonly commonName: string;
}
export declare function zeroTrustAccessApplicationPoliciesRequireCommonNameToTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireCommonName | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesRequireCommonNameToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireCommonName | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesRequireCommonNameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesRequireCommonName | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesRequireCommonName | cdktf.IResolvable | undefined);
    private _commonName?;
    get commonName(): string;
    set commonName(value: string);
    get commonNameInput(): string;
}
export interface ZeroTrustAccessApplicationPoliciesRequireDevicePosture {
    /**
    * The ID of a device posture integration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#integration_uid ZeroTrustAccessApplication#integration_uid}
    */
    readonly integrationUid: string;
}
export declare function zeroTrustAccessApplicationPoliciesRequireDevicePostureToTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireDevicePosture | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesRequireDevicePostureToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireDevicePosture | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesRequireDevicePostureOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesRequireDevicePosture | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesRequireDevicePosture | cdktf.IResolvable | undefined);
    private _integrationUid?;
    get integrationUid(): string;
    set integrationUid(value: string);
    get integrationUidInput(): string;
}
export interface ZeroTrustAccessApplicationPoliciesRequireEmail {
    /**
    * The email of the user.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#email ZeroTrustAccessApplication#email}
    */
    readonly email: string;
}
export declare function zeroTrustAccessApplicationPoliciesRequireEmailToTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireEmail | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesRequireEmailToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireEmail | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesRequireEmailOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesRequireEmail | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesRequireEmail | cdktf.IResolvable | undefined);
    private _email?;
    get email(): string;
    set email(value: string);
    get emailInput(): string;
}
export interface ZeroTrustAccessApplicationPoliciesRequireEmailDomain {
    /**
    * The email domain to match.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#domain ZeroTrustAccessApplication#domain}
    */
    readonly domain: string;
}
export declare function zeroTrustAccessApplicationPoliciesRequireEmailDomainToTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireEmailDomain | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesRequireEmailDomainToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireEmailDomain | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesRequireEmailDomainOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesRequireEmailDomain | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesRequireEmailDomain | cdktf.IResolvable | undefined);
    private _domain?;
    get domain(): string;
    set domain(value: string);
    get domainInput(): string;
}
export interface ZeroTrustAccessApplicationPoliciesRequireEmailListStruct {
    /**
    * The ID of a previously created email list.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#id ZeroTrustAccessApplication#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
}
export declare function zeroTrustAccessApplicationPoliciesRequireEmailListStructToTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireEmailListStruct | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesRequireEmailListStructToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireEmailListStruct | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesRequireEmailListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesRequireEmailListStruct | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesRequireEmailListStruct | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
}
export interface ZeroTrustAccessApplicationPoliciesRequireEveryone {
}
export declare function zeroTrustAccessApplicationPoliciesRequireEveryoneToTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireEveryone | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesRequireEveryoneToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireEveryone | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesRequireEveryoneOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesRequireEveryone | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesRequireEveryone | cdktf.IResolvable | undefined);
}
export interface ZeroTrustAccessApplicationPoliciesRequireExternalEvaluation {
    /**
    * The API endpoint containing your business logic.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#evaluate_url ZeroTrustAccessApplication#evaluate_url}
    */
    readonly evaluateUrl: string;
    /**
    * The API endpoint containing the key that Access uses to verify that the response came from your API.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#keys_url ZeroTrustAccessApplication#keys_url}
    */
    readonly keysUrl: string;
}
export declare function zeroTrustAccessApplicationPoliciesRequireExternalEvaluationToTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireExternalEvaluation | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesRequireExternalEvaluationToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireExternalEvaluation | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesRequireExternalEvaluationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesRequireExternalEvaluation | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesRequireExternalEvaluation | cdktf.IResolvable | undefined);
    private _evaluateUrl?;
    get evaluateUrl(): string;
    set evaluateUrl(value: string);
    get evaluateUrlInput(): string;
    private _keysUrl?;
    get keysUrl(): string;
    set keysUrl(value: string);
    get keysUrlInput(): string;
}
export interface ZeroTrustAccessApplicationPoliciesRequireGeo {
    /**
    * The country code that should be matched.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#country_code ZeroTrustAccessApplication#country_code}
    */
    readonly countryCode: string;
}
export declare function zeroTrustAccessApplicationPoliciesRequireGeoToTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireGeo | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesRequireGeoToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireGeo | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesRequireGeoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesRequireGeo | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesRequireGeo | cdktf.IResolvable | undefined);
    private _countryCode?;
    get countryCode(): string;
    set countryCode(value: string);
    get countryCodeInput(): string;
}
export interface ZeroTrustAccessApplicationPoliciesRequireGithubOrganization {
    /**
    * The ID of your Github identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#identity_provider_id ZeroTrustAccessApplication#identity_provider_id}
    */
    readonly identityProviderId: string;
    /**
    * The name of the organization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#name ZeroTrustAccessApplication#name}
    */
    readonly name: string;
    /**
    * The name of the team
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#team ZeroTrustAccessApplication#team}
    */
    readonly team?: string;
}
export declare function zeroTrustAccessApplicationPoliciesRequireGithubOrganizationToTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireGithubOrganization | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesRequireGithubOrganizationToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireGithubOrganization | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesRequireGithubOrganizationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesRequireGithubOrganization | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesRequireGithubOrganization | cdktf.IResolvable | undefined);
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
export interface ZeroTrustAccessApplicationPoliciesRequireGroup {
    /**
    * The ID of a previously created Access group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#id ZeroTrustAccessApplication#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
}
export declare function zeroTrustAccessApplicationPoliciesRequireGroupToTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireGroup | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesRequireGroupToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireGroup | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesRequireGroupOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesRequireGroup | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesRequireGroup | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
}
export interface ZeroTrustAccessApplicationPoliciesRequireGsuite {
    /**
    * The email of the Google Workspace group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#email ZeroTrustAccessApplication#email}
    */
    readonly email: string;
    /**
    * The ID of your Google Workspace identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#identity_provider_id ZeroTrustAccessApplication#identity_provider_id}
    */
    readonly identityProviderId: string;
}
export declare function zeroTrustAccessApplicationPoliciesRequireGsuiteToTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireGsuite | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesRequireGsuiteToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireGsuite | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesRequireGsuiteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesRequireGsuite | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesRequireGsuite | cdktf.IResolvable | undefined);
    private _email?;
    get email(): string;
    set email(value: string);
    get emailInput(): string;
    private _identityProviderId?;
    get identityProviderId(): string;
    set identityProviderId(value: string);
    get identityProviderIdInput(): string;
}
export interface ZeroTrustAccessApplicationPoliciesRequireIp {
    /**
    * An IPv4 or IPv6 CIDR block.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#ip ZeroTrustAccessApplication#ip}
    */
    readonly ip: string;
}
export declare function zeroTrustAccessApplicationPoliciesRequireIpToTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireIp | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesRequireIpToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireIp | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesRequireIpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesRequireIp | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesRequireIp | cdktf.IResolvable | undefined);
    private _ip?;
    get ip(): string;
    set ip(value: string);
    get ipInput(): string;
}
export interface ZeroTrustAccessApplicationPoliciesRequireIpListStruct {
    /**
    * The ID of a previously created IP list.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#id ZeroTrustAccessApplication#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
}
export declare function zeroTrustAccessApplicationPoliciesRequireIpListStructToTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireIpListStruct | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesRequireIpListStructToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireIpListStruct | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesRequireIpListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesRequireIpListStruct | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesRequireIpListStruct | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
}
export interface ZeroTrustAccessApplicationPoliciesRequireLinkedAppToken {
    /**
    * The ID of an Access OIDC SaaS application
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#app_uid ZeroTrustAccessApplication#app_uid}
    */
    readonly appUid: string;
}
export declare function zeroTrustAccessApplicationPoliciesRequireLinkedAppTokenToTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireLinkedAppToken | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesRequireLinkedAppTokenToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireLinkedAppToken | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesRequireLinkedAppTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesRequireLinkedAppToken | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesRequireLinkedAppToken | cdktf.IResolvable | undefined);
    private _appUid?;
    get appUid(): string;
    set appUid(value: string);
    get appUidInput(): string;
}
export interface ZeroTrustAccessApplicationPoliciesRequireLoginMethod {
    /**
    * The ID of an identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#id ZeroTrustAccessApplication#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
}
export declare function zeroTrustAccessApplicationPoliciesRequireLoginMethodToTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireLoginMethod | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesRequireLoginMethodToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireLoginMethod | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesRequireLoginMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesRequireLoginMethod | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesRequireLoginMethod | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
}
export interface ZeroTrustAccessApplicationPoliciesRequireOidc {
    /**
    * The name of the OIDC claim.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#claim_name ZeroTrustAccessApplication#claim_name}
    */
    readonly claimName: string;
    /**
    * The OIDC claim value to look for.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#claim_value ZeroTrustAccessApplication#claim_value}
    */
    readonly claimValue: string;
    /**
    * The ID of your OIDC identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#identity_provider_id ZeroTrustAccessApplication#identity_provider_id}
    */
    readonly identityProviderId: string;
}
export declare function zeroTrustAccessApplicationPoliciesRequireOidcToTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireOidc | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesRequireOidcToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireOidc | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesRequireOidcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesRequireOidc | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesRequireOidc | cdktf.IResolvable | undefined);
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
export interface ZeroTrustAccessApplicationPoliciesRequireOkta {
    /**
    * The ID of your Okta identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#identity_provider_id ZeroTrustAccessApplication#identity_provider_id}
    */
    readonly identityProviderId: string;
    /**
    * The name of the Okta group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#name ZeroTrustAccessApplication#name}
    */
    readonly name: string;
}
export declare function zeroTrustAccessApplicationPoliciesRequireOktaToTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireOkta | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesRequireOktaToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireOkta | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesRequireOktaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesRequireOkta | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesRequireOkta | cdktf.IResolvable | undefined);
    private _identityProviderId?;
    get identityProviderId(): string;
    set identityProviderId(value: string);
    get identityProviderIdInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface ZeroTrustAccessApplicationPoliciesRequireSaml {
    /**
    * The name of the SAML attribute.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#attribute_name ZeroTrustAccessApplication#attribute_name}
    */
    readonly attributeName: string;
    /**
    * The SAML attribute value to look for.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#attribute_value ZeroTrustAccessApplication#attribute_value}
    */
    readonly attributeValue: string;
    /**
    * The ID of your SAML identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#identity_provider_id ZeroTrustAccessApplication#identity_provider_id}
    */
    readonly identityProviderId: string;
}
export declare function zeroTrustAccessApplicationPoliciesRequireSamlToTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireSaml | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesRequireSamlToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireSaml | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesRequireSamlOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesRequireSaml | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesRequireSaml | cdktf.IResolvable | undefined);
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
export interface ZeroTrustAccessApplicationPoliciesRequireServiceToken {
    /**
    * The ID of a Service Token.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#token_id ZeroTrustAccessApplication#token_id}
    */
    readonly tokenId: string;
}
export declare function zeroTrustAccessApplicationPoliciesRequireServiceTokenToTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireServiceToken | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesRequireServiceTokenToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireServiceToken | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesRequireServiceTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationPoliciesRequireServiceToken | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesRequireServiceToken | cdktf.IResolvable | undefined);
    private _tokenId?;
    get tokenId(): string;
    set tokenId(value: string);
    get tokenIdInput(): string;
}
export interface ZeroTrustAccessApplicationPoliciesRequire {
    /**
    * An empty object which matches on all service tokens.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#any_valid_service_token ZeroTrustAccessApplication#any_valid_service_token}
    */
    readonly anyValidServiceToken?: ZeroTrustAccessApplicationPoliciesRequireAnyValidServiceToken;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#auth_context ZeroTrustAccessApplication#auth_context}
    */
    readonly authContext?: ZeroTrustAccessApplicationPoliciesRequireAuthContext;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#auth_method ZeroTrustAccessApplication#auth_method}
    */
    readonly authMethod?: ZeroTrustAccessApplicationPoliciesRequireAuthMethod;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#azure_ad ZeroTrustAccessApplication#azure_ad}
    */
    readonly azureAd?: ZeroTrustAccessApplicationPoliciesRequireAzureAd;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#certificate ZeroTrustAccessApplication#certificate}
    */
    readonly certificate?: ZeroTrustAccessApplicationPoliciesRequireCertificate;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#common_name ZeroTrustAccessApplication#common_name}
    */
    readonly commonName?: ZeroTrustAccessApplicationPoliciesRequireCommonName;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#device_posture ZeroTrustAccessApplication#device_posture}
    */
    readonly devicePosture?: ZeroTrustAccessApplicationPoliciesRequireDevicePosture;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#email ZeroTrustAccessApplication#email}
    */
    readonly email?: ZeroTrustAccessApplicationPoliciesRequireEmail;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#email_domain ZeroTrustAccessApplication#email_domain}
    */
    readonly emailDomain?: ZeroTrustAccessApplicationPoliciesRequireEmailDomain;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#email_list ZeroTrustAccessApplication#email_list}
    */
    readonly emailList?: ZeroTrustAccessApplicationPoliciesRequireEmailListStruct;
    /**
    * An empty object which matches on all users.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#everyone ZeroTrustAccessApplication#everyone}
    */
    readonly everyone?: ZeroTrustAccessApplicationPoliciesRequireEveryone;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#external_evaluation ZeroTrustAccessApplication#external_evaluation}
    */
    readonly externalEvaluation?: ZeroTrustAccessApplicationPoliciesRequireExternalEvaluation;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#geo ZeroTrustAccessApplication#geo}
    */
    readonly geo?: ZeroTrustAccessApplicationPoliciesRequireGeo;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#github_organization ZeroTrustAccessApplication#github_organization}
    */
    readonly githubOrganization?: ZeroTrustAccessApplicationPoliciesRequireGithubOrganization;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#group ZeroTrustAccessApplication#group}
    */
    readonly group?: ZeroTrustAccessApplicationPoliciesRequireGroup;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#gsuite ZeroTrustAccessApplication#gsuite}
    */
    readonly gsuite?: ZeroTrustAccessApplicationPoliciesRequireGsuite;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#ip ZeroTrustAccessApplication#ip}
    */
    readonly ip?: ZeroTrustAccessApplicationPoliciesRequireIp;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#ip_list ZeroTrustAccessApplication#ip_list}
    */
    readonly ipList?: ZeroTrustAccessApplicationPoliciesRequireIpListStruct;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#linked_app_token ZeroTrustAccessApplication#linked_app_token}
    */
    readonly linkedAppToken?: ZeroTrustAccessApplicationPoliciesRequireLinkedAppToken;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#login_method ZeroTrustAccessApplication#login_method}
    */
    readonly loginMethod?: ZeroTrustAccessApplicationPoliciesRequireLoginMethod;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#oidc ZeroTrustAccessApplication#oidc}
    */
    readonly oidc?: ZeroTrustAccessApplicationPoliciesRequireOidc;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#okta ZeroTrustAccessApplication#okta}
    */
    readonly okta?: ZeroTrustAccessApplicationPoliciesRequireOkta;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#saml ZeroTrustAccessApplication#saml}
    */
    readonly saml?: ZeroTrustAccessApplicationPoliciesRequireSaml;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#service_token ZeroTrustAccessApplication#service_token}
    */
    readonly serviceToken?: ZeroTrustAccessApplicationPoliciesRequireServiceToken;
}
export declare function zeroTrustAccessApplicationPoliciesRequireToTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequire | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesRequireToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequire | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesRequireOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ZeroTrustAccessApplicationPoliciesRequire | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPoliciesRequire | cdktf.IResolvable | undefined);
    private _anyValidServiceToken;
    get anyValidServiceToken(): ZeroTrustAccessApplicationPoliciesRequireAnyValidServiceTokenOutputReference;
    putAnyValidServiceToken(value: ZeroTrustAccessApplicationPoliciesRequireAnyValidServiceToken): void;
    resetAnyValidServiceToken(): void;
    get anyValidServiceTokenInput(): any;
    private _authContext;
    get authContext(): ZeroTrustAccessApplicationPoliciesRequireAuthContextOutputReference;
    putAuthContext(value: ZeroTrustAccessApplicationPoliciesRequireAuthContext): void;
    resetAuthContext(): void;
    get authContextInput(): any;
    private _authMethod;
    get authMethod(): ZeroTrustAccessApplicationPoliciesRequireAuthMethodOutputReference;
    putAuthMethod(value: ZeroTrustAccessApplicationPoliciesRequireAuthMethod): void;
    resetAuthMethod(): void;
    get authMethodInput(): any;
    private _azureAd;
    get azureAd(): ZeroTrustAccessApplicationPoliciesRequireAzureAdOutputReference;
    putAzureAd(value: ZeroTrustAccessApplicationPoliciesRequireAzureAd): void;
    resetAzureAd(): void;
    get azureAdInput(): any;
    private _certificate;
    get certificate(): ZeroTrustAccessApplicationPoliciesRequireCertificateOutputReference;
    putCertificate(value: ZeroTrustAccessApplicationPoliciesRequireCertificate): void;
    resetCertificate(): void;
    get certificateInput(): any;
    private _commonName;
    get commonName(): ZeroTrustAccessApplicationPoliciesRequireCommonNameOutputReference;
    putCommonName(value: ZeroTrustAccessApplicationPoliciesRequireCommonName): void;
    resetCommonName(): void;
    get commonNameInput(): any;
    private _devicePosture;
    get devicePosture(): ZeroTrustAccessApplicationPoliciesRequireDevicePostureOutputReference;
    putDevicePosture(value: ZeroTrustAccessApplicationPoliciesRequireDevicePosture): void;
    resetDevicePosture(): void;
    get devicePostureInput(): any;
    private _email;
    get email(): ZeroTrustAccessApplicationPoliciesRequireEmailOutputReference;
    putEmail(value: ZeroTrustAccessApplicationPoliciesRequireEmail): void;
    resetEmail(): void;
    get emailInput(): any;
    private _emailDomain;
    get emailDomain(): ZeroTrustAccessApplicationPoliciesRequireEmailDomainOutputReference;
    putEmailDomain(value: ZeroTrustAccessApplicationPoliciesRequireEmailDomain): void;
    resetEmailDomain(): void;
    get emailDomainInput(): any;
    private _emailList;
    get emailList(): ZeroTrustAccessApplicationPoliciesRequireEmailListStructOutputReference;
    putEmailList(value: ZeroTrustAccessApplicationPoliciesRequireEmailListStruct): void;
    resetEmailList(): void;
    get emailListInput(): any;
    private _everyone;
    get everyone(): ZeroTrustAccessApplicationPoliciesRequireEveryoneOutputReference;
    putEveryone(value: ZeroTrustAccessApplicationPoliciesRequireEveryone): void;
    resetEveryone(): void;
    get everyoneInput(): any;
    private _externalEvaluation;
    get externalEvaluation(): ZeroTrustAccessApplicationPoliciesRequireExternalEvaluationOutputReference;
    putExternalEvaluation(value: ZeroTrustAccessApplicationPoliciesRequireExternalEvaluation): void;
    resetExternalEvaluation(): void;
    get externalEvaluationInput(): any;
    private _geo;
    get geo(): ZeroTrustAccessApplicationPoliciesRequireGeoOutputReference;
    putGeo(value: ZeroTrustAccessApplicationPoliciesRequireGeo): void;
    resetGeo(): void;
    get geoInput(): any;
    private _githubOrganization;
    get githubOrganization(): ZeroTrustAccessApplicationPoliciesRequireGithubOrganizationOutputReference;
    putGithubOrganization(value: ZeroTrustAccessApplicationPoliciesRequireGithubOrganization): void;
    resetGithubOrganization(): void;
    get githubOrganizationInput(): any;
    private _group;
    get group(): ZeroTrustAccessApplicationPoliciesRequireGroupOutputReference;
    putGroup(value: ZeroTrustAccessApplicationPoliciesRequireGroup): void;
    resetGroup(): void;
    get groupInput(): any;
    private _gsuite;
    get gsuite(): ZeroTrustAccessApplicationPoliciesRequireGsuiteOutputReference;
    putGsuite(value: ZeroTrustAccessApplicationPoliciesRequireGsuite): void;
    resetGsuite(): void;
    get gsuiteInput(): any;
    private _ip;
    get ip(): ZeroTrustAccessApplicationPoliciesRequireIpOutputReference;
    putIp(value: ZeroTrustAccessApplicationPoliciesRequireIp): void;
    resetIp(): void;
    get ipInput(): any;
    private _ipList;
    get ipList(): ZeroTrustAccessApplicationPoliciesRequireIpListStructOutputReference;
    putIpList(value: ZeroTrustAccessApplicationPoliciesRequireIpListStruct): void;
    resetIpList(): void;
    get ipListInput(): any;
    private _linkedAppToken;
    get linkedAppToken(): ZeroTrustAccessApplicationPoliciesRequireLinkedAppTokenOutputReference;
    putLinkedAppToken(value: ZeroTrustAccessApplicationPoliciesRequireLinkedAppToken): void;
    resetLinkedAppToken(): void;
    get linkedAppTokenInput(): any;
    private _loginMethod;
    get loginMethod(): ZeroTrustAccessApplicationPoliciesRequireLoginMethodOutputReference;
    putLoginMethod(value: ZeroTrustAccessApplicationPoliciesRequireLoginMethod): void;
    resetLoginMethod(): void;
    get loginMethodInput(): any;
    private _oidc;
    get oidc(): ZeroTrustAccessApplicationPoliciesRequireOidcOutputReference;
    putOidc(value: ZeroTrustAccessApplicationPoliciesRequireOidc): void;
    resetOidc(): void;
    get oidcInput(): any;
    private _okta;
    get okta(): ZeroTrustAccessApplicationPoliciesRequireOktaOutputReference;
    putOkta(value: ZeroTrustAccessApplicationPoliciesRequireOkta): void;
    resetOkta(): void;
    get oktaInput(): any;
    private _saml;
    get saml(): ZeroTrustAccessApplicationPoliciesRequireSamlOutputReference;
    putSaml(value: ZeroTrustAccessApplicationPoliciesRequireSaml): void;
    resetSaml(): void;
    get samlInput(): any;
    private _serviceToken;
    get serviceToken(): ZeroTrustAccessApplicationPoliciesRequireServiceTokenOutputReference;
    putServiceToken(value: ZeroTrustAccessApplicationPoliciesRequireServiceToken): void;
    resetServiceToken(): void;
    get serviceTokenInput(): any;
}
export declare class ZeroTrustAccessApplicationPoliciesRequireList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ZeroTrustAccessApplicationPoliciesRequire[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ZeroTrustAccessApplicationPoliciesRequireOutputReference;
}
export interface ZeroTrustAccessApplicationPolicies {
    /**
    * The rules that define how users may connect to the targets secured by your application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#connection_rules ZeroTrustAccessApplication#connection_rules}
    */
    readonly connectionRules?: ZeroTrustAccessApplicationPoliciesConnectionRules;
    /**
    * The action Access will take if a user matches this policy. Infrastructure application policies can only use the Allow action.
    * Available values: "allow", "deny", "non_identity", "bypass".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#decision ZeroTrustAccessApplication#decision}
    */
    readonly decision?: string;
    /**
    * Rules evaluated with a NOT logical operator. To match the policy, a user cannot meet any of the Exclude rules.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#exclude ZeroTrustAccessApplication#exclude}
    */
    readonly exclude?: ZeroTrustAccessApplicationPoliciesExclude[] | cdktf.IResolvable;
    /**
    * The UUID of the policy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#id ZeroTrustAccessApplication#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Rules evaluated with an OR logical operator. A user needs to meet only one of the Include rules.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#include ZeroTrustAccessApplication#include}
    */
    readonly include?: ZeroTrustAccessApplicationPoliciesInclude[] | cdktf.IResolvable;
    /**
    * The name of the Access policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#name ZeroTrustAccessApplication#name}
    */
    readonly name?: string;
    /**
    * The order of execution for this policy. Must be unique for each policy within an app.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#precedence ZeroTrustAccessApplication#precedence}
    */
    readonly precedence?: number;
    /**
    * Rules evaluated with an AND logical operator. To match the policy, a user must meet all of the Require rules.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#require ZeroTrustAccessApplication#require}
    */
    readonly require?: ZeroTrustAccessApplicationPoliciesRequire[] | cdktf.IResolvable;
}
export declare function zeroTrustAccessApplicationPoliciesToTerraform(struct?: ZeroTrustAccessApplicationPolicies | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationPoliciesToHclTerraform(struct?: ZeroTrustAccessApplicationPolicies | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationPoliciesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ZeroTrustAccessApplicationPolicies | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationPolicies | cdktf.IResolvable | undefined);
    private _connectionRules;
    get connectionRules(): ZeroTrustAccessApplicationPoliciesConnectionRulesOutputReference;
    putConnectionRules(value: ZeroTrustAccessApplicationPoliciesConnectionRules): void;
    resetConnectionRules(): void;
    get connectionRulesInput(): any;
    private _decision?;
    get decision(): string;
    set decision(value: string);
    resetDecision(): void;
    get decisionInput(): string;
    private _exclude;
    get exclude(): ZeroTrustAccessApplicationPoliciesExcludeList;
    putExclude(value: ZeroTrustAccessApplicationPoliciesExclude[] | cdktf.IResolvable): void;
    resetExclude(): void;
    get excludeInput(): any;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _include;
    get include(): ZeroTrustAccessApplicationPoliciesIncludeList;
    putInclude(value: ZeroTrustAccessApplicationPoliciesInclude[] | cdktf.IResolvable): void;
    resetInclude(): void;
    get includeInput(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _precedence?;
    get precedence(): number;
    set precedence(value: number);
    resetPrecedence(): void;
    get precedenceInput(): number;
    private _require;
    get require(): ZeroTrustAccessApplicationPoliciesRequireList;
    putRequire(value: ZeroTrustAccessApplicationPoliciesRequire[] | cdktf.IResolvable): void;
    resetRequire(): void;
    get requireInput(): any;
}
export declare class ZeroTrustAccessApplicationPoliciesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ZeroTrustAccessApplicationPolicies[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ZeroTrustAccessApplicationPoliciesOutputReference;
}
export interface ZeroTrustAccessApplicationSaasAppCustomAttributesSourceNameByIdp {
    /**
    * The UID of the IdP.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#idp_id ZeroTrustAccessApplication#idp_id}
    */
    readonly idpId?: string;
    /**
    * The name of the IdP provided attribute.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#source_name ZeroTrustAccessApplication#source_name}
    */
    readonly sourceName?: string;
}
export declare function zeroTrustAccessApplicationSaasAppCustomAttributesSourceNameByIdpToTerraform(struct?: ZeroTrustAccessApplicationSaasAppCustomAttributesSourceNameByIdp | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationSaasAppCustomAttributesSourceNameByIdpToHclTerraform(struct?: ZeroTrustAccessApplicationSaasAppCustomAttributesSourceNameByIdp | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationSaasAppCustomAttributesSourceNameByIdpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ZeroTrustAccessApplicationSaasAppCustomAttributesSourceNameByIdp | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationSaasAppCustomAttributesSourceNameByIdp | cdktf.IResolvable | undefined);
    private _idpId?;
    get idpId(): string;
    set idpId(value: string);
    resetIdpId(): void;
    get idpIdInput(): string;
    private _sourceName?;
    get sourceName(): string;
    set sourceName(value: string);
    resetSourceName(): void;
    get sourceNameInput(): string;
}
export declare class ZeroTrustAccessApplicationSaasAppCustomAttributesSourceNameByIdpList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ZeroTrustAccessApplicationSaasAppCustomAttributesSourceNameByIdp[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ZeroTrustAccessApplicationSaasAppCustomAttributesSourceNameByIdpOutputReference;
}
export interface ZeroTrustAccessApplicationSaasAppCustomAttributesSource {
    /**
    * The name of the IdP attribute.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#name ZeroTrustAccessApplication#name}
    */
    readonly name?: string;
    /**
    * A mapping from IdP ID to attribute name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#name_by_idp ZeroTrustAccessApplication#name_by_idp}
    */
    readonly nameByIdp?: ZeroTrustAccessApplicationSaasAppCustomAttributesSourceNameByIdp[] | cdktf.IResolvable;
}
export declare function zeroTrustAccessApplicationSaasAppCustomAttributesSourceToTerraform(struct?: ZeroTrustAccessApplicationSaasAppCustomAttributesSource | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationSaasAppCustomAttributesSourceToHclTerraform(struct?: ZeroTrustAccessApplicationSaasAppCustomAttributesSource | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationSaasAppCustomAttributesSourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationSaasAppCustomAttributesSource | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationSaasAppCustomAttributesSource | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _nameByIdp;
    get nameByIdp(): ZeroTrustAccessApplicationSaasAppCustomAttributesSourceNameByIdpList;
    putNameByIdp(value: ZeroTrustAccessApplicationSaasAppCustomAttributesSourceNameByIdp[] | cdktf.IResolvable): void;
    resetNameByIdp(): void;
    get nameByIdpInput(): any;
}
export interface ZeroTrustAccessApplicationSaasAppCustomAttributes {
    /**
    * The SAML FriendlyName of the attribute.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#friendly_name ZeroTrustAccessApplication#friendly_name}
    */
    readonly friendlyName?: string;
    /**
    * The name of the attribute.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#name ZeroTrustAccessApplication#name}
    */
    readonly name?: string;
    /**
    * A globally unique name for an identity or service provider.
    * Available values: "urn:oasis:names:tc:SAML:2.0:attrname-format:unspecified", "urn:oasis:names:tc:SAML:2.0:attrname-format:basic", "urn:oasis:names:tc:SAML:2.0:attrname-format:uri".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#name_format ZeroTrustAccessApplication#name_format}
    */
    readonly nameFormat?: string;
    /**
    * If the attribute is required when building a SAML assertion.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#required ZeroTrustAccessApplication#required}
    */
    readonly required?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#source ZeroTrustAccessApplication#source}
    */
    readonly source?: ZeroTrustAccessApplicationSaasAppCustomAttributesSource;
}
export declare function zeroTrustAccessApplicationSaasAppCustomAttributesToTerraform(struct?: ZeroTrustAccessApplicationSaasAppCustomAttributes | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationSaasAppCustomAttributesToHclTerraform(struct?: ZeroTrustAccessApplicationSaasAppCustomAttributes | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationSaasAppCustomAttributesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ZeroTrustAccessApplicationSaasAppCustomAttributes | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationSaasAppCustomAttributes | cdktf.IResolvable | undefined);
    private _friendlyName?;
    get friendlyName(): string;
    set friendlyName(value: string);
    resetFriendlyName(): void;
    get friendlyNameInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _nameFormat?;
    get nameFormat(): string;
    set nameFormat(value: string);
    resetNameFormat(): void;
    get nameFormatInput(): string;
    private _required?;
    get required(): boolean | cdktf.IResolvable;
    set required(value: boolean | cdktf.IResolvable);
    resetRequired(): void;
    get requiredInput(): any;
    private _source;
    get source(): ZeroTrustAccessApplicationSaasAppCustomAttributesSourceOutputReference;
    putSource(value: ZeroTrustAccessApplicationSaasAppCustomAttributesSource): void;
    resetSource(): void;
    get sourceInput(): any;
}
export declare class ZeroTrustAccessApplicationSaasAppCustomAttributesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ZeroTrustAccessApplicationSaasAppCustomAttributes[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ZeroTrustAccessApplicationSaasAppCustomAttributesOutputReference;
}
export interface ZeroTrustAccessApplicationSaasAppCustomClaimsSource {
    /**
    * The name of the IdP claim.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#name ZeroTrustAccessApplication#name}
    */
    readonly name?: string;
    /**
    * A mapping from IdP ID to claim name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#name_by_idp ZeroTrustAccessApplication#name_by_idp}
    */
    readonly nameByIdp?: {
        [key: string]: string;
    };
}
export declare function zeroTrustAccessApplicationSaasAppCustomClaimsSourceToTerraform(struct?: ZeroTrustAccessApplicationSaasAppCustomClaimsSource | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationSaasAppCustomClaimsSourceToHclTerraform(struct?: ZeroTrustAccessApplicationSaasAppCustomClaimsSource | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationSaasAppCustomClaimsSourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationSaasAppCustomClaimsSource | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationSaasAppCustomClaimsSource | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _nameByIdp?;
    get nameByIdp(): {
        [key: string]: string;
    };
    set nameByIdp(value: {
        [key: string]: string;
    });
    resetNameByIdp(): void;
    get nameByIdpInput(): {
        [key: string]: string;
    };
}
export interface ZeroTrustAccessApplicationSaasAppCustomClaims {
    /**
    * The name of the claim.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#name ZeroTrustAccessApplication#name}
    */
    readonly name?: string;
    /**
    * If the claim is required when building an OIDC token.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#required ZeroTrustAccessApplication#required}
    */
    readonly required?: boolean | cdktf.IResolvable;
    /**
    * The scope of the claim.
    * Available values: "groups", "profile", "email", "openid".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#scope ZeroTrustAccessApplication#scope}
    */
    readonly scope?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#source ZeroTrustAccessApplication#source}
    */
    readonly source?: ZeroTrustAccessApplicationSaasAppCustomClaimsSource;
}
export declare function zeroTrustAccessApplicationSaasAppCustomClaimsToTerraform(struct?: ZeroTrustAccessApplicationSaasAppCustomClaims | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationSaasAppCustomClaimsToHclTerraform(struct?: ZeroTrustAccessApplicationSaasAppCustomClaims | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationSaasAppCustomClaimsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ZeroTrustAccessApplicationSaasAppCustomClaims | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationSaasAppCustomClaims | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _required?;
    get required(): boolean | cdktf.IResolvable;
    set required(value: boolean | cdktf.IResolvable);
    resetRequired(): void;
    get requiredInput(): any;
    private _scope?;
    get scope(): string;
    set scope(value: string);
    resetScope(): void;
    get scopeInput(): string;
    private _source;
    get source(): ZeroTrustAccessApplicationSaasAppCustomClaimsSourceOutputReference;
    putSource(value: ZeroTrustAccessApplicationSaasAppCustomClaimsSource): void;
    resetSource(): void;
    get sourceInput(): any;
}
export declare class ZeroTrustAccessApplicationSaasAppCustomClaimsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ZeroTrustAccessApplicationSaasAppCustomClaims[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ZeroTrustAccessApplicationSaasAppCustomClaimsOutputReference;
}
export interface ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions {
    /**
    * If an Access Token should be returned from the OIDC Authorization endpoint
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#return_access_token_from_authorization_endpoint ZeroTrustAccessApplication#return_access_token_from_authorization_endpoint}
    */
    readonly returnAccessTokenFromAuthorizationEndpoint?: boolean | cdktf.IResolvable;
    /**
    * If an ID Token should be returned from the OIDC Authorization endpoint
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#return_id_token_from_authorization_endpoint ZeroTrustAccessApplication#return_id_token_from_authorization_endpoint}
    */
    readonly returnIdTokenFromAuthorizationEndpoint?: boolean | cdktf.IResolvable;
}
export declare function zeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsToTerraform(struct?: ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsToHclTerraform(struct?: ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions | cdktf.IResolvable | undefined);
    private _returnAccessTokenFromAuthorizationEndpoint?;
    get returnAccessTokenFromAuthorizationEndpoint(): boolean | cdktf.IResolvable;
    set returnAccessTokenFromAuthorizationEndpoint(value: boolean | cdktf.IResolvable);
    resetReturnAccessTokenFromAuthorizationEndpoint(): void;
    get returnAccessTokenFromAuthorizationEndpointInput(): any;
    private _returnIdTokenFromAuthorizationEndpoint?;
    get returnIdTokenFromAuthorizationEndpoint(): boolean | cdktf.IResolvable;
    set returnIdTokenFromAuthorizationEndpoint(value: boolean | cdktf.IResolvable);
    resetReturnIdTokenFromAuthorizationEndpoint(): void;
    get returnIdTokenFromAuthorizationEndpointInput(): any;
}
export interface ZeroTrustAccessApplicationSaasAppRefreshTokenOptions {
    /**
    * How long a refresh token will be valid for after creation. Valid units are m,h,d. Must be longer than 1m.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#lifetime ZeroTrustAccessApplication#lifetime}
    */
    readonly lifetime?: string;
}
export declare function zeroTrustAccessApplicationSaasAppRefreshTokenOptionsToTerraform(struct?: ZeroTrustAccessApplicationSaasAppRefreshTokenOptions | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationSaasAppRefreshTokenOptionsToHclTerraform(struct?: ZeroTrustAccessApplicationSaasAppRefreshTokenOptions | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationSaasAppRefreshTokenOptions | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationSaasAppRefreshTokenOptions | cdktf.IResolvable | undefined);
    private _lifetime?;
    get lifetime(): string;
    set lifetime(value: string);
    resetLifetime(): void;
    get lifetimeInput(): string;
}
export interface ZeroTrustAccessApplicationSaasApp {
    /**
    * The lifetime of the OIDC Access Token after creation. Valid units are m,h. Must be greater than or equal to 1m and less than or equal to 24h.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#access_token_lifetime ZeroTrustAccessApplication#access_token_lifetime}
    */
    readonly accessTokenLifetime?: string;
    /**
    * If client secret should be required on the token endpoint when authorization_code_with_pkce grant is used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#allow_pkce_without_client_secret ZeroTrustAccessApplication#allow_pkce_without_client_secret}
    */
    readonly allowPkceWithoutClientSecret?: boolean | cdktf.IResolvable;
    /**
    * The URL where this applications tile redirects users
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#app_launcher_url ZeroTrustAccessApplication#app_launcher_url}
    */
    readonly appLauncherUrl?: string;
    /**
    * Optional identifier indicating the authentication protocol used for the saas app. Required for OIDC. Default if unset is "saml"
    * Available values: "saml", "oidc".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#auth_type ZeroTrustAccessApplication#auth_type}
    */
    readonly authType?: string;
    /**
    * The service provider's endpoint that is responsible for receiving and parsing a SAML assertion.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#consumer_service_url ZeroTrustAccessApplication#consumer_service_url}
    */
    readonly consumerServiceUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#custom_attributes ZeroTrustAccessApplication#custom_attributes}
    */
    readonly customAttributes?: ZeroTrustAccessApplicationSaasAppCustomAttributes[] | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#custom_claims ZeroTrustAccessApplication#custom_claims}
    */
    readonly customClaims?: ZeroTrustAccessApplicationSaasAppCustomClaims[] | cdktf.IResolvable;
    /**
    * The URL that the user will be redirected to after a successful login for IDP initiated logins.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#default_relay_state ZeroTrustAccessApplication#default_relay_state}
    */
    readonly defaultRelayState?: string;
    /**
    * The OIDC flows supported by this application
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#grant_types ZeroTrustAccessApplication#grant_types}
    */
    readonly grantTypes?: string[];
    /**
    * A regex to filter Cloudflare groups returned in ID token and userinfo endpoint
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#group_filter_regex ZeroTrustAccessApplication#group_filter_regex}
    */
    readonly groupFilterRegex?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#hybrid_and_implicit_options ZeroTrustAccessApplication#hybrid_and_implicit_options}
    */
    readonly hybridAndImplicitOptions?: ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions;
    /**
    * The unique identifier for your SaaS application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#idp_entity_id ZeroTrustAccessApplication#idp_entity_id}
    */
    readonly idpEntityId?: string;
    /**
    * The format of the name identifier sent to the SaaS application.
    * Available values: "id", "email".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#name_id_format ZeroTrustAccessApplication#name_id_format}
    */
    readonly nameIdFormat?: string;
    /**
    * A [JSONata](https://jsonata.org/) expression that transforms an application's user identities into a NameID value for its SAML assertion. This expression should evaluate to a singular string. The output of this expression can override the `name_id_format` setting.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#name_id_transform_jsonata ZeroTrustAccessApplication#name_id_transform_jsonata}
    */
    readonly nameIdTransformJsonata?: string;
    /**
    * The permitted URL's for Cloudflare to return Authorization codes and Access/ID tokens
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#redirect_uris ZeroTrustAccessApplication#redirect_uris}
    */
    readonly redirectUris?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#refresh_token_options ZeroTrustAccessApplication#refresh_token_options}
    */
    readonly refreshTokenOptions?: ZeroTrustAccessApplicationSaasAppRefreshTokenOptions;
    /**
    * A [JSONata] (https://jsonata.org/) expression that transforms an application's user identities into attribute assertions in the SAML response. The expression can transform id, email, name, and groups values. It can also transform fields listed in the saml_attributes or oidc_fields of the identity provider used to authenticate. The output of this expression must be a JSON object.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#saml_attribute_transform_jsonata ZeroTrustAccessApplication#saml_attribute_transform_jsonata}
    */
    readonly samlAttributeTransformJsonata?: string;
    /**
    * Define the user information shared with access, "offline_access" scope will be automatically enabled if refresh tokens are enabled
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#scopes ZeroTrustAccessApplication#scopes}
    */
    readonly scopes?: string[];
    /**
    * A globally unique name for an identity or service provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#sp_entity_id ZeroTrustAccessApplication#sp_entity_id}
    */
    readonly spEntityId?: string;
    /**
    * The endpoint where your SaaS application will send login requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#sso_endpoint ZeroTrustAccessApplication#sso_endpoint}
    */
    readonly ssoEndpoint?: string;
}
export declare function zeroTrustAccessApplicationSaasAppToTerraform(struct?: ZeroTrustAccessApplicationSaasApp | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationSaasAppToHclTerraform(struct?: ZeroTrustAccessApplicationSaasApp | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationSaasAppOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationSaasApp | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationSaasApp | cdktf.IResolvable | undefined);
    private _accessTokenLifetime?;
    get accessTokenLifetime(): string;
    set accessTokenLifetime(value: string);
    resetAccessTokenLifetime(): void;
    get accessTokenLifetimeInput(): string;
    private _allowPkceWithoutClientSecret?;
    get allowPkceWithoutClientSecret(): boolean | cdktf.IResolvable;
    set allowPkceWithoutClientSecret(value: boolean | cdktf.IResolvable);
    resetAllowPkceWithoutClientSecret(): void;
    get allowPkceWithoutClientSecretInput(): any;
    private _appLauncherUrl?;
    get appLauncherUrl(): string;
    set appLauncherUrl(value: string);
    resetAppLauncherUrl(): void;
    get appLauncherUrlInput(): string;
    private _authType?;
    get authType(): string;
    set authType(value: string);
    resetAuthType(): void;
    get authTypeInput(): string;
    get clientId(): any;
    get clientSecret(): any;
    private _consumerServiceUrl?;
    get consumerServiceUrl(): string;
    set consumerServiceUrl(value: string);
    resetConsumerServiceUrl(): void;
    get consumerServiceUrlInput(): string;
    private _customAttributes;
    get customAttributes(): ZeroTrustAccessApplicationSaasAppCustomAttributesList;
    putCustomAttributes(value: ZeroTrustAccessApplicationSaasAppCustomAttributes[] | cdktf.IResolvable): void;
    resetCustomAttributes(): void;
    get customAttributesInput(): any;
    private _customClaims;
    get customClaims(): ZeroTrustAccessApplicationSaasAppCustomClaimsList;
    putCustomClaims(value: ZeroTrustAccessApplicationSaasAppCustomClaims[] | cdktf.IResolvable): void;
    resetCustomClaims(): void;
    get customClaimsInput(): any;
    private _defaultRelayState?;
    get defaultRelayState(): string;
    set defaultRelayState(value: string);
    resetDefaultRelayState(): void;
    get defaultRelayStateInput(): string;
    private _grantTypes?;
    get grantTypes(): string[];
    set grantTypes(value: string[]);
    resetGrantTypes(): void;
    get grantTypesInput(): string[];
    private _groupFilterRegex?;
    get groupFilterRegex(): string;
    set groupFilterRegex(value: string);
    resetGroupFilterRegex(): void;
    get groupFilterRegexInput(): string;
    private _hybridAndImplicitOptions;
    get hybridAndImplicitOptions(): ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference;
    putHybridAndImplicitOptions(value: ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions): void;
    resetHybridAndImplicitOptions(): void;
    get hybridAndImplicitOptionsInput(): any;
    private _idpEntityId?;
    get idpEntityId(): string;
    set idpEntityId(value: string);
    resetIdpEntityId(): void;
    get idpEntityIdInput(): string;
    private _nameIdFormat?;
    get nameIdFormat(): string;
    set nameIdFormat(value: string);
    resetNameIdFormat(): void;
    get nameIdFormatInput(): string;
    private _nameIdTransformJsonata?;
    get nameIdTransformJsonata(): string;
    set nameIdTransformJsonata(value: string);
    resetNameIdTransformJsonata(): void;
    get nameIdTransformJsonataInput(): string;
    get publicKey(): any;
    private _redirectUris?;
    get redirectUris(): string[];
    set redirectUris(value: string[]);
    resetRedirectUris(): void;
    get redirectUrisInput(): string[];
    private _refreshTokenOptions;
    get refreshTokenOptions(): ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference;
    putRefreshTokenOptions(value: ZeroTrustAccessApplicationSaasAppRefreshTokenOptions): void;
    resetRefreshTokenOptions(): void;
    get refreshTokenOptionsInput(): any;
    private _samlAttributeTransformJsonata?;
    get samlAttributeTransformJsonata(): string;
    set samlAttributeTransformJsonata(value: string);
    resetSamlAttributeTransformJsonata(): void;
    get samlAttributeTransformJsonataInput(): string;
    private _scopes?;
    get scopes(): string[];
    set scopes(value: string[]);
    resetScopes(): void;
    get scopesInput(): string[];
    private _spEntityId?;
    get spEntityId(): string;
    set spEntityId(value: string);
    resetSpEntityId(): void;
    get spEntityIdInput(): string;
    private _ssoEndpoint?;
    get ssoEndpoint(): string;
    set ssoEndpoint(value: string);
    resetSsoEndpoint(): void;
    get ssoEndpointInput(): string;
}
export interface ZeroTrustAccessApplicationScimConfigAuthentication {
    /**
    * URL used to generate the auth code used during token generation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#authorization_url ZeroTrustAccessApplication#authorization_url}
    */
    readonly authorizationUrl?: string;
    /**
    * Client ID used to authenticate when generating a token for authenticating with the remote SCIM service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#client_id ZeroTrustAccessApplication#client_id}
    */
    readonly clientId?: string;
    /**
    * Secret used to authenticate when generating a token for authenticating with the remove SCIM service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#client_secret ZeroTrustAccessApplication#client_secret}
    */
    readonly clientSecret?: string;
    /**
    * Password used to authenticate with the remote SCIM service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#password ZeroTrustAccessApplication#password}
    */
    readonly password?: string;
    /**
    * The authentication scheme to use when making SCIM requests to this application.
    * Available values: "httpbasic", "oauthbearertoken", "oauth2", "access_service_token".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#scheme ZeroTrustAccessApplication#scheme}
    */
    readonly scheme: string;
    /**
    * The authorization scopes to request when generating the token used to authenticate with the remove SCIM service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#scopes ZeroTrustAccessApplication#scopes}
    */
    readonly scopes?: string[];
    /**
    * Token used to authenticate with the remote SCIM service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#token ZeroTrustAccessApplication#token}
    */
    readonly token?: string;
    /**
    * URL used to generate the token used to authenticate with the remote SCIM service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#token_url ZeroTrustAccessApplication#token_url}
    */
    readonly tokenUrl?: string;
    /**
    * User name used to authenticate with the remote SCIM service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#user ZeroTrustAccessApplication#user}
    */
    readonly user?: string;
}
export declare function zeroTrustAccessApplicationScimConfigAuthenticationToTerraform(struct?: ZeroTrustAccessApplicationScimConfigAuthentication | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationScimConfigAuthenticationToHclTerraform(struct?: ZeroTrustAccessApplicationScimConfigAuthentication | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationScimConfigAuthentication | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationScimConfigAuthentication | cdktf.IResolvable | undefined);
    private _authorizationUrl?;
    get authorizationUrl(): string;
    set authorizationUrl(value: string);
    resetAuthorizationUrl(): void;
    get authorizationUrlInput(): string;
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
    private _password?;
    get password(): string;
    set password(value: string);
    resetPassword(): void;
    get passwordInput(): string;
    private _scheme?;
    get scheme(): string;
    set scheme(value: string);
    get schemeInput(): string;
    private _scopes?;
    get scopes(): string[];
    set scopes(value: string[]);
    resetScopes(): void;
    get scopesInput(): string[];
    private _token?;
    get token(): string;
    set token(value: string);
    resetToken(): void;
    get tokenInput(): string;
    private _tokenUrl?;
    get tokenUrl(): string;
    set tokenUrl(value: string);
    resetTokenUrl(): void;
    get tokenUrlInput(): string;
    private _user?;
    get user(): string;
    set user(value: string);
    resetUser(): void;
    get userInput(): string;
}
export interface ZeroTrustAccessApplicationScimConfigMappingsOperations {
    /**
    * Whether or not this mapping applies to create (POST) operations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#create ZeroTrustAccessApplication#create}
    */
    readonly create?: boolean | cdktf.IResolvable;
    /**
    * Whether or not this mapping applies to DELETE operations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#delete ZeroTrustAccessApplication#delete}
    */
    readonly delete?: boolean | cdktf.IResolvable;
    /**
    * Whether or not this mapping applies to update (PATCH/PUT) operations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#update ZeroTrustAccessApplication#update}
    */
    readonly update?: boolean | cdktf.IResolvable;
}
export declare function zeroTrustAccessApplicationScimConfigMappingsOperationsToTerraform(struct?: ZeroTrustAccessApplicationScimConfigMappingsOperations | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationScimConfigMappingsOperationsToHclTerraform(struct?: ZeroTrustAccessApplicationScimConfigMappingsOperations | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationScimConfigMappingsOperations | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationScimConfigMappingsOperations | cdktf.IResolvable | undefined);
    private _create?;
    get create(): boolean | cdktf.IResolvable;
    set create(value: boolean | cdktf.IResolvable);
    resetCreate(): void;
    get createInput(): any;
    private _delete?;
    get delete(): boolean | cdktf.IResolvable;
    set delete(value: boolean | cdktf.IResolvable);
    resetDelete(): void;
    get deleteInput(): any;
    private _update?;
    get update(): boolean | cdktf.IResolvable;
    set update(value: boolean | cdktf.IResolvable);
    resetUpdate(): void;
    get updateInput(): any;
}
export interface ZeroTrustAccessApplicationScimConfigMappings {
    /**
    * Whether or not this mapping is enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#enabled ZeroTrustAccessApplication#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * A [SCIM filter expression](https://datatracker.ietf.org/doc/html/rfc7644#section-3.4.2.2) that matches resources that should be provisioned to this application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#filter ZeroTrustAccessApplication#filter}
    */
    readonly filter?: string;
    /**
    * Whether or not this mapping applies to creates, updates, or deletes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#operations ZeroTrustAccessApplication#operations}
    */
    readonly operations?: ZeroTrustAccessApplicationScimConfigMappingsOperations;
    /**
    * Which SCIM resource type this mapping applies to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#schema ZeroTrustAccessApplication#schema}
    */
    readonly schema: string;
    /**
    * The level of adherence to outbound resource schemas when provisioning to this mapping. ‘Strict’ removes unknown values, while ‘passthrough’ passes unknown values to the target.
    * Available values: "strict", "passthrough".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#strictness ZeroTrustAccessApplication#strictness}
    */
    readonly strictness?: string;
    /**
    * A [JSONata](https://jsonata.org/) expression that transforms the resource before provisioning it in the application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#transform_jsonata ZeroTrustAccessApplication#transform_jsonata}
    */
    readonly transformJsonata?: string;
}
export declare function zeroTrustAccessApplicationScimConfigMappingsToTerraform(struct?: ZeroTrustAccessApplicationScimConfigMappings | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationScimConfigMappingsToHclTerraform(struct?: ZeroTrustAccessApplicationScimConfigMappings | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationScimConfigMappingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ZeroTrustAccessApplicationScimConfigMappings | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationScimConfigMappings | cdktf.IResolvable | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): any;
    private _filter?;
    get filter(): string;
    set filter(value: string);
    resetFilter(): void;
    get filterInput(): string;
    private _operations;
    get operations(): ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference;
    putOperations(value: ZeroTrustAccessApplicationScimConfigMappingsOperations): void;
    resetOperations(): void;
    get operationsInput(): any;
    private _schema?;
    get schema(): string;
    set schema(value: string);
    get schemaInput(): string;
    private _strictness?;
    get strictness(): string;
    set strictness(value: string);
    resetStrictness(): void;
    get strictnessInput(): string;
    private _transformJsonata?;
    get transformJsonata(): string;
    set transformJsonata(value: string);
    resetTransformJsonata(): void;
    get transformJsonataInput(): string;
}
export declare class ZeroTrustAccessApplicationScimConfigMappingsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ZeroTrustAccessApplicationScimConfigMappings[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ZeroTrustAccessApplicationScimConfigMappingsOutputReference;
}
export interface ZeroTrustAccessApplicationScimConfig {
    /**
    * Attributes for configuring HTTP Basic authentication scheme for SCIM provisioning to an application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#authentication ZeroTrustAccessApplication#authentication}
    */
    readonly authentication?: ZeroTrustAccessApplicationScimConfigAuthentication;
    /**
    * If false, propagates DELETE requests to the target application for SCIM resources. If true, sets 'active' to false on the SCIM resource. Note: Some targets do not support DELETE operations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#deactivate_on_delete ZeroTrustAccessApplication#deactivate_on_delete}
    */
    readonly deactivateOnDelete?: boolean | cdktf.IResolvable;
    /**
    * Whether SCIM provisioning is turned on for this application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#enabled ZeroTrustAccessApplication#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * The UID of the IdP to use as the source for SCIM resources to provision to this application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#idp_uid ZeroTrustAccessApplication#idp_uid}
    */
    readonly idpUid: string;
    /**
    * A list of mappings to apply to SCIM resources before provisioning them in this application. These can transform or filter the resources to be provisioned.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#mappings ZeroTrustAccessApplication#mappings}
    */
    readonly mappings?: ZeroTrustAccessApplicationScimConfigMappings[] | cdktf.IResolvable;
    /**
    * The base URI for the application's SCIM-compatible API.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#remote_uri ZeroTrustAccessApplication#remote_uri}
    */
    readonly remoteUri: string;
}
export declare function zeroTrustAccessApplicationScimConfigToTerraform(struct?: ZeroTrustAccessApplicationScimConfig | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationScimConfigToHclTerraform(struct?: ZeroTrustAccessApplicationScimConfig | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationScimConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessApplicationScimConfig | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationScimConfig | cdktf.IResolvable | undefined);
    private _authentication;
    get authentication(): ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference;
    putAuthentication(value: ZeroTrustAccessApplicationScimConfigAuthentication): void;
    resetAuthentication(): void;
    get authenticationInput(): any;
    private _deactivateOnDelete?;
    get deactivateOnDelete(): boolean | cdktf.IResolvable;
    set deactivateOnDelete(value: boolean | cdktf.IResolvable);
    resetDeactivateOnDelete(): void;
    get deactivateOnDeleteInput(): any;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): any;
    private _idpUid?;
    get idpUid(): string;
    set idpUid(value: string);
    get idpUidInput(): string;
    private _mappings;
    get mappings(): ZeroTrustAccessApplicationScimConfigMappingsList;
    putMappings(value: ZeroTrustAccessApplicationScimConfigMappings[] | cdktf.IResolvable): void;
    resetMappings(): void;
    get mappingsInput(): any;
    private _remoteUri?;
    get remoteUri(): string;
    set remoteUri(value: string);
    get remoteUriInput(): string;
}
export interface ZeroTrustAccessApplicationTargetCriteria {
    /**
    * The port that the targets use for the chosen communication protocol. A port cannot be assigned to multiple protocols.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#port ZeroTrustAccessApplication#port}
    */
    readonly port: number;
    /**
    * The communication protocol your application secures.
    * Available values: "SSH", "RDP".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#protocol ZeroTrustAccessApplication#protocol}
    */
    readonly protocol: string;
    /**
    * Contains a map of target attribute keys to target attribute values.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#target_attributes ZeroTrustAccessApplication#target_attributes}
    */
    readonly targetAttributes: {
        [key: string]: string[];
    } | cdktf.IResolvable;
}
export declare function zeroTrustAccessApplicationTargetCriteriaToTerraform(struct?: ZeroTrustAccessApplicationTargetCriteria | cdktf.IResolvable): any;
export declare function zeroTrustAccessApplicationTargetCriteriaToHclTerraform(struct?: ZeroTrustAccessApplicationTargetCriteria | cdktf.IResolvable): any;
export declare class ZeroTrustAccessApplicationTargetCriteriaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ZeroTrustAccessApplicationTargetCriteria | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessApplicationTargetCriteria | cdktf.IResolvable | undefined);
    private _port?;
    get port(): number;
    set port(value: number);
    get portInput(): number;
    private _protocol?;
    get protocol(): string;
    set protocol(value: string);
    get protocolInput(): string;
    private _targetAttributes?;
    get targetAttributes(): {
        [key: string]: string[];
    } | cdktf.IResolvable;
    set targetAttributes(value: {
        [key: string]: string[];
    } | cdktf.IResolvable);
    get targetAttributesInput(): any;
}
export declare class ZeroTrustAccessApplicationTargetCriteriaList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ZeroTrustAccessApplicationTargetCriteria[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ZeroTrustAccessApplicationTargetCriteriaOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application cloudflare_zero_trust_access_application}
*/
export declare class ZeroTrustAccessApplication extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_zero_trust_access_application";
    /**
    * Generates CDKTF code for importing a ZeroTrustAccessApplication resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustAccessApplication to import
    * @param importFromId The id of the existing ZeroTrustAccessApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustAccessApplication to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application cloudflare_zero_trust_access_application} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustAccessApplicationConfig = {}
    */
    constructor(scope: Construct, id: string, config?: ZeroTrustAccessApplicationConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _allowAuthenticateViaWarp?;
    get allowAuthenticateViaWarp(): boolean | cdktf.IResolvable;
    set allowAuthenticateViaWarp(value: boolean | cdktf.IResolvable);
    resetAllowAuthenticateViaWarp(): void;
    get allowAuthenticateViaWarpInput(): any;
    private _allowIframe?;
    get allowIframe(): boolean | cdktf.IResolvable;
    set allowIframe(value: boolean | cdktf.IResolvable);
    resetAllowIframe(): void;
    get allowIframeInput(): any;
    private _allowedIdps?;
    get allowedIdps(): string[];
    set allowedIdps(value: string[]);
    resetAllowedIdps(): void;
    get allowedIdpsInput(): string[];
    private _appLauncherLogoUrl?;
    get appLauncherLogoUrl(): string;
    set appLauncherLogoUrl(value: string);
    resetAppLauncherLogoUrl(): void;
    get appLauncherLogoUrlInput(): string;
    private _appLauncherVisible?;
    get appLauncherVisible(): boolean | cdktf.IResolvable;
    set appLauncherVisible(value: boolean | cdktf.IResolvable);
    resetAppLauncherVisible(): void;
    get appLauncherVisibleInput(): any;
    get aud(): any;
    private _autoRedirectToIdentity?;
    get autoRedirectToIdentity(): boolean | cdktf.IResolvable;
    set autoRedirectToIdentity(value: boolean | cdktf.IResolvable);
    resetAutoRedirectToIdentity(): void;
    get autoRedirectToIdentityInput(): any;
    private _bgColor?;
    get bgColor(): string;
    set bgColor(value: string);
    resetBgColor(): void;
    get bgColorInput(): string;
    private _corsHeaders;
    get corsHeaders(): ZeroTrustAccessApplicationCorsHeadersOutputReference;
    putCorsHeaders(value: ZeroTrustAccessApplicationCorsHeaders): void;
    resetCorsHeaders(): void;
    get corsHeadersInput(): any;
    private _customDenyMessage?;
    get customDenyMessage(): string;
    set customDenyMessage(value: string);
    resetCustomDenyMessage(): void;
    get customDenyMessageInput(): string;
    private _customDenyUrl?;
    get customDenyUrl(): string;
    set customDenyUrl(value: string);
    resetCustomDenyUrl(): void;
    get customDenyUrlInput(): string;
    private _customNonIdentityDenyUrl?;
    get customNonIdentityDenyUrl(): string;
    set customNonIdentityDenyUrl(value: string);
    resetCustomNonIdentityDenyUrl(): void;
    get customNonIdentityDenyUrlInput(): string;
    private _customPages?;
    get customPages(): string[];
    set customPages(value: string[]);
    resetCustomPages(): void;
    get customPagesInput(): string[];
    private _destinations;
    get destinations(): ZeroTrustAccessApplicationDestinationsList;
    putDestinations(value: ZeroTrustAccessApplicationDestinations[] | cdktf.IResolvable): void;
    resetDestinations(): void;
    get destinationsInput(): any;
    private _domain?;
    get domain(): string;
    set domain(value: string);
    resetDomain(): void;
    get domainInput(): string;
    private _enableBindingCookie?;
    get enableBindingCookie(): boolean | cdktf.IResolvable;
    set enableBindingCookie(value: boolean | cdktf.IResolvable);
    resetEnableBindingCookie(): void;
    get enableBindingCookieInput(): any;
    private _footerLinks;
    get footerLinks(): ZeroTrustAccessApplicationFooterLinksList;
    putFooterLinks(value: ZeroTrustAccessApplicationFooterLinks[] | cdktf.IResolvable): void;
    resetFooterLinks(): void;
    get footerLinksInput(): any;
    private _headerBgColor?;
    get headerBgColor(): string;
    set headerBgColor(value: string);
    resetHeaderBgColor(): void;
    get headerBgColorInput(): string;
    private _httpOnlyCookieAttribute?;
    get httpOnlyCookieAttribute(): boolean | cdktf.IResolvable;
    set httpOnlyCookieAttribute(value: boolean | cdktf.IResolvable);
    resetHttpOnlyCookieAttribute(): void;
    get httpOnlyCookieAttributeInput(): any;
    get id(): any;
    private _landingPageDesign;
    get landingPageDesign(): ZeroTrustAccessApplicationLandingPageDesignOutputReference;
    putLandingPageDesign(value: ZeroTrustAccessApplicationLandingPageDesign): void;
    resetLandingPageDesign(): void;
    get landingPageDesignInput(): any;
    private _logoUrl?;
    get logoUrl(): string;
    set logoUrl(value: string);
    resetLogoUrl(): void;
    get logoUrlInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _oauthConfiguration;
    get oauthConfiguration(): ZeroTrustAccessApplicationOauthConfigurationOutputReference;
    putOauthConfiguration(value: ZeroTrustAccessApplicationOauthConfiguration): void;
    resetOauthConfiguration(): void;
    get oauthConfigurationInput(): any;
    private _optionsPreflightBypass?;
    get optionsPreflightBypass(): boolean | cdktf.IResolvable;
    set optionsPreflightBypass(value: boolean | cdktf.IResolvable);
    resetOptionsPreflightBypass(): void;
    get optionsPreflightBypassInput(): any;
    private _pathCookieAttribute?;
    get pathCookieAttribute(): boolean | cdktf.IResolvable;
    set pathCookieAttribute(value: boolean | cdktf.IResolvable);
    resetPathCookieAttribute(): void;
    get pathCookieAttributeInput(): any;
    private _policies;
    get policies(): ZeroTrustAccessApplicationPoliciesList;
    putPolicies(value: ZeroTrustAccessApplicationPolicies[] | cdktf.IResolvable): void;
    resetPolicies(): void;
    get policiesInput(): any;
    private _readServiceTokensFromHeader?;
    get readServiceTokensFromHeader(): string;
    set readServiceTokensFromHeader(value: string);
    resetReadServiceTokensFromHeader(): void;
    get readServiceTokensFromHeaderInput(): string;
    private _saasApp;
    get saasApp(): ZeroTrustAccessApplicationSaasAppOutputReference;
    putSaasApp(value: ZeroTrustAccessApplicationSaasApp): void;
    resetSaasApp(): void;
    get saasAppInput(): any;
    private _sameSiteCookieAttribute?;
    get sameSiteCookieAttribute(): string;
    set sameSiteCookieAttribute(value: string);
    resetSameSiteCookieAttribute(): void;
    get sameSiteCookieAttributeInput(): string;
    private _scimConfig;
    get scimConfig(): ZeroTrustAccessApplicationScimConfigOutputReference;
    putScimConfig(value: ZeroTrustAccessApplicationScimConfig): void;
    resetScimConfig(): void;
    get scimConfigInput(): any;
    private _selfHostedDomains?;
    get selfHostedDomains(): string[];
    set selfHostedDomains(value: string[]);
    resetSelfHostedDomains(): void;
    get selfHostedDomainsInput(): string[];
    private _serviceAuth401Redirect?;
    get serviceAuth401Redirect(): boolean | cdktf.IResolvable;
    set serviceAuth401Redirect(value: boolean | cdktf.IResolvable);
    resetServiceAuth401Redirect(): void;
    get serviceAuth401RedirectInput(): any;
    private _sessionDuration?;
    get sessionDuration(): string;
    set sessionDuration(value: string);
    resetSessionDuration(): void;
    get sessionDurationInput(): string;
    private _skipAppLauncherLoginPage?;
    get skipAppLauncherLoginPage(): boolean | cdktf.IResolvable;
    set skipAppLauncherLoginPage(value: boolean | cdktf.IResolvable);
    resetSkipAppLauncherLoginPage(): void;
    get skipAppLauncherLoginPageInput(): any;
    private _skipInterstitial?;
    get skipInterstitial(): boolean | cdktf.IResolvable;
    set skipInterstitial(value: boolean | cdktf.IResolvable);
    resetSkipInterstitial(): void;
    get skipInterstitialInput(): any;
    private _tags?;
    get tags(): string[];
    set tags(value: string[]);
    resetTags(): void;
    get tagsInput(): string[];
    private _targetCriteria;
    get targetCriteria(): ZeroTrustAccessApplicationTargetCriteriaList;
    putTargetCriteria(value: ZeroTrustAccessApplicationTargetCriteria[] | cdktf.IResolvable): void;
    resetTargetCriteria(): void;
    get targetCriteriaInput(): any;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
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
