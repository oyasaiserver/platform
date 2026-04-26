import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ActionsOrganizationPermissionsConfig extends cdktf.TerraformMetaArguments {
    /**
    * The permissions policy that controls the actions that are allowed to run. Can be one of: 'all', 'local_only', or 'selected'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_permissions#allowed_actions ActionsOrganizationPermissions#allowed_actions}
    */
    readonly allowedActions?: string;
    /**
    * The policy that controls the repositories in the organization that are allowed to run GitHub Actions. Can be one of: 'all', 'none', or 'selected'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_permissions#enabled_repositories ActionsOrganizationPermissions#enabled_repositories}
    */
    readonly enabledRepositories: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_permissions#id ActionsOrganizationPermissions#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Whether pinning to a specific SHA is required for all actions and reusable workflows in an organization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_permissions#sha_pinning_required ActionsOrganizationPermissions#sha_pinning_required}
    */
    readonly shaPinningRequired?: boolean | cdktf.IResolvable;
    /**
    * allowed_actions_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_permissions#allowed_actions_config ActionsOrganizationPermissions#allowed_actions_config}
    */
    readonly allowedActionsConfig?: ActionsOrganizationPermissionsAllowedActionsConfig;
    /**
    * enabled_repositories_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_permissions#enabled_repositories_config ActionsOrganizationPermissions#enabled_repositories_config}
    */
    readonly enabledRepositoriesConfig?: ActionsOrganizationPermissionsEnabledRepositoriesConfig;
}
export interface ActionsOrganizationPermissionsAllowedActionsConfig {
    /**
    * Whether GitHub-owned actions are allowed in the organization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_permissions#github_owned_allowed ActionsOrganizationPermissions#github_owned_allowed}
    */
    readonly githubOwnedAllowed: boolean | cdktf.IResolvable;
    /**
    * Specifies a list of string-matching patterns to allow specific action(s). Wildcards, tags, and SHAs are allowed. For example, 'monalisa/octocat@', 'monalisa/octocat@v2', 'monalisa/'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_permissions#patterns_allowed ActionsOrganizationPermissions#patterns_allowed}
    */
    readonly patternsAllowed?: string[];
    /**
    * Whether actions in GitHub Marketplace from verified creators are allowed. Set to 'true' to allow all GitHub Marketplace actions by verified creators.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_permissions#verified_allowed ActionsOrganizationPermissions#verified_allowed}
    */
    readonly verifiedAllowed?: boolean | cdktf.IResolvable;
}
export declare function actionsOrganizationPermissionsAllowedActionsConfigToTerraform(struct?: ActionsOrganizationPermissionsAllowedActionsConfigOutputReference | ActionsOrganizationPermissionsAllowedActionsConfig): any;
export declare function actionsOrganizationPermissionsAllowedActionsConfigToHclTerraform(struct?: ActionsOrganizationPermissionsAllowedActionsConfigOutputReference | ActionsOrganizationPermissionsAllowedActionsConfig): any;
export declare class ActionsOrganizationPermissionsAllowedActionsConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ActionsOrganizationPermissionsAllowedActionsConfig | undefined;
    set internalValue(value: ActionsOrganizationPermissionsAllowedActionsConfig | undefined);
    private _githubOwnedAllowed?;
    get githubOwnedAllowed(): boolean | cdktf.IResolvable;
    set githubOwnedAllowed(value: boolean | cdktf.IResolvable);
    get githubOwnedAllowedInput(): any;
    private _patternsAllowed?;
    get patternsAllowed(): string[];
    set patternsAllowed(value: string[]);
    resetPatternsAllowed(): void;
    get patternsAllowedInput(): string[];
    private _verifiedAllowed?;
    get verifiedAllowed(): boolean | cdktf.IResolvable;
    set verifiedAllowed(value: boolean | cdktf.IResolvable);
    resetVerifiedAllowed(): void;
    get verifiedAllowedInput(): any;
}
export interface ActionsOrganizationPermissionsEnabledRepositoriesConfig {
    /**
    * List of repository IDs to enable for GitHub Actions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_permissions#repository_ids ActionsOrganizationPermissions#repository_ids}
    */
    readonly repositoryIds: number[];
}
export declare function actionsOrganizationPermissionsEnabledRepositoriesConfigToTerraform(struct?: ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference | ActionsOrganizationPermissionsEnabledRepositoriesConfig): any;
export declare function actionsOrganizationPermissionsEnabledRepositoriesConfigToHclTerraform(struct?: ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference | ActionsOrganizationPermissionsEnabledRepositoriesConfig): any;
export declare class ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ActionsOrganizationPermissionsEnabledRepositoriesConfig | undefined;
    set internalValue(value: ActionsOrganizationPermissionsEnabledRepositoriesConfig | undefined);
    private _repositoryIds?;
    get repositoryIds(): number[];
    set repositoryIds(value: number[]);
    get repositoryIdsInput(): number[];
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_permissions github_actions_organization_permissions}
*/
export declare class ActionsOrganizationPermissions extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_actions_organization_permissions";
    /**
    * Generates CDKTF code for importing a ActionsOrganizationPermissions resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ActionsOrganizationPermissions to import
    * @param importFromId The id of the existing ActionsOrganizationPermissions that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_permissions#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ActionsOrganizationPermissions to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_permissions github_actions_organization_permissions} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ActionsOrganizationPermissionsConfig
    */
    constructor(scope: Construct, id: string, config: ActionsOrganizationPermissionsConfig);
    private _allowedActions?;
    get allowedActions(): string;
    set allowedActions(value: string);
    resetAllowedActions(): void;
    get allowedActionsInput(): string;
    private _enabledRepositories?;
    get enabledRepositories(): string;
    set enabledRepositories(value: string);
    get enabledRepositoriesInput(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _shaPinningRequired?;
    get shaPinningRequired(): boolean | cdktf.IResolvable;
    set shaPinningRequired(value: boolean | cdktf.IResolvable);
    resetShaPinningRequired(): void;
    get shaPinningRequiredInput(): any;
    private _allowedActionsConfig;
    get allowedActionsConfig(): ActionsOrganizationPermissionsAllowedActionsConfigOutputReference;
    putAllowedActionsConfig(value: ActionsOrganizationPermissionsAllowedActionsConfig): void;
    resetAllowedActionsConfig(): void;
    get allowedActionsConfigInput(): ActionsOrganizationPermissionsAllowedActionsConfig;
    private _enabledRepositoriesConfig;
    get enabledRepositoriesConfig(): ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference;
    putEnabledRepositoriesConfig(value: ActionsOrganizationPermissionsEnabledRepositoriesConfig): void;
    resetEnabledRepositoriesConfig(): void;
    get enabledRepositoriesConfigInput(): ActionsOrganizationPermissionsEnabledRepositoriesConfig;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
