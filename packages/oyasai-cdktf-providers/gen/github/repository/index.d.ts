import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RepositoryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Set to 'true' to allow auto-merging pull requests on the repository.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository#allow_auto_merge Repository#allow_auto_merge}
    */
    readonly allowAutoMerge?: boolean | cdktf.IResolvable;
    /**
    * Set to 'true' to allow private forking on the repository; this is only relevant if the repository is owned by an organization and is private or internal.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository#allow_forking Repository#allow_forking}
    */
    readonly allowForking?: boolean | cdktf.IResolvable;
    /**
    * Set to 'false' to disable merge commits on the repository.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository#allow_merge_commit Repository#allow_merge_commit}
    */
    readonly allowMergeCommit?: boolean | cdktf.IResolvable;
    /**
    * Set to 'false' to disable rebase merges on the repository.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository#allow_rebase_merge Repository#allow_rebase_merge}
    */
    readonly allowRebaseMerge?: boolean | cdktf.IResolvable;
    /**
    * Set to 'false' to disable squash merges on the repository.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository#allow_squash_merge Repository#allow_squash_merge}
    */
    readonly allowSquashMerge?: boolean | cdktf.IResolvable;
    /**
    *  Set to 'true' to always suggest updating pull request branches.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository#allow_update_branch Repository#allow_update_branch}
    */
    readonly allowUpdateBranch?: boolean | cdktf.IResolvable;
    /**
    * Set to 'true' to archive the repository instead of deleting on destroy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository#archive_on_destroy Repository#archive_on_destroy}
    */
    readonly archiveOnDestroy?: boolean | cdktf.IResolvable;
    /**
    * Specifies if the repository should be archived. Defaults to 'false'. NOTE Currently, the API does not support unarchiving.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository#archived Repository#archived}
    */
    readonly archived?: boolean | cdktf.IResolvable;
    /**
    * Set to 'true' to produce an initial commit in the repository.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository#auto_init Repository#auto_init}
    */
    readonly autoInit?: boolean | cdktf.IResolvable;
    /**
    * Can only be set after initial repository creation, and only if the target branch exists
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository#default_branch Repository#default_branch}
    */
    readonly defaultBranch?: string;
    /**
    * Automatically delete head branch after a pull request is merged. Defaults to 'false'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository#delete_branch_on_merge Repository#delete_branch_on_merge}
    */
    readonly deleteBranchOnMerge?: boolean | cdktf.IResolvable;
    /**
    * A description of the repository.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository#description Repository#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository#etag Repository#etag}
    */
    readonly etag?: string;
    /**
    * Set to 'true' to fork an existing repository.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository#fork Repository#fork}
    */
    readonly fork?: string;
    /**
    * Use the name of the template without the extension. For example, 'Haskell'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository#gitignore_template Repository#gitignore_template}
    */
    readonly gitignoreTemplate?: string;
    /**
    * Set to 'true' to enable GitHub Discussions on the repository. Defaults to 'false'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository#has_discussions Repository#has_discussions}
    */
    readonly hasDiscussions?: boolean | cdktf.IResolvable;
    /**
    * Set to 'true' to enable the (deprecated) downloads features on the repository.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository#has_downloads Repository#has_downloads}
    */
    readonly hasDownloads?: boolean | cdktf.IResolvable;
    /**
    * Set to 'true' to enable the GitHub Issues features on the repository
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository#has_issues Repository#has_issues}
    */
    readonly hasIssues?: boolean | cdktf.IResolvable;
    /**
    * Set to 'true' to enable the GitHub Projects features on the repository. Per the GitHub documentation when in an organization that has disabled repository projects it will default to 'false' and will otherwise default to 'true'. If you specify 'true' when it has been disabled it will return an error.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository#has_projects Repository#has_projects}
    */
    readonly hasProjects?: boolean | cdktf.IResolvable;
    /**
    * Set to 'true' to enable the GitHub Wiki features on the repository.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository#has_wiki Repository#has_wiki}
    */
    readonly hasWiki?: boolean | cdktf.IResolvable;
    /**
    * URL of a page describing the project.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository#homepage_url Repository#homepage_url}
    */
    readonly homepageUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository#id Repository#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository#ignore_vulnerability_alerts_during_read Repository#ignore_vulnerability_alerts_during_read}
    */
    readonly ignoreVulnerabilityAlertsDuringRead?: boolean | cdktf.IResolvable;
    /**
    * Set to 'true' to tell GitHub that this is a template repository.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository#is_template Repository#is_template}
    */
    readonly isTemplate?: boolean | cdktf.IResolvable;
    /**
    * Use the name of the template without the extension. For example, 'mit' or 'mpl-2.0'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository#license_template Repository#license_template}
    */
    readonly licenseTemplate?: string;
    /**
    * Can be 'PR_BODY', 'PR_TITLE', or 'BLANK' for a default merge commit message.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository#merge_commit_message Repository#merge_commit_message}
    */
    readonly mergeCommitMessage?: string;
    /**
    * Can be 'PR_TITLE' or 'MERGE_MESSAGE' for a default merge commit title.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository#merge_commit_title Repository#merge_commit_title}
    */
    readonly mergeCommitTitle?: string;
    /**
    * The name of the repository.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository#name Repository#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository#private Repository#private}
    */
    readonly private?: boolean | cdktf.IResolvable;
    /**
    * The owner of the source repository to fork from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository#source_owner Repository#source_owner}
    */
    readonly sourceOwner?: string;
    /**
    * The name of the source repository to fork from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository#source_repo Repository#source_repo}
    */
    readonly sourceRepo?: string;
    /**
    * Can be 'PR_BODY', 'COMMIT_MESSAGES', or 'BLANK' for a default squash merge commit message.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository#squash_merge_commit_message Repository#squash_merge_commit_message}
    */
    readonly squashMergeCommitMessage?: string;
    /**
    * Can be 'PR_TITLE' or 'COMMIT_OR_PR_TITLE' for a default squash merge commit title.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository#squash_merge_commit_title Repository#squash_merge_commit_title}
    */
    readonly squashMergeCommitTitle?: string;
    /**
    * The list of topics of the repository.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository#topics Repository#topics}
    */
    readonly topics?: string[];
    /**
    * Can be 'public' or 'private'. If your organization is associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+, visibility can also be 'internal'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository#visibility Repository#visibility}
    */
    readonly visibility?: string;
    /**
    * Set to 'true' to enable security alerts for vulnerable dependencies. Enabling requires alerts to be enabled on the owner level. (Note for importing: GitHub enables the alerts on all repos by default). Note that vulnerability alerts have not been successfully tested on any GitHub Enterprise instance and may be unavailable in those settings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository#vulnerability_alerts Repository#vulnerability_alerts}
    */
    readonly vulnerabilityAlerts?: boolean | cdktf.IResolvable;
    /**
    * Require contributors to sign off on web-based commits.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository#web_commit_signoff_required Repository#web_commit_signoff_required}
    */
    readonly webCommitSignoffRequired?: boolean | cdktf.IResolvable;
    /**
    * pages block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository#pages Repository#pages}
    */
    readonly pages?: RepositoryPages;
    /**
    * security_and_analysis block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository#security_and_analysis Repository#security_and_analysis}
    */
    readonly securityAndAnalysis?: RepositorySecurityAndAnalysis;
    /**
    * template block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository#template Repository#template}
    */
    readonly template?: RepositoryTemplate;
}
export interface RepositoryPagesSource {
    /**
    * The repository branch used to publish the site's source files. (i.e. 'main' or 'gh-pages')
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository#branch Repository#branch}
    */
    readonly branch: string;
    /**
    * The repository directory from which the site publishes (Default: '/')
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository#path Repository#path}
    */
    readonly path?: string;
}
export declare function repositoryPagesSourceToTerraform(struct?: RepositoryPagesSourceOutputReference | RepositoryPagesSource): any;
export declare function repositoryPagesSourceToHclTerraform(struct?: RepositoryPagesSourceOutputReference | RepositoryPagesSource): any;
export declare class RepositoryPagesSourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RepositoryPagesSource | undefined;
    set internalValue(value: RepositoryPagesSource | undefined);
    private _branch?;
    get branch(): string;
    set branch(value: string);
    get branchInput(): string;
    private _path?;
    get path(): string;
    set path(value: string);
    resetPath(): void;
    get pathInput(): string;
}
export interface RepositoryPages {
    /**
    * The type the page should be sourced.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository#build_type Repository#build_type}
    */
    readonly buildType?: string;
    /**
    * The custom domain for the repository. This can only be set after the repository has been created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository#cname Repository#cname}
    */
    readonly cname?: string;
    /**
    * source block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository#source Repository#source}
    */
    readonly source?: RepositoryPagesSource;
}
export declare function repositoryPagesToTerraform(struct?: RepositoryPagesOutputReference | RepositoryPages): any;
export declare function repositoryPagesToHclTerraform(struct?: RepositoryPagesOutputReference | RepositoryPages): any;
export declare class RepositoryPagesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RepositoryPages | undefined;
    set internalValue(value: RepositoryPages | undefined);
    private _buildType?;
    get buildType(): string;
    set buildType(value: string);
    resetBuildType(): void;
    get buildTypeInput(): string;
    private _cname?;
    get cname(): string;
    set cname(value: string);
    resetCname(): void;
    get cnameInput(): string;
    get custom404(): any;
    get htmlUrl(): any;
    get status(): any;
    get url(): any;
    private _source;
    get source(): RepositoryPagesSourceOutputReference;
    putSource(value: RepositoryPagesSource): void;
    resetSource(): void;
    get sourceInput(): RepositoryPagesSource;
}
export interface RepositorySecurityAndAnalysisAdvancedSecurity {
    /**
    * Set to 'enabled' to enable advanced security features on the repository. Can be 'enabled' or 'disabled', This value being present when split licensing is enabled will error out.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository#status Repository#status}
    */
    readonly status: string;
}
export declare function repositorySecurityAndAnalysisAdvancedSecurityToTerraform(struct?: RepositorySecurityAndAnalysisAdvancedSecurityOutputReference | RepositorySecurityAndAnalysisAdvancedSecurity): any;
export declare function repositorySecurityAndAnalysisAdvancedSecurityToHclTerraform(struct?: RepositorySecurityAndAnalysisAdvancedSecurityOutputReference | RepositorySecurityAndAnalysisAdvancedSecurity): any;
export declare class RepositorySecurityAndAnalysisAdvancedSecurityOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RepositorySecurityAndAnalysisAdvancedSecurity | undefined;
    set internalValue(value: RepositorySecurityAndAnalysisAdvancedSecurity | undefined);
    private _status?;
    get status(): string;
    set status(value: string);
    get statusInput(): string;
}
export interface RepositorySecurityAndAnalysisCodeSecurity {
    /**
    * Set to 'enabled' to enable code security on the repository. Can be 'enabled' or 'disabled'. If set to 'enabled', the repository's visibility must be 'public', 'security_and_analysis[0].advanced_security[0].status' must also be set to 'enabled', or your Organization must have split licensing for Advanced security.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository#status Repository#status}
    */
    readonly status: string;
}
export declare function repositorySecurityAndAnalysisCodeSecurityToTerraform(struct?: RepositorySecurityAndAnalysisCodeSecurityOutputReference | RepositorySecurityAndAnalysisCodeSecurity): any;
export declare function repositorySecurityAndAnalysisCodeSecurityToHclTerraform(struct?: RepositorySecurityAndAnalysisCodeSecurityOutputReference | RepositorySecurityAndAnalysisCodeSecurity): any;
export declare class RepositorySecurityAndAnalysisCodeSecurityOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RepositorySecurityAndAnalysisCodeSecurity | undefined;
    set internalValue(value: RepositorySecurityAndAnalysisCodeSecurity | undefined);
    private _status?;
    get status(): string;
    set status(value: string);
    get statusInput(): string;
}
export interface RepositorySecurityAndAnalysisSecretScanning {
    /**
    * Set to 'enabled' to enable secret scanning on the repository. Can be 'enabled' or 'disabled'. If set to 'enabled', the repository's visibility must be 'public', 'security_and_analysis[0].advanced_security[0].status' must also be set to 'enabled', or your Organization must have split licensing for Advanced security.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository#status Repository#status}
    */
    readonly status: string;
}
export declare function repositorySecurityAndAnalysisSecretScanningToTerraform(struct?: RepositorySecurityAndAnalysisSecretScanningOutputReference | RepositorySecurityAndAnalysisSecretScanning): any;
export declare function repositorySecurityAndAnalysisSecretScanningToHclTerraform(struct?: RepositorySecurityAndAnalysisSecretScanningOutputReference | RepositorySecurityAndAnalysisSecretScanning): any;
export declare class RepositorySecurityAndAnalysisSecretScanningOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RepositorySecurityAndAnalysisSecretScanning | undefined;
    set internalValue(value: RepositorySecurityAndAnalysisSecretScanning | undefined);
    private _status?;
    get status(): string;
    set status(value: string);
    get statusInput(): string;
}
export interface RepositorySecurityAndAnalysisSecretScanningAiDetection {
    /**
    * Set to 'enabled' to enable secret scanning AI detection on the repository. Can be 'enabled' or 'disabled'. If set to 'enabled', the repository's visibility must be 'public', 'security_and_analysis[0].advanced_security[0].status' must also be set to 'enabled', or your Organization must have split licensing for Advanced security.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository#status Repository#status}
    */
    readonly status: string;
}
export declare function repositorySecurityAndAnalysisSecretScanningAiDetectionToTerraform(struct?: RepositorySecurityAndAnalysisSecretScanningAiDetectionOutputReference | RepositorySecurityAndAnalysisSecretScanningAiDetection): any;
export declare function repositorySecurityAndAnalysisSecretScanningAiDetectionToHclTerraform(struct?: RepositorySecurityAndAnalysisSecretScanningAiDetectionOutputReference | RepositorySecurityAndAnalysisSecretScanningAiDetection): any;
export declare class RepositorySecurityAndAnalysisSecretScanningAiDetectionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RepositorySecurityAndAnalysisSecretScanningAiDetection | undefined;
    set internalValue(value: RepositorySecurityAndAnalysisSecretScanningAiDetection | undefined);
    private _status?;
    get status(): string;
    set status(value: string);
    get statusInput(): string;
}
export interface RepositorySecurityAndAnalysisSecretScanningNonProviderPatterns {
    /**
    * Set to 'enabled' to enable secret scanning non-provider patterns on the repository. Can be 'enabled' or 'disabled'. If set to 'enabled', the repository's visibility must be 'public', 'security_and_analysis[0].advanced_security[0].status' must also be set to 'enabled', or your Organization must have split licensing for Advanced security.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository#status Repository#status}
    */
    readonly status: string;
}
export declare function repositorySecurityAndAnalysisSecretScanningNonProviderPatternsToTerraform(struct?: RepositorySecurityAndAnalysisSecretScanningNonProviderPatternsOutputReference | RepositorySecurityAndAnalysisSecretScanningNonProviderPatterns): any;
export declare function repositorySecurityAndAnalysisSecretScanningNonProviderPatternsToHclTerraform(struct?: RepositorySecurityAndAnalysisSecretScanningNonProviderPatternsOutputReference | RepositorySecurityAndAnalysisSecretScanningNonProviderPatterns): any;
export declare class RepositorySecurityAndAnalysisSecretScanningNonProviderPatternsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RepositorySecurityAndAnalysisSecretScanningNonProviderPatterns | undefined;
    set internalValue(value: RepositorySecurityAndAnalysisSecretScanningNonProviderPatterns | undefined);
    private _status?;
    get status(): string;
    set status(value: string);
    get statusInput(): string;
}
export interface RepositorySecurityAndAnalysisSecretScanningPushProtection {
    /**
    * Set to 'enabled' to enable secret scanning push protection on the repository. Can be 'enabled' or 'disabled'. If set to 'enabled', the repository's visibility must be 'public', 'security_and_analysis[0].advanced_security[0].status' must also be set to 'enabled', or your Organization must have split licensing for Advanced security.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository#status Repository#status}
    */
    readonly status: string;
}
export declare function repositorySecurityAndAnalysisSecretScanningPushProtectionToTerraform(struct?: RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference | RepositorySecurityAndAnalysisSecretScanningPushProtection): any;
export declare function repositorySecurityAndAnalysisSecretScanningPushProtectionToHclTerraform(struct?: RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference | RepositorySecurityAndAnalysisSecretScanningPushProtection): any;
export declare class RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RepositorySecurityAndAnalysisSecretScanningPushProtection | undefined;
    set internalValue(value: RepositorySecurityAndAnalysisSecretScanningPushProtection | undefined);
    private _status?;
    get status(): string;
    set status(value: string);
    get statusInput(): string;
}
export interface RepositorySecurityAndAnalysis {
    /**
    * advanced_security block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository#advanced_security Repository#advanced_security}
    */
    readonly advancedSecurity?: RepositorySecurityAndAnalysisAdvancedSecurity;
    /**
    * code_security block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository#code_security Repository#code_security}
    */
    readonly codeSecurity?: RepositorySecurityAndAnalysisCodeSecurity;
    /**
    * secret_scanning block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository#secret_scanning Repository#secret_scanning}
    */
    readonly secretScanning?: RepositorySecurityAndAnalysisSecretScanning;
    /**
    * secret_scanning_ai_detection block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository#secret_scanning_ai_detection Repository#secret_scanning_ai_detection}
    */
    readonly secretScanningAiDetection?: RepositorySecurityAndAnalysisSecretScanningAiDetection;
    /**
    * secret_scanning_non_provider_patterns block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository#secret_scanning_non_provider_patterns Repository#secret_scanning_non_provider_patterns}
    */
    readonly secretScanningNonProviderPatterns?: RepositorySecurityAndAnalysisSecretScanningNonProviderPatterns;
    /**
    * secret_scanning_push_protection block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository#secret_scanning_push_protection Repository#secret_scanning_push_protection}
    */
    readonly secretScanningPushProtection?: RepositorySecurityAndAnalysisSecretScanningPushProtection;
}
export declare function repositorySecurityAndAnalysisToTerraform(struct?: RepositorySecurityAndAnalysisOutputReference | RepositorySecurityAndAnalysis): any;
export declare function repositorySecurityAndAnalysisToHclTerraform(struct?: RepositorySecurityAndAnalysisOutputReference | RepositorySecurityAndAnalysis): any;
export declare class RepositorySecurityAndAnalysisOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RepositorySecurityAndAnalysis | undefined;
    set internalValue(value: RepositorySecurityAndAnalysis | undefined);
    private _advancedSecurity;
    get advancedSecurity(): RepositorySecurityAndAnalysisAdvancedSecurityOutputReference;
    putAdvancedSecurity(value: RepositorySecurityAndAnalysisAdvancedSecurity): void;
    resetAdvancedSecurity(): void;
    get advancedSecurityInput(): RepositorySecurityAndAnalysisAdvancedSecurity;
    private _codeSecurity;
    get codeSecurity(): RepositorySecurityAndAnalysisCodeSecurityOutputReference;
    putCodeSecurity(value: RepositorySecurityAndAnalysisCodeSecurity): void;
    resetCodeSecurity(): void;
    get codeSecurityInput(): RepositorySecurityAndAnalysisCodeSecurity;
    private _secretScanning;
    get secretScanning(): RepositorySecurityAndAnalysisSecretScanningOutputReference;
    putSecretScanning(value: RepositorySecurityAndAnalysisSecretScanning): void;
    resetSecretScanning(): void;
    get secretScanningInput(): RepositorySecurityAndAnalysisSecretScanning;
    private _secretScanningAiDetection;
    get secretScanningAiDetection(): RepositorySecurityAndAnalysisSecretScanningAiDetectionOutputReference;
    putSecretScanningAiDetection(value: RepositorySecurityAndAnalysisSecretScanningAiDetection): void;
    resetSecretScanningAiDetection(): void;
    get secretScanningAiDetectionInput(): RepositorySecurityAndAnalysisSecretScanningAiDetection;
    private _secretScanningNonProviderPatterns;
    get secretScanningNonProviderPatterns(): RepositorySecurityAndAnalysisSecretScanningNonProviderPatternsOutputReference;
    putSecretScanningNonProviderPatterns(value: RepositorySecurityAndAnalysisSecretScanningNonProviderPatterns): void;
    resetSecretScanningNonProviderPatterns(): void;
    get secretScanningNonProviderPatternsInput(): RepositorySecurityAndAnalysisSecretScanningNonProviderPatterns;
    private _secretScanningPushProtection;
    get secretScanningPushProtection(): RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference;
    putSecretScanningPushProtection(value: RepositorySecurityAndAnalysisSecretScanningPushProtection): void;
    resetSecretScanningPushProtection(): void;
    get secretScanningPushProtectionInput(): RepositorySecurityAndAnalysisSecretScanningPushProtection;
}
export interface RepositoryTemplate {
    /**
    * Whether the new repository should include all the branches from the template repository (defaults to 'false', which includes only the default branch from the template).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository#include_all_branches Repository#include_all_branches}
    */
    readonly includeAllBranches?: boolean | cdktf.IResolvable;
    /**
    * The GitHub organization or user the template repository is owned by.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository#owner Repository#owner}
    */
    readonly owner: string;
    /**
    * The name of the template repository.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository#repository Repository#repository}
    */
    readonly repository: string;
}
export declare function repositoryTemplateToTerraform(struct?: RepositoryTemplateOutputReference | RepositoryTemplate): any;
export declare function repositoryTemplateToHclTerraform(struct?: RepositoryTemplateOutputReference | RepositoryTemplate): any;
export declare class RepositoryTemplateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RepositoryTemplate | undefined;
    set internalValue(value: RepositoryTemplate | undefined);
    private _includeAllBranches?;
    get includeAllBranches(): boolean | cdktf.IResolvable;
    set includeAllBranches(value: boolean | cdktf.IResolvable);
    resetIncludeAllBranches(): void;
    get includeAllBranchesInput(): any;
    private _owner?;
    get owner(): string;
    set owner(value: string);
    get ownerInput(): string;
    private _repository?;
    get repository(): string;
    set repository(value: string);
    get repositoryInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository github_repository}
