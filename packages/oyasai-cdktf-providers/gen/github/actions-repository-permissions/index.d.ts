import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ActionsRepositoryPermissionsConfig extends cdktf.TerraformMetaArguments {
    /**
    * The permissions policy that controls the actions that are allowed to run. Can be one of: 'all', 'local_only', or 'selected'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_repository_permissions#allowed_actions ActionsRepositoryPermissions#allowed_actions}
    */
    readonly allowedActions?: string;
    /**
    * Should GitHub actions be enabled on this repository.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_repository_permissions#enabled ActionsRepositoryPermissions#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_repository_permissions#id ActionsRepositoryPermissions#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The GitHub repository.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_repository_permissions#repository ActionsRepositoryPermissions#repository}
    */
    readonly repository: string;
    /**
    * Whether pinning to a specific SHA is required for all actions and reusable workflows in a repository.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_repository_permissions#sha_pinning_required ActionsRepositoryPermissions#sha_pinning_required}
    */
    readonly shaPinningRequired?: boolean | cdktf.IResolvable;
    /**
    * allowed_actions_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_repository_permissions#allowed_actions_config ActionsRepositoryPermissions#allowed_actions_config}
    */
    readonly allowedActionsConfig?: ActionsRepositoryPermissionsAllowedActionsConfig;
}
export interface ActionsRepositoryPermissionsAllowedActionsConfig {
    /**
    * Whether GitHub-owned actions are allowed in the repository.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_repository_permissions#github_owned_allowed ActionsRepositoryPermissions#github_owned_allowed}
    */
    readonly githubOwnedAllowed: boolean | cdktf.IResolvable;
    /**
    * Specifies a list of string-matching patterns to allow specific action(s). Wildcards, tags, and SHAs are allowed. For example, 'monalisa/octocat@', 'monalisa/octocat@v2', 'monalisa/'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_repository_permissions#patterns_allowed ActionsRepositoryPermissions#patterns_allowed}
    */
    readonly patternsAllowed?: string[];
    /**
    * Whether actions in GitHub Marketplace from verified creators are allowed. Set to 'true' to allow all GitHub Marketplace actions by verified creators.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_repository_permissions#verified_allowed ActionsRepositoryPermissions#verified_allowed}
    */
    readonly verifiedAllowed?: boolean | cdktf.IResolvable;
}
export declare function actionsRepositoryPermissionsAllowedActionsConfigToTerraform(struct?: ActionsRepositoryPermissionsAllowedActionsConfigOutputReference | ActionsRepositoryPermissionsAllowedActionsConfig): any;
export declare function actionsRepositoryPermissionsAllowedActionsConfigToHclTerraform(struct?: ActionsRepositoryPermissionsAllowedActionsConfigOutputReference | ActionsRepositoryPermissionsAllowedActionsConfig): any;
export declare class ActionsRepositoryPermissionsAllowedActionsConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ActionsRepositoryPermissionsAllowedActionsConfig | undefined;
    set internalValue(value: ActionsRepositoryPermissionsAllowedActionsConfig | undefined);
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
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_repository_permissions github_actions_repository_permissions}
*/
export declare class ActionsRepositoryPermissions extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_actions_repository_permissions";
    /**
    * Generates CDKTF code for importing a ActionsRepositoryPermissions resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ActionsRepositoryPermissions to import
    * @param importFromId The id of the existing ActionsRepositoryPermissions that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_repository_permissions#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ActionsRepositoryPermissions to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_repository_permissions github_actions_repository_permissions} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ActionsRepositoryPermissionsConfig
    */
    constructor(scope: Construct, id: string, config: ActionsRepositoryPermissionsConfig);
    private _allowedActions?;
    get allowedActions(): string;
    set allowedActions(value: string);
    resetAllowedActions(): void;
    get allowedActionsInput(): string;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): any;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _repository?;
    get repository(): string;
    set repository(value: string);
    get repositoryInput(): string;
    private _shaPinningRequired?;
    get shaPinningRequired(): boolean | cdktf.IResolvable;
    set shaPinningRequired(value: boolean | cdktf.IResolvable);
    resetShaPinningRequired(): void;
    get shaPinningRequiredInput(): any;
    private _allowedActionsConfig;
    get allowedActionsConfig(): ActionsRepositoryPermissionsAllowedActionsConfigOutputReference;
    putAllowedActionsConfig(value: ActionsRepositoryPermissionsAllowedActionsConfig): void;
    resetAllowedActionsConfig(): void;
    get allowedActionsConfigInput(): ActionsRepositoryPermissionsAllowedActionsConfig;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
