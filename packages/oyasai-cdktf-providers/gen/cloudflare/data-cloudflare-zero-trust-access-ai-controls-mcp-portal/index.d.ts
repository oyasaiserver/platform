import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustAccessAiControlsMcpPortalConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_ai_controls_mcp_portal#account_id DataCloudflareZeroTrustAccessAiControlsMcpPortal#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_ai_controls_mcp_portal#filter DataCloudflareZeroTrustAccessAiControlsMcpPortal#filter}
    */
    readonly filter?: DataCloudflareZeroTrustAccessAiControlsMcpPortalFilter;
    /**
    * portal id
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_ai_controls_mcp_portal#id DataCloudflareZeroTrustAccessAiControlsMcpPortal#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
}
export interface DataCloudflareZeroTrustAccessAiControlsMcpPortalFilter {
    /**
    * Search by id, name, hostname
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_ai_controls_mcp_portal#search DataCloudflareZeroTrustAccessAiControlsMcpPortal#search}
    */
    readonly search?: string;
}
export declare function dataCloudflareZeroTrustAccessAiControlsMcpPortalFilterToTerraform(struct?: DataCloudflareZeroTrustAccessAiControlsMcpPortalFilter | cdktf.IResolvable): any;
export declare function dataCloudflareZeroTrustAccessAiControlsMcpPortalFilterToHclTerraform(struct?: DataCloudflareZeroTrustAccessAiControlsMcpPortalFilter | cdktf.IResolvable): any;
export declare class DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessAiControlsMcpPortalFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessAiControlsMcpPortalFilter | cdktf.IResolvable | undefined);
    private _search?;
    get search(): string;
    set search(value: string);
    resetSearch(): void;
    get searchInput(): string;
}
export interface DataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts {
}
export declare function dataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsToTerraform(struct?: DataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts): any;
export declare function dataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsToHclTerraform(struct?: DataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts): any;
export declare class DataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts | undefined);
    get description(): any;
    get enabled(): any;
    get name(): any;
    get portalAlias(): any;
    get serverAlias(): any;
}
export declare class DataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference;
}
export interface DataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedTools {
}
export declare function dataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsToTerraform(struct?: DataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedTools): any;
export declare function dataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsToHclTerraform(struct?: DataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedTools): any;
export declare class DataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedTools | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedTools | undefined);
    get description(): any;
    get enabled(): any;
    get name(): any;
    get portalAlias(): any;
    get serverAlias(): any;
}
export declare class DataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference;
}
export interface DataCloudflareZeroTrustAccessAiControlsMcpPortalServers {
}
export declare function dataCloudflareZeroTrustAccessAiControlsMcpPortalServersToTerraform(struct?: DataCloudflareZeroTrustAccessAiControlsMcpPortalServers): any;
export declare function dataCloudflareZeroTrustAccessAiControlsMcpPortalServersToHclTerraform(struct?: DataCloudflareZeroTrustAccessAiControlsMcpPortalServers): any;
export declare class DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustAccessAiControlsMcpPortalServers | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessAiControlsMcpPortalServers | undefined);
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
    get updatedPrompts(): DataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList;
    private _updatedTools;
    get updatedTools(): DataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList;
}
export declare class DataCloudflareZeroTrustAccessAiControlsMcpPortalServersList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_ai_controls_mcp_portal cloudflare_zero_trust_access_ai_controls_mcp_portal}
*/
export declare class DataCloudflareZeroTrustAccessAiControlsMcpPortal extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_access_ai_controls_mcp_portal";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustAccessAiControlsMcpPortal resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustAccessAiControlsMcpPortal to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustAccessAiControlsMcpPortal that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_ai_controls_mcp_portal#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustAccessAiControlsMcpPortal to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_ai_controls_mcp_portal cloudflare_zero_trust_access_ai_controls_mcp_portal} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustAccessAiControlsMcpPortalConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareZeroTrustAccessAiControlsMcpPortalConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get allowCodeMode(): any;
    get createdAt(): any;
    get createdBy(): any;
    get description(): any;
    private _filter;
    get filter(): DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference;
    putFilter(value: DataCloudflareZeroTrustAccessAiControlsMcpPortalFilter): void;
    resetFilter(): void;
    get filterInput(): any;
    get hostname(): any;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    get modifiedAt(): any;
    get modifiedBy(): any;
    get name(): any;
    get secureWebGateway(): any;
    private _servers;
    get servers(): DataCloudflareZeroTrustAccessAiControlsMcpPortalServersList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
