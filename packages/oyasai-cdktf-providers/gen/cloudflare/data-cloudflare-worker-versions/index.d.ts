import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareWorkerVersionsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/worker_versions#account_id DataCloudflareWorkerVersions#account_id}
    */
    readonly accountId?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/worker_versions#max_items DataCloudflareWorkerVersions#max_items}
    */
    readonly maxItems?: number;
    /**
    * Identifier for the Worker, which can be ID or name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/worker_versions#worker_id DataCloudflareWorkerVersions#worker_id}
    */
    readonly workerId: string;
}
export interface DataCloudflareWorkerVersionsResultAnnotations {
}
export declare function dataCloudflareWorkerVersionsResultAnnotationsToTerraform(struct?: DataCloudflareWorkerVersionsResultAnnotations): any;
export declare function dataCloudflareWorkerVersionsResultAnnotationsToHclTerraform(struct?: DataCloudflareWorkerVersionsResultAnnotations): any;
export declare class DataCloudflareWorkerVersionsResultAnnotationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareWorkerVersionsResultAnnotations | undefined;
    set internalValue(value: DataCloudflareWorkerVersionsResultAnnotations | undefined);
    get workersMessage(): any;
    get workersTag(): any;
    get workersTriggeredBy(): any;
}
export interface DataCloudflareWorkerVersionsResultAssetsConfig {
}
export declare function dataCloudflareWorkerVersionsResultAssetsConfigToTerraform(struct?: DataCloudflareWorkerVersionsResultAssetsConfig): any;
export declare function dataCloudflareWorkerVersionsResultAssetsConfigToHclTerraform(struct?: DataCloudflareWorkerVersionsResultAssetsConfig): any;
export declare class DataCloudflareWorkerVersionsResultAssetsConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareWorkerVersionsResultAssetsConfig | undefined;
    set internalValue(value: DataCloudflareWorkerVersionsResultAssetsConfig | undefined);
    get htmlHandling(): any;
    get notFoundHandling(): any;
    get runWorkerFirst(): any;
}
export interface DataCloudflareWorkerVersionsResultAssets {
}
export declare function dataCloudflareWorkerVersionsResultAssetsToTerraform(struct?: DataCloudflareWorkerVersionsResultAssets): any;
export declare function dataCloudflareWorkerVersionsResultAssetsToHclTerraform(struct?: DataCloudflareWorkerVersionsResultAssets): any;
export declare class DataCloudflareWorkerVersionsResultAssetsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareWorkerVersionsResultAssets | undefined;
    set internalValue(value: DataCloudflareWorkerVersionsResultAssets | undefined);
    private _config;
    get config(): DataCloudflareWorkerVersionsResultAssetsConfigOutputReference;
    get jwt(): any;
}
export interface DataCloudflareWorkerVersionsResultBindingsOutboundParams {
}
export declare function dataCloudflareWorkerVersionsResultBindingsOutboundParamsToTerraform(struct?: DataCloudflareWorkerVersionsResultBindingsOutboundParams): any;
export declare function dataCloudflareWorkerVersionsResultBindingsOutboundParamsToHclTerraform(struct?: DataCloudflareWorkerVersionsResultBindingsOutboundParams): any;
export declare class DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareWorkerVersionsResultBindingsOutboundParams | undefined;
    set internalValue(value: DataCloudflareWorkerVersionsResultBindingsOutboundParams | undefined);
    get name(): any;
}
export declare class DataCloudflareWorkerVersionsResultBindingsOutboundParamsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference;
}
export interface DataCloudflareWorkerVersionsResultBindingsOutboundWorker {
}
export declare function dataCloudflareWorkerVersionsResultBindingsOutboundWorkerToTerraform(struct?: DataCloudflareWorkerVersionsResultBindingsOutboundWorker): any;
export declare function dataCloudflareWorkerVersionsResultBindingsOutboundWorkerToHclTerraform(struct?: DataCloudflareWorkerVersionsResultBindingsOutboundWorker): any;
export declare class DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareWorkerVersionsResultBindingsOutboundWorker | undefined;
    set internalValue(value: DataCloudflareWorkerVersionsResultBindingsOutboundWorker | undefined);
    get entrypoint(): any;
    get environment(): any;
    get service(): any;
}
export interface DataCloudflareWorkerVersionsResultBindingsOutbound {
}
export declare function dataCloudflareWorkerVersionsResultBindingsOutboundToTerraform(struct?: DataCloudflareWorkerVersionsResultBindingsOutbound): any;
export declare function dataCloudflareWorkerVersionsResultBindingsOutboundToHclTerraform(struct?: DataCloudflareWorkerVersionsResultBindingsOutbound): any;
export declare class DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareWorkerVersionsResultBindingsOutbound | undefined;
    set internalValue(value: DataCloudflareWorkerVersionsResultBindingsOutbound | undefined);
    private _params;
    get params(): DataCloudflareWorkerVersionsResultBindingsOutboundParamsList;
    private _worker;
    get worker(): DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference;
}
export interface DataCloudflareWorkerVersionsResultBindingsSimple {
}
export declare function dataCloudflareWorkerVersionsResultBindingsSimpleToTerraform(struct?: DataCloudflareWorkerVersionsResultBindingsSimple): any;
export declare function dataCloudflareWorkerVersionsResultBindingsSimpleToHclTerraform(struct?: DataCloudflareWorkerVersionsResultBindingsSimple): any;
export declare class DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareWorkerVersionsResultBindingsSimple | undefined;
    set internalValue(value: DataCloudflareWorkerVersionsResultBindingsSimple | undefined);
    get limit(): any;
    get period(): any;
}
export interface DataCloudflareWorkerVersionsResultBindings {
}
export declare function dataCloudflareWorkerVersionsResultBindingsToTerraform(struct?: DataCloudflareWorkerVersionsResultBindings): any;
export declare function dataCloudflareWorkerVersionsResultBindingsToHclTerraform(struct?: DataCloudflareWorkerVersionsResultBindings): any;
export declare class DataCloudflareWorkerVersionsResultBindingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareWorkerVersionsResultBindings | undefined;
    set internalValue(value: DataCloudflareWorkerVersionsResultBindings | undefined);
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
    get outbound(): DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference;
    get part(): any;
    get pipeline(): any;
    get queueName(): any;
    get scriptName(): any;
    get secretName(): any;
    get service(): any;
    get serviceId(): any;
    private _simple;
    get simple(): DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference;
    get storeId(): any;
    get text(): any;
    get tunnelId(): any;
    get type(): any;
    get usages(): any;
    get versionId(): any;
    get workflowName(): any;
}
export declare class DataCloudflareWorkerVersionsResultBindingsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareWorkerVersionsResultBindingsOutputReference;
}
export interface DataCloudflareWorkerVersionsResultContainers {
}
export declare function dataCloudflareWorkerVersionsResultContainersToTerraform(struct?: DataCloudflareWorkerVersionsResultContainers): any;
export declare function dataCloudflareWorkerVersionsResultContainersToHclTerraform(struct?: DataCloudflareWorkerVersionsResultContainers): any;
export declare class DataCloudflareWorkerVersionsResultContainersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareWorkerVersionsResultContainers | undefined;
    set internalValue(value: DataCloudflareWorkerVersionsResultContainers | undefined);
    get className(): any;
}
export declare class DataCloudflareWorkerVersionsResultContainersList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareWorkerVersionsResultContainersOutputReference;
}
export interface DataCloudflareWorkerVersionsResultLimits {
}
export declare function dataCloudflareWorkerVersionsResultLimitsToTerraform(struct?: DataCloudflareWorkerVersionsResultLimits): any;
export declare function dataCloudflareWorkerVersionsResultLimitsToHclTerraform(struct?: DataCloudflareWorkerVersionsResultLimits): any;
export declare class DataCloudflareWorkerVersionsResultLimitsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareWorkerVersionsResultLimits | undefined;
    set internalValue(value: DataCloudflareWorkerVersionsResultLimits | undefined);
    get cpuMs(): any;
    get subrequests(): any;
}
export interface DataCloudflareWorkerVersionsResultMigrationsRenamedClasses {
}
export declare function dataCloudflareWorkerVersionsResultMigrationsRenamedClassesToTerraform(struct?: DataCloudflareWorkerVersionsResultMigrationsRenamedClasses): any;
export declare function dataCloudflareWorkerVersionsResultMigrationsRenamedClassesToHclTerraform(struct?: DataCloudflareWorkerVersionsResultMigrationsRenamedClasses): any;
export declare class DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareWorkerVersionsResultMigrationsRenamedClasses | undefined;
    set internalValue(value: DataCloudflareWorkerVersionsResultMigrationsRenamedClasses | undefined);
    get from(): any;
    get to(): any;
}
export declare class DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference;
}
export interface DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClasses {
}
export declare function dataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesToTerraform(struct?: DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClasses): any;
export declare function dataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesToHclTerraform(struct?: DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClasses): any;
export declare class DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClasses | undefined;
    set internalValue(value: DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClasses | undefined);
    get from(): any;
    get to(): any;
}
export declare class DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference;
}
export interface DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClasses {
}
export declare function dataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesToTerraform(struct?: DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClasses): any;
export declare function dataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesToHclTerraform(struct?: DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClasses): any;
export declare class DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClasses | undefined;
    set internalValue(value: DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClasses | undefined);
    get from(): any;
    get fromScript(): any;
    get to(): any;
}
export declare class DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference;
}
export interface DataCloudflareWorkerVersionsResultMigrationsSteps {
}
export declare function dataCloudflareWorkerVersionsResultMigrationsStepsToTerraform(struct?: DataCloudflareWorkerVersionsResultMigrationsSteps): any;
export declare function dataCloudflareWorkerVersionsResultMigrationsStepsToHclTerraform(struct?: DataCloudflareWorkerVersionsResultMigrationsSteps): any;
export declare class DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareWorkerVersionsResultMigrationsSteps | undefined;
    set internalValue(value: DataCloudflareWorkerVersionsResultMigrationsSteps | undefined);
    get deletedClasses(): any;
    get newClasses(): any;
    get newSqliteClasses(): any;
    private _renamedClasses;
    get renamedClasses(): DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList;
    private _transferredClasses;
    get transferredClasses(): DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList;
}
export declare class DataCloudflareWorkerVersionsResultMigrationsStepsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference;
}
export interface DataCloudflareWorkerVersionsResultMigrationsTransferredClasses {
}
export declare function dataCloudflareWorkerVersionsResultMigrationsTransferredClassesToTerraform(struct?: DataCloudflareWorkerVersionsResultMigrationsTransferredClasses): any;
export declare function dataCloudflareWorkerVersionsResultMigrationsTransferredClassesToHclTerraform(struct?: DataCloudflareWorkerVersionsResultMigrationsTransferredClasses): any;
export declare class DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareWorkerVersionsResultMigrationsTransferredClasses | undefined;
    set internalValue(value: DataCloudflareWorkerVersionsResultMigrationsTransferredClasses | undefined);
    get from(): any;
    get fromScript(): any;
    get to(): any;
}
export declare class DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference;
}
export interface DataCloudflareWorkerVersionsResultMigrations {
}
export declare function dataCloudflareWorkerVersionsResultMigrationsToTerraform(struct?: DataCloudflareWorkerVersionsResultMigrations): any;
export declare function dataCloudflareWorkerVersionsResultMigrationsToHclTerraform(struct?: DataCloudflareWorkerVersionsResultMigrations): any;
export declare class DataCloudflareWorkerVersionsResultMigrationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareWorkerVersionsResultMigrations | undefined;
    set internalValue(value: DataCloudflareWorkerVersionsResultMigrations | undefined);
    get deletedClasses(): any;
    get newClasses(): any;
    get newSqliteClasses(): any;
    get newTag(): any;
    get oldTag(): any;
    private _renamedClasses;
    get renamedClasses(): DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList;
    private _steps;
    get steps(): DataCloudflareWorkerVersionsResultMigrationsStepsList;
    private _transferredClasses;
    get transferredClasses(): DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList;
}
export interface DataCloudflareWorkerVersionsResultModules {
}
export declare function dataCloudflareWorkerVersionsResultModulesToTerraform(struct?: DataCloudflareWorkerVersionsResultModules): any;
export declare function dataCloudflareWorkerVersionsResultModulesToHclTerraform(struct?: DataCloudflareWorkerVersionsResultModules): any;
export declare class DataCloudflareWorkerVersionsResultModulesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareWorkerVersionsResultModules | undefined;
    set internalValue(value: DataCloudflareWorkerVersionsResultModules | undefined);
    get contentBase64(): any;
    get contentType(): any;
    get name(): any;
}
export declare class DataCloudflareWorkerVersionsResultModulesList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareWorkerVersionsResultModulesOutputReference;
}
export interface DataCloudflareWorkerVersionsResultPlacementTarget {
}
export declare function dataCloudflareWorkerVersionsResultPlacementTargetToTerraform(struct?: DataCloudflareWorkerVersionsResultPlacementTarget): any;
export declare function dataCloudflareWorkerVersionsResultPlacementTargetToHclTerraform(struct?: DataCloudflareWorkerVersionsResultPlacementTarget): any;
export declare class DataCloudflareWorkerVersionsResultPlacementTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareWorkerVersionsResultPlacementTarget | undefined;
    set internalValue(value: DataCloudflareWorkerVersionsResultPlacementTarget | undefined);
    get host(): any;
    get hostname(): any;
    get region(): any;
}
export declare class DataCloudflareWorkerVersionsResultPlacementTargetList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareWorkerVersionsResultPlacementTargetOutputReference;
}
export interface DataCloudflareWorkerVersionsResultPlacement {
}
export declare function dataCloudflareWorkerVersionsResultPlacementToTerraform(struct?: DataCloudflareWorkerVersionsResultPlacement): any;
export declare function dataCloudflareWorkerVersionsResultPlacementToHclTerraform(struct?: DataCloudflareWorkerVersionsResultPlacement): any;
export declare class DataCloudflareWorkerVersionsResultPlacementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareWorkerVersionsResultPlacement | undefined;
    set internalValue(value: DataCloudflareWorkerVersionsResultPlacement | undefined);
    get host(): any;
    get hostname(): any;
    get mode(): any;
    get region(): any;
    private _target;
    get target(): DataCloudflareWorkerVersionsResultPlacementTargetList;
}
export interface DataCloudflareWorkerVersionsResult {
}
export declare function dataCloudflareWorkerVersionsResultToTerraform(struct?: DataCloudflareWorkerVersionsResult): any;
export declare function dataCloudflareWorkerVersionsResultToHclTerraform(struct?: DataCloudflareWorkerVersionsResult): any;
export declare class DataCloudflareWorkerVersionsResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareWorkerVersionsResult | undefined;
    set internalValue(value: DataCloudflareWorkerVersionsResult | undefined);
    private _annotations;
    get annotations(): DataCloudflareWorkerVersionsResultAnnotationsOutputReference;
    private _assets;
    get assets(): DataCloudflareWorkerVersionsResultAssetsOutputReference;
    private _bindings;
    get bindings(): DataCloudflareWorkerVersionsResultBindingsList;
    get compatibilityDate(): any;
    get compatibilityFlags(): any;
    private _containers;
    get containers(): DataCloudflareWorkerVersionsResultContainersList;
    get createdOn(): any;
    get id(): any;
    private _limits;
    get limits(): DataCloudflareWorkerVersionsResultLimitsOutputReference;
    get mainModule(): any;
    get mainScriptBase64(): any;
    get migrationTag(): any;
    private _migrations;
    get migrations(): DataCloudflareWorkerVersionsResultMigrationsOutputReference;
    private _modules;
    get modules(): DataCloudflareWorkerVersionsResultModulesList;
    get number(): any;
    private _placement;
    get placement(): DataCloudflareWorkerVersionsResultPlacementOutputReference;
    get source(): any;
    get startupTimeMs(): any;
    get urls(): any;
    get usageModel(): any;
}
export declare class DataCloudflareWorkerVersionsResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareWorkerVersionsResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/worker_versions cloudflare_worker_versions}
*/
export declare class DataCloudflareWorkerVersions extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_worker_versions";
    /**
    * Generates CDKTF code for importing a DataCloudflareWorkerVersions resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareWorkerVersions to import
    * @param importFromId The id of the existing DataCloudflareWorkerVersions that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/worker_versions#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareWorkerVersions to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/worker_versions cloudflare_worker_versions} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareWorkerVersionsConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareWorkerVersionsConfig);
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
    get result(): DataCloudflareWorkerVersionsResultList;
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
