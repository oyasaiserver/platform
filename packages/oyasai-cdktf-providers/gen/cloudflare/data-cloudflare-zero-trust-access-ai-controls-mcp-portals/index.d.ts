import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustAccessAiControlsMcpPortalsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_ai_controls_mcp_portals#account_id DataCloudflareZeroTrustAccessAiControlsMcpPortals#account_id}
    */
    readonly accountId?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_ai_controls_mcp_portals#max_items DataCloudflareZeroTrustAccessAiControlsMcpPortals#max_items}
    */
    readonly maxItems?: number;
    /**
    * Search by id, name, hostname
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_ai_controls_mcp_portals#search DataCloudflareZeroTrustAccessAiControlsMcpPortals#search}
    */
    readonly search?: string;
}
export interface DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPrompts {
}
export declare function dataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsToTerraform(struct?: DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPrompts): any;
export declare function dataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsToHclTerraform(struct?: DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPrompts): any;
export declare class DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPrompts | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPrompts | undefined);
    get description(): any;
    get enabled(): any;
    get name(): any;
    get portalAlias(): any;
    get serverAlias(): any;
}
export declare class DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference;
}
export interface DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedTools {
}
export declare function dataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsToTerraform(struct?: DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedTools): any;
export declare function dataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsToHclTerraform(struct?: DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedTools): any;
export declare class DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedTools | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedTools | undefined);
    get description(): any;
    get enabled(): any;
    get name(): any;
    get portalAlias(): any;
    get serverAlias(): any;
}
export declare class DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference;
}
export interface DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServers {
}
export declare function dataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersToTerraform(struct?: DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServers): any;
export declare function dataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersToHclTerraform(struct?: DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServers): any;
export declare class DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServers | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServers | undefined);
    get authType(): any;
    get createdAt(): any;
    get createdBy(): any;
    get defaultDisabled(): any;
    get description(): any;
    get error(): any;
    get hostname(): any;
    get id(): any;
    get lastSuccessfulSync(): any;
    get lastSynced(): any;
    get modifiedAt(): any;
    get modifiedBy(): any;
    get name(): any;
    get onBehalf(): any;
    private _prompts;
    get prompts(): any;
    get status(): any;
    private _tools;
    get tools(): any;
    private _updatedPrompts;
    get updatedPrompts(): DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsList;
    private _updatedTools;
    get updatedTools(): DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsList;
}
export declare class DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference;
}
export interface DataCloudflareZeroTrustAccessAiControlsMcpPortalsResult {
}
export declare function dataCloudflareZeroTrustAccessAiControlsMcpPortalsResultToTerraform(struct?: DataCloudflareZeroTrustAccessAiControlsMcpPortalsResult): any;
export declare function dataCloudflareZeroTrustAccessAiControlsMcpPortalsResultToHclTerraform(struct?: DataCloudflareZeroTrustAccessAiControlsMcpPortalsResult): any;
export declare class DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustAccessAiControlsMcpPortalsResult | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessAiControlsMcpPortalsResult | undefined);
    get allowCodeMode(): any;
    get createdAt(): any;
    get createdBy(): any;
    get description(): any;
    get hostname(): any;
    get id(): any;
    get modifiedAt(): any;
    get modifiedBy(): any;
    get name(): any;
    get secureWebGateway(): any;
    private _servers;
    get servers(): DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersList;
}
export declare class DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_ai_controls_mcp_portals cloudflare_zero_trust_access_ai_controls_mcp_portals}
*/
export declare class DataCloudflareZeroTrustAccessAiControlsMcpPortals extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_access_ai_controls_mcp_portals";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustAccessAiControlsMcpPortals resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustAccessAiControlsMcpPortals to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustAccessAiControlsMcpPortals that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_ai_controls_mcp_portals#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustAccessAiControlsMcpPortals to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_ai_controls_mcp_portals cloudflare_zero_trust_access_ai_controls_mcp_portals} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustAccessAiControlsMcpPortalsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareZeroTrustAccessAiControlsMcpPortalsConfig);
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
    get result(): DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultList;
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
