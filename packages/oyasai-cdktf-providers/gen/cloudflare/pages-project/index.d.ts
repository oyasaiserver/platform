import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface PagesProjectConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#account_id PagesProject#account_id}
    */
    readonly accountId?: string;
    /**
    * Configs for the project build process.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#build_config PagesProject#build_config}
    */
    readonly buildConfig?: PagesProjectBuildConfig;
    /**
    * Configs for deployments in a project.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#deployment_configs PagesProject#deployment_configs}
    */
    readonly deploymentConfigs?: PagesProjectDeploymentConfigs;
    /**
    * Name of the project.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#name PagesProject#name}
    */
    readonly name: string;
    /**
    * Production branch of the project. Used to identify production deployments.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#production_branch PagesProject#production_branch}
    */
    readonly productionBranch: string;
    /**
    * Configs for the project source control.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#source PagesProject#source}
    */
    readonly source?: PagesProjectSource;
}
export interface PagesProjectBuildConfig {
    /**
    * Enable build caching for the project.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#build_caching PagesProject#build_caching}
    */
    readonly buildCaching?: boolean | cdktf.IResolvable;
    /**
    * Command used to build project.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#build_command PagesProject#build_command}
    */
    readonly buildCommand?: string;
    /**
    * Output directory of the build.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#destination_dir PagesProject#destination_dir}
    */
    readonly destinationDir?: string;
    /**
    * Directory to run the command.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#root_dir PagesProject#root_dir}
    */
    readonly rootDir?: string;
    /**
    * The classifying tag for analytics.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#web_analytics_tag PagesProject#web_analytics_tag}
    */
    readonly webAnalyticsTag?: string;
    /**
    * The auth token for analytics.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#web_analytics_token PagesProject#web_analytics_token}
    */
    readonly webAnalyticsToken?: string;
}
export declare function pagesProjectBuildConfigToTerraform(struct?: PagesProjectBuildConfig | cdktf.IResolvable): any;
export declare function pagesProjectBuildConfigToHclTerraform(struct?: PagesProjectBuildConfig | cdktf.IResolvable): any;
export declare class PagesProjectBuildConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PagesProjectBuildConfig | cdktf.IResolvable | undefined;
    set internalValue(value: PagesProjectBuildConfig | cdktf.IResolvable | undefined);
    private _buildCaching?;
    get buildCaching(): boolean | cdktf.IResolvable;
    set buildCaching(value: boolean | cdktf.IResolvable);
    resetBuildCaching(): void;
    get buildCachingInput(): any;
    private _buildCommand?;
    get buildCommand(): string;
    set buildCommand(value: string);
    resetBuildCommand(): void;
    get buildCommandInput(): string;
    private _destinationDir?;
    get destinationDir(): string;
    set destinationDir(value: string);
    resetDestinationDir(): void;
    get destinationDirInput(): string;
    private _rootDir?;
    get rootDir(): string;
    set rootDir(value: string);
    resetRootDir(): void;
    get rootDirInput(): string;
    private _webAnalyticsTag?;
    get webAnalyticsTag(): string;
    set webAnalyticsTag(value: string);
    resetWebAnalyticsTag(): void;
    get webAnalyticsTagInput(): string;
    private _webAnalyticsToken?;
    get webAnalyticsToken(): string;
    set webAnalyticsToken(value: string);
    resetWebAnalyticsToken(): void;
    get webAnalyticsTokenInput(): string;
}
export interface PagesProjectCanonicalDeploymentBuildConfig {
}
export declare function pagesProjectCanonicalDeploymentBuildConfigToTerraform(struct?: PagesProjectCanonicalDeploymentBuildConfig): any;
export declare function pagesProjectCanonicalDeploymentBuildConfigToHclTerraform(struct?: PagesProjectCanonicalDeploymentBuildConfig): any;
export declare class PagesProjectCanonicalDeploymentBuildConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PagesProjectCanonicalDeploymentBuildConfig | undefined;
    set internalValue(value: PagesProjectCanonicalDeploymentBuildConfig | undefined);
    get buildCaching(): any;
    get buildCommand(): any;
    get destinationDir(): any;
    get rootDir(): any;
    get webAnalyticsTag(): any;
    get webAnalyticsToken(): any;
}
export interface PagesProjectCanonicalDeploymentDeploymentTriggerMetadata {
}
export declare function pagesProjectCanonicalDeploymentDeploymentTriggerMetadataToTerraform(struct?: PagesProjectCanonicalDeploymentDeploymentTriggerMetadata): any;
export declare function pagesProjectCanonicalDeploymentDeploymentTriggerMetadataToHclTerraform(struct?: PagesProjectCanonicalDeploymentDeploymentTriggerMetadata): any;
export declare class PagesProjectCanonicalDeploymentDeploymentTriggerMetadataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PagesProjectCanonicalDeploymentDeploymentTriggerMetadata | undefined;
    set internalValue(value: PagesProjectCanonicalDeploymentDeploymentTriggerMetadata | undefined);
    get branch(): any;
    get commitDirty(): any;
    get commitHash(): any;
    get commitMessage(): any;
}
export interface PagesProjectCanonicalDeploymentDeploymentTrigger {
}
export declare function pagesProjectCanonicalDeploymentDeploymentTriggerToTerraform(struct?: PagesProjectCanonicalDeploymentDeploymentTrigger): any;
export declare function pagesProjectCanonicalDeploymentDeploymentTriggerToHclTerraform(struct?: PagesProjectCanonicalDeploymentDeploymentTrigger): any;
export declare class PagesProjectCanonicalDeploymentDeploymentTriggerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PagesProjectCanonicalDeploymentDeploymentTrigger | undefined;
    set internalValue(value: PagesProjectCanonicalDeploymentDeploymentTrigger | undefined);
    private _metadata;
    get metadata(): PagesProjectCanonicalDeploymentDeploymentTriggerMetadataOutputReference;
    get type(): any;
}
export interface PagesProjectCanonicalDeploymentEnvVars {
}
export declare function pagesProjectCanonicalDeploymentEnvVarsToTerraform(struct?: PagesProjectCanonicalDeploymentEnvVars): any;
export declare function pagesProjectCanonicalDeploymentEnvVarsToHclTerraform(struct?: PagesProjectCanonicalDeploymentEnvVars): any;
export declare class PagesProjectCanonicalDeploymentEnvVarsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): PagesProjectCanonicalDeploymentEnvVars | undefined;
    set internalValue(value: PagesProjectCanonicalDeploymentEnvVars | undefined);
    get type(): any;
    get value(): any;
}
export declare class PagesProjectCanonicalDeploymentEnvVarsMap extends cdktf.ComplexMap {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    /**
    * @param key the key of the item to return
    */
    get(key: string): PagesProjectCanonicalDeploymentEnvVarsOutputReference;
}
export interface PagesProjectCanonicalDeploymentLatestStage {
}
export declare function pagesProjectCanonicalDeploymentLatestStageToTerraform(struct?: PagesProjectCanonicalDeploymentLatestStage): any;
export declare function pagesProjectCanonicalDeploymentLatestStageToHclTerraform(struct?: PagesProjectCanonicalDeploymentLatestStage): any;
export declare class PagesProjectCanonicalDeploymentLatestStageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PagesProjectCanonicalDeploymentLatestStage | undefined;
    set internalValue(value: PagesProjectCanonicalDeploymentLatestStage | undefined);
    get endedOn(): any;
    get name(): any;
    get startedOn(): any;
    get status(): any;
}
export interface PagesProjectCanonicalDeploymentSourceConfig {
}
export declare function pagesProjectCanonicalDeploymentSourceConfigToTerraform(struct?: PagesProjectCanonicalDeploymentSourceConfig): any;
export declare function pagesProjectCanonicalDeploymentSourceConfigToHclTerraform(struct?: PagesProjectCanonicalDeploymentSourceConfig): any;
export declare class PagesProjectCanonicalDeploymentSourceConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PagesProjectCanonicalDeploymentSourceConfig | undefined;
    set internalValue(value: PagesProjectCanonicalDeploymentSourceConfig | undefined);
    get deploymentsEnabled(): any;
    get owner(): any;
    get ownerId(): any;
    get pathExcludes(): any;
    get pathIncludes(): any;
    get prCommentsEnabled(): any;
    get previewBranchExcludes(): any;
    get previewBranchIncludes(): any;
    get previewDeploymentSetting(): any;
    get productionBranch(): any;
    get productionDeploymentsEnabled(): any;
    get repoId(): any;
    get repoName(): any;
}
export interface PagesProjectCanonicalDeploymentSource {
}
export declare function pagesProjectCanonicalDeploymentSourceToTerraform(struct?: PagesProjectCanonicalDeploymentSource): any;
export declare function pagesProjectCanonicalDeploymentSourceToHclTerraform(struct?: PagesProjectCanonicalDeploymentSource): any;
export declare class PagesProjectCanonicalDeploymentSourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PagesProjectCanonicalDeploymentSource | undefined;
    set internalValue(value: PagesProjectCanonicalDeploymentSource | undefined);
    private _config;
    get config(): PagesProjectCanonicalDeploymentSourceConfigOutputReference;
    get type(): any;
}
export interface PagesProjectCanonicalDeploymentStages {
}
export declare function pagesProjectCanonicalDeploymentStagesToTerraform(struct?: PagesProjectCanonicalDeploymentStages): any;
export declare function pagesProjectCanonicalDeploymentStagesToHclTerraform(struct?: PagesProjectCanonicalDeploymentStages): any;
export declare class PagesProjectCanonicalDeploymentStagesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): PagesProjectCanonicalDeploymentStages | undefined;
    set internalValue(value: PagesProjectCanonicalDeploymentStages | undefined);
    get endedOn(): any;
    get name(): any;
    get startedOn(): any;
    get status(): any;
}
export declare class PagesProjectCanonicalDeploymentStagesList extends cdktf.ComplexList {
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
    get(index: number): PagesProjectCanonicalDeploymentStagesOutputReference;
}
export interface PagesProjectCanonicalDeployment {
}
export declare function pagesProjectCanonicalDeploymentToTerraform(struct?: PagesProjectCanonicalDeployment): any;
export declare function pagesProjectCanonicalDeploymentToHclTerraform(struct?: PagesProjectCanonicalDeployment): any;
export declare class PagesProjectCanonicalDeploymentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PagesProjectCanonicalDeployment | undefined;
    set internalValue(value: PagesProjectCanonicalDeployment | undefined);
    get aliases(): any;
    private _buildConfig;
    get buildConfig(): PagesProjectCanonicalDeploymentBuildConfigOutputReference;
    get createdOn(): any;
    private _deploymentTrigger;
    get deploymentTrigger(): PagesProjectCanonicalDeploymentDeploymentTriggerOutputReference;
    private _envVars;
    get envVars(): PagesProjectCanonicalDeploymentEnvVarsMap;
    get environment(): any;
    get id(): any;
    get isSkipped(): any;
    private _latestStage;
    get latestStage(): PagesProjectCanonicalDeploymentLatestStageOutputReference;
    get modifiedOn(): any;
    get projectId(): any;
    get projectName(): any;
    get shortId(): any;
    private _source;
    get source(): PagesProjectCanonicalDeploymentSourceOutputReference;
    private _stages;
    get stages(): PagesProjectCanonicalDeploymentStagesList;
    get url(): any;
    get usesFunctions(): any;
}
export interface PagesProjectDeploymentConfigsPreviewAiBindings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#project_id PagesProject#project_id}
    */
    readonly projectId: string;
}
export declare function pagesProjectDeploymentConfigsPreviewAiBindingsToTerraform(struct?: PagesProjectDeploymentConfigsPreviewAiBindings | cdktf.IResolvable): any;
export declare function pagesProjectDeploymentConfigsPreviewAiBindingsToHclTerraform(struct?: PagesProjectDeploymentConfigsPreviewAiBindings | cdktf.IResolvable): any;
export declare class PagesProjectDeploymentConfigsPreviewAiBindingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): PagesProjectDeploymentConfigsPreviewAiBindings | cdktf.IResolvable | undefined;
    set internalValue(value: PagesProjectDeploymentConfigsPreviewAiBindings | cdktf.IResolvable | undefined);
    private _projectId?;
    get projectId(): string;
    set projectId(value: string);
    get projectIdInput(): string;
}
export declare class PagesProjectDeploymentConfigsPreviewAiBindingsMap extends cdktf.ComplexMap {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    internalValue?: {
        [key: string]: PagesProjectDeploymentConfigsPreviewAiBindings;
    } | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    /**
    * @param key the key of the item to return
    */
    get(key: string): PagesProjectDeploymentConfigsPreviewAiBindingsOutputReference;
}
export interface PagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasets {
    /**
    * Name of the dataset.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#dataset PagesProject#dataset}
    */
    readonly dataset: string;
}
export declare function pagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsToTerraform(struct?: PagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasets | cdktf.IResolvable): any;
export declare function pagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsToHclTerraform(struct?: PagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasets | cdktf.IResolvable): any;
export declare class PagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): PagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasets | cdktf.IResolvable | undefined;
    set internalValue(value: PagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasets | cdktf.IResolvable | undefined);
    private _dataset?;
    get dataset(): string;
    set dataset(value: string);
    get datasetInput(): string;
}
export declare class PagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsMap extends cdktf.ComplexMap {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    internalValue?: {
        [key: string]: PagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasets;
    } | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    /**
    * @param key the key of the item to return
    */
    get(key: string): PagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsOutputReference;
}
export interface PagesProjectDeploymentConfigsPreviewBrowsers {
}
export declare function pagesProjectDeploymentConfigsPreviewBrowsersToTerraform(struct?: PagesProjectDeploymentConfigsPreviewBrowsers | cdktf.IResolvable): any;
export declare function pagesProjectDeploymentConfigsPreviewBrowsersToHclTerraform(struct?: PagesProjectDeploymentConfigsPreviewBrowsers | cdktf.IResolvable): any;
export declare class PagesProjectDeploymentConfigsPreviewBrowsersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): PagesProjectDeploymentConfigsPreviewBrowsers | cdktf.IResolvable | undefined;
    set internalValue(value: PagesProjectDeploymentConfigsPreviewBrowsers | cdktf.IResolvable | undefined);
}
export declare class PagesProjectDeploymentConfigsPreviewBrowsersMap extends cdktf.ComplexMap {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    internalValue?: {
        [key: string]: PagesProjectDeploymentConfigsPreviewBrowsers;
    } | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    /**
    * @param key the key of the item to return
    */
    get(key: string): PagesProjectDeploymentConfigsPreviewBrowsersOutputReference;
}
export interface PagesProjectDeploymentConfigsPreviewD1Databases {
    /**
    * UUID of the D1 database.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#id PagesProject#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
}
export declare function pagesProjectDeploymentConfigsPreviewD1DatabasesToTerraform(struct?: PagesProjectDeploymentConfigsPreviewD1Databases | cdktf.IResolvable): any;
export declare function pagesProjectDeploymentConfigsPreviewD1DatabasesToHclTerraform(struct?: PagesProjectDeploymentConfigsPreviewD1Databases | cdktf.IResolvable): any;
export declare class PagesProjectDeploymentConfigsPreviewD1DatabasesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): PagesProjectDeploymentConfigsPreviewD1Databases | cdktf.IResolvable | undefined;
    set internalValue(value: PagesProjectDeploymentConfigsPreviewD1Databases | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
}
export declare class PagesProjectDeploymentConfigsPreviewD1DatabasesMap extends cdktf.ComplexMap {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    internalValue?: {
        [key: string]: PagesProjectDeploymentConfigsPreviewD1Databases;
    } | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    /**
    * @param key the key of the item to return
    */
    get(key: string): PagesProjectDeploymentConfigsPreviewD1DatabasesOutputReference;
}
export interface PagesProjectDeploymentConfigsPreviewDurableObjectNamespaces {
    /**
    * ID of the Durable Object namespace.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#namespace_id PagesProject#namespace_id}
    */
    readonly namespaceId: string;
}
export declare function pagesProjectDeploymentConfigsPreviewDurableObjectNamespacesToTerraform(struct?: PagesProjectDeploymentConfigsPreviewDurableObjectNamespaces | cdktf.IResolvable): any;
export declare function pagesProjectDeploymentConfigsPreviewDurableObjectNamespacesToHclTerraform(struct?: PagesProjectDeploymentConfigsPreviewDurableObjectNamespaces | cdktf.IResolvable): any;
export declare class PagesProjectDeploymentConfigsPreviewDurableObjectNamespacesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): PagesProjectDeploymentConfigsPreviewDurableObjectNamespaces | cdktf.IResolvable | undefined;
    set internalValue(value: PagesProjectDeploymentConfigsPreviewDurableObjectNamespaces | cdktf.IResolvable | undefined);
    private _namespaceId?;
    get namespaceId(): string;
    set namespaceId(value: string);
    get namespaceIdInput(): string;
}
export declare class PagesProjectDeploymentConfigsPreviewDurableObjectNamespacesMap extends cdktf.ComplexMap {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    internalValue?: {
        [key: string]: PagesProjectDeploymentConfigsPreviewDurableObjectNamespaces;
    } | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    /**
    * @param key the key of the item to return
    */
    get(key: string): PagesProjectDeploymentConfigsPreviewDurableObjectNamespacesOutputReference;
}
export interface PagesProjectDeploymentConfigsPreviewEnvVars {
    /**
    * Available values: "plain_text", "secret_text".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#type PagesProject#type}
    */
    readonly type: string;
    /**
    * Environment variable value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#value PagesProject#value}
    */
    readonly value: string;
}
export declare function pagesProjectDeploymentConfigsPreviewEnvVarsToTerraform(struct?: PagesProjectDeploymentConfigsPreviewEnvVars | cdktf.IResolvable): any;
export declare function pagesProjectDeploymentConfigsPreviewEnvVarsToHclTerraform(struct?: PagesProjectDeploymentConfigsPreviewEnvVars | cdktf.IResolvable): any;
export declare class PagesProjectDeploymentConfigsPreviewEnvVarsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): PagesProjectDeploymentConfigsPreviewEnvVars | cdktf.IResolvable | undefined;
    set internalValue(value: PagesProjectDeploymentConfigsPreviewEnvVars | cdktf.IResolvable | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string;
}
export declare class PagesProjectDeploymentConfigsPreviewEnvVarsMap extends cdktf.ComplexMap {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    internalValue?: {
        [key: string]: PagesProjectDeploymentConfigsPreviewEnvVars;
    } | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    /**
    * @param key the key of the item to return
    */
    get(key: string): PagesProjectDeploymentConfigsPreviewEnvVarsOutputReference;
}
export interface PagesProjectDeploymentConfigsPreviewHyperdriveBindings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#id PagesProject#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
}
export declare function pagesProjectDeploymentConfigsPreviewHyperdriveBindingsToTerraform(struct?: PagesProjectDeploymentConfigsPreviewHyperdriveBindings | cdktf.IResolvable): any;
export declare function pagesProjectDeploymentConfigsPreviewHyperdriveBindingsToHclTerraform(struct?: PagesProjectDeploymentConfigsPreviewHyperdriveBindings | cdktf.IResolvable): any;
export declare class PagesProjectDeploymentConfigsPreviewHyperdriveBindingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): PagesProjectDeploymentConfigsPreviewHyperdriveBindings | cdktf.IResolvable | undefined;
    set internalValue(value: PagesProjectDeploymentConfigsPreviewHyperdriveBindings | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
}
export declare class PagesProjectDeploymentConfigsPreviewHyperdriveBindingsMap extends cdktf.ComplexMap {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    internalValue?: {
        [key: string]: PagesProjectDeploymentConfigsPreviewHyperdriveBindings;
    } | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    /**
    * @param key the key of the item to return
    */
    get(key: string): PagesProjectDeploymentConfigsPreviewHyperdriveBindingsOutputReference;
}
export interface PagesProjectDeploymentConfigsPreviewKvNamespaces {
    /**
    * ID of the KV namespace.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#namespace_id PagesProject#namespace_id}
    */
    readonly namespaceId: string;
}
export declare function pagesProjectDeploymentConfigsPreviewKvNamespacesToTerraform(struct?: PagesProjectDeploymentConfigsPreviewKvNamespaces | cdktf.IResolvable): any;
export declare function pagesProjectDeploymentConfigsPreviewKvNamespacesToHclTerraform(struct?: PagesProjectDeploymentConfigsPreviewKvNamespaces | cdktf.IResolvable): any;
export declare class PagesProjectDeploymentConfigsPreviewKvNamespacesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): PagesProjectDeploymentConfigsPreviewKvNamespaces | cdktf.IResolvable | undefined;
    set internalValue(value: PagesProjectDeploymentConfigsPreviewKvNamespaces | cdktf.IResolvable | undefined);
    private _namespaceId?;
    get namespaceId(): string;
    set namespaceId(value: string);
    get namespaceIdInput(): string;
}
export declare class PagesProjectDeploymentConfigsPreviewKvNamespacesMap extends cdktf.ComplexMap {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    internalValue?: {
        [key: string]: PagesProjectDeploymentConfigsPreviewKvNamespaces;
    } | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    /**
    * @param key the key of the item to return
    */
    get(key: string): PagesProjectDeploymentConfigsPreviewKvNamespacesOutputReference;
}
export interface PagesProjectDeploymentConfigsPreviewLimits {
    /**
    * CPU time limit in milliseconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#cpu_ms PagesProject#cpu_ms}
    */
    readonly cpuMs: number;
}
export declare function pagesProjectDeploymentConfigsPreviewLimitsToTerraform(struct?: PagesProjectDeploymentConfigsPreviewLimits | cdktf.IResolvable): any;
export declare function pagesProjectDeploymentConfigsPreviewLimitsToHclTerraform(struct?: PagesProjectDeploymentConfigsPreviewLimits | cdktf.IResolvable): any;
export declare class PagesProjectDeploymentConfigsPreviewLimitsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PagesProjectDeploymentConfigsPreviewLimits | cdktf.IResolvable | undefined;
    set internalValue(value: PagesProjectDeploymentConfigsPreviewLimits | cdktf.IResolvable | undefined);
    private _cpuMs?;
    get cpuMs(): number;
    set cpuMs(value: number);
    get cpuMsInput(): number;
}
export interface PagesProjectDeploymentConfigsPreviewMtlsCertificates {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#certificate_id PagesProject#certificate_id}
    */
    readonly certificateId: string;
}
export declare function pagesProjectDeploymentConfigsPreviewMtlsCertificatesToTerraform(struct?: PagesProjectDeploymentConfigsPreviewMtlsCertificates | cdktf.IResolvable): any;
export declare function pagesProjectDeploymentConfigsPreviewMtlsCertificatesToHclTerraform(struct?: PagesProjectDeploymentConfigsPreviewMtlsCertificates | cdktf.IResolvable): any;
export declare class PagesProjectDeploymentConfigsPreviewMtlsCertificatesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): PagesProjectDeploymentConfigsPreviewMtlsCertificates | cdktf.IResolvable | undefined;
    set internalValue(value: PagesProjectDeploymentConfigsPreviewMtlsCertificates | cdktf.IResolvable | undefined);
    private _certificateId?;
    get certificateId(): string;
    set certificateId(value: string);
    get certificateIdInput(): string;
}
export declare class PagesProjectDeploymentConfigsPreviewMtlsCertificatesMap extends cdktf.ComplexMap {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    internalValue?: {
        [key: string]: PagesProjectDeploymentConfigsPreviewMtlsCertificates;
    } | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    /**
    * @param key the key of the item to return
    */
    get(key: string): PagesProjectDeploymentConfigsPreviewMtlsCertificatesOutputReference;
}
export interface PagesProjectDeploymentConfigsPreviewPlacement {
    /**
    * Placement mode.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#mode PagesProject#mode}
    */
    readonly mode?: string;
}
export declare function pagesProjectDeploymentConfigsPreviewPlacementToTerraform(struct?: PagesProjectDeploymentConfigsPreviewPlacement | cdktf.IResolvable): any;
export declare function pagesProjectDeploymentConfigsPreviewPlacementToHclTerraform(struct?: PagesProjectDeploymentConfigsPreviewPlacement | cdktf.IResolvable): any;
export declare class PagesProjectDeploymentConfigsPreviewPlacementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PagesProjectDeploymentConfigsPreviewPlacement | cdktf.IResolvable | undefined;
    set internalValue(value: PagesProjectDeploymentConfigsPreviewPlacement | cdktf.IResolvable | undefined);
    private _mode?;
    get mode(): string;
    set mode(value: string);
    resetMode(): void;
    get modeInput(): string;
}
export interface PagesProjectDeploymentConfigsPreviewQueueProducers {
    /**
    * Name of the Queue.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#name PagesProject#name}
    */
    readonly name: string;
}
export declare function pagesProjectDeploymentConfigsPreviewQueueProducersToTerraform(struct?: PagesProjectDeploymentConfigsPreviewQueueProducers | cdktf.IResolvable): any;
export declare function pagesProjectDeploymentConfigsPreviewQueueProducersToHclTerraform(struct?: PagesProjectDeploymentConfigsPreviewQueueProducers | cdktf.IResolvable): any;
export declare class PagesProjectDeploymentConfigsPreviewQueueProducersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): PagesProjectDeploymentConfigsPreviewQueueProducers | cdktf.IResolvable | undefined;
    set internalValue(value: PagesProjectDeploymentConfigsPreviewQueueProducers | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export declare class PagesProjectDeploymentConfigsPreviewQueueProducersMap extends cdktf.ComplexMap {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    internalValue?: {
        [key: string]: PagesProjectDeploymentConfigsPreviewQueueProducers;
    } | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    /**
    * @param key the key of the item to return
    */
    get(key: string): PagesProjectDeploymentConfigsPreviewQueueProducersOutputReference;
}
export interface PagesProjectDeploymentConfigsPreviewR2Buckets {
    /**
    * Jurisdiction of the R2 bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#jurisdiction PagesProject#jurisdiction}
    */
    readonly jurisdiction?: string;
    /**
    * Name of the R2 bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#name PagesProject#name}
    */
    readonly name: string;
}
export declare function pagesProjectDeploymentConfigsPreviewR2BucketsToTerraform(struct?: PagesProjectDeploymentConfigsPreviewR2Buckets | cdktf.IResolvable): any;
export declare function pagesProjectDeploymentConfigsPreviewR2BucketsToHclTerraform(struct?: PagesProjectDeploymentConfigsPreviewR2Buckets | cdktf.IResolvable): any;
export declare class PagesProjectDeploymentConfigsPreviewR2BucketsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): PagesProjectDeploymentConfigsPreviewR2Buckets | cdktf.IResolvable | undefined;
    set internalValue(value: PagesProjectDeploymentConfigsPreviewR2Buckets | cdktf.IResolvable | undefined);
    private _jurisdiction?;
    get jurisdiction(): string;
    set jurisdiction(value: string);
    resetJurisdiction(): void;
    get jurisdictionInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export declare class PagesProjectDeploymentConfigsPreviewR2BucketsMap extends cdktf.ComplexMap {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    internalValue?: {
        [key: string]: PagesProjectDeploymentConfigsPreviewR2Buckets;
    } | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    /**
    * @param key the key of the item to return
    */
    get(key: string): PagesProjectDeploymentConfigsPreviewR2BucketsOutputReference;
}
export interface PagesProjectDeploymentConfigsPreviewServices {
    /**
    * The entrypoint to bind to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#entrypoint PagesProject#entrypoint}
    */
    readonly entrypoint?: string;
    /**
    * The Service environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#environment PagesProject#environment}
    */
    readonly environment?: string;
    /**
    * The Service name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#service PagesProject#service}
    */
    readonly service: string;
}
export declare function pagesProjectDeploymentConfigsPreviewServicesToTerraform(struct?: PagesProjectDeploymentConfigsPreviewServices | cdktf.IResolvable): any;
export declare function pagesProjectDeploymentConfigsPreviewServicesToHclTerraform(struct?: PagesProjectDeploymentConfigsPreviewServices | cdktf.IResolvable): any;
export declare class PagesProjectDeploymentConfigsPreviewServicesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): PagesProjectDeploymentConfigsPreviewServices | cdktf.IResolvable | undefined;
    set internalValue(value: PagesProjectDeploymentConfigsPreviewServices | cdktf.IResolvable | undefined);
    private _entrypoint?;
    get entrypoint(): string;
    set entrypoint(value: string);
    resetEntrypoint(): void;
    get entrypointInput(): string;
    private _environment?;
    get environment(): string;
    set environment(value: string);
    resetEnvironment(): void;
    get environmentInput(): string;
    private _service?;
    get service(): string;
    set service(value: string);
    get serviceInput(): string;
}
export declare class PagesProjectDeploymentConfigsPreviewServicesMap extends cdktf.ComplexMap {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    internalValue?: {
        [key: string]: PagesProjectDeploymentConfigsPreviewServices;
    } | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    /**
    * @param key the key of the item to return
    */
    get(key: string): PagesProjectDeploymentConfigsPreviewServicesOutputReference;
}
export interface PagesProjectDeploymentConfigsPreviewVectorizeBindings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#index_name PagesProject#index_name}
    */
    readonly indexName: string;
}
export declare function pagesProjectDeploymentConfigsPreviewVectorizeBindingsToTerraform(struct?: PagesProjectDeploymentConfigsPreviewVectorizeBindings | cdktf.IResolvable): any;
export declare function pagesProjectDeploymentConfigsPreviewVectorizeBindingsToHclTerraform(struct?: PagesProjectDeploymentConfigsPreviewVectorizeBindings | cdktf.IResolvable): any;
export declare class PagesProjectDeploymentConfigsPreviewVectorizeBindingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): PagesProjectDeploymentConfigsPreviewVectorizeBindings | cdktf.IResolvable | undefined;
    set internalValue(value: PagesProjectDeploymentConfigsPreviewVectorizeBindings | cdktf.IResolvable | undefined);
    private _indexName?;
    get indexName(): string;
    set indexName(value: string);
    get indexNameInput(): string;
}
export declare class PagesProjectDeploymentConfigsPreviewVectorizeBindingsMap extends cdktf.ComplexMap {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    internalValue?: {
        [key: string]: PagesProjectDeploymentConfigsPreviewVectorizeBindings;
    } | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    /**
    * @param key the key of the item to return
    */
    get(key: string): PagesProjectDeploymentConfigsPreviewVectorizeBindingsOutputReference;
}
export interface PagesProjectDeploymentConfigsPreview {
    /**
    * Constellation bindings used for Pages Functions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#ai_bindings PagesProject#ai_bindings}
    */
    readonly aiBindings?: {
        [key: string]: PagesProjectDeploymentConfigsPreviewAiBindings;
    } | cdktf.IResolvable;
    /**
    * Whether to always use the latest compatibility date for Pages Functions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#always_use_latest_compatibility_date PagesProject#always_use_latest_compatibility_date}
    */
    readonly alwaysUseLatestCompatibilityDate?: boolean | cdktf.IResolvable;
    /**
    * Analytics Engine bindings used for Pages Functions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#analytics_engine_datasets PagesProject#analytics_engine_datasets}
    */
    readonly analyticsEngineDatasets?: {
        [key: string]: PagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasets;
    } | cdktf.IResolvable;
    /**
    * Browser bindings used for Pages Functions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#browsers PagesProject#browsers}
    */
    readonly browsers?: {
        [key: string]: PagesProjectDeploymentConfigsPreviewBrowsers;
    } | cdktf.IResolvable;
    /**
    * The major version of the build image to use for Pages Functions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#build_image_major_version PagesProject#build_image_major_version}
    */
    readonly buildImageMajorVersion?: number;
    /**
    * Compatibility date used for Pages Functions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#compatibility_date PagesProject#compatibility_date}
    */
    readonly compatibilityDate?: string;
    /**
    * Compatibility flags used for Pages Functions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#compatibility_flags PagesProject#compatibility_flags}
    */
    readonly compatibilityFlags?: string[];
    /**
    * D1 databases used for Pages Functions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#d1_databases PagesProject#d1_databases}
    */
    readonly d1Databases?: {
        [key: string]: PagesProjectDeploymentConfigsPreviewD1Databases;
    } | cdktf.IResolvable;
    /**
    * Durable Object namespaces used for Pages Functions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#durable_object_namespaces PagesProject#durable_object_namespaces}
    */
    readonly durableObjectNamespaces?: {
        [key: string]: PagesProjectDeploymentConfigsPreviewDurableObjectNamespaces;
    } | cdktf.IResolvable;
    /**
    * Environment variables used for builds and Pages Functions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#env_vars PagesProject#env_vars}
    */
    readonly envVars?: {
        [key: string]: PagesProjectDeploymentConfigsPreviewEnvVars;
    } | cdktf.IResolvable;
    /**
    * Whether to fail open when the deployment config cannot be applied.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#fail_open PagesProject#fail_open}
    */
    readonly failOpen?: boolean | cdktf.IResolvable;
    /**
    * Hyperdrive bindings used for Pages Functions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#hyperdrive_bindings PagesProject#hyperdrive_bindings}
    */
    readonly hyperdriveBindings?: {
        [key: string]: PagesProjectDeploymentConfigsPreviewHyperdriveBindings;
    } | cdktf.IResolvable;
    /**
    * KV namespaces used for Pages Functions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#kv_namespaces PagesProject#kv_namespaces}
    */
    readonly kvNamespaces?: {
        [key: string]: PagesProjectDeploymentConfigsPreviewKvNamespaces;
    } | cdktf.IResolvable;
    /**
    * Limits for Pages Functions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#limits PagesProject#limits}
    */
    readonly limits?: PagesProjectDeploymentConfigsPreviewLimits;
    /**
    * mTLS bindings used for Pages Functions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#mtls_certificates PagesProject#mtls_certificates}
    */
    readonly mtlsCertificates?: {
        [key: string]: PagesProjectDeploymentConfigsPreviewMtlsCertificates;
    } | cdktf.IResolvable;
    /**
    * Placement setting used for Pages Functions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#placement PagesProject#placement}
    */
    readonly placement?: PagesProjectDeploymentConfigsPreviewPlacement;
    /**
    * Queue Producer bindings used for Pages Functions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#queue_producers PagesProject#queue_producers}
    */
    readonly queueProducers?: {
        [key: string]: PagesProjectDeploymentConfigsPreviewQueueProducers;
    } | cdktf.IResolvable;
    /**
    * R2 buckets used for Pages Functions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#r2_buckets PagesProject#r2_buckets}
    */
    readonly r2Buckets?: {
        [key: string]: PagesProjectDeploymentConfigsPreviewR2Buckets;
    } | cdktf.IResolvable;
    /**
    * Services used for Pages Functions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#services PagesProject#services}
    */
    readonly services?: {
        [key: string]: PagesProjectDeploymentConfigsPreviewServices;
    } | cdktf.IResolvable;
    /**
    * The usage model for Pages Functions.
    * Available values: "standard", "bundled", "unbound".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#usage_model PagesProject#usage_model}
    */
    readonly usageModel?: string;
    /**
    * Vectorize bindings used for Pages Functions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#vectorize_bindings PagesProject#vectorize_bindings}
    */
    readonly vectorizeBindings?: {
        [key: string]: PagesProjectDeploymentConfigsPreviewVectorizeBindings;
    } | cdktf.IResolvable;
    /**
    * Hash of the Wrangler configuration used for the deployment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#wrangler_config_hash PagesProject#wrangler_config_hash}
    */
    readonly wranglerConfigHash?: string;
}
export declare function pagesProjectDeploymentConfigsPreviewToTerraform(struct?: PagesProjectDeploymentConfigsPreview | cdktf.IResolvable): any;
export declare function pagesProjectDeploymentConfigsPreviewToHclTerraform(struct?: PagesProjectDeploymentConfigsPreview | cdktf.IResolvable): any;
export declare class PagesProjectDeploymentConfigsPreviewOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PagesProjectDeploymentConfigsPreview | cdktf.IResolvable | undefined;
    set internalValue(value: PagesProjectDeploymentConfigsPreview | cdktf.IResolvable | undefined);
    private _aiBindings;
    get aiBindings(): PagesProjectDeploymentConfigsPreviewAiBindingsMap;
    putAiBindings(value: {
        [key: string]: PagesProjectDeploymentConfigsPreviewAiBindings;
    } | cdktf.IResolvable): void;
    resetAiBindings(): void;
    get aiBindingsInput(): any;
    private _alwaysUseLatestCompatibilityDate?;
    get alwaysUseLatestCompatibilityDate(): boolean | cdktf.IResolvable;
    set alwaysUseLatestCompatibilityDate(value: boolean | cdktf.IResolvable);
    resetAlwaysUseLatestCompatibilityDate(): void;
    get alwaysUseLatestCompatibilityDateInput(): any;
    private _analyticsEngineDatasets;
    get analyticsEngineDatasets(): PagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsMap;
    putAnalyticsEngineDatasets(value: {
        [key: string]: PagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasets;
    } | cdktf.IResolvable): void;
    resetAnalyticsEngineDatasets(): void;
    get analyticsEngineDatasetsInput(): any;
    private _browsers;
    get browsers(): PagesProjectDeploymentConfigsPreviewBrowsersMap;
    putBrowsers(value: {
        [key: string]: PagesProjectDeploymentConfigsPreviewBrowsers;
    } | cdktf.IResolvable): void;
    resetBrowsers(): void;
    get browsersInput(): any;
    private _buildImageMajorVersion?;
    get buildImageMajorVersion(): number;
    set buildImageMajorVersion(value: number);
    resetBuildImageMajorVersion(): void;
    get buildImageMajorVersionInput(): number;
    private _compatibilityDate?;
    get compatibilityDate(): string;
    set compatibilityDate(value: string);
    resetCompatibilityDate(): void;
    get compatibilityDateInput(): string;
    private _compatibilityFlags?;
    get compatibilityFlags(): string[];
    set compatibilityFlags(value: string[]);
    resetCompatibilityFlags(): void;
    get compatibilityFlagsInput(): string[];
    private _d1Databases;
    get d1Databases(): PagesProjectDeploymentConfigsPreviewD1DatabasesMap;
    putD1Databases(value: {
        [key: string]: PagesProjectDeploymentConfigsPreviewD1Databases;
    } | cdktf.IResolvable): void;
    resetD1Databases(): void;
    get d1DatabasesInput(): any;
    private _durableObjectNamespaces;
    get durableObjectNamespaces(): PagesProjectDeploymentConfigsPreviewDurableObjectNamespacesMap;
    putDurableObjectNamespaces(value: {
        [key: string]: PagesProjectDeploymentConfigsPreviewDurableObjectNamespaces;
    } | cdktf.IResolvable): void;
    resetDurableObjectNamespaces(): void;
    get durableObjectNamespacesInput(): any;
    private _envVars;
    get envVars(): PagesProjectDeploymentConfigsPreviewEnvVarsMap;
    putEnvVars(value: {
        [key: string]: PagesProjectDeploymentConfigsPreviewEnvVars;
    } | cdktf.IResolvable): void;
    resetEnvVars(): void;
    get envVarsInput(): any;
    private _failOpen?;
    get failOpen(): boolean | cdktf.IResolvable;
    set failOpen(value: boolean | cdktf.IResolvable);
    resetFailOpen(): void;
    get failOpenInput(): any;
    private _hyperdriveBindings;
    get hyperdriveBindings(): PagesProjectDeploymentConfigsPreviewHyperdriveBindingsMap;
    putHyperdriveBindings(value: {
        [key: string]: PagesProjectDeploymentConfigsPreviewHyperdriveBindings;
    } | cdktf.IResolvable): void;
    resetHyperdriveBindings(): void;
    get hyperdriveBindingsInput(): any;
    private _kvNamespaces;
    get kvNamespaces(): PagesProjectDeploymentConfigsPreviewKvNamespacesMap;
    putKvNamespaces(value: {
        [key: string]: PagesProjectDeploymentConfigsPreviewKvNamespaces;
    } | cdktf.IResolvable): void;
    resetKvNamespaces(): void;
    get kvNamespacesInput(): any;
    private _limits;
    get limits(): PagesProjectDeploymentConfigsPreviewLimitsOutputReference;
    putLimits(value: PagesProjectDeploymentConfigsPreviewLimits): void;
    resetLimits(): void;
    get limitsInput(): any;
    private _mtlsCertificates;
    get mtlsCertificates(): PagesProjectDeploymentConfigsPreviewMtlsCertificatesMap;
    putMtlsCertificates(value: {
        [key: string]: PagesProjectDeploymentConfigsPreviewMtlsCertificates;
    } | cdktf.IResolvable): void;
    resetMtlsCertificates(): void;
    get mtlsCertificatesInput(): any;
    private _placement;
    get placement(): PagesProjectDeploymentConfigsPreviewPlacementOutputReference;
    putPlacement(value: PagesProjectDeploymentConfigsPreviewPlacement): void;
    resetPlacement(): void;
    get placementInput(): any;
    private _queueProducers;
    get queueProducers(): PagesProjectDeploymentConfigsPreviewQueueProducersMap;
    putQueueProducers(value: {
        [key: string]: PagesProjectDeploymentConfigsPreviewQueueProducers;
    } | cdktf.IResolvable): void;
    resetQueueProducers(): void;
    get queueProducersInput(): any;
    private _r2Buckets;
    get r2Buckets(): PagesProjectDeploymentConfigsPreviewR2BucketsMap;
    putR2Buckets(value: {
        [key: string]: PagesProjectDeploymentConfigsPreviewR2Buckets;
    } | cdktf.IResolvable): void;
    resetR2Buckets(): void;
    get r2BucketsInput(): any;
    private _services;
    get services(): PagesProjectDeploymentConfigsPreviewServicesMap;
    putServices(value: {
        [key: string]: PagesProjectDeploymentConfigsPreviewServices;
    } | cdktf.IResolvable): void;
    resetServices(): void;
    get servicesInput(): any;
    private _usageModel?;
    get usageModel(): string;
    set usageModel(value: string);
    resetUsageModel(): void;
    get usageModelInput(): string;
    private _vectorizeBindings;
    get vectorizeBindings(): PagesProjectDeploymentConfigsPreviewVectorizeBindingsMap;
    putVectorizeBindings(value: {
        [key: string]: PagesProjectDeploymentConfigsPreviewVectorizeBindings;
    } | cdktf.IResolvable): void;
    resetVectorizeBindings(): void;
    get vectorizeBindingsInput(): any;
    private _wranglerConfigHash?;
    get wranglerConfigHash(): string;
    set wranglerConfigHash(value: string);
    resetWranglerConfigHash(): void;
    get wranglerConfigHashInput(): string;
}
export interface PagesProjectDeploymentConfigsProductionAiBindings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#project_id PagesProject#project_id}
    */
    readonly projectId: string;
}
export declare function pagesProjectDeploymentConfigsProductionAiBindingsToTerraform(struct?: PagesProjectDeploymentConfigsProductionAiBindings | cdktf.IResolvable): any;
export declare function pagesProjectDeploymentConfigsProductionAiBindingsToHclTerraform(struct?: PagesProjectDeploymentConfigsProductionAiBindings | cdktf.IResolvable): any;
export declare class PagesProjectDeploymentConfigsProductionAiBindingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): PagesProjectDeploymentConfigsProductionAiBindings | cdktf.IResolvable | undefined;
    set internalValue(value: PagesProjectDeploymentConfigsProductionAiBindings | cdktf.IResolvable | undefined);
    private _projectId?;
    get projectId(): string;
    set projectId(value: string);
    get projectIdInput(): string;
}
export declare class PagesProjectDeploymentConfigsProductionAiBindingsMap extends cdktf.ComplexMap {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    internalValue?: {
        [key: string]: PagesProjectDeploymentConfigsProductionAiBindings;
    } | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    /**
    * @param key the key of the item to return
    */
    get(key: string): PagesProjectDeploymentConfigsProductionAiBindingsOutputReference;
}
export interface PagesProjectDeploymentConfigsProductionAnalyticsEngineDatasets {
    /**
    * Name of the dataset.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#dataset PagesProject#dataset}
    */
    readonly dataset: string;
}
export declare function pagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsToTerraform(struct?: PagesProjectDeploymentConfigsProductionAnalyticsEngineDatasets | cdktf.IResolvable): any;
export declare function pagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsToHclTerraform(struct?: PagesProjectDeploymentConfigsProductionAnalyticsEngineDatasets | cdktf.IResolvable): any;
export declare class PagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): PagesProjectDeploymentConfigsProductionAnalyticsEngineDatasets | cdktf.IResolvable | undefined;
    set internalValue(value: PagesProjectDeploymentConfigsProductionAnalyticsEngineDatasets | cdktf.IResolvable | undefined);
    private _dataset?;
    get dataset(): string;
    set dataset(value: string);
    get datasetInput(): string;
}
export declare class PagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsMap extends cdktf.ComplexMap {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    internalValue?: {
        [key: string]: PagesProjectDeploymentConfigsProductionAnalyticsEngineDatasets;
    } | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    /**
    * @param key the key of the item to return
    */
    get(key: string): PagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsOutputReference;
}
export interface PagesProjectDeploymentConfigsProductionBrowsers {
}
export declare function pagesProjectDeploymentConfigsProductionBrowsersToTerraform(struct?: PagesProjectDeploymentConfigsProductionBrowsers | cdktf.IResolvable): any;
export declare function pagesProjectDeploymentConfigsProductionBrowsersToHclTerraform(struct?: PagesProjectDeploymentConfigsProductionBrowsers | cdktf.IResolvable): any;
export declare class PagesProjectDeploymentConfigsProductionBrowsersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): PagesProjectDeploymentConfigsProductionBrowsers | cdktf.IResolvable | undefined;
    set internalValue(value: PagesProjectDeploymentConfigsProductionBrowsers | cdktf.IResolvable | undefined);
}
export declare class PagesProjectDeploymentConfigsProductionBrowsersMap extends cdktf.ComplexMap {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    internalValue?: {
        [key: string]: PagesProjectDeploymentConfigsProductionBrowsers;
    } | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    /**
    * @param key the key of the item to return
    */
    get(key: string): PagesProjectDeploymentConfigsProductionBrowsersOutputReference;
}
export interface PagesProjectDeploymentConfigsProductionD1Databases {
    /**
    * UUID of the D1 database.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#id PagesProject#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
}
export declare function pagesProjectDeploymentConfigsProductionD1DatabasesToTerraform(struct?: PagesProjectDeploymentConfigsProductionD1Databases | cdktf.IResolvable): any;
export declare function pagesProjectDeploymentConfigsProductionD1DatabasesToHclTerraform(struct?: PagesProjectDeploymentConfigsProductionD1Databases | cdktf.IResolvable): any;
export declare class PagesProjectDeploymentConfigsProductionD1DatabasesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): PagesProjectDeploymentConfigsProductionD1Databases | cdktf.IResolvable | undefined;
    set internalValue(value: PagesProjectDeploymentConfigsProductionD1Databases | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
}
export declare class PagesProjectDeploymentConfigsProductionD1DatabasesMap extends cdktf.ComplexMap {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    internalValue?: {
        [key: string]: PagesProjectDeploymentConfigsProductionD1Databases;
    } | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    /**
    * @param key the key of the item to return
    */
    get(key: string): PagesProjectDeploymentConfigsProductionD1DatabasesOutputReference;
}
export interface PagesProjectDeploymentConfigsProductionDurableObjectNamespaces {
    /**
    * ID of the Durable Object namespace.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#namespace_id PagesProject#namespace_id}
    */
    readonly namespaceId: string;
}
export declare function pagesProjectDeploymentConfigsProductionDurableObjectNamespacesToTerraform(struct?: PagesProjectDeploymentConfigsProductionDurableObjectNamespaces | cdktf.IResolvable): any;
export declare function pagesProjectDeploymentConfigsProductionDurableObjectNamespacesToHclTerraform(struct?: PagesProjectDeploymentConfigsProductionDurableObjectNamespaces | cdktf.IResolvable): any;
export declare class PagesProjectDeploymentConfigsProductionDurableObjectNamespacesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): PagesProjectDeploymentConfigsProductionDurableObjectNamespaces | cdktf.IResolvable | undefined;
    set internalValue(value: PagesProjectDeploymentConfigsProductionDurableObjectNamespaces | cdktf.IResolvable | undefined);
    private _namespaceId?;
    get namespaceId(): string;
    set namespaceId(value: string);
    get namespaceIdInput(): string;
}
export declare class PagesProjectDeploymentConfigsProductionDurableObjectNamespacesMap extends cdktf.ComplexMap {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    internalValue?: {
        [key: string]: PagesProjectDeploymentConfigsProductionDurableObjectNamespaces;
    } | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    /**
    * @param key the key of the item to return
    */
    get(key: string): PagesProjectDeploymentConfigsProductionDurableObjectNamespacesOutputReference;
}
export interface PagesProjectDeploymentConfigsProductionEnvVars {
    /**
    * Available values: "plain_text", "secret_text".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#type PagesProject#type}
    */
    readonly type: string;
    /**
    * Environment variable value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#value PagesProject#value}
    */
    readonly value: string;
}
export declare function pagesProjectDeploymentConfigsProductionEnvVarsToTerraform(struct?: PagesProjectDeploymentConfigsProductionEnvVars | cdktf.IResolvable): any;
export declare function pagesProjectDeploymentConfigsProductionEnvVarsToHclTerraform(struct?: PagesProjectDeploymentConfigsProductionEnvVars | cdktf.IResolvable): any;
export declare class PagesProjectDeploymentConfigsProductionEnvVarsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): PagesProjectDeploymentConfigsProductionEnvVars | cdktf.IResolvable | undefined;
    set internalValue(value: PagesProjectDeploymentConfigsProductionEnvVars | cdktf.IResolvable | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string;
}
export declare class PagesProjectDeploymentConfigsProductionEnvVarsMap extends cdktf.ComplexMap {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    internalValue?: {
        [key: string]: PagesProjectDeploymentConfigsProductionEnvVars;
    } | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    /**
    * @param key the key of the item to return
    */
    get(key: string): PagesProjectDeploymentConfigsProductionEnvVarsOutputReference;
}
export interface PagesProjectDeploymentConfigsProductionHyperdriveBindings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#id PagesProject#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
}
export declare function pagesProjectDeploymentConfigsProductionHyperdriveBindingsToTerraform(struct?: PagesProjectDeploymentConfigsProductionHyperdriveBindings | cdktf.IResolvable): any;
export declare function pagesProjectDeploymentConfigsProductionHyperdriveBindingsToHclTerraform(struct?: PagesProjectDeploymentConfigsProductionHyperdriveBindings | cdktf.IResolvable): any;
export declare class PagesProjectDeploymentConfigsProductionHyperdriveBindingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): PagesProjectDeploymentConfigsProductionHyperdriveBindings | cdktf.IResolvable | undefined;
    set internalValue(value: PagesProjectDeploymentConfigsProductionHyperdriveBindings | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
}
export declare class PagesProjectDeploymentConfigsProductionHyperdriveBindingsMap extends cdktf.ComplexMap {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    internalValue?: {
        [key: string]: PagesProjectDeploymentConfigsProductionHyperdriveBindings;
    } | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    /**
    * @param key the key of the item to return
    */
    get(key: string): PagesProjectDeploymentConfigsProductionHyperdriveBindingsOutputReference;
}
export interface PagesProjectDeploymentConfigsProductionKvNamespaces {
    /**
    * ID of the KV namespace.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#namespace_id PagesProject#namespace_id}
    */
    readonly namespaceId: string;
}
export declare function pagesProjectDeploymentConfigsProductionKvNamespacesToTerraform(struct?: PagesProjectDeploymentConfigsProductionKvNamespaces | cdktf.IResolvable): any;
export declare function pagesProjectDeploymentConfigsProductionKvNamespacesToHclTerraform(struct?: PagesProjectDeploymentConfigsProductionKvNamespaces | cdktf.IResolvable): any;
export declare class PagesProjectDeploymentConfigsProductionKvNamespacesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): PagesProjectDeploymentConfigsProductionKvNamespaces | cdktf.IResolvable | undefined;
    set internalValue(value: PagesProjectDeploymentConfigsProductionKvNamespaces | cdktf.IResolvable | undefined);
    private _namespaceId?;
    get namespaceId(): string;
    set namespaceId(value: string);
    get namespaceIdInput(): string;
}
export declare class PagesProjectDeploymentConfigsProductionKvNamespacesMap extends cdktf.ComplexMap {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    internalValue?: {
        [key: string]: PagesProjectDeploymentConfigsProductionKvNamespaces;
    } | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    /**
    * @param key the key of the item to return
    */
    get(key: string): PagesProjectDeploymentConfigsProductionKvNamespacesOutputReference;
}
export interface PagesProjectDeploymentConfigsProductionLimits {
    /**
    * CPU time limit in milliseconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#cpu_ms PagesProject#cpu_ms}
    */
    readonly cpuMs: number;
}
export declare function pagesProjectDeploymentConfigsProductionLimitsToTerraform(struct?: PagesProjectDeploymentConfigsProductionLimits | cdktf.IResolvable): any;
export declare function pagesProjectDeploymentConfigsProductionLimitsToHclTerraform(struct?: PagesProjectDeploymentConfigsProductionLimits | cdktf.IResolvable): any;
export declare class PagesProjectDeploymentConfigsProductionLimitsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PagesProjectDeploymentConfigsProductionLimits | cdktf.IResolvable | undefined;
    set internalValue(value: PagesProjectDeploymentConfigsProductionLimits | cdktf.IResolvable | undefined);
    private _cpuMs?;
    get cpuMs(): number;
    set cpuMs(value: number);
    get cpuMsInput(): number;
}
export interface PagesProjectDeploymentConfigsProductionMtlsCertificates {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#certificate_id PagesProject#certificate_id}
    */
    readonly certificateId: string;
}
export declare function pagesProjectDeploymentConfigsProductionMtlsCertificatesToTerraform(struct?: PagesProjectDeploymentConfigsProductionMtlsCertificates | cdktf.IResolvable): any;
export declare function pagesProjectDeploymentConfigsProductionMtlsCertificatesToHclTerraform(struct?: PagesProjectDeploymentConfigsProductionMtlsCertificates | cdktf.IResolvable): any;
export declare class PagesProjectDeploymentConfigsProductionMtlsCertificatesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): PagesProjectDeploymentConfigsProductionMtlsCertificates | cdktf.IResolvable | undefined;
    set internalValue(value: PagesProjectDeploymentConfigsProductionMtlsCertificates | cdktf.IResolvable | undefined);
    private _certificateId?;
    get certificateId(): string;
    set certificateId(value: string);
    get certificateIdInput(): string;
}
export declare class PagesProjectDeploymentConfigsProductionMtlsCertificatesMap extends cdktf.ComplexMap {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    internalValue?: {
        [key: string]: PagesProjectDeploymentConfigsProductionMtlsCertificates;
    } | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    /**
    * @param key the key of the item to return
    */
    get(key: string): PagesProjectDeploymentConfigsProductionMtlsCertificatesOutputReference;
}
export interface PagesProjectDeploymentConfigsProductionPlacement {
    /**
    * Placement mode.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#mode PagesProject#mode}
    */
    readonly mode?: string;
}
export declare function pagesProjectDeploymentConfigsProductionPlacementToTerraform(struct?: PagesProjectDeploymentConfigsProductionPlacement | cdktf.IResolvable): any;
export declare function pagesProjectDeploymentConfigsProductionPlacementToHclTerraform(struct?: PagesProjectDeploymentConfigsProductionPlacement | cdktf.IResolvable): any;
export declare class PagesProjectDeploymentConfigsProductionPlacementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PagesProjectDeploymentConfigsProductionPlacement | cdktf.IResolvable | undefined;
    set internalValue(value: PagesProjectDeploymentConfigsProductionPlacement | cdktf.IResolvable | undefined);
    private _mode?;
    get mode(): string;
    set mode(value: string);
    resetMode(): void;
    get modeInput(): string;
}
export interface PagesProjectDeploymentConfigsProductionQueueProducers {
    /**
    * Name of the Queue.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#name PagesProject#name}
    */
    readonly name: string;
}
export declare function pagesProjectDeploymentConfigsProductionQueueProducersToTerraform(struct?: PagesProjectDeploymentConfigsProductionQueueProducers | cdktf.IResolvable): any;
export declare function pagesProjectDeploymentConfigsProductionQueueProducersToHclTerraform(struct?: PagesProjectDeploymentConfigsProductionQueueProducers | cdktf.IResolvable): any;
export declare class PagesProjectDeploymentConfigsProductionQueueProducersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): PagesProjectDeploymentConfigsProductionQueueProducers | cdktf.IResolvable | undefined;
    set internalValue(value: PagesProjectDeploymentConfigsProductionQueueProducers | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export declare class PagesProjectDeploymentConfigsProductionQueueProducersMap extends cdktf.ComplexMap {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    internalValue?: {
        [key: string]: PagesProjectDeploymentConfigsProductionQueueProducers;
    } | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    /**
    * @param key the key of the item to return
    */
    get(key: string): PagesProjectDeploymentConfigsProductionQueueProducersOutputReference;
}
export interface PagesProjectDeploymentConfigsProductionR2Buckets {
    /**
    * Jurisdiction of the R2 bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#jurisdiction PagesProject#jurisdiction}
    */
    readonly jurisdiction?: string;
    /**
    * Name of the R2 bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#name PagesProject#name}
    */
    readonly name: string;
}
export declare function pagesProjectDeploymentConfigsProductionR2BucketsToTerraform(struct?: PagesProjectDeploymentConfigsProductionR2Buckets | cdktf.IResolvable): any;
export declare function pagesProjectDeploymentConfigsProductionR2BucketsToHclTerraform(struct?: PagesProjectDeploymentConfigsProductionR2Buckets | cdktf.IResolvable): any;
export declare class PagesProjectDeploymentConfigsProductionR2BucketsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): PagesProjectDeploymentConfigsProductionR2Buckets | cdktf.IResolvable | undefined;
    set internalValue(value: PagesProjectDeploymentConfigsProductionR2Buckets | cdktf.IResolvable | undefined);
    private _jurisdiction?;
    get jurisdiction(): string;
    set jurisdiction(value: string);
    resetJurisdiction(): void;
    get jurisdictionInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export declare class PagesProjectDeploymentConfigsProductionR2BucketsMap extends cdktf.ComplexMap {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    internalValue?: {
        [key: string]: PagesProjectDeploymentConfigsProductionR2Buckets;
    } | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    /**
    * @param key the key of the item to return
    */
    get(key: string): PagesProjectDeploymentConfigsProductionR2BucketsOutputReference;
}
export interface PagesProjectDeploymentConfigsProductionServices {
    /**
    * The entrypoint to bind to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#entrypoint PagesProject#entrypoint}
    */
    readonly entrypoint?: string;
    /**
    * The Service environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#environment PagesProject#environment}
    */
    readonly environment?: string;
    /**
    * The Service name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#service PagesProject#service}
    */
    readonly service: string;
}
export declare function pagesProjectDeploymentConfigsProductionServicesToTerraform(struct?: PagesProjectDeploymentConfigsProductionServices | cdktf.IResolvable): any;
export declare function pagesProjectDeploymentConfigsProductionServicesToHclTerraform(struct?: PagesProjectDeploymentConfigsProductionServices | cdktf.IResolvable): any;
export declare class PagesProjectDeploymentConfigsProductionServicesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): PagesProjectDeploymentConfigsProductionServices | cdktf.IResolvable | undefined;
    set internalValue(value: PagesProjectDeploymentConfigsProductionServices | cdktf.IResolvable | undefined);
    private _entrypoint?;
    get entrypoint(): string;
    set entrypoint(value: string);
    resetEntrypoint(): void;
    get entrypointInput(): string;
    private _environment?;
    get environment(): string;
    set environment(value: string);
    resetEnvironment(): void;
    get environmentInput(): string;
    private _service?;
    get service(): string;
    set service(value: string);
    get serviceInput(): string;
}
export declare class PagesProjectDeploymentConfigsProductionServicesMap extends cdktf.ComplexMap {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    internalValue?: {
        [key: string]: PagesProjectDeploymentConfigsProductionServices;
    } | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    /**
    * @param key the key of the item to return
    */
    get(key: string): PagesProjectDeploymentConfigsProductionServicesOutputReference;
}
export interface PagesProjectDeploymentConfigsProductionVectorizeBindings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#index_name PagesProject#index_name}
    */
    readonly indexName: string;
}
export declare function pagesProjectDeploymentConfigsProductionVectorizeBindingsToTerraform(struct?: PagesProjectDeploymentConfigsProductionVectorizeBindings | cdktf.IResolvable): any;
export declare function pagesProjectDeploymentConfigsProductionVectorizeBindingsToHclTerraform(struct?: PagesProjectDeploymentConfigsProductionVectorizeBindings | cdktf.IResolvable): any;
export declare class PagesProjectDeploymentConfigsProductionVectorizeBindingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): PagesProjectDeploymentConfigsProductionVectorizeBindings | cdktf.IResolvable | undefined;
    set internalValue(value: PagesProjectDeploymentConfigsProductionVectorizeBindings | cdktf.IResolvable | undefined);
    private _indexName?;
    get indexName(): string;
    set indexName(value: string);
    get indexNameInput(): string;
}
export declare class PagesProjectDeploymentConfigsProductionVectorizeBindingsMap extends cdktf.ComplexMap {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    internalValue?: {
        [key: string]: PagesProjectDeploymentConfigsProductionVectorizeBindings;
    } | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    /**
    * @param key the key of the item to return
    */
    get(key: string): PagesProjectDeploymentConfigsProductionVectorizeBindingsOutputReference;
}
export interface PagesProjectDeploymentConfigsProduction {
    /**
    * Constellation bindings used for Pages Functions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#ai_bindings PagesProject#ai_bindings}
    */
    readonly aiBindings?: {
        [key: string]: PagesProjectDeploymentConfigsProductionAiBindings;
    } | cdktf.IResolvable;
    /**
    * Whether to always use the latest compatibility date for Pages Functions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#always_use_latest_compatibility_date PagesProject#always_use_latest_compatibility_date}
    */
    readonly alwaysUseLatestCompatibilityDate?: boolean | cdktf.IResolvable;
    /**
    * Analytics Engine bindings used for Pages Functions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#analytics_engine_datasets PagesProject#analytics_engine_datasets}
    */
    readonly analyticsEngineDatasets?: {
        [key: string]: PagesProjectDeploymentConfigsProductionAnalyticsEngineDatasets;
    } | cdktf.IResolvable;
    /**
    * Browser bindings used for Pages Functions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#browsers PagesProject#browsers}
    */
    readonly browsers?: {
        [key: string]: PagesProjectDeploymentConfigsProductionBrowsers;
    } | cdktf.IResolvable;
    /**
    * The major version of the build image to use for Pages Functions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#build_image_major_version PagesProject#build_image_major_version}
    */
    readonly buildImageMajorVersion?: number;
    /**
    * Compatibility date used for Pages Functions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#compatibility_date PagesProject#compatibility_date}
    */
    readonly compatibilityDate?: string;
    /**
    * Compatibility flags used for Pages Functions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#compatibility_flags PagesProject#compatibility_flags}
    */
    readonly compatibilityFlags?: string[];
    /**
    * D1 databases used for Pages Functions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#d1_databases PagesProject#d1_databases}
    */
    readonly d1Databases?: {
        [key: string]: PagesProjectDeploymentConfigsProductionD1Databases;
    } | cdktf.IResolvable;
    /**
    * Durable Object namespaces used for Pages Functions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#durable_object_namespaces PagesProject#durable_object_namespaces}
    */
    readonly durableObjectNamespaces?: {
        [key: string]: PagesProjectDeploymentConfigsProductionDurableObjectNamespaces;
    } | cdktf.IResolvable;
    /**
    * Environment variables used for builds and Pages Functions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#env_vars PagesProject#env_vars}
    */
    readonly envVars?: {
        [key: string]: PagesProjectDeploymentConfigsProductionEnvVars;
    } | cdktf.IResolvable;
    /**
    * Whether to fail open when the deployment config cannot be applied.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#fail_open PagesProject#fail_open}
    */
    readonly failOpen?: boolean | cdktf.IResolvable;
    /**
    * Hyperdrive bindings used for Pages Functions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#hyperdrive_bindings PagesProject#hyperdrive_bindings}
    */
    readonly hyperdriveBindings?: {
        [key: string]: PagesProjectDeploymentConfigsProductionHyperdriveBindings;
    } | cdktf.IResolvable;
    /**
    * KV namespaces used for Pages Functions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#kv_namespaces PagesProject#kv_namespaces}
    */
    readonly kvNamespaces?: {
        [key: string]: PagesProjectDeploymentConfigsProductionKvNamespaces;
    } | cdktf.IResolvable;
    /**
    * Limits for Pages Functions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#limits PagesProject#limits}
    */
    readonly limits?: PagesProjectDeploymentConfigsProductionLimits;
    /**
    * mTLS bindings used for Pages Functions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#mtls_certificates PagesProject#mtls_certificates}
    */
    readonly mtlsCertificates?: {
        [key: string]: PagesProjectDeploymentConfigsProductionMtlsCertificates;
    } | cdktf.IResolvable;
    /**
    * Placement setting used for Pages Functions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#placement PagesProject#placement}
    */
    readonly placement?: PagesProjectDeploymentConfigsProductionPlacement;
    /**
    * Queue Producer bindings used for Pages Functions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#queue_producers PagesProject#queue_producers}
    */
    readonly queueProducers?: {
        [key: string]: PagesProjectDeploymentConfigsProductionQueueProducers;
    } | cdktf.IResolvable;
    /**
    * R2 buckets used for Pages Functions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#r2_buckets PagesProject#r2_buckets}
    */
    readonly r2Buckets?: {
        [key: string]: PagesProjectDeploymentConfigsProductionR2Buckets;
    } | cdktf.IResolvable;
    /**
    * Services used for Pages Functions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#services PagesProject#services}
    */
    readonly services?: {
        [key: string]: PagesProjectDeploymentConfigsProductionServices;
    } | cdktf.IResolvable;
    /**
    * The usage model for Pages Functions.
    * Available values: "standard", "bundled", "unbound".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#usage_model PagesProject#usage_model}
    */
    readonly usageModel?: string;
    /**
    * Vectorize bindings used for Pages Functions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#vectorize_bindings PagesProject#vectorize_bindings}
    */
    readonly vectorizeBindings?: {
        [key: string]: PagesProjectDeploymentConfigsProductionVectorizeBindings;
    } | cdktf.IResolvable;
    /**
    * Hash of the Wrangler configuration used for the deployment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#wrangler_config_hash PagesProject#wrangler_config_hash}
    */
    readonly wranglerConfigHash?: string;
}
export declare function pagesProjectDeploymentConfigsProductionToTerraform(struct?: PagesProjectDeploymentConfigsProduction | cdktf.IResolvable): any;
export declare function pagesProjectDeploymentConfigsProductionToHclTerraform(struct?: PagesProjectDeploymentConfigsProduction | cdktf.IResolvable): any;
export declare class PagesProjectDeploymentConfigsProductionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PagesProjectDeploymentConfigsProduction | cdktf.IResolvable | undefined;
    set internalValue(value: PagesProjectDeploymentConfigsProduction | cdktf.IResolvable | undefined);
    private _aiBindings;
    get aiBindings(): PagesProjectDeploymentConfigsProductionAiBindingsMap;
    putAiBindings(value: {
        [key: string]: PagesProjectDeploymentConfigsProductionAiBindings;
    } | cdktf.IResolvable): void;
    resetAiBindings(): void;
    get aiBindingsInput(): any;
    private _alwaysUseLatestCompatibilityDate?;
    get alwaysUseLatestCompatibilityDate(): boolean | cdktf.IResolvable;
    set alwaysUseLatestCompatibilityDate(value: boolean | cdktf.IResolvable);
    resetAlwaysUseLatestCompatibilityDate(): void;
    get alwaysUseLatestCompatibilityDateInput(): any;
    private _analyticsEngineDatasets;
    get analyticsEngineDatasets(): PagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsMap;
    putAnalyticsEngineDatasets(value: {
        [key: string]: PagesProjectDeploymentConfigsProductionAnalyticsEngineDatasets;
    } | cdktf.IResolvable): void;
    resetAnalyticsEngineDatasets(): void;
    get analyticsEngineDatasetsInput(): any;
    private _browsers;
    get browsers(): PagesProjectDeploymentConfigsProductionBrowsersMap;
    putBrowsers(value: {
        [key: string]: PagesProjectDeploymentConfigsProductionBrowsers;
    } | cdktf.IResolvable): void;
    resetBrowsers(): void;
    get browsersInput(): any;
    private _buildImageMajorVersion?;
    get buildImageMajorVersion(): number;
    set buildImageMajorVersion(value: number);
    resetBuildImageMajorVersion(): void;
    get buildImageMajorVersionInput(): number;
    private _compatibilityDate?;
    get compatibilityDate(): string;
    set compatibilityDate(value: string);
    resetCompatibilityDate(): void;
    get compatibilityDateInput(): string;
    private _compatibilityFlags?;
    get compatibilityFlags(): string[];
    set compatibilityFlags(value: string[]);
    resetCompatibilityFlags(): void;
    get compatibilityFlagsInput(): string[];
    private _d1Databases;
    get d1Databases(): PagesProjectDeploymentConfigsProductionD1DatabasesMap;
    putD1Databases(value: {
        [key: string]: PagesProjectDeploymentConfigsProductionD1Databases;
    } | cdktf.IResolvable): void;
    resetD1Databases(): void;
    get d1DatabasesInput(): any;
    private _durableObjectNamespaces;
    get durableObjectNamespaces(): PagesProjectDeploymentConfigsProductionDurableObjectNamespacesMap;
    putDurableObjectNamespaces(value: {
        [key: string]: PagesProjectDeploymentConfigsProductionDurableObjectNamespaces;
    } | cdktf.IResolvable): void;
    resetDurableObjectNamespaces(): void;
    get durableObjectNamespacesInput(): any;
    private _envVars;
    get envVars(): PagesProjectDeploymentConfigsProductionEnvVarsMap;
    putEnvVars(value: {
        [key: string]: PagesProjectDeploymentConfigsProductionEnvVars;
    } | cdktf.IResolvable): void;
    resetEnvVars(): void;
    get envVarsInput(): any;
    private _failOpen?;
    get failOpen(): boolean | cdktf.IResolvable;
    set failOpen(value: boolean | cdktf.IResolvable);
    resetFailOpen(): void;
    get failOpenInput(): any;
    private _hyperdriveBindings;
    get hyperdriveBindings(): PagesProjectDeploymentConfigsProductionHyperdriveBindingsMap;
    putHyperdriveBindings(value: {
        [key: string]: PagesProjectDeploymentConfigsProductionHyperdriveBindings;
    } | cdktf.IResolvable): void;
    resetHyperdriveBindings(): void;
    get hyperdriveBindingsInput(): any;
    private _kvNamespaces;
    get kvNamespaces(): PagesProjectDeploymentConfigsProductionKvNamespacesMap;
    putKvNamespaces(value: {
        [key: string]: PagesProjectDeploymentConfigsProductionKvNamespaces;
    } | cdktf.IResolvable): void;
    resetKvNamespaces(): void;
    get kvNamespacesInput(): any;
    private _limits;
    get limits(): PagesProjectDeploymentConfigsProductionLimitsOutputReference;
    putLimits(value: PagesProjectDeploymentConfigsProductionLimits): void;
    resetLimits(): void;
    get limitsInput(): any;
    private _mtlsCertificates;
    get mtlsCertificates(): PagesProjectDeploymentConfigsProductionMtlsCertificatesMap;
    putMtlsCertificates(value: {
        [key: string]: PagesProjectDeploymentConfigsProductionMtlsCertificates;
    } | cdktf.IResolvable): void;
    resetMtlsCertificates(): void;
    get mtlsCertificatesInput(): any;
    private _placement;
    get placement(): PagesProjectDeploymentConfigsProductionPlacementOutputReference;
    putPlacement(value: PagesProjectDeploymentConfigsProductionPlacement): void;
    resetPlacement(): void;
    get placementInput(): any;
    private _queueProducers;
    get queueProducers(): PagesProjectDeploymentConfigsProductionQueueProducersMap;
    putQueueProducers(value: {
        [key: string]: PagesProjectDeploymentConfigsProductionQueueProducers;
    } | cdktf.IResolvable): void;
    resetQueueProducers(): void;
    get queueProducersInput(): any;
    private _r2Buckets;
    get r2Buckets(): PagesProjectDeploymentConfigsProductionR2BucketsMap;
    putR2Buckets(value: {
        [key: string]: PagesProjectDeploymentConfigsProductionR2Buckets;
    } | cdktf.IResolvable): void;
    resetR2Buckets(): void;
    get r2BucketsInput(): any;
    private _services;
    get services(): PagesProjectDeploymentConfigsProductionServicesMap;
    putServices(value: {
        [key: string]: PagesProjectDeploymentConfigsProductionServices;
    } | cdktf.IResolvable): void;
    resetServices(): void;
    get servicesInput(): any;
    private _usageModel?;
    get usageModel(): string;
    set usageModel(value: string);
    resetUsageModel(): void;
    get usageModelInput(): string;
    private _vectorizeBindings;
    get vectorizeBindings(): PagesProjectDeploymentConfigsProductionVectorizeBindingsMap;
    putVectorizeBindings(value: {
        [key: string]: PagesProjectDeploymentConfigsProductionVectorizeBindings;
    } | cdktf.IResolvable): void;
    resetVectorizeBindings(): void;
    get vectorizeBindingsInput(): any;
    private _wranglerConfigHash?;
    get wranglerConfigHash(): string;
    set wranglerConfigHash(value: string);
    resetWranglerConfigHash(): void;
    get wranglerConfigHashInput(): string;
}
export interface PagesProjectDeploymentConfigs {
    /**
    * Configs for preview deploys.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#preview PagesProject#preview}
    */
    readonly preview?: PagesProjectDeploymentConfigsPreview;
    /**
    * Configs for production deploys.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#production PagesProject#production}
    */
    readonly production?: PagesProjectDeploymentConfigsProduction;
}
export declare function pagesProjectDeploymentConfigsToTerraform(struct?: PagesProjectDeploymentConfigs | cdktf.IResolvable): any;
export declare function pagesProjectDeploymentConfigsToHclTerraform(struct?: PagesProjectDeploymentConfigs | cdktf.IResolvable): any;
export declare class PagesProjectDeploymentConfigsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PagesProjectDeploymentConfigs | cdktf.IResolvable | undefined;
    set internalValue(value: PagesProjectDeploymentConfigs | cdktf.IResolvable | undefined);
    private _preview;
    get preview(): PagesProjectDeploymentConfigsPreviewOutputReference;
    putPreview(value: PagesProjectDeploymentConfigsPreview): void;
    resetPreview(): void;
    get previewInput(): any;
    private _production;
    get production(): PagesProjectDeploymentConfigsProductionOutputReference;
    putProduction(value: PagesProjectDeploymentConfigsProduction): void;
    resetProduction(): void;
    get productionInput(): any;
}
export interface PagesProjectLatestDeploymentBuildConfig {
}
export declare function pagesProjectLatestDeploymentBuildConfigToTerraform(struct?: PagesProjectLatestDeploymentBuildConfig): any;
export declare function pagesProjectLatestDeploymentBuildConfigToHclTerraform(struct?: PagesProjectLatestDeploymentBuildConfig): any;
export declare class PagesProjectLatestDeploymentBuildConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PagesProjectLatestDeploymentBuildConfig | undefined;
    set internalValue(value: PagesProjectLatestDeploymentBuildConfig | undefined);
    get buildCaching(): any;
    get buildCommand(): any;
    get destinationDir(): any;
    get rootDir(): any;
    get webAnalyticsTag(): any;
    get webAnalyticsToken(): any;
}
export interface PagesProjectLatestDeploymentDeploymentTriggerMetadata {
}
export declare function pagesProjectLatestDeploymentDeploymentTriggerMetadataToTerraform(struct?: PagesProjectLatestDeploymentDeploymentTriggerMetadata): any;
export declare function pagesProjectLatestDeploymentDeploymentTriggerMetadataToHclTerraform(struct?: PagesProjectLatestDeploymentDeploymentTriggerMetadata): any;
export declare class PagesProjectLatestDeploymentDeploymentTriggerMetadataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PagesProjectLatestDeploymentDeploymentTriggerMetadata | undefined;
    set internalValue(value: PagesProjectLatestDeploymentDeploymentTriggerMetadata | undefined);
    get branch(): any;
    get commitDirty(): any;
    get commitHash(): any;
    get commitMessage(): any;
}
export interface PagesProjectLatestDeploymentDeploymentTrigger {
}
export declare function pagesProjectLatestDeploymentDeploymentTriggerToTerraform(struct?: PagesProjectLatestDeploymentDeploymentTrigger): any;
export declare function pagesProjectLatestDeploymentDeploymentTriggerToHclTerraform(struct?: PagesProjectLatestDeploymentDeploymentTrigger): any;
export declare class PagesProjectLatestDeploymentDeploymentTriggerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PagesProjectLatestDeploymentDeploymentTrigger | undefined;
    set internalValue(value: PagesProjectLatestDeploymentDeploymentTrigger | undefined);
    private _metadata;
    get metadata(): PagesProjectLatestDeploymentDeploymentTriggerMetadataOutputReference;
    get type(): any;
}
export interface PagesProjectLatestDeploymentEnvVars {
}
export declare function pagesProjectLatestDeploymentEnvVarsToTerraform(struct?: PagesProjectLatestDeploymentEnvVars): any;
export declare function pagesProjectLatestDeploymentEnvVarsToHclTerraform(struct?: PagesProjectLatestDeploymentEnvVars): any;
export declare class PagesProjectLatestDeploymentEnvVarsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): PagesProjectLatestDeploymentEnvVars | undefined;
    set internalValue(value: PagesProjectLatestDeploymentEnvVars | undefined);
    get type(): any;
    get value(): any;
}
export declare class PagesProjectLatestDeploymentEnvVarsMap extends cdktf.ComplexMap {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    /**
    * @param key the key of the item to return
    */
    get(key: string): PagesProjectLatestDeploymentEnvVarsOutputReference;
}
export interface PagesProjectLatestDeploymentLatestStage {
}
export declare function pagesProjectLatestDeploymentLatestStageToTerraform(struct?: PagesProjectLatestDeploymentLatestStage): any;
export declare function pagesProjectLatestDeploymentLatestStageToHclTerraform(struct?: PagesProjectLatestDeploymentLatestStage): any;
export declare class PagesProjectLatestDeploymentLatestStageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PagesProjectLatestDeploymentLatestStage | undefined;
    set internalValue(value: PagesProjectLatestDeploymentLatestStage | undefined);
    get endedOn(): any;
    get name(): any;
    get startedOn(): any;
    get status(): any;
}
export interface PagesProjectLatestDeploymentSourceConfig {
}
export declare function pagesProjectLatestDeploymentSourceConfigToTerraform(struct?: PagesProjectLatestDeploymentSourceConfig): any;
export declare function pagesProjectLatestDeploymentSourceConfigToHclTerraform(struct?: PagesProjectLatestDeploymentSourceConfig): any;
export declare class PagesProjectLatestDeploymentSourceConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PagesProjectLatestDeploymentSourceConfig | undefined;
    set internalValue(value: PagesProjectLatestDeploymentSourceConfig | undefined);
    get deploymentsEnabled(): any;
    get owner(): any;
    get ownerId(): any;
    get pathExcludes(): any;
    get pathIncludes(): any;
    get prCommentsEnabled(): any;
    get previewBranchExcludes(): any;
    get previewBranchIncludes(): any;
    get previewDeploymentSetting(): any;
    get productionBranch(): any;
    get productionDeploymentsEnabled(): any;
    get repoId(): any;
    get repoName(): any;
}
export interface PagesProjectLatestDeploymentSource {
}
export declare function pagesProjectLatestDeploymentSourceToTerraform(struct?: PagesProjectLatestDeploymentSource): any;
export declare function pagesProjectLatestDeploymentSourceToHclTerraform(struct?: PagesProjectLatestDeploymentSource): any;
export declare class PagesProjectLatestDeploymentSourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PagesProjectLatestDeploymentSource | undefined;
    set internalValue(value: PagesProjectLatestDeploymentSource | undefined);
    private _config;
    get config(): PagesProjectLatestDeploymentSourceConfigOutputReference;
    get type(): any;
}
export interface PagesProjectLatestDeploymentStages {
}
export declare function pagesProjectLatestDeploymentStagesToTerraform(struct?: PagesProjectLatestDeploymentStages): any;
export declare function pagesProjectLatestDeploymentStagesToHclTerraform(struct?: PagesProjectLatestDeploymentStages): any;
export declare class PagesProjectLatestDeploymentStagesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): PagesProjectLatestDeploymentStages | undefined;
    set internalValue(value: PagesProjectLatestDeploymentStages | undefined);
    get endedOn(): any;
    get name(): any;
    get startedOn(): any;
    get status(): any;
}
export declare class PagesProjectLatestDeploymentStagesList extends cdktf.ComplexList {
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
    get(index: number): PagesProjectLatestDeploymentStagesOutputReference;
}
export interface PagesProjectLatestDeployment {
}
export declare function pagesProjectLatestDeploymentToTerraform(struct?: PagesProjectLatestDeployment): any;
export declare function pagesProjectLatestDeploymentToHclTerraform(struct?: PagesProjectLatestDeployment): any;
export declare class PagesProjectLatestDeploymentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PagesProjectLatestDeployment | undefined;
    set internalValue(value: PagesProjectLatestDeployment | undefined);
    get aliases(): any;
    private _buildConfig;
    get buildConfig(): PagesProjectLatestDeploymentBuildConfigOutputReference;
    get createdOn(): any;
    private _deploymentTrigger;
    get deploymentTrigger(): PagesProjectLatestDeploymentDeploymentTriggerOutputReference;
    private _envVars;
    get envVars(): PagesProjectLatestDeploymentEnvVarsMap;
    get environment(): any;
    get id(): any;
    get isSkipped(): any;
    private _latestStage;
    get latestStage(): PagesProjectLatestDeploymentLatestStageOutputReference;
    get modifiedOn(): any;
    get projectId(): any;
    get projectName(): any;
    get shortId(): any;
    private _source;
    get source(): PagesProjectLatestDeploymentSourceOutputReference;
    private _stages;
    get stages(): PagesProjectLatestDeploymentStagesList;
    get url(): any;
    get usesFunctions(): any;
}
export interface PagesProjectSourceConfig {
    /**
    * Whether to enable automatic deployments when pushing to the source repository.
    * When disabled, no deployments (production or preview) will be triggered automatically.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#deployments_enabled PagesProject#deployments_enabled}
    */
    readonly deploymentsEnabled?: boolean | cdktf.IResolvable;
    /**
    * The owner of the repository.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#owner PagesProject#owner}
    */
    readonly owner?: string;
    /**
    * The owner ID of the repository.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#owner_id PagesProject#owner_id}
    */
    readonly ownerId?: string;
    /**
    * A list of paths that should be excluded from triggering a preview deployment. Wildcard syntax (`*`) is supported.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#path_excludes PagesProject#path_excludes}
    */
    readonly pathExcludes?: string[];
    /**
    * A list of paths that should be watched to trigger a preview deployment. Wildcard syntax (`*`) is supported.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#path_includes PagesProject#path_includes}
    */
    readonly pathIncludes?: string[];
    /**
    * Whether to enable PR comments.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#pr_comments_enabled PagesProject#pr_comments_enabled}
    */
    readonly prCommentsEnabled?: boolean | cdktf.IResolvable;
    /**
    * A list of branches that should not trigger a preview deployment. Wildcard syntax (`*`) is supported. Must be used with `preview_deployment_setting` set to `custom`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#preview_branch_excludes PagesProject#preview_branch_excludes}
    */
    readonly previewBranchExcludes?: string[];
    /**
    * A list of branches that should trigger a preview deployment. Wildcard syntax (`*`) is supported. Must be used with `preview_deployment_setting` set to `custom`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#preview_branch_includes PagesProject#preview_branch_includes}
    */
    readonly previewBranchIncludes?: string[];
    /**
    * Controls whether commits to preview branches trigger a preview deployment.
    * Available values: "all", "none", "custom".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#preview_deployment_setting PagesProject#preview_deployment_setting}
    */
    readonly previewDeploymentSetting?: string;
    /**
    * The production branch of the repository.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#production_branch PagesProject#production_branch}
    */
    readonly productionBranch?: string;
    /**
    * Whether to trigger a production deployment on commits to the production branch.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#production_deployments_enabled PagesProject#production_deployments_enabled}
    */
    readonly productionDeploymentsEnabled?: boolean | cdktf.IResolvable;
    /**
    * The ID of the repository.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#repo_id PagesProject#repo_id}
    */
    readonly repoId?: string;
    /**
    * The name of the repository.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#repo_name PagesProject#repo_name}
    */
    readonly repoName?: string;
}
export declare function pagesProjectSourceConfigToTerraform(struct?: PagesProjectSourceConfig | cdktf.IResolvable): any;
export declare function pagesProjectSourceConfigToHclTerraform(struct?: PagesProjectSourceConfig | cdktf.IResolvable): any;
export declare class PagesProjectSourceConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PagesProjectSourceConfig | cdktf.IResolvable | undefined;
    set internalValue(value: PagesProjectSourceConfig | cdktf.IResolvable | undefined);
    private _deploymentsEnabled?;
    get deploymentsEnabled(): boolean | cdktf.IResolvable;
    set deploymentsEnabled(value: boolean | cdktf.IResolvable);
    resetDeploymentsEnabled(): void;
    get deploymentsEnabledInput(): any;
    private _owner?;
    get owner(): string;
    set owner(value: string);
    resetOwner(): void;
    get ownerInput(): string;
    private _ownerId?;
    get ownerId(): string;
    set ownerId(value: string);
    resetOwnerId(): void;
    get ownerIdInput(): string;
    private _pathExcludes?;
    get pathExcludes(): string[];
    set pathExcludes(value: string[]);
    resetPathExcludes(): void;
    get pathExcludesInput(): string[];
    private _pathIncludes?;
    get pathIncludes(): string[];
    set pathIncludes(value: string[]);
    resetPathIncludes(): void;
    get pathIncludesInput(): string[];
    private _prCommentsEnabled?;
    get prCommentsEnabled(): boolean | cdktf.IResolvable;
    set prCommentsEnabled(value: boolean | cdktf.IResolvable);
    resetPrCommentsEnabled(): void;
    get prCommentsEnabledInput(): any;
    private _previewBranchExcludes?;
    get previewBranchExcludes(): string[];
    set previewBranchExcludes(value: string[]);
    resetPreviewBranchExcludes(): void;
    get previewBranchExcludesInput(): string[];
    private _previewBranchIncludes?;
    get previewBranchIncludes(): string[];
    set previewBranchIncludes(value: string[]);
    resetPreviewBranchIncludes(): void;
    get previewBranchIncludesInput(): string[];
    private _previewDeploymentSetting?;
    get previewDeploymentSetting(): string;
    set previewDeploymentSetting(value: string);
    resetPreviewDeploymentSetting(): void;
    get previewDeploymentSettingInput(): string;
    private _productionBranch?;
    get productionBranch(): string;
    set productionBranch(value: string);
    resetProductionBranch(): void;
    get productionBranchInput(): string;
    private _productionDeploymentsEnabled?;
    get productionDeploymentsEnabled(): boolean | cdktf.IResolvable;
    set productionDeploymentsEnabled(value: boolean | cdktf.IResolvable);
    resetProductionDeploymentsEnabled(): void;
    get productionDeploymentsEnabledInput(): any;
    private _repoId?;
    get repoId(): string;
    set repoId(value: string);
    resetRepoId(): void;
    get repoIdInput(): string;
    private _repoName?;
    get repoName(): string;
    set repoName(value: string);
    resetRepoName(): void;
    get repoNameInput(): string;
}
export interface PagesProjectSource {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#config PagesProject#config}
    */
    readonly config: PagesProjectSourceConfig;
    /**
    * The source control management provider.
    * Available values: "github", "gitlab".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#type PagesProject#type}
    */
    readonly type: string;
}
export declare function pagesProjectSourceToTerraform(struct?: PagesProjectSource | cdktf.IResolvable): any;
export declare function pagesProjectSourceToHclTerraform(struct?: PagesProjectSource | cdktf.IResolvable): any;
export declare class PagesProjectSourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PagesProjectSource | cdktf.IResolvable | undefined;
    set internalValue(value: PagesProjectSource | cdktf.IResolvable | undefined);
    private _config;
    get config(): PagesProjectSourceConfigOutputReference;
    putConfig(value: PagesProjectSourceConfig): void;
    get configInput(): any;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project cloudflare_pages_project}