*/
export declare class Repository extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_repository";
    /**
    * Generates CDKTF code for importing a Repository resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Repository to import
    * @param importFromId The id of the existing Repository that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Repository to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository github_repository} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RepositoryConfig
    */
    constructor(scope: Construct, id: string, config: RepositoryConfig);
    private _allowAutoMerge?;
    get allowAutoMerge(): boolean | cdktf.IResolvable;
    set allowAutoMerge(value: boolean | cdktf.IResolvable);
    resetAllowAutoMerge(): void;
    get allowAutoMergeInput(): any;
    private _allowForking?;
    get allowForking(): boolean | cdktf.IResolvable;
    set allowForking(value: boolean | cdktf.IResolvable);
    resetAllowForking(): void;
    get allowForkingInput(): any;
    private _allowMergeCommit?;
    get allowMergeCommit(): boolean | cdktf.IResolvable;
    set allowMergeCommit(value: boolean | cdktf.IResolvable);
    resetAllowMergeCommit(): void;
    get allowMergeCommitInput(): any;
    private _allowRebaseMerge?;
    get allowRebaseMerge(): boolean | cdktf.IResolvable;
    set allowRebaseMerge(value: boolean | cdktf.IResolvable);
    resetAllowRebaseMerge(): void;
    get allowRebaseMergeInput(): any;
    private _allowSquashMerge?;
    get allowSquashMerge(): boolean | cdktf.IResolvable;
    set allowSquashMerge(value: boolean | cdktf.IResolvable);
    resetAllowSquashMerge(): void;
    get allowSquashMergeInput(): any;
    private _allowUpdateBranch?;
    get allowUpdateBranch(): boolean | cdktf.IResolvable;
    set allowUpdateBranch(value: boolean | cdktf.IResolvable);
    resetAllowUpdateBranch(): void;
    get allowUpdateBranchInput(): any;
    private _archiveOnDestroy?;
    get archiveOnDestroy(): boolean | cdktf.IResolvable;
    set archiveOnDestroy(value: boolean | cdktf.IResolvable);
    resetArchiveOnDestroy(): void;
    get archiveOnDestroyInput(): any;
    private _archived?;
    get archived(): boolean | cdktf.IResolvable;
    set archived(value: boolean | cdktf.IResolvable);
    resetArchived(): void;
    get archivedInput(): any;
    private _autoInit?;
    get autoInit(): boolean | cdktf.IResolvable;
    set autoInit(value: boolean | cdktf.IResolvable);
    resetAutoInit(): void;
    get autoInitInput(): any;
    private _defaultBranch?;
    get defaultBranch(): string;
    set defaultBranch(value: string);
    resetDefaultBranch(): void;
    get defaultBranchInput(): string;
    private _deleteBranchOnMerge?;
    get deleteBranchOnMerge(): boolean | cdktf.IResolvable;
    set deleteBranchOnMerge(value: boolean | cdktf.IResolvable);
    resetDeleteBranchOnMerge(): void;
    get deleteBranchOnMergeInput(): any;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _etag?;
    get etag(): string;
    set etag(value: string);
    resetEtag(): void;
    get etagInput(): string;
    private _fork?;
    get fork(): string;
    set fork(value: string);
    resetFork(): void;
    get forkInput(): string;
    get fullName(): any;
    get gitCloneUrl(): any;
    private _gitignoreTemplate?;
    get gitignoreTemplate(): string;
    set gitignoreTemplate(value: string);
    resetGitignoreTemplate(): void;
    get gitignoreTemplateInput(): string;
    private _hasDiscussions?;
    get hasDiscussions(): boolean | cdktf.IResolvable;
    set hasDiscussions(value: boolean | cdktf.IResolvable);
    resetHasDiscussions(): void;
    get hasDiscussionsInput(): any;
    private _hasDownloads?;
    get hasDownloads(): boolean | cdktf.IResolvable;
    set hasDownloads(value: boolean | cdktf.IResolvable);
    resetHasDownloads(): void;
    get hasDownloadsInput(): any;
    private _hasIssues?;
    get hasIssues(): boolean | cdktf.IResolvable;
    set hasIssues(value: boolean | cdktf.IResolvable);
    resetHasIssues(): void;
    get hasIssuesInput(): any;
    private _hasProjects?;
    get hasProjects(): boolean | cdktf.IResolvable;
    set hasProjects(value: boolean | cdktf.IResolvable);
    resetHasProjects(): void;
    get hasProjectsInput(): any;
    private _hasWiki?;
    get hasWiki(): boolean | cdktf.IResolvable;
    set hasWiki(value: boolean | cdktf.IResolvable);
    resetHasWiki(): void;
    get hasWikiInput(): any;
    private _homepageUrl?;
    get homepageUrl(): string;
    set homepageUrl(value: string);
    resetHomepageUrl(): void;
    get homepageUrlInput(): string;
    get htmlUrl(): any;
    get httpCloneUrl(): any;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _ignoreVulnerabilityAlertsDuringRead?;
    get ignoreVulnerabilityAlertsDuringRead(): boolean | cdktf.IResolvable;
    set ignoreVulnerabilityAlertsDuringRead(value: boolean | cdktf.IResolvable);
    resetIgnoreVulnerabilityAlertsDuringRead(): void;
    get ignoreVulnerabilityAlertsDuringReadInput(): any;
    private _isTemplate?;
    get isTemplate(): boolean | cdktf.IResolvable;
    set isTemplate(value: boolean | cdktf.IResolvable);
    resetIsTemplate(): void;
    get isTemplateInput(): any;
    private _licenseTemplate?;
    get licenseTemplate(): string;
    set licenseTemplate(value: string);
    resetLicenseTemplate(): void;
    get licenseTemplateInput(): string;
    private _mergeCommitMessage?;
    get mergeCommitMessage(): string;
    set mergeCommitMessage(value: string);
    resetMergeCommitMessage(): void;
    get mergeCommitMessageInput(): string;
    private _mergeCommitTitle?;
    get mergeCommitTitle(): string;
    set mergeCommitTitle(value: string);
    resetMergeCommitTitle(): void;
    get mergeCommitTitleInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get nodeId(): any;
    get primaryLanguage(): any;
    private _private?;
    get private(): boolean | cdktf.IResolvable;
    set private(value: boolean | cdktf.IResolvable);
    resetPrivate(): void;
    get privateInput(): any;
    get repoId(): any;
    private _sourceOwner?;
    get sourceOwner(): string;
    set sourceOwner(value: string);
    resetSourceOwner(): void;
    get sourceOwnerInput(): string;
    private _sourceRepo?;
    get sourceRepo(): string;
    set sourceRepo(value: string);
    resetSourceRepo(): void;
    get sourceRepoInput(): string;
    private _squashMergeCommitMessage?;
    get squashMergeCommitMessage(): string;
    set squashMergeCommitMessage(value: string);
    resetSquashMergeCommitMessage(): void;
    get squashMergeCommitMessageInput(): string;
    private _squashMergeCommitTitle?;
    get squashMergeCommitTitle(): string;
    set squashMergeCommitTitle(value: string);
    resetSquashMergeCommitTitle(): void;
    get squashMergeCommitTitleInput(): string;
    get sshCloneUrl(): any;
    get svnUrl(): any;
    private _topics?;
    get topics(): string[];
    set topics(value: string[]);
    resetTopics(): void;
    get topicsInput(): string[];
    private _visibility?;
    get visibility(): string;
    set visibility(value: string);
    resetVisibility(): void;
    get visibilityInput(): string;
    private _vulnerabilityAlerts?;
    get vulnerabilityAlerts(): boolean | cdktf.IResolvable;
    set vulnerabilityAlerts(value: boolean | cdktf.IResolvable);
    resetVulnerabilityAlerts(): void;
    get vulnerabilityAlertsInput(): any;
    private _webCommitSignoffRequired?;
    get webCommitSignoffRequired(): boolean | cdktf.IResolvable;
    set webCommitSignoffRequired(value: boolean | cdktf.IResolvable);
    resetWebCommitSignoffRequired(): void;
    get webCommitSignoffRequiredInput(): any;
    private _pages;
    get pages(): RepositoryPagesOutputReference;
    putPages(value: RepositoryPages): void;
    resetPages(): void;
    get pagesInput(): RepositoryPages;
    private _securityAndAnalysis;
    get securityAndAnalysis(): RepositorySecurityAndAnalysisOutputReference;
    putSecurityAndAnalysis(value: RepositorySecurityAndAnalysis): void;
    resetSecurityAndAnalysis(): void;
    get securityAndAnalysisInput(): RepositorySecurityAndAnalysis;
    private _template;
    get template(): RepositoryTemplateOutputReference;
    putTemplate(value: RepositoryTemplate): void;
    resetTemplate(): void;
    get templateInput(): RepositoryTemplate;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
