import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareAiSearchTokenConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_search_token#account_id DataCloudflareAiSearchToken#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_search_token#filter DataCloudflareAiSearchToken#filter}
    */
    readonly filter?: DataCloudflareAiSearchTokenFilter;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_search_token#id DataCloudflareAiSearchToken#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
}
export interface DataCloudflareAiSearchTokenFilter {
    /**
    * Filter tokens whose name contains this string (case-insensitive).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_search_token#search DataCloudflareAiSearchToken#search}
    */
    readonly search?: string;
}
export declare function dataCloudflareAiSearchTokenFilterToTerraform(struct?: DataCloudflareAiSearchTokenFilter | cdktf.IResolvable): any;
export declare function dataCloudflareAiSearchTokenFilterToHclTerraform(struct?: DataCloudflareAiSearchTokenFilter | cdktf.IResolvable): any;
export declare class DataCloudflareAiSearchTokenFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAiSearchTokenFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareAiSearchTokenFilter | cdktf.IResolvable | undefined);
    private _search?;
    get search(): string;
    set search(value: string);
    resetSearch(): void;
    get searchInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_search_token cloudflare_ai_search_token}
*/
export declare class DataCloudflareAiSearchToken extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_ai_search_token";
    /**
    * Generates CDKTF code for importing a DataCloudflareAiSearchToken resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareAiSearchToken to import
    * @param importFromId The id of the existing DataCloudflareAiSearchToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_search_token#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareAiSearchToken to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_search_token cloudflare_ai_search_token} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareAiSearchTokenConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareAiSearchTokenConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get cfApiId(): any;
    get createdAt(): any;
    get createdBy(): any;
    get enabled(): any;
    private _filter;
    get filter(): DataCloudflareAiSearchTokenFilterOutputReference;
    putFilter(value: DataCloudflareAiSearchTokenFilter): void;
    resetFilter(): void;
    get filterInput(): any;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    get legacy(): any;
    get modifiedAt(): any;
    get modifiedBy(): any;
    get name(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
