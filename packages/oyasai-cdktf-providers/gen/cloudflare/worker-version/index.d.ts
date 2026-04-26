import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WorkerVersionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#account_id WorkerVersion#account_id}
    */
    readonly accountId?: string;
    /**
    * Metadata about the version.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#annotations WorkerVersion#annotations}
    */
    readonly annotations?: WorkerVersionAnnotations;
    /**
    * Configuration for assets within a Worker.
    *
    * [`_headers`](https://developers.cloudflare.com/workers/static-assets/headers/#custom-headers) and
    * [`_redirects`](https://developers.cloudflare.com/workers/static-assets/redirects/) files should be
    * included as modules named `_headers` and `_redirects` with content type `text/plain`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#assets WorkerVersion#assets}
    */
    readonly assets?: WorkerVersionAssets;
    /**
    * List of bindings attached to a Worker. You can find more about bindings on our docs: https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/#bindings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#bindings WorkerVersion#bindings}
    */
    readonly bindings?: WorkerVersionBindings[] | cdktf.IResolvable;
    /**
    * Date indicating targeted support in the Workers runtime. Backwards incompatible fixes to the runtime following this date will not affect this Worker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#compatibility_date WorkerVersion#compatibility_date}
    */
    readonly compatibilityDate?: string;
    /**
    * Flags that enable or disable certain features in the Workers runtime. Used to enable upcoming features or opt in or out of specific changes not included in a `compatibility_date`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#compatibility_flags WorkerVersion#compatibility_flags}
    */
    readonly compatibilityFlags?: string[];
    /**
    * List of containers attached to a Worker. Containers can only be attached to Durable Object classes of this Worker script.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#containers WorkerVersion#containers}
    */
    readonly containers?: WorkerVersionContainers[] | cdktf.IResolvable;
    /**
    * Resource limits enforced at runtime.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#limits WorkerVersion#limits}
    */
    readonly limits?: WorkerVersionLimits;
    /**
    * The name of the main module in the `modules` array (e.g. the name of the module that exports a `fetch` handler).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#main_module WorkerVersion#main_module}
    */
    readonly mainModule?: string;
    /**
    * Migrations for Durable Objects associated with the version. Migrations are applied when the version is deployed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#migrations WorkerVersion#migrations}
    */
    readonly migrations?: WorkerVersionMigrations;
    /**
    * Code, sourcemaps, and other content used at runtime.
    *
    * This includes [`_headers`](https://developers.cloudflare.com/workers/static-assets/headers/#custom-headers) and
    * [`_redirects`](https://developers.cloudflare.com/workers/static-assets/redirects/) files used to configure
    * [Static Assets](https://developers.cloudflare.com/workers/static-assets/). `_headers` and `_redirects` files should be
    * included as modules named `_headers` and `_redirects` with content type `text/plain`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#modules WorkerVersion#modules}
    */
    readonly modules?: WorkerVersionModules[] | cdktf.IResolvable;
    /**
    * Configuration for [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). Specify mode='smart' for Smart Placement, or one of region/hostname/host.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#placement WorkerVersion#placement}
    */
    readonly placement?: WorkerVersionPlacement;
    /**
    * Usage model for the version.
    * Available values: "standard", "bundled", "unbound".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#usage_model WorkerVersion#usage_model}
    */
    readonly usageModel?: string;
    /**
    * Identifier for the Worker, which can be ID or name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#worker_id WorkerVersion#worker_id}
    */
    readonly workerId: string;
}
export interface WorkerVersionAnnotations {
    /**
    * Human-readable message about the version. Truncated to 1000 bytes if longer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#workers_message WorkerVersion#workers_message}
    */
    readonly workersMessage?: string;
    /**
    * User-provided identifier for the version. Maximum 100 bytes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#workers_tag WorkerVersion#workers_tag}
    */
    readonly workersTag?: string;
}
export declare function workerVersionAnnotationsToTerraform(struct?: WorkerVersionAnnotations | cdktf.IResolvable): any;
export declare function workerVersionAnnotationsToHclTerraform(struct?: WorkerVersionAnnotations | cdktf.IResolvable): any;
export declare class WorkerVersionAnnotationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): WorkerVersionAnnotations | cdktf.IResolvable | undefined;
    set internalValue(value: WorkerVersionAnnotations | cdktf.IResolvable | undefined);
    private _workersMessage?;
    get workersMessage(): string;
    set workersMessage(value: string);
    resetWorkersMessage(): void;
    get workersMessageInput(): string;
    private _workersTag?;
    get workersTag(): string;
    set workersTag(value: string);
    resetWorkersTag(): void;
    get workersTagInput(): string;
    get workersTriggeredBy(): any;
}
export interface WorkerVersionAssetsConfig {
    /**
    * Determines the redirects and rewrites of requests for HTML content.
    * Available values: "auto-trailing-slash", "force-trailing-slash", "drop-trailing-slash", "none".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#html_handling WorkerVersion#html_handling}
    */
    readonly htmlHandling?: string;
    /**
    * Determines the response when a request does not match a static asset, and there is no Worker script.
    * Available values: "none", "404-page", "single-page-application".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#not_found_handling WorkerVersion#not_found_handling}
    */
    readonly notFoundHandling?: string;
    /**
    * When a boolean true, requests will always invoke the Worker script. Otherwise, attempt to serve an asset matching the request, falling back to the Worker script. When a list of strings, contains path rules to control routing to either the Worker or assets. Glob (*) and negative (!) rules are supported. Rules must start with either '/' or '!/'. At least one non-negative rule must be provided, and negative rules have higher precedence than non-negative rules.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#run_worker_first WorkerVersion#run_worker_first}
    */
    readonly runWorkerFirst?: {
        [key: string]: any;
    };
}
export declare function workerVersionAssetsConfigToTerraform(struct?: WorkerVersionAssetsConfig | cdktf.IResolvable): any;
export declare function workerVersionAssetsConfigToHclTerraform(struct?: WorkerVersionAssetsConfig | cdktf.IResolvable): any;
export declare class WorkerVersionAssetsConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): WorkerVersionAssetsConfig | cdktf.IResolvable | undefined;
    set internalValue(value: WorkerVersionAssetsConfig | cdktf.IResolvable | undefined);
    private _htmlHandling?;
    get htmlHandling(): string;
    set htmlHandling(value: string);
    resetHtmlHandling(): void;
    get htmlHandlingInput(): string;
    private _notFoundHandling?;
    get notFoundHandling(): string;
    set notFoundHandling(value: string);
    resetNotFoundHandling(): void;
    get notFoundHandlingInput(): string;
    private _runWorkerFirst?;
    get runWorkerFirst(): {
        [key: string]: any;
    };
    set runWorkerFirst(value: {
        [key: string]: any;
    });
    resetRunWorkerFirst(): void;
    get runWorkerFirstInput(): {
        [key: string]: any;
    };
}
export interface WorkerVersionAssets {
    /**
    * Configuration for assets within a Worker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#config WorkerVersion#config}
    */
    readonly config?: WorkerVersionAssetsConfig;
    /**
    * Path to the directory containing asset files to upload.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#directory WorkerVersion#directory}
    */
    readonly directory?: string;
    /**
    * Token provided upon successful upload of all files from a registered manifest.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#jwt WorkerVersion#jwt}
    */
    readonly jwt?: string;
}
export declare function workerVersionAssetsToTerraform(struct?: WorkerVersionAssets | cdktf.IResolvable): any;
export declare function workerVersionAssetsToHclTerraform(struct?: WorkerVersionAssets | cdktf.IResolvable): any;
export declare class WorkerVersionAssetsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): WorkerVersionAssets | cdktf.IResolvable | undefined;
    set internalValue(value: WorkerVersionAssets | cdktf.IResolvable | undefined);
    get assetManifestSha256(): any;
    private _config;
    get config(): WorkerVersionAssetsConfigOutputReference;
    putConfig(value: WorkerVersionAssetsConfig): void;
    resetConfig(): void;
    get configInput(): any;
    private _directory?;
    get directory(): string;
    set directory(value: string);
    resetDirectory(): void;
    get directoryInput(): string;
    private _jwt?;
    get jwt(): string;
    set jwt(value: string);
    resetJwt(): void;
    get jwtInput(): string;
}
export interface WorkerVersionBindingsOutboundParams {
    /**
    * Name of the parameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#name WorkerVersion#name}
    */
    readonly name: string;
}
export declare function workerVersionBindingsOutboundParamsToTerraform(struct?: WorkerVersionBindingsOutboundParams | cdktf.IResolvable): any;
export declare function workerVersionBindingsOutboundParamsToHclTerraform(struct?: WorkerVersionBindingsOutboundParams | cdktf.IResolvable): any;
export declare class WorkerVersionBindingsOutboundParamsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): WorkerVersionBindingsOutboundParams | cdktf.IResolvable | undefined;
    set internalValue(value: WorkerVersionBindingsOutboundParams | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export declare class WorkerVersionBindingsOutboundParamsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: WorkerVersionBindingsOutboundParams[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): WorkerVersionBindingsOutboundParamsOutputReference;
}
export interface WorkerVersionBindingsOutboundWorker {
    /**
    * Entrypoint to invoke on the outbound worker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#entrypoint WorkerVersion#entrypoint}
    */
    readonly entrypoint?: string;
    /**
    * Environment of the outbound worker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#environment WorkerVersion#environment}
    */
    readonly environment?: string;
    /**
    * Name of the outbound worker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#service WorkerVersion#service}
    */
    readonly service?: string;
}
export declare function workerVersionBindingsOutboundWorkerToTerraform(struct?: WorkerVersionBindingsOutboundWorker | cdktf.IResolvable): any;
export declare function workerVersionBindingsOutboundWorkerToHclTerraform(struct?: WorkerVersionBindingsOutboundWorker | cdktf.IResolvable): any;
export declare class WorkerVersionBindingsOutboundWorkerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): WorkerVersionBindingsOutboundWorker | cdktf.IResolvable | undefined;
    set internalValue(value: WorkerVersionBindingsOutboundWorker | cdktf.IResolvable | undefined);
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
    resetService(): void;
    get serviceInput(): string;
}
export interface WorkerVersionBindingsOutbound {
    /**
    * Pass information from the Dispatch Worker to the Outbound Worker through the parameters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#params WorkerVersion#params}
    */
    readonly params?: WorkerVersionBindingsOutboundParams[] | cdktf.IResolvable;
    /**
    * Outbound worker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#worker WorkerVersion#worker}
    */
    readonly worker?: WorkerVersionBindingsOutboundWorker;
}
export declare function workerVersionBindingsOutboundToTerraform(struct?: WorkerVersionBindingsOutbound | cdktf.IResolvable): any;
export declare function workerVersionBindingsOutboundToHclTerraform(struct?: WorkerVersionBindingsOutbound | cdktf.IResolvable): any;
export declare class WorkerVersionBindingsOutboundOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): WorkerVersionBindingsOutbound | cdktf.IResolvable | undefined;
    set internalValue(value: WorkerVersionBindingsOutbound | cdktf.IResolvable | undefined);
    private _params;
    get params(): WorkerVersionBindingsOutboundParamsList;
    putParams(value: WorkerVersionBindingsOutboundParams[] | cdktf.IResolvable): void;
    resetParams(): void;
    get paramsInput(): any;
    private _worker;
    get worker(): WorkerVersionBindingsOutboundWorkerOutputReference;
    putWorker(value: WorkerVersionBindingsOutboundWorker): void;
    resetWorker(): void;
    get workerInput(): any;
}
export interface WorkerVersionBindingsSimple {
    /**
    * The limit (requests per period).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#limit WorkerVersion#limit}
    */
    readonly limit: number;
    /**
    * The period in seconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#period WorkerVersion#period}
    */
    readonly period: number;
}
export declare function workerVersionBindingsSimpleToTerraform(struct?: WorkerVersionBindingsSimple | cdktf.IResolvable): any;
export declare function workerVersionBindingsSimpleToHclTerraform(struct?: WorkerVersionBindingsSimple | cdktf.IResolvable): any;
export declare class WorkerVersionBindingsSimpleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): WorkerVersionBindingsSimple | cdktf.IResolvable | undefined;
    set internalValue(value: WorkerVersionBindingsSimple | cdktf.IResolvable | undefined);
    private _limit?;
    get limit(): number;
    set limit(value: number);
    get limitInput(): number;
    private _period?;
    get period(): number;
    set period(value: number);
    get periodInput(): number;
}
export interface WorkerVersionBindings {
    /**
    * Algorithm-specific key parameters. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#algorithm).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#algorithm WorkerVersion#algorithm}
    */
    readonly algorithm?: string;
    /**
    * List of allowed destination addresses.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#allowed_destination_addresses WorkerVersion#allowed_destination_addresses}
    */
    readonly allowedDestinationAddresses?: string[];
    /**
    * List of allowed sender addresses.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#allowed_sender_addresses WorkerVersion#allowed_sender_addresses}
    */
    readonly allowedSenderAddresses?: string[];
    /**
    * ID of the Flagship app to bind to for feature flag evaluation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#app_id WorkerVersion#app_id}
    */
    readonly appId?: string;
    /**
    * R2 bucket to bind to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#bucket_name WorkerVersion#bucket_name}
    */
    readonly bucketName?: string;
    /**
    * Identifier of the certificate to bind to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#certificate_id WorkerVersion#certificate_id}
    */
    readonly certificateId?: string;
    /**
    * The exported class name of the Durable Object.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#class_name WorkerVersion#class_name}
    */
    readonly className?: string;
    /**
    * Identifier of the D1 database to bind to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#database_id WorkerVersion#database_id}
    */
    readonly databaseId?: string;
    /**
    * The name of the dataset to bind to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#dataset WorkerVersion#dataset}
    */
    readonly dataset?: string;
    /**
    * Destination address for the email.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#destination_address WorkerVersion#destination_address}
    */
    readonly destinationAddress?: string;
    /**
    * The dispatch namespace the Durable Object script belongs to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#dispatch_namespace WorkerVersion#dispatch_namespace}
    */
    readonly dispatchNamespace?: string;
    /**
    * Entrypoint to invoke on the target Worker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#entrypoint WorkerVersion#entrypoint}
    */
    readonly entrypoint?: string;
    /**
    * The environment of the script_name to bind to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#environment WorkerVersion#environment}
    */
    readonly environment?: string;
    /**
    * Data format of the key. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#format).
    * Available values: "raw", "pkcs8", "spki", "jwk".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#format WorkerVersion#format}
    */
    readonly format?: string;
    /**
    * Identifier of the D1 database to bind to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#id WorkerVersion#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Name of the Vectorize index to bind to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#index_name WorkerVersion#index_name}
    */
    readonly indexName?: string;
    /**
    * The user-chosen instance name. Must exist at deploy time. The worker can search, chat, update, and manage items/jobs on this instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#instance_name WorkerVersion#instance_name}
    */
    readonly instanceName?: string;
    /**
    * JSON data to use.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#json WorkerVersion#json}
    */
    readonly json?: string;
    /**
    * The [jurisdiction](https://developers.cloudflare.com/r2/reference/data-location/#jurisdictional-restrictions) of the R2 bucket.
    * Available values: "eu", "fedramp", "fedramp-high".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#jurisdiction WorkerVersion#jurisdiction}
    */
    readonly jurisdiction?: string;
    /**
    * Base64-encoded key data. Required if `format` is "raw", "pkcs8", or "spki".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#key_base64 WorkerVersion#key_base64}
    */
    readonly keyBase64?: string;
    /**
    * Key data in [JSON Web Key](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#json_web_key) format. Required if `format` is "jwk".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#key_jwk WorkerVersion#key_jwk}
    */
    readonly keyJwk?: string;
    /**
    * A JavaScript variable name for the binding.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#name WorkerVersion#name}
    */
    readonly name: string;
    /**
    * The namespace the instance belongs to. Defaults to "default" if omitted. Customers who don't use namespaces can simply omit this field.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#namespace WorkerVersion#namespace}
    */
    readonly namespace?: string;
    /**
    * Namespace identifier tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#namespace_id WorkerVersion#namespace_id}
    */
    readonly namespaceId?: string;
    /**
    * Identifier of the network to bind to. Only "cf1:network" is currently supported. Mutually exclusive with tunnel_id.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#network_id WorkerVersion#network_id}
    */
    readonly networkId?: string;
    /**
    * The old name of the inherited binding. If set, the binding will be renamed from `old_name` to `name` in the new version. If not set, the binding will keep the same name between versions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#old_name WorkerVersion#old_name}
    */
    readonly oldName?: string;
    /**
    * Outbound worker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#outbound WorkerVersion#outbound}
    */
    readonly outbound?: WorkerVersionBindingsOutbound;
    /**
    * The name of the file containing the data content. Only accepted for `service worker syntax` Workers.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#part WorkerVersion#part}
    */
    readonly part?: string;
    /**
    * Name of the Pipeline to bind to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#pipeline WorkerVersion#pipeline}
    */
    readonly pipeline?: string;
    /**
    * Name of the Queue to bind to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#queue_name WorkerVersion#queue_name}
    */
    readonly queueName?: string;
    /**
    * The script where the Durable Object is defined, if it is external to this Worker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#script_name WorkerVersion#script_name}
    */
    readonly scriptName?: string;
    /**
    * Name of the secret in the store.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#secret_name WorkerVersion#secret_name}
    */
    readonly secretName?: string;
    /**
    * Name of Worker to bind to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#service WorkerVersion#service}
    */
    readonly service?: string;
    /**
    * Identifier of the VPC service to bind to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#service_id WorkerVersion#service_id}
    */
    readonly serviceId?: string;
    /**
    * The rate limit configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#simple WorkerVersion#simple}
    */
    readonly simple?: WorkerVersionBindingsSimple;
    /**
    * ID of the store containing the secret.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#store_id WorkerVersion#store_id}
    */
    readonly storeId?: string;
    /**
    * The text value to use.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#text WorkerVersion#text}
    */
    readonly text?: string;
    /**
    * UUID of the Cloudflare Tunnel to bind to. Mutually exclusive with network_id.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#tunnel_id WorkerVersion#tunnel_id}
    */
    readonly tunnelId?: string;
    /**
    * The kind of resource that the binding provides.
    * Available values: "ai", "ai_search", "ai_search_namespace", "analytics_engine", "assets", "browser", "d1", "data_blob", "dispatch_namespace", "durable_object_namespace", "hyperdrive", "inherit", "images", "json", "kv_namespace", "media", "mtls_certificate", "plain_text", "pipelines", "queue", "ratelimit", "r2_bucket", "secret_text", "send_email", "service", "text_blob", "vectorize", "version_metadata", "secrets_store_secret", "flagship", "secret_key", "workflow", "wasm_module", "vpc_service", "vpc_network".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#type WorkerVersion#type}
    */
    readonly type: string;
    /**
    * Allowed operations with the key. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#keyUsages).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#usages WorkerVersion#usages}
    */
    readonly usages?: string[];
    /**
    * Identifier for the version to inherit the binding from, which can be the version ID or the literal "latest" to inherit from the latest version. Defaults to inheriting the binding from the latest version.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#version_id WorkerVersion#version_id}
    */
    readonly versionId?: string;
    /**
    * Name of the Workflow to bind to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#workflow_name WorkerVersion#workflow_name}
    */
    readonly workflowName?: string;
}
export declare function workerVersionBindingsToTerraform(struct?: WorkerVersionBindings | cdktf.IResolvable): any;
export declare function workerVersionBindingsToHclTerraform(struct?: WorkerVersionBindings | cdktf.IResolvable): any;
export declare class WorkerVersionBindingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): WorkerVersionBindings | cdktf.IResolvable | undefined;
    set internalValue(value: WorkerVersionBindings | cdktf.IResolvable | undefined);
    private _algorithm?;
    get algorithm(): string;
    set algorithm(value: string);
    resetAlgorithm(): void;
    get algorithmInput(): string;
    private _allowedDestinationAddresses?;
    get allowedDestinationAddresses(): string[];
    set allowedDestinationAddresses(value: string[]);
    resetAllowedDestinationAddresses(): void;
    get allowedDestinationAddressesInput(): string[];
    private _allowedSenderAddresses?;
    get allowedSenderAddresses(): string[];
    set allowedSenderAddresses(value: string[]);
    resetAllowedSenderAddresses(): void;
    get allowedSenderAddressesInput(): string[];
    private _appId?;
    get appId(): string;
    set appId(value: string);
    resetAppId(): void;
    get appIdInput(): string;
    private _bucketName?;
    get bucketName(): string;
    set bucketName(value: string);
    resetBucketName(): void;
    get bucketNameInput(): string;
    private _certificateId?;
    get certificateId(): string;
    set certificateId(value: string);
    resetCertificateId(): void;
    get certificateIdInput(): string;
    private _className?;
    get className(): string;
    set className(value: string);
    resetClassName(): void;
    get classNameInput(): string;
    private _databaseId?;
    get databaseId(): string;
    set databaseId(value: string);
    resetDatabaseId(): void;
    get databaseIdInput(): string;
    private _dataset?;
    get dataset(): string;
    set dataset(value: string);
    resetDataset(): void;
    get datasetInput(): string;
    private _destinationAddress?;
    get destinationAddress(): string;
    set destinationAddress(value: string);
    resetDestinationAddress(): void;
    get destinationAddressInput(): string;
    private _dispatchNamespace?;
    get dispatchNamespace(): string;
    set dispatchNamespace(value: string);
    resetDispatchNamespace(): void;
    get dispatchNamespaceInput(): string;
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
    private _format?;
    get format(): string;
    set format(value: string);
    resetFormat(): void;
    get formatInput(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _indexName?;
    get indexName(): string;
    set indexName(value: string);
    resetIndexName(): void;
    get indexNameInput(): string;
    private _instanceName?;
    get instanceName(): string;
    set instanceName(value: string);
    resetInstanceName(): void;
    get instanceNameInput(): string;
    private _json?;
    get json(): string;
    set json(value: string);
    resetJson(): void;
    get jsonInput(): string;
    private _jurisdiction?;
    get jurisdiction(): string;
    set jurisdiction(value: string);
    resetJurisdiction(): void;
    get jurisdictionInput(): string;
    private _keyBase64?;
    get keyBase64(): string;
    set keyBase64(value: string);
    resetKeyBase64(): void;
    get keyBase64Input(): string;
    private _keyJwk?;
    get keyJwk(): string;
    set keyJwk(value: string);
    resetKeyJwk(): void;
    get keyJwkInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _namespace?;
    get namespace(): string;
    set namespace(value: string);
    resetNamespace(): void;
    get namespaceInput(): string;
    private _namespaceId?;
    get namespaceId(): string;
    set namespaceId(value: string);
    resetNamespaceId(): void;
    get namespaceIdInput(): string;
    private _networkId?;
    get networkId(): string;
    set networkId(value: string);
    resetNetworkId(): void;
    get networkIdInput(): string;
    private _oldName?;
    get oldName(): string;
    set oldName(value: string);
    resetOldName(): void;
    get oldNameInput(): string;
    private _outbound;
    get outbound(): WorkerVersionBindingsOutboundOutputReference;
    putOutbound(value: WorkerVersionBindingsOutbound): void;
    resetOutbound(): void;
    get outboundInput(): any;
    private _part?;
    get part(): string;
    set part(value: string);
    resetPart(): void;
    get partInput(): string;
    private _pipeline?;
    get pipeline(): string;
    set pipeline(value: string);
    resetPipeline(): void;
    get pipelineInput(): string;
    private _queueName?;
    get queueName(): string;
    set queueName(value: string);
    resetQueueName(): void;
    get queueNameInput(): string;
    private _scriptName?;
    get scriptName(): string;
    set scriptName(value: string);
    resetScriptName(): void;
    get scriptNameInput(): string;
    private _secretName?;
    get secretName(): string;
    set secretName(value: string);
    resetSecretName(): void;
    get secretNameInput(): string;
    private _service?;
    get service(): string;
    set service(value: string);
    resetService(): void;
    get serviceInput(): string;
    private _serviceId?;
    get serviceId(): string;
    set serviceId(value: string);
    resetServiceId(): void;
    get serviceIdInput(): string;
    private _simple;
    get simple(): WorkerVersionBindingsSimpleOutputReference;
    putSimple(value: WorkerVersionBindingsSimple): void;
    resetSimple(): void;
    get simpleInput(): any;
    private _storeId?;
    get storeId(): string;
    set storeId(value: string);
    resetStoreId(): void;
    get storeIdInput(): string;
    private _text?;
    get text(): string;
    set text(value: string);
    resetText(): void;
    get textInput(): string;
    private _tunnelId?;
    get tunnelId(): string;
    set tunnelId(value: string);
    resetTunnelId(): void;
    get tunnelIdInput(): string;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    private _usages?;
    get usages(): string[];
    set usages(value: string[]);
    resetUsages(): void;
    get usagesInput(): string[];
    private _versionId?;
    get versionId(): string;
    set versionId(value: string);
    resetVersionId(): void;
    get versionIdInput(): string;
    private _workflowName?;
    get workflowName(): string;
    set workflowName(value: string);
    resetWorkflowName(): void;
    get workflowNameInput(): string;
}
export declare class WorkerVersionBindingsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: WorkerVersionBindings[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): WorkerVersionBindingsOutputReference;
}
export interface WorkerVersionContainers {
    /**
    * Select which Durable Object class should get this container attached.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#class_name WorkerVersion#class_name}
    */
    readonly className: string;
}
export declare function workerVersionContainersToTerraform(struct?: WorkerVersionContainers | cdktf.IResolvable): any;
export declare function workerVersionContainersToHclTerraform(struct?: WorkerVersionContainers | cdktf.IResolvable): any;
export declare class WorkerVersionContainersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): WorkerVersionContainers | cdktf.IResolvable | undefined;
    set internalValue(value: WorkerVersionContainers | cdktf.IResolvable | undefined);
    private _className?;
    get className(): string;
    set className(value: string);
    get classNameInput(): string;
}
export declare class WorkerVersionContainersList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: WorkerVersionContainers[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): WorkerVersionContainersOutputReference;
}
export interface WorkerVersionLimits {
    /**
    * CPU time limit in milliseconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#cpu_ms WorkerVersion#cpu_ms}
    */
    readonly cpuMs?: number;
    /**
    * Subrequest limit per request.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#subrequests WorkerVersion#subrequests}
    */
    readonly subrequests?: number;
}
export declare function workerVersionLimitsToTerraform(struct?: WorkerVersionLimits | cdktf.IResolvable): any;
export declare function workerVersionLimitsToHclTerraform(struct?: WorkerVersionLimits | cdktf.IResolvable): any;
export declare class WorkerVersionLimitsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): WorkerVersionLimits | cdktf.IResolvable | undefined;
    set internalValue(value: WorkerVersionLimits | cdktf.IResolvable | undefined);
    private _cpuMs?;
    get cpuMs(): number;
    set cpuMs(value: number);
    resetCpuMs(): void;
    get cpuMsInput(): number;
    private _subrequests?;
    get subrequests(): number;
    set subrequests(value: number);
    resetSubrequests(): void;
    get subrequestsInput(): number;
}
export interface WorkerVersionMigrationsRenamedClasses {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#from WorkerVersion#from}
    */
    readonly from?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#to WorkerVersion#to}
    */
    readonly to?: string;
}
export declare function workerVersionMigrationsRenamedClassesToTerraform(struct?: WorkerVersionMigrationsRenamedClasses | cdktf.IResolvable): any;
export declare function workerVersionMigrationsRenamedClassesToHclTerraform(struct?: WorkerVersionMigrationsRenamedClasses | cdktf.IResolvable): any;
export declare class WorkerVersionMigrationsRenamedClassesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): WorkerVersionMigrationsRenamedClasses | cdktf.IResolvable | undefined;
    set internalValue(value: WorkerVersionMigrationsRenamedClasses | cdktf.IResolvable | undefined);
    private _from?;
    get from(): string;
    set from(value: string);
    resetFrom(): void;
    get fromInput(): string;
    private _to?;
    get to(): string;
    set to(value: string);
    resetTo(): void;
    get toInput(): string;
}
export declare class WorkerVersionMigrationsRenamedClassesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: WorkerVersionMigrationsRenamedClasses[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): WorkerVersionMigrationsRenamedClassesOutputReference;
}
export interface WorkerVersionMigrationsStepsRenamedClasses {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#from WorkerVersion#from}
    */
    readonly from?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#to WorkerVersion#to}
    */
    readonly to?: string;
}
export declare function workerVersionMigrationsStepsRenamedClassesToTerraform(struct?: WorkerVersionMigrationsStepsRenamedClasses | cdktf.IResolvable): any;
export declare function workerVersionMigrationsStepsRenamedClassesToHclTerraform(struct?: WorkerVersionMigrationsStepsRenamedClasses | cdktf.IResolvable): any;
export declare class WorkerVersionMigrationsStepsRenamedClassesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): WorkerVersionMigrationsStepsRenamedClasses | cdktf.IResolvable | undefined;
    set internalValue(value: WorkerVersionMigrationsStepsRenamedClasses | cdktf.IResolvable | undefined);
    private _from?;
    get from(): string;
    set from(value: string);
    resetFrom(): void;
    get fromInput(): string;
    private _to?;
    get to(): string;
    set to(value: string);
    resetTo(): void;
    get toInput(): string;
}
export declare class WorkerVersionMigrationsStepsRenamedClassesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: WorkerVersionMigrationsStepsRenamedClasses[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): WorkerVersionMigrationsStepsRenamedClassesOutputReference;
}
export interface WorkerVersionMigrationsStepsTransferredClasses {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#from WorkerVersion#from}
    */
    readonly from?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#from_script WorkerVersion#from_script}
    */
    readonly fromScript?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#to WorkerVersion#to}
    */
    readonly to?: string;
}
export declare function workerVersionMigrationsStepsTransferredClassesToTerraform(struct?: WorkerVersionMigrationsStepsTransferredClasses | cdktf.IResolvable): any;
export declare function workerVersionMigrationsStepsTransferredClassesToHclTerraform(struct?: WorkerVersionMigrationsStepsTransferredClasses | cdktf.IResolvable): any;
export declare class WorkerVersionMigrationsStepsTransferredClassesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): WorkerVersionMigrationsStepsTransferredClasses | cdktf.IResolvable | undefined;
    set internalValue(value: WorkerVersionMigrationsStepsTransferredClasses | cdktf.IResolvable | undefined);
    private _from?;
    get from(): string;
    set from(value: string);
    resetFrom(): void;
    get fromInput(): string;
    private _fromScript?;
    get fromScript(): string;
    set fromScript(value: string);
    resetFromScript(): void;
    get fromScriptInput(): string;
    private _to?;
    get to(): string;
    set to(value: string);
    resetTo(): void;
    get toInput(): string;
}
export declare class WorkerVersionMigrationsStepsTransferredClassesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: WorkerVersionMigrationsStepsTransferredClasses[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): WorkerVersionMigrationsStepsTransferredClassesOutputReference;
}
export interface WorkerVersionMigrationsSteps {
    /**
    * A list of classes to delete Durable Object namespaces from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#deleted_classes WorkerVersion#deleted_classes}
    */
    readonly deletedClasses?: string[];
    /**
    * A list of classes to create Durable Object namespaces from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#new_classes WorkerVersion#new_classes}
    */
    readonly newClasses?: string[];
    /**
    * A list of classes to create Durable Object namespaces with SQLite from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#new_sqlite_classes WorkerVersion#new_sqlite_classes}
    */
    readonly newSqliteClasses?: string[];
    /**
    * A list of classes with Durable Object namespaces that were renamed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#renamed_classes WorkerVersion#renamed_classes}
    */
    readonly renamedClasses?: WorkerVersionMigrationsStepsRenamedClasses[] | cdktf.IResolvable;
    /**
    * A list of transfers for Durable Object namespaces from a different Worker and class to a class defined in this Worker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#transferred_classes WorkerVersion#transferred_classes}
    */
    readonly transferredClasses?: WorkerVersionMigrationsStepsTransferredClasses[] | cdktf.IResolvable;
}
export declare function workerVersionMigrationsStepsToTerraform(struct?: WorkerVersionMigrationsSteps | cdktf.IResolvable): any;
export declare function workerVersionMigrationsStepsToHclTerraform(struct?: WorkerVersionMigrationsSteps | cdktf.IResolvable): any;
export declare class WorkerVersionMigrationsStepsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): WorkerVersionMigrationsSteps | cdktf.IResolvable | undefined;
    set internalValue(value: WorkerVersionMigrationsSteps | cdktf.IResolvable | undefined);
    private _deletedClasses?;
    get deletedClasses(): string[];
    set deletedClasses(value: string[]);
    resetDeletedClasses(): void;
    get deletedClassesInput(): string[];
    private _newClasses?;
    get newClasses(): string[];
    set newClasses(value: string[]);
    resetNewClasses(): void;
    get newClassesInput(): string[];
    private _newSqliteClasses?;
    get newSqliteClasses(): string[];
    set newSqliteClasses(value: string[]);
    resetNewSqliteClasses(): void;
    get newSqliteClassesInput(): string[];
    private _renamedClasses;
    get renamedClasses(): WorkerVersionMigrationsStepsRenamedClassesList;
    putRenamedClasses(value: WorkerVersionMigrationsStepsRenamedClasses[] | cdktf.IResolvable): void;
    resetRenamedClasses(): void;
    get renamedClassesInput(): any;
    private _transferredClasses;
    get transferredClasses(): WorkerVersionMigrationsStepsTransferredClassesList;
    putTransferredClasses(value: WorkerVersionMigrationsStepsTransferredClasses[] | cdktf.IResolvable): void;
    resetTransferredClasses(): void;
    get transferredClassesInput(): any;
}
export declare class WorkerVersionMigrationsStepsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: WorkerVersionMigrationsSteps[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): WorkerVersionMigrationsStepsOutputReference;
}
export interface WorkerVersionMigrationsTransferredClasses {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#from WorkerVersion#from}
    */
    readonly from?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#from_script WorkerVersion#from_script}
    */
    readonly fromScript?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#to WorkerVersion#to}
    */
    readonly to?: string;
}
export declare function workerVersionMigrationsTransferredClassesToTerraform(struct?: WorkerVersionMigrationsTransferredClasses | cdktf.IResolvable): any;
export declare function workerVersionMigrationsTransferredClassesToHclTerraform(struct?: WorkerVersionMigrationsTransferredClasses | cdktf.IResolvable): any;
export declare class WorkerVersionMigrationsTransferredClassesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): WorkerVersionMigrationsTransferredClasses | cdktf.IResolvable | undefined;
    set internalValue(value: WorkerVersionMigrationsTransferredClasses | cdktf.IResolvable | undefined);
    private _from?;
    get from(): string;
    set from(value: string);
    resetFrom(): void;
    get fromInput(): string;
    private _fromScript?;
    get fromScript(): string;
    set fromScript(value: string);
    resetFromScript(): void;
    get fromScriptInput(): string;
    private _to?;
    get to(): string;
    set to(value: string);
    resetTo(): void;
    get toInput(): string;
}
export declare class WorkerVersionMigrationsTransferredClassesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: WorkerVersionMigrationsTransferredClasses[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): WorkerVersionMigrationsTransferredClassesOutputReference;
}
export interface WorkerVersionMigrations {
    /**
    * A list of classes to delete Durable Object namespaces from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#deleted_classes WorkerVersion#deleted_classes}
    */
    readonly deletedClasses?: string[];
    /**
    * A list of classes to create Durable Object namespaces from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#new_classes WorkerVersion#new_classes}
    */
    readonly newClasses?: string[];
    /**
    * A list of classes to create Durable Object namespaces with SQLite from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#new_sqlite_classes WorkerVersion#new_sqlite_classes}
    */
    readonly newSqliteClasses?: string[];
    /**
    * Tag to set as the latest migration tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#new_tag WorkerVersion#new_tag}
    */
    readonly newTag?: string;
    /**
    * Tag used to verify against the latest migration tag for this Worker. If they don't match, the upload is rejected.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#old_tag WorkerVersion#old_tag}
    */
    readonly oldTag?: string;
    /**
    * A list of classes with Durable Object namespaces that were renamed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#renamed_classes WorkerVersion#renamed_classes}
    */
    readonly renamedClasses?: WorkerVersionMigrationsRenamedClasses[] | cdktf.IResolvable;
    /**
    * Migrations to apply in order.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#steps WorkerVersion#steps}
    */
    readonly steps?: WorkerVersionMigrationsSteps[] | cdktf.IResolvable;
    /**
    * A list of transfers for Durable Object namespaces from a different Worker and class to a class defined in this Worker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#transferred_classes WorkerVersion#transferred_classes}
    */
    readonly transferredClasses?: WorkerVersionMigrationsTransferredClasses[] | cdktf.IResolvable;
}
export declare function workerVersionMigrationsToTerraform(struct?: WorkerVersionMigrations | cdktf.IResolvable): any;
export declare function workerVersionMigrationsToHclTerraform(struct?: WorkerVersionMigrations | cdktf.IResolvable): any;
export declare class WorkerVersionMigrationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): WorkerVersionMigrations | cdktf.IResolvable | undefined;
    set internalValue(value: WorkerVersionMigrations | cdktf.IResolvable | undefined);
    private _deletedClasses?;
    get deletedClasses(): string[];
    set deletedClasses(value: string[]);
    resetDeletedClasses(): void;
    get deletedClassesInput(): string[];
    private _newClasses?;
    get newClasses(): string[];
    set newClasses(value: string[]);
    resetNewClasses(): void;
    get newClassesInput(): string[];
    private _newSqliteClasses?;
    get newSqliteClasses(): string[];
    set newSqliteClasses(value: string[]);
    resetNewSqliteClasses(): void;
    get newSqliteClassesInput(): string[];
    private _newTag?;
    get newTag(): string;
    set newTag(value: string);
    resetNewTag(): void;
    get newTagInput(): string;
    private _oldTag?;
    get oldTag(): string;
    set oldTag(value: string);
    resetOldTag(): void;
    get oldTagInput(): string;
    private _renamedClasses;
    get renamedClasses(): WorkerVersionMigrationsRenamedClassesList;
    putRenamedClasses(value: WorkerVersionMigrationsRenamedClasses[] | cdktf.IResolvable): void;
    resetRenamedClasses(): void;
    get renamedClassesInput(): any;
    private _steps;
    get steps(): WorkerVersionMigrationsStepsList;
    putSteps(value: WorkerVersionMigrationsSteps[] | cdktf.IResolvable): void;
    resetSteps(): void;
    get stepsInput(): any;
    private _transferredClasses;
    get transferredClasses(): WorkerVersionMigrationsTransferredClassesList;
    putTransferredClasses(value: WorkerVersionMigrationsTransferredClasses[] | cdktf.IResolvable): void;
    resetTransferredClasses(): void;
    get transferredClassesInput(): any;
}
export interface WorkerVersionModules {
    /**
    * The base64-encoded module content.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#content_base64 WorkerVersion#content_base64}
    */
    readonly contentBase64?: string;
    /**
    * The file path of the module content.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#content_file WorkerVersion#content_file}
    */
    readonly contentFile?: string;
    /**
    * The content type of the module.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#content_type WorkerVersion#content_type}
    */
    readonly contentType: string;
    /**
    * The name of the module.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#name WorkerVersion#name}
    */
    readonly name: string;
}
export declare function workerVersionModulesToTerraform(struct?: WorkerVersionModules | cdktf.IResolvable): any;
export declare function workerVersionModulesToHclTerraform(struct?: WorkerVersionModules | cdktf.IResolvable): any;
export declare class WorkerVersionModulesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): WorkerVersionModules | cdktf.IResolvable | undefined;
    set internalValue(value: WorkerVersionModules | cdktf.IResolvable | undefined);
    private _contentBase64?;
    get contentBase64(): string;
    set contentBase64(value: string);
    resetContentBase64(): void;
    get contentBase64Input(): string;
    private _contentFile?;
    get contentFile(): string;
    set contentFile(value: string);
    resetContentFile(): void;
    get contentFileInput(): string;
    get contentSha256(): any;
    private _contentType?;
    get contentType(): string;
    set contentType(value: string);
    get contentTypeInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export declare class WorkerVersionModulesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: WorkerVersionModules[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): WorkerVersionModulesOutputReference;
}
export interface WorkerVersionPlacementTarget {
    /**
    * TCP host:port for targeted placement.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#host WorkerVersion#host}
    */
    readonly host?: string;
    /**
    * HTTP hostname for targeted placement.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#hostname WorkerVersion#hostname}
    */
    readonly hostname?: string;
    /**
    * Cloud region in format 'provider:region'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#region WorkerVersion#region}
    */
    readonly region?: string;
}
export declare function workerVersionPlacementTargetToTerraform(struct?: WorkerVersionPlacementTarget | cdktf.IResolvable): any;
export declare function workerVersionPlacementTargetToHclTerraform(struct?: WorkerVersionPlacementTarget | cdktf.IResolvable): any;
export declare class WorkerVersionPlacementTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): WorkerVersionPlacementTarget | cdktf.IResolvable | undefined;
    set internalValue(value: WorkerVersionPlacementTarget | cdktf.IResolvable | undefined);
    private _host?;
    get host(): string;
    set host(value: string);
    resetHost(): void;
    get hostInput(): string;
    private _hostname?;
    get hostname(): string;
    set hostname(value: string);
    resetHostname(): void;
    get hostnameInput(): string;
    private _region?;
    get region(): string;
    set region(value: string);
    resetRegion(): void;
    get regionInput(): string;
}
export declare class WorkerVersionPlacementTargetList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: WorkerVersionPlacementTarget[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): WorkerVersionPlacementTargetOutputReference;
}
export interface WorkerVersionPlacement {
    /**
    * TCP host and port for targeted placement.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#host WorkerVersion#host}
    */
    readonly host?: string;
    /**
    * HTTP hostname for targeted placement.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#hostname WorkerVersion#hostname}
    */
    readonly hostname?: string;
    /**
    * Enables [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement).
    * Available values: "smart", "targeted".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#mode WorkerVersion#mode}
    */
    readonly mode?: string;
    /**
    * Cloud region for targeted placement in format 'provider:region'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#region WorkerVersion#region}
    */
    readonly region?: string;
    /**
    * Array of placement targets (currently limited to single target).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#target WorkerVersion#target}
    */
    readonly target?: WorkerVersionPlacementTarget[] | cdktf.IResolvable;
}
export declare function workerVersionPlacementToTerraform(struct?: WorkerVersionPlacement | cdktf.IResolvable): any;
export declare function workerVersionPlacementToHclTerraform(struct?: WorkerVersionPlacement | cdktf.IResolvable): any;
export declare class WorkerVersionPlacementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): WorkerVersionPlacement | cdktf.IResolvable | undefined;
    set internalValue(value: WorkerVersionPlacement | cdktf.IResolvable | undefined);
    private _host?;
    get host(): string;
    set host(value: string);
    resetHost(): void;
    get hostInput(): string;
    private _hostname?;
    get hostname(): string;
    set hostname(value: string);
    resetHostname(): void;
    get hostnameInput(): string;
    private _mode?;
    get mode(): string;
    set mode(value: string);
    resetMode(): void;
    get modeInput(): string;
    private _region?;
    get region(): string;
    set region(value: string);
    resetRegion(): void;
    get regionInput(): string;
    private _target;
    get target(): WorkerVersionPlacementTargetList;
    putTarget(value: WorkerVersionPlacementTarget[] | cdktf.IResolvable): void;
    resetTarget(): void;
    get targetInput(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version cloudflare_worker_version}
