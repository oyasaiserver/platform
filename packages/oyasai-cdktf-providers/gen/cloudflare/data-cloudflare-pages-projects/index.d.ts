import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflarePagesProjectsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pages_projects#account_id DataCloudflarePagesProjects#account_id}
    */
    readonly accountId?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pages_projects#max_items DataCloudflarePagesProjects#max_items}
    */
    readonly maxItems?: number;
}
export interface DataCloudflarePagesProjectsResultBuildConfig {
}
export declare function dataCloudflarePagesProjectsResultBuildConfigToTerraform(struct?: DataCloudflarePagesProjectsResultBuildConfig): any;
export declare function dataCloudflarePagesProjectsResultBuildConfigToHclTerraform(struct?: DataCloudflarePagesProjectsResultBuildConfig): any;
export declare class DataCloudflarePagesProjectsResultBuildConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePagesProjectsResultBuildConfig | undefined;
    set internalValue(value: DataCloudflarePagesProjectsResultBuildConfig | undefined);
    get buildCaching(): any;
    get buildCommand(): any;
    get destinationDir(): any;
    get rootDir(): any;
    get webAnalyticsTag(): any;
    get webAnalyticsToken(): any;
}
export interface DataCloudflarePagesProjectsResultCanonicalDeploymentBuildConfig {
}
export declare function dataCloudflarePagesProjectsResultCanonicalDeploymentBuildConfigToTerraform(struct?: DataCloudflarePagesProjectsResultCanonicalDeploymentBuildConfig): any;
export declare function dataCloudflarePagesProjectsResultCanonicalDeploymentBuildConfigToHclTerraform(struct?: DataCloudflarePagesProjectsResultCanonicalDeploymentBuildConfig): any;
export declare class DataCloudflarePagesProjectsResultCanonicalDeploymentBuildConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePagesProjectsResultCanonicalDeploymentBuildConfig | undefined;
    set internalValue(value: DataCloudflarePagesProjectsResultCanonicalDeploymentBuildConfig | undefined);
    get buildCaching(): any;
    get buildCommand(): any;
    get destinationDir(): any;
    get rootDir(): any;
    get webAnalyticsTag(): any;
    get webAnalyticsToken(): any;
}
export interface DataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTriggerMetadata {
}
export declare function dataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTriggerMetadataToTerraform(struct?: DataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTriggerMetadata): any;
export declare function dataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTriggerMetadataToHclTerraform(struct?: DataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTriggerMetadata): any;
export declare class DataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTriggerMetadataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTriggerMetadata | undefined;
    set internalValue(value: DataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTriggerMetadata | undefined);
    get branch(): any;
    get commitDirty(): any;
    get commitHash(): any;
    get commitMessage(): any;
}
export interface DataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTrigger {
}
export declare function dataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTriggerToTerraform(struct?: DataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTrigger): any;
export declare function dataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTriggerToHclTerraform(struct?: DataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTrigger): any;
export declare class DataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTriggerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTrigger | undefined;
    set internalValue(value: DataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTrigger | undefined);
    private _metadata;
    get metadata(): DataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTriggerMetadataOutputReference;
    get type(): any;
}
export interface DataCloudflarePagesProjectsResultCanonicalDeploymentEnvVars {
}
export declare function dataCloudflarePagesProjectsResultCanonicalDeploymentEnvVarsToTerraform(struct?: DataCloudflarePagesProjectsResultCanonicalDeploymentEnvVars): any;
export declare function dataCloudflarePagesProjectsResultCanonicalDeploymentEnvVarsToHclTerraform(struct?: DataCloudflarePagesProjectsResultCanonicalDeploymentEnvVars): any;
export declare class DataCloudflarePagesProjectsResultCanonicalDeploymentEnvVarsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): DataCloudflarePagesProjectsResultCanonicalDeploymentEnvVars | undefined;
    set internalValue(value: DataCloudflarePagesProjectsResultCanonicalDeploymentEnvVars | undefined);
    get type(): any;
    get value(): any;
}
export declare class DataCloudflarePagesProjectsResultCanonicalDeploymentEnvVarsMap extends cdktf.ComplexMap {
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
    get(key: string): DataCloudflarePagesProjectsResultCanonicalDeploymentEnvVarsOutputReference;
}
export interface DataCloudflarePagesProjectsResultCanonicalDeploymentLatestStage {
}
export declare function dataCloudflarePagesProjectsResultCanonicalDeploymentLatestStageToTerraform(struct?: DataCloudflarePagesProjectsResultCanonicalDeploymentLatestStage): any;
export declare function dataCloudflarePagesProjectsResultCanonicalDeploymentLatestStageToHclTerraform(struct?: DataCloudflarePagesProjectsResultCanonicalDeploymentLatestStage): any;
export declare class DataCloudflarePagesProjectsResultCanonicalDeploymentLatestStageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePagesProjectsResultCanonicalDeploymentLatestStage | undefined;
    set internalValue(value: DataCloudflarePagesProjectsResultCanonicalDeploymentLatestStage | undefined);
    get endedOn(): any;
    get name(): any;
    get startedOn(): any;
    get status(): any;
}
export interface DataCloudflarePagesProjectsResultCanonicalDeploymentSourceConfig {
}
export declare function dataCloudflarePagesProjectsResultCanonicalDeploymentSourceConfigToTerraform(struct?: DataCloudflarePagesProjectsResultCanonicalDeploymentSourceConfig): any;
export declare function dataCloudflarePagesProjectsResultCanonicalDeploymentSourceConfigToHclTerraform(struct?: DataCloudflarePagesProjectsResultCanonicalDeploymentSourceConfig): any;
export declare class DataCloudflarePagesProjectsResultCanonicalDeploymentSourceConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePagesProjectsResultCanonicalDeploymentSourceConfig | undefined;
    set internalValue(value: DataCloudflarePagesProjectsResultCanonicalDeploymentSourceConfig | undefined);
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
export interface DataCloudflarePagesProjectsResultCanonicalDeploymentSource {
}
export declare function dataCloudflarePagesProjectsResultCanonicalDeploymentSourceToTerraform(struct?: DataCloudflarePagesProjectsResultCanonicalDeploymentSource): any;
export declare function dataCloudflarePagesProjectsResultCanonicalDeploymentSourceToHclTerraform(struct?: DataCloudflarePagesProjectsResultCanonicalDeploymentSource): any;
export declare class DataCloudflarePagesProjectsResultCanonicalDeploymentSourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePagesProjectsResultCanonicalDeploymentSource | undefined;
    set internalValue(value: DataCloudflarePagesProjectsResultCanonicalDeploymentSource | undefined);
    private _config;
    get config(): DataCloudflarePagesProjectsResultCanonicalDeploymentSourceConfigOutputReference;
    get type(): any;
}
export interface DataCloudflarePagesProjectsResultCanonicalDeploymentStages {
}
export declare function dataCloudflarePagesProjectsResultCanonicalDeploymentStagesToTerraform(struct?: DataCloudflarePagesProjectsResultCanonicalDeploymentStages): any;
export declare function dataCloudflarePagesProjectsResultCanonicalDeploymentStagesToHclTerraform(struct?: DataCloudflarePagesProjectsResultCanonicalDeploymentStages): any;
export declare class DataCloudflarePagesProjectsResultCanonicalDeploymentStagesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflarePagesProjectsResultCanonicalDeploymentStages | undefined;
    set internalValue(value: DataCloudflarePagesProjectsResultCanonicalDeploymentStages | undefined);
    get endedOn(): any;
    get name(): any;
    get startedOn(): any;
    get status(): any;
}
export declare class DataCloudflarePagesProjectsResultCanonicalDeploymentStagesList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflarePagesProjectsResultCanonicalDeploymentStagesOutputReference;
}
export interface DataCloudflarePagesProjectsResultCanonicalDeployment {
}
export declare function dataCloudflarePagesProjectsResultCanonicalDeploymentToTerraform(struct?: DataCloudflarePagesProjectsResultCanonicalDeployment): any;
export declare function dataCloudflarePagesProjectsResultCanonicalDeploymentToHclTerraform(struct?: DataCloudflarePagesProjectsResultCanonicalDeployment): any;
export declare class DataCloudflarePagesProjectsResultCanonicalDeploymentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePagesProjectsResultCanonicalDeployment | undefined;
    set internalValue(value: DataCloudflarePagesProjectsResultCanonicalDeployment | undefined);
    get aliases(): any;
    private _buildConfig;
    get buildConfig(): DataCloudflarePagesProjectsResultCanonicalDeploymentBuildConfigOutputReference;
    get createdOn(): any;
    private _deploymentTrigger;
    get deploymentTrigger(): DataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTriggerOutputReference;
    private _envVars;
    get envVars(): DataCloudflarePagesProjectsResultCanonicalDeploymentEnvVarsMap;
    get environment(): any;
    get id(): any;
    get isSkipped(): any;
    private _latestStage;
    get latestStage(): DataCloudflarePagesProjectsResultCanonicalDeploymentLatestStageOutputReference;
    get modifiedOn(): any;
    get projectId(): any;
    get projectName(): any;
    get shortId(): any;
    private _source;
    get source(): DataCloudflarePagesProjectsResultCanonicalDeploymentSourceOutputReference;
    private _stages;
    get stages(): DataCloudflarePagesProjectsResultCanonicalDeploymentStagesList;
    get url(): any;
    get usesFunctions(): any;
}
export interface DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAiBindings {
}
export declare function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewAiBindingsToTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAiBindings): any;
export declare function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewAiBindingsToHclTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAiBindings): any;
export declare class DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAiBindingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAiBindings | undefined;
    set internalValue(value: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAiBindings | undefined);
    get projectId(): any;
}
export declare class DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAiBindingsMap extends cdktf.ComplexMap {
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
    get(key: string): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAiBindingsOutputReference;
}
export interface DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAnalyticsEngineDatasets {
}
export declare function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewAnalyticsEngineDatasetsToTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAnalyticsEngineDatasets): any;
export declare function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewAnalyticsEngineDatasetsToHclTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAnalyticsEngineDatasets): any;
export declare class DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAnalyticsEngineDatasetsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAnalyticsEngineDatasets | undefined;
    set internalValue(value: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAnalyticsEngineDatasets | undefined);
    get dataset(): any;
}
export declare class DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAnalyticsEngineDatasetsMap extends cdktf.ComplexMap {
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
    get(key: string): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAnalyticsEngineDatasetsOutputReference;
}
export interface DataCloudflarePagesProjectsResultDeploymentConfigsPreviewBrowsers {
}
export declare function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewBrowsersToTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewBrowsers): any;
export declare function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewBrowsersToHclTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewBrowsers): any;
export declare class DataCloudflarePagesProjectsResultDeploymentConfigsPreviewBrowsersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewBrowsers | undefined;
    set internalValue(value: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewBrowsers | undefined);
}
export declare class DataCloudflarePagesProjectsResultDeploymentConfigsPreviewBrowsersMap extends cdktf.ComplexMap {
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
    get(key: string): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewBrowsersOutputReference;
}
export interface DataCloudflarePagesProjectsResultDeploymentConfigsPreviewD1Databases {
}
export declare function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewD1DatabasesToTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewD1Databases): any;
export declare function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewD1DatabasesToHclTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewD1Databases): any;
export declare class DataCloudflarePagesProjectsResultDeploymentConfigsPreviewD1DatabasesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewD1Databases | undefined;
    set internalValue(value: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewD1Databases | undefined);
    get id(): any;
}
export declare class DataCloudflarePagesProjectsResultDeploymentConfigsPreviewD1DatabasesMap extends cdktf.ComplexMap {
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
    get(key: string): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewD1DatabasesOutputReference;
}
export interface DataCloudflarePagesProjectsResultDeploymentConfigsPreviewDurableObjectNamespaces {
}
export declare function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewDurableObjectNamespacesToTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewDurableObjectNamespaces): any;
export declare function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewDurableObjectNamespacesToHclTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewDurableObjectNamespaces): any;
export declare class DataCloudflarePagesProjectsResultDeploymentConfigsPreviewDurableObjectNamespacesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewDurableObjectNamespaces | undefined;
    set internalValue(value: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewDurableObjectNamespaces | undefined);
    get namespaceId(): any;
}
export declare class DataCloudflarePagesProjectsResultDeploymentConfigsPreviewDurableObjectNamespacesMap extends cdktf.ComplexMap {
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
    get(key: string): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewDurableObjectNamespacesOutputReference;
}
export interface DataCloudflarePagesProjectsResultDeploymentConfigsPreviewEnvVars {
}
export declare function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewEnvVarsToTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewEnvVars): any;
export declare function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewEnvVarsToHclTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewEnvVars): any;
export declare class DataCloudflarePagesProjectsResultDeploymentConfigsPreviewEnvVarsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewEnvVars | undefined;
    set internalValue(value: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewEnvVars | undefined);
    get type(): any;
    get value(): any;
}
export declare class DataCloudflarePagesProjectsResultDeploymentConfigsPreviewEnvVarsMap extends cdktf.ComplexMap {
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
    get(key: string): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewEnvVarsOutputReference;
}
export interface DataCloudflarePagesProjectsResultDeploymentConfigsPreviewHyperdriveBindings {
}
export declare function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewHyperdriveBindingsToTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewHyperdriveBindings): any;
export declare function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewHyperdriveBindingsToHclTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewHyperdriveBindings): any;
export declare class DataCloudflarePagesProjectsResultDeploymentConfigsPreviewHyperdriveBindingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewHyperdriveBindings | undefined;
    set internalValue(value: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewHyperdriveBindings | undefined);
    get id(): any;
}
export declare class DataCloudflarePagesProjectsResultDeploymentConfigsPreviewHyperdriveBindingsMap extends cdktf.ComplexMap {
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
    get(key: string): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewHyperdriveBindingsOutputReference;
}
export interface DataCloudflarePagesProjectsResultDeploymentConfigsPreviewKvNamespaces {
}
export declare function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewKvNamespacesToTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewKvNamespaces): any;
export declare function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewKvNamespacesToHclTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewKvNamespaces): any;
export declare class DataCloudflarePagesProjectsResultDeploymentConfigsPreviewKvNamespacesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewKvNamespaces | undefined;
    set internalValue(value: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewKvNamespaces | undefined);
    get namespaceId(): any;
}
export declare class DataCloudflarePagesProjectsResultDeploymentConfigsPreviewKvNamespacesMap extends cdktf.ComplexMap {
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
    get(key: string): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewKvNamespacesOutputReference;
}
export interface DataCloudflarePagesProjectsResultDeploymentConfigsPreviewLimits {
}
export declare function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewLimitsToTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewLimits): any;
export declare function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewLimitsToHclTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewLimits): any;
export declare class DataCloudflarePagesProjectsResultDeploymentConfigsPreviewLimitsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewLimits | undefined;
    set internalValue(value: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewLimits | undefined);
    get cpuMs(): any;
}
export interface DataCloudflarePagesProjectsResultDeploymentConfigsPreviewMtlsCertificates {
}
export declare function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewMtlsCertificatesToTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewMtlsCertificates): any;
export declare function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewMtlsCertificatesToHclTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewMtlsCertificates): any;
export declare class DataCloudflarePagesProjectsResultDeploymentConfigsPreviewMtlsCertificatesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewMtlsCertificates | undefined;
    set internalValue(value: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewMtlsCertificates | undefined);
    get certificateId(): any;
}
export declare class DataCloudflarePagesProjectsResultDeploymentConfigsPreviewMtlsCertificatesMap extends cdktf.ComplexMap {
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
    get(key: string): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewMtlsCertificatesOutputReference;
}
export interface DataCloudflarePagesProjectsResultDeploymentConfigsPreviewPlacement {
}
export declare function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewPlacementToTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewPlacement): any;
export declare function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewPlacementToHclTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewPlacement): any;
export declare class DataCloudflarePagesProjectsResultDeploymentConfigsPreviewPlacementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewPlacement | undefined;
    set internalValue(value: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewPlacement | undefined);
    get mode(): any;
}
export interface DataCloudflarePagesProjectsResultDeploymentConfigsPreviewQueueProducers {
}
export declare function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewQueueProducersToTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewQueueProducers): any;
export declare function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewQueueProducersToHclTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewQueueProducers): any;
export declare class DataCloudflarePagesProjectsResultDeploymentConfigsPreviewQueueProducersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewQueueProducers | undefined;
    set internalValue(value: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewQueueProducers | undefined);
    get name(): any;
}
export declare class DataCloudflarePagesProjectsResultDeploymentConfigsPreviewQueueProducersMap extends cdktf.ComplexMap {
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
    get(key: string): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewQueueProducersOutputReference;
}
export interface DataCloudflarePagesProjectsResultDeploymentConfigsPreviewR2Buckets {
}
export declare function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewR2BucketsToTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewR2Buckets): any;
export declare function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewR2BucketsToHclTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewR2Buckets): any;
export declare class DataCloudflarePagesProjectsResultDeploymentConfigsPreviewR2BucketsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewR2Buckets | undefined;
    set internalValue(value: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewR2Buckets | undefined);
    get jurisdiction(): any;
    get name(): any;
}
export declare class DataCloudflarePagesProjectsResultDeploymentConfigsPreviewR2BucketsMap extends cdktf.ComplexMap {
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
    get(key: string): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewR2BucketsOutputReference;
}
export interface DataCloudflarePagesProjectsResultDeploymentConfigsPreviewServices {
}
export declare function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewServicesToTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewServices): any;
export declare function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewServicesToHclTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewServices): any;
export declare class DataCloudflarePagesProjectsResultDeploymentConfigsPreviewServicesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewServices | undefined;
    set internalValue(value: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewServices | undefined);
    get entrypoint(): any;
    get environment(): any;
    get service(): any;
}
export declare class DataCloudflarePagesProjectsResultDeploymentConfigsPreviewServicesMap extends cdktf.ComplexMap {
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
    get(key: string): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewServicesOutputReference;
}
export interface DataCloudflarePagesProjectsResultDeploymentConfigsPreviewVectorizeBindings {
}
export declare function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewVectorizeBindingsToTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewVectorizeBindings): any;
export declare function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewVectorizeBindingsToHclTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewVectorizeBindings): any;
export declare class DataCloudflarePagesProjectsResultDeploymentConfigsPreviewVectorizeBindingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewVectorizeBindings | undefined;
    set internalValue(value: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewVectorizeBindings | undefined);
    get indexName(): any;
}
export declare class DataCloudflarePagesProjectsResultDeploymentConfigsPreviewVectorizeBindingsMap extends cdktf.ComplexMap {
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
    get(key: string): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewVectorizeBindingsOutputReference;
}
export interface DataCloudflarePagesProjectsResultDeploymentConfigsPreview {
}
export declare function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewToTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsPreview): any;
export declare function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewToHclTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsPreview): any;
export declare class DataCloudflarePagesProjectsResultDeploymentConfigsPreviewOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePagesProjectsResultDeploymentConfigsPreview | undefined;
    set internalValue(value: DataCloudflarePagesProjectsResultDeploymentConfigsPreview | undefined);
    private _aiBindings;
    get aiBindings(): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAiBindingsMap;
    get alwaysUseLatestCompatibilityDate(): any;
    private _analyticsEngineDatasets;
    get analyticsEngineDatasets(): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAnalyticsEngineDatasetsMap;
    private _browsers;
    get browsers(): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewBrowsersMap;
    get buildImageMajorVersion(): any;
    get compatibilityDate(): any;
    get compatibilityFlags(): any;
    private _d1Databases;
    get d1Databases(): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewD1DatabasesMap;
    private _durableObjectNamespaces;
    get durableObjectNamespaces(): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewDurableObjectNamespacesMap;
    private _envVars;
    get envVars(): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewEnvVarsMap;
    get failOpen(): any;
    private _hyperdriveBindings;
    get hyperdriveBindings(): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewHyperdriveBindingsMap;
    private _kvNamespaces;
    get kvNamespaces(): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewKvNamespacesMap;
    private _limits;
    get limits(): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewLimitsOutputReference;
    private _mtlsCertificates;
    get mtlsCertificates(): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewMtlsCertificatesMap;
    private _placement;
    get placement(): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewPlacementOutputReference;
    private _queueProducers;
    get queueProducers(): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewQueueProducersMap;
    private _r2Buckets;
    get r2Buckets(): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewR2BucketsMap;
    private _services;
    get services(): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewServicesMap;
    get usageModel(): any;
    private _vectorizeBindings;
    get vectorizeBindings(): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewVectorizeBindingsMap;
    get wranglerConfigHash(): any;
}
export interface DataCloudflarePagesProjectsResultDeploymentConfigsProductionAiBindings {
}
export declare function dataCloudflarePagesProjectsResultDeploymentConfigsProductionAiBindingsToTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsProductionAiBindings): any;
export declare function dataCloudflarePagesProjectsResultDeploymentConfigsProductionAiBindingsToHclTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsProductionAiBindings): any;
export declare class DataCloudflarePagesProjectsResultDeploymentConfigsProductionAiBindingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): DataCloudflarePagesProjectsResultDeploymentConfigsProductionAiBindings | undefined;
    set internalValue(value: DataCloudflarePagesProjectsResultDeploymentConfigsProductionAiBindings | undefined);
    get projectId(): any;
}
export declare class DataCloudflarePagesProjectsResultDeploymentConfigsProductionAiBindingsMap extends cdktf.ComplexMap {
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
    get(key: string): DataCloudflarePagesProjectsResultDeploymentConfigsProductionAiBindingsOutputReference;
}
export interface DataCloudflarePagesProjectsResultDeploymentConfigsProductionAnalyticsEngineDatasets {
}
export declare function dataCloudflarePagesProjectsResultDeploymentConfigsProductionAnalyticsEngineDatasetsToTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsProductionAnalyticsEngineDatasets): any;
export declare function dataCloudflarePagesProjectsResultDeploymentConfigsProductionAnalyticsEngineDatasetsToHclTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsProductionAnalyticsEngineDatasets): any;
export declare class DataCloudflarePagesProjectsResultDeploymentConfigsProductionAnalyticsEngineDatasetsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): DataCloudflarePagesProjectsResultDeploymentConfigsProductionAnalyticsEngineDatasets | undefined;
    set internalValue(value: DataCloudflarePagesProjectsResultDeploymentConfigsProductionAnalyticsEngineDatasets | undefined);
    get dataset(): any;
}
export declare class DataCloudflarePagesProjectsResultDeploymentConfigsProductionAnalyticsEngineDatasetsMap extends cdktf.ComplexMap {
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
    get(key: string): DataCloudflarePagesProjectsResultDeploymentConfigsProductionAnalyticsEngineDatasetsOutputReference;
}
export interface DataCloudflarePagesProjectsResultDeploymentConfigsProductionBrowsers {
}
export declare function dataCloudflarePagesProjectsResultDeploymentConfigsProductionBrowsersToTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsProductionBrowsers): any;
export declare function dataCloudflarePagesProjectsResultDeploymentConfigsProductionBrowsersToHclTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsProductionBrowsers): any;
export declare class DataCloudflarePagesProjectsResultDeploymentConfigsProductionBrowsersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): DataCloudflarePagesProjectsResultDeploymentConfigsProductionBrowsers | undefined;
    set internalValue(value: DataCloudflarePagesProjectsResultDeploymentConfigsProductionBrowsers | undefined);
}
export declare class DataCloudflarePagesProjectsResultDeploymentConfigsProductionBrowsersMap extends cdktf.ComplexMap {
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
    get(key: string): DataCloudflarePagesProjectsResultDeploymentConfigsProductionBrowsersOutputReference;
}
export interface DataCloudflarePagesProjectsResultDeploymentConfigsProductionD1Databases {
}
export declare function dataCloudflarePagesProjectsResultDeploymentConfigsProductionD1DatabasesToTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsProductionD1Databases): any;
export declare function dataCloudflarePagesProjectsResultDeploymentConfigsProductionD1DatabasesToHclTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsProductionD1Databases): any;
export declare class DataCloudflarePagesProjectsResultDeploymentConfigsProductionD1DatabasesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): DataCloudflarePagesProjectsResultDeploymentConfigsProductionD1Databases | undefined;
    set internalValue(value: DataCloudflarePagesProjectsResultDeploymentConfigsProductionD1Databases | undefined);
    get id(): any;
}
export declare class DataCloudflarePagesProjectsResultDeploymentConfigsProductionD1DatabasesMap extends cdktf.ComplexMap {
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
    get(key: string): DataCloudflarePagesProjectsResultDeploymentConfigsProductionD1DatabasesOutputReference;
}
export interface DataCloudflarePagesProjectsResultDeploymentConfigsProductionDurableObjectNamespaces {
}
export declare function dataCloudflarePagesProjectsResultDeploymentConfigsProductionDurableObjectNamespacesToTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsProductionDurableObjectNamespaces): any;
export declare function dataCloudflarePagesProjectsResultDeploymentConfigsProductionDurableObjectNamespacesToHclTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsProductionDurableObjectNamespaces): any;
export declare class DataCloudflarePagesProjectsResultDeploymentConfigsProductionDurableObjectNamespacesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): DataCloudflarePagesProjectsResultDeploymentConfigsProductionDurableObjectNamespaces | undefined;
    set internalValue(value: DataCloudflarePagesProjectsResultDeploymentConfigsProductionDurableObjectNamespaces | undefined);
    get namespaceId(): any;
}
export declare class DataCloudflarePagesProjectsResultDeploymentConfigsProductionDurableObjectNamespacesMap extends cdktf.ComplexMap {
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
    get(key: string): DataCloudflarePagesProjectsResultDeploymentConfigsProductionDurableObjectNamespacesOutputReference;
}
export interface DataCloudflarePagesProjectsResultDeploymentConfigsProductionEnvVars {
}
export declare function dataCloudflarePagesProjectsResultDeploymentConfigsProductionEnvVarsToTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsProductionEnvVars): any;
export declare function dataCloudflarePagesProjectsResultDeploymentConfigsProductionEnvVarsToHclTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsProductionEnvVars): any;
export declare class DataCloudflarePagesProjectsResultDeploymentConfigsProductionEnvVarsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): DataCloudflarePagesProjectsResultDeploymentConfigsProductionEnvVars | undefined;
    set internalValue(value: DataCloudflarePagesProjectsResultDeploymentConfigsProductionEnvVars | undefined);
    get type(): any;
    get value(): any;
}
export declare class DataCloudflarePagesProjectsResultDeploymentConfigsProductionEnvVarsMap extends cdktf.ComplexMap {
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
    get(key: string): DataCloudflarePagesProjectsResultDeploymentConfigsProductionEnvVarsOutputReference;
}
export interface DataCloudflarePagesProjectsResultDeploymentConfigsProductionHyperdriveBindings {
}
export declare function dataCloudflarePagesProjectsResultDeploymentConfigsProductionHyperdriveBindingsToTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsProductionHyperdriveBindings): any;
export declare function dataCloudflarePagesProjectsResultDeploymentConfigsProductionHyperdriveBindingsToHclTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsProductionHyperdriveBindings): any;
export declare class DataCloudflarePagesProjectsResultDeploymentConfigsProductionHyperdriveBindingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): DataCloudflarePagesProjectsResultDeploymentConfigsProductionHyperdriveBindings | undefined;
    set internalValue(value: DataCloudflarePagesProjectsResultDeploymentConfigsProductionHyperdriveBindings | undefined);
    get id(): any;
}
export declare class DataCloudflarePagesProjectsResultDeploymentConfigsProductionHyperdriveBindingsMap extends cdktf.ComplexMap {
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
    get(key: string): DataCloudflarePagesProjectsResultDeploymentConfigsProductionHyperdriveBindingsOutputReference;
}
export interface DataCloudflarePagesProjectsResultDeploymentConfigsProductionKvNamespaces {
}
export declare function dataCloudflarePagesProjectsResultDeploymentConfigsProductionKvNamespacesToTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsProductionKvNamespaces): any;
export declare function dataCloudflarePagesProjectsResultDeploymentConfigsProductionKvNamespacesToHclTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsProductionKvNamespaces): any;
export declare class DataCloudflarePagesProjectsResultDeploymentConfigsProductionKvNamespacesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): DataCloudflarePagesProjectsResultDeploymentConfigsProductionKvNamespaces | undefined;
    set internalValue(value: DataCloudflarePagesProjectsResultDeploymentConfigsProductionKvNamespaces | undefined);
    get namespaceId(): any;
}
export declare class DataCloudflarePagesProjectsResultDeploymentConfigsProductionKvNamespacesMap extends cdktf.ComplexMap {
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
    get(key: string): DataCloudflarePagesProjectsResultDeploymentConfigsProductionKvNamespacesOutputReference;
}
export interface DataCloudflarePagesProjectsResultDeploymentConfigsProductionLimits {
}
export declare function dataCloudflarePagesProjectsResultDeploymentConfigsProductionLimitsToTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsProductionLimits): any;
export declare function dataCloudflarePagesProjectsResultDeploymentConfigsProductionLimitsToHclTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsProductionLimits): any;
export declare class DataCloudflarePagesProjectsResultDeploymentConfigsProductionLimitsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePagesProjectsResultDeploymentConfigsProductionLimits | undefined;
    set internalValue(value: DataCloudflarePagesProjectsResultDeploymentConfigsProductionLimits | undefined);
    get cpuMs(): any;
}
export interface DataCloudflarePagesProjectsResultDeploymentConfigsProductionMtlsCertificates {
}
export declare function dataCloudflarePagesProjectsResultDeploymentConfigsProductionMtlsCertificatesToTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsProductionMtlsCertificates): any;
export declare function dataCloudflarePagesProjectsResultDeploymentConfigsProductionMtlsCertificatesToHclTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsProductionMtlsCertificates): any;
export declare class DataCloudflarePagesProjectsResultDeploymentConfigsProductionMtlsCertificatesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): DataCloudflarePagesProjectsResultDeploymentConfigsProductionMtlsCertificates | undefined;
    set internalValue(value: DataCloudflarePagesProjectsResultDeploymentConfigsProductionMtlsCertificates | undefined);
    get certificateId(): any;
}
export declare class DataCloudflarePagesProjectsResultDeploymentConfigsProductionMtlsCertificatesMap extends cdktf.ComplexMap {
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
    get(key: string): DataCloudflarePagesProjectsResultDeploymentConfigsProductionMtlsCertificatesOutputReference;
}
export interface DataCloudflarePagesProjectsResultDeploymentConfigsProductionPlacement {
}
export declare function dataCloudflarePagesProjectsResultDeploymentConfigsProductionPlacementToTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsProductionPlacement): any;
export declare function dataCloudflarePagesProjectsResultDeploymentConfigsProductionPlacementToHclTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsProductionPlacement): any;
export declare class DataCloudflarePagesProjectsResultDeploymentConfigsProductionPlacementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePagesProjectsResultDeploymentConfigsProductionPlacement | undefined;
    set internalValue(value: DataCloudflarePagesProjectsResultDeploymentConfigsProductionPlacement | undefined);
    get mode(): any;
}
export interface DataCloudflarePagesProjectsResultDeploymentConfigsProductionQueueProducers {
}
export declare function dataCloudflarePagesProjectsResultDeploymentConfigsProductionQueueProducersToTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsProductionQueueProducers): any;
export declare function dataCloudflarePagesProjectsResultDeploymentConfigsProductionQueueProducersToHclTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsProductionQueueProducers): any;
export declare class DataCloudflarePagesProjectsResultDeploymentConfigsProductionQueueProducersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): DataCloudflarePagesProjectsResultDeploymentConfigsProductionQueueProducers | undefined;
    set internalValue(value: DataCloudflarePagesProjectsResultDeploymentConfigsProductionQueueProducers | undefined);
    get name(): any;
}
export declare class DataCloudflarePagesProjectsResultDeploymentConfigsProductionQueueProducersMap extends cdktf.ComplexMap {
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
    get(key: string): DataCloudflarePagesProjectsResultDeploymentConfigsProductionQueueProducersOutputReference;
}
export interface DataCloudflarePagesProjectsResultDeploymentConfigsProductionR2Buckets {
}
export declare function dataCloudflarePagesProjectsResultDeploymentConfigsProductionR2BucketsToTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsProductionR2Buckets): any;
export declare function dataCloudflarePagesProjectsResultDeploymentConfigsProductionR2BucketsToHclTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsProductionR2Buckets): any;
export declare class DataCloudflarePagesProjectsResultDeploymentConfigsProductionR2BucketsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): DataCloudflarePagesProjectsResultDeploymentConfigsProductionR2Buckets | undefined;
    set internalValue(value: DataCloudflarePagesProjectsResultDeploymentConfigsProductionR2Buckets | undefined);
    get jurisdiction(): any;
    get name(): any;
}
export declare class DataCloudflarePagesProjectsResultDeploymentConfigsProductionR2BucketsMap extends cdktf.ComplexMap {
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
    get(key: string): DataCloudflarePagesProjectsResultDeploymentConfigsProductionR2BucketsOutputReference;
}
export interface DataCloudflarePagesProjectsResultDeploymentConfigsProductionServices {
}
export declare function dataCloudflarePagesProjectsResultDeploymentConfigsProductionServicesToTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsProductionServices): any;
export declare function dataCloudflarePagesProjectsResultDeploymentConfigsProductionServicesToHclTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsProductionServices): any;
export declare class DataCloudflarePagesProjectsResultDeploymentConfigsProductionServicesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): DataCloudflarePagesProjectsResultDeploymentConfigsProductionServices | undefined;
    set internalValue(value: DataCloudflarePagesProjectsResultDeploymentConfigsProductionServices | undefined);
    get entrypoint(): any;
    get environment(): any;
    get service(): any;
}
export declare class DataCloudflarePagesProjectsResultDeploymentConfigsProductionServicesMap extends cdktf.ComplexMap {
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
    get(key: string): DataCloudflarePagesProjectsResultDeploymentConfigsProductionServicesOutputReference;
}
export interface DataCloudflarePagesProjectsResultDeploymentConfigsProductionVectorizeBindings {
}
export declare function dataCloudflarePagesProjectsResultDeploymentConfigsProductionVectorizeBindingsToTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsProductionVectorizeBindings): any;
export declare function dataCloudflarePagesProjectsResultDeploymentConfigsProductionVectorizeBindingsToHclTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsProductionVectorizeBindings): any;
export declare class DataCloudflarePagesProjectsResultDeploymentConfigsProductionVectorizeBindingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): DataCloudflarePagesProjectsResultDeploymentConfigsProductionVectorizeBindings | undefined;
    set internalValue(value: DataCloudflarePagesProjectsResultDeploymentConfigsProductionVectorizeBindings | undefined);
    get indexName(): any;
}
export declare class DataCloudflarePagesProjectsResultDeploymentConfigsProductionVectorizeBindingsMap extends cdktf.ComplexMap {
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
    get(key: string): DataCloudflarePagesProjectsResultDeploymentConfigsProductionVectorizeBindingsOutputReference;
}
export interface DataCloudflarePagesProjectsResultDeploymentConfigsProduction {
}
export declare function dataCloudflarePagesProjectsResultDeploymentConfigsProductionToTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsProduction): any;
export declare function dataCloudflarePagesProjectsResultDeploymentConfigsProductionToHclTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsProduction): any;
export declare class DataCloudflarePagesProjectsResultDeploymentConfigsProductionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePagesProjectsResultDeploymentConfigsProduction | undefined;
    set internalValue(value: DataCloudflarePagesProjectsResultDeploymentConfigsProduction | undefined);
    private _aiBindings;
    get aiBindings(): DataCloudflarePagesProjectsResultDeploymentConfigsProductionAiBindingsMap;
    get alwaysUseLatestCompatibilityDate(): any;
    private _analyticsEngineDatasets;
    get analyticsEngineDatasets(): DataCloudflarePagesProjectsResultDeploymentConfigsProductionAnalyticsEngineDatasetsMap;
    private _browsers;
    get browsers(): DataCloudflarePagesProjectsResultDeploymentConfigsProductionBrowsersMap;
    get buildImageMajorVersion(): any;
    get compatibilityDate(): any;
    get compatibilityFlags(): any;
    private _d1Databases;
    get d1Databases(): DataCloudflarePagesProjectsResultDeploymentConfigsProductionD1DatabasesMap;
    private _durableObjectNamespaces;
    get durableObjectNamespaces(): DataCloudflarePagesProjectsResultDeploymentConfigsProductionDurableObjectNamespacesMap;
    private _envVars;
    get envVars(): DataCloudflarePagesProjectsResultDeploymentConfigsProductionEnvVarsMap;
    get failOpen(): any;
    private _hyperdriveBindings;
    get hyperdriveBindings(): DataCloudflarePagesProjectsResultDeploymentConfigsProductionHyperdriveBindingsMap;
    private _kvNamespaces;
    get kvNamespaces(): DataCloudflarePagesProjectsResultDeploymentConfigsProductionKvNamespacesMap;
    private _limits;
    get limits(): DataCloudflarePagesProjectsResultDeploymentConfigsProductionLimitsOutputReference;
    private _mtlsCertificates;
    get mtlsCertificates(): DataCloudflarePagesProjectsResultDeploymentConfigsProductionMtlsCertificatesMap;
    private _placement;
    get placement(): DataCloudflarePagesProjectsResultDeploymentConfigsProductionPlacementOutputReference;
    private _queueProducers;
    get queueProducers(): DataCloudflarePagesProjectsResultDeploymentConfigsProductionQueueProducersMap;
    private _r2Buckets;
    get r2Buckets(): DataCloudflarePagesProjectsResultDeploymentConfigsProductionR2BucketsMap;
    private _services;
    get services(): DataCloudflarePagesProjectsResultDeploymentConfigsProductionServicesMap;
    get usageModel(): any;
    private _vectorizeBindings;
    get vectorizeBindings(): DataCloudflarePagesProjectsResultDeploymentConfigsProductionVectorizeBindingsMap;
    get wranglerConfigHash(): any;
}
export interface DataCloudflarePagesProjectsResultDeploymentConfigs {
}
export declare function dataCloudflarePagesProjectsResultDeploymentConfigsToTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigs): any;
export declare function dataCloudflarePagesProjectsResultDeploymentConfigsToHclTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigs): any;
export declare class DataCloudflarePagesProjectsResultDeploymentConfigsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePagesProjectsResultDeploymentConfigs | undefined;
    set internalValue(value: DataCloudflarePagesProjectsResultDeploymentConfigs | undefined);
    private _preview;
    get preview(): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewOutputReference;
    private _production;
    get production(): DataCloudflarePagesProjectsResultDeploymentConfigsProductionOutputReference;
}
export interface DataCloudflarePagesProjectsResultLatestDeploymentBuildConfig {
}
export declare function dataCloudflarePagesProjectsResultLatestDeploymentBuildConfigToTerraform(struct?: DataCloudflarePagesProjectsResultLatestDeploymentBuildConfig): any;
export declare function dataCloudflarePagesProjectsResultLatestDeploymentBuildConfigToHclTerraform(struct?: DataCloudflarePagesProjectsResultLatestDeploymentBuildConfig): any;
export declare class DataCloudflarePagesProjectsResultLatestDeploymentBuildConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePagesProjectsResultLatestDeploymentBuildConfig | undefined;
    set internalValue(value: DataCloudflarePagesProjectsResultLatestDeploymentBuildConfig | undefined);
    get buildCaching(): any;
    get buildCommand(): any;
    get destinationDir(): any;
    get rootDir(): any;
    get webAnalyticsTag(): any;
    get webAnalyticsToken(): any;
}
export interface DataCloudflarePagesProjectsResultLatestDeploymentDeploymentTriggerMetadata {
}
export declare function dataCloudflarePagesProjectsResultLatestDeploymentDeploymentTriggerMetadataToTerraform(struct?: DataCloudflarePagesProjectsResultLatestDeploymentDeploymentTriggerMetadata): any;
export declare function dataCloudflarePagesProjectsResultLatestDeploymentDeploymentTriggerMetadataToHclTerraform(struct?: DataCloudflarePagesProjectsResultLatestDeploymentDeploymentTriggerMetadata): any;
export declare class DataCloudflarePagesProjectsResultLatestDeploymentDeploymentTriggerMetadataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePagesProjectsResultLatestDeploymentDeploymentTriggerMetadata | undefined;
    set internalValue(value: DataCloudflarePagesProjectsResultLatestDeploymentDeploymentTriggerMetadata | undefined);
    get branch(): any;
    get commitDirty(): any;
    get commitHash(): any;
    get commitMessage(): any;
}
export interface DataCloudflarePagesProjectsResultLatestDeploymentDeploymentTrigger {
}
export declare function dataCloudflarePagesProjectsResultLatestDeploymentDeploymentTriggerToTerraform(struct?: DataCloudflarePagesProjectsResultLatestDeploymentDeploymentTrigger): any;
export declare function dataCloudflarePagesProjectsResultLatestDeploymentDeploymentTriggerToHclTerraform(struct?: DataCloudflarePagesProjectsResultLatestDeploymentDeploymentTrigger): any;
export declare class DataCloudflarePagesProjectsResultLatestDeploymentDeploymentTriggerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePagesProjectsResultLatestDeploymentDeploymentTrigger | undefined;
    set internalValue(value: DataCloudflarePagesProjectsResultLatestDeploymentDeploymentTrigger | undefined);
    private _metadata;
    get metadata(): DataCloudflarePagesProjectsResultLatestDeploymentDeploymentTriggerMetadataOutputReference;
    get type(): any;
}
export interface DataCloudflarePagesProjectsResultLatestDeploymentEnvVars {
}
export declare function dataCloudflarePagesProjectsResultLatestDeploymentEnvVarsToTerraform(struct?: DataCloudflarePagesProjectsResultLatestDeploymentEnvVars): any;
export declare function dataCloudflarePagesProjectsResultLatestDeploymentEnvVarsToHclTerraform(struct?: DataCloudflarePagesProjectsResultLatestDeploymentEnvVars): any;
export declare class DataCloudflarePagesProjectsResultLatestDeploymentEnvVarsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): DataCloudflarePagesProjectsResultLatestDeploymentEnvVars | undefined;
    set internalValue(value: DataCloudflarePagesProjectsResultLatestDeploymentEnvVars | undefined);
    get type(): any;
    get value(): any;
}
export declare class DataCloudflarePagesProjectsResultLatestDeploymentEnvVarsMap extends cdktf.ComplexMap {
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
    get(key: string): DataCloudflarePagesProjectsResultLatestDeploymentEnvVarsOutputReference;
}
export interface DataCloudflarePagesProjectsResultLatestDeploymentLatestStage {
}
export declare function dataCloudflarePagesProjectsResultLatestDeploymentLatestStageToTerraform(struct?: DataCloudflarePagesProjectsResultLatestDeploymentLatestStage): any;
export declare function dataCloudflarePagesProjectsResultLatestDeploymentLatestStageToHclTerraform(struct?: DataCloudflarePagesProjectsResultLatestDeploymentLatestStage): any;
export declare class DataCloudflarePagesProjectsResultLatestDeploymentLatestStageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePagesProjectsResultLatestDeploymentLatestStage | undefined;
    set internalValue(value: DataCloudflarePagesProjectsResultLatestDeploymentLatestStage | undefined);
    get endedOn(): any;
    get name(): any;
    get startedOn(): any;
    get status(): any;
}
export interface DataCloudflarePagesProjectsResultLatestDeploymentSourceConfig {
}
export declare function dataCloudflarePagesProjectsResultLatestDeploymentSourceConfigToTerraform(struct?: DataCloudflarePagesProjectsResultLatestDeploymentSourceConfig): any;
export declare function dataCloudflarePagesProjectsResultLatestDeploymentSourceConfigToHclTerraform(struct?: DataCloudflarePagesProjectsResultLatestDeploymentSourceConfig): any;
export declare class DataCloudflarePagesProjectsResultLatestDeploymentSourceConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePagesProjectsResultLatestDeploymentSourceConfig | undefined;
    set internalValue(value: DataCloudflarePagesProjectsResultLatestDeploymentSourceConfig | undefined);
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
export interface DataCloudflarePagesProjectsResultLatestDeploymentSource {
}
export declare function dataCloudflarePagesProjectsResultLatestDeploymentSourceToTerraform(struct?: DataCloudflarePagesProjectsResultLatestDeploymentSource): any;
export declare function dataCloudflarePagesProjectsResultLatestDeploymentSourceToHclTerraform(struct?: DataCloudflarePagesProjectsResultLatestDeploymentSource): any;
export declare class DataCloudflarePagesProjectsResultLatestDeploymentSourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePagesProjectsResultLatestDeploymentSource | undefined;
    set internalValue(value: DataCloudflarePagesProjectsResultLatestDeploymentSource | undefined);
    private _config;
    get config(): DataCloudflarePagesProjectsResultLatestDeploymentSourceConfigOutputReference;
    get type(): any;
}
export interface DataCloudflarePagesProjectsResultLatestDeploymentStages {
}
export declare function dataCloudflarePagesProjectsResultLatestDeploymentStagesToTerraform(struct?: DataCloudflarePagesProjectsResultLatestDeploymentStages): any;
export declare function dataCloudflarePagesProjectsResultLatestDeploymentStagesToHclTerraform(struct?: DataCloudflarePagesProjectsResultLatestDeploymentStages): any;
export declare class DataCloudflarePagesProjectsResultLatestDeploymentStagesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflarePagesProjectsResultLatestDeploymentStages | undefined;
    set internalValue(value: DataCloudflarePagesProjectsResultLatestDeploymentStages | undefined);
    get endedOn(): any;
    get name(): any;
    get startedOn(): any;
    get status(): any;
}
export declare class DataCloudflarePagesProjectsResultLatestDeploymentStagesList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflarePagesProjectsResultLatestDeploymentStagesOutputReference;
}
export interface DataCloudflarePagesProjectsResultLatestDeployment {
}
export declare function dataCloudflarePagesProjectsResultLatestDeploymentToTerraform(struct?: DataCloudflarePagesProjectsResultLatestDeployment): any;
export declare function dataCloudflarePagesProjectsResultLatestDeploymentToHclTerraform(struct?: DataCloudflarePagesProjectsResultLatestDeployment): any;
export declare class DataCloudflarePagesProjectsResultLatestDeploymentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePagesProjectsResultLatestDeployment | undefined;
    set internalValue(value: DataCloudflarePagesProjectsResultLatestDeployment | undefined);
    get aliases(): any;
    private _buildConfig;
    get buildConfig(): DataCloudflarePagesProjectsResultLatestDeploymentBuildConfigOutputReference;
    get createdOn(): any;
    private _deploymentTrigger;
    get deploymentTrigger(): DataCloudflarePagesProjectsResultLatestDeploymentDeploymentTriggerOutputReference;
    private _envVars;
    get envVars(): DataCloudflarePagesProjectsResultLatestDeploymentEnvVarsMap;
    get environment(): any;
    get id(): any;
    get isSkipped(): any;
    private _latestStage;
    get latestStage(): DataCloudflarePagesProjectsResultLatestDeploymentLatestStageOutputReference;
    get modifiedOn(): any;
    get projectId(): any;
    get projectName(): any;
    get shortId(): any;
    private _source;
    get source(): DataCloudflarePagesProjectsResultLatestDeploymentSourceOutputReference;
    private _stages;
    get stages(): DataCloudflarePagesProjectsResultLatestDeploymentStagesList;
    get url(): any;
    get usesFunctions(): any;
}
export interface DataCloudflarePagesProjectsResultSourceConfig {
}
export declare function dataCloudflarePagesProjectsResultSourceConfigToTerraform(struct?: DataCloudflarePagesProjectsResultSourceConfig): any;
export declare function dataCloudflarePagesProjectsResultSourceConfigToHclTerraform(struct?: DataCloudflarePagesProjectsResultSourceConfig): any;
export declare class DataCloudflarePagesProjectsResultSourceConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePagesProjectsResultSourceConfig | undefined;
    set internalValue(value: DataCloudflarePagesProjectsResultSourceConfig | undefined);
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
export interface DataCloudflarePagesProjectsResultSource {
}
export declare function dataCloudflarePagesProjectsResultSourceToTerraform(struct?: DataCloudflarePagesProjectsResultSource): any;
export declare function dataCloudflarePagesProjectsResultSourceToHclTerraform(struct?: DataCloudflarePagesProjectsResultSource): any;
export declare class DataCloudflarePagesProjectsResultSourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePagesProjectsResultSource | undefined;
    set internalValue(value: DataCloudflarePagesProjectsResultSource | undefined);
    private _config;
    get config(): DataCloudflarePagesProjectsResultSourceConfigOutputReference;
    get type(): any;
}
export interface DataCloudflarePagesProjectsResult {
}
export declare function dataCloudflarePagesProjectsResultToTerraform(struct?: DataCloudflarePagesProjectsResult): any;
export declare function dataCloudflarePagesProjectsResultToHclTerraform(struct?: DataCloudflarePagesProjectsResult): any;
export declare class DataCloudflarePagesProjectsResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflarePagesProjectsResult | undefined;
    set internalValue(value: DataCloudflarePagesProjectsResult | undefined);
    private _buildConfig;
    get buildConfig(): DataCloudflarePagesProjectsResultBuildConfigOutputReference;
    private _canonicalDeployment;
    get canonicalDeployment(): DataCloudflarePagesProjectsResultCanonicalDeploymentOutputReference;
    get createdOn(): any;
    private _deploymentConfigs;
    get deploymentConfigs(): DataCloudflarePagesProjectsResultDeploymentConfigsOutputReference;
    get domains(): any;
    get framework(): any;
    get frameworkVersion(): any;
    get id(): any;
    private _latestDeployment;
    get latestDeployment(): DataCloudflarePagesProjectsResultLatestDeploymentOutputReference;
    get name(): any;
    get previewScriptName(): any;
    get productionBranch(): any;
    get productionScriptName(): any;
    private _source;
    get source(): DataCloudflarePagesProjectsResultSourceOutputReference;
    get subdomain(): any;
    get usesFunctions(): any;
}
export declare class DataCloudflarePagesProjectsResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflarePagesProjectsResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pages_projects cloudflare_pages_projects}
*/
export declare class DataCloudflarePagesProjects extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_pages_projects";
    /**
    * Generates CDKTF code for importing a DataCloudflarePagesProjects resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflarePagesProjects to import
    * @param importFromId The id of the existing DataCloudflarePagesProjects that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pages_projects#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflarePagesProjects to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pages_projects cloudflare_pages_projects} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflarePagesProjectsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflarePagesProjectsConfig);
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
    get result(): DataCloudflarePagesProjectsResultList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
