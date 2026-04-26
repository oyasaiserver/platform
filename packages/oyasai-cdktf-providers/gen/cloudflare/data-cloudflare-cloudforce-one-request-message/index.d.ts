import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareCloudforceOneRequestMessageConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_request_message#account_id DataCloudflareCloudforceOneRequestMessage#account_id}
    */
    readonly accountId?: string;
    /**
    * Retrieve mes  ges created after this time.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_request_message#after DataCloudflareCloudforceOneRequestMessage#after}
    */
    readonly after?: string;
    /**
    * Retrieve messages created before this time.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_request_message#before DataCloudflareCloudforceOneRequestMessage#before}
    */
    readonly before?: string;
    /**
    * Page number of results.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_request_message#page DataCloudflareCloudforceOneRequestMessage#page}
    */
    readonly page: number;
    /**
    * Number of results per page.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_request_message#per_page DataCloudflareCloudforceOneRequestMessage#per_page}
    */
    readonly perPage: number;
    /**
    * UUID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_request_message#request_id DataCloudflareCloudforceOneRequestMessage#request_id}
    */
    readonly requestId: string;
    /**
    * Field to sort results by.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_request_message#sort_by DataCloudflareCloudforceOneRequestMessage#sort_by}
    */
    readonly sortBy?: string;
    /**
    * Sort order (asc or desc).
    * Available values: "asc", "desc".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_request_message#sort_order DataCloudflareCloudforceOneRequestMessage#sort_order}
    */
    readonly sortOrder?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_request_message cloudflare_cloudforce_one_request_message}
*/
export declare class DataCloudflareCloudforceOneRequestMessage extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_cloudforce_one_request_message";
    /**
    * Generates CDKTF code for importing a DataCloudflareCloudforceOneRequestMessage resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareCloudforceOneRequestMessage to import
    * @param importFromId The id of the existing DataCloudflareCloudforceOneRequestMessage that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_request_message#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareCloudforceOneRequestMessage to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_request_message cloudflare_cloudforce_one_request_message} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareCloudforceOneRequestMessageConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareCloudforceOneRequestMessageConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _after?;
    get after(): string;
    set after(value: string);
    resetAfter(): void;
    get afterInput(): string;
    get author(): any;
    private _before?;
    get before(): string;
    set before(value: string);
    resetBefore(): void;
    get beforeInput(): string;
    get content(): any;
    get created(): any;
    get id(): any;
    get isFollowOnRequest(): any;
    private _page?;
    get page(): number;
    set page(value: number);
    get pageInput(): number;
    private _perPage?;
    get perPage(): number;
    set perPage(value: number);
    get perPageInput(): number;
    private _requestId?;
    get requestId(): string;
    set requestId(value: string);
    get requestIdInput(): string;
    private _sortBy?;
    get sortBy(): string;
    set sortBy(value: string);
    resetSortBy(): void;
    get sortByInput(): string;
    private _sortOrder?;
    get sortOrder(): string;
    set sortOrder(value: string);
    resetSortOrder(): void;
    get sortOrderInput(): string;
    get updated(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
