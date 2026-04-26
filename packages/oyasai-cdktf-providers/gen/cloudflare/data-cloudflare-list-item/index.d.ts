import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareListItemConfig extends cdktf.TerraformMetaArguments {
    /**
    * The Account ID for this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/list_item#account_id DataCloudflareListItem#account_id}
    */
    readonly accountId?: string;
    /**
    * Defines the unique ID of the item in the List.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/list_item#item_id DataCloudflareListItem#item_id}
    */
    readonly itemId: string;
    /**
    * The unique ID of the list.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/list_item#list_id DataCloudflareListItem#list_id}
    */
    readonly listId: string;
}
export interface DataCloudflareListItemHostname {
}
export declare function dataCloudflareListItemHostnameToTerraform(struct?: DataCloudflareListItemHostname): any;
export declare function dataCloudflareListItemHostnameToHclTerraform(struct?: DataCloudflareListItemHostname): any;
export declare class DataCloudflareListItemHostnameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareListItemHostname | undefined;
    set internalValue(value: DataCloudflareListItemHostname | undefined);
    get excludeExactHostname(): any;
    get urlHostname(): any;
}
export interface DataCloudflareListItemRedirect {
}
export declare function dataCloudflareListItemRedirectToTerraform(struct?: DataCloudflareListItemRedirect): any;
export declare function dataCloudflareListItemRedirectToHclTerraform(struct?: DataCloudflareListItemRedirect): any;
export declare class DataCloudflareListItemRedirectOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareListItemRedirect | undefined;
    set internalValue(value: DataCloudflareListItemRedirect | undefined);
    get includeSubdomains(): any;
    get preservePathSuffix(): any;
    get preserveQueryString(): any;
    get sourceUrl(): any;
    get statusCode(): any;
    get subpathMatching(): any;
    get targetUrl(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/list_item cloudflare_list_item}
*/
export declare class DataCloudflareListItem extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_list_item";
    /**
    * Generates CDKTF code for importing a DataCloudflareListItem resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareListItem to import
    * @param importFromId The id of the existing DataCloudflareListItem that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/list_item#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareListItem to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/list_item cloudflare_list_item} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareListItemConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareListItemConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get asn(): any;
    get comment(): any;
    get createdOn(): any;
    private _hostname;
    get hostname(): DataCloudflareListItemHostnameOutputReference;
    get id(): any;
    get ip(): any;
    private _itemId?;
    get itemId(): string;
    set itemId(value: string);
    get itemIdInput(): string;
    private _listId?;
    get listId(): string;
    set listId(value: string);
    get listIdInput(): string;
    get modifiedOn(): any;
    private _redirect;
    get redirect(): DataCloudflareListItemRedirectOutputReference;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
