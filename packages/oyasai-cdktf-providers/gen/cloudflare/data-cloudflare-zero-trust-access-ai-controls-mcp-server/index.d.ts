import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustAccessAiControlsMcpServerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_ai_controls_mcp_server#account_id DataCloudflareZeroTrustAccessAiControlsMcpServer#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_ai_controls_mcp_server#filter DataCloudflareZeroTrustAccessAiControlsMcpServer#filter}
    */
    readonly filter?: DataCloudflareZeroTrustAccessAiControlsMcpServerFilter;
    /**
    * server id
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_ai_controls_mcp_server#id DataCloudflareZeroTrustAccessAiControlsMcpServer#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
}
export interface DataCloudflareZeroTrustAccessAiControlsMcpServerFilter {
    /**
    * Search by id, name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_ai_controls_mcp_server#search DataCloudflareZeroTrustAccessAiControlsMcpServer#search}
    */
    readonly search?: string;
}
export declare function dataCloudflareZeroTrustAccessAiControlsMcpServerFilterToTerraform(struct?: DataCloudflareZeroTrustAccessAiControlsMcpServerFilter | cdktf.IResolvable): any;
export declare function dataCloudflareZeroTrustAccessAiControlsMcpServerFilterToHclTerraform(struct?: DataCloudflareZeroTrustAccessAiControlsMcpServerFilter | cdktf.IResolvable): any;
export declare class DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessAiControlsMcpServerFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessAiControlsMcpServerFilter | cdktf.IResolvable | undefined);
    private _search?;
    get search(): string;
    set search(value: string);
    resetSearch(): void;
    get searchInput(): string;
}
export interface DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPrompts {
}
export declare function dataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsToTerraform(struct?: DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPrompts): any;
export declare function dataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsToHclTerraform(struct?: DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPrompts): any;
export declare class DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPrompts | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPrompts | undefined);
    get alias(): any;
    get description(): any;
    get enabled(): any;
    get name(): any;
}
export declare class DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference;
}
export interface DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedTools {
}
export declare function dataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsToTerraform(struct?: DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedTools): any;
export declare function dataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsToHclTerraform(struct?: DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedTools): any;
export declare class DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedTools | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedTools | undefined);
    get alias(): any;
    get description(): any;
    get enabled(): any;
    get name(): any;
}
export declare class DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_ai_controls_mcp_server cloudflare_zero_trust_access_ai_controls_mcp_server}
*/
export declare class DataCloudflareZeroTrustAccessAiControlsMcpServer extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_access_ai_controls_mcp_server";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustAccessAiControlsMcpServer resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustAccessAiControlsMcpServer to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustAccessAiControlsMcpServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_ai_controls_mcp_server#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustAccessAiControlsMcpServer to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_ai_controls_mcp_server cloudflare_zero_trust_access_ai_controls_mcp_server} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustAccessAiControlsMcpServerConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareZeroTrustAccessAiControlsMcpServerConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get authType(): any;
    get createdAt(): any;
    get createdBy(): any;
    get description(): any;
    get error(): any;
    private _filter;
    get filter(): DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference;
    putFilter(value: DataCloudflareZeroTrustAccessAiControlsMcpServerFilter): void;
    resetFilter(): void;
    get filterInput(): any;
    get hostname(): any;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
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
    get updatedPrompts(): DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsList;
    private _updatedTools;
    get updatedTools(): DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
