import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface OrganizationSettingsConfig extends cdktf.TerraformMetaArguments {
    /**
    *  Whether or not advanced security is enabled for new repositories.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_settings#advanced_security_enabled_for_new_repositories OrganizationSettings#advanced_security_enabled_for_new_repositories}
    */
    readonly advancedSecurityEnabledForNewRepositories?: boolean | cdktf.IResolvable;
    /**
    * The billing email address for the organization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_settings#billing_email OrganizationSettings#billing_email}
    */
    readonly billingEmail: string;
    /**
    * The blog URL for the organization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_settings#blog OrganizationSettings#blog}
    */
    readonly blog?: string;
    /**
    * The company name for the organization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_settings#company OrganizationSettings#company}
    */
    readonly company?: string;
    /**
    * The default permission for organization members to create new repositories. Can be one of 'read', 'write', 'admin' or 'none'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_settings#default_repository_permission OrganizationSettings#default_repository_permission}
    */
    readonly defaultRepositoryPermission?: string;
    /**
    * Whether or not dependabot alerts are enabled for new repositories.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_settings#dependabot_alerts_enabled_for_new_repositories OrganizationSettings#dependabot_alerts_enabled_for_new_repositories}
    */
    readonly dependabotAlertsEnabledForNewRepositories?: boolean | cdktf.IResolvable;
    /**
    *  Whether or not dependabot security updates are enabled for new repositories.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_settings#dependabot_security_updates_enabled_for_new_repositories OrganizationSettings#dependabot_security_updates_enabled_for_new_repositories}
    */
    readonly dependabotSecurityUpdatesEnabledForNewRepositories?: boolean | cdktf.IResolvable;
    /**
    * Whether or not dependency graph is enabled for new repositories.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_settings#dependency_graph_enabled_for_new_repositories OrganizationSettings#dependency_graph_enabled_for_new_repositories}
    */
    readonly dependencyGraphEnabledForNewRepositories?: boolean | cdktf.IResolvable;
    /**
    * The description for the organization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_settings#description OrganizationSettings#description}
    */
    readonly description?: string;
    /**
    * The email address for the organization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_settings#email OrganizationSettings#email}
    */
    readonly email?: string;
    /**
    * Whether or not organization projects are enabled for the organization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_settings#has_organization_projects OrganizationSettings#has_organization_projects}
    */
    readonly hasOrganizationProjects?: boolean | cdktf.IResolvable;
    /**
    * Whether or not repository projects are enabled for the organization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_settings#has_repository_projects OrganizationSettings#has_repository_projects}
    */
    readonly hasRepositoryProjects?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_settings#id OrganizationSettings#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The location for the organization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_settings#location OrganizationSettings#location}
    */
    readonly location?: string;
    /**
    * Whether or not organization members can create new internal repositories. For Enterprise Organizations only.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_settings#members_can_create_internal_repositories OrganizationSettings#members_can_create_internal_repositories}
    */
    readonly membersCanCreateInternalRepositories?: boolean | cdktf.IResolvable;
    /**
    * Whether or not organization members can create new pages.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_settings#members_can_create_pages OrganizationSettings#members_can_create_pages}
    */
    readonly membersCanCreatePages?: boolean | cdktf.IResolvable;
    /**
    * Whether or not organization members can create new private pages.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_settings#members_can_create_private_pages OrganizationSettings#members_can_create_private_pages}
    */
    readonly membersCanCreatePrivatePages?: boolean | cdktf.IResolvable;
    /**
    * Whether or not organization members can create new private repositories.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_settings#members_can_create_private_repositories OrganizationSettings#members_can_create_private_repositories}
    */
    readonly membersCanCreatePrivateRepositories?: boolean | cdktf.IResolvable;
    /**
    * Whether or not organization members can create new public pages.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_settings#members_can_create_public_pages OrganizationSettings#members_can_create_public_pages}
    */
    readonly membersCanCreatePublicPages?: boolean | cdktf.IResolvable;
    /**
    * Whether or not organization members can create new public repositories.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_settings#members_can_create_public_repositories OrganizationSettings#members_can_create_public_repositories}
    */
    readonly membersCanCreatePublicRepositories?: boolean | cdktf.IResolvable;
    /**
    * Whether or not organization members can create new repositories.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_settings#members_can_create_repositories OrganizationSettings#members_can_create_repositories}
    */
    readonly membersCanCreateRepositories?: boolean | cdktf.IResolvable;
    /**
    * Whether or not organization members can fork private repositories.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_settings#members_can_fork_private_repositories OrganizationSettings#members_can_fork_private_repositories}
    */
    readonly membersCanForkPrivateRepositories?: boolean | cdktf.IResolvable;
    /**
    * The name for the organization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_settings#name OrganizationSettings#name}
    */
    readonly name?: string;
    /**
    * Whether or not secret scanning is enabled for new repositories.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_settings#secret_scanning_enabled_for_new_repositories OrganizationSettings#secret_scanning_enabled_for_new_repositories}
    */
    readonly secretScanningEnabledForNewRepositories?: boolean | cdktf.IResolvable;
    /**
    * Whether or not secret scanning push protection is enabled for new repositories.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_settings#secret_scanning_push_protection_enabled_for_new_repositories OrganizationSettings#secret_scanning_push_protection_enabled_for_new_repositories}
    */
    readonly secretScanningPushProtectionEnabledForNewRepositories?: boolean | cdktf.IResolvable;
    /**
    * The Twitter username for the organization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_settings#twitter_username OrganizationSettings#twitter_username}
    */
    readonly twitterUsername?: string;
    /**
    * Whether or not commit signatures are required for commits to the organization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_settings#web_commit_signoff_required OrganizationSettings#web_commit_signoff_required}
    */
    readonly webCommitSignoffRequired?: boolean | cdktf.IResolvable;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_settings github_organization_settings}
