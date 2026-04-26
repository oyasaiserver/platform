import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface PageRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_rule#actions PageRule#actions}
    */
    readonly actions: PageRuleActions;
    /**
    * The priority of the rule, used to define which Page Rule is processed
    * over another. A higher number indicates a higher priority. For example,
    * if you have a catch-all Page Rule (rule A: `/images/*`) but want a more
    * specific Page Rule to take precedence (rule B: `/images/special/*`),
    * specify a higher priority for rule B so it overrides rule A.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_rule#priority PageRule#priority}
    */
    readonly priority?: number;
    /**
    * The status of the Page Rule.
    * Available values: "active", "disabled".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_rule#status PageRule#status}
    */
    readonly status?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_rule#target PageRule#target}
    */
    readonly target: string;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_rule#zone_id PageRule#zone_id}
    */
    readonly zoneId?: string;
}
export interface PageRuleActionsCacheKeyFieldsCookie {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_rule#check_presence PageRule#check_presence}
    */
    readonly checkPresence?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_rule#include PageRule#include}
    */
    readonly include?: string[];
}
export declare function pageRuleActionsCacheKeyFieldsCookieToTerraform(struct?: PageRuleActionsCacheKeyFieldsCookie | cdktf.IResolvable): any;
export declare function pageRuleActionsCacheKeyFieldsCookieToHclTerraform(struct?: PageRuleActionsCacheKeyFieldsCookie | cdktf.IResolvable): any;
export declare class PageRuleActionsCacheKeyFieldsCookieOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PageRuleActionsCacheKeyFieldsCookie | cdktf.IResolvable | undefined;
    set internalValue(value: PageRuleActionsCacheKeyFieldsCookie | cdktf.IResolvable | undefined);
    private _checkPresence?;
    get checkPresence(): string[];
    set checkPresence(value: string[]);
    resetCheckPresence(): void;
    get checkPresenceInput(): string[];
    private _include?;
    get include(): string[];
    set include(value: string[]);
    resetInclude(): void;
    get includeInput(): string[];
}
export interface PageRuleActionsCacheKeyFieldsHeader {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_rule#check_presence PageRule#check_presence}
    */
    readonly checkPresence?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_rule#exclude PageRule#exclude}
    */
    readonly exclude?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_rule#include PageRule#include}
    */
    readonly include?: string[];
}
export declare function pageRuleActionsCacheKeyFieldsHeaderToTerraform(struct?: PageRuleActionsCacheKeyFieldsHeader | cdktf.IResolvable): any;
export declare function pageRuleActionsCacheKeyFieldsHeaderToHclTerraform(struct?: PageRuleActionsCacheKeyFieldsHeader | cdktf.IResolvable): any;
export declare class PageRuleActionsCacheKeyFieldsHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PageRuleActionsCacheKeyFieldsHeader | cdktf.IResolvable | undefined;
    set internalValue(value: PageRuleActionsCacheKeyFieldsHeader | cdktf.IResolvable | undefined);
    private _checkPresence?;
    get checkPresence(): string[];
    set checkPresence(value: string[]);
    resetCheckPresence(): void;
    get checkPresenceInput(): string[];
    private _exclude?;
    get exclude(): string[];
    set exclude(value: string[]);
    resetExclude(): void;
    get excludeInput(): string[];
    private _include?;
    get include(): string[];
    set include(value: string[]);
    resetInclude(): void;
    get includeInput(): string[];
}
export interface PageRuleActionsCacheKeyFieldsHost {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_rule#resolved PageRule#resolved}
    */
    readonly resolved?: boolean | cdktf.IResolvable;
}
export declare function pageRuleActionsCacheKeyFieldsHostToTerraform(struct?: PageRuleActionsCacheKeyFieldsHost | cdktf.IResolvable): any;
export declare function pageRuleActionsCacheKeyFieldsHostToHclTerraform(struct?: PageRuleActionsCacheKeyFieldsHost | cdktf.IResolvable): any;
export declare class PageRuleActionsCacheKeyFieldsHostOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PageRuleActionsCacheKeyFieldsHost | cdktf.IResolvable | undefined;
    set internalValue(value: PageRuleActionsCacheKeyFieldsHost | cdktf.IResolvable | undefined);
    private _resolved?;
    get resolved(): boolean | cdktf.IResolvable;
    set resolved(value: boolean | cdktf.IResolvable);
    resetResolved(): void;
    get resolvedInput(): any;
}
export interface PageRuleActionsCacheKeyFieldsQueryString {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_rule#exclude PageRule#exclude}
    */
    readonly exclude?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_rule#include PageRule#include}
    */
    readonly include?: string[];
}
export declare function pageRuleActionsCacheKeyFieldsQueryStringToTerraform(struct?: PageRuleActionsCacheKeyFieldsQueryString | cdktf.IResolvable): any;
export declare function pageRuleActionsCacheKeyFieldsQueryStringToHclTerraform(struct?: PageRuleActionsCacheKeyFieldsQueryString | cdktf.IResolvable): any;
export declare class PageRuleActionsCacheKeyFieldsQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PageRuleActionsCacheKeyFieldsQueryString | cdktf.IResolvable | undefined;
    set internalValue(value: PageRuleActionsCacheKeyFieldsQueryString | cdktf.IResolvable | undefined);
    private _exclude?;
    get exclude(): string[];
    set exclude(value: string[]);
    resetExclude(): void;
    get excludeInput(): string[];
    private _include?;
    get include(): string[];
    set include(value: string[]);
    resetInclude(): void;
    get includeInput(): string[];
}
export interface PageRuleActionsCacheKeyFieldsUser {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_rule#device_type PageRule#device_type}
    */
    readonly deviceType?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_rule#geo PageRule#geo}
    */
    readonly geo?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_rule#lang PageRule#lang}
    */
    readonly lang?: boolean | cdktf.IResolvable;
}
export declare function pageRuleActionsCacheKeyFieldsUserToTerraform(struct?: PageRuleActionsCacheKeyFieldsUser | cdktf.IResolvable): any;
export declare function pageRuleActionsCacheKeyFieldsUserToHclTerraform(struct?: PageRuleActionsCacheKeyFieldsUser | cdktf.IResolvable): any;
export declare class PageRuleActionsCacheKeyFieldsUserOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PageRuleActionsCacheKeyFieldsUser | cdktf.IResolvable | undefined;
    set internalValue(value: PageRuleActionsCacheKeyFieldsUser | cdktf.IResolvable | undefined);
    private _deviceType?;
    get deviceType(): boolean | cdktf.IResolvable;
    set deviceType(value: boolean | cdktf.IResolvable);
    resetDeviceType(): void;
    get deviceTypeInput(): any;
    private _geo?;
    get geo(): boolean | cdktf.IResolvable;
    set geo(value: boolean | cdktf.IResolvable);
    resetGeo(): void;
    get geoInput(): any;
    private _lang?;
    get lang(): boolean | cdktf.IResolvable;
    set lang(value: boolean | cdktf.IResolvable);
    resetLang(): void;
    get langInput(): any;
}
export interface PageRuleActionsCacheKeyFields {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_rule#cookie PageRule#cookie}
    */
    readonly cookie?: PageRuleActionsCacheKeyFieldsCookie;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_rule#header PageRule#header}
    */
    readonly header?: PageRuleActionsCacheKeyFieldsHeader;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_rule#host PageRule#host}
    */
    readonly host?: PageRuleActionsCacheKeyFieldsHost;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_rule#query_string PageRule#query_string}
    */
    readonly queryString?: PageRuleActionsCacheKeyFieldsQueryString;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_rule#user PageRule#user}
    */
    readonly user?: PageRuleActionsCacheKeyFieldsUser;
}
export declare function pageRuleActionsCacheKeyFieldsToTerraform(struct?: PageRuleActionsCacheKeyFields | cdktf.IResolvable): any;
export declare function pageRuleActionsCacheKeyFieldsToHclTerraform(struct?: PageRuleActionsCacheKeyFields | cdktf.IResolvable): any;
export declare class PageRuleActionsCacheKeyFieldsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PageRuleActionsCacheKeyFields | cdktf.IResolvable | undefined;
    set internalValue(value: PageRuleActionsCacheKeyFields | cdktf.IResolvable | undefined);
    private _cookie;
    get cookie(): PageRuleActionsCacheKeyFieldsCookieOutputReference;
    putCookie(value: PageRuleActionsCacheKeyFieldsCookie): void;
    resetCookie(): void;
    get cookieInput(): any;
    private _header;
    get header(): PageRuleActionsCacheKeyFieldsHeaderOutputReference;
    putHeader(value: PageRuleActionsCacheKeyFieldsHeader): void;
    resetHeader(): void;
    get headerInput(): any;
    private _host;
    get host(): PageRuleActionsCacheKeyFieldsHostOutputReference;
    putHost(value: PageRuleActionsCacheKeyFieldsHost): void;
    resetHost(): void;
    get hostInput(): any;
    private _queryString;
    get queryString(): PageRuleActionsCacheKeyFieldsQueryStringOutputReference;
    putQueryString(value: PageRuleActionsCacheKeyFieldsQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): any;
    private _user;
    get user(): PageRuleActionsCacheKeyFieldsUserOutputReference;
    putUser(value: PageRuleActionsCacheKeyFieldsUser): void;
    resetUser(): void;
    get userInput(): any;
}
export interface PageRuleActionsForwardingUrl {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_rule#status_code PageRule#status_code}
    */
    readonly statusCode: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_rule#url PageRule#url}
    */
    readonly url: string;
}
export declare function pageRuleActionsForwardingUrlToTerraform(struct?: PageRuleActionsForwardingUrl | cdktf.IResolvable): any;
export declare function pageRuleActionsForwardingUrlToHclTerraform(struct?: PageRuleActionsForwardingUrl | cdktf.IResolvable): any;
export declare class PageRuleActionsForwardingUrlOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PageRuleActionsForwardingUrl | cdktf.IResolvable | undefined;
    set internalValue(value: PageRuleActionsForwardingUrl | cdktf.IResolvable | undefined);
    private _statusCode?;
    get statusCode(): number;
    set statusCode(value: number);
    get statusCodeInput(): number;
    private _url?;
    get url(): string;
    set url(value: string);
    get urlInput(): string;
}
export interface PageRuleActions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_rule#always_use_https PageRule#always_use_https}
    */
    readonly alwaysUseHttps?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_rule#automatic_https_rewrites PageRule#automatic_https_rewrites}
    */
    readonly automaticHttpsRewrites?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_rule#browser_cache_ttl PageRule#browser_cache_ttl}
    */
    readonly browserCacheTtl?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_rule#browser_check PageRule#browser_check}
    */
    readonly browserCheck?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_rule#bypass_cache_on_cookie PageRule#bypass_cache_on_cookie}
    */
    readonly bypassCacheOnCookie?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_rule#cache_by_device_type PageRule#cache_by_device_type}
    */
    readonly cacheByDeviceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_rule#cache_deception_armor PageRule#cache_deception_armor}
    */
    readonly cacheDeceptionArmor?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_rule#cache_key_fields PageRule#cache_key_fields}
    */
    readonly cacheKeyFields?: PageRuleActionsCacheKeyFields;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_rule#cache_level PageRule#cache_level}
    */
    readonly cacheLevel?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_rule#cache_on_cookie PageRule#cache_on_cookie}
    */
    readonly cacheOnCookie?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_rule#cache_ttl_by_status PageRule#cache_ttl_by_status}
    */
    readonly cacheTtlByStatus?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_rule#disable_apps PageRule#disable_apps}
    */
    readonly disableApps?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_rule#disable_performance PageRule#disable_performance}
    */
    readonly disablePerformance?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_rule#disable_security PageRule#disable_security}
    */
    readonly disableSecurity?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_rule#disable_zaraz PageRule#disable_zaraz}
    */
    readonly disableZaraz?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_rule#edge_cache_ttl PageRule#edge_cache_ttl}
    */
    readonly edgeCacheTtl?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_rule#email_obfuscation PageRule#email_obfuscation}
    */
    readonly emailObfuscation?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_rule#explicit_cache_control PageRule#explicit_cache_control}
    */
    readonly explicitCacheControl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_rule#forwarding_url PageRule#forwarding_url}
    */
    readonly forwardingUrl?: PageRuleActionsForwardingUrl;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_rule#host_header_override PageRule#host_header_override}
    */
    readonly hostHeaderOverride?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_rule#ip_geolocation PageRule#ip_geolocation}
    */
    readonly ipGeolocation?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_rule#mirage PageRule#mirage}
    */
    readonly mirage?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_rule#opportunistic_encryption PageRule#opportunistic_encryption}
    */
    readonly opportunisticEncryption?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_rule#origin_error_page_pass_thru PageRule#origin_error_page_pass_thru}
    */
    readonly originErrorPagePassThru?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_rule#polish PageRule#polish}
    */
    readonly polish?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_rule#resolve_override PageRule#resolve_override}
    */
    readonly resolveOverride?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_rule#respect_strong_etag PageRule#respect_strong_etag}
    */
    readonly respectStrongEtag?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_rule#response_buffering PageRule#response_buffering}
    */
    readonly responseBuffering?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_rule#rocket_loader PageRule#rocket_loader}
    */
    readonly rocketLoader?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_rule#security_level PageRule#security_level}
    */
    readonly securityLevel?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_rule#sort_query_string_for_cache PageRule#sort_query_string_for_cache}
    */
    readonly sortQueryStringForCache?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_rule#ssl PageRule#ssl}
    */
    readonly ssl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_rule#true_client_ip_header PageRule#true_client_ip_header}
    */
    readonly trueClientIpHeader?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_rule#waf PageRule#waf}
    */
    readonly waf?: string;
}
export declare function pageRuleActionsToTerraform(struct?: PageRuleActions | cdktf.IResolvable): any;
export declare function pageRuleActionsToHclTerraform(struct?: PageRuleActions | cdktf.IResolvable): any;
export declare class PageRuleActionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PageRuleActions | cdktf.IResolvable | undefined;
    set internalValue(value: PageRuleActions | cdktf.IResolvable | undefined);
    private _alwaysUseHttps?;
    get alwaysUseHttps(): boolean | cdktf.IResolvable;
    set alwaysUseHttps(value: boolean | cdktf.IResolvable);
    resetAlwaysUseHttps(): void;
    get alwaysUseHttpsInput(): any;
    private _automaticHttpsRewrites?;
    get automaticHttpsRewrites(): string;
    set automaticHttpsRewrites(value: string);
    resetAutomaticHttpsRewrites(): void;
    get automaticHttpsRewritesInput(): string;
    private _browserCacheTtl?;
    get browserCacheTtl(): number;
    set browserCacheTtl(value: number);
    resetBrowserCacheTtl(): void;
    get browserCacheTtlInput(): number;
    private _browserCheck?;
    get browserCheck(): string;
    set browserCheck(value: string);
    resetBrowserCheck(): void;
    get browserCheckInput(): string;
    private _bypassCacheOnCookie?;
    get bypassCacheOnCookie(): string;
    set bypassCacheOnCookie(value: string);
    resetBypassCacheOnCookie(): void;
    get bypassCacheOnCookieInput(): string;
    private _cacheByDeviceType?;
    get cacheByDeviceType(): string;
    set cacheByDeviceType(value: string);
    resetCacheByDeviceType(): void;
    get cacheByDeviceTypeInput(): string;
    private _cacheDeceptionArmor?;
    get cacheDeceptionArmor(): string;
    set cacheDeceptionArmor(value: string);
    resetCacheDeceptionArmor(): void;
    get cacheDeceptionArmorInput(): string;
    private _cacheKeyFields;
    get cacheKeyFields(): PageRuleActionsCacheKeyFieldsOutputReference;
    putCacheKeyFields(value: PageRuleActionsCacheKeyFields): void;
    resetCacheKeyFields(): void;
    get cacheKeyFieldsInput(): any;
    private _cacheLevel?;
    get cacheLevel(): string;
    set cacheLevel(value: string);
    resetCacheLevel(): void;
    get cacheLevelInput(): string;
    private _cacheOnCookie?;
    get cacheOnCookie(): string;
    set cacheOnCookie(value: string);
    resetCacheOnCookie(): void;
    get cacheOnCookieInput(): string;
    private _cacheTtlByStatus?;
    get cacheTtlByStatus(): {
        [key: string]: string;
    };
    set cacheTtlByStatus(value: {
        [key: string]: string;
    });
    resetCacheTtlByStatus(): void;
    get cacheTtlByStatusInput(): {
        [key: string]: string;
    };
    private _disableApps?;
    get disableApps(): boolean | cdktf.IResolvable;
    set disableApps(value: boolean | cdktf.IResolvable);
    resetDisableApps(): void;
    get disableAppsInput(): any;
    private _disablePerformance?;
    get disablePerformance(): boolean | cdktf.IResolvable;
    set disablePerformance(value: boolean | cdktf.IResolvable);
    resetDisablePerformance(): void;
    get disablePerformanceInput(): any;
    private _disableSecurity?;
    get disableSecurity(): boolean | cdktf.IResolvable;
    set disableSecurity(value: boolean | cdktf.IResolvable);
    resetDisableSecurity(): void;
    get disableSecurityInput(): any;
    private _disableZaraz?;
    get disableZaraz(): boolean | cdktf.IResolvable;
    set disableZaraz(value: boolean | cdktf.IResolvable);
    resetDisableZaraz(): void;
    get disableZarazInput(): any;
    private _edgeCacheTtl?;
    get edgeCacheTtl(): number;
    set edgeCacheTtl(value: number);
    resetEdgeCacheTtl(): void;
    get edgeCacheTtlInput(): number;
    private _emailObfuscation?;
    get emailObfuscation(): string;
    set emailObfuscation(value: string);
    resetEmailObfuscation(): void;
    get emailObfuscationInput(): string;
    private _explicitCacheControl?;
    get explicitCacheControl(): string;
    set explicitCacheControl(value: string);
    resetExplicitCacheControl(): void;
    get explicitCacheControlInput(): string;
    private _forwardingUrl;
    get forwardingUrl(): PageRuleActionsForwardingUrlOutputReference;
    putForwardingUrl(value: PageRuleActionsForwardingUrl): void;
    resetForwardingUrl(): void;
    get forwardingUrlInput(): any;
    private _hostHeaderOverride?;
    get hostHeaderOverride(): string;
    set hostHeaderOverride(value: string);
    resetHostHeaderOverride(): void;
    get hostHeaderOverrideInput(): string;
    private _ipGeolocation?;
    get ipGeolocation(): string;
    set ipGeolocation(value: string);
    resetIpGeolocation(): void;
    get ipGeolocationInput(): string;
    private _mirage?;
    get mirage(): string;
    set mirage(value: string);
    resetMirage(): void;
    get mirageInput(): string;
    private _opportunisticEncryption?;
    get opportunisticEncryption(): string;
    set opportunisticEncryption(value: string);
    resetOpportunisticEncryption(): void;
    get opportunisticEncryptionInput(): string;
    private _originErrorPagePassThru?;
    get originErrorPagePassThru(): string;
    set originErrorPagePassThru(value: string);
    resetOriginErrorPagePassThru(): void;
    get originErrorPagePassThruInput(): string;
    private _polish?;
    get polish(): string;
    set polish(value: string);
    resetPolish(): void;
    get polishInput(): string;
    private _resolveOverride?;
    get resolveOverride(): string;
    set resolveOverride(value: string);
    resetResolveOverride(): void;
    get resolveOverrideInput(): string;
    private _respectStrongEtag?;
    get respectStrongEtag(): string;
    set respectStrongEtag(value: string);
    resetRespectStrongEtag(): void;
    get respectStrongEtagInput(): string;
    private _responseBuffering?;
    get responseBuffering(): string;
    set responseBuffering(value: string);
    resetResponseBuffering(): void;
    get responseBufferingInput(): string;
    private _rocketLoader?;
    get rocketLoader(): string;
    set rocketLoader(value: string);
    resetRocketLoader(): void;
    get rocketLoaderInput(): string;
    private _securityLevel?;
    get securityLevel(): string;
    set securityLevel(value: string);
    resetSecurityLevel(): void;
    get securityLevelInput(): string;
    private _sortQueryStringForCache?;
    get sortQueryStringForCache(): string;
    set sortQueryStringForCache(value: string);
    resetSortQueryStringForCache(): void;
    get sortQueryStringForCacheInput(): string;
    private _ssl?;
    get ssl(): string;
    set ssl(value: string);
    resetSsl(): void;
    get sslInput(): string;
    private _trueClientIpHeader?;
    get trueClientIpHeader(): string;
    set trueClientIpHeader(value: string);
    resetTrueClientIpHeader(): void;
    get trueClientIpHeaderInput(): string;
    private _waf?;
    get waf(): string;
    set waf(value: string);
    resetWaf(): void;
    get wafInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_rule cloudflare_page_rule}
*/
export declare class PageRule extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_page_rule";
    /**
    * Generates CDKTF code for importing a PageRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the PageRule to import
    * @param importFromId The id of the existing PageRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the PageRule to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_rule cloudflare_page_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PageRuleConfig
    */
    constructor(scope: Construct, id: string, config: PageRuleConfig);
    private _actions;
    get actions(): PageRuleActionsOutputReference;
    putActions(value: PageRuleActions): void;
    get actionsInput(): any;
    get createdOn(): any;
    get id(): any;
    get modifiedOn(): any;
    private _priority?;
    get priority(): number;
    set priority(value: number);
    resetPriority(): void;
    get priorityInput(): number;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string;
    private _target?;
    get target(): string;
    set target(value: string);
    get targetInput(): string;
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
