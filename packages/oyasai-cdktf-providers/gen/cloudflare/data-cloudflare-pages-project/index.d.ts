import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflarePagesProjectConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pages_project#account_id DataCloudflarePagesProject#account_id}
    */
    readonly accountId?: string;
    /**
    * Name of the project.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pages_project#project_name DataCloudflarePagesProject#project_name}
    */
    readonly projectName: string;
}
export interface DataCloudflarePagesProjectBuildConfig {
}
export declare function dataCloudflarePagesProjectBuildConfigToTerraform(struct?: DataCloudflarePagesProjectBuildConfig): any;
export declare function dataCloudflarePagesProjectBuildConfigToHclTerraform(struct?: DataCloudflarePagesProjectBuildConfig): any;
export declare class DataCloudflarePagesProjectBuildConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePagesProjectBuildConfig | undefined;
    set internalValue(value: DataCloudflarePagesProjectBuildConfig | undefined);
    get buildCaching(): any;
    get buildCommand(): any;
    get destinationDir(): any;
    get rootDir(): any;
    get webAnalyticsTag(): any;
    get webAnalyticsToken(): any;
}
export interface DataCloudflarePagesProjectCanonicalDeploymentBuildConfig {
}
export declare function dataCloudflarePagesProjectCanonicalDeploymentBuildConfigToTerraform(struct?: DataCloudflarePagesProjectCanonicalDeploymentBuildConfig): any;
export declare function dataCloudflarePagesProjectCanonicalDeploymentBuildConfigToHclTerraform(struct?: DataCloudflarePagesProjectCanonicalDeploymentBuildConfig): any;
export declare class DataCloudflarePagesProjectCanonicalDeploymentBuildConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePagesProjectCanonicalDeploymentBuildConfig | undefined;
    set internalValue(value: DataCloudflarePagesProjectCanonicalDeploymentBuildConfig | undefined);
    get buildCaching(): any;
    get buildCommand(): any;
    get destinationDir(): any;
    get rootDir(): any;
    get webAnalyticsTag(): any;
    get webAnalyticsToken(): any;
}
export interface DataCloudflarePagesProjectCanonicalDeploymentDeploymentTriggerMetadata {
}
export declare function dataCloudflarePagesProjectCanonicalDeploymentDeploymentTriggerMetadataToTerraform(struct?: DataCloudflarePagesProjectCanonicalDeploymentDeploymentTriggerMetadata): any;
export declare function dataCloudflarePagesProjectCanonicalDeploymentDeploymentTriggerMetadataToHclTerraform(struct?: DataCloudflarePagesProjectCanonicalDeploymentDeploymentTriggerMetadata): any;
export declare class DataCloudflarePagesProjectCanonicalDeploymentDeploymentTriggerMetadataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePagesProjectCanonicalDeploymentDeploymentTriggerMetadata | undefined;
    set internalValue(value: DataCloudflarePagesProjectCanonicalDeploymentDeploymentTriggerMetadata | undefined);
    get branch(): any;
    get commitDirty(): any;
    get commitHash(): any;
    get commitMessage(): any;
}
export interface DataCloudflarePagesProjectCanonicalDeploymentDeploymentTrigger {
}
export declare function dataCloudflarePagesProjectCanonicalDeploymentDeploymentTriggerToTerraform(struct?: DataCloudflarePagesProjectCanonicalDeploymentDeploymentTrigger): any;
export declare function dataCloudflarePagesProjectCanonicalDeploymentDeploymentTriggerToHclTerraform(struct?: DataCloudflarePagesProjectCanonicalDeploymentDeploymentTrigger): any;
export declare class DataCloudflarePagesProjectCanonicalDeploymentDeploymentTriggerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePagesProjectCanonicalDeploymentDeploymentTrigger | undefined;
    set internalValue(value: DataCloudflarePagesProjectCanonicalDeploymentDeploymentTrigger | undefined);
    private _metadata;
    get metadata(): DataCloudflarePagesProjectCanonicalDeploymentDeploymentTriggerMetadataOutputReference;
    get type(): any;
}
export interface DataCloudflarePagesProjectCanonicalDeploymentEnvVars {
}
export declare function dataCloudflarePagesProjectCanonicalDeploymentEnvVarsToTerraform(struct?: DataCloudflarePagesProjectCanonicalDeploymentEnvVars): any;
export declare function dataCloudflarePagesProjectCanonicalDeploymentEnvVarsToHclTerraform(struct?: DataCloudflarePagesProjectCanonicalDeploymentEnvVars): any;
export declare class DataCloudflarePagesProjectCanonicalDeploymentEnvVarsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): DataCloudflarePagesProjectCanonicalDeploymentEnvVars | undefined;
    set internalValue(value: DataCloudflarePagesProjectCanonicalDeploymentEnvVars | undefined);
    get type(): any;
    get value(): any;
}
export declare class DataCloudflarePagesProjectCanonicalDeploymentEnvVarsMap extends cdktf.ComplexMap {
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
    get(key: string): DataCloudflarePagesProjectCanonicalDeploymentEnvVarsOutputReference;
}
export interface DataCloudflarePagesProjectCanonicalDeploymentLatestStage {
}
export declare function dataCloudflarePagesProjectCanonicalDeploymentLatestStageToTerraform(struct?: DataCloudflarePagesProjectCanonicalDeploymentLatestStage): any;
export declare function dataCloudflarePagesProjectCanonicalDeploymentLatestStageToHclTerraform(struct?: DataCloudflarePagesProjectCanonicalDeploymentLatestStage): any;
export declare class DataCloudflarePagesProjectCanonicalDeploymentLatestStageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePagesProjectCanonicalDeploymentLatestStage | undefined;
    set internalValue(value: DataCloudflarePagesProjectCanonicalDeploymentLatestStage | undefined);
    get endedOn(): any;
    get name(): any;
    get startedOn(): any;
    get status(): any;
}
export interface DataCloudflarePagesProjectCanonicalDeploymentSourceConfig {
}
export declare function dataCloudflarePagesProjectCanonicalDeploymentSourceConfigToTerraform(struct?: DataCloudflarePagesProjectCanonicalDeploymentSourceConfig): any;
export declare function dataCloudflarePagesProjectCanonicalDeploymentSourceConfigToHclTerraform(struct?: DataCloudflarePagesProjectCanonicalDeploymentSourceConfig): any;
export declare class DataCloudflarePagesProjectCanonicalDeploymentSourceConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePagesProjectCanonicalDeploymentSourceConfig | undefined;
    set internalValue(value: DataCloudflarePagesProjectCanonicalDeploymentSourceConfig | undefined);
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
export interface DataCloudflarePagesProjectCanonicalDeploymentSource {
}
export declare function dataCloudflarePagesProjectCanonicalDeploymentSourceToTerraform(struct?: DataCloudflarePagesProjectCanonicalDeploymentSource): any;
export declare function dataCloudflarePagesProjectCanonicalDeploymentSourceToHclTerraform(struct?: DataCloudflarePagesProjectCanonicalDeploymentSource): any;
export declare class DataCloudflarePagesProjectCanonicalDeploymentSourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePagesProjectCanonicalDeploymentSource | undefined;
    set internalValue(value: DataCloudflarePagesProjectCanonicalDeploymentSource | undefined);
    private _config;
    get config(): DataCloudflarePagesProjectCanonicalDeploymentSourceConfigOutputReference;
    get type(): any;
}
export interface DataCloudflarePagesProjectCanonicalDeploymentStages {
}
export declare function dataCloudflarePagesProjectCanonicalDeploymentStagesToTerraform(struct?: DataCloudflarePagesProjectCanonicalDeploymentStages): any;
export declare function dataCloudflarePagesProjectCanonicalDeploymentStagesToHclTerraform(struct?: DataCloudflarePagesProjectCanonicalDeploymentStages): any;
export declare class DataCloudflarePagesProjectCanonicalDeploymentStagesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflarePagesProjectCanonicalDeploymentStages | undefined;
    set internalValue(value: DataCloudflarePagesProjectCanonicalDeploymentStages | undefined);
    get endedOn(): any;
    get name(): any;
    get startedOn(): any;
    get status(): any;
}
export declare class DataCloudflarePagesProjectCanonicalDeploymentStagesList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflarePagesProjectCanonicalDeploymentStagesOutputReference;
}
export interface DataCloudflarePagesProjectCanonicalDeployment {
}
export declare function dataCloudflarePagesProjectCanonicalDeploymentToTerraform(struct?: DataCloudflarePagesProjectCanonicalDeployment): any;
export declare function dataCloudflarePagesProjectCanonicalDeploymentToHclTerraform(struct?: DataCloudflarePagesProjectCanonicalDeployment): any;
export declare class DataCloudflarePagesProjectCanonicalDeploymentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePagesProjectCanonicalDeployment | undefined;
    set internalValue(value: DataCloudflarePagesProjectCanonicalDeployment | undefined);
    get aliases(): any;
    private _buildConfig;
    get buildConfig(): DataCloudflarePagesProjectCanonicalDeploymentBuildConfigOutputReference;
    get createdOn(): any;
    private _deploymentTrigger;
    get deploymentTrigger(): DataCloudflarePagesProjectCanonicalDeploymentDeploymentTriggerOutputReference;
    private _envVars;
    get envVars(): DataCloudflarePagesProjectCanonicalDeploymentEnvVarsMap;
    get environment(): any;
    get id(): any;
    get isSkipped(): any;
    private _latestStage;
    get latestStage(): DataCloudflarePagesProjectCanonicalDeploymentLatestStageOutputReference;
    get modifiedOn(): any;
    get projectId(): any;
    get projectName(): any;
    get shortId(): any;
    private _source;
    get source(): DataCloudflarePagesProjectCanonicalDeploymentSourceOutputReference;
    private _stages;
    get stages(): DataCloudflarePagesProjectCanonicalDeploymentStagesList;
    get url(): any;
    get usesFunctions(): any;
}
export interface DataCloudflarePagesProjectDeploymentConfigsPreviewAiBindings {
}
export declare function dataCloudflarePagesProjectDeploymentConfigsPreviewAiBindingsToTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsPreviewAiBindings): any;
export declare function dataCloudflarePagesProjectDeploymentConfigsPreviewAiBindingsToHclTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsPreviewAiBindings): any;
export declare class DataCloudflarePagesProjectDeploymentConfigsPreviewAiBindingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): DataCloudflarePagesProjectDeploymentConfigsPreviewAiBindings | undefined;
    set internalValue(value: DataCloudflarePagesProjectDeploymentConfigsPreviewAiBindings | undefined);
    get projectId(): any;
}
export declare class DataCloudflarePagesProjectDeploymentConfigsPreviewAiBindingsMap extends cdktf.ComplexMap {
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
    get(key: string): DataCloudflarePagesProjectDeploymentConfigsPreviewAiBindingsOutputReference;
}
export interface DataCloudflarePagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasets {
}
export declare function dataCloudflarePagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsToTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasets): any;
export declare function dataCloudflarePagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsToHclTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasets): any;
export declare class DataCloudflarePagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): DataCloudflarePagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasets | undefined;
    set internalValue(value: DataCloudflarePagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasets | undefined);
    get dataset(): any;
}
export declare class DataCloudflarePagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsMap extends cdktf.ComplexMap {
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
    get(key: string): DataCloudflarePagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsOutputReference;
}
export interface DataCloudflarePagesProjectDeploymentConfigsPreviewBrowsers {
}
export declare function dataCloudflarePagesProjectDeploymentConfigsPreviewBrowsersToTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsPreviewBrowsers): any;
export declare function dataCloudflarePagesProjectDeploymentConfigsPreviewBrowsersToHclTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsPreviewBrowsers): any;
export declare class DataCloudflarePagesProjectDeploymentConfigsPreviewBrowsersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): DataCloudflarePagesProjectDeploymentConfigsPreviewBrowsers | undefined;
    set internalValue(value: DataCloudflarePagesProjectDeploymentConfigsPreviewBrowsers | undefined);
}
export declare class DataCloudflarePagesProjectDeploymentConfigsPreviewBrowsersMap extends cdktf.ComplexMap {
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
    get(key: string): DataCloudflarePagesProjectDeploymentConfigsPreviewBrowsersOutputReference;
}
export interface DataCloudflarePagesProjectDeploymentConfigsPreviewD1Databases {
}
export declare function dataCloudflarePagesProjectDeploymentConfigsPreviewD1DatabasesToTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsPreviewD1Databases): any;
export declare function dataCloudflarePagesProjectDeploymentConfigsPreviewD1DatabasesToHclTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsPreviewD1Databases): any;
export declare class DataCloudflarePagesProjectDeploymentConfigsPreviewD1DatabasesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): DataCloudflarePagesProjectDeploymentConfigsPreviewD1Databases | undefined;
    set internalValue(value: DataCloudflarePagesProjectDeploymentConfigsPreviewD1Databases | undefined);
    get id(): any;
}
export declare class DataCloudflarePagesProjectDeploymentConfigsPreviewD1DatabasesMap extends cdktf.ComplexMap {
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
    get(key: string): DataCloudflarePagesProjectDeploymentConfigsPreviewD1DatabasesOutputReference;
}
export interface DataCloudflarePagesProjectDeploymentConfigsPreviewDurableObjectNamespaces {
}
export declare function dataCloudflarePagesProjectDeploymentConfigsPreviewDurableObjectNamespacesToTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsPreviewDurableObjectNamespaces): any;
export declare function dataCloudflarePagesProjectDeploymentConfigsPreviewDurableObjectNamespacesToHclTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsPreviewDurableObjectNamespaces): any;
export declare class DataCloudflarePagesProjectDeploymentConfigsPreviewDurableObjectNamespacesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): DataCloudflarePagesProjectDeploymentConfigsPreviewDurableObjectNamespaces | undefined;
    set internalValue(value: DataCloudflarePagesProjectDeploymentConfigsPreviewDurableObjectNamespaces | undefined);
    get namespaceId(): any;
}
export declare class DataCloudflarePagesProjectDeploymentConfigsPreviewDurableObjectNamespacesMap extends cdktf.ComplexMap {
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
    get(key: string): DataCloudflarePagesProjectDeploymentConfigsPreviewDurableObjectNamespacesOutputReference;
}
export interface DataCloudflarePagesProjectDeploymentConfigsPreviewEnvVars {
}
export declare function dataCloudflarePagesProjectDeploymentConfigsPreviewEnvVarsToTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsPreviewEnvVars): any;
export declare function dataCloudflarePagesProjectDeploymentConfigsPreviewEnvVarsToHclTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsPreviewEnvVars): any;
export declare class DataCloudflarePagesProjectDeploymentConfigsPreviewEnvVarsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): DataCloudflarePagesProjectDeploymentConfigsPreviewEnvVars | undefined;
    set internalValue(value: DataCloudflarePagesProjectDeploymentConfigsPreviewEnvVars | undefined);
    get type(): any;
    get value(): any;
}
export declare class DataCloudflarePagesProjectDeploymentConfigsPreviewEnvVarsMap extends cdktf.ComplexMap {
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
    get(key: string): DataCloudflarePagesProjectDeploymentConfigsPreviewEnvVarsOutputReference;
}
export interface DataCloudflarePagesProjectDeploymentConfigsPreviewHyperdriveBindings {
}
export declare function dataCloudflarePagesProjectDeploymentConfigsPreviewHyperdriveBindingsToTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsPreviewHyperdriveBindings): any;
export declare function dataCloudflarePagesProjectDeploymentConfigsPreviewHyperdriveBindingsToHclTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsPreviewHyperdriveBindings): any;
export declare class DataCloudflarePagesProjectDeploymentConfigsPreviewHyperdriveBindingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): DataCloudflarePagesProjectDeploymentConfigsPreviewHyperdriveBindings | undefined;
    set internalValue(value: DataCloudflarePagesProjectDeploymentConfigsPreviewHyperdriveBindings | undefined);
    get id(): any;
}
export declare class DataCloudflarePagesProjectDeploymentConfigsPreviewHyperdriveBindingsMap extends cdktf.ComplexMap {
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
    get(key: string): DataCloudflarePagesProjectDeploymentConfigsPreviewHyperdriveBindingsOutputReference;
}
export interface DataCloudflarePagesProjectDeploymentConfigsPreviewKvNamespaces {
}
export declare function dataCloudflarePagesProjectDeploymentConfigsPreviewKvNamespacesToTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsPreviewKvNamespaces): any;
export declare function dataCloudflarePagesProjectDeploymentConfigsPreviewKvNamespacesToHclTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsPreviewKvNamespaces): any;
export declare class DataCloudflarePagesProjectDeploymentConfigsPreviewKvNamespacesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): DataCloudflarePagesProjectDeploymentConfigsPreviewKvNamespaces | undefined;
    set internalValue(value: DataCloudflarePagesProjectDeploymentConfigsPreviewKvNamespaces | undefined);
    get namespaceId(): any;
}
export declare class DataCloudflarePagesProjectDeploymentConfigsPreviewKvNamespacesMap extends cdktf.ComplexMap {
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
    get(key: string): DataCloudflarePagesProjectDeploymentConfigsPreviewKvNamespacesOutputReference;
}
export interface DataCloudflarePagesProjectDeploymentConfigsPreviewLimits {
}
export declare function dataCloudflarePagesProjectDeploymentConfigsPreviewLimitsToTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsPreviewLimits): any;
export declare function dataCloudflarePagesProjectDeploymentConfigsPreviewLimitsToHclTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsPreviewLimits): any;
export declare class DataCloudflarePagesProjectDeploymentConfigsPreviewLimitsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePagesProjectDeploymentConfigsPreviewLimits | undefined;
    set internalValue(value: DataCloudflarePagesProjectDeploymentConfigsPreviewLimits | undefined);
    get cpuMs(): any;
}
export interface DataCloudflarePagesProjectDeploymentConfigsPreviewMtlsCertificates {
}
export declare function dataCloudflarePagesProjectDeploymentConfigsPreviewMtlsCertificatesToTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsPreviewMtlsCertificates): any;
export declare function dataCloudflarePagesProjectDeploymentConfigsPreviewMtlsCertificatesToHclTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsPreviewMtlsCertificates): any;
export declare class DataCloudflarePagesProjectDeploymentConfigsPreviewMtlsCertificatesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): DataCloudflarePagesProjectDeploymentConfigsPreviewMtlsCertificates | undefined;
    set internalValue(value: DataCloudflarePagesProjectDeploymentConfigsPreviewMtlsCertificates | undefined);
    get certificateId(): any;
}
export declare class DataCloudflarePagesProjectDeploymentConfigsPreviewMtlsCertificatesMap extends cdktf.ComplexMap {
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
    get(key: string): DataCloudflarePagesProjectDeploymentConfigsPreviewMtlsCertificatesOutputReference;
}
export interface DataCloudflarePagesProjectDeploymentConfigsPreviewPlacement {
}
export declare function dataCloudflarePagesProjectDeploymentConfigsPreviewPlacementToTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsPreviewPlacement): any;
export declare function dataCloudflarePagesProjectDeploymentConfigsPreviewPlacementToHclTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsPreviewPlacement): any;
export declare class DataCloudflarePagesProjectDeploymentConfigsPreviewPlacementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePagesProjectDeploymentConfigsPreviewPlacement | undefined;
    set internalValue(value: DataCloudflarePagesProjectDeploymentConfigsPreviewPlacement | undefined);
    get mode(): any;
}
export interface DataCloudflarePagesProjectDeploymentConfigsPreviewQueueProducers {
}
export declare function dataCloudflarePagesProjectDeploymentConfigsPreviewQueueProducersToTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsPreviewQueueProducers): any;
export declare function dataCloudflarePagesProjectDeploymentConfigsPreviewQueueProducersToHclTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsPreviewQueueProducers): any;
export declare class DataCloudflarePagesProjectDeploymentConfigsPreviewQueueProducersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): DataCloudflarePagesProjectDeploymentConfigsPreviewQueueProducers | undefined;
    set internalValue(value: DataCloudflarePagesProjectDeploymentConfigsPreviewQueueProducers | undefined);
    get name(): any;
}
export declare class DataCloudflarePagesProjectDeploymentConfigsPreviewQueueProducersMap extends cdktf.ComplexMap {
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
    get(key: string): DataCloudflarePagesProjectDeploymentConfigsPreviewQueueProducersOutputReference;
}
export interface DataCloudflarePagesProjectDeploymentConfigsPreviewR2Buckets {
}
export declare function dataCloudflarePagesProjectDeploymentConfigsPreviewR2BucketsToTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsPreviewR2Buckets): any;
export declare function dataCloudflarePagesProjectDeploymentConfigsPreviewR2BucketsToHclTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsPreviewR2Buckets): any;
export declare class DataCloudflarePagesProjectDeploymentConfigsPreviewR2BucketsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): DataCloudflarePagesProjectDeploymentConfigsPreviewR2Buckets | undefined;
    set internalValue(value: DataCloudflarePagesProjectDeploymentConfigsPreviewR2Buckets | undefined);
    get jurisdiction(): any;
    get name(): any;
}
export declare class DataCloudflarePagesProjectDeploymentConfigsPreviewR2BucketsMap extends cdktf.ComplexMap {
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
    get(key: string): DataCloudflarePagesProjectDeploymentConfigsPreviewR2BucketsOutputReference;
}
export interface DataCloudflarePagesProjectDeploymentConfigsPreviewServices {
}
export declare function dataCloudflarePagesProjectDeploymentConfigsPreviewServicesToTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsPreviewServices): any;
export declare function dataCloudflarePagesProjectDeploymentConfigsPreviewServicesToHclTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsPreviewServices): any;
export declare class DataCloudflarePagesProjectDeploymentConfigsPreviewServicesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): DataCloudflarePagesProjectDeploymentConfigsPreviewServices | undefined;
    set internalValue(value: DataCloudflarePagesProjectDeploymentConfigsPreviewServices | undefined);
    get entrypoint(): any;
    get environment(): any;
    get service(): any;
}
export declare class DataCloudflarePagesProjectDeploymentConfigsPreviewServicesMap extends cdktf.ComplexMap {
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
    get(key: string): DataCloudflarePagesProjectDeploymentConfigsPreviewServicesOutputReference;
}
export interface DataCloudflarePagesProjectDeploymentConfigsPreviewVectorizeBindings {
}
export declare function dataCloudflarePagesProjectDeploymentConfigsPreviewVectorizeBindingsToTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsPreviewVectorizeBindings): any;
export declare function dataCloudflarePagesProjectDeploymentConfigsPreviewVectorizeBindingsToHclTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsPreviewVectorizeBindings): any;
export declare class DataCloudflarePagesProjectDeploymentConfigsPreviewVectorizeBindingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): DataCloudflarePagesProjectDeploymentConfigsPreviewVectorizeBindings | undefined;
    set internalValue(value: DataCloudflarePagesProjectDeploymentConfigsPreviewVectorizeBindings | undefined);
    get indexName(): any;
}
export declare class DataCloudflarePagesProjectDeploymentConfigsPreviewVectorizeBindingsMap extends cdktf.ComplexMap {
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
    get(key: string): DataCloudflarePagesProjectDeploymentConfigsPreviewVectorizeBindingsOutputReference;
}
export interface DataCloudflarePagesProjectDeploymentConfigsPreview {
}
export declare function dataCloudflarePagesProjectDeploymentConfigsPreviewToTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsPreview): any;
export declare function dataCloudflarePagesProjectDeploymentConfigsPreviewToHclTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsPreview): any;
export declare class DataCloudflarePagesProjectDeploymentConfigsPreviewOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePagesProjectDeploymentConfigsPreview | undefined;
    set internalValue(value: DataCloudflarePagesProjectDeploymentConfigsPreview | undefined);
    private _aiBindings;
    get aiBindings(): DataCloudflarePagesProjectDeploymentConfigsPreviewAiBindingsMap;
    get alwaysUseLatestCompatibilityDate(): any;
    private _analyticsEngineDatasets;
    get analyticsEngineDatasets(): DataCloudflarePagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsMap;
    private _browsers;
    get browsers(): DataCloudflarePagesProjectDeploymentConfigsPreviewBrowsersMap;
    get buildImageMajorVersion(): any;
    get compatibilityDate(): any;
    get compatibilityFlags(): any;
    private _d1Databases;
    get d1Databases(): DataCloudflarePagesProjectDeploymentConfigsPreviewD1DatabasesMap;
    private _durableObjectNamespaces;
    get durableObjectNamespaces(): DataCloudflarePagesProjectDeploymentConfigsPreviewDurableObjectNamespacesMap;
    private _envVars;
    get envVars(): DataCloudflarePagesProjectDeploymentConfigsPreviewEnvVarsMap;
    get failOpen(): any;
    private _hyperdriveBindings;
    get hyperdriveBindings(): DataCloudflarePagesProjectDeploymentConfigsPreviewHyperdriveBindingsMap;
    private _kvNamespaces;
    get kvNamespaces(): DataCloudflarePagesProjectDeploymentConfigsPreviewKvNamespacesMap;
    private _limits;
    get limits(): DataCloudflarePagesProjectDeploymentConfigsPreviewLimitsOutputReference;
    private _mtlsCertificates;
    get mtlsCertificates(): DataCloudflarePagesProjectDeploymentConfigsPreviewMtlsCertificatesMap;
    private _placement;
    get placement(): DataCloudflarePagesProjectDeploymentConfigsPreviewPlacementOutputReference;
    private _queueProducers;
    get queueProducers(): DataCloudflarePagesProjectDeploymentConfigsPreviewQueueProducersMap;
    private _r2Buckets;
    get r2Buckets(): DataCloudflarePagesProjectDeploymentConfigsPreviewR2BucketsMap;
    private _services;
    get services(): DataCloudflarePagesProjectDeploymentConfigsPreviewServicesMap;
    get usageModel(): any;
    private _vectorizeBindings;
    get vectorizeBindings(): DataCloudflarePagesProjectDeploymentConfigsPreviewVectorizeBindingsMap;
    get wranglerConfigHash(): any;
}
export interface DataCloudflarePagesProjectDeploymentConfigsProductionAiBindings {
}
export declare function dataCloudflarePagesProjectDeploymentConfigsProductionAiBindingsToTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsProductionAiBindings): any;
export declare function dataCloudflarePagesProjectDeploymentConfigsProductionAiBindingsToHclTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsProductionAiBindings): any;
export declare class DataCloudflarePagesProjectDeploymentConfigsProductionAiBindingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): DataCloudflarePagesProjectDeploymentConfigsProductionAiBindings | undefined;
    set internalValue(value: DataCloudflarePagesProjectDeploymentConfigsProductionAiBindings | undefined);
    get projectId(): any;
}
export declare class DataCloudflarePagesProjectDeploymentConfigsProductionAiBindingsMap extends cdktf.ComplexMap {
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
    get(key: string): DataCloudflarePagesProjectDeploymentConfigsProductionAiBindingsOutputReference;
}
export interface DataCloudflarePagesProjectDeploymentConfigsProductionAnalyticsEngineDatasets {
}
export declare function dataCloudflarePagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsToTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsProductionAnalyticsEngineDatasets): any;
export declare function dataCloudflarePagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsToHclTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsProductionAnalyticsEngineDatasets): any;
export declare class DataCloudflarePagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): DataCloudflarePagesProjectDeploymentConfigsProductionAnalyticsEngineDatasets | undefined;
    set internalValue(value: DataCloudflarePagesProjectDeploymentConfigsProductionAnalyticsEngineDatasets | undefined);
    get dataset(): any;
}
export declare class DataCloudflarePagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsMap extends cdktf.ComplexMap {
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
    get(key: string): DataCloudflarePagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsOutputReference;
}
export interface DataCloudflarePagesProjectDeploymentConfigsProductionBrowsers {
}
export declare function dataCloudflarePagesProjectDeploymentConfigsProductionBrowsersToTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsProductionBrowsers): any;
export declare function dataCloudflarePagesProjectDeploymentConfigsProductionBrowsersToHclTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsProductionBrowsers): any;
export declare class DataCloudflarePagesProjectDeploymentConfigsProductionBrowsersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): DataCloudflarePagesProjectDeploymentConfigsProductionBrowsers | undefined;
    set internalValue(value: DataCloudflarePagesProjectDeploymentConfigsProductionBrowsers | undefined);
}
export declare class DataCloudflarePagesProjectDeploymentConfigsProductionBrowsersMap extends cdktf.ComplexMap {
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
    get(key: string): DataCloudflarePagesProjectDeploymentConfigsProductionBrowsersOutputReference;
}
export interface DataCloudflarePagesProjectDeploymentConfigsProductionD1Databases {
}
export declare function dataCloudflarePagesProjectDeploymentConfigsProductionD1DatabasesToTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsProductionD1Databases): any;
export declare function dataCloudflarePagesProjectDeploymentConfigsProductionD1DatabasesToHclTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsProductionD1Databases): any;
export declare class DataCloudflarePagesProjectDeploymentConfigsProductionD1DatabasesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): DataCloudflarePagesProjectDeploymentConfigsProductionD1Databases | undefined;
    set internalValue(value: DataCloudflarePagesProjectDeploymentConfigsProductionD1Databases | undefined);
    get id(): any;
}
export declare class DataCloudflarePagesProjectDeploymentConfigsProductionD1DatabasesMap extends cdktf.ComplexMap {
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
    get(key: string): DataCloudflarePagesProjectDeploymentConfigsProductionD1DatabasesOutputReference;
}
export interface DataCloudflarePagesProjectDeploymentConfigsProductionDurableObjectNamespaces {
}
export declare function dataCloudflarePagesProjectDeploymentConfigsProductionDurableObjectNamespacesToTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsProductionDurableObjectNamespaces): any;
export declare function dataCloudflarePagesProjectDeploymentConfigsProductionDurableObjectNamespacesToHclTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsProductionDurableObjectNamespaces): any;
export declare class DataCloudflarePagesProjectDeploymentConfigsProductionDurableObjectNamespacesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): DataCloudflarePagesProjectDeploymentConfigsProductionDurableObjectNamespaces | undefined;
    set internalValue(value: DataCloudflarePagesProjectDeploymentConfigsProductionDurableObjectNamespaces | undefined);
    get namespaceId(): any;
}
export declare class DataCloudflarePagesProjectDeploymentConfigsProductionDurableObjectNamespacesMap extends cdktf.ComplexMap {
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
    get(key: string): DataCloudflarePagesProjectDeploymentConfigsProductionDurableObjectNamespacesOutputReference;
}
export interface DataCloudflarePagesProjectDeploymentConfigsProductionEnvVars {
}
export declare function dataCloudflarePagesProjectDeploymentConfigsProductionEnvVarsToTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsProductionEnvVars): any;
export declare function dataCloudflarePagesProjectDeploymentConfigsProductionEnvVarsToHclTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsProductionEnvVars): any;
export declare class DataCloudflarePagesProjectDeploymentConfigsProductionEnvVarsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): DataCloudflarePagesProjectDeploymentConfigsProductionEnvVars | undefined;
    set internalValue(value: DataCloudflarePagesProjectDeploymentConfigsProductionEnvVars | undefined);
    get type(): any;
    get value(): any;
}
export declare class DataCloudflarePagesProjectDeploymentConfigsProductionEnvVarsMap extends cdktf.ComplexMap {
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
    get(key: string): DataCloudflarePagesProjectDeploymentConfigsProductionEnvVarsOutputReference;
}
export interface DataCloudflarePagesProjectDeploymentConfigsProductionHyperdriveBindings {
}
export declare function dataCloudflarePagesProjectDeploymentConfigsProductionHyperdriveBindingsToTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsProductionHyperdriveBindings): any;
export declare function dataCloudflarePagesProjectDeploymentConfigsProductionHyperdriveBindingsToHclTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsProductionHyperdriveBindings): any;
export declare class DataCloudflarePagesProjectDeploymentConfigsProductionHyperdriveBindingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): DataCloudflarePagesProjectDeploymentConfigsProductionHyperdriveBindings | undefined;
    set internalValue(value: DataCloudflarePagesProjectDeploymentConfigsProductionHyperdriveBindings | undefined);
    get id(): any;
}
export declare class DataCloudflarePagesProjectDeploymentConfigsProductionHyperdriveBindingsMap extends cdktf.ComplexMap {
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
    get(key: string): DataCloudflarePagesProjectDeploymentConfigsProductionHyperdriveBindingsOutputReference;
}
export interface DataCloudflarePagesProjectDeploymentConfigsProductionKvNamespaces {
}
export declare function dataCloudflarePagesProjectDeploymentConfigsProductionKvNamespacesToTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsProductionKvNamespaces): any;
export declare function dataCloudflarePagesProjectDeploymentConfigsProductionKvNamespacesToHclTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsProductionKvNamespaces): any;
export declare class DataCloudflarePagesProjectDeploymentConfigsProductionKvNamespacesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): DataCloudflarePagesProjectDeploymentConfigsProductionKvNamespaces | undefined;
    set internalValue(value: DataCloudflarePagesProjectDeploymentConfigsProductionKvNamespaces | undefined);
    get namespaceId(): any;
}
export declare class DataCloudflarePagesProjectDeploymentConfigsProductionKvNamespacesMap extends cdktf.ComplexMap {
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
    get(key: string): DataCloudflarePagesProjectDeploymentConfigsProductionKvNamespacesOutputReference;
}
export interface DataCloudflarePagesProjectDeploymentConfigsProductionLimits {
}
export declare function dataCloudflarePagesProjectDeploymentConfigsProductionLimitsToTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsProductionLimits): any;
export declare function dataCloudflarePagesProjectDeploymentConfigsProductionLimitsToHclTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsProductionLimits): any;
export declare class DataCloudflarePagesProjectDeploymentConfigsProductionLimitsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePagesProjectDeploymentConfigsProductionLimits | undefined;
    set internalValue(value: DataCloudflarePagesProjectDeploymentConfigsProductionLimits | undefined);
    get cpuMs(): any;
}
export interface DataCloudflarePagesProjectDeploymentConfigsProductionMtlsCertificates {
}
export declare function dataCloudflarePagesProjectDeploymentConfigsProductionMtlsCertificatesToTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsProductionMtlsCertificates): any;
export declare function dataCloudflarePagesProjectDeploymentConfigsProductionMtlsCertificatesToHclTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsProductionMtlsCertificates): any;
export declare class DataCloudflarePagesProjectDeploymentConfigsProductionMtlsCertificatesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): DataCloudflarePagesProjectDeploymentConfigsProductionMtlsCertificates | undefined;
    set internalValue(value: DataCloudflarePagesProjectDeploymentConfigsProductionMtlsCertificates | undefined);
    get certificateId(): any;
}
export declare class DataCloudflarePagesProjectDeploymentConfigsProductionMtlsCertificatesMap extends cdktf.ComplexMap {
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
    get(key: string): DataCloudflarePagesProjectDeploymentConfigsProductionMtlsCertificatesOutputReference;
}
export interface DataCloudflarePagesProjectDeploymentConfigsProductionPlacement {
}
export declare function dataCloudflarePagesProjectDeploymentConfigsProductionPlacementToTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsProductionPlacement): any;
export declare function dataCloudflarePagesProjectDeploymentConfigsProductionPlacementToHclTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsProductionPlacement): any;
export declare class DataCloudflarePagesProjectDeploymentConfigsProductionPlacementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePagesProjectDeploymentConfigsProductionPlacement | undefined;
    set internalValue(value: DataCloudflarePagesProjectDeploymentConfigsProductionPlacement | undefined);
    get mode(): any;
}
export interface DataCloudflarePagesProjectDeploymentConfigsProductionQueueProducers {
}
export declare function dataCloudflarePagesProjectDeploymentConfigsProductionQueueProducersToTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsProductionQueueProducers): any;
export declare function dataCloudflarePagesProjectDeploymentConfigsProductionQueueProducersToHclTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsProductionQueueProducers): any;
export declare class DataCloudflarePagesProjectDeploymentConfigsProductionQueueProducersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): DataCloudflarePagesProjectDeploymentConfigsProductionQueueProducers | undefined;
    set internalValue(value: DataCloudflarePagesProjectDeploymentConfigsProductionQueueProducers | undefined);
    get name(): any;
}
export declare class DataCloudflarePagesProjectDeploymentConfigsProductionQueueProducersMap extends cdktf.ComplexMap {
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
    get(key: string): DataCloudflarePagesProjectDeploymentConfigsProductionQueueProducersOutputReference;
}
export interface DataCloudflarePagesProjectDeploymentConfigsProductionR2Buckets {
}
export declare function dataCloudflarePagesProjectDeploymentConfigsProductionR2BucketsToTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsProductionR2Buckets): any;
export declare function dataCloudflarePagesProjectDeploymentConfigsProductionR2BucketsToHclTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsProductionR2Buckets): any;
export declare class DataCloudflarePagesProjectDeploymentConfigsProductionR2BucketsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): DataCloudflarePagesProjectDeploymentConfigsProductionR2Buckets | undefined;
    set internalValue(value: DataCloudflarePagesProjectDeploymentConfigsProductionR2Buckets | undefined);
    get jurisdiction(): any;
    get name(): any;
}
export declare class DataCloudflarePagesProjectDeploymentConfigsProductionR2BucketsMap extends cdktf.ComplexMap {
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
    get(key: string): DataCloudflarePagesProjectDeploymentConfigsProductionR2BucketsOutputReference;
}
export interface DataCloudflarePagesProjectDeploymentConfigsProductionServices {
}
export declare function dataCloudflarePagesProjectDeploymentConfigsProductionServicesToTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsProductionServices): any;
export declare function dataCloudflarePagesProjectDeploymentConfigsProductionServicesToHclTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsProductionServices): any;
export declare class DataCloudflarePagesProjectDeploymentConfigsProductionServicesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): DataCloudflarePagesProjectDeploymentConfigsProductionServices | undefined;
    set internalValue(value: DataCloudflarePagesProjectDeploymentConfigsProductionServices | undefined);
    get entrypoint(): any;
    get environment(): any;
    get service(): any;
}
export declare class DataCloudflarePagesProjectDeploymentConfigsProductionServicesMap extends cdktf.ComplexMap {
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
    get(key: string): DataCloudflarePagesProjectDeploymentConfigsProductionServicesOutputReference;
}
export interface DataCloudflarePagesProjectDeploymentConfigsProductionVectorizeBindings {
}
export declare function dataCloudflarePagesProjectDeploymentConfigsProductionVectorizeBindingsToTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsProductionVectorizeBindings): any;
export declare function dataCloudflarePagesProjectDeploymentConfigsProductionVectorizeBindingsToHclTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsProductionVectorizeBindings): any;
export declare class DataCloudflarePagesProjectDeploymentConfigsProductionVectorizeBindingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): DataCloudflarePagesProjectDeploymentConfigsProductionVectorizeBindings | undefined;
    set internalValue(value: DataCloudflarePagesProjectDeploymentConfigsProductionVectorizeBindings | undefined);
    get indexName(): any;
}
export declare class DataCloudflarePagesProjectDeploymentConfigsProductionVectorizeBindingsMap extends cdktf.ComplexMap {
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
    get(key: string): DataCloudflarePagesProjectDeploymentConfigsProductionVectorizeBindingsOutputReference;
}
export interface DataCloudflarePagesProjectDeploymentConfigsProduction {
}
export declare function dataCloudflarePagesProjectDeploymentConfigsProductionToTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsProduction): any;
export declare function dataCloudflarePagesProjectDeploymentConfigsProductionToHclTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsProduction): any;
export declare class DataCloudflarePagesProjectDeploymentConfigsProductionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePagesProjectDeploymentConfigsProduction | undefined;
    set internalValue(value: DataCloudflarePagesProjectDeploymentConfigsProduction | undefined);
    private _aiBindings;
    get aiBindings(): DataCloudflarePagesProjectDeploymentConfigsProductionAiBindingsMap;
    get alwaysUseLatestCompatibilityDate(): any;
    private _analyticsEngineDatasets;
    get analyticsEngineDatasets(): DataCloudflarePagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsMap;
    private _browsers;
    get browsers(): DataCloudflarePagesProjectDeploymentConfigsProductionBrowsersMap;
    get buildImageMajorVersion(): any;
    get compatibilityDate(): any;
    get compatibilityFlags(): any;
    private _d1Databases;
    get d1Databases(): DataCloudflarePagesProjectDeploymentConfigsProductionD1DatabasesMap;
    private _durableObjectNamespaces;
    get durableObjectNamespaces(): DataCloudflarePagesProjectDeploymentConfigsProductionDurableObjectNamespacesMap;
    private _envVars;
    get envVars(): DataCloudflarePagesProjectDeploymentConfigsProductionEnvVarsMap;
    get failOpen(): any;
    private _hyperdriveBindings;
    get hyperdriveBindings(): DataCloudflarePagesProjectDeploymentConfigsProductionHyperdriveBindingsMap;
    private _kvNamespaces;
    get kvNamespaces(): DataCloudflarePagesProjectDeploymentConfigsProductionKvNamespacesMap;
    private _limits;
    get limits(): DataCloudflarePagesProjectDeploymentConfigsProductionLimitsOutputReference;
    private _mtlsCertificates;
    get mtlsCertificates(): DataCloudflarePagesProjectDeploymentConfigsProductionMtlsCertificatesMap;
    private _placement;
    get placement(): DataCloudflarePagesProjectDeploymentConfigsProductionPlacementOutputReference;
    private _queueProducers;
    get queueProducers(): DataCloudflarePagesProjectDeploymentConfigsProductionQueueProducersMap;
    private _r2Buckets;
    get r2Buckets(): DataCloudflarePagesProjectDeploymentConfigsProductionR2BucketsMap;
    private _services;
    get services(): DataCloudflarePagesProjectDeploymentConfigsProductionServicesMap;
    get usageModel(): any;
    private _vectorizeBindings;
    get vectorizeBindings(): DataCloudflarePagesProjectDeploymentConfigsProductionVectorizeBindingsMap;
    get wranglerConfigHash(): any;
}
export interface DataCloudflarePagesProjectDeploymentConfigs {
}
export declare function dataCloudflarePagesProjectDeploymentConfigsToTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigs): any;
export declare function dataCloudflarePagesProjectDeploymentConfigsToHclTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigs): any;
export declare class DataCloudflarePagesProjectDeploymentConfigsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePagesProjectDeploymentConfigs | undefined;
    set internalValue(value: DataCloudflarePagesProjectDeploymentConfigs | undefined);
    private _preview;
    get preview(): DataCloudflarePagesProjectDeploymentConfigsPreviewOutputReference;
    private _production;
    get production(): DataCloudflarePagesProjectDeploymentConfigsProductionOutputReference;
}
export interface DataCloudflarePagesProjectLatestDeploymentBuildConfig {
}
export declare function dataCloudflarePagesProjectLatestDeploymentBuildConfigToTerraform(struct?: DataCloudflarePagesProjectLatestDeploymentBuildConfig): any;
export declare function dataCloudflarePagesProjectLatestDeploymentBuildConfigToHclTerraform(struct?: DataCloudflarePagesProjectLatestDeploymentBuildConfig): any;
export declare class DataCloudflarePagesProjectLatestDeploymentBuildConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePagesProjectLatestDeploymentBuildConfig | undefined;
    set internalValue(value: DataCloudflarePagesProjectLatestDeploymentBuildConfig | undefined);
    get buildCaching(): any;
    get buildCommand(): any;
    get destinationDir(): any;
    get rootDir(): any;
    get webAnalyticsTag(): any;
    get webAnalyticsToken(): any;
}
export interface DataCloudflarePagesProjectLatestDeploymentDeploymentTriggerMetadata {
}
export declare function dataCloudflarePagesProjectLatestDeploymentDeploymentTriggerMetadataToTerraform(struct?: DataCloudflarePagesProjectLatestDeploymentDeploymentTriggerMetadata): any;
export declare function dataCloudflarePagesProjectLatestDeploymentDeploymentTriggerMetadataToHclTerraform(struct?: DataCloudflarePagesProjectLatestDeploymentDeploymentTriggerMetadata): any;
export declare class DataCloudflarePagesProjectLatestDeploymentDeploymentTriggerMetadataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePagesProjectLatestDeploymentDeploymentTriggerMetadata | undefined;
    set internalValue(value: DataCloudflarePagesProjectLatestDeploymentDeploymentTriggerMetadata | undefined);
    get branch(): any;
    get commitDirty(): any;
    get commitHash(): any;
    get commitMessage(): any;
}
export interface DataCloudflarePagesProjectLatestDeploymentDeploymentTrigger {
}
export declare function dataCloudflarePagesProjectLatestDeploymentDeploymentTriggerToTerraform(struct?: DataCloudflarePagesProjectLatestDeploymentDeploymentTrigger): any;
export declare function dataCloudflarePagesProjectLatestDeploymentDeploymentTriggerToHclTerraform(struct?: DataCloudflarePagesProjectLatestDeploymentDeploymentTrigger): any;
export declare class DataCloudflarePagesProjectLatestDeploymentDeploymentTriggerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePagesProjectLatestDeploymentDeploymentTrigger | undefined;
    set internalValue(value: DataCloudflarePagesProjectLatestDeploymentDeploymentTrigger | undefined);
    private _metadata;
    get metadata(): DataCloudflarePagesProjectLatestDeploymentDeploymentTriggerMetadataOutputReference;
    get type(): any;
}
export interface DataCloudflarePagesProjectLatestDeploymentEnvVars {
}
export declare function dataCloudflarePagesProjectLatestDeploymentEnvVarsToTerraform(struct?: DataCloudflarePagesProjectLatestDeploymentEnvVars): any;
export declare function dataCloudflarePagesProjectLatestDeploymentEnvVarsToHclTerraform(struct?: DataCloudflarePagesProjectLatestDeploymentEnvVars): any;
export declare class DataCloudflarePagesProjectLatestDeploymentEnvVarsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): DataCloudflarePagesProjectLatestDeploymentEnvVars | undefined;
    set internalValue(value: DataCloudflarePagesProjectLatestDeploymentEnvVars | undefined);
    get type(): any;
    get value(): any;
}
export declare class DataCloudflarePagesProjectLatestDeploymentEnvVarsMap extends cdktf.ComplexMap {
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
    get(key: string): DataCloudflarePagesProjectLatestDeploymentEnvVarsOutputReference;
}
export interface DataCloudflarePagesProjectLatestDeploymentLatestStage {
}
export declare function dataCloudflarePagesProjectLatestDeploymentLatestStageToTerraform(struct?: DataCloudflarePagesProjectLatestDeploymentLatestStage): any;
export declare function dataCloudflarePagesProjectLatestDeploymentLatestStageToHclTerraform(struct?: DataCloudflarePagesProjectLatestDeploymentLatestStage): any;
export declare class DataCloudflarePagesProjectLatestDeploymentLatestStageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePagesProjectLatestDeploymentLatestStage | undefined;
    set internalValue(value: DataCloudflarePagesProjectLatestDeploymentLatestStage | undefined);
    get endedOn(): any;
    get name(): any;
    get startedOn(): any;
    get status(): any;
}
export interface DataCloudflarePagesProjectLatestDeploymentSourceConfig {
}
export declare function dataCloudflarePagesProjectLatestDeploymentSourceConfigToTerraform(struct?: DataCloudflarePagesProjectLatestDeploymentSourceConfig): any;
export declare function dataCloudflarePagesProjectLatestDeploymentSourceConfigToHclTerraform(struct?: DataCloudflarePagesProjectLatestDeploymentSourceConfig): any;
export declare class DataCloudflarePagesProjectLatestDeploymentSourceConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePagesProjectLatestDeploymentSourceConfig | undefined;
    set internalValue(value: DataCloudflarePagesProjectLatestDeploymentSourceConfig | undefined);
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
export interface DataCloudflarePagesProjectLatestDeploymentSource {
}
export declare function dataCloudflarePagesProjectLatestDeploymentSourceToTerraform(struct?: DataCloudflarePagesProjectLatestDeploymentSource): any;
export declare function dataCloudflarePagesProjectLatestDeploymentSourceToHclTerraform(struct?: DataCloudflarePagesProjectLatestDeploymentSource): any;
export declare class DataCloudflarePagesProjectLatestDeploymentSourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePagesProjectLatestDeploymentSource | undefined;
    set internalValue(value: DataCloudflarePagesProjectLatestDeploymentSource | undefined);
    private _config;
    get config(): DataCloudflarePagesProjectLatestDeploymentSourceConfigOutputReference;
    get type(): any;
}
export interface DataCloudflarePagesProjectLatestDeploymentStages {
}
export declare function dataCloudflarePagesProjectLatestDeploymentStagesToTerraform(struct?: DataCloudflarePagesProjectLatestDeploymentStages): any;
export declare function dataCloudflarePagesProjectLatestDeploymentStagesToHclTerraform(struct?: DataCloudflarePagesProjectLatestDeploymentStages): any;
export declare class DataCloudflarePagesProjectLatestDeploymentStagesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflarePagesProjectLatestDeploymentStages | undefined;
    set internalValue(value: DataCloudflarePagesProjectLatestDeploymentStages | undefined);
    get endedOn(): any;
    get name(): any;
    get startedOn(): any;
    get status(): any;
}
export declare class DataCloudflarePagesProjectLatestDeploymentStagesList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflarePagesProjectLatestDeploymentStagesOutputReference;
}
export interface DataCloudflarePagesProjectLatestDeployment {
}
export declare function dataCloudflarePagesProjectLatestDeploymentToTerraform(struct?: DataCloudflarePagesProjectLatestDeployment): any;
export declare function dataCloudflarePagesProjectLatestDeploymentToHclTerraform(struct?: DataCloudflarePagesProjectLatestDeployment): any;
export declare class DataCloudflarePagesProjectLatestDeploymentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePagesProjectLatestDeployment | undefined;
    set internalValue(value: DataCloudflarePagesProjectLatestDeployment | undefined);
    get aliases(): any;
    private _buildConfig;
    get buildConfig(): DataCloudflarePagesProjectLatestDeploymentBuildConfigOutputReference;
    get createdOn(): any;
    private _deploymentTrigger;
    get deploymentTrigger(): DataCloudflarePagesProjectLatestDeploymentDeploymentTriggerOutputReference;
    private _envVars;
    get envVars(): DataCloudflarePagesProjectLatestDeploymentEnvVarsMap;
    get environment(): any;
    get id(): any;
    get isSkipped(): any;
    private _latestStage;
    get latestStage(): DataCloudflarePagesProjectLatestDeploymentLatestStageOutputReference;
    get modifiedOn(): any;
    get projectId(): any;
    get projectName(): any;
    get shortId(): any;
    private _source;
    get source(): DataCloudflarePagesProjectLatestDeploymentSourceOutputReference;
    private _stages;
    get stages(): DataCloudflarePagesProjectLatestDeploymentStagesList;
    get url(): any;
    get usesFunctions(): any;
}
export interface DataCloudflarePagesProjectSourceConfig {
}
export declare function dataCloudflarePagesProjectSourceConfigToTerraform(struct?: DataCloudflarePagesProjectSourceConfig): any;
export declare function dataCloudflarePagesProjectSourceConfigToHclTerraform(struct?: DataCloudflarePagesProjectSourceConfig): any;
export declare class DataCloudflarePagesProjectSourceConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePagesProjectSourceConfig | undefined;
    set internalValue(value: DataCloudflarePagesProjectSourceConfig | undefined);
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
export interface DataCloudflarePagesProjectSource {
}
export declare function dataCloudflarePagesProjectSourceToTerraform(struct?: DataCloudflarePagesProjectSource): any;
export declare function dataCloudflarePagesProjectSourceToHclTerraform(struct?: DataCloudflarePagesProjectSource): any;
export declare class DataCloudflarePagesProjectSourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePagesProjectSource | undefined;
    set internalValue(value: DataCloudflarePagesProjectSource | undefined);
    private _config;
    get config(): DataCloudflarePagesProjectSourceConfigOutputReference;
    get type(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pages_project cloudflare_pages_project}