*/
export declare class PagesProject extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_pages_project";
    /**
    * Generates CDKTF code for importing a PagesProject resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the PagesProject to import
    * @param importFromId The id of the existing PagesProject that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the PagesProject to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project cloudflare_pages_project} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PagesProjectConfig
    */
    constructor(scope: Construct, id: string, config: PagesProjectConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _buildConfig;
    get buildConfig(): PagesProjectBuildConfigOutputReference;
    putBuildConfig(value: PagesProjectBuildConfig): void;
    resetBuildConfig(): void;
    get buildConfigInput(): any;
    private _canonicalDeployment;
    get canonicalDeployment(): PagesProjectCanonicalDeploymentOutputReference;
    get createdOn(): any;
    private _deploymentConfigs;
    get deploymentConfigs(): PagesProjectDeploymentConfigsOutputReference;
    putDeploymentConfigs(value: PagesProjectDeploymentConfigs): void;
    resetDeploymentConfigs(): void;
    get deploymentConfigsInput(): any;
    get domains(): any;
    get framework(): any;
    get frameworkVersion(): any;
    get id(): any;
    private _latestDeployment;
    get latestDeployment(): PagesProjectLatestDeploymentOutputReference;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get previewScriptName(): any;
    private _productionBranch?;
    get productionBranch(): string;
    set productionBranch(value: string);
    get productionBranchInput(): string;
    get productionScriptName(): any;
    private _source;
    get source(): PagesProjectSourceOutputReference;
    putSource(value: PagesProjectSource): void;
    resetSource(): void;
    get sourceInput(): any;
    get subdomain(): any;
    get usesFunctions(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
