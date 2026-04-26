import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareWorkerVersionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/worker_version#account_id DataCloudflareWorkerVersion#account_id}
    */
    readonly accountId?: string;
    /**
    * Whether to include the `modules` property of the version in the response, which contains code and sourcemap content and may add several megabytes to the response size.
    * Available values: "modules".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/worker_version#include DataCloudflareWorkerVersion#include}
    */
    readonly include?: string;
    /**
    * Identifier for the version, which can be a UUID, a UUID prefix (minimum length 8), or the literal "latest" to operate on the most recently created version.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/worker_version#version_id DataCloudflareWorkerVersion#version_id}
    */
    readonly versionId: string;
    /**
    * Identifier for the Worker, which can be ID or name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/worker_version#worker_id DataCloudflareWorkerVersion#worker_id}
    */
    readonly workerId: string;
}
export interface DataCloudflareWorkerVersionAnnotations {
}
export declare function dataCloudflareWorkerVersionAnnotationsToTerraform(struct?: DataCloudflareWorkerVersionAnnotations): any;
export declare function dataCloudflareWorkerVersionAnnotationsToHclTerraform(struct?: DataCloudflareWorkerVersionAnnotations): any;
export declare class DataCloudflareWorkerVersionAnnotationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareWorkerVersionAnnotations | undefined;
    set internalValue(value: DataCloudflareWorkerVersionAnnotations | undefined);
    get workersMessage(): any;
    get workersTag(): any;
    get workersTriggeredBy(): any;
}
export interface DataCloudflareWorkerVersionAssetsConfig {
}
export declare function dataCloudflareWorkerVersionAssetsConfigToTerraform(struct?: DataCloudflareWorkerVersionAssetsConfig): any;
export declare function dataCloudflareWorkerVersionAssetsConfigToHclTerraform(struct?: DataCloudflareWorkerVersionAssetsConfig): any;
export declare class DataCloudflareWorkerVersionAssetsConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareWorkerVersionAssetsConfig | undefined;
    set internalValue(value: DataCloudflareWorkerVersionAssetsConfig | undefined);
    get htmlHandling(): any;
    get notFoundHandling(): any;
    get runWorkerFirst(): any;
}
export interface DataCloudflareWorkerVersionAssets {
}
export declare function dataCloudflareWorkerVersionAssetsToTerraform(struct?: DataCloudflareWorkerVersionAssets): any;
export declare function dataCloudflareWorkerVersionAssetsToHclTerraform(struct?: DataCloudflareWorkerVersionAssets): any;
export declare class DataCloudflareWorkerVersionAssetsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareWorkerVersionAssets | undefined;
    set internalValue(value: DataCloudflareWorkerVersionAssets | undefined);
    private _config;
    get config(): DataCloudflareWorkerVersionAssetsConfigOutputReference;
    get jwt(): any;
}
export interface DataCloudflareWorkerVersionBindingsOutboundParams {
}
export declare function dataCloudflareWorkerVersionBindingsOutboundParamsToTerraform(struct?: DataCloudflareWorkerVersionBindingsOutboundParams): any;
export declare function dataCloudflareWorkerVersionBindingsOutboundParamsToHclTerraform(struct?: DataCloudflareWorkerVersionBindingsOutboundParams): any;
export declare class DataCloudflareWorkerVersionBindingsOutboundParamsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareWorkerVersionBindingsOutboundParams | undefined;
    set internalValue(value: DataCloudflareWorkerVersionBindingsOutboundParams | undefined);
    get name(): any;
}
export declare class DataCloudflareWorkerVersionBindingsOutboundParamsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareWorkerVersionBindingsOutboundParamsOutputReference;
}
export interface DataCloudflareWorkerVersionBindingsOutboundWorker {
}
export declare function dataCloudflareWorkerVersionBindingsOutboundWorkerToTerraform(struct?: DataCloudflareWorkerVersionBindingsOutboundWorker): any;
export declare function dataCloudflareWorkerVersionBindingsOutboundWorkerToHclTerraform(struct?: DataCloudflareWorkerVersionBindingsOutboundWorker): any;
export declare class DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareWorkerVersionBindingsOutboundWorker | undefined;
    set internalValue(value: DataCloudflareWorkerVersionBindingsOutboundWorker | undefined);
    get entrypoint(): any;
    get environment(): any;
    get service(): any;
}
export interface DataCloudflareWorkerVersionBindingsOutbound {
}
export declare function dataCloudflareWorkerVersionBindingsOutboundToTerraform(struct?: DataCloudflareWorkerVersionBindingsOutbound): any;
export declare function dataCloudflareWorkerVersionBindingsOutboundToHclTerraform(struct?: DataCloudflareWorkerVersionBindingsOutbound): any;
export declare class DataCloudflareWorkerVersionBindingsOutboundOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareWorkerVersionBindingsOutbound | undefined;
    set internalValue(value: DataCloudflareWorkerVersionBindingsOutbound | undefined);
    private _params;
    get params(): DataCloudflareWorkerVersionBindingsOutboundParamsList;
    private _worker;
    get worker(): DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference;
}
export interface DataCloudflareWorkerVersionBindingsSimple {
}
export declare function dataCloudflareWorkerVersionBindingsSimpleToTerraform(struct?: DataCloudflareWorkerVersionBindingsSimple): any;
export declare function dataCloudflareWorkerVersionBindingsSimpleToHclTerraform(struct?: DataCloudflareWorkerVersionBindingsSimple): any;
export declare class DataCloudflareWorkerVersionBindingsSimpleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareWorkerVersionBindingsSimple | undefined;
    set internalValue(value: DataCloudflareWorkerVersionBindingsSimple | undefined);
    get limit(): any;
    get period(): any;
}
export interface DataCloudflareWorkerVersionBindings {
}
export declare function dataCloudflareWorkerVersionBindingsToTerraform(struct?: DataCloudflareWorkerVersionBindings): any;
export declare function dataCloudflareWorkerVersionBindingsToHclTerraform(struct?: DataCloudflareWorkerVersionBindings): any;
export declare class DataCloudflareWorkerVersionBindingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareWorkerVersionBindings | undefined;
    set internalValue(value: DataCloudflareWorkerVersionBindings | undefined);
    get algorithm(): any;
    get allowedDestinationAddresses(): any;
    get allowedSenderAddresses(): any;
    get appId(): any;
    get bucketName(): any;
    get certificateId(): any;
    get className(): any;
    get databaseId(): any;
    get dataset(): any;
    get destinationAddress(): any;
    get dispatchNamespace(): any;
    get entrypoint(): any;
    get environment(): any;
    get format(): any;
    get id(): any;
    get indexName(): any;
    get instanceName(): any;
    get json(): any;
    get jurisdiction(): any;
    get keyBase64(): any;
    get keyJwk(): any;
    get name(): any;
    get namespace(): any;
    get namespaceId(): any;
    get networkId(): any;
    get oldName(): any;
    private _outbound;
    get outbound(): DataCloudflareWorkerVersionBindingsOutboundOutputReference;
    get part(): any;
    get pipeline(): any;
    get queueName(): any;
    get scriptName(): any;
    get secretName(): any;
    get service(): any;
    get serviceId(): any;
    private _simple;
    get simple(): DataCloudflareWorkerVersionBindingsSimpleOutputReference;
    get storeId(): any;
    get text(): any;
    get tunnelId(): any;
    get type(): any;
    get usages(): any;
    get versionId(): any;
    get workflowName(): any;
}
export declare class DataCloudflareWorkerVersionBindingsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareWorkerVersionBindingsOutputReference;
}
export interface DataCloudflareWorkerVersionContainers {
}
export declare function dataCloudflareWorkerVersionContainersToTerraform(struct?: DataCloudflareWorkerVersionContainers): any;
export declare function dataCloudflareWorkerVersionContainersToHclTerraform(struct?: DataCloudflareWorkerVersionContainers): any;
export declare class DataCloudflareWorkerVersionContainersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareWorkerVersionContainers | undefined;
    set internalValue(value: DataCloudflareWorkerVersionContainers | undefined);
    get className(): any;
}
export declare class DataCloudflareWorkerVersionContainersList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareWorkerVersionContainersOutputReference;
}
export interface DataCloudflareWorkerVersionLimits {
}
export declare function dataCloudflareWorkerVersionLimitsToTerraform(struct?: DataCloudflareWorkerVersionLimits): any;
export declare function dataCloudflareWorkerVersionLimitsToHclTerraform(struct?: DataCloudflareWorkerVersionLimits): any;
export declare class DataCloudflareWorkerVersionLimitsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareWorkerVersionLimits | undefined;
    set internalValue(value: DataCloudflareWorkerVersionLimits | undefined);
    get cpuMs(): any;
    get subrequests(): any;
}
export interface DataCloudflareWorkerVersionMigrationsRenamedClasses {
}
export declare function dataCloudflareWorkerVersionMigrationsRenamedClassesToTerraform(struct?: DataCloudflareWorkerVersionMigrationsRenamedClasses): any;
export declare function dataCloudflareWorkerVersionMigrationsRenamedClassesToHclTerraform(struct?: DataCloudflareWorkerVersionMigrationsRenamedClasses): any;
export declare class DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareWorkerVersionMigrationsRenamedClasses | undefined;
    set internalValue(value: DataCloudflareWorkerVersionMigrationsRenamedClasses | undefined);
    get from(): any;
    get to(): any;
}
export declare class DataCloudflareWorkerVersionMigrationsRenamedClassesList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference;
}
export interface DataCloudflareWorkerVersionMigrationsStepsRenamedClasses {
}
export declare function dataCloudflareWorkerVersionMigrationsStepsRenamedClassesToTerraform(struct?: DataCloudflareWorkerVersionMigrationsStepsRenamedClasses): any;
export declare function dataCloudflareWorkerVersionMigrationsStepsRenamedClassesToHclTerraform(struct?: DataCloudflareWorkerVersionMigrationsStepsRenamedClasses): any;
export declare class DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareWorkerVersionMigrationsStepsRenamedClasses | undefined;
    set internalValue(value: DataCloudflareWorkerVersionMigrationsStepsRenamedClasses | undefined);
    get from(): any;
    get to(): any;
}
export declare class DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference;
}
export interface DataCloudflareWorkerVersionMigrationsStepsTransferredClasses {
}
export declare function dataCloudflareWorkerVersionMigrationsStepsTransferredClassesToTerraform(struct?: DataCloudflareWorkerVersionMigrationsStepsTransferredClasses): any;
export declare function dataCloudflareWorkerVersionMigrationsStepsTransferredClassesToHclTerraform(struct?: DataCloudflareWorkerVersionMigrationsStepsTransferredClasses): any;
export declare class DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareWorkerVersionMigrationsStepsTransferredClasses | undefined;
    set internalValue(value: DataCloudflareWorkerVersionMigrationsStepsTransferredClasses | undefined);
    get from(): any;
    get fromScript(): any;
    get to(): any;
}
export declare class DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference;
}
export interface DataCloudflareWorkerVersionMigrationsSteps {
}
export declare function dataCloudflareWorkerVersionMigrationsStepsToTerraform(struct?: DataCloudflareWorkerVersionMigrationsSteps): any;
export declare function dataCloudflareWorkerVersionMigrationsStepsToHclTerraform(struct?: DataCloudflareWorkerVersionMigrationsSteps): any;
export declare class DataCloudflareWorkerVersionMigrationsStepsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareWorkerVersionMigrationsSteps | undefined;
    set internalValue(value: DataCloudflareWorkerVersionMigrationsSteps | undefined);
    get deletedClasses(): any;
    get newClasses(): any;
    get newSqliteClasses(): any;
    private _renamedClasses;
    get renamedClasses(): DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList;
    private _transferredClasses;
    get transferredClasses(): DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList;
}
export declare class DataCloudflareWorkerVersionMigrationsStepsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareWorkerVersionMigrationsStepsOutputReference;
}
export interface DataCloudflareWorkerVersionMigrationsTransferredClasses {
}
export declare function dataCloudflareWorkerVersionMigrationsTransferredClassesToTerraform(struct?: DataCloudflareWorkerVersionMigrationsTransferredClasses): any;
export declare function dataCloudflareWorkerVersionMigrationsTransferredClassesToHclTerraform(struct?: DataCloudflareWorkerVersionMigrationsTransferredClasses): any;
export declare class DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareWorkerVersionMigrationsTransferredClasses | undefined;
    set internalValue(value: DataCloudflareWorkerVersionMigrationsTransferredClasses | undefined);
    get from(): any;
    get fromScript(): any;
    get to(): any;
}
export declare class DataCloudflareWorkerVersionMigrationsTransferredClassesList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference;
}
export interface DataCloudflareWorkerVersionMigrations {
}
export declare function dataCloudflareWorkerVersionMigrationsToTerraform(struct?: DataCloudflareWorkerVersionMigrations): any;
export declare function dataCloudflareWorkerVersionMigrationsToHclTerraform(struct?: DataCloudflareWorkerVersionMigrations): any;
export declare class DataCloudflareWorkerVersionMigrationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareWorkerVersionMigrations | undefined;
    set internalValue(value: DataCloudflareWorkerVersionMigrations | undefined);
    get deletedClasses(): any;
    get newClasses(): any;
    get newSqliteClasses(): any;
    get newTag(): any;
    get oldTag(): any;
    private _renamedClasses;
    get renamedClasses(): DataCloudflareWorkerVersionMigrationsRenamedClassesList;
    private _steps;
    get steps(): DataCloudflareWorkerVersionMigrationsStepsList;
    private _transferredClasses;
    get transferredClasses(): DataCloudflareWorkerVersionMigrationsTransferredClassesList;
}
export interface DataCloudflareWorkerVersionModules {
}
export declare function dataCloudflareWorkerVersionModulesToTerraform(struct?: DataCloudflareWorkerVersionModules): any;
export declare function dataCloudflareWorkerVersionModulesToHclTerraform(struct?: DataCloudflareWorkerVersionModules): any;
export declare class DataCloudflareWorkerVersionModulesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareWorkerVersionModules | undefined;
    set internalValue(value: DataCloudflareWorkerVersionModules | undefined);
    get contentBase64(): any;
    get contentType(): any;
    get name(): any;
}
export declare class DataCloudflareWorkerVersionModulesList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareWorkerVersionModulesOutputReference;
}
export interface DataCloudflareWorkerVersionPlacementTarget {
}
export declare function dataCloudflareWorkerVersionPlacementTargetToTerraform(struct?: DataCloudflareWorkerVersionPlacementTarget): any;
export declare function dataCloudflareWorkerVersionPlacementTargetToHclTerraform(struct?: DataCloudflareWorkerVersionPlacementTarget): any;
export declare class DataCloudflareWorkerVersionPlacementTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareWorkerVersionPlacementTarget | undefined;
    set internalValue(value: DataCloudflareWorkerVersionPlacementTarget | undefined);
    get host(): any;
    get hostname(): any;
    get region(): any;
}
export declare class DataCloudflareWorkerVersionPlacementTargetList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareWorkerVersionPlacementTargetOutputReference;
}
export interface DataCloudflareWorkerVersionPlacement {
}
export declare function dataCloudflareWorkerVersionPlacementToTerraform(struct?: DataCloudflareWorkerVersionPlacement): any;
export declare function dataCloudflareWorkerVersionPlacementToHclTerraform(struct?: DataCloudflareWorkerVersionPlacement): any;
export declare class DataCloudflareWorkerVersionPlacementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareWorkerVersionPlacement | undefined;
    set internalValue(value: DataCloudflareWorkerVersionPlacement | undefined);
    get host(): any;
    get hostname(): any;
    get mode(): any;
    get region(): any;
    private _target;
    get target(): DataCloudflareWorkerVersionPlacementTargetList;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/worker_version cloudflare_worker_version}
