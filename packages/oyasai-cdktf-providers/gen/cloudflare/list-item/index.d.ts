import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ListItemConfig extends cdktf.TerraformMetaArguments {
    /**
    * The Account ID for this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/list_item#account_id ListItem#account_id}
    */
    readonly accountId?: string;
    /**
    * A non-negative 32 bit integer
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/list_item#asn ListItem#asn}
    */
    readonly asn?: number;
    /**
    * An informative summary of the list item.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/list_item#comment ListItem#comment}
    */
    readonly comment?: string;
    /**
    * Valid characters for hostnames are ASCII(7) letters from a to z, the digits from 0 to 9, wildcards (*), and the hyphen (-).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/list_item#hostname ListItem#hostname}
    */
    readonly hostname?: ListItemHostname;
    /**
    * An IPv4 address, an IPv4 CIDR, an IPv6 address, or an IPv6 CIDR.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/list_item#ip ListItem#ip}
    */
    readonly ip?: string;
    /**
    * The unique ID of the list.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/list_item#list_id ListItem#list_id}
    */
    readonly listId: string;
    /**
    * The definition of the redirect.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/list_item#redirect ListItem#redirect}
    */
    readonly redirect?: ListItemRedirect;
}
export interface ListItemHostname {
    /**
    * Only applies to wildcard hostnames (e.g., *.example.com). When true (default), only subdomains are blocked. When false, both the root domain and subdomains are blocked.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/list_item#exclude_exact_hostname ListItem#exclude_exact_hostname}
    */
    readonly excludeExactHostname?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/list_item#url_hostname ListItem#url_hostname}
    */
    readonly urlHostname: string;
}
export declare function listItemHostnameToTerraform(struct?: ListItemHostname | cdktf.IResolvable): any;
export declare function listItemHostnameToHclTerraform(struct?: ListItemHostname | cdktf.IResolvable): any;
export declare class ListItemHostnameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ListItemHostname | cdktf.IResolvable | undefined;
    set internalValue(value: ListItemHostname | cdktf.IResolvable | undefined);
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
export interface ListItemRedirect {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/list_item#include_subdomains ListItem#include_subdomains}
    */
    readonly includeSubdomains?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/list_item#preserve_path_suffix ListItem#preserve_path_suffix}
    */
    readonly preservePathSuffix?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/list_item#preserve_query_string ListItem#preserve_query_string}
    */
    readonly preserveQueryString?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/list_item#source_url ListItem#source_url}
    */
    readonly sourceUrl: string;
    /**
    * Available values: 301, 302, 307, 308.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/list_item#status_code ListItem#status_code}
    */
    readonly statusCode?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/list_item#subpath_matching ListItem#subpath_matching}
    */
    readonly subpathMatching?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/list_item#target_url ListItem#target_url}
    */
    readonly targetUrl: string;
}
export declare function listItemRedirectToTerraform(struct?: ListItemRedirect | cdktf.IResolvable): any;
export declare function listItemRedirectToHclTerraform(struct?: ListItemRedirect | cdktf.IResolvable): any;
export declare class ListItemRedirectOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ListItemRedirect | cdktf.IResolvable | undefined;
    set internalValue(value: ListItemRedirect | cdktf.IResolvable | undefined);
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
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/list_item cloudflare_list_item}
*/
export declare class ListItem extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_list_item";
    /**
    * Generates CDKTF code for importing a ListItem resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ListItem to import
    * @param importFromId The id of the existing ListItem that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/list_item#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ListItem to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/list_item cloudflare_list_item} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ListItemConfig
    */
    constructor(scope: Construct, id: string, config: ListItemConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
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
    get createdOn(): any;
    private _hostname;
    get hostname(): ListItemHostnameOutputReference;
    putHostname(value: ListItemHostname): void;
    resetHostname(): void;
    get hostnameInput(): any;
    get id(): any;
    private _ip?;
    get ip(): string;
    set ip(value: string);
    resetIp(): void;
    get ipInput(): string;
    private _listId?;
    get listId(): string;
    set listId(value: string);
    get listIdInput(): string;
    get modifiedOn(): any;
    get operationId(): any;
    private _redirect;
    get redirect(): ListItemRedirectOutputReference;
    putRedirect(value: ListItemRedirect): void;
    resetRedirect(): void;
    get redirectInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
