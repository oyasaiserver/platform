import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RulesetConfig extends cdktf.TerraformMetaArguments {
    /**
    * The unique ID of the account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#account_id Ruleset#account_id}
    */
    readonly accountId?: string;
    /**
    * An informative description of the ruleset.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#description Ruleset#description}
    */
    readonly description?: string;
    /**
    * The kind of the ruleset.
    * Available values: "managed", "custom", "root", "zone".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#kind Ruleset#kind}
    */
    readonly kind: string;
    /**
    * The human-readable name of the ruleset.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#name Ruleset#name}
    */
    readonly name: string;
    /**
    * The phase of the ruleset.
    * Available values: "ddos_l4", "ddos_l7", "http_config_settings", "http_custom_errors", "http_log_custom_fields", "http_ratelimit", "http_request_cache_settings", "http_request_dynamic_redirect", "http_request_firewall_custom", "http_request_firewall_managed", "http_request_late_transform", "http_request_origin", "http_request_redirect", "http_request_sanitize", "http_request_sbfm", "http_request_transform", "http_response_cache_settings", "http_response_compression", "http_response_firewall_managed", "http_response_headers_transform", "magic_transit", "magic_transit_ids_managed", "magic_transit_managed", "magic_transit_ratelimit".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#phase Ruleset#phase}
    */
    readonly phase: string;
    /**
    * The list of rules in the ruleset.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#rules Ruleset#rules}
    */
    readonly rules?: RulesetRules[] | cdktf.IResolvable;
    /**
    * The unique ID of the zone.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#zone_id Ruleset#zone_id}
    */
    readonly zoneId?: string;
}
export interface RulesetRulesActionParametersAlgorithms {
    /**
    * Name of the compression algorithm to enable.
    * Available values: "none", "auto", "default", "gzip", "brotli", "zstd".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#name Ruleset#name}
    */
    readonly name?: string;
}
export declare function rulesetRulesActionParametersAlgorithmsToTerraform(struct?: RulesetRulesActionParametersAlgorithms | cdktf.IResolvable): any;
export declare function rulesetRulesActionParametersAlgorithmsToHclTerraform(struct?: RulesetRulesActionParametersAlgorithms | cdktf.IResolvable): any;
export declare class RulesetRulesActionParametersAlgorithmsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): RulesetRulesActionParametersAlgorithms | cdktf.IResolvable | undefined;
    set internalValue(value: RulesetRulesActionParametersAlgorithms | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
}
export declare class RulesetRulesActionParametersAlgorithmsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: RulesetRulesActionParametersAlgorithms[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): RulesetRulesActionParametersAlgorithmsOutputReference;
}
export interface RulesetRulesActionParametersAutominify {
    /**
    * Whether to minify CSS files.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#css Ruleset#css}
    */
    readonly css?: boolean | cdktf.IResolvable;
    /**
    * Whether to minify HTML files.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#html Ruleset#html}
    */
    readonly html?: boolean | cdktf.IResolvable;
    /**
    * Whether to minify JavaScript files.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#js Ruleset#js}
    */
    readonly js?: boolean | cdktf.IResolvable;
}
export declare function rulesetRulesActionParametersAutominifyToTerraform(struct?: RulesetRulesActionParametersAutominify | cdktf.IResolvable): any;
export declare function rulesetRulesActionParametersAutominifyToHclTerraform(struct?: RulesetRulesActionParametersAutominify | cdktf.IResolvable): any;
export declare class RulesetRulesActionParametersAutominifyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RulesetRulesActionParametersAutominify | cdktf.IResolvable | undefined;
    set internalValue(value: RulesetRulesActionParametersAutominify | cdktf.IResolvable | undefined);
    private _css?;
    get css(): boolean | cdktf.IResolvable;
    set css(value: boolean | cdktf.IResolvable);
    resetCss(): void;
    get cssInput(): any;
    private _html?;
    get html(): boolean | cdktf.IResolvable;
    set html(value: boolean | cdktf.IResolvable);
    resetHtml(): void;
    get htmlInput(): any;
    private _js?;
    get js(): boolean | cdktf.IResolvable;
    set js(value: boolean | cdktf.IResolvable);
    resetJs(): void;
    get jsInput(): any;
}
export interface RulesetRulesActionParametersBrowserTtl {
    /**
    * The browser TTL (in seconds) if you choose the "override_origin" mode.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#default Ruleset#default}
    */
    readonly default?: number;
    /**
    * The browser TTL mode.
    * Available values: "respect_origin", "bypass_by_default", "override_origin", "bypass".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#mode Ruleset#mode}
    */
    readonly mode: string;
}
export declare function rulesetRulesActionParametersBrowserTtlToTerraform(struct?: RulesetRulesActionParametersBrowserTtl | cdktf.IResolvable): any;
export declare function rulesetRulesActionParametersBrowserTtlToHclTerraform(struct?: RulesetRulesActionParametersBrowserTtl | cdktf.IResolvable): any;
export declare class RulesetRulesActionParametersBrowserTtlOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RulesetRulesActionParametersBrowserTtl | cdktf.IResolvable | undefined;
    set internalValue(value: RulesetRulesActionParametersBrowserTtl | cdktf.IResolvable | undefined);
    private _default?;
    get default(): number;
    set default(value: number);
    resetDefault(): void;
    get defaultInput(): number;
    private _mode?;
    get mode(): string;
    set mode(value: string);
    get modeInput(): string;
}
export interface RulesetRulesActionParametersCacheKeyCustomKeyCookie {
    /**
    * A list of cookies to check for the presence of. The presence of these cookies is included in the cache key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#check_presence Ruleset#check_presence}
    */
    readonly checkPresence?: string[];
    /**
    * A list of cookies to include in the cache key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#include Ruleset#include}
    */
    readonly include?: string[];
}
export declare function rulesetRulesActionParametersCacheKeyCustomKeyCookieToTerraform(struct?: RulesetRulesActionParametersCacheKeyCustomKeyCookie | cdktf.IResolvable): any;
export declare function rulesetRulesActionParametersCacheKeyCustomKeyCookieToHclTerraform(struct?: RulesetRulesActionParametersCacheKeyCustomKeyCookie | cdktf.IResolvable): any;
export declare class RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RulesetRulesActionParametersCacheKeyCustomKeyCookie | cdktf.IResolvable | undefined;
    set internalValue(value: RulesetRulesActionParametersCacheKeyCustomKeyCookie | cdktf.IResolvable | undefined);
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
export interface RulesetRulesActionParametersCacheKeyCustomKeyHeader {
    /**
    * A list of headers to check for the presence of. The presence of these headers is included in the cache key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#check_presence Ruleset#check_presence}
    */
    readonly checkPresence?: string[];
    /**
    * A mapping of header names to a list of values. If a header is present in the request and contains any of the values provided, its value is included in the cache key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#contains Ruleset#contains}
    */
    readonly contains?: {
        [key: string]: string[];
    } | cdktf.IResolvable;
    /**
    * Whether to exclude the origin header in the cache key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#exclude_origin Ruleset#exclude_origin}
    */
    readonly excludeOrigin?: boolean | cdktf.IResolvable;
    /**
    * A list of headers to include in the cache key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#include Ruleset#include}
    */
    readonly include?: string[];
}
export declare function rulesetRulesActionParametersCacheKeyCustomKeyHeaderToTerraform(struct?: RulesetRulesActionParametersCacheKeyCustomKeyHeader | cdktf.IResolvable): any;
export declare function rulesetRulesActionParametersCacheKeyCustomKeyHeaderToHclTerraform(struct?: RulesetRulesActionParametersCacheKeyCustomKeyHeader | cdktf.IResolvable): any;
export declare class RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RulesetRulesActionParametersCacheKeyCustomKeyHeader | cdktf.IResolvable | undefined;
    set internalValue(value: RulesetRulesActionParametersCacheKeyCustomKeyHeader | cdktf.IResolvable | undefined);
    private _checkPresence?;
    get checkPresence(): string[];
    set checkPresence(value: string[]);
    resetCheckPresence(): void;
    get checkPresenceInput(): string[];
    private _contains?;
    get contains(): {
        [key: string]: string[];
    } | cdktf.IResolvable;
    set contains(value: {
        [key: string]: string[];
    } | cdktf.IResolvable);
    resetContains(): void;
    get containsInput(): any;
    private _excludeOrigin?;
    get excludeOrigin(): boolean | cdktf.IResolvable;
    set excludeOrigin(value: boolean | cdktf.IResolvable);
    resetExcludeOrigin(): void;
    get excludeOriginInput(): any;
    private _include?;
    get include(): string[];
    set include(value: string[]);
    resetInclude(): void;
    get includeInput(): string[];
}
export interface RulesetRulesActionParametersCacheKeyCustomKeyHost {
    /**
    * Whether to use the resolved host in the cache key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#resolved Ruleset#resolved}
    */
    readonly resolved?: boolean | cdktf.IResolvable;
}
export declare function rulesetRulesActionParametersCacheKeyCustomKeyHostToTerraform(struct?: RulesetRulesActionParametersCacheKeyCustomKeyHost | cdktf.IResolvable): any;
export declare function rulesetRulesActionParametersCacheKeyCustomKeyHostToHclTerraform(struct?: RulesetRulesActionParametersCacheKeyCustomKeyHost | cdktf.IResolvable): any;
export declare class RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RulesetRulesActionParametersCacheKeyCustomKeyHost | cdktf.IResolvable | undefined;
    set internalValue(value: RulesetRulesActionParametersCacheKeyCustomKeyHost | cdktf.IResolvable | undefined);
    private _resolved?;
    get resolved(): boolean | cdktf.IResolvable;
    set resolved(value: boolean | cdktf.IResolvable);
    resetResolved(): void;
    get resolvedInput(): any;
}
export interface RulesetRulesActionParametersCacheKeyCustomKeyQueryStringExclude {
    /**
    * Whether to exclude all query string parameters from the cache key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#all Ruleset#all}
    */
    readonly all?: boolean | cdktf.IResolvable;
    /**
    * A list of query string parameters to exclude from the cache key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#list Ruleset#list}
    */
    readonly list?: string[];
}
export declare function rulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeToTerraform(struct?: RulesetRulesActionParametersCacheKeyCustomKeyQueryStringExclude | cdktf.IResolvable): any;
export declare function rulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeToHclTerraform(struct?: RulesetRulesActionParametersCacheKeyCustomKeyQueryStringExclude | cdktf.IResolvable): any;
export declare class RulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RulesetRulesActionParametersCacheKeyCustomKeyQueryStringExclude | cdktf.IResolvable | undefined;
    set internalValue(value: RulesetRulesActionParametersCacheKeyCustomKeyQueryStringExclude | cdktf.IResolvable | undefined);
    private _all?;
    get all(): boolean | cdktf.IResolvable;
    set all(value: boolean | cdktf.IResolvable);
    resetAll(): void;
    get allInput(): any;
    private _list?;
    get list(): string[];
    set list(value: string[]);
    resetList(): void;
    get listInput(): string[];
}
export interface RulesetRulesActionParametersCacheKeyCustomKeyQueryStringInclude {
    /**
    * Whether to include all query string parameters in the cache key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#all Ruleset#all}
    */
    readonly all?: boolean | cdktf.IResolvable;
    /**
    * A list of query string parameters to include in the cache key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#list Ruleset#list}
    */
    readonly list?: string[];
}
export declare function rulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeToTerraform(struct?: RulesetRulesActionParametersCacheKeyCustomKeyQueryStringInclude | cdktf.IResolvable): any;
export declare function rulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeToHclTerraform(struct?: RulesetRulesActionParametersCacheKeyCustomKeyQueryStringInclude | cdktf.IResolvable): any;
export declare class RulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RulesetRulesActionParametersCacheKeyCustomKeyQueryStringInclude | cdktf.IResolvable | undefined;
    set internalValue(value: RulesetRulesActionParametersCacheKeyCustomKeyQueryStringInclude | cdktf.IResolvable | undefined);
    private _all?;
    get all(): boolean | cdktf.IResolvable;
    set all(value: boolean | cdktf.IResolvable);
    resetAll(): void;
    get allInput(): any;
    private _list?;
    get list(): string[];
    set list(value: string[]);
    resetList(): void;
    get listInput(): string[];
}
export interface RulesetRulesActionParametersCacheKeyCustomKeyQueryString {
    /**
    * Which query string parameters to exclude from the cache key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#exclude Ruleset#exclude}
    */
    readonly exclude?: RulesetRulesActionParametersCacheKeyCustomKeyQueryStringExclude;
    /**
    * Which query string parameters to include in the cache key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#include Ruleset#include}
    */
    readonly include?: RulesetRulesActionParametersCacheKeyCustomKeyQueryStringInclude;
}
export declare function rulesetRulesActionParametersCacheKeyCustomKeyQueryStringToTerraform(struct?: RulesetRulesActionParametersCacheKeyCustomKeyQueryString | cdktf.IResolvable): any;
export declare function rulesetRulesActionParametersCacheKeyCustomKeyQueryStringToHclTerraform(struct?: RulesetRulesActionParametersCacheKeyCustomKeyQueryString | cdktf.IResolvable): any;
export declare class RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RulesetRulesActionParametersCacheKeyCustomKeyQueryString | cdktf.IResolvable | undefined;
    set internalValue(value: RulesetRulesActionParametersCacheKeyCustomKeyQueryString | cdktf.IResolvable | undefined);
    private _exclude;
    get exclude(): RulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference;
    putExclude(value: RulesetRulesActionParametersCacheKeyCustomKeyQueryStringExclude): void;
    resetExclude(): void;
    get excludeInput(): any;
    private _include;
    get include(): RulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference;
    putInclude(value: RulesetRulesActionParametersCacheKeyCustomKeyQueryStringInclude): void;
    resetInclude(): void;
    get includeInput(): any;
}
export interface RulesetRulesActionParametersCacheKeyCustomKeyUser {
    /**
    * Whether to use the user agent's device type in the cache key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#device_type Ruleset#device_type}
    */
    readonly deviceType?: boolean | cdktf.IResolvable;
    /**
    * Whether to use the user agents's country in the cache key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#geo Ruleset#geo}
    */
    readonly geo?: boolean | cdktf.IResolvable;
    /**
    * Whether to use the user agent's language in the cache key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#lang Ruleset#lang}
    */
    readonly lang?: boolean | cdktf.IResolvable;
}
export declare function rulesetRulesActionParametersCacheKeyCustomKeyUserToTerraform(struct?: RulesetRulesActionParametersCacheKeyCustomKeyUser | cdktf.IResolvable): any;
export declare function rulesetRulesActionParametersCacheKeyCustomKeyUserToHclTerraform(struct?: RulesetRulesActionParametersCacheKeyCustomKeyUser | cdktf.IResolvable): any;
export declare class RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RulesetRulesActionParametersCacheKeyCustomKeyUser | cdktf.IResolvable | undefined;
    set internalValue(value: RulesetRulesActionParametersCacheKeyCustomKeyUser | cdktf.IResolvable | undefined);
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
export interface RulesetRulesActionParametersCacheKeyCustomKey {
    /**
    * Which cookies to include in the cache key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#cookie Ruleset#cookie}
    */
    readonly cookie?: RulesetRulesActionParametersCacheKeyCustomKeyCookie;
    /**
    * Which headers to include in the cache key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#header Ruleset#header}
    */
    readonly header?: RulesetRulesActionParametersCacheKeyCustomKeyHeader;
    /**
    * How to use the host in the cache key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#host Ruleset#host}
    */
    readonly host?: RulesetRulesActionParametersCacheKeyCustomKeyHost;
    /**
    * Which query string parameters to include in or exclude from the cache key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#query_string Ruleset#query_string}
    */
    readonly queryString?: RulesetRulesActionParametersCacheKeyCustomKeyQueryString;
    /**
    * How to use characteristics of the request user agent in the cache key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#user Ruleset#user}
    */
    readonly user?: RulesetRulesActionParametersCacheKeyCustomKeyUser;
}
export declare function rulesetRulesActionParametersCacheKeyCustomKeyToTerraform(struct?: RulesetRulesActionParametersCacheKeyCustomKey | cdktf.IResolvable): any;
export declare function rulesetRulesActionParametersCacheKeyCustomKeyToHclTerraform(struct?: RulesetRulesActionParametersCacheKeyCustomKey | cdktf.IResolvable): any;
export declare class RulesetRulesActionParametersCacheKeyCustomKeyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RulesetRulesActionParametersCacheKeyCustomKey | cdktf.IResolvable | undefined;
    set internalValue(value: RulesetRulesActionParametersCacheKeyCustomKey | cdktf.IResolvable | undefined);
    private _cookie;
    get cookie(): RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference;
    putCookie(value: RulesetRulesActionParametersCacheKeyCustomKeyCookie): void;
    resetCookie(): void;
    get cookieInput(): any;
    private _header;
    get header(): RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference;
    putHeader(value: RulesetRulesActionParametersCacheKeyCustomKeyHeader): void;
    resetHeader(): void;
    get headerInput(): any;
    private _host;
    get host(): RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference;
    putHost(value: RulesetRulesActionParametersCacheKeyCustomKeyHost): void;
    resetHost(): void;
    get hostInput(): any;
    private _queryString;
    get queryString(): RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference;
    putQueryString(value: RulesetRulesActionParametersCacheKeyCustomKeyQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): any;
    private _user;
    get user(): RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference;
    putUser(value: RulesetRulesActionParametersCacheKeyCustomKeyUser): void;
    resetUser(): void;
    get userInput(): any;
}
export interface RulesetRulesActionParametersCacheKey {
    /**
    * Whether to separate cached content based on the visitor's device type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#cache_by_device_type Ruleset#cache_by_device_type}
    */
    readonly cacheByDeviceType?: boolean | cdktf.IResolvable;
    /**
    * Whether to protect from web cache deception attacks, while allowing static assets to be cached.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#cache_deception_armor Ruleset#cache_deception_armor}
    */
    readonly cacheDeceptionArmor?: boolean | cdktf.IResolvable;
    /**
    * Which components of the request are included or excluded from the cache key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#custom_key Ruleset#custom_key}
    */
    readonly customKey?: RulesetRulesActionParametersCacheKeyCustomKey;
    /**
    * Whether to treat requests with the same query parameters the same, regardless of the order those query parameters are in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#ignore_query_strings_order Ruleset#ignore_query_strings_order}
    */
    readonly ignoreQueryStringsOrder?: boolean | cdktf.IResolvable;
}
export declare function rulesetRulesActionParametersCacheKeyToTerraform(struct?: RulesetRulesActionParametersCacheKey | cdktf.IResolvable): any;
export declare function rulesetRulesActionParametersCacheKeyToHclTerraform(struct?: RulesetRulesActionParametersCacheKey | cdktf.IResolvable): any;
export declare class RulesetRulesActionParametersCacheKeyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RulesetRulesActionParametersCacheKey | cdktf.IResolvable | undefined;
    set internalValue(value: RulesetRulesActionParametersCacheKey | cdktf.IResolvable | undefined);
    private _cacheByDeviceType?;
    get cacheByDeviceType(): boolean | cdktf.IResolvable;
    set cacheByDeviceType(value: boolean | cdktf.IResolvable);
    resetCacheByDeviceType(): void;
    get cacheByDeviceTypeInput(): any;
    private _cacheDeceptionArmor?;
    get cacheDeceptionArmor(): boolean | cdktf.IResolvable;
    set cacheDeceptionArmor(value: boolean | cdktf.IResolvable);
    resetCacheDeceptionArmor(): void;
    get cacheDeceptionArmorInput(): any;
    private _customKey;
    get customKey(): RulesetRulesActionParametersCacheKeyCustomKeyOutputReference;
    putCustomKey(value: RulesetRulesActionParametersCacheKeyCustomKey): void;
    resetCustomKey(): void;
    get customKeyInput(): any;
    private _ignoreQueryStringsOrder?;
    get ignoreQueryStringsOrder(): boolean | cdktf.IResolvable;
    set ignoreQueryStringsOrder(value: boolean | cdktf.IResolvable);
    resetIgnoreQueryStringsOrder(): void;
    get ignoreQueryStringsOrderInput(): any;
}
export interface RulesetRulesActionParametersCacheReserve {
    /**
    * Whether Cache Reserve is enabled. If this is true and a request meets eligibility criteria, Cloudflare will write the resource to Cache Reserve.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#eligible Ruleset#eligible}
    */
    readonly eligible: boolean | cdktf.IResolvable;
    /**
    * The minimum file size eligible for storage in Cache Reserve.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#minimum_file_size Ruleset#minimum_file_size}
    */
    readonly minimumFileSize?: number;
}
export declare function rulesetRulesActionParametersCacheReserveToTerraform(struct?: RulesetRulesActionParametersCacheReserve | cdktf.IResolvable): any;
export declare function rulesetRulesActionParametersCacheReserveToHclTerraform(struct?: RulesetRulesActionParametersCacheReserve | cdktf.IResolvable): any;
export declare class RulesetRulesActionParametersCacheReserveOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RulesetRulesActionParametersCacheReserve | cdktf.IResolvable | undefined;
    set internalValue(value: RulesetRulesActionParametersCacheReserve | cdktf.IResolvable | undefined);
    private _eligible?;
    get eligible(): boolean | cdktf.IResolvable;
    set eligible(value: boolean | cdktf.IResolvable);
    get eligibleInput(): any;
    private _minimumFileSize?;
    get minimumFileSize(): number;
    set minimumFileSize(value: number);
    resetMinimumFileSize(): void;
    get minimumFileSizeInput(): number;
}
export interface RulesetRulesActionParametersCookieFields {
    /**
    * The name of the cookie.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#name Ruleset#name}
    */
    readonly name: string;
}
export declare function rulesetRulesActionParametersCookieFieldsToTerraform(struct?: RulesetRulesActionParametersCookieFields | cdktf.IResolvable): any;
export declare function rulesetRulesActionParametersCookieFieldsToHclTerraform(struct?: RulesetRulesActionParametersCookieFields | cdktf.IResolvable): any;
export declare class RulesetRulesActionParametersCookieFieldsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): RulesetRulesActionParametersCookieFields | cdktf.IResolvable | undefined;
    set internalValue(value: RulesetRulesActionParametersCookieFields | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export declare class RulesetRulesActionParametersCookieFieldsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: RulesetRulesActionParametersCookieFields[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): RulesetRulesActionParametersCookieFieldsOutputReference;
}
export interface RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange {
    /**
    * The lower bound of the range.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#from Ruleset#from}
    */
    readonly from?: number;
    /**
    * The upper bound of the range.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#to Ruleset#to}
    */
    readonly to?: number;
}
export declare function rulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeToTerraform(struct?: RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange | cdktf.IResolvable): any;
export declare function rulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeToHclTerraform(struct?: RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange | cdktf.IResolvable): any;
export declare class RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange | cdktf.IResolvable | undefined;
    set internalValue(value: RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange | cdktf.IResolvable | undefined);
    private _from?;
    get from(): number;
    set from(value: number);
    resetFrom(): void;
    get fromInput(): number;
    private _to?;
    get to(): number;
    set to(value: number);
    resetTo(): void;
    get toInput(): number;
}
export interface RulesetRulesActionParametersEdgeTtlStatusCodeTtl {
    /**
    * A single status code to apply the TTL to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#status_code Ruleset#status_code}
    */
    readonly statusCode?: number;
    /**
    * A range of status codes to apply the TTL to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#status_code_range Ruleset#status_code_range}
    */
    readonly statusCodeRange?: RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange;
    /**
    * The time to cache the response for (in seconds). A value of 0 is equivalent to setting the cache control header with the value "no-cache". A value of -1 is equivalent to setting the cache control header with the value of "no-store".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#value Ruleset#value}
    */
    readonly value: number;
}
export declare function rulesetRulesActionParametersEdgeTtlStatusCodeTtlToTerraform(struct?: RulesetRulesActionParametersEdgeTtlStatusCodeTtl | cdktf.IResolvable): any;
export declare function rulesetRulesActionParametersEdgeTtlStatusCodeTtlToHclTerraform(struct?: RulesetRulesActionParametersEdgeTtlStatusCodeTtl | cdktf.IResolvable): any;
export declare class RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): RulesetRulesActionParametersEdgeTtlStatusCodeTtl | cdktf.IResolvable | undefined;
    set internalValue(value: RulesetRulesActionParametersEdgeTtlStatusCodeTtl | cdktf.IResolvable | undefined);
    private _statusCode?;
    get statusCode(): number;
    set statusCode(value: number);
    resetStatusCode(): void;
    get statusCodeInput(): number;
    private _statusCodeRange;
    get statusCodeRange(): RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference;
    putStatusCodeRange(value: RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange): void;
    resetStatusCodeRange(): void;
    get statusCodeRangeInput(): any;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number;
}
export declare class RulesetRulesActionParametersEdgeTtlStatusCodeTtlList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: RulesetRulesActionParametersEdgeTtlStatusCodeTtl[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference;
}
export interface RulesetRulesActionParametersEdgeTtl {
    /**
    * The edge TTL (in seconds) if you choose the "override_origin" mode.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#default Ruleset#default}
    */
    readonly default?: number;
    /**
    * The edge TTL mode.
    * Available values: "respect_origin", "bypass_by_default", "override_origin".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#mode Ruleset#mode}
    */
    readonly mode: string;
    /**
    * A list of TTLs to apply to specific status codes or status code ranges.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#status_code_ttl Ruleset#status_code_ttl}
    */
    readonly statusCodeTtl?: RulesetRulesActionParametersEdgeTtlStatusCodeTtl[] | cdktf.IResolvable;
}
export declare function rulesetRulesActionParametersEdgeTtlToTerraform(struct?: RulesetRulesActionParametersEdgeTtl | cdktf.IResolvable): any;
export declare function rulesetRulesActionParametersEdgeTtlToHclTerraform(struct?: RulesetRulesActionParametersEdgeTtl | cdktf.IResolvable): any;
export declare class RulesetRulesActionParametersEdgeTtlOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RulesetRulesActionParametersEdgeTtl | cdktf.IResolvable | undefined;
    set internalValue(value: RulesetRulesActionParametersEdgeTtl | cdktf.IResolvable | undefined);
    private _default?;
    get default(): number;
    set default(value: number);
    resetDefault(): void;
    get defaultInput(): number;
    private _mode?;
    get mode(): string;
    set mode(value: string);
    get modeInput(): string;
    private _statusCodeTtl;
    get statusCodeTtl(): RulesetRulesActionParametersEdgeTtlStatusCodeTtlList;
    putStatusCodeTtl(value: RulesetRulesActionParametersEdgeTtlStatusCodeTtl[] | cdktf.IResolvable): void;
    resetStatusCodeTtl(): void;
    get statusCodeTtlInput(): any;
}
export interface RulesetRulesActionParametersFromListStruct {
    /**
    * An expression that evaluates to the list lookup key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#key Ruleset#key}
    */
    readonly key: string;
    /**
    * The name of the list to match against.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#name Ruleset#name}
    */
    readonly name: string;
}
export declare function rulesetRulesActionParametersFromListStructToTerraform(struct?: RulesetRulesActionParametersFromListStruct | cdktf.IResolvable): any;
export declare function rulesetRulesActionParametersFromListStructToHclTerraform(struct?: RulesetRulesActionParametersFromListStruct | cdktf.IResolvable): any;
export declare class RulesetRulesActionParametersFromListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RulesetRulesActionParametersFromListStruct | cdktf.IResolvable | undefined;
    set internalValue(value: RulesetRulesActionParametersFromListStruct | cdktf.IResolvable | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface RulesetRulesActionParametersFromValueTargetUrl {
    /**
    * An expression that evaluates to a URL to redirect the request to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#expression Ruleset#expression}
    */
    readonly expression?: string;
    /**
    * A URL to redirect the request to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#value Ruleset#value}
    */
    readonly value?: string;
}
export declare function rulesetRulesActionParametersFromValueTargetUrlToTerraform(struct?: RulesetRulesActionParametersFromValueTargetUrl): any;
export declare function rulesetRulesActionParametersFromValueTargetUrlToHclTerraform(struct?: RulesetRulesActionParametersFromValueTargetUrl): any;
export declare class RulesetRulesActionParametersFromValueTargetUrlOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RulesetRulesActionParametersFromValueTargetUrl | undefined;
    set internalValue(value: RulesetRulesActionParametersFromValueTargetUrl | undefined);
    private _expression?;
    get expression(): string;
    set expression(value: string);
    resetExpression(): void;
    get expressionInput(): string;
    private _value?;
    get value(): string;
    set value(value: string);
    resetValue(): void;
    get valueInput(): string;
}
export interface RulesetRulesActionParametersFromValue {
    /**
    * Whether to keep the query string of the original request.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#preserve_query_string Ruleset#preserve_query_string}
    */
    readonly preserveQueryString?: boolean | cdktf.IResolvable;
    /**
    * The status code to use for the redirect.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#status_code Ruleset#status_code}
    */
    readonly statusCode?: number;
    /**
    * A URL to redirect the request to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#target_url Ruleset#target_url}
    */
    readonly targetUrl: RulesetRulesActionParametersFromValueTargetUrl;
}
export declare function rulesetRulesActionParametersFromValueToTerraform(struct?: RulesetRulesActionParametersFromValue | cdktf.IResolvable): any;
export declare function rulesetRulesActionParametersFromValueToHclTerraform(struct?: RulesetRulesActionParametersFromValue | cdktf.IResolvable): any;
export declare class RulesetRulesActionParametersFromValueOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RulesetRulesActionParametersFromValue | cdktf.IResolvable | undefined;
    set internalValue(value: RulesetRulesActionParametersFromValue | cdktf.IResolvable | undefined);
    private _preserveQueryString?;
    get preserveQueryString(): boolean | cdktf.IResolvable;
    set preserveQueryString(value: boolean | cdktf.IResolvable);
    resetPreserveQueryString(): void;
    get preserveQueryStringInput(): any;
    private _statusCode?;
    get statusCode(): number;
    set statusCode(value: number);
    resetStatusCode(): void;
    get statusCodeInput(): number;
    private _targetUrl;
    get targetUrl(): RulesetRulesActionParametersFromValueTargetUrlOutputReference;
    putTargetUrl(value: RulesetRulesActionParametersFromValueTargetUrl): void;
    get targetUrlInput(): RulesetRulesActionParametersFromValueTargetUrl;
}
export interface RulesetRulesActionParametersHeaders {
    /**
    * An expression that evaluates to a value for the header.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#expression Ruleset#expression}
    */
    readonly expression?: string;
    /**
    * The operation to perform on the header.
    * Available values: "add", "set", "remove".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#operation Ruleset#operation}
    */
    readonly operation: string;
    /**
    * A static value for the header.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#value Ruleset#value}
    */
    readonly value?: string;
}
export declare function rulesetRulesActionParametersHeadersToTerraform(struct?: RulesetRulesActionParametersHeaders | cdktf.IResolvable): any;
export declare function rulesetRulesActionParametersHeadersToHclTerraform(struct?: RulesetRulesActionParametersHeaders | cdktf.IResolvable): any;
export declare class RulesetRulesActionParametersHeadersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): RulesetRulesActionParametersHeaders | cdktf.IResolvable | undefined;
    set internalValue(value: RulesetRulesActionParametersHeaders | cdktf.IResolvable | undefined);
    private _expression?;
    get expression(): string;
    set expression(value: string);
    resetExpression(): void;
    get expressionInput(): string;
    private _operation?;
    get operation(): string;
    set operation(value: string);
    get operationInput(): string;
    private _value?;
    get value(): string;
    set value(value: string);
    resetValue(): void;
    get valueInput(): string;
}
export declare class RulesetRulesActionParametersHeadersMap extends cdktf.ComplexMap {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    internalValue?: {
        [key: string]: RulesetRulesActionParametersHeaders;
    } | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    /**
    * @param key the key of the item to return
    */
    get(key: string): RulesetRulesActionParametersHeadersOutputReference;
}
export interface RulesetRulesActionParametersImmutable {
    /**
    * Whether to apply the directive only to Cloudflare's cache.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#cloudflare_only Ruleset#cloudflare_only}
    */
    readonly cloudflareOnly?: boolean | cdktf.IResolvable;
    /**
    * The operation to perform.
    * Available values: "set", "remove".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#operation Ruleset#operation}
    */
    readonly operation: string;
}
export declare function rulesetRulesActionParametersImmutableToTerraform(struct?: RulesetRulesActionParametersImmutable | cdktf.IResolvable): any;
export declare function rulesetRulesActionParametersImmutableToHclTerraform(struct?: RulesetRulesActionParametersImmutable | cdktf.IResolvable): any;
export declare class RulesetRulesActionParametersImmutableOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RulesetRulesActionParametersImmutable | cdktf.IResolvable | undefined;
    set internalValue(value: RulesetRulesActionParametersImmutable | cdktf.IResolvable | undefined);
    private _cloudflareOnly?;
    get cloudflareOnly(): boolean | cdktf.IResolvable;
    set cloudflareOnly(value: boolean | cdktf.IResolvable);
    resetCloudflareOnly(): void;
    get cloudflareOnlyInput(): any;
    private _operation?;
    get operation(): string;
    set operation(value: string);
    get operationInput(): string;
}
export interface RulesetRulesActionParametersMatchedData {
    /**
    * The public key to encrypt matched data logs with.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#public_key Ruleset#public_key}
    */
    readonly publicKey: string;
}
export declare function rulesetRulesActionParametersMatchedDataToTerraform(struct?: RulesetRulesActionParametersMatchedData | cdktf.IResolvable): any;
export declare function rulesetRulesActionParametersMatchedDataToHclTerraform(struct?: RulesetRulesActionParametersMatchedData | cdktf.IResolvable): any;
export declare class RulesetRulesActionParametersMatchedDataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RulesetRulesActionParametersMatchedData | cdktf.IResolvable | undefined;
    set internalValue(value: RulesetRulesActionParametersMatchedData | cdktf.IResolvable | undefined);
    private _publicKey?;
    get publicKey(): string;
    set publicKey(value: string);
    get publicKeyInput(): string;
}
export interface RulesetRulesActionParametersMaxAge {
    /**
    * Whether to apply the directive only to Cloudflare's cache.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#cloudflare_only Ruleset#cloudflare_only}
    */
    readonly cloudflareOnly?: boolean | cdktf.IResolvable;
    /**
    * The operation to perform.
    * Available values: "set", "remove".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#operation Ruleset#operation}
    */
    readonly operation: string;
    /**
    * The value for the directive in seconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#value Ruleset#value}
    */
    readonly value?: number;
}
export declare function rulesetRulesActionParametersMaxAgeToTerraform(struct?: RulesetRulesActionParametersMaxAge | cdktf.IResolvable): any;
export declare function rulesetRulesActionParametersMaxAgeToHclTerraform(struct?: RulesetRulesActionParametersMaxAge | cdktf.IResolvable): any;
export declare class RulesetRulesActionParametersMaxAgeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RulesetRulesActionParametersMaxAge | cdktf.IResolvable | undefined;
    set internalValue(value: RulesetRulesActionParametersMaxAge | cdktf.IResolvable | undefined);
    private _cloudflareOnly?;
    get cloudflareOnly(): boolean | cdktf.IResolvable;
    set cloudflareOnly(value: boolean | cdktf.IResolvable);
    resetCloudflareOnly(): void;
    get cloudflareOnlyInput(): any;
    private _operation?;
    get operation(): string;
    set operation(value: string);
    get operationInput(): string;
    private _value?;
    get value(): number;
    set value(value: number);
    resetValue(): void;
    get valueInput(): number;
}
export interface RulesetRulesActionParametersMustRevalidate {
    /**
    * Whether to apply the directive only to Cloudflare's cache.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#cloudflare_only Ruleset#cloudflare_only}
    */
    readonly cloudflareOnly?: boolean | cdktf.IResolvable;
    /**
    * The operation to perform.
    * Available values: "set", "remove".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#operation Ruleset#operation}
    */
    readonly operation: string;
}
export declare function rulesetRulesActionParametersMustRevalidateToTerraform(struct?: RulesetRulesActionParametersMustRevalidate | cdktf.IResolvable): any;
export declare function rulesetRulesActionParametersMustRevalidateToHclTerraform(struct?: RulesetRulesActionParametersMustRevalidate | cdktf.IResolvable): any;
export declare class RulesetRulesActionParametersMustRevalidateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RulesetRulesActionParametersMustRevalidate | cdktf.IResolvable | undefined;
    set internalValue(value: RulesetRulesActionParametersMustRevalidate | cdktf.IResolvable | undefined);
    private _cloudflareOnly?;
    get cloudflareOnly(): boolean | cdktf.IResolvable;
    set cloudflareOnly(value: boolean | cdktf.IResolvable);
    resetCloudflareOnly(): void;
    get cloudflareOnlyInput(): any;
    private _operation?;
    get operation(): string;
    set operation(value: string);
    get operationInput(): string;
}
export interface RulesetRulesActionParametersMustUnderstand {
    /**
    * Whether to apply the directive only to Cloudflare's cache.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#cloudflare_only Ruleset#cloudflare_only}
    */
    readonly cloudflareOnly?: boolean | cdktf.IResolvable;
    /**
    * The operation to perform.
    * Available values: "set", "remove".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#operation Ruleset#operation}
    */
    readonly operation: string;
}
export declare function rulesetRulesActionParametersMustUnderstandToTerraform(struct?: RulesetRulesActionParametersMustUnderstand | cdktf.IResolvable): any;
export declare function rulesetRulesActionParametersMustUnderstandToHclTerraform(struct?: RulesetRulesActionParametersMustUnderstand | cdktf.IResolvable): any;
export declare class RulesetRulesActionParametersMustUnderstandOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RulesetRulesActionParametersMustUnderstand | cdktf.IResolvable | undefined;
    set internalValue(value: RulesetRulesActionParametersMustUnderstand | cdktf.IResolvable | undefined);
    private _cloudflareOnly?;
    get cloudflareOnly(): boolean | cdktf.IResolvable;
    set cloudflareOnly(value: boolean | cdktf.IResolvable);
    resetCloudflareOnly(): void;
    get cloudflareOnlyInput(): any;
    private _operation?;
    get operation(): string;
    set operation(value: string);
    get operationInput(): string;
}
export interface RulesetRulesActionParametersNoCache {
    /**
    * Whether to apply the directive only to Cloudflare's cache.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#cloudflare_only Ruleset#cloudflare_only}
    */
    readonly cloudflareOnly?: boolean | cdktf.IResolvable;
    /**
    * The operation to perform.
    * Available values: "set", "remove".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#operation Ruleset#operation}
    */
    readonly operation: string;
    /**
    * The qualifiers for the directive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#qualifiers Ruleset#qualifiers}
    */
    readonly qualifiers?: string[];
}
export declare function rulesetRulesActionParametersNoCacheToTerraform(struct?: RulesetRulesActionParametersNoCache | cdktf.IResolvable): any;
export declare function rulesetRulesActionParametersNoCacheToHclTerraform(struct?: RulesetRulesActionParametersNoCache | cdktf.IResolvable): any;
export declare class RulesetRulesActionParametersNoCacheOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RulesetRulesActionParametersNoCache | cdktf.IResolvable | undefined;
    set internalValue(value: RulesetRulesActionParametersNoCache | cdktf.IResolvable | undefined);
    private _cloudflareOnly?;
    get cloudflareOnly(): boolean | cdktf.IResolvable;
    set cloudflareOnly(value: boolean | cdktf.IResolvable);
    resetCloudflareOnly(): void;
    get cloudflareOnlyInput(): any;
    private _operation?;
    get operation(): string;
    set operation(value: string);
    get operationInput(): string;
    private _qualifiers?;
    get qualifiers(): string[];
    set qualifiers(value: string[]);
    resetQualifiers(): void;
    get qualifiersInput(): string[];
}
export interface RulesetRulesActionParametersNoStore {
    /**
    * Whether to apply the directive only to Cloudflare's cache.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#cloudflare_only Ruleset#cloudflare_only}
    */
    readonly cloudflareOnly?: boolean | cdktf.IResolvable;
    /**
    * The operation to perform.
    * Available values: "set", "remove".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#operation Ruleset#operation}
    */
    readonly operation: string;
}
export declare function rulesetRulesActionParametersNoStoreToTerraform(struct?: RulesetRulesActionParametersNoStore | cdktf.IResolvable): any;
export declare function rulesetRulesActionParametersNoStoreToHclTerraform(struct?: RulesetRulesActionParametersNoStore | cdktf.IResolvable): any;
export declare class RulesetRulesActionParametersNoStoreOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RulesetRulesActionParametersNoStore | cdktf.IResolvable | undefined;
    set internalValue(value: RulesetRulesActionParametersNoStore | cdktf.IResolvable | undefined);
    private _cloudflareOnly?;
    get cloudflareOnly(): boolean | cdktf.IResolvable;
    set cloudflareOnly(value: boolean | cdktf.IResolvable);
    resetCloudflareOnly(): void;
    get cloudflareOnlyInput(): any;
    private _operation?;
    get operation(): string;
    set operation(value: string);
    get operationInput(): string;
}
export interface RulesetRulesActionParametersNoTransform {
    /**
    * Whether to apply the directive only to Cloudflare's cache.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#cloudflare_only Ruleset#cloudflare_only}
    */
    readonly cloudflareOnly?: boolean | cdktf.IResolvable;
    /**
    * The operation to perform.
    * Available values: "set", "remove".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#operation Ruleset#operation}
    */
    readonly operation: string;
}
export declare function rulesetRulesActionParametersNoTransformToTerraform(struct?: RulesetRulesActionParametersNoTransform | cdktf.IResolvable): any;
export declare function rulesetRulesActionParametersNoTransformToHclTerraform(struct?: RulesetRulesActionParametersNoTransform | cdktf.IResolvable): any;
export declare class RulesetRulesActionParametersNoTransformOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RulesetRulesActionParametersNoTransform | cdktf.IResolvable | undefined;
    set internalValue(value: RulesetRulesActionParametersNoTransform | cdktf.IResolvable | undefined);
    private _cloudflareOnly?;
    get cloudflareOnly(): boolean | cdktf.IResolvable;
    set cloudflareOnly(value: boolean | cdktf.IResolvable);
    resetCloudflareOnly(): void;
    get cloudflareOnlyInput(): any;
    private _operation?;
    get operation(): string;
    set operation(value: string);
    get operationInput(): string;
}
export interface RulesetRulesActionParametersOrigin {
    /**
    * A resolved host to route to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#host Ruleset#host}
    */
    readonly host?: string;
    /**
    * A destination port to route to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#port Ruleset#port}
    */
    readonly port?: number;
}
export declare function rulesetRulesActionParametersOriginToTerraform(struct?: RulesetRulesActionParametersOrigin | cdktf.IResolvable): any;
export declare function rulesetRulesActionParametersOriginToHclTerraform(struct?: RulesetRulesActionParametersOrigin | cdktf.IResolvable): any;
export declare class RulesetRulesActionParametersOriginOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RulesetRulesActionParametersOrigin | cdktf.IResolvable | undefined;
    set internalValue(value: RulesetRulesActionParametersOrigin | cdktf.IResolvable | undefined);
    private _host?;
    get host(): string;
    set host(value: string);
    resetHost(): void;
    get hostInput(): string;
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number;
}
export interface RulesetRulesActionParametersOverridesCategories {
    /**
    * The action to override rules in the category with.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#action Ruleset#action}
    */
    readonly action?: string;
    /**
    * The name of the category to override.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#category Ruleset#category}
    */
    readonly category: string;
    /**
    * Whether to enable execution of rules in the category.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#enabled Ruleset#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * The sensitivity level to use for rules in the category. This option is only applicable for DDoS phases.
    * Available values: "default", "medium", "low", "eoff".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#sensitivity_level Ruleset#sensitivity_level}
    */
    readonly sensitivityLevel?: string;
}
export declare function rulesetRulesActionParametersOverridesCategoriesToTerraform(struct?: RulesetRulesActionParametersOverridesCategories | cdktf.IResolvable): any;
export declare function rulesetRulesActionParametersOverridesCategoriesToHclTerraform(struct?: RulesetRulesActionParametersOverridesCategories | cdktf.IResolvable): any;
export declare class RulesetRulesActionParametersOverridesCategoriesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): RulesetRulesActionParametersOverridesCategories | cdktf.IResolvable | undefined;
    set internalValue(value: RulesetRulesActionParametersOverridesCategories | cdktf.IResolvable | undefined);
    private _action?;
    get action(): string;
    set action(value: string);
    resetAction(): void;
    get actionInput(): string;
    private _category?;
    get category(): string;
    set category(value: string);
    get categoryInput(): string;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): any;
    private _sensitivityLevel?;
    get sensitivityLevel(): string;
    set sensitivityLevel(value: string);
    resetSensitivityLevel(): void;
    get sensitivityLevelInput(): string;
}
export declare class RulesetRulesActionParametersOverridesCategoriesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: RulesetRulesActionParametersOverridesCategories[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): RulesetRulesActionParametersOverridesCategoriesOutputReference;
}
export interface RulesetRulesActionParametersOverridesRules {
    /**
    * The action to override the rule with.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#action Ruleset#action}
    */
    readonly action?: string;
    /**
    * Whether to enable execution of the rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#enabled Ruleset#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * The ID of the rule to override.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#id Ruleset#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
    /**
    * The score threshold to use for the rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#score_threshold Ruleset#score_threshold}
    */
    readonly scoreThreshold?: number;
    /**
    * The sensitivity level to use for the rule. This option is only applicable for DDoS phases.
    * Available values: "default", "medium", "low", "eoff".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#sensitivity_level Ruleset#sensitivity_level}
    */
    readonly sensitivityLevel?: string;
}
export declare function rulesetRulesActionParametersOverridesRulesToTerraform(struct?: RulesetRulesActionParametersOverridesRules | cdktf.IResolvable): any;
export declare function rulesetRulesActionParametersOverridesRulesToHclTerraform(struct?: RulesetRulesActionParametersOverridesRules | cdktf.IResolvable): any;
export declare class RulesetRulesActionParametersOverridesRulesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): RulesetRulesActionParametersOverridesRules | cdktf.IResolvable | undefined;
    set internalValue(value: RulesetRulesActionParametersOverridesRules | cdktf.IResolvable | undefined);
    private _action?;
    get action(): string;
    set action(value: string);
    resetAction(): void;
    get actionInput(): string;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): any;
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    private _scoreThreshold?;
    get scoreThreshold(): number;
    set scoreThreshold(value: number);
    resetScoreThreshold(): void;
    get scoreThresholdInput(): number;
    private _sensitivityLevel?;
    get sensitivityLevel(): string;
    set sensitivityLevel(value: string);
    resetSensitivityLevel(): void;
    get sensitivityLevelInput(): string;
}
export declare class RulesetRulesActionParametersOverridesRulesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: RulesetRulesActionParametersOverridesRules[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): RulesetRulesActionParametersOverridesRulesOutputReference;
}
export interface RulesetRulesActionParametersOverrides {
    /**
    * An action to override all rules with. This option has lower precedence than rule and category overrides.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#action Ruleset#action}
    */
    readonly action?: string;
    /**
    * A list of category-level overrides. This option has the second-highest precedence after rule-level overrides.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#categories Ruleset#categories}
    */
    readonly categories?: RulesetRulesActionParametersOverridesCategories[] | cdktf.IResolvable;
    /**
    * Whether to enable execution of all rules. This option has lower precedence than rule and category overrides.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#enabled Ruleset#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * A list of rule-level overrides. This option has the highest precedence.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#rules Ruleset#rules}
    */
    readonly rules?: RulesetRulesActionParametersOverridesRules[] | cdktf.IResolvable;
    /**
    * A sensitivity level to set for all rules. This option has lower precedence than rule and category overrides and is only applicable for DDoS phases.
    * Available values: "default", "medium", "low", "eoff".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#sensitivity_level Ruleset#sensitivity_level}
    */
    readonly sensitivityLevel?: string;
}
export declare function rulesetRulesActionParametersOverridesToTerraform(struct?: RulesetRulesActionParametersOverrides | cdktf.IResolvable): any;
export declare function rulesetRulesActionParametersOverridesToHclTerraform(struct?: RulesetRulesActionParametersOverrides | cdktf.IResolvable): any;
export declare class RulesetRulesActionParametersOverridesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RulesetRulesActionParametersOverrides | cdktf.IResolvable | undefined;
    set internalValue(value: RulesetRulesActionParametersOverrides | cdktf.IResolvable | undefined);
    private _action?;
    get action(): string;
    set action(value: string);
    resetAction(): void;
    get actionInput(): string;
    private _categories;
    get categories(): RulesetRulesActionParametersOverridesCategoriesList;
    putCategories(value: RulesetRulesActionParametersOverridesCategories[] | cdktf.IResolvable): void;
    resetCategories(): void;
    get categoriesInput(): any;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): any;
    private _rules;
    get rules(): RulesetRulesActionParametersOverridesRulesList;
    putRules(value: RulesetRulesActionParametersOverridesRules[] | cdktf.IResolvable): void;
    resetRules(): void;
    get rulesInput(): any;
    private _sensitivityLevel?;
    get sensitivityLevel(): string;
    set sensitivityLevel(value: string);
    resetSensitivityLevel(): void;
    get sensitivityLevelInput(): string;
}
export interface RulesetRulesActionParametersPrivate {
    /**
    * Whether to apply the directive only to Cloudflare's cache.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#cloudflare_only Ruleset#cloudflare_only}
    */
    readonly cloudflareOnly?: boolean | cdktf.IResolvable;
    /**
    * The operation to perform.
    * Available values: "set", "remove".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#operation Ruleset#operation}
    */
    readonly operation: string;
    /**
    * The qualifiers for the directive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#qualifiers Ruleset#qualifiers}
    */
    readonly qualifiers?: string[];
}
export declare function rulesetRulesActionParametersPrivateToTerraform(struct?: RulesetRulesActionParametersPrivate | cdktf.IResolvable): any;
export declare function rulesetRulesActionParametersPrivateToHclTerraform(struct?: RulesetRulesActionParametersPrivate | cdktf.IResolvable): any;
export declare class RulesetRulesActionParametersPrivateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RulesetRulesActionParametersPrivate | cdktf.IResolvable | undefined;
    set internalValue(value: RulesetRulesActionParametersPrivate | cdktf.IResolvable | undefined);
    private _cloudflareOnly?;
    get cloudflareOnly(): boolean | cdktf.IResolvable;
    set cloudflareOnly(value: boolean | cdktf.IResolvable);
    resetCloudflareOnly(): void;
    get cloudflareOnlyInput(): any;
    private _operation?;
    get operation(): string;
    set operation(value: string);
    get operationInput(): string;
    private _qualifiers?;
    get qualifiers(): string[];
    set qualifiers(value: string[]);
    resetQualifiers(): void;
    get qualifiersInput(): string[];
}
export interface RulesetRulesActionParametersProxyRevalidate {
    /**
    * Whether to apply the directive only to Cloudflare's cache.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#cloudflare_only Ruleset#cloudflare_only}
    */
    readonly cloudflareOnly?: boolean | cdktf.IResolvable;
    /**
    * The operation to perform.
    * Available values: "set", "remove".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#operation Ruleset#operation}
    */
    readonly operation: string;
}
export declare function rulesetRulesActionParametersProxyRevalidateToTerraform(struct?: RulesetRulesActionParametersProxyRevalidate | cdktf.IResolvable): any;
export declare function rulesetRulesActionParametersProxyRevalidateToHclTerraform(struct?: RulesetRulesActionParametersProxyRevalidate | cdktf.IResolvable): any;
export declare class RulesetRulesActionParametersProxyRevalidateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RulesetRulesActionParametersProxyRevalidate | cdktf.IResolvable | undefined;
    set internalValue(value: RulesetRulesActionParametersProxyRevalidate | cdktf.IResolvable | undefined);
    private _cloudflareOnly?;
    get cloudflareOnly(): boolean | cdktf.IResolvable;
    set cloudflareOnly(value: boolean | cdktf.IResolvable);
    resetCloudflareOnly(): void;
    get cloudflareOnlyInput(): any;
    private _operation?;
    get operation(): string;
    set operation(value: string);
    get operationInput(): string;
}
export interface RulesetRulesActionParametersPublic {
    /**
    * Whether to apply the directive only to Cloudflare's cache.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#cloudflare_only Ruleset#cloudflare_only}
    */
    readonly cloudflareOnly?: boolean | cdktf.IResolvable;
    /**
    * The operation to perform.
    * Available values: "set", "remove".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#operation Ruleset#operation}
    */
    readonly operation: string;
}
export declare function rulesetRulesActionParametersPublicToTerraform(struct?: RulesetRulesActionParametersPublic | cdktf.IResolvable): any;
export declare function rulesetRulesActionParametersPublicToHclTerraform(struct?: RulesetRulesActionParametersPublic | cdktf.IResolvable): any;
export declare class RulesetRulesActionParametersPublicOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RulesetRulesActionParametersPublic | cdktf.IResolvable | undefined;
    set internalValue(value: RulesetRulesActionParametersPublic | cdktf.IResolvable | undefined);
    private _cloudflareOnly?;
    get cloudflareOnly(): boolean | cdktf.IResolvable;
    set cloudflareOnly(value: boolean | cdktf.IResolvable);
    resetCloudflareOnly(): void;
    get cloudflareOnlyInput(): any;
    private _operation?;
    get operation(): string;
    set operation(value: string);
    get operationInput(): string;
}
export interface RulesetRulesActionParametersRawResponseFields {
    /**
    * The name of the response header.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#name Ruleset#name}
    */
    readonly name: string;
    /**
    * Whether to log duplicate values of the same header.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#preserve_duplicates Ruleset#preserve_duplicates}
    */
    readonly preserveDuplicates?: boolean | cdktf.IResolvable;
}
export declare function rulesetRulesActionParametersRawResponseFieldsToTerraform(struct?: RulesetRulesActionParametersRawResponseFields | cdktf.IResolvable): any;
export declare function rulesetRulesActionParametersRawResponseFieldsToHclTerraform(struct?: RulesetRulesActionParametersRawResponseFields | cdktf.IResolvable): any;
export declare class RulesetRulesActionParametersRawResponseFieldsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): RulesetRulesActionParametersRawResponseFields | cdktf.IResolvable | undefined;
    set internalValue(value: RulesetRulesActionParametersRawResponseFields | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _preserveDuplicates?;
    get preserveDuplicates(): boolean | cdktf.IResolvable;
    set preserveDuplicates(value: boolean | cdktf.IResolvable);
    resetPreserveDuplicates(): void;
    get preserveDuplicatesInput(): any;
}
export declare class RulesetRulesActionParametersRawResponseFieldsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: RulesetRulesActionParametersRawResponseFields[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): RulesetRulesActionParametersRawResponseFieldsOutputReference;
}
export interface RulesetRulesActionParametersRequestFields {
    /**
    * The name of the header.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#name Ruleset#name}
    */
    readonly name: string;
}
export declare function rulesetRulesActionParametersRequestFieldsToTerraform(struct?: RulesetRulesActionParametersRequestFields | cdktf.IResolvable): any;
export declare function rulesetRulesActionParametersRequestFieldsToHclTerraform(struct?: RulesetRulesActionParametersRequestFields | cdktf.IResolvable): any;
export declare class RulesetRulesActionParametersRequestFieldsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): RulesetRulesActionParametersRequestFields | cdktf.IResolvable | undefined;
    set internalValue(value: RulesetRulesActionParametersRequestFields | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export declare class RulesetRulesActionParametersRequestFieldsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: RulesetRulesActionParametersRequestFields[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): RulesetRulesActionParametersRequestFieldsOutputReference;
}
export interface RulesetRulesActionParametersResponse {
    /**
    * The content to return.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#content Ruleset#content}
    */
    readonly content: string;
    /**
    * The type of the content to return.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#content_type Ruleset#content_type}
    */
    readonly contentType: string;
    /**
    * The status code to return.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#status_code Ruleset#status_code}
    */
    readonly statusCode: number;
}
export declare function rulesetRulesActionParametersResponseToTerraform(struct?: RulesetRulesActionParametersResponse | cdktf.IResolvable): any;
export declare function rulesetRulesActionParametersResponseToHclTerraform(struct?: RulesetRulesActionParametersResponse | cdktf.IResolvable): any;
export declare class RulesetRulesActionParametersResponseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RulesetRulesActionParametersResponse | cdktf.IResolvable | undefined;
    set internalValue(value: RulesetRulesActionParametersResponse | cdktf.IResolvable | undefined);
    private _content?;
    get content(): string;
    set content(value: string);
    get contentInput(): string;
    private _contentType?;
    get contentType(): string;
    set contentType(value: string);
    get contentTypeInput(): string;
    private _statusCode?;
    get statusCode(): number;
    set statusCode(value: number);
    get statusCodeInput(): number;
}
export interface RulesetRulesActionParametersResponseFields {
    /**
    * The name of the response header.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#name Ruleset#name}
    */
    readonly name: string;
    /**
    * Whether to log duplicate values of the same header.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#preserve_duplicates Ruleset#preserve_duplicates}
    */
    readonly preserveDuplicates?: boolean | cdktf.IResolvable;
}
export declare function rulesetRulesActionParametersResponseFieldsToTerraform(struct?: RulesetRulesActionParametersResponseFields | cdktf.IResolvable): any;
export declare function rulesetRulesActionParametersResponseFieldsToHclTerraform(struct?: RulesetRulesActionParametersResponseFields | cdktf.IResolvable): any;
export declare class RulesetRulesActionParametersResponseFieldsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): RulesetRulesActionParametersResponseFields | cdktf.IResolvable | undefined;
    set internalValue(value: RulesetRulesActionParametersResponseFields | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _preserveDuplicates?;
    get preserveDuplicates(): boolean | cdktf.IResolvable;
    set preserveDuplicates(value: boolean | cdktf.IResolvable);
    resetPreserveDuplicates(): void;
    get preserveDuplicatesInput(): any;
}
export declare class RulesetRulesActionParametersResponseFieldsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: RulesetRulesActionParametersResponseFields[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): RulesetRulesActionParametersResponseFieldsOutputReference;
}
export interface RulesetRulesActionParametersSMaxage {
    /**
    * Whether to apply the directive only to Cloudflare's cache.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#cloudflare_only Ruleset#cloudflare_only}
    */
    readonly cloudflareOnly?: boolean | cdktf.IResolvable;
    /**
    * The operation to perform.
    * Available values: "set", "remove".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#operation Ruleset#operation}
    */
    readonly operation: string;
    /**
    * The value for the directive in seconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#value Ruleset#value}
    */
    readonly value?: number;
}
export declare function rulesetRulesActionParametersSMaxageToTerraform(struct?: RulesetRulesActionParametersSMaxage | cdktf.IResolvable): any;
export declare function rulesetRulesActionParametersSMaxageToHclTerraform(struct?: RulesetRulesActionParametersSMaxage | cdktf.IResolvable): any;
export declare class RulesetRulesActionParametersSMaxageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RulesetRulesActionParametersSMaxage | cdktf.IResolvable | undefined;
    set internalValue(value: RulesetRulesActionParametersSMaxage | cdktf.IResolvable | undefined);
    private _cloudflareOnly?;
    get cloudflareOnly(): boolean | cdktf.IResolvable;
    set cloudflareOnly(value: boolean | cdktf.IResolvable);
    resetCloudflareOnly(): void;
    get cloudflareOnlyInput(): any;
    private _operation?;
    get operation(): string;
    set operation(value: string);
    get operationInput(): string;
    private _value?;
    get value(): number;
    set value(value: number);
    resetValue(): void;
    get valueInput(): number;
}
export interface RulesetRulesActionParametersServeStale {
    /**
    * Whether Cloudflare should disable serving stale content while getting the latest content from the origin.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#disable_stale_while_updating Ruleset#disable_stale_while_updating}
    */
    readonly disableStaleWhileUpdating?: boolean | cdktf.IResolvable;
}
export declare function rulesetRulesActionParametersServeStaleToTerraform(struct?: RulesetRulesActionParametersServeStale | cdktf.IResolvable): any;
export declare function rulesetRulesActionParametersServeStaleToHclTerraform(struct?: RulesetRulesActionParametersServeStale | cdktf.IResolvable): any;
export declare class RulesetRulesActionParametersServeStaleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RulesetRulesActionParametersServeStale | cdktf.IResolvable | undefined;
    set internalValue(value: RulesetRulesActionParametersServeStale | cdktf.IResolvable | undefined);
    private _disableStaleWhileUpdating?;
    get disableStaleWhileUpdating(): boolean | cdktf.IResolvable;
    set disableStaleWhileUpdating(value: boolean | cdktf.IResolvable);
    resetDisableStaleWhileUpdating(): void;
    get disableStaleWhileUpdatingInput(): any;
}
export interface RulesetRulesActionParametersSni {
    /**
    * A value to override the SNI to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#value Ruleset#value}
    */
    readonly value: string;
}
export declare function rulesetRulesActionParametersSniToTerraform(struct?: RulesetRulesActionParametersSni | cdktf.IResolvable): any;
export declare function rulesetRulesActionParametersSniToHclTerraform(struct?: RulesetRulesActionParametersSni | cdktf.IResolvable): any;
export declare class RulesetRulesActionParametersSniOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RulesetRulesActionParametersSni | cdktf.IResolvable | undefined;
    set internalValue(value: RulesetRulesActionParametersSni | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string;
}
export interface RulesetRulesActionParametersStaleIfError {
    /**
    * Whether to apply the directive only to Cloudflare's cache.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#cloudflare_only Ruleset#cloudflare_only}
    */
    readonly cloudflareOnly?: boolean | cdktf.IResolvable;
    /**
    * The operation to perform.
    * Available values: "set", "remove".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#operation Ruleset#operation}
    */
    readonly operation: string;
    /**
    * The value for the directive in seconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#value Ruleset#value}
    */
    readonly value?: number;
}
export declare function rulesetRulesActionParametersStaleIfErrorToTerraform(struct?: RulesetRulesActionParametersStaleIfError | cdktf.IResolvable): any;
export declare function rulesetRulesActionParametersStaleIfErrorToHclTerraform(struct?: RulesetRulesActionParametersStaleIfError | cdktf.IResolvable): any;
export declare class RulesetRulesActionParametersStaleIfErrorOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RulesetRulesActionParametersStaleIfError | cdktf.IResolvable | undefined;
    set internalValue(value: RulesetRulesActionParametersStaleIfError | cdktf.IResolvable | undefined);
    private _cloudflareOnly?;
    get cloudflareOnly(): boolean | cdktf.IResolvable;
    set cloudflareOnly(value: boolean | cdktf.IResolvable);
    resetCloudflareOnly(): void;
    get cloudflareOnlyInput(): any;
    private _operation?;
    get operation(): string;
    set operation(value: string);
    get operationInput(): string;
    private _value?;
    get value(): number;
    set value(value: number);
    resetValue(): void;
    get valueInput(): number;
}
export interface RulesetRulesActionParametersStaleWhileRevalidate {
    /**
    * Whether to apply the directive only to Cloudflare's cache.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#cloudflare_only Ruleset#cloudflare_only}
    */
    readonly cloudflareOnly?: boolean | cdktf.IResolvable;
    /**
    * The operation to perform.
    * Available values: "set", "remove".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#operation Ruleset#operation}
    */
    readonly operation: string;
    /**
    * The value for the directive in seconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#value Ruleset#value}
    */
    readonly value?: number;
}
export declare function rulesetRulesActionParametersStaleWhileRevalidateToTerraform(struct?: RulesetRulesActionParametersStaleWhileRevalidate | cdktf.IResolvable): any;
export declare function rulesetRulesActionParametersStaleWhileRevalidateToHclTerraform(struct?: RulesetRulesActionParametersStaleWhileRevalidate | cdktf.IResolvable): any;
export declare class RulesetRulesActionParametersStaleWhileRevalidateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RulesetRulesActionParametersStaleWhileRevalidate | cdktf.IResolvable | undefined;
    set internalValue(value: RulesetRulesActionParametersStaleWhileRevalidate | cdktf.IResolvable | undefined);
    private _cloudflareOnly?;
    get cloudflareOnly(): boolean | cdktf.IResolvable;
    set cloudflareOnly(value: boolean | cdktf.IResolvable);
    resetCloudflareOnly(): void;
    get cloudflareOnlyInput(): any;
    private _operation?;
    get operation(): string;
    set operation(value: string);
    get operationInput(): string;
    private _value?;
    get value(): number;
    set value(value: number);
    resetValue(): void;
    get valueInput(): number;
}
export interface RulesetRulesActionParametersTransformedRequestFields {
    /**
    * The name of the header.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#name Ruleset#name}
    */
    readonly name: string;
}
export declare function rulesetRulesActionParametersTransformedRequestFieldsToTerraform(struct?: RulesetRulesActionParametersTransformedRequestFields | cdktf.IResolvable): any;
export declare function rulesetRulesActionParametersTransformedRequestFieldsToHclTerraform(struct?: RulesetRulesActionParametersTransformedRequestFields | cdktf.IResolvable): any;
export declare class RulesetRulesActionParametersTransformedRequestFieldsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): RulesetRulesActionParametersTransformedRequestFields | cdktf.IResolvable | undefined;
    set internalValue(value: RulesetRulesActionParametersTransformedRequestFields | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export declare class RulesetRulesActionParametersTransformedRequestFieldsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: RulesetRulesActionParametersTransformedRequestFields[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): RulesetRulesActionParametersTransformedRequestFieldsOutputReference;
}
export interface RulesetRulesActionParametersUriPath {
    /**
    * An expression that evaluates to a value to rewrite the URI path to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#expression Ruleset#expression}
    */
    readonly expression?: string;
    /**
    * A value to rewrite the URI path to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#value Ruleset#value}
    */
    readonly value?: string;
}
export declare function rulesetRulesActionParametersUriPathToTerraform(struct?: RulesetRulesActionParametersUriPath | cdktf.IResolvable): any;
export declare function rulesetRulesActionParametersUriPathToHclTerraform(struct?: RulesetRulesActionParametersUriPath | cdktf.IResolvable): any;
export declare class RulesetRulesActionParametersUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RulesetRulesActionParametersUriPath | cdktf.IResolvable | undefined;
    set internalValue(value: RulesetRulesActionParametersUriPath | cdktf.IResolvable | undefined);
    private _expression?;
    get expression(): string;
    set expression(value: string);
    resetExpression(): void;
    get expressionInput(): string;
    private _value?;
    get value(): string;
    set value(value: string);
    resetValue(): void;
    get valueInput(): string;
}
export interface RulesetRulesActionParametersUriQuery {
    /**
    * An expression that evaluates to a value to rewrite the URI query to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#expression Ruleset#expression}
    */
    readonly expression?: string;
    /**
    * A value to rewrite the URI query to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#value Ruleset#value}
    */
    readonly value?: string;
}
export declare function rulesetRulesActionParametersUriQueryToTerraform(struct?: RulesetRulesActionParametersUriQuery | cdktf.IResolvable): any;
export declare function rulesetRulesActionParametersUriQueryToHclTerraform(struct?: RulesetRulesActionParametersUriQuery | cdktf.IResolvable): any;
export declare class RulesetRulesActionParametersUriQueryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RulesetRulesActionParametersUriQuery | cdktf.IResolvable | undefined;
    set internalValue(value: RulesetRulesActionParametersUriQuery | cdktf.IResolvable | undefined);
    private _expression?;
    get expression(): string;
    set expression(value: string);
    resetExpression(): void;
    get expressionInput(): string;
    private _value?;
    get value(): string;
    set value(value: string);
    resetValue(): void;
    get valueInput(): string;
}
export interface RulesetRulesActionParametersUri {
    /**
    * A URI path rewrite.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#path Ruleset#path}
    */
    readonly path?: RulesetRulesActionParametersUriPath;
    /**
    * A URI query rewrite.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#query Ruleset#query}
    */
    readonly query?: RulesetRulesActionParametersUriQuery;
}
export declare function rulesetRulesActionParametersUriToTerraform(struct?: RulesetRulesActionParametersUri | cdktf.IResolvable): any;
export declare function rulesetRulesActionParametersUriToHclTerraform(struct?: RulesetRulesActionParametersUri | cdktf.IResolvable): any;
export declare class RulesetRulesActionParametersUriOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RulesetRulesActionParametersUri | cdktf.IResolvable | undefined;
    set internalValue(value: RulesetRulesActionParametersUri | cdktf.IResolvable | undefined);
    private _path;
    get path(): RulesetRulesActionParametersUriPathOutputReference;
    putPath(value: RulesetRulesActionParametersUriPath): void;
    resetPath(): void;
    get pathInput(): any;
    private _query;
    get query(): RulesetRulesActionParametersUriQueryOutputReference;
    putQuery(value: RulesetRulesActionParametersUriQuery): void;
    resetQuery(): void;
    get queryInput(): any;
}
export interface RulesetRulesActionParameters {
    /**
    * A list of additional ports that caching should be enabled on.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#additional_cacheable_ports Ruleset#additional_cacheable_ports}
    */
    readonly additionalCacheablePorts?: number[];
    /**
    * Custom order for compression algorithms.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#algorithms Ruleset#algorithms}
    */
    readonly algorithms?: RulesetRulesActionParametersAlgorithms[] | cdktf.IResolvable;
    /**
    * The name of a custom asset to serve as the response.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#asset_name Ruleset#asset_name}
    */
    readonly assetName?: string;
    /**
    * Whether to enable Automatic HTTPS Rewrites.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#automatic_https_rewrites Ruleset#automatic_https_rewrites}
    */
    readonly automaticHttpsRewrites?: boolean | cdktf.IResolvable;
    /**
    * Which file extensions to minify automatically.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#autominify Ruleset#autominify}
    */
    readonly autominify?: RulesetRulesActionParametersAutominify;
    /**
    * Whether to enable Browser Integrity Check (BIC).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#bic Ruleset#bic}
    */
    readonly bic?: boolean | cdktf.IResolvable;
    /**
    * How long client browsers should cache the response. Cloudflare cache purge will not purge content cached on client browsers, so high browser TTLs may lead to stale content.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#browser_ttl Ruleset#browser_ttl}
    */
    readonly browserTtl?: RulesetRulesActionParametersBrowserTtl;
    /**
    * Whether the request's response from the origin is eligible for caching. Caching itself will still depend on the cache control header and your other caching configurations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#cache Ruleset#cache}
    */
    readonly cache?: boolean | cdktf.IResolvable;
    /**
    * Which components of the request are included in or excluded from the cache key Cloudflare uses to store the response in cache.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#cache_key Ruleset#cache_key}
    */
    readonly cacheKey?: RulesetRulesActionParametersCacheKey;
    /**
    * Settings to determine whether the request's response from origin is eligible for Cache Reserve (requires a Cache Reserve add-on plan).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#cache_reserve Ruleset#cache_reserve}
    */
    readonly cacheReserve?: RulesetRulesActionParametersCacheReserve;
    /**
    * The response content.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#content Ruleset#content}
    */
    readonly content?: string;
    /**
    * Whether to enable content conversion (e.g., HTML to Markdown).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#content_converter Ruleset#content_converter}
    */
    readonly contentConverter?: boolean | cdktf.IResolvable;
    /**
    * The content type header to set with the error response.
    * Available values: "application/json", "text/html", "text/plain", "text/xml".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#content_type Ruleset#content_type}
    */
    readonly contentType?: string;
    /**
    * The cookie fields to log.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#cookie_fields Ruleset#cookie_fields}
    */
    readonly cookieFields?: RulesetRulesActionParametersCookieFields[] | cdktf.IResolvable;
    /**
    * Whether to disable Cloudflare Apps.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#disable_apps Ruleset#disable_apps}
    */
    readonly disableApps?: boolean | cdktf.IResolvable;
    /**
    * Whether to disable Real User Monitoring (RUM).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#disable_rum Ruleset#disable_rum}
    */
    readonly disableRum?: boolean | cdktf.IResolvable;
    /**
    * Whether to disable Zaraz.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#disable_zaraz Ruleset#disable_zaraz}
    */
    readonly disableZaraz?: boolean | cdktf.IResolvable;
    /**
    * How long the Cloudflare edge network should cache the response.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#edge_ttl Ruleset#edge_ttl}
    */
    readonly edgeTtl?: RulesetRulesActionParametersEdgeTtl;
    /**
    * Whether to enable Email Obfuscation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#email_obfuscation Ruleset#email_obfuscation}
    */
    readonly emailObfuscation?: boolean | cdktf.IResolvable;
    /**
    * An expression to generate cache tags for set_cache_tags action.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#expression Ruleset#expression}
    */
    readonly expression?: string;
    /**
    * Whether to enable Cloudflare Fonts.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#fonts Ruleset#fonts}
    */
    readonly fonts?: boolean | cdktf.IResolvable;
    /**
    * A redirect based on a bulk list lookup.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#from_list Ruleset#from_list}
    */
    readonly fromList?: RulesetRulesActionParametersFromListStruct;
    /**
    * A redirect based on the request properties.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#from_value Ruleset#from_value}
    */
    readonly fromValue?: RulesetRulesActionParametersFromValue;
    /**
    * A map of headers to rewrite.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#headers Ruleset#headers}
    */
    readonly headers?: {
        [key: string]: RulesetRulesActionParametersHeaders;
    } | cdktf.IResolvable;
    /**
    * A value to rewrite the HTTP host header to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#host_header Ruleset#host_header}
    */
    readonly hostHeader?: string;
    /**
    * Whether to enable Hotlink Protection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#hotlink_protection Ruleset#hotlink_protection}
    */
    readonly hotlinkProtection?: boolean | cdktf.IResolvable;
    /**
    * The ID of the ruleset to execute.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#id Ruleset#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Set the immutable cache control directive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#immutable Ruleset#immutable}
    */
    readonly immutable?: RulesetRulesActionParametersImmutable;
    /**
    * A delta to change the score by, which can be either positive or negative.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#increment Ruleset#increment}
    */
    readonly increment?: number;
    /**
    * The configuration to use for matched data logging.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#matched_data Ruleset#matched_data}
    */
    readonly matchedData?: RulesetRulesActionParametersMatchedData;
    /**
    * Set the max-age cache control directive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#max_age Ruleset#max_age}
    */
    readonly maxAge?: RulesetRulesActionParametersMaxAge;
    /**
    * Whether to enable Mirage.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#mirage Ruleset#mirage}
    */
    readonly mirage?: boolean | cdktf.IResolvable;
    /**
    * Set the must-revalidate cache control directive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#must_revalidate Ruleset#must_revalidate}
    */
    readonly mustRevalidate?: RulesetRulesActionParametersMustRevalidate;
    /**
    * Set the must-understand cache control directive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#must_understand Ruleset#must_understand}
    */
    readonly mustUnderstand?: RulesetRulesActionParametersMustUnderstand;
    /**
    * Set the no-cache cache control directive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#no_cache Ruleset#no_cache}
    */
    readonly noCache?: RulesetRulesActionParametersNoCache;
    /**
    * Set the no-store cache control directive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#no_store Ruleset#no_store}
    */
    readonly noStore?: RulesetRulesActionParametersNoStore;
    /**
    * Set the no-transform cache control directive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#no_transform Ruleset#no_transform}
    */
    readonly noTransform?: RulesetRulesActionParametersNoTransform;
    /**
    * The operation to perform for set_cache_tags action.
    * Available values: "set", "add", "remove".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#operation Ruleset#operation}
    */
    readonly operation?: string;
    /**
    * Whether to enable Opportunistic Encryption.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#opportunistic_encryption Ruleset#opportunistic_encryption}
    */
    readonly opportunisticEncryption?: boolean | cdktf.IResolvable;
    /**
    * An origin to route to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#origin Ruleset#origin}
    */
    readonly origin?: RulesetRulesActionParametersOrigin;
    /**
    * Whether Cloudflare will aim to strictly adhere to RFC 7234.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#origin_cache_control Ruleset#origin_cache_control}
    */
    readonly originCacheControl?: boolean | cdktf.IResolvable;
    /**
    * Whether to generate Cloudflare error pages for issues from the origin server.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#origin_error_page_passthru Ruleset#origin_error_page_passthru}
    */
    readonly originErrorPagePassthru?: boolean | cdktf.IResolvable;
    /**
    * A set of overrides to apply to the target ruleset.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#overrides Ruleset#overrides}
    */
    readonly overrides?: RulesetRulesActionParametersOverrides;
    /**
    * A list of phases to skip the execution of. This option is incompatible with the rulesets option.
    * Available values: "ddos_l4", "ddos_l7", "http_config_settings", "http_custom_errors", "http_log_custom_fields", "http_ratelimit", "http_request_cache_settings", "http_request_dynamic_redirect", "http_request_firewall_custom", "http_request_firewall_managed", "http_request_late_transform", "http_request_origin", "http_request_redirect", "http_request_sanitize", "http_request_sbfm", "http_request_transform", "http_response_cache_settings", "http_response_compression", "http_response_firewall_managed", "http_response_headers_transform", "magic_transit", "magic_transit_ids_managed", "magic_transit_managed", "magic_transit_ratelimit".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#phases Ruleset#phases}
    */
    readonly phases?: string[];
    /**
    * The Polish level to configure.
    * Available values: "off", "lossless", "lossy", "webp".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#polish Ruleset#polish}
    */
    readonly polish?: string;
    /**
    * Set the private cache control directive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#private Ruleset#private}
    */
    readonly private?: RulesetRulesActionParametersPrivate;
    /**
    * A list of legacy security products to skip the execution of.
    * Available values: "bic", "hot", "rateLimit", "securityLevel", "uaBlock", "waf", "zoneLockdown".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#products Ruleset#products}
    */
    readonly products?: string[];
    /**
    * Set the proxy-revalidate cache control directive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#proxy_revalidate Ruleset#proxy_revalidate}
    */
    readonly proxyRevalidate?: RulesetRulesActionParametersProxyRevalidate;
    /**
    * Set the public cache control directive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#public Ruleset#public}
    */
    readonly public?: RulesetRulesActionParametersPublic;
    /**
    * The raw response fields to log.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#raw_response_fields Ruleset#raw_response_fields}
    */
    readonly rawResponseFields?: RulesetRulesActionParametersRawResponseFields[] | cdktf.IResolvable;
    /**
    * A timeout value between two successive read operations to use for your origin server. Historically, the timeout value between two read options from Cloudflare to an origin server is 100 seconds. If you are attempting to reduce HTTP 524 errors because of timeouts from an origin server, try increasing this timeout value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#read_timeout Ruleset#read_timeout}
    */
    readonly readTimeout?: number;
    /**
    * Whether to redirect verified AI training crawlers to canonical URLs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#redirects_for_ai_training Ruleset#redirects_for_ai_training}
    */
    readonly redirectsForAiTraining?: boolean | cdktf.IResolvable;
    /**
    * The request body buffering mode to configure.
    * Available values: "none", "standard", "full".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#request_body_buffering Ruleset#request_body_buffering}
    */
    readonly requestBodyBuffering?: string;
    /**
    * The raw request fields to log.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#request_fields Ruleset#request_fields}
    */
    readonly requestFields?: RulesetRulesActionParametersRequestFields[] | cdktf.IResolvable;
    /**
    * Whether Cloudflare should respect strong ETag (entity tag) headers. If false, Cloudflare converts strong ETag headers to weak ETag headers.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#respect_strong_etags Ruleset#respect_strong_etags}
    */
    readonly respectStrongEtags?: boolean | cdktf.IResolvable;
    /**
    * The response to show when the block is applied.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#response Ruleset#response}
    */
    readonly response?: RulesetRulesActionParametersResponse;
    /**
    * The response body buffering mode to configure.
    * Available values: "none", "standard".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#response_body_buffering Ruleset#response_body_buffering}
    */
    readonly responseBodyBuffering?: string;
    /**
    * The transformed response fields to log.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#response_fields Ruleset#response_fields}
    */
    readonly responseFields?: RulesetRulesActionParametersResponseFields[] | cdktf.IResolvable;
    /**
    * Whether to enable Rocket Loader.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#rocket_loader Ruleset#rocket_loader}
    */
    readonly rocketLoader?: boolean | cdktf.IResolvable;
    /**
    * A mapping of ruleset IDs to a list of rule IDs in that ruleset to skip the execution of. This option is incompatible with the ruleset option.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#rules Ruleset#rules}
    */
    readonly rules?: {
        [key: string]: string[];
    } | cdktf.IResolvable;
    /**
    * A ruleset to skip the execution of. This option is incompatible with the rulesets option.
    * Available values: "current".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#ruleset Ruleset#ruleset}
    */
    readonly ruleset?: string;
    /**
    * A list of ruleset IDs to skip the execution of. This option is incompatible with the ruleset and phases options.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#rulesets Ruleset#rulesets}
    */
    readonly rulesets?: string[];
    /**
    * Set the s-maxage cache control directive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#s_maxage Ruleset#s_maxage}
    */
    readonly sMaxage?: RulesetRulesActionParametersSMaxage;
    /**
    * The Security Level to configure.
    * Available values: "off", "essentially_off", "low", "medium", "high", "under_attack".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#security_level Ruleset#security_level}
    */
    readonly securityLevel?: string;
    /**
    * When to serve stale content from cache.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#serve_stale Ruleset#serve_stale}
    */
    readonly serveStale?: RulesetRulesActionParametersServeStale;
    /**
    * Whether to enable Server-Side Excludes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#server_side_excludes Ruleset#server_side_excludes}
    */
    readonly serverSideExcludes?: boolean | cdktf.IResolvable;
    /**
    * A Server Name Indication (SNI) override.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#sni Ruleset#sni}
    */
    readonly sni?: RulesetRulesActionParametersSni;
    /**
    * The SSL level to configure.
    * Available values: "off", "flexible", "full", "strict", "origin_pull".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#ssl Ruleset#ssl}
    */
    readonly ssl?: string;
    /**
    * Set the stale-if-error cache control directive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#stale_if_error Ruleset#stale_if_error}
    */
    readonly staleIfError?: RulesetRulesActionParametersStaleIfError;
    /**
    * Set the stale-while-revalidate cache control directive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#stale_while_revalidate Ruleset#stale_while_revalidate}
    */
    readonly staleWhileRevalidate?: RulesetRulesActionParametersStaleWhileRevalidate;
    /**
    * The status code to use for the error.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#status_code Ruleset#status_code}
    */
    readonly statusCode?: number;
    /**
    * Whether to strip the ETag header from the response.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#strip_etags Ruleset#strip_etags}
    */
    readonly stripEtags?: boolean | cdktf.IResolvable;
    /**
    * Whether to strip the Last-Modified header from the response.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#strip_last_modified Ruleset#strip_last_modified}
    */
    readonly stripLastModified?: boolean | cdktf.IResolvable;
    /**
    * Whether to strip the Set-Cookie header from the response.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#strip_set_cookie Ruleset#strip_set_cookie}
    */
    readonly stripSetCookie?: boolean | cdktf.IResolvable;
    /**
    * Whether to enable Signed Exchanges (SXG).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#sxg Ruleset#sxg}
    */
    readonly sxg?: boolean | cdktf.IResolvable;
    /**
    * The transformed request fields to log.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#transformed_request_fields Ruleset#transformed_request_fields}
    */
    readonly transformedRequestFields?: RulesetRulesActionParametersTransformedRequestFields[] | cdktf.IResolvable;
    /**
    * A URI rewrite.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#uri Ruleset#uri}
    */
    readonly uri?: RulesetRulesActionParametersUri;
    /**
    * The cache tag values for set_cache_tags action.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#values Ruleset#values}
    */
    readonly values?: string[];
}
export declare function rulesetRulesActionParametersToTerraform(struct?: RulesetRulesActionParameters | cdktf.IResolvable): any;
export declare function rulesetRulesActionParametersToHclTerraform(struct?: RulesetRulesActionParameters | cdktf.IResolvable): any;
export declare class RulesetRulesActionParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RulesetRulesActionParameters | cdktf.IResolvable | undefined;
    set internalValue(value: RulesetRulesActionParameters | cdktf.IResolvable | undefined);
    private _additionalCacheablePorts?;
    get additionalCacheablePorts(): number[];
    set additionalCacheablePorts(value: number[]);
    resetAdditionalCacheablePorts(): void;
    get additionalCacheablePortsInput(): number[];
    private _algorithms;
    get algorithms(): RulesetRulesActionParametersAlgorithmsList;
    putAlgorithms(value: RulesetRulesActionParametersAlgorithms[] | cdktf.IResolvable): void;
    resetAlgorithms(): void;
    get algorithmsInput(): any;
    private _assetName?;
    get assetName(): string;
    set assetName(value: string);
    resetAssetName(): void;
    get assetNameInput(): string;
    private _automaticHttpsRewrites?;
    get automaticHttpsRewrites(): boolean | cdktf.IResolvable;
    set automaticHttpsRewrites(value: boolean | cdktf.IResolvable);
    resetAutomaticHttpsRewrites(): void;
    get automaticHttpsRewritesInput(): any;
    private _autominify;
    get autominify(): RulesetRulesActionParametersAutominifyOutputReference;
    putAutominify(value: RulesetRulesActionParametersAutominify): void;
    resetAutominify(): void;
    get autominifyInput(): any;
    private _bic?;
    get bic(): boolean | cdktf.IResolvable;
    set bic(value: boolean | cdktf.IResolvable);
    resetBic(): void;
    get bicInput(): any;
    private _browserTtl;
    get browserTtl(): RulesetRulesActionParametersBrowserTtlOutputReference;
    putBrowserTtl(value: RulesetRulesActionParametersBrowserTtl): void;
    resetBrowserTtl(): void;
    get browserTtlInput(): any;
    private _cache?;
    get cache(): boolean | cdktf.IResolvable;
    set cache(value: boolean | cdktf.IResolvable);
    resetCache(): void;
    get cacheInput(): any;
    private _cacheKey;
    get cacheKey(): RulesetRulesActionParametersCacheKeyOutputReference;
    putCacheKey(value: RulesetRulesActionParametersCacheKey): void;
    resetCacheKey(): void;
    get cacheKeyInput(): any;
    private _cacheReserve;
    get cacheReserve(): RulesetRulesActionParametersCacheReserveOutputReference;
    putCacheReserve(value: RulesetRulesActionParametersCacheReserve): void;
    resetCacheReserve(): void;
    get cacheReserveInput(): any;
    private _content?;
    get content(): string;
    set content(value: string);
    resetContent(): void;
    get contentInput(): string;
    private _contentConverter?;
    get contentConverter(): boolean | cdktf.IResolvable;
    set contentConverter(value: boolean | cdktf.IResolvable);
    resetContentConverter(): void;
    get contentConverterInput(): any;
    private _contentType?;
    get contentType(): string;
    set contentType(value: string);
    resetContentType(): void;
    get contentTypeInput(): string;
    private _cookieFields;
    get cookieFields(): RulesetRulesActionParametersCookieFieldsList;
    putCookieFields(value: RulesetRulesActionParametersCookieFields[] | cdktf.IResolvable): void;
    resetCookieFields(): void;
    get cookieFieldsInput(): any;
    private _disableApps?;
    get disableApps(): boolean | cdktf.IResolvable;
    set disableApps(value: boolean | cdktf.IResolvable);
    resetDisableApps(): void;
    get disableAppsInput(): any;
    private _disableRum?;
    get disableRum(): boolean | cdktf.IResolvable;
    set disableRum(value: boolean | cdktf.IResolvable);
    resetDisableRum(): void;
    get disableRumInput(): any;
    private _disableZaraz?;
    get disableZaraz(): boolean | cdktf.IResolvable;
    set disableZaraz(value: boolean | cdktf.IResolvable);
    resetDisableZaraz(): void;
    get disableZarazInput(): any;
    private _edgeTtl;
    get edgeTtl(): RulesetRulesActionParametersEdgeTtlOutputReference;
    putEdgeTtl(value: RulesetRulesActionParametersEdgeTtl): void;
    resetEdgeTtl(): void;
    get edgeTtlInput(): any;
    private _emailObfuscation?;
    get emailObfuscation(): boolean | cdktf.IResolvable;
    set emailObfuscation(value: boolean | cdktf.IResolvable);
    resetEmailObfuscation(): void;
    get emailObfuscationInput(): any;
    private _expression?;
    get expression(): string;
    set expression(value: string);
    resetExpression(): void;
    get expressionInput(): string;
    private _fonts?;
    get fonts(): boolean | cdktf.IResolvable;
    set fonts(value: boolean | cdktf.IResolvable);
    resetFonts(): void;
    get fontsInput(): any;
    private _fromList;
    get fromList(): RulesetRulesActionParametersFromListStructOutputReference;
    putFromList(value: RulesetRulesActionParametersFromListStruct): void;
    resetFromList(): void;
    get fromListInput(): any;
    private _fromValue;
    get fromValue(): RulesetRulesActionParametersFromValueOutputReference;
    putFromValue(value: RulesetRulesActionParametersFromValue): void;
    resetFromValue(): void;
    get fromValueInput(): any;
    private _headers;
    get headers(): RulesetRulesActionParametersHeadersMap;
    putHeaders(value: {
        [key: string]: RulesetRulesActionParametersHeaders;
    } | cdktf.IResolvable): void;
    resetHeaders(): void;
    get headersInput(): any;
    private _hostHeader?;
    get hostHeader(): string;
    set hostHeader(value: string);
    resetHostHeader(): void;
    get hostHeaderInput(): string;
    private _hotlinkProtection?;
    get hotlinkProtection(): boolean | cdktf.IResolvable;
    set hotlinkProtection(value: boolean | cdktf.IResolvable);
    resetHotlinkProtection(): void;
    get hotlinkProtectionInput(): any;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _immutable;
    get immutable(): RulesetRulesActionParametersImmutableOutputReference;
    putImmutable(value: RulesetRulesActionParametersImmutable): void;
    resetImmutable(): void;
    get immutableInput(): any;
    private _increment?;
    get increment(): number;
    set increment(value: number);
    resetIncrement(): void;
    get incrementInput(): number;
    private _matchedData;
    get matchedData(): RulesetRulesActionParametersMatchedDataOutputReference;
    putMatchedData(value: RulesetRulesActionParametersMatchedData): void;
    resetMatchedData(): void;
    get matchedDataInput(): any;
    private _maxAge;
    get maxAge(): RulesetRulesActionParametersMaxAgeOutputReference;
    putMaxAge(value: RulesetRulesActionParametersMaxAge): void;
    resetMaxAge(): void;
    get maxAgeInput(): any;
    private _mirage?;
    get mirage(): boolean | cdktf.IResolvable;
    set mirage(value: boolean | cdktf.IResolvable);
    resetMirage(): void;
    get mirageInput(): any;
    private _mustRevalidate;
    get mustRevalidate(): RulesetRulesActionParametersMustRevalidateOutputReference;
    putMustRevalidate(value: RulesetRulesActionParametersMustRevalidate): void;
    resetMustRevalidate(): void;
    get mustRevalidateInput(): any;
    private _mustUnderstand;
    get mustUnderstand(): RulesetRulesActionParametersMustUnderstandOutputReference;
    putMustUnderstand(value: RulesetRulesActionParametersMustUnderstand): void;
    resetMustUnderstand(): void;
    get mustUnderstandInput(): any;
    private _noCache;
    get noCache(): RulesetRulesActionParametersNoCacheOutputReference;
    putNoCache(value: RulesetRulesActionParametersNoCache): void;
    resetNoCache(): void;
    get noCacheInput(): any;
    private _noStore;
    get noStore(): RulesetRulesActionParametersNoStoreOutputReference;
    putNoStore(value: RulesetRulesActionParametersNoStore): void;
    resetNoStore(): void;
    get noStoreInput(): any;
    private _noTransform;
    get noTransform(): RulesetRulesActionParametersNoTransformOutputReference;
    putNoTransform(value: RulesetRulesActionParametersNoTransform): void;
    resetNoTransform(): void;
    get noTransformInput(): any;
    private _operation?;
    get operation(): string;
    set operation(value: string);
    resetOperation(): void;
    get operationInput(): string;
    private _opportunisticEncryption?;
    get opportunisticEncryption(): boolean | cdktf.IResolvable;
    set opportunisticEncryption(value: boolean | cdktf.IResolvable);
    resetOpportunisticEncryption(): void;
    get opportunisticEncryptionInput(): any;
    private _origin;
    get origin(): RulesetRulesActionParametersOriginOutputReference;
    putOrigin(value: RulesetRulesActionParametersOrigin): void;
    resetOrigin(): void;
    get originInput(): any;
    private _originCacheControl?;
    get originCacheControl(): boolean | cdktf.IResolvable;
    set originCacheControl(value: boolean | cdktf.IResolvable);
    resetOriginCacheControl(): void;
    get originCacheControlInput(): any;
    private _originErrorPagePassthru?;
    get originErrorPagePassthru(): boolean | cdktf.IResolvable;
    set originErrorPagePassthru(value: boolean | cdktf.IResolvable);
    resetOriginErrorPagePassthru(): void;
    get originErrorPagePassthruInput(): any;
    private _overrides;
    get overrides(): RulesetRulesActionParametersOverridesOutputReference;
    putOverrides(value: RulesetRulesActionParametersOverrides): void;
    resetOverrides(): void;
    get overridesInput(): any;
    private _phases?;
    get phases(): string[];
    set phases(value: string[]);
    resetPhases(): void;
    get phasesInput(): string[];
    private _polish?;
    get polish(): string;
    set polish(value: string);
    resetPolish(): void;
    get polishInput(): string;
    private _private;
    get private(): RulesetRulesActionParametersPrivateOutputReference;
    putPrivate(value: RulesetRulesActionParametersPrivate): void;
    resetPrivate(): void;
    get privateInput(): any;
    private _products?;
    get products(): string[];
    set products(value: string[]);
    resetProducts(): void;
    get productsInput(): string[];
    private _proxyRevalidate;
    get proxyRevalidate(): RulesetRulesActionParametersProxyRevalidateOutputReference;
    putProxyRevalidate(value: RulesetRulesActionParametersProxyRevalidate): void;
    resetProxyRevalidate(): void;
    get proxyRevalidateInput(): any;
    private _public;
    get public(): RulesetRulesActionParametersPublicOutputReference;
    putPublic(value: RulesetRulesActionParametersPublic): void;
    resetPublic(): void;
    get publicInput(): any;
    private _rawResponseFields;
    get rawResponseFields(): RulesetRulesActionParametersRawResponseFieldsList;
    putRawResponseFields(value: RulesetRulesActionParametersRawResponseFields[] | cdktf.IResolvable): void;
    resetRawResponseFields(): void;
    get rawResponseFieldsInput(): any;
    private _readTimeout?;
    get readTimeout(): number;
    set readTimeout(value: number);
    resetReadTimeout(): void;
    get readTimeoutInput(): number;
    private _redirectsForAiTraining?;
    get redirectsForAiTraining(): boolean | cdktf.IResolvable;
    set redirectsForAiTraining(value: boolean | cdktf.IResolvable);
    resetRedirectsForAiTraining(): void;
    get redirectsForAiTrainingInput(): any;
    private _requestBodyBuffering?;
    get requestBodyBuffering(): string;
    set requestBodyBuffering(value: string);
    resetRequestBodyBuffering(): void;
    get requestBodyBufferingInput(): string;
    private _requestFields;
    get requestFields(): RulesetRulesActionParametersRequestFieldsList;
    putRequestFields(value: RulesetRulesActionParametersRequestFields[] | cdktf.IResolvable): void;
    resetRequestFields(): void;
    get requestFieldsInput(): any;
    private _respectStrongEtags?;
    get respectStrongEtags(): boolean | cdktf.IResolvable;
    set respectStrongEtags(value: boolean | cdktf.IResolvable);
    resetRespectStrongEtags(): void;
    get respectStrongEtagsInput(): any;
    private _response;
    get response(): RulesetRulesActionParametersResponseOutputReference;
    putResponse(value: RulesetRulesActionParametersResponse): void;
    resetResponse(): void;
    get responseInput(): any;
    private _responseBodyBuffering?;
    get responseBodyBuffering(): string;
    set responseBodyBuffering(value: string);
    resetResponseBodyBuffering(): void;
    get responseBodyBufferingInput(): string;
    private _responseFields;
    get responseFields(): RulesetRulesActionParametersResponseFieldsList;
    putResponseFields(value: RulesetRulesActionParametersResponseFields[] | cdktf.IResolvable): void;
    resetResponseFields(): void;
    get responseFieldsInput(): any;
    private _rocketLoader?;
    get rocketLoader(): boolean | cdktf.IResolvable;
    set rocketLoader(value: boolean | cdktf.IResolvable);
    resetRocketLoader(): void;
    get rocketLoaderInput(): any;
    private _rules?;
    get rules(): {
        [key: string]: string[];
    } | cdktf.IResolvable;
    set rules(value: {
        [key: string]: string[];
    } | cdktf.IResolvable);
    resetRules(): void;
    get rulesInput(): any;
    private _ruleset?;
    get ruleset(): string;
    set ruleset(value: string);
    resetRuleset(): void;
    get rulesetInput(): string;
    private _rulesets?;
    get rulesets(): string[];
    set rulesets(value: string[]);
    resetRulesets(): void;
    get rulesetsInput(): string[];
    private _sMaxage;
    get sMaxage(): RulesetRulesActionParametersSMaxageOutputReference;
    putSMaxage(value: RulesetRulesActionParametersSMaxage): void;
    resetSMaxage(): void;
    get sMaxageInput(): any;
    private _securityLevel?;
    get securityLevel(): string;
    set securityLevel(value: string);
    resetSecurityLevel(): void;
    get securityLevelInput(): string;
    private _serveStale;
    get serveStale(): RulesetRulesActionParametersServeStaleOutputReference;
    putServeStale(value: RulesetRulesActionParametersServeStale): void;
    resetServeStale(): void;
    get serveStaleInput(): any;
    private _serverSideExcludes?;
    get serverSideExcludes(): boolean | cdktf.IResolvable;
    set serverSideExcludes(value: boolean | cdktf.IResolvable);
    resetServerSideExcludes(): void;
    get serverSideExcludesInput(): any;
    private _sni;
    get sni(): RulesetRulesActionParametersSniOutputReference;
    putSni(value: RulesetRulesActionParametersSni): void;
    resetSni(): void;
    get sniInput(): any;
    private _ssl?;
    get ssl(): string;
    set ssl(value: string);
    resetSsl(): void;
    get sslInput(): string;
    private _staleIfError;
    get staleIfError(): RulesetRulesActionParametersStaleIfErrorOutputReference;
    putStaleIfError(value: RulesetRulesActionParametersStaleIfError): void;
    resetStaleIfError(): void;
    get staleIfErrorInput(): any;
    private _staleWhileRevalidate;
    get staleWhileRevalidate(): RulesetRulesActionParametersStaleWhileRevalidateOutputReference;
    putStaleWhileRevalidate(value: RulesetRulesActionParametersStaleWhileRevalidate): void;
    resetStaleWhileRevalidate(): void;
    get staleWhileRevalidateInput(): any;
    private _statusCode?;
    get statusCode(): number;
    set statusCode(value: number);
    resetStatusCode(): void;
    get statusCodeInput(): number;
    private _stripEtags?;
    get stripEtags(): boolean | cdktf.IResolvable;
    set stripEtags(value: boolean | cdktf.IResolvable);
    resetStripEtags(): void;
    get stripEtagsInput(): any;
    private _stripLastModified?;
    get stripLastModified(): boolean | cdktf.IResolvable;
    set stripLastModified(value: boolean | cdktf.IResolvable);
    resetStripLastModified(): void;
    get stripLastModifiedInput(): any;
    private _stripSetCookie?;
    get stripSetCookie(): boolean | cdktf.IResolvable;
    set stripSetCookie(value: boolean | cdktf.IResolvable);
    resetStripSetCookie(): void;
    get stripSetCookieInput(): any;
    private _sxg?;
    get sxg(): boolean | cdktf.IResolvable;
    set sxg(value: boolean | cdktf.IResolvable);
    resetSxg(): void;
    get sxgInput(): any;
    private _transformedRequestFields;
    get transformedRequestFields(): RulesetRulesActionParametersTransformedRequestFieldsList;
    putTransformedRequestFields(value: RulesetRulesActionParametersTransformedRequestFields[] | cdktf.IResolvable): void;
    resetTransformedRequestFields(): void;
    get transformedRequestFieldsInput(): any;
    private _uri;
    get uri(): RulesetRulesActionParametersUriOutputReference;
    putUri(value: RulesetRulesActionParametersUri): void;
    resetUri(): void;
    get uriInput(): any;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    resetValues(): void;
    get valuesInput(): string[];
}
export interface RulesetRulesExposedCredentialCheck {
    /**
    * An expression that selects the password used in the credentials check.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#password_expression Ruleset#password_expression}
    */
    readonly passwordExpression: string;
    /**
    * An expression that selects the user ID used in the credentials check.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#username_expression Ruleset#username_expression}
    */
    readonly usernameExpression: string;
}
export declare function rulesetRulesExposedCredentialCheckToTerraform(struct?: RulesetRulesExposedCredentialCheck | cdktf.IResolvable): any;
export declare function rulesetRulesExposedCredentialCheckToHclTerraform(struct?: RulesetRulesExposedCredentialCheck | cdktf.IResolvable): any;
export declare class RulesetRulesExposedCredentialCheckOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RulesetRulesExposedCredentialCheck | cdktf.IResolvable | undefined;
    set internalValue(value: RulesetRulesExposedCredentialCheck | cdktf.IResolvable | undefined);
    private _passwordExpression?;
    get passwordExpression(): string;
    set passwordExpression(value: string);
    get passwordExpressionInput(): string;
    private _usernameExpression?;
    get usernameExpression(): string;
    set usernameExpression(value: string);
    get usernameExpressionInput(): string;
}
export interface RulesetRulesLogging {
    /**
    * Whether to generate a log when the rule matches.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#enabled Ruleset#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
}
export declare function rulesetRulesLoggingToTerraform(struct?: RulesetRulesLogging | cdktf.IResolvable): any;
export declare function rulesetRulesLoggingToHclTerraform(struct?: RulesetRulesLogging | cdktf.IResolvable): any;
export declare class RulesetRulesLoggingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RulesetRulesLogging | cdktf.IResolvable | undefined;
    set internalValue(value: RulesetRulesLogging | cdktf.IResolvable | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): any;
}
export interface RulesetRulesRatelimit {
    /**
    * Characteristics of the request on which the rate limit counter will be incremented.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#characteristics Ruleset#characteristics}
    */
    readonly characteristics: string[];
    /**
    * An expression that defines when the rate limit counter should be incremented. It defaults to the same as the rule's expression.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#counting_expression Ruleset#counting_expression}
    */
    readonly countingExpression?: string;
    /**
    * Period of time in seconds after which the action will be disabled following its first execution.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#mitigation_timeout Ruleset#mitigation_timeout}
    */
    readonly mitigationTimeout?: number;
    /**
    * Period in seconds over which the counter is being incremented.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#period Ruleset#period}
    */
    readonly period: number;
    /**
    * The threshold of requests per period after which the action will be executed for the first time.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#requests_per_period Ruleset#requests_per_period}
    */
    readonly requestsPerPeriod?: number;
    /**
    * Whether counting is only performed when an origin is reached.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#requests_to_origin Ruleset#requests_to_origin}
    */
    readonly requestsToOrigin?: boolean | cdktf.IResolvable;
    /**
    * The score threshold per period for which the action will be executed the first time.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#score_per_period Ruleset#score_per_period}
    */
    readonly scorePerPeriod?: number;
    /**
    * A response header name provided by the origin, which contains the score to increment rate limit counter with.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#score_response_header_name Ruleset#score_response_header_name}
    */
    readonly scoreResponseHeaderName?: string;
}
export declare function rulesetRulesRatelimitToTerraform(struct?: RulesetRulesRatelimit | cdktf.IResolvable): any;
export declare function rulesetRulesRatelimitToHclTerraform(struct?: RulesetRulesRatelimit | cdktf.IResolvable): any;
export declare class RulesetRulesRatelimitOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RulesetRulesRatelimit | cdktf.IResolvable | undefined;
    set internalValue(value: RulesetRulesRatelimit | cdktf.IResolvable | undefined);
    private _characteristics?;
    get characteristics(): string[];
    set characteristics(value: string[]);
    get characteristicsInput(): string[];
    private _countingExpression?;
    get countingExpression(): string;
    set countingExpression(value: string);
    resetCountingExpression(): void;
    get countingExpressionInput(): string;
    private _mitigationTimeout?;
    get mitigationTimeout(): number;
    set mitigationTimeout(value: number);
    resetMitigationTimeout(): void;
    get mitigationTimeoutInput(): number;
    private _period?;
    get period(): number;
    set period(value: number);
    get periodInput(): number;
    private _requestsPerPeriod?;
    get requestsPerPeriod(): number;
    set requestsPerPeriod(value: number);
    resetRequestsPerPeriod(): void;
    get requestsPerPeriodInput(): number;
    private _requestsToOrigin?;
    get requestsToOrigin(): boolean | cdktf.IResolvable;
    set requestsToOrigin(value: boolean | cdktf.IResolvable);
    resetRequestsToOrigin(): void;
    get requestsToOriginInput(): any;
    private _scorePerPeriod?;
    get scorePerPeriod(): number;
    set scorePerPeriod(value: number);
    resetScorePerPeriod(): void;
    get scorePerPeriodInput(): number;
    private _scoreResponseHeaderName?;
    get scoreResponseHeaderName(): string;
    set scoreResponseHeaderName(value: string);
    resetScoreResponseHeaderName(): void;
    get scoreResponseHeaderNameInput(): string;
}
export interface RulesetRules {
    /**
    * The action to perform when the rule matches.
    * Available values: "block", "challenge", "compress_response", "ddos_dynamic", "execute", "force_connection_close", "js_challenge", "log", "log_custom_field", "managed_challenge", "redirect", "rewrite", "route", "score", "serve_error", "set_cache_control", "set_cache_settings", "set_cache_tags", "set_config", "skip".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#action Ruleset#action}
    */
    readonly action: string;
    /**
    * The parameters configuring the rule's action.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#action_parameters Ruleset#action_parameters}
    */
    readonly actionParameters?: RulesetRulesActionParameters;
    /**
    * An informative description of the rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#description Ruleset#description}
    */
    readonly description?: string;
    /**
    * Whether the rule should be executed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#enabled Ruleset#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Configuration for exposed credential checking.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#exposed_credential_check Ruleset#exposed_credential_check}
    */
    readonly exposedCredentialCheck?: RulesetRulesExposedCredentialCheck;
    /**
    * The expression defining which traffic will match the rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#expression Ruleset#expression}
    */
    readonly expression: string;
    /**
    * An object configuring the rule's logging behavior.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#logging Ruleset#logging}
    */
    readonly logging?: RulesetRulesLogging;
    /**
    * An object configuring the rule's rate limit behavior.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#ratelimit Ruleset#ratelimit}
    */
    readonly ratelimit?: RulesetRulesRatelimit;
    /**
    * The reference of the rule (the rule's ID by default).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#ref Ruleset#ref}
    */
    readonly ref?: string;
}
export declare function rulesetRulesToTerraform(struct?: RulesetRules | cdktf.IResolvable): any;
export declare function rulesetRulesToHclTerraform(struct?: RulesetRules | cdktf.IResolvable): any;
export declare class RulesetRulesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): RulesetRules | cdktf.IResolvable | undefined;
    set internalValue(value: RulesetRules | cdktf.IResolvable | undefined);
    private _action?;
    get action(): string;
    set action(value: string);
    get actionInput(): string;
    private _actionParameters;
    get actionParameters(): RulesetRulesActionParametersOutputReference;
    putActionParameters(value: RulesetRulesActionParameters): void;
    resetActionParameters(): void;
    get actionParametersInput(): any;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): any;
    private _exposedCredentialCheck;
    get exposedCredentialCheck(): RulesetRulesExposedCredentialCheckOutputReference;
    putExposedCredentialCheck(value: RulesetRulesExposedCredentialCheck): void;
    resetExposedCredentialCheck(): void;
    get exposedCredentialCheckInput(): any;
    private _expression?;
    get expression(): string;
    set expression(value: string);
    get expressionInput(): string;
    get id(): any;
    private _logging;
    get logging(): RulesetRulesLoggingOutputReference;
    putLogging(value: RulesetRulesLogging): void;
    resetLogging(): void;
    get loggingInput(): any;
    private _ratelimit;
    get ratelimit(): RulesetRulesRatelimitOutputReference;
    putRatelimit(value: RulesetRulesRatelimit): void;
    resetRatelimit(): void;
    get ratelimitInput(): any;
    private _ref?;
    get ref(): string;
    set ref(value: string);
    resetRef(): void;
    get refInput(): string;
}
export declare class RulesetRulesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: RulesetRules[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): RulesetRulesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset cloudflare_ruleset}
*/
export declare class Ruleset extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_ruleset";
    /**
    * Generates CDKTF code for importing a Ruleset resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Ruleset to import
    * @param importFromId The id of the existing Ruleset that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Ruleset to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset cloudflare_ruleset} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RulesetConfig
    */
    constructor(scope: Construct, id: string, config: RulesetConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get id(): any;
    private _kind?;
    get kind(): string;
    set kind(value: string);
    get kindInput(): string;
    get lastUpdated(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _phase?;
    get phase(): string;
    set phase(value: string);
    get phaseInput(): string;
    private _rules;
    get rules(): RulesetRulesList;
    putRules(value: RulesetRules[] | cdktf.IResolvable): void;
    resetRules(): void;
    get rulesInput(): any;
    get version(): any;
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