*/
export declare class DataCloudflareWorkerVersion extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_worker_version";
    /**
    * Generates CDKTF code for importing a DataCloudflareWorkerVersion resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareWorkerVersion to import
    * @param importFromId The id of the existing DataCloudflareWorkerVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/worker_version#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareWorkerVersion to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/worker_version cloudflare_worker_version} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareWorkerVersionConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareWorkerVersionConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _annotations;
    get annotations(): DataCloudflareWorkerVersionAnnotationsOutputReference;
    private _assets;
    get assets(): DataCloudflareWorkerVersionAssetsOutputReference;
    private _bindings;
    get bindings(): DataCloudflareWorkerVersionBindingsList;
    get compatibilityDate(): any;
    get compatibilityFlags(): any;
    private _containers;
    get containers(): DataCloudflareWorkerVersionContainersList;
    get createdOn(): any;
    get id(): any;
    private _include?;
    get include(): string;
    set include(value: string);
    resetInclude(): void;
    get includeInput(): string;
    private _limits;
    get limits(): DataCloudflareWorkerVersionLimitsOutputReference;
    get mainModule(): any;
    get mainScriptBase64(): any;
    get migrationTag(): any;
    private _migrations;
    get migrations(): DataCloudflareWorkerVersionMigrationsOutputReference;
    private _modules;
    get modules(): DataCloudflareWorkerVersionModulesList;
    get number(): any;
    private _placement;
    get placement(): DataCloudflareWorkerVersionPlacementOutputReference;
    get source(): any;
    get startupTimeMs(): any;
    get urls(): any;
    get usageModel(): any;
    private _versionId?;
    get versionId(): string;
    set versionId(value: string);
    get versionIdInput(): string;
    private _workerId?;
    get workerId(): string;
    set workerId(value: string);
    get workerIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