*/
export declare class WorkerVersion extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_worker_version";
    /**
    * Generates CDKTF code for importing a WorkerVersion resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the WorkerVersion to import
    * @param importFromId The id of the existing WorkerVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the WorkerVersion to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version cloudflare_worker_version} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WorkerVersionConfig
    */
    constructor(scope: Construct, id: string, config: WorkerVersionConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _annotations;
    get annotations(): WorkerVersionAnnotationsOutputReference;
    putAnnotations(value: WorkerVersionAnnotations): void;
    resetAnnotations(): void;
    get annotationsInput(): any;
    private _assets;
    get assets(): WorkerVersionAssetsOutputReference;
    putAssets(value: WorkerVersionAssets): void;
    resetAssets(): void;
    get assetsInput(): any;
    private _bindings;
    get bindings(): WorkerVersionBindingsList;
    putBindings(value: WorkerVersionBindings[] | cdktf.IResolvable): void;
    resetBindings(): void;
    get bindingsInput(): any;
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
    private _containers;
    get containers(): WorkerVersionContainersList;
    putContainers(value: WorkerVersionContainers[] | cdktf.IResolvable): void;
    resetContainers(): void;
    get containersInput(): any;
    get createdOn(): any;
    get id(): any;
    private _limits;
    get limits(): WorkerVersionLimitsOutputReference;
    putLimits(value: WorkerVersionLimits): void;
    resetLimits(): void;
    get limitsInput(): any;
    private _mainModule?;
    get mainModule(): string;
    set mainModule(value: string);
    resetMainModule(): void;
    get mainModuleInput(): string;
    get mainScriptBase64(): any;
    get migrationTag(): any;
    private _migrations;
    get migrations(): WorkerVersionMigrationsOutputReference;
    putMigrations(value: WorkerVersionMigrations): void;
    resetMigrations(): void;
    get migrationsInput(): any;
    private _modules;
    get modules(): WorkerVersionModulesList;
    putModules(value: WorkerVersionModules[] | cdktf.IResolvable): void;
    resetModules(): void;
    get modulesInput(): any;
    get number(): any;
    private _placement;
    get placement(): WorkerVersionPlacementOutputReference;
    putPlacement(value: WorkerVersionPlacement): void;
    resetPlacement(): void;
    get placementInput(): any;
    get source(): any;
    get startupTimeMs(): any;
    get urls(): any;
    private _usageModel?;
    get usageModel(): string;
    set usageModel(value: string);
    resetUsageModel(): void;
    get usageModelInput(): string;
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
