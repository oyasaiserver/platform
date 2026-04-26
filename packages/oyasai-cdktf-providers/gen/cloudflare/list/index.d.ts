import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ListConfig extends cdktf.TerraformMetaArguments {
    /**
    * The Account ID for this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/list#account_id List#account_id}
    */
    readonly accountId?: string;
    /**
    * An informative summary of the list.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/list#description List#description}
    */
    readonly description?: string;
    /**
    * The items in the list. If set, this overwrites all items in the list. Do not use with `cloudflare_list_item`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/list#items List#items}
    */
    readonly items?: ListItems[] | cdktf.IResolvable;
    /**
    * The type of the list. Each type supports specific list items (IP addresses, ASNs, hostnames or redirects).
    * Available values: "ip", "redirect", "hostname", "asn".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/list#kind List#kind}
    */
    readonly kind: string;
    /**
    * An informative name for the list. Use this name in filter and rule expressions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/list#name List#name}
    */
    readonly name: string;
}
export interface ListItemsHostname {
    /**
    * Only applies to wildcard hostnames (e.g., *.example.com). When true (default), only subdomains are blocked. When false, both the root domain and subdomains are blocked.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/list#exclude_exact_hostname List#exclude_exact_hostname}
    */
    readonly excludeExactHostname?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/list#url_hostname List#url_hostname}
    */
    readonly urlHostname: string;
}
export declare function listItemsHostnameToTerraform(struct?: ListItemsHostname | cdktf.IResolvable): any;
export declare function listItemsHostnameToHclTerraform(struct?: ListItemsHostname | cdktf.IResolvable): any;
export declare class ListItemsHostnameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ListItemsHostname | cdktf.IResolvable | undefined;
    set internalValue(value: ListItemsHostname | cdktf.IResolvable | undefined);
    private _excludeExactHostname?;
    get excludeExactHostname(): boolean | cdktf.IResolvable;
    set excludeExactHostname(value: boolean | cdktf.IResolvable);
    resetExcludeExactHostname(): void;
    get excludeExactHostnameInput(): any;
    private _urlHostname?;
    get urlHostname(): string;
    set urlHostname(value: string);
    get urlHostnameInput(): string;
}
export interface ListItemsRedirect {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/list#include_subdomains List#include_subdomains}
    */
    readonly includeSubdomains?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/list#preserve_path_suffix List#preserve_path_suffix}
    */
    readonly preservePathSuffix?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/list#preserve_query_string List#preserve_query_string}
    */
    readonly preserveQueryString?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/list#source_url List#source_url}
    */
    readonly sourceUrl: string;
    /**
    * Available values: 301, 302, 307, 308.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/list#status_code List#status_code}
    */
    readonly statusCode?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/list#subpath_matching List#subpath_matching}
    */
    readonly subpathMatching?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/list#target_url List#target_url}
    */
    readonly targetUrl: string;
}
export declare function listItemsRedirectToTerraform(struct?: ListItemsRedirect | cdktf.IResolvable): any;
export declare function listItemsRedirectToHclTerraform(struct?: ListItemsRedirect | cdktf.IResolvable): any;
export declare class ListItemsRedirectOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ListItemsRedirect | cdktf.IResolvable | undefined;
    set internalValue(value: ListItemsRedirect | cdktf.IResolvable | undefined);
    private _includeSubdomains?;
    get includeSubdomains(): boolean | cdktf.IResolvable;
    set includeSubdomains(value: boolean | cdktf.IResolvable);
    resetIncludeSubdomains(): void;
    get includeSubdomainsInput(): any;
    private _preservePathSuffix?;
    get preservePathSuffix(): boolean | cdktf.IResolvable;
    set preservePathSuffix(value: boolean | cdktf.IResolvable);
    resetPreservePathSuffix(): void;
    get preservePathSuffixInput(): any;
    private _preserveQueryString?;
    get preserveQueryString(): boolean | cdktf.IResolvable;
    set preserveQueryString(value: boolean | cdktf.IResolvable);
    resetPreserveQueryString(): void;
    get preserveQueryStringInput(): any;
    private _sourceUrl?;
    get sourceUrl(): string;
    set sourceUrl(value: string);
    get sourceUrlInput(): string;
    private _statusCode?;
    get statusCode(): number;
    set statusCode(value: number);
    resetStatusCode(): void;
    get statusCodeInput(): number;
    private _subpathMatching?;
    get subpathMatching(): boolean | cdktf.IResolvable;
    set subpathMatching(value: boolean | cdktf.IResolvable);
    resetSubpathMatching(): void;
    get subpathMatchingInput(): any;
    private _targetUrl?;
    get targetUrl(): string;
    set targetUrl(value: string);
    get targetUrlInput(): string;
}
export interface ListItems {
    /**
    * A non-negative 32 bit integer
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/list#asn List#asn}
    */
    readonly asn?: number;
    /**
    * An informative summary of the list item.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/list#comment List#comment}
    */
    readonly comment?: string;
    /**
    * Valid characters for hostnames are ASCII(7) letters from a to z, the digits from 0 to 9, wildcards (*), and the hyphen (-).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/list#hostname List#hostname}
    */
    readonly hostname?: ListItemsHostname;
    /**
    * An IPv4 address, an IPv4 CIDR, an IPv6 address, or an IPv6 CIDR.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/list#ip List#ip}
    */
    readonly ip?: string;
    /**
    * The definition of the redirect.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/list#redirect List#redirect}
    */
    readonly redirect?: ListItemsRedirect;
}
export declare function listItemsToTerraform(struct?: ListItems | cdktf.IResolvable): any;
export declare function listItemsToHclTerraform(struct?: ListItems | cdktf.IResolvable): any;
export declare class ListItemsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ListItems | cdktf.IResolvable | undefined;
    set internalValue(value: ListItems | cdktf.IResolvable | undefined);
    private _asn?;
    get asn(): number;
    set asn(value: number);
    resetAsn(): void;
    get asnInput(): number;
    private _comment?;
    get comment(): string;
    set comment(value: string);
    resetComment(): void;
    get commentInput(): string;
    private _hostname;
    get hostname(): ListItemsHostnameOutputReference;
    putHostname(value: ListItemsHostname): void;
    resetHostname(): void;
    get hostnameInput(): any;
    private _ip?;
    get ip(): string;
    set ip(value: string);
    resetIp(): void;
    get ipInput(): string;
    private _redirect;
    get redirect(): ListItemsRedirectOutputReference;
    putRedirect(value: ListItemsRedirect): void;
    resetRedirect(): void;
    get redirectInput(): any;
}
export declare class ListItemsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ListItems[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ListItemsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/list cloudflare_list}
*/
export declare class List extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_list";
    /**
    * Generates CDKTF code for importing a List resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the List to import
    * @param importFromId The id of the existing List that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/list#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the List to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/list cloudflare_list} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ListConfig
    */
    constructor(scope: Construct, id: string, config: ListConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get createdOn(): any;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get id(): any;
    private _items;
    get items(): ListItemsList;
    putItems(value: ListItems[] | cdktf.IResolvable): void;
    resetItems(): void;
    get itemsInput(): any;
    private _kind?;
    get kind(): string;
    set kind(value: string);
    get kindInput(): string;
    get modifiedOn(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get numItems(): any;
    get numReferencingFilters(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
