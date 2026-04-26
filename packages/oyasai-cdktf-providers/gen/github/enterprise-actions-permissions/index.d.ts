import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EnterpriseActionsPermissionsConfig extends cdktf.TerraformMetaArguments {
    /**
    * The permissions policy that controls the actions that are allowed to run. Can be one of: 'all', 'local_only', or 'selected'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_actions_permissions#allowed_actions EnterpriseActionsPermissions#allowed_actions}
    */
    readonly allowedActions?: string;
    /**
    * The policy that controls the organizations in the enterprise that are allowed to run GitHub Actions. Can be one of: 'all', 'none', or 'selected'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_actions_permissions#enabled_organizations EnterpriseActionsPermissions#enabled_organizations}
    */
    readonly enabledOrganizations: string;
    /**
    * The slug of the enterprise.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_actions_permissions#enterprise_slug EnterpriseActionsPermissions#enterprise_slug}
    */
    readonly enterpriseSlug: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_actions_permissions#id EnterpriseActionsPermissions#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * allowed_actions_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_actions_permissions#allowed_actions_config EnterpriseActionsPermissions#allowed_actions_config}
    */
    readonly allowedActionsConfig?: EnterpriseActionsPermissionsAllowedActionsConfig;
    /**
    * enabled_organizations_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_actions_permissions#enabled_organizations_config EnterpriseActionsPermissions#enabled_organizations_config}
    */
    readonly enabledOrganizationsConfig?: EnterpriseActionsPermissionsEnabledOrganizationsConfig;
}
export interface EnterpriseActionsPermissionsAllowedActionsConfig {
    /**
    * Whether GitHub-owned actions are allowed in the enterprise.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_actions_permissions#github_owned_allowed EnterpriseActionsPermissions#github_owned_allowed}
    */
    readonly githubOwnedAllowed: boolean | cdktf.IResolvable;
    /**
    * Specifies a list of string-matching patterns to allow specific action(s). Wildcards, tags, and SHAs are allowed. For example, 'monalisa/octocat@', 'monalisa/octocat@v2', 'monalisa/'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_actions_permissions#patterns_allowed EnterpriseActionsPermissions#patterns_allowed}
    */
    readonly patternsAllowed?: string[];
    /**
    * Whether actions in GitHub Marketplace from verified creators are allowed. Set to 'true' to allow all GitHub Marketplace actions by verified creators.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_actions_permissions#verified_allowed EnterpriseActionsPermissions#verified_allowed}
    */
    readonly verifiedAllowed?: boolean | cdktf.IResolvable;
}
export declare function enterpriseActionsPermissionsAllowedActionsConfigToTerraform(struct?: EnterpriseActionsPermissionsAllowedActionsConfigOutputReference | EnterpriseActionsPermissionsAllowedActionsConfig): any;
export declare function enterpriseActionsPermissionsAllowedActionsConfigToHclTerraform(struct?: EnterpriseActionsPermissionsAllowedActionsConfigOutputReference | EnterpriseActionsPermissionsAllowedActionsConfig): any;
export declare class EnterpriseActionsPermissionsAllowedActionsConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EnterpriseActionsPermissionsAllowedActionsConfig | undefined;
    set internalValue(value: EnterpriseActionsPermissionsAllowedActionsConfig | undefined);
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
export interface EnterpriseActionsPermissionsEnabledOrganizationsConfig {
    /**
    * List of organization IDs to enable for GitHub Actions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_actions_permissions#organization_ids EnterpriseActionsPermissions#organization_ids}
    */
    readonly organizationIds: number[];
}
export declare function enterpriseActionsPermissionsEnabledOrganizationsConfigToTerraform(struct?: EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference | EnterpriseActionsPermissionsEnabledOrganizationsConfig): any;
export declare function enterpriseActionsPermissionsEnabledOrganizationsConfigToHclTerraform(struct?: EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference | EnterpriseActionsPermissionsEnabledOrganizationsConfig): any;
export declare class EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EnterpriseActionsPermissionsEnabledOrganizationsConfig | undefined;
    set internalValue(value: EnterpriseActionsPermissionsEnabledOrganizationsConfig | undefined);
    private _organizationIds?;
    get organizationIds(): number[];
    set organizationIds(value: number[]);
    get organizationIdsInput(): number[];
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_actions_permissions github_enterprise_actions_permissions}
*/
export declare class EnterpriseActionsPermissions extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_enterprise_actions_permissions";
    /**
    * Generates CDKTF code for importing a EnterpriseActionsPermissions resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EnterpriseActionsPermissions to import
    * @param importFromId The id of the existing EnterpriseActionsPermissions that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_actions_permissions#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EnterpriseActionsPermissions to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_actions_permissions github_enterprise_actions_permissions} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EnterpriseActionsPermissionsConfig
    */
    constructor(scope: Construct, id: string, config: EnterpriseActionsPermissionsConfig);
    private _allowedActions?;
    get allowedActions(): string;
    set allowedActions(value: string);
    resetAllowedActions(): void;
    get allowedActionsInput(): string;
    private _enabledOrganizations?;
    get enabledOrganizations(): string;
    set enabledOrganizations(value: string);
    get enabledOrganizationsInput(): string;
    private _enterpriseSlug?;
    get enterpriseSlug(): string;
    set enterpriseSlug(value: string);
    get enterpriseSlugInput(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _allowedActionsConfig;
    get allowedActionsConfig(): EnterpriseActionsPermissionsAllowedActionsConfigOutputReference;
    putAllowedActionsConfig(value: EnterpriseActionsPermissionsAllowedActionsConfig): void;
    resetAllowedActionsConfig(): void;
    get allowedActionsConfigInput(): EnterpriseActionsPermissionsAllowedActionsConfig;
    private _enabledOrganizationsConfig;
    get enabledOrganizationsConfig(): EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference;
    putEnabledOrganizationsConfig(value: EnterpriseActionsPermissionsEnabledOrganizationsConfig): void;
    resetEnabledOrganizationsConfig(): void;
    get enabledOrganizationsConfigInput(): EnterpriseActionsPermissionsEnabledOrganizationsConfig;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
