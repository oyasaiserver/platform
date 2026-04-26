import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ZeroTrustAccessAiControlsMcpServerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_ai_controls_mcp_server#account_id ZeroTrustAccessAiControlsMcpServer#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_ai_controls_mcp_server#auth_credentials ZeroTrustAccessAiControlsMcpServer#auth_credentials}
    */
    readonly authCredentials?: string;
    /**
    * Available values: "oauth", "bearer", "unauthenticated".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_ai_controls_mcp_server#auth_type ZeroTrustAccessAiControlsMcpServer#auth_type}
    */
    readonly authType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_ai_controls_mcp_server#description ZeroTrustAccessAiControlsMcpServer#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_ai_controls_mcp_server#hostname ZeroTrustAccessAiControlsMcpServer#hostname}
    */
    readonly hostname: string;
    /**
    * server id
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_ai_controls_mcp_server#id ZeroTrustAccessAiControlsMcpServer#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_ai_controls_mcp_server#name ZeroTrustAccessAiControlsMcpServer#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_ai_controls_mcp_server#updated_prompts ZeroTrustAccessAiControlsMcpServer#updated_prompts}
    */
    readonly updatedPrompts?: ZeroTrustAccessAiControlsMcpServerUpdatedPrompts[] | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_ai_controls_mcp_server#updated_tools ZeroTrustAccessAiControlsMcpServer#updated_tools}
    */
    readonly updatedTools?: ZeroTrustAccessAiControlsMcpServerUpdatedTools[] | cdktf.IResolvable;
}
export interface ZeroTrustAccessAiControlsMcpServerUpdatedPrompts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_ai_controls_mcp_server#alias ZeroTrustAccessAiControlsMcpServer#alias}
    */
    readonly alias?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_ai_controls_mcp_server#description ZeroTrustAccessAiControlsMcpServer#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_ai_controls_mcp_server#enabled ZeroTrustAccessAiControlsMcpServer#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_ai_controls_mcp_server#name ZeroTrustAccessAiControlsMcpServer#name}
    */
    readonly name: string;
}
export declare function zeroTrustAccessAiControlsMcpServerUpdatedPromptsToTerraform(struct?: ZeroTrustAccessAiControlsMcpServerUpdatedPrompts | cdktf.IResolvable): any;
export declare function zeroTrustAccessAiControlsMcpServerUpdatedPromptsToHclTerraform(struct?: ZeroTrustAccessAiControlsMcpServerUpdatedPrompts | cdktf.IResolvable): any;
export declare class ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ZeroTrustAccessAiControlsMcpServerUpdatedPrompts | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessAiControlsMcpServerUpdatedPrompts | cdktf.IResolvable | undefined);
    private _alias?;
    get alias(): string;
    set alias(value: string);
    resetAlias(): void;
    get aliasInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export declare class ZeroTrustAccessAiControlsMcpServerUpdatedPromptsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ZeroTrustAccessAiControlsMcpServerUpdatedPrompts[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference;
}
export interface ZeroTrustAccessAiControlsMcpServerUpdatedTools {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_ai_controls_mcp_server#alias ZeroTrustAccessAiControlsMcpServer#alias}
    */
    readonly alias?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_ai_controls_mcp_server#description ZeroTrustAccessAiControlsMcpServer#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_ai_controls_mcp_server#enabled ZeroTrustAccessAiControlsMcpServer#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_ai_controls_mcp_server#name ZeroTrustAccessAiControlsMcpServer#name}
    */
    readonly name: string;
}
export declare function zeroTrustAccessAiControlsMcpServerUpdatedToolsToTerraform(struct?: ZeroTrustAccessAiControlsMcpServerUpdatedTools | cdktf.IResolvable): any;
export declare function zeroTrustAccessAiControlsMcpServerUpdatedToolsToHclTerraform(struct?: ZeroTrustAccessAiControlsMcpServerUpdatedTools | cdktf.IResolvable): any;
export declare class ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ZeroTrustAccessAiControlsMcpServerUpdatedTools | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessAiControlsMcpServerUpdatedTools | cdktf.IResolvable | undefined);
    private _alias?;
    get alias(): string;
    set alias(value: string);
    resetAlias(): void;
    get aliasInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export declare class ZeroTrustAccessAiControlsMcpServerUpdatedToolsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ZeroTrustAccessAiControlsMcpServerUpdatedTools[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_ai_controls_mcp_server cloudflare_zero_trust_access_ai_controls_mcp_server}
*/
export declare class ZeroTrustAccessAiControlsMcpServer extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_zero_trust_access_ai_controls_mcp_server";
    /**
    * Generates CDKTF code for importing a ZeroTrustAccessAiControlsMcpServer resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustAccessAiControlsMcpServer to import
    * @param importFromId The id of the existing ZeroTrustAccessAiControlsMcpServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_ai_controls_mcp_server#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustAccessAiControlsMcpServer to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_ai_controls_mcp_server cloudflare_zero_trust_access_ai_controls_mcp_server} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustAccessAiControlsMcpServerConfig
    */
    constructor(scope: Construct, id: string, config: ZeroTrustAccessAiControlsMcpServerConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _authCredentials?;
    get authCredentials(): string;
    set authCredentials(value: string);
    resetAuthCredentials(): void;
    get authCredentialsInput(): string;
    private _authType?;
    get authType(): string;
    set authType(value: string);
    get authTypeInput(): string;
    get createdAt(): any;
    get createdBy(): any;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get error(): any;
    private _hostname?;
    get hostname(): string;
    set hostname(value: string);
    get hostnameInput(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get lastSuccessfulSync(): any;
    get lastSynced(): any;
    get modifiedAt(): any;
    get modifiedBy(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _prompts;
    get prompts(): any;
    get status(): any;
    private _tools;
    get tools(): any;
    private _updatedPrompts;
    get updatedPrompts(): ZeroTrustAccessAiControlsMcpServerUpdatedPromptsList;
    putUpdatedPrompts(value: ZeroTrustAccessAiControlsMcpServerUpdatedPrompts[] | cdktf.IResolvable): void;
    resetUpdatedPrompts(): void;
    get updatedPromptsInput(): any;
    private _updatedTools;
    get updatedTools(): ZeroTrustAccessAiControlsMcpServerUpdatedToolsList;
    putUpdatedTools(value: ZeroTrustAccessAiControlsMcpServerUpdatedTools[] | cdktf.IResolvable): void;
    resetUpdatedTools(): void;
    get updatedToolsInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
