import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareRulesetConfig extends cdktf.TerraformMetaArguments {
    /**
    * The unique ID of the account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ruleset#account_id DataCloudflareRuleset#account_id}
    */
    readonly accountId?: string;
    /**
    * The unique ID of the ruleset.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ruleset#id DataCloudflareRuleset#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The unique ID of the ruleset.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ruleset#ruleset_id DataCloudflareRuleset#ruleset_id}
    */
    readonly rulesetId?: string;
    /**
    * The unique ID of the zone.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ruleset#zone_id DataCloudflareRuleset#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareRulesetRulesActionParametersAlgorithms {
}
export declare function dataCloudflareRulesetRulesActionParametersAlgorithmsToTerraform(struct?: DataCloudflareRulesetRulesActionParametersAlgorithms): any;
export declare function dataCloudflareRulesetRulesActionParametersAlgorithmsToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersAlgorithms): any;
export declare class DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareRulesetRulesActionParametersAlgorithms | undefined;
    set internalValue(value: DataCloudflareRulesetRulesActionParametersAlgorithms | undefined);
    get name(): any;
}
export declare class DataCloudflareRulesetRulesActionParametersAlgorithmsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference;
}
export interface DataCloudflareRulesetRulesActionParametersAutominify {
}
export declare function dataCloudflareRulesetRulesActionParametersAutominifyToTerraform(struct?: DataCloudflareRulesetRulesActionParametersAutominify): any;
export declare function dataCloudflareRulesetRulesActionParametersAutominifyToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersAutominify): any;
export declare class DataCloudflareRulesetRulesActionParametersAutominifyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareRulesetRulesActionParametersAutominify | undefined;
    set internalValue(value: DataCloudflareRulesetRulesActionParametersAutominify | undefined);
    get css(): any;
    get html(): any;
    get js(): any;
}
export interface DataCloudflareRulesetRulesActionParametersBrowserTtl {
}
export declare function dataCloudflareRulesetRulesActionParametersBrowserTtlToTerraform(struct?: DataCloudflareRulesetRulesActionParametersBrowserTtl): any;
export declare function dataCloudflareRulesetRulesActionParametersBrowserTtlToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersBrowserTtl): any;
export declare class DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareRulesetRulesActionParametersBrowserTtl | undefined;
    set internalValue(value: DataCloudflareRulesetRulesActionParametersBrowserTtl | undefined);
    get default(): any;
    get mode(): any;
}
export interface DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookie {
}
export declare function dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieToTerraform(struct?: DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookie): any;
export declare function dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookie): any;
export declare class DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookie | undefined;
    set internalValue(value: DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookie | undefined);
    get checkPresence(): any;
    get include(): any;
}
export interface DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeader {
}
export declare function dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderToTerraform(struct?: DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeader): any;
export declare function dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeader): any;
export declare class DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeader | undefined;
    set internalValue(value: DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeader | undefined);
    get checkPresence(): any;
    private _contains;
    get contains(): any;
    get excludeOrigin(): any;
    get include(): any;
}
export interface DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHost {
}
export declare function dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostToTerraform(struct?: DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHost): any;
export declare function dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHost): any;
export declare class DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHost | undefined;
    set internalValue(value: DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHost | undefined);
    get resolved(): any;
}
export interface DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExclude {
}
export declare function dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeToTerraform(struct?: DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExclude): any;
export declare function dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExclude): any;
export declare class DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExclude | undefined;
    set internalValue(value: DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExclude | undefined);
    get all(): any;
    get list(): any;
}
export interface DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringInclude {
}
export declare function dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeToTerraform(struct?: DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringInclude): any;
export declare function dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringInclude): any;
export declare class DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringInclude | undefined;
    set internalValue(value: DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringInclude | undefined);
    get all(): any;
    get list(): any;
}
export interface DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryString {
}
export declare function dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringToTerraform(struct?: DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryString): any;
export declare function dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryString): any;
export declare class DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryString | undefined;
    set internalValue(value: DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryString | undefined);
    private _exclude;
    get exclude(): DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference;
    private _include;
    get include(): DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference;
}
export interface DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUser {
}
export declare function dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserToTerraform(struct?: DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUser): any;
export declare function dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUser): any;
export declare class DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUser | undefined;
    set internalValue(value: DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUser | undefined);
    get deviceType(): any;
    get geo(): any;
    get lang(): any;
}
export interface DataCloudflareRulesetRulesActionParametersCacheKeyCustomKey {
}
export declare function dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyToTerraform(struct?: DataCloudflareRulesetRulesActionParametersCacheKeyCustomKey): any;
export declare function dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersCacheKeyCustomKey): any;
export declare class DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareRulesetRulesActionParametersCacheKeyCustomKey | undefined;
    set internalValue(value: DataCloudflareRulesetRulesActionParametersCacheKeyCustomKey | undefined);
    private _cookie;
    get cookie(): DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference;
    private _header;
    get header(): DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference;
    private _host;
    get host(): DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference;
    private _queryString;
    get queryString(): DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference;
    private _user;
    get user(): DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference;
}
export interface DataCloudflareRulesetRulesActionParametersCacheKey {
}
export declare function dataCloudflareRulesetRulesActionParametersCacheKeyToTerraform(struct?: DataCloudflareRulesetRulesActionParametersCacheKey): any;
export declare function dataCloudflareRulesetRulesActionParametersCacheKeyToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersCacheKey): any;
export declare class DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareRulesetRulesActionParametersCacheKey | undefined;
    set internalValue(value: DataCloudflareRulesetRulesActionParametersCacheKey | undefined);
    get cacheByDeviceType(): any;
    get cacheDeceptionArmor(): any;
    private _customKey;
    get customKey(): DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference;
    get ignoreQueryStringsOrder(): any;
}
export interface DataCloudflareRulesetRulesActionParametersCacheReserve {
}
export declare function dataCloudflareRulesetRulesActionParametersCacheReserveToTerraform(struct?: DataCloudflareRulesetRulesActionParametersCacheReserve): any;
export declare function dataCloudflareRulesetRulesActionParametersCacheReserveToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersCacheReserve): any;
export declare class DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareRulesetRulesActionParametersCacheReserve | undefined;
    set internalValue(value: DataCloudflareRulesetRulesActionParametersCacheReserve | undefined);
    get eligible(): any;
    get minimumFileSize(): any;
}
export interface DataCloudflareRulesetRulesActionParametersCookieFields {
}
export declare function dataCloudflareRulesetRulesActionParametersCookieFieldsToTerraform(struct?: DataCloudflareRulesetRulesActionParametersCookieFields): any;
export declare function dataCloudflareRulesetRulesActionParametersCookieFieldsToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersCookieFields): any;
export declare class DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareRulesetRulesActionParametersCookieFields | undefined;
    set internalValue(value: DataCloudflareRulesetRulesActionParametersCookieFields | undefined);
    get name(): any;
}
export declare class DataCloudflareRulesetRulesActionParametersCookieFieldsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference;
}
export interface DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange {
}
export declare function dataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeToTerraform(struct?: DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange): any;
export declare function dataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange): any;
export declare class DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange | undefined;
    set internalValue(value: DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange | undefined);
    get from(): any;
    get to(): any;
}
export interface DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtl {
}
export declare function dataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlToTerraform(struct?: DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtl): any;
export declare function dataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtl): any;
export declare class DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtl | undefined;
    set internalValue(value: DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtl | undefined);
    get statusCode(): any;
    private _statusCodeRange;
    get statusCodeRange(): DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference;
    get value(): any;
}
export declare class DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference;
}
export interface DataCloudflareRulesetRulesActionParametersEdgeTtl {
}
export declare function dataCloudflareRulesetRulesActionParametersEdgeTtlToTerraform(struct?: DataCloudflareRulesetRulesActionParametersEdgeTtl): any;
export declare function dataCloudflareRulesetRulesActionParametersEdgeTtlToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersEdgeTtl): any;
export declare class DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareRulesetRulesActionParametersEdgeTtl | undefined;
    set internalValue(value: DataCloudflareRulesetRulesActionParametersEdgeTtl | undefined);
    get default(): any;
    get mode(): any;
    private _statusCodeTtl;
    get statusCodeTtl(): DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlList;
}
export interface DataCloudflareRulesetRulesActionParametersFromListStruct {
}
export declare function dataCloudflareRulesetRulesActionParametersFromListStructToTerraform(struct?: DataCloudflareRulesetRulesActionParametersFromListStruct): any;
export declare function dataCloudflareRulesetRulesActionParametersFromListStructToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersFromListStruct): any;
export declare class DataCloudflareRulesetRulesActionParametersFromListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareRulesetRulesActionParametersFromListStruct | undefined;
    set internalValue(value: DataCloudflareRulesetRulesActionParametersFromListStruct | undefined);
    get key(): any;
    get name(): any;
}
export interface DataCloudflareRulesetRulesActionParametersFromValueTargetUrl {
}
export declare function dataCloudflareRulesetRulesActionParametersFromValueTargetUrlToTerraform(struct?: DataCloudflareRulesetRulesActionParametersFromValueTargetUrl): any;
export declare function dataCloudflareRulesetRulesActionParametersFromValueTargetUrlToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersFromValueTargetUrl): any;
export declare class DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareRulesetRulesActionParametersFromValueTargetUrl | undefined;
    set internalValue(value: DataCloudflareRulesetRulesActionParametersFromValueTargetUrl | undefined);
    get expression(): any;
    get value(): any;
}
export interface DataCloudflareRulesetRulesActionParametersFromValue {
}
export declare function dataCloudflareRulesetRulesActionParametersFromValueToTerraform(struct?: DataCloudflareRulesetRulesActionParametersFromValue): any;
export declare function dataCloudflareRulesetRulesActionParametersFromValueToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersFromValue): any;
export declare class DataCloudflareRulesetRulesActionParametersFromValueOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareRulesetRulesActionParametersFromValue | undefined;
    set internalValue(value: DataCloudflareRulesetRulesActionParametersFromValue | undefined);
    get preserveQueryString(): any;
    get statusCode(): any;
    private _targetUrl;
    get targetUrl(): DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference;
}
export interface DataCloudflareRulesetRulesActionParametersHeaders {
}
export declare function dataCloudflareRulesetRulesActionParametersHeadersToTerraform(struct?: DataCloudflareRulesetRulesActionParametersHeaders): any;
export declare function dataCloudflareRulesetRulesActionParametersHeadersToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersHeaders): any;
export declare class DataCloudflareRulesetRulesActionParametersHeadersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): DataCloudflareRulesetRulesActionParametersHeaders | undefined;
    set internalValue(value: DataCloudflareRulesetRulesActionParametersHeaders | undefined);
    get expression(): any;
    get operation(): any;
    get value(): any;
}
export declare class DataCloudflareRulesetRulesActionParametersHeadersMap extends cdktf.ComplexMap {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    /**
    * @param key the key of the item to return
    */
    get(key: string): DataCloudflareRulesetRulesActionParametersHeadersOutputReference;
}
export interface DataCloudflareRulesetRulesActionParametersImmutable {
}
export declare function dataCloudflareRulesetRulesActionParametersImmutableToTerraform(struct?: DataCloudflareRulesetRulesActionParametersImmutable): any;
export declare function dataCloudflareRulesetRulesActionParametersImmutableToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersImmutable): any;
export declare class DataCloudflareRulesetRulesActionParametersImmutableOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareRulesetRulesActionParametersImmutable | undefined;
    set internalValue(value: DataCloudflareRulesetRulesActionParametersImmutable | undefined);
    get cloudflareOnly(): any;
    get operation(): any;
}
export interface DataCloudflareRulesetRulesActionParametersMatchedData {
}
export declare function dataCloudflareRulesetRulesActionParametersMatchedDataToTerraform(struct?: DataCloudflareRulesetRulesActionParametersMatchedData): any;
export declare function dataCloudflareRulesetRulesActionParametersMatchedDataToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersMatchedData): any;
export declare class DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareRulesetRulesActionParametersMatchedData | undefined;
    set internalValue(value: DataCloudflareRulesetRulesActionParametersMatchedData | undefined);
    get publicKey(): any;
}
export interface DataCloudflareRulesetRulesActionParametersMaxAge {
}
export declare function dataCloudflareRulesetRulesActionParametersMaxAgeToTerraform(struct?: DataCloudflareRulesetRulesActionParametersMaxAge): any;
export declare function dataCloudflareRulesetRulesActionParametersMaxAgeToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersMaxAge): any;
export declare class DataCloudflareRulesetRulesActionParametersMaxAgeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareRulesetRulesActionParametersMaxAge | undefined;
    set internalValue(value: DataCloudflareRulesetRulesActionParametersMaxAge | undefined);
    get cloudflareOnly(): any;
    get operation(): any;
    get value(): any;
}
export interface DataCloudflareRulesetRulesActionParametersMustRevalidate {
}
export declare function dataCloudflareRulesetRulesActionParametersMustRevalidateToTerraform(struct?: DataCloudflareRulesetRulesActionParametersMustRevalidate): any;
export declare function dataCloudflareRulesetRulesActionParametersMustRevalidateToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersMustRevalidate): any;
export declare class DataCloudflareRulesetRulesActionParametersMustRevalidateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareRulesetRulesActionParametersMustRevalidate | undefined;
    set internalValue(value: DataCloudflareRulesetRulesActionParametersMustRevalidate | undefined);
    get cloudflareOnly(): any;
    get operation(): any;
}
export interface DataCloudflareRulesetRulesActionParametersMustUnderstand {
}
export declare function dataCloudflareRulesetRulesActionParametersMustUnderstandToTerraform(struct?: DataCloudflareRulesetRulesActionParametersMustUnderstand): any;
export declare function dataCloudflareRulesetRulesActionParametersMustUnderstandToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersMustUnderstand): any;
export declare class DataCloudflareRulesetRulesActionParametersMustUnderstandOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareRulesetRulesActionParametersMustUnderstand | undefined;
    set internalValue(value: DataCloudflareRulesetRulesActionParametersMustUnderstand | undefined);
    get cloudflareOnly(): any;
    get operation(): any;
}
export interface DataCloudflareRulesetRulesActionParametersNoCache {
}
export declare function dataCloudflareRulesetRulesActionParametersNoCacheToTerraform(struct?: DataCloudflareRulesetRulesActionParametersNoCache): any;
export declare function dataCloudflareRulesetRulesActionParametersNoCacheToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersNoCache): any;
export declare class DataCloudflareRulesetRulesActionParametersNoCacheOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareRulesetRulesActionParametersNoCache | undefined;
    set internalValue(value: DataCloudflareRulesetRulesActionParametersNoCache | undefined);
    get cloudflareOnly(): any;
    get operation(): any;
    get qualifiers(): any;
}
export interface DataCloudflareRulesetRulesActionParametersNoStore {
}
export declare function dataCloudflareRulesetRulesActionParametersNoStoreToTerraform(struct?: DataCloudflareRulesetRulesActionParametersNoStore): any;
export declare function dataCloudflareRulesetRulesActionParametersNoStoreToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersNoStore): any;
export declare class DataCloudflareRulesetRulesActionParametersNoStoreOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareRulesetRulesActionParametersNoStore | undefined;
    set internalValue(value: DataCloudflareRulesetRulesActionParametersNoStore | undefined);
    get cloudflareOnly(): any;
    get operation(): any;
}
export interface DataCloudflareRulesetRulesActionParametersNoTransform {
}
export declare function dataCloudflareRulesetRulesActionParametersNoTransformToTerraform(struct?: DataCloudflareRulesetRulesActionParametersNoTransform): any;
export declare function dataCloudflareRulesetRulesActionParametersNoTransformToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersNoTransform): any;
export declare class DataCloudflareRulesetRulesActionParametersNoTransformOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareRulesetRulesActionParametersNoTransform | undefined;
    set internalValue(value: DataCloudflareRulesetRulesActionParametersNoTransform | undefined);
    get cloudflareOnly(): any;
    get operation(): any;
}
export interface DataCloudflareRulesetRulesActionParametersOrigin {
}
export declare function dataCloudflareRulesetRulesActionParametersOriginToTerraform(struct?: DataCloudflareRulesetRulesActionParametersOrigin): any;
export declare function dataCloudflareRulesetRulesActionParametersOriginToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersOrigin): any;
export declare class DataCloudflareRulesetRulesActionParametersOriginOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareRulesetRulesActionParametersOrigin | undefined;
    set internalValue(value: DataCloudflareRulesetRulesActionParametersOrigin | undefined);
    get host(): any;
    get port(): any;
}
export interface DataCloudflareRulesetRulesActionParametersOverridesCategories {
}
export declare function dataCloudflareRulesetRulesActionParametersOverridesCategoriesToTerraform(struct?: DataCloudflareRulesetRulesActionParametersOverridesCategories): any;
export declare function dataCloudflareRulesetRulesActionParametersOverridesCategoriesToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersOverridesCategories): any;
export declare class DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareRulesetRulesActionParametersOverridesCategories | undefined;
    set internalValue(value: DataCloudflareRulesetRulesActionParametersOverridesCategories | undefined);
    get action(): any;
    get category(): any;
    get enabled(): any;
    get sensitivityLevel(): any;
}
export declare class DataCloudflareRulesetRulesActionParametersOverridesCategoriesList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference;
}
export interface DataCloudflareRulesetRulesActionParametersOverridesRules {
}
export declare function dataCloudflareRulesetRulesActionParametersOverridesRulesToTerraform(struct?: DataCloudflareRulesetRulesActionParametersOverridesRules): any;
export declare function dataCloudflareRulesetRulesActionParametersOverridesRulesToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersOverridesRules): any;
export declare class DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareRulesetRulesActionParametersOverridesRules | undefined;
    set internalValue(value: DataCloudflareRulesetRulesActionParametersOverridesRules | undefined);
    get action(): any;
    get enabled(): any;
    get id(): any;
    get scoreThreshold(): any;
    get sensitivityLevel(): any;
}
export declare class DataCloudflareRulesetRulesActionParametersOverridesRulesList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference;
}
export interface DataCloudflareRulesetRulesActionParametersOverrides {
}
export declare function dataCloudflareRulesetRulesActionParametersOverridesToTerraform(struct?: DataCloudflareRulesetRulesActionParametersOverrides): any;
export declare function dataCloudflareRulesetRulesActionParametersOverridesToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersOverrides): any;
export declare class DataCloudflareRulesetRulesActionParametersOverridesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareRulesetRulesActionParametersOverrides | undefined;
    set internalValue(value: DataCloudflareRulesetRulesActionParametersOverrides | undefined);
    get action(): any;
    private _categories;
    get categories(): DataCloudflareRulesetRulesActionParametersOverridesCategoriesList;
    get enabled(): any;
    private _rules;
    get rules(): DataCloudflareRulesetRulesActionParametersOverridesRulesList;
    get sensitivityLevel(): any;
}
export interface DataCloudflareRulesetRulesActionParametersPrivate {
}
export declare function dataCloudflareRulesetRulesActionParametersPrivateToTerraform(struct?: DataCloudflareRulesetRulesActionParametersPrivate): any;
export declare function dataCloudflareRulesetRulesActionParametersPrivateToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersPrivate): any;
export declare class DataCloudflareRulesetRulesActionParametersPrivateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareRulesetRulesActionParametersPrivate | undefined;
    set internalValue(value: DataCloudflareRulesetRulesActionParametersPrivate | undefined);
    get cloudflareOnly(): any;
    get operation(): any;
    get qualifiers(): any;
}
export interface DataCloudflareRulesetRulesActionParametersProxyRevalidate {
}
export declare function dataCloudflareRulesetRulesActionParametersProxyRevalidateToTerraform(struct?: DataCloudflareRulesetRulesActionParametersProxyRevalidate): any;
export declare function dataCloudflareRulesetRulesActionParametersProxyRevalidateToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersProxyRevalidate): any;
export declare class DataCloudflareRulesetRulesActionParametersProxyRevalidateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareRulesetRulesActionParametersProxyRevalidate | undefined;
    set internalValue(value: DataCloudflareRulesetRulesActionParametersProxyRevalidate | undefined);
    get cloudflareOnly(): any;
    get operation(): any;
}
export interface DataCloudflareRulesetRulesActionParametersPublic {
}
export declare function dataCloudflareRulesetRulesActionParametersPublicToTerraform(struct?: DataCloudflareRulesetRulesActionParametersPublic): any;
export declare function dataCloudflareRulesetRulesActionParametersPublicToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersPublic): any;
export declare class DataCloudflareRulesetRulesActionParametersPublicOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareRulesetRulesActionParametersPublic | undefined;
    set internalValue(value: DataCloudflareRulesetRulesActionParametersPublic | undefined);
    get cloudflareOnly(): any;
    get operation(): any;
}
export interface DataCloudflareRulesetRulesActionParametersRawResponseFields {
}
export declare function dataCloudflareRulesetRulesActionParametersRawResponseFieldsToTerraform(struct?: DataCloudflareRulesetRulesActionParametersRawResponseFields): any;
export declare function dataCloudflareRulesetRulesActionParametersRawResponseFieldsToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersRawResponseFields): any;
export declare class DataCloudflareRulesetRulesActionParametersRawResponseFieldsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareRulesetRulesActionParametersRawResponseFields | undefined;
    set internalValue(value: DataCloudflareRulesetRulesActionParametersRawResponseFields | undefined);
    get name(): any;
    get preserveDuplicates(): any;
}
export declare class DataCloudflareRulesetRulesActionParametersRawResponseFieldsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareRulesetRulesActionParametersRawResponseFieldsOutputReference;
}
export interface DataCloudflareRulesetRulesActionParametersRequestFields {
}
export declare function dataCloudflareRulesetRulesActionParametersRequestFieldsToTerraform(struct?: DataCloudflareRulesetRulesActionParametersRequestFields): any;
export declare function dataCloudflareRulesetRulesActionParametersRequestFieldsToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersRequestFields): any;
export declare class DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareRulesetRulesActionParametersRequestFields | undefined;
    set internalValue(value: DataCloudflareRulesetRulesActionParametersRequestFields | undefined);
    get name(): any;
}
export declare class DataCloudflareRulesetRulesActionParametersRequestFieldsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference;
}
export interface DataCloudflareRulesetRulesActionParametersResponse {
}
export declare function dataCloudflareRulesetRulesActionParametersResponseToTerraform(struct?: DataCloudflareRulesetRulesActionParametersResponse): any;
export declare function dataCloudflareRulesetRulesActionParametersResponseToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersResponse): any;
export declare class DataCloudflareRulesetRulesActionParametersResponseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareRulesetRulesActionParametersResponse | undefined;
    set internalValue(value: DataCloudflareRulesetRulesActionParametersResponse | undefined);
    get content(): any;
    get contentType(): any;
    get statusCode(): any;
}
export interface DataCloudflareRulesetRulesActionParametersResponseFields {
}
export declare function dataCloudflareRulesetRulesActionParametersResponseFieldsToTerraform(struct?: DataCloudflareRulesetRulesActionParametersResponseFields): any;
export declare function dataCloudflareRulesetRulesActionParametersResponseFieldsToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersResponseFields): any;
export declare class DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareRulesetRulesActionParametersResponseFields | undefined;
    set internalValue(value: DataCloudflareRulesetRulesActionParametersResponseFields | undefined);
    get name(): any;
    get preserveDuplicates(): any;
}
export declare class DataCloudflareRulesetRulesActionParametersResponseFieldsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference;
}
export interface DataCloudflareRulesetRulesActionParametersSMaxage {
}
export declare function dataCloudflareRulesetRulesActionParametersSMaxageToTerraform(struct?: DataCloudflareRulesetRulesActionParametersSMaxage): any;
export declare function dataCloudflareRulesetRulesActionParametersSMaxageToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersSMaxage): any;
export declare class DataCloudflareRulesetRulesActionParametersSMaxageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareRulesetRulesActionParametersSMaxage | undefined;
    set internalValue(value: DataCloudflareRulesetRulesActionParametersSMaxage | undefined);
    get cloudflareOnly(): any;
    get operation(): any;
    get value(): any;
}
export interface DataCloudflareRulesetRulesActionParametersServeStale {
}
export declare function dataCloudflareRulesetRulesActionParametersServeStaleToTerraform(struct?: DataCloudflareRulesetRulesActionParametersServeStale): any;
export declare function dataCloudflareRulesetRulesActionParametersServeStaleToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersServeStale): any;
export declare class DataCloudflareRulesetRulesActionParametersServeStaleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareRulesetRulesActionParametersServeStale | undefined;
    set internalValue(value: DataCloudflareRulesetRulesActionParametersServeStale | undefined);
    get disableStaleWhileUpdating(): any;
}
export interface DataCloudflareRulesetRulesActionParametersSni {
}
export declare function dataCloudflareRulesetRulesActionParametersSniToTerraform(struct?: DataCloudflareRulesetRulesActionParametersSni): any;
export declare function dataCloudflareRulesetRulesActionParametersSniToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersSni): any;
export declare class DataCloudflareRulesetRulesActionParametersSniOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareRulesetRulesActionParametersSni | undefined;
    set internalValue(value: DataCloudflareRulesetRulesActionParametersSni | undefined);
    get value(): any;
}
export interface DataCloudflareRulesetRulesActionParametersStaleIfError {
}
export declare function dataCloudflareRulesetRulesActionParametersStaleIfErrorToTerraform(struct?: DataCloudflareRulesetRulesActionParametersStaleIfError): any;
export declare function dataCloudflareRulesetRulesActionParametersStaleIfErrorToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersStaleIfError): any;
export declare class DataCloudflareRulesetRulesActionParametersStaleIfErrorOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareRulesetRulesActionParametersStaleIfError | undefined;
    set internalValue(value: DataCloudflareRulesetRulesActionParametersStaleIfError | undefined);
    get cloudflareOnly(): any;
    get operation(): any;
    get value(): any;
}
export interface DataCloudflareRulesetRulesActionParametersStaleWhileRevalidate {
}
export declare function dataCloudflareRulesetRulesActionParametersStaleWhileRevalidateToTerraform(struct?: DataCloudflareRulesetRulesActionParametersStaleWhileRevalidate): any;
export declare function dataCloudflareRulesetRulesActionParametersStaleWhileRevalidateToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersStaleWhileRevalidate): any;
export declare class DataCloudflareRulesetRulesActionParametersStaleWhileRevalidateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareRulesetRulesActionParametersStaleWhileRevalidate | undefined;
    set internalValue(value: DataCloudflareRulesetRulesActionParametersStaleWhileRevalidate | undefined);
    get cloudflareOnly(): any;
    get operation(): any;
    get value(): any;
}
export interface DataCloudflareRulesetRulesActionParametersTransformedRequestFields {
}
export declare function dataCloudflareRulesetRulesActionParametersTransformedRequestFieldsToTerraform(struct?: DataCloudflareRulesetRulesActionParametersTransformedRequestFields): any;
export declare function dataCloudflareRulesetRulesActionParametersTransformedRequestFieldsToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersTransformedRequestFields): any;
export declare class DataCloudflareRulesetRulesActionParametersTransformedRequestFieldsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareRulesetRulesActionParametersTransformedRequestFields | undefined;
    set internalValue(value: DataCloudflareRulesetRulesActionParametersTransformedRequestFields | undefined);
    get name(): any;
}
export declare class DataCloudflareRulesetRulesActionParametersTransformedRequestFieldsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareRulesetRulesActionParametersTransformedRequestFieldsOutputReference;
}
export interface DataCloudflareRulesetRulesActionParametersUriPath {
}
export declare function dataCloudflareRulesetRulesActionParametersUriPathToTerraform(struct?: DataCloudflareRulesetRulesActionParametersUriPath): any;
export declare function dataCloudflareRulesetRulesActionParametersUriPathToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersUriPath): any;
export declare class DataCloudflareRulesetRulesActionParametersUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareRulesetRulesActionParametersUriPath | undefined;
    set internalValue(value: DataCloudflareRulesetRulesActionParametersUriPath | undefined);
    get expression(): any;
    get value(): any;
}
export interface DataCloudflareRulesetRulesActionParametersUriQuery {
}
export declare function dataCloudflareRulesetRulesActionParametersUriQueryToTerraform(struct?: DataCloudflareRulesetRulesActionParametersUriQuery): any;
export declare function dataCloudflareRulesetRulesActionParametersUriQueryToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersUriQuery): any;
export declare class DataCloudflareRulesetRulesActionParametersUriQueryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareRulesetRulesActionParametersUriQuery | undefined;
    set internalValue(value: DataCloudflareRulesetRulesActionParametersUriQuery | undefined);
    get expression(): any;
    get value(): any;
}
export interface DataCloudflareRulesetRulesActionParametersUri {
}
export declare function dataCloudflareRulesetRulesActionParametersUriToTerraform(struct?: DataCloudflareRulesetRulesActionParametersUri): any;
export declare function dataCloudflareRulesetRulesActionParametersUriToHclTerraform(struct?: DataCloudflareRulesetRulesActionParametersUri): any;
export declare class DataCloudflareRulesetRulesActionParametersUriOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareRulesetRulesActionParametersUri | undefined;
    set internalValue(value: DataCloudflareRulesetRulesActionParametersUri | undefined);
    get origin(): any;
    private _path;
    get path(): DataCloudflareRulesetRulesActionParametersUriPathOutputReference;
    private _query;
    get query(): DataCloudflareRulesetRulesActionParametersUriQueryOutputReference;
}
export interface DataCloudflareRulesetRulesActionParameters {
}
export declare function dataCloudflareRulesetRulesActionParametersToTerraform(struct?: DataCloudflareRulesetRulesActionParameters): any;
export declare function dataCloudflareRulesetRulesActionParametersToHclTerraform(struct?: DataCloudflareRulesetRulesActionParameters): any;
export declare class DataCloudflareRulesetRulesActionParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareRulesetRulesActionParameters | undefined;
    set internalValue(value: DataCloudflareRulesetRulesActionParameters | undefined);
    get additionalCacheablePorts(): any;
    private _algorithms;
    get algorithms(): DataCloudflareRulesetRulesActionParametersAlgorithmsList;
    get assetName(): any;
    get automaticHttpsRewrites(): any;
    private _autominify;
    get autominify(): DataCloudflareRulesetRulesActionParametersAutominifyOutputReference;
    get bic(): any;
    private _browserTtl;
    get browserTtl(): DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference;
    get cache(): any;
    private _cacheKey;
    get cacheKey(): DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference;
    private _cacheReserve;
    get cacheReserve(): DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference;
    get content(): any;
    get contentConverter(): any;
    get contentType(): any;
    private _cookieFields;
    get cookieFields(): DataCloudflareRulesetRulesActionParametersCookieFieldsList;
    get disableApps(): any;
    get disableRum(): any;
    get disableZaraz(): any;
    private _edgeTtl;
    get edgeTtl(): DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference;
    get emailObfuscation(): any;
    get expression(): any;
    get fonts(): any;
    private _fromList;
    get fromList(): DataCloudflareRulesetRulesActionParametersFromListStructOutputReference;
    private _fromValue;
    get fromValue(): DataCloudflareRulesetRulesActionParametersFromValueOutputReference;
    private _headers;
    get headers(): DataCloudflareRulesetRulesActionParametersHeadersMap;
    get hostHeader(): any;
    get hotlinkProtection(): any;
    get id(): any;
    private _immutable;
    get immutable(): DataCloudflareRulesetRulesActionParametersImmutableOutputReference;
    get increment(): any;
    private _matchedData;
    get matchedData(): DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference;
    private _maxAge;
    get maxAge(): DataCloudflareRulesetRulesActionParametersMaxAgeOutputReference;
    get mirage(): any;
    private _mustRevalidate;
    get mustRevalidate(): DataCloudflareRulesetRulesActionParametersMustRevalidateOutputReference;
    private _mustUnderstand;
    get mustUnderstand(): DataCloudflareRulesetRulesActionParametersMustUnderstandOutputReference;
    private _noCache;
    get noCache(): DataCloudflareRulesetRulesActionParametersNoCacheOutputReference;
    private _noStore;
    get noStore(): DataCloudflareRulesetRulesActionParametersNoStoreOutputReference;
    private _noTransform;
    get noTransform(): DataCloudflareRulesetRulesActionParametersNoTransformOutputReference;
    get operation(): any;
    get opportunisticEncryption(): any;
    private _origin;
    get origin(): DataCloudflareRulesetRulesActionParametersOriginOutputReference;
    get originCacheControl(): any;
    get originErrorPagePassthru(): any;
    private _overrides;
    get overrides(): DataCloudflareRulesetRulesActionParametersOverridesOutputReference;
    get phases(): any;
    get polish(): any;
    private _private;
    get private(): DataCloudflareRulesetRulesActionParametersPrivateOutputReference;
    get products(): any;
    private _proxyRevalidate;
    get proxyRevalidate(): DataCloudflareRulesetRulesActionParametersProxyRevalidateOutputReference;
    private _public;
    get public(): DataCloudflareRulesetRulesActionParametersPublicOutputReference;
    private _rawResponseFields;
    get rawResponseFields(): DataCloudflareRulesetRulesActionParametersRawResponseFieldsList;
    get readTimeout(): any;
    get redirectsForAiTraining(): any;
    get requestBodyBuffering(): any;
    private _requestFields;
    get requestFields(): DataCloudflareRulesetRulesActionParametersRequestFieldsList;
    get respectStrongEtags(): any;
    private _response;
    get response(): DataCloudflareRulesetRulesActionParametersResponseOutputReference;
    get responseBodyBuffering(): any;
    private _responseFields;
    get responseFields(): DataCloudflareRulesetRulesActionParametersResponseFieldsList;
    get rocketLoader(): any;
    private _rules;
    get rules(): any;
    get ruleset(): any;
    get rulesets(): any;
    private _sMaxage;
    get sMaxage(): DataCloudflareRulesetRulesActionParametersSMaxageOutputReference;
    get securityLevel(): any;
    private _serveStale;
    get serveStale(): DataCloudflareRulesetRulesActionParametersServeStaleOutputReference;
    get serverSideExcludes(): any;
    private _sni;
    get sni(): DataCloudflareRulesetRulesActionParametersSniOutputReference;
    get ssl(): any;
    private _staleIfError;
    get staleIfError(): DataCloudflareRulesetRulesActionParametersStaleIfErrorOutputReference;
    private _staleWhileRevalidate;
    get staleWhileRevalidate(): DataCloudflareRulesetRulesActionParametersStaleWhileRevalidateOutputReference;
    get statusCode(): any;
    get stripEtags(): any;
    get stripLastModified(): any;
    get stripSetCookie(): any;
    get sxg(): any;
    private _transformedRequestFields;
    get transformedRequestFields(): DataCloudflareRulesetRulesActionParametersTransformedRequestFieldsList;
    private _uri;
    get uri(): DataCloudflareRulesetRulesActionParametersUriOutputReference;
    get values(): any;
}
export interface DataCloudflareRulesetRulesExposedCredentialCheck {
}
export declare function dataCloudflareRulesetRulesExposedCredentialCheckToTerraform(struct?: DataCloudflareRulesetRulesExposedCredentialCheck): any;
export declare function dataCloudflareRulesetRulesExposedCredentialCheckToHclTerraform(struct?: DataCloudflareRulesetRulesExposedCredentialCheck): any;
export declare class DataCloudflareRulesetRulesExposedCredentialCheckOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareRulesetRulesExposedCredentialCheck | undefined;
    set internalValue(value: DataCloudflareRulesetRulesExposedCredentialCheck | undefined);
    get passwordExpression(): any;
    get usernameExpression(): any;
}
export interface DataCloudflareRulesetRulesLogging {
}
export declare function dataCloudflareRulesetRulesLoggingToTerraform(struct?: DataCloudflareRulesetRulesLogging): any;
export declare function dataCloudflareRulesetRulesLoggingToHclTerraform(struct?: DataCloudflareRulesetRulesLogging): any;
export declare class DataCloudflareRulesetRulesLoggingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareRulesetRulesLogging | undefined;
    set internalValue(value: DataCloudflareRulesetRulesLogging | undefined);
    get enabled(): any;
}
export interface DataCloudflareRulesetRulesRatelimit {
}
export declare function dataCloudflareRulesetRulesRatelimitToTerraform(struct?: DataCloudflareRulesetRulesRatelimit): any;
export declare function dataCloudflareRulesetRulesRatelimitToHclTerraform(struct?: DataCloudflareRulesetRulesRatelimit): any;
export declare class DataCloudflareRulesetRulesRatelimitOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareRulesetRulesRatelimit | undefined;
    set internalValue(value: DataCloudflareRulesetRulesRatelimit | undefined);
    get characteristics(): any;
    get countingExpression(): any;
    get mitigationTimeout(): any;
    get period(): any;
    get requestsPerPeriod(): any;
    get requestsToOrigin(): any;
    get scorePerPeriod(): any;
    get scoreResponseHeaderName(): any;
}
export interface DataCloudflareRulesetRules {
}
export declare function dataCloudflareRulesetRulesToTerraform(struct?: DataCloudflareRulesetRules): any;
export declare function dataCloudflareRulesetRulesToHclTerraform(struct?: DataCloudflareRulesetRules): any;
export declare class DataCloudflareRulesetRulesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareRulesetRules | undefined;
    set internalValue(value: DataCloudflareRulesetRules | undefined);
    get action(): any;
    private _actionParameters;
    get actionParameters(): DataCloudflareRulesetRulesActionParametersOutputReference;
    get categories(): any;
    get description(): any;
    get enabled(): any;
    private _exposedCredentialCheck;
    get exposedCredentialCheck(): DataCloudflareRulesetRulesExposedCredentialCheckOutputReference;
    get expression(): any;
    get id(): any;
    private _logging;
    get logging(): DataCloudflareRulesetRulesLoggingOutputReference;
    private _ratelimit;
    get ratelimit(): DataCloudflareRulesetRulesRatelimitOutputReference;
    get ref(): any;
}
export declare class DataCloudflareRulesetRulesList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareRulesetRulesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ruleset cloudflare_ruleset}
*/
export declare class DataCloudflareRuleset extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_ruleset";
    /**
    * Generates CDKTF code for importing a DataCloudflareRuleset resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareRuleset to import
    * @param importFromId The id of the existing DataCloudflareRuleset that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ruleset#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareRuleset to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ruleset cloudflare_ruleset} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareRulesetConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareRulesetConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get description(): any;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    get kind(): any;
    get lastUpdated(): any;
    get name(): any;
    get phase(): any;
    private _rules;
    get rules(): DataCloudflareRulesetRulesList;
    private _rulesetId?;
    get rulesetId(): string;
    set rulesetId(value: string);
    resetRulesetId(): void;
    get rulesetIdInput(): string;
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
