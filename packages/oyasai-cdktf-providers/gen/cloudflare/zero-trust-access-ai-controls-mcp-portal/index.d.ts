import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ZeroTrustAccessAiControlsMcpPortalConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#account_id ZeroTrustAccessAiControlsMcpPortal#account_id}
    */
    readonly accountId?: string;
    /**
    * Allow remote code execution in Dynamic Workers (beta)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#allow_code_mode ZeroTrustAccessAiControlsMcpPortal#allow_code_mode}
    */
    readonly allowCodeMode?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#description ZeroTrustAccessAiControlsMcpPortal#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#hostname ZeroTrustAccessAiControlsMcpPortal#hostname}
    */
    readonly hostname: string;
    /**
    * portal id
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#id ZeroTrustAccessAiControlsMcpPortal#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#name ZeroTrustAccessAiControlsMcpPortal#name}
    */
    readonly name: string;
    /**
    * Route outbound MCP traffic through Zero Trust Secure Web Gateway
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#secure_web_gateway ZeroTrustAccessAiControlsMcpPortal#secure_web_gateway}
    */
    readonly secureWebGateway?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#servers ZeroTrustAccessAiControlsMcpPortal#servers}
    */
    readonly servers?: ZeroTrustAccessAiControlsMcpPortalServers[] | cdktf.IResolvable;
}
export interface ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#alias ZeroTrustAccessAiControlsMcpPortal#alias}
    */
    readonly alias?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#description ZeroTrustAccessAiControlsMcpPortal#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#enabled ZeroTrustAccessAiControlsMcpPortal#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#name ZeroTrustAccessAiControlsMcpPortal#name}
    */
    readonly name: string;
}
export declare function zeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsToTerraform(struct?: ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts | cdktf.IResolvable): any;
export declare function zeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsToHclTerraform(struct?: ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts | cdktf.IResolvable): any;
export declare class ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts | cdktf.IResolvable | undefined);
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
export declare class ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference;
}
export interface ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#alias ZeroTrustAccessAiControlsMcpPortal#alias}
    */
    readonly alias?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#description ZeroTrustAccessAiControlsMcpPortal#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#enabled ZeroTrustAccessAiControlsMcpPortal#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#name ZeroTrustAccessAiControlsMcpPortal#name}
    */
    readonly name: string;
}
export declare function zeroTrustAccessAiControlsMcpPortalServersUpdatedToolsToTerraform(struct?: ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools | cdktf.IResolvable): any;
export declare function zeroTrustAccessAiControlsMcpPortalServersUpdatedToolsToHclTerraform(struct?: ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools | cdktf.IResolvable): any;
export declare class ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools | cdktf.IResolvable | undefined);
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
export declare class ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference;
}
export interface ZeroTrustAccessAiControlsMcpPortalServers {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#default_disabled ZeroTrustAccessAiControlsMcpPortal#default_disabled}
    */
    readonly defaultDisabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#on_behalf ZeroTrustAccessAiControlsMcpPortal#on_behalf}
    */
    readonly onBehalf?: boolean | cdktf.IResolvable;
    /**
    * server id
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#server_id ZeroTrustAccessAiControlsMcpPortal#server_id}
    */
    readonly serverId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#updated_prompts ZeroTrustAccessAiControlsMcpPortal#updated_prompts}
    */
    readonly updatedPrompts?: ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts[] | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#updated_tools ZeroTrustAccessAiControlsMcpPortal#updated_tools}
    */
    readonly updatedTools?: ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools[] | cdktf.IResolvable;
}
export declare function zeroTrustAccessAiControlsMcpPortalServersToTerraform(struct?: ZeroTrustAccessAiControlsMcpPortalServers | cdktf.IResolvable): any;
export declare function zeroTrustAccessAiControlsMcpPortalServersToHclTerraform(struct?: ZeroTrustAccessAiControlsMcpPortalServers | cdktf.IResolvable): any;
export declare class ZeroTrustAccessAiControlsMcpPortalServersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ZeroTrustAccessAiControlsMcpPortalServers | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessAiControlsMcpPortalServers | cdktf.IResolvable | undefined);
    private _defaultDisabled?;
    get defaultDisabled(): boolean | cdktf.IResolvable;
    set defaultDisabled(value: boolean | cdktf.IResolvable);
    resetDefaultDisabled(): void;
    get defaultDisabledInput(): any;
    private _onBehalf?;
    get onBehalf(): boolean | cdktf.IResolvable;
    set onBehalf(value: boolean | cdktf.IResolvable);
    resetOnBehalf(): void;
    get onBehalfInput(): any;
    private _serverId?;
    get serverId(): string;
    set serverId(value: string);
    get serverIdInput(): string;
    private _updatedPrompts;
    get updatedPrompts(): ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList;
    putUpdatedPrompts(value: ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts[] | cdktf.IResolvable): void;
    resetUpdatedPrompts(): void;
    get updatedPromptsInput(): any;
    private _updatedTools;
    get updatedTools(): ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList;
    putUpdatedTools(value: ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools[] | cdktf.IResolvable): void;
    resetUpdatedTools(): void;
    get updatedToolsInput(): any;
}
export declare class ZeroTrustAccessAiControlsMcpPortalServersList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ZeroTrustAccessAiControlsMcpPortalServers[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ZeroTrustAccessAiControlsMcpPortalServersOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_ai_controls_mcp_portal cloudflare_zero_trust_access_ai_controls_mcp_portal}
*/
export declare class ZeroTrustAccessAiControlsMcpPortal extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_zero_trust_access_ai_controls_mcp_portal";
    /**
    * Generates CDKTF code for importing a ZeroTrustAccessAiControlsMcpPortal resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustAccessAiControlsMcpPortal to import
    * @param importFromId The id of the existing ZeroTrustAccessAiControlsMcpPortal that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustAccessAiControlsMcpPortal to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_ai_controls_mcp_portal cloudflare_zero_trust_access_ai_controls_mcp_portal} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustAccessAiControlsMcpPortalConfig
    */
    constructor(scope: Construct, id: string, config: ZeroTrustAccessAiControlsMcpPortalConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _allowCodeMode?;
    get allowCodeMode(): boolean | cdktf.IResolvable;
    set allowCodeMode(value: boolean | cdktf.IResolvable);
    resetAllowCodeMode(): void;
    get allowCodeModeInput(): any;
    get createdAt(): any;
    get createdBy(): any;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _hostname?;
    get hostname(): string;
    set hostname(value: string);
    get hostnameInput(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get modifiedAt(): any;
    get modifiedBy(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _secureWebGateway?;
    get secureWebGateway(): boolean | cdktf.IResolvable;
    set secureWebGateway(value: boolean | cdktf.IResolvable);
    resetSecureWebGateway(): void;
    get secureWebGatewayInput(): any;
    private _servers;
    get servers(): ZeroTrustAccessAiControlsMcpPortalServersList;
    putServers(value: ZeroTrustAccessAiControlsMcpPortalServers[] | cdktf.IResolvable): void;
    resetServers(): void;
    get serversInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