*/
export declare class DataCloudflarePagesProject extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_pages_project";
    /**
    * Generates CDKTF code for importing a DataCloudflarePagesProject resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflarePagesProject to import
    * @param importFromId The id of the existing DataCloudflarePagesProject that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pages_project#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflarePagesProject to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pages_project cloudflare_pages_project} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflarePagesProjectConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflarePagesProjectConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _buildConfig;
    get buildConfig(): DataCloudflarePagesProjectBuildConfigOutputReference;
    private _canonicalDeployment;
    get canonicalDeployment(): DataCloudflarePagesProjectCanonicalDeploymentOutputReference;
    get createdOn(): any;
    private _deploymentConfigs;
    get deploymentConfigs(): DataCloudflarePagesProjectDeploymentConfigsOutputReference;
    get domains(): any;
    get framework(): any;
    get frameworkVersion(): any;
    get id(): any;
    private _latestDeployment;
    get latestDeployment(): DataCloudflarePagesProjectLatestDeploymentOutputReference;
    get name(): any;
    get previewScriptName(): any;
    get productionBranch(): any;
    get productionScriptName(): any;
    private _projectName?;
    get projectName(): string;
    set projectName(value: string);
    get projectNameInput(): string;
    private _source;
    get source(): DataCloudflarePagesProjectSourceOutputReference;
    get subdomain(): any;
    get usesFunctions(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
