import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustAccessAiControlsMcpServersConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_ai_controls_mcp_servers#account_id DataCloudflareZeroTrustAccessAiControlsMcpServers#account_id}
    */
    readonly accountId?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_ai_controls_mcp_servers#max_items DataCloudflareZeroTrustAccessAiControlsMcpServers#max_items}
    */
    readonly maxItems?: number;
    /**
    * Search by id, name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_ai_controls_mcp_servers#search DataCloudflareZeroTrustAccessAiControlsMcpServers#search}
    */
    readonly search?: string;
}
export interface DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPrompts {
}
export declare function dataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsToTerraform(struct?: DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPrompts): any;
export declare function dataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsToHclTerraform(struct?: DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPrompts): any;
export declare class DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPrompts | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPrompts | undefined);
    get alias(): any;
    get description(): any;
    get enabled(): any;
    get name(): any;
}
export declare class DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference;
}
export interface DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedTools {
}
export declare function dataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsToTerraform(struct?: DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedTools): any;
export declare function dataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsToHclTerraform(struct?: DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedTools): any;
export declare class DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedTools | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedTools | undefined);
    get alias(): any;
    get description(): any;
    get enabled(): any;
    get name(): any;
}
export declare class DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference;
}
export interface DataCloudflareZeroTrustAccessAiControlsMcpServersResult {
}
export declare function dataCloudflareZeroTrustAccessAiControlsMcpServersResultToTerraform(struct?: DataCloudflareZeroTrustAccessAiControlsMcpServersResult): any;
export declare function dataCloudflareZeroTrustAccessAiControlsMcpServersResultToHclTerraform(struct?: DataCloudflareZeroTrustAccessAiControlsMcpServersResult): any;
export declare class DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustAccessAiControlsMcpServersResult | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessAiControlsMcpServersResult | undefined);
    get authType(): any;
    get createdAt(): any;
    get createdBy(): any;
    get description(): any;
    get error(): any;
    get hostname(): any;
    get id(): any;
    get lastSuccessfulSync(): any;
    get lastSynced(): any;
    get modifiedAt(): any;
    get modifiedBy(): any;
    get name(): any;
    private _prompts;
    get prompts(): any;
    get status(): any;
    private _tools;
    get tools(): any;
    private _updatedPrompts;
    get updatedPrompts(): DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsList;
    private _updatedTools;
    get updatedTools(): DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsList;
}
export declare class DataCloudflareZeroTrustAccessAiControlsMcpServersResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_ai_controls_mcp_servers cloudflare_zero_trust_access_ai_controls_mcp_servers}
*/
export declare class DataCloudflareZeroTrustAccessAiControlsMcpServers extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_access_ai_controls_mcp_servers";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustAccessAiControlsMcpServers resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustAccessAiControlsMcpServers to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustAccessAiControlsMcpServers that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_ai_controls_mcp_servers#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustAccessAiControlsMcpServers to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_ai_controls_mcp_servers cloudflare_zero_trust_access_ai_controls_mcp_servers} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustAccessAiControlsMcpServersConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareZeroTrustAccessAiControlsMcpServersConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _maxItems?;
    get maxItems(): number;
    set maxItems(value: number);
    resetMaxItems(): void;
    get maxItemsInput(): number;
    private _result;
    get result(): DataCloudflareZeroTrustAccessAiControlsMcpServersResultList;
    private _search?;
    get search(): string;
    set search(value: string);
    resetSearch(): void;
    get searchInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