*/
export declare class OrganizationSettings extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_organization_settings";
    /**
    * Generates CDKTF code for importing a OrganizationSettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the OrganizationSettings to import
    * @param importFromId The id of the existing OrganizationSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the OrganizationSettings to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_settings github_organization_settings} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OrganizationSettingsConfig
    */
    constructor(scope: Construct, id: string, config: OrganizationSettingsConfig);
    private _advancedSecurityEnabledForNewRepositories?;
    get advancedSecurityEnabledForNewRepositories(): boolean | cdktf.IResolvable;
    set advancedSecurityEnabledForNewRepositories(value: boolean | cdktf.IResolvable);
    resetAdvancedSecurityEnabledForNewRepositories(): void;
    get advancedSecurityEnabledForNewRepositoriesInput(): any;
    private _billingEmail?;
    get billingEmail(): string;
    set billingEmail(value: string);
    get billingEmailInput(): string;
    private _blog?;
    get blog(): string;
    set blog(value: string);
    resetBlog(): void;
    get blogInput(): string;
    private _company?;
    get company(): string;
    set company(value: string);
    resetCompany(): void;
    get companyInput(): string;
    private _defaultRepositoryPermission?;
    get defaultRepositoryPermission(): string;
    set defaultRepositoryPermission(value: string);
    resetDefaultRepositoryPermission(): void;
    get defaultRepositoryPermissionInput(): string;
    private _dependabotAlertsEnabledForNewRepositories?;
    get dependabotAlertsEnabledForNewRepositories(): boolean | cdktf.IResolvable;
    set dependabotAlertsEnabledForNewRepositories(value: boolean | cdktf.IResolvable);
    resetDependabotAlertsEnabledForNewRepositories(): void;
    get dependabotAlertsEnabledForNewRepositoriesInput(): any;
    private _dependabotSecurityUpdatesEnabledForNewRepositories?;
    get dependabotSecurityUpdatesEnabledForNewRepositories(): boolean | cdktf.IResolvable;
    set dependabotSecurityUpdatesEnabledForNewRepositories(value: boolean | cdktf.IResolvable);
    resetDependabotSecurityUpdatesEnabledForNewRepositories(): void;
    get dependabotSecurityUpdatesEnabledForNewRepositoriesInput(): any;
    private _dependencyGraphEnabledForNewRepositories?;
    get dependencyGraphEnabledForNewRepositories(): boolean | cdktf.IResolvable;
    set dependencyGraphEnabledForNewRepositories(value: boolean | cdktf.IResolvable);
    resetDependencyGraphEnabledForNewRepositories(): void;
    get dependencyGraphEnabledForNewRepositoriesInput(): any;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _email?;
    get email(): string;
    set email(value: string);
    resetEmail(): void;
    get emailInput(): string;
    private _hasOrganizationProjects?;
    get hasOrganizationProjects(): boolean | cdktf.IResolvable;
    set hasOrganizationProjects(value: boolean | cdktf.IResolvable);
    resetHasOrganizationProjects(): void;
    get hasOrganizationProjectsInput(): any;
    private _hasRepositoryProjects?;
    get hasRepositoryProjects(): boolean | cdktf.IResolvable;
    set hasRepositoryProjects(value: boolean | cdktf.IResolvable);
    resetHasRepositoryProjects(): void;
    get hasRepositoryProjectsInput(): any;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _location?;
    get location(): string;
    set location(value: string);
    resetLocation(): void;
    get locationInput(): string;
    private _membersCanCreateInternalRepositories?;
    get membersCanCreateInternalRepositories(): boolean | cdktf.IResolvable;
    set membersCanCreateInternalRepositories(value: boolean | cdktf.IResolvable);
    resetMembersCanCreateInternalRepositories(): void;
    get membersCanCreateInternalRepositoriesInput(): any;
    private _membersCanCreatePages?;
    get membersCanCreatePages(): boolean | cdktf.IResolvable;
    set membersCanCreatePages(value: boolean | cdktf.IResolvable);
    resetMembersCanCreatePages(): void;
    get membersCanCreatePagesInput(): any;
    private _membersCanCreatePrivatePages?;
    get membersCanCreatePrivatePages(): boolean | cdktf.IResolvable;
    set membersCanCreatePrivatePages(value: boolean | cdktf.IResolvable);
    resetMembersCanCreatePrivatePages(): void;
    get membersCanCreatePrivatePagesInput(): any;
    private _membersCanCreatePrivateRepositories?;
    get membersCanCreatePrivateRepositories(): boolean | cdktf.IResolvable;
    set membersCanCreatePrivateRepositories(value: boolean | cdktf.IResolvable);
    resetMembersCanCreatePrivateRepositories(): void;
    get membersCanCreatePrivateRepositoriesInput(): any;
    private _membersCanCreatePublicPages?;
    get membersCanCreatePublicPages(): boolean | cdktf.IResolvable;
    set membersCanCreatePublicPages(value: boolean | cdktf.IResolvable);
    resetMembersCanCreatePublicPages(): void;
    get membersCanCreatePublicPagesInput(): any;
    private _membersCanCreatePublicRepositories?;
    get membersCanCreatePublicRepositories(): boolean | cdktf.IResolvable;
    set membersCanCreatePublicRepositories(value: boolean | cdktf.IResolvable);
    resetMembersCanCreatePublicRepositories(): void;
    get membersCanCreatePublicRepositoriesInput(): any;
    private _membersCanCreateRepositories?;
    get membersCanCreateRepositories(): boolean | cdktf.IResolvable;
    set membersCanCreateRepositories(value: boolean | cdktf.IResolvable);
    resetMembersCanCreateRepositories(): void;
    get membersCanCreateRepositoriesInput(): any;
    private _membersCanForkPrivateRepositories?;
    get membersCanForkPrivateRepositories(): boolean | cdktf.IResolvable;
    set membersCanForkPrivateRepositories(value: boolean | cdktf.IResolvable);
    resetMembersCanForkPrivateRepositories(): void;
    get membersCanForkPrivateRepositoriesInput(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _secretScanningEnabledForNewRepositories?;
    get secretScanningEnabledForNewRepositories(): boolean | cdktf.IResolvable;
    set secretScanningEnabledForNewRepositories(value: boolean | cdktf.IResolvable);
    resetSecretScanningEnabledForNewRepositories(): void;
    get secretScanningEnabledForNewRepositoriesInput(): any;
    private _secretScanningPushProtectionEnabledForNewRepositories?;
    get secretScanningPushProtectionEnabledForNewRepositories(): boolean | cdktf.IResolvable;
    set secretScanningPushProtectionEnabledForNewRepositories(value: boolean | cdktf.IResolvable);
    resetSecretScanningPushProtectionEnabledForNewRepositories(): void;
    get secretScanningPushProtectionEnabledForNewRepositoriesInput(): any;
    private _twitterUsername?;
    get twitterUsername(): string;
    set twitterUsername(value: string);
    resetTwitterUsername(): void;
    get twitterUsernameInput(): string;
    private _webCommitSignoffRequired?;
    get webCommitSignoffRequired(): boolean | cdktf.IResolvable;
    set webCommitSignoffRequired(value: boolean | cdktf.IResolvable);
    resetWebCommitSignoffRequired(): void;
    get webCommitSignoffRequiredInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
