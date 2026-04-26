import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WorkersScriptConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#account_id WorkersScript#account_id}
    */
    readonly accountId?: string;
    /**
    * Annotations for the version created by this upload.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#annotations WorkersScript#annotations}
    */
    readonly annotations?: WorkersScriptAnnotations;
    /**
    * Configuration for assets within a Worker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#assets WorkersScript#assets}
    */
    readonly assets?: WorkersScriptAssets;
    /**
    * List of bindings attached to a Worker. You can find more about bindings on our docs: https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/#bindings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#bindings WorkersScript#bindings}
    */
    readonly bindings?: WorkersScriptBindings[] | cdktf.IResolvable;
    /**
    * Name of the uploaded file that contains the script (e.g. the file adding a listener to the `fetch` event). Indicates a `service worker syntax` Worker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#body_part WorkersScript#body_part}
    */
    readonly bodyPart?: string;
    /**
    * Date indicating targeted support in the Workers runtime. Backwards incompatible fixes to the runtime following this date will not affect this Worker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#compatibility_date WorkersScript#compatibility_date}
    */
    readonly compatibilityDate?: string;
    /**
    * Flags that enable or disable certain features in the Workers runtime. Used to enable upcoming features or opt in or out of specific changes not included in a `compatibility_date`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#compatibility_flags WorkersScript#compatibility_flags}
    */
    readonly compatibilityFlags?: string[];
    /**
    * Module or Service Worker contents of the Worker. Conflicts with `content_file`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#content WorkersScript#content}
    */
    readonly content?: string;
    /**
    * Path to a file containing the Module or Service Worker contents of the Worker. Conflicts with `content`. Must be paired with `content_sha256`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#content_file WorkersScript#content_file}
    */
    readonly contentFile?: string;
    /**
    * SHA-256 hash of the Worker contents. Used to trigger updates when source code changes. Must be provided when `content_file` is specified.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#content_sha256 WorkersScript#content_sha256}
    */
    readonly contentSha256?: string;
    /**
    * Content-Type of the Worker. Required if uploading a non-JavaScript Worker (e.g. "text/x-python").
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#content_type WorkersScript#content_type}
    */
    readonly contentType?: string;
    /**
    * Retain assets which exist for a previously uploaded Worker version; used in lieu of providing a completion token.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#keep_assets WorkersScript#keep_assets}
    */
    readonly keepAssets?: boolean | cdktf.IResolvable;
    /**
    * List of binding types to keep from previous_upload.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#keep_bindings WorkersScript#keep_bindings}
    */
    readonly keepBindings?: string[];
    /**
    * Limits to apply for this Worker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#limits WorkersScript#limits}
    */
    readonly limits?: WorkersScriptLimits;
    /**
    * Whether Logpush is turned on for the Worker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#logpush WorkersScript#logpush}
    */
    readonly logpush?: boolean | cdktf.IResolvable;
    /**
    * Name of the uploaded file that contains the main module (e.g. the file exporting a `fetch` handler). Indicates a `module syntax` Worker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#main_module WorkersScript#main_module}
    */
    readonly mainModule?: string;
    /**
    * Migrations to apply for Durable Objects associated with this Worker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#migrations WorkersScript#migrations}
    */
    readonly migrations?: WorkersScriptMigrations;
    /**
    * Observability settings for the Worker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#observability WorkersScript#observability}
    */
    readonly observability?: WorkersScriptObservability;
    /**
    * Configuration for [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). Specify mode='smart' for Smart Placement, or one of region/hostname/host.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#placement WorkersScript#placement}
    */
    readonly placement?: WorkersScriptPlacement;
    /**
    * Name of the script, used in URLs and route configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#script_name WorkersScript#script_name}
    */
    readonly scriptName: string;
    /**
    * List of Workers that will consume logs from the attached Worker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#tail_consumers WorkersScript#tail_consumers}
    */
    readonly tailConsumers?: WorkersScriptTailConsumers[] | cdktf.IResolvable;
    /**
    * Usage model for the Worker invocations.
    * Available values: "standard", "bundled", "unbound".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#usage_model WorkersScript#usage_model}
    */
    readonly usageModel?: string;
}
export interface WorkersScriptAnnotations {
    /**
    * Human-readable message about the version. Truncated to 1000 bytes if longer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#workers_message WorkersScript#workers_message}
    */
    readonly workersMessage?: string;
    /**
    * User-provided identifier for the version. Maximum 100 bytes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#workers_tag WorkersScript#workers_tag}
    */
    readonly workersTag?: string;
}
export declare function workersScriptAnnotationsToTerraform(struct?: WorkersScriptAnnotations | cdktf.IResolvable): any;
export declare function workersScriptAnnotationsToHclTerraform(struct?: WorkersScriptAnnotations | cdktf.IResolvable): any;
export declare class WorkersScriptAnnotationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): WorkersScriptAnnotations | cdktf.IResolvable | undefined;
    set internalValue(value: WorkersScriptAnnotations | cdktf.IResolvable | undefined);
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
export interface WorkersScriptAssetsConfig {
    /**
    * The contents of a _headers file (used to attach custom headers on asset responses).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#headers WorkersScript#headers}
    */
    readonly headers?: string;
    /**
    * Determines the redirects and rewrites of requests for HTML content.
    * Available values: "auto-trailing-slash", "force-trailing-slash", "drop-trailing-slash", "none".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#html_handling WorkersScript#html_handling}
    */
    readonly htmlHandling?: string;
    /**
    * Determines the response when a request does not match a static asset, and there is no Worker script.
    * Available values: "none", "404-page", "single-page-application".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#not_found_handling WorkersScript#not_found_handling}
    */
    readonly notFoundHandling?: string;
    /**
    * The contents of a _redirects file (used to apply redirects or proxy paths ahead of asset serving).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#redirects WorkersScript#redirects}
    */
    readonly redirects?: string;
    /**
    * When a boolean true, requests will always invoke the Worker script. Otherwise, attempt to serve an asset matching the request, falling back to the Worker script. When a list of strings, contains path rules to control routing to either the Worker or assets. Glob (*) and negative (!) rules are supported. Rules must start with either '/' or '!/'. At least one non-negative rule must be provided, and negative rules have higher precedence than non-negative rules.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#run_worker_first WorkersScript#run_worker_first}
    */
    readonly runWorkerFirst?: {
        [key: string]: any;
    };
    /**
    * When true and the incoming request matches an asset, that will be served instead of invoking the Worker script. When false, requests will always invoke the Worker script.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#serve_directly WorkersScript#serve_directly}
    */
    readonly serveDirectly?: boolean | cdktf.IResolvable;
}
export declare function workersScriptAssetsConfigToTerraform(struct?: WorkersScriptAssetsConfig | cdktf.IResolvable): any;
export declare function workersScriptAssetsConfigToHclTerraform(struct?: WorkersScriptAssetsConfig | cdktf.IResolvable): any;
export declare class WorkersScriptAssetsConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): WorkersScriptAssetsConfig | cdktf.IResolvable | undefined;
    set internalValue(value: WorkersScriptAssetsConfig | cdktf.IResolvable | undefined);
    private _headers?;
    get headers(): string;
    set headers(value: string);
    resetHeaders(): void;
    get headersInput(): string;
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
    private _redirects?;
    get redirects(): string;
    set redirects(value: string);
    resetRedirects(): void;
    get redirectsInput(): string;
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
    private _serveDirectly?;
    get serveDirectly(): boolean | cdktf.IResolvable;
    set serveDirectly(value: boolean | cdktf.IResolvable);
    resetServeDirectly(): void;
    get serveDirectlyInput(): any;
}
export interface WorkersScriptAssets {
    /**
    * Configuration for assets within a Worker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#config WorkersScript#config}
    */
    readonly config?: WorkersScriptAssetsConfig;
    /**
    * Path to the directory containing asset files to upload.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#directory WorkersScript#directory}
    */
    readonly directory?: string;
    /**
    * Token provided upon successful upload of all files from a registered manifest.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#jwt WorkersScript#jwt}
    */
    readonly jwt?: string;
}
export declare function workersScriptAssetsToTerraform(struct?: WorkersScriptAssets | cdktf.IResolvable): any;
export declare function workersScriptAssetsToHclTerraform(struct?: WorkersScriptAssets | cdktf.IResolvable): any;
export declare class WorkersScriptAssetsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): WorkersScriptAssets | cdktf.IResolvable | undefined;
    set internalValue(value: WorkersScriptAssets | cdktf.IResolvable | undefined);
    get assetManifestSha256(): any;
    private _config;
    get config(): WorkersScriptAssetsConfigOutputReference;
    putConfig(value: WorkersScriptAssetsConfig): void;
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
export interface WorkersScriptBindingsOutboundWorker {
    /**
    * Environment of the outbound worker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#environment WorkersScript#environment}
    */
    readonly environment?: string;
    /**
    * Name of the outbound worker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#service WorkersScript#service}
    */
    readonly service?: string;
}
export declare function workersScriptBindingsOutboundWorkerToTerraform(struct?: WorkersScriptBindingsOutboundWorker | cdktf.IResolvable): any;
export declare function workersScriptBindingsOutboundWorkerToHclTerraform(struct?: WorkersScriptBindingsOutboundWorker | cdktf.IResolvable): any;
export declare class WorkersScriptBindingsOutboundWorkerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): WorkersScriptBindingsOutboundWorker | cdktf.IResolvable | undefined;
    set internalValue(value: WorkersScriptBindingsOutboundWorker | cdktf.IResolvable | undefined);
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
export interface WorkersScriptBindingsOutbound {
    /**
    * Pass information from the Dispatch Worker to the Outbound Worker through the parameters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#params WorkersScript#params}
    */
    readonly params?: string[];
    /**
    * Outbound worker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#worker WorkersScript#worker}
    */
    readonly worker?: WorkersScriptBindingsOutboundWorker;
}
export declare function workersScriptBindingsOutboundToTerraform(struct?: WorkersScriptBindingsOutbound | cdktf.IResolvable): any;
export declare function workersScriptBindingsOutboundToHclTerraform(struct?: WorkersScriptBindingsOutbound | cdktf.IResolvable): any;
export declare class WorkersScriptBindingsOutboundOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): WorkersScriptBindingsOutbound | cdktf.IResolvable | undefined;
    set internalValue(value: WorkersScriptBindingsOutbound | cdktf.IResolvable | undefined);
    private _params?;
    get params(): string[];
    set params(value: string[]);
    resetParams(): void;
    get paramsInput(): string[];
    private _worker;
    get worker(): WorkersScriptBindingsOutboundWorkerOutputReference;
    putWorker(value: WorkersScriptBindingsOutboundWorker): void;
    resetWorker(): void;
    get workerInput(): any;
}
export interface WorkersScriptBindingsSimple {
    /**
    * The rate limit value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#limit WorkersScript#limit}
    */
    readonly limit: number;
    /**
    * The rate limit period in seconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#period WorkersScript#period}
    */
    readonly period: number;
}
export declare function workersScriptBindingsSimpleToTerraform(struct?: WorkersScriptBindingsSimple | cdktf.IResolvable): any;
export declare function workersScriptBindingsSimpleToHclTerraform(struct?: WorkersScriptBindingsSimple | cdktf.IResolvable): any;
export declare class WorkersScriptBindingsSimpleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): WorkersScriptBindingsSimple | cdktf.IResolvable | undefined;
    set internalValue(value: WorkersScriptBindingsSimple | cdktf.IResolvable | undefined);
    private _limit?;
    get limit(): number;
    set limit(value: number);
    get limitInput(): number;
    private _period?;
    get period(): number;
    set period(value: number);
    get periodInput(): number;
}
export interface WorkersScriptBindings {
    /**
    * Algorithm-specific key parameters. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#algorithm).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#algorithm WorkersScript#algorithm}
    */
    readonly algorithm?: string;
    /**
    * List of allowed destination addresses.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#allowed_destination_addresses WorkersScript#allowed_destination_addresses}
    */
    readonly allowedDestinationAddresses?: string[];
    /**
    * List of allowed sender addresses.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#allowed_sender_addresses WorkersScript#allowed_sender_addresses}
    */
    readonly allowedSenderAddresses?: string[];
    /**
    * ID of the Flagship app to bind to for feature flag evaluation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#app_id WorkersScript#app_id}
    */
    readonly appId?: string;
    /**
    * R2 bucket to bind to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#bucket_name WorkersScript#bucket_name}
    */
    readonly bucketName?: string;
    /**
    * Identifier of the certificate to bind to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#certificate_id WorkersScript#certificate_id}
    */
    readonly certificateId?: string;
    /**
    * The exported class name of the Durable Object.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#class_name WorkersScript#class_name}
    */
    readonly className?: string;
    /**
    * Identifier of the D1 database to bind to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#database_id WorkersScript#database_id}
    */
    readonly databaseId?: string;
    /**
    * The name of the dataset to bind to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#dataset WorkersScript#dataset}
    */
    readonly dataset?: string;
    /**
    * Destination address for the email.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#destination_address WorkersScript#destination_address}
    */
    readonly destinationAddress?: string;
    /**
    * The dispatch namespace the Durable Object script belongs to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#dispatch_namespace WorkersScript#dispatch_namespace}
    */
    readonly dispatchNamespace?: string;
    /**
    * Entrypoint to invoke on the target Worker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#entrypoint WorkersScript#entrypoint}
    */
    readonly entrypoint?: string;
    /**
    * The environment of the script_name to bind to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#environment WorkersScript#environment}
    */
    readonly environment?: string;
    /**
    * Data format of the key. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#format).
    * Available values: "raw", "pkcs8", "spki", "jwk".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#format WorkersScript#format}
    */
    readonly format?: string;
    /**
    * Identifier of the D1 database to bind to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#id WorkersScript#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Name of the Vectorize index to bind to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#index_name WorkersScript#index_name}
    */
    readonly indexName?: string;
    /**
    * The user-chosen instance name. Must exist at deploy time. The worker can search, chat, update, and manage items/jobs on this instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#instance_name WorkersScript#instance_name}
    */
    readonly instanceName?: string;
    /**
    * JSON data to use.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#json WorkersScript#json}
    */
    readonly json?: string;
    /**
    * The [jurisdiction](https://developers.cloudflare.com/r2/reference/data-location/#jurisdictional-restrictions) of the R2 bucket.
    * Available values: "eu", "fedramp", "fedramp-high".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#jurisdiction WorkersScript#jurisdiction}
    */
    readonly jurisdiction?: string;
    /**
    * Base64-encoded key data. Required if `format` is "raw", "pkcs8", or "spki".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#key_base64 WorkersScript#key_base64}
    */
    readonly keyBase64?: string;
    /**
    * Key data in [JSON Web Key](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#json_web_key) format. Required if `format` is "jwk".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#key_jwk WorkersScript#key_jwk}
    */
    readonly keyJwk?: string;
    /**
    * A JavaScript variable name for the binding.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#name WorkersScript#name}
    */
    readonly name: string;
    /**
    * The namespace the instance belongs to. Defaults to "default" if omitted. Customers who don't use namespaces can simply omit this field.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#namespace WorkersScript#namespace}
    */
    readonly namespace?: string;
    /**
    * Namespace identifier tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#namespace_id WorkersScript#namespace_id}
    */
    readonly namespaceId?: string;
    /**
    * Identifier of the network to bind to. Only "cf1:network" is currently supported. Mutually exclusive with tunnel_id.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#network_id WorkersScript#network_id}
    */
    readonly networkId?: string;
    /**
    * The old name of the inherited binding. If set, the binding will be renamed from `old_name` to `name` in the new version. If not set, the binding will keep the same name between versions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#old_name WorkersScript#old_name}
    */
    readonly oldName?: string;
    /**
    * Outbound worker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#outbound WorkersScript#outbound}
    */
    readonly outbound?: WorkersScriptBindingsOutbound;
    /**
    * The name of the file containing the data content. Only accepted for `service worker syntax` Workers.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#part WorkersScript#part}
    */
    readonly part?: string;
    /**
    * Name of the Pipeline to bind to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#pipeline WorkersScript#pipeline}
    */
    readonly pipeline?: string;
    /**
    * Name of the Queue to bind to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#queue_name WorkersScript#queue_name}
    */
    readonly queueName?: string;
    /**
    * The script where the Durable Object is defined, if it is external to this Worker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#script_name WorkersScript#script_name}
    */
    readonly scriptName?: string;
    /**
    * Name of the secret in the store.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#secret_name WorkersScript#secret_name}
    */
    readonly secretName?: string;
    /**
    * Name of Worker to bind to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#service WorkersScript#service}
    */
    readonly service?: string;
    /**
    * Identifier of the VPC service to bind to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#service_id WorkersScript#service_id}
    */
    readonly serviceId?: string;
    /**
    * A simple rate limit.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#simple WorkersScript#simple}
    */
    readonly simple?: WorkersScriptBindingsSimple;
    /**
    * ID of the store containing the secret.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#store_id WorkersScript#store_id}
    */
    readonly storeId?: string;
    /**
    * The text value to use.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#text WorkersScript#text}
    */
    readonly text?: string;
    /**
    * UUID of the Cloudflare Tunnel to bind to. Mutually exclusive with network_id.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#tunnel_id WorkersScript#tunnel_id}
    */
    readonly tunnelId?: string;
    /**
    * The kind of resource that the binding provides.
    * Available values: "ai", "ai_search", "ai_search_namespace", "analytics_engine", "assets", "browser", "d1", "data_blob", "dispatch_namespace", "durable_object_namespace", "hyperdrive", "inherit", "images", "json", "kv_namespace", "media", "mtls_certificate", "plain_text", "pipelines", "queue", "ratelimit", "r2_bucket", "secret_text", "send_email", "service", "text_blob", "vectorize", "version_metadata", "secrets_store_secret", "secret_key", "workflow", "wasm_module", "vpc_service", "vpc_network".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#type WorkersScript#type}
    */
    readonly type: string;
    /**
    * Allowed operations with the key. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#keyUsages).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#usages WorkersScript#usages}
    */
    readonly usages?: string[];
    /**
    * Identifier for the version to inherit the binding from, which can be the version ID or the literal "latest" to inherit from the latest version. Defaults to inheriting the binding from the latest version.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#version_id WorkersScript#version_id}
    */
    readonly versionId?: string;
    /**
    * Name of the Workflow to bind to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#workflow_name WorkersScript#workflow_name}
    */
    readonly workflowName?: string;
}
export declare function workersScriptBindingsToTerraform(struct?: WorkersScriptBindings | cdktf.IResolvable): any;
export declare function workersScriptBindingsToHclTerraform(struct?: WorkersScriptBindings | cdktf.IResolvable): any;
export declare class WorkersScriptBindingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): WorkersScriptBindings | cdktf.IResolvable | undefined;
    set internalValue(value: WorkersScriptBindings | cdktf.IResolvable | undefined);
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
    get outbound(): WorkersScriptBindingsOutboundOutputReference;
    putOutbound(value: WorkersScriptBindingsOutbound): void;
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
    get simple(): WorkersScriptBindingsSimpleOutputReference;
    putSimple(value: WorkersScriptBindingsSimple): void;
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
export declare class WorkersScriptBindingsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: WorkersScriptBindings[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): WorkersScriptBindingsOutputReference;
}
export interface WorkersScriptLimits {
    /**
    * The amount of CPU time this Worker can use in milliseconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#cpu_ms WorkersScript#cpu_ms}
    */
    readonly cpuMs?: number;
    /**
    * The number of subrequests this Worker can make per request.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#subrequests WorkersScript#subrequests}
    */
    readonly subrequests?: number;
}
export declare function workersScriptLimitsToTerraform(struct?: WorkersScriptLimits | cdktf.IResolvable): any;
export declare function workersScriptLimitsToHclTerraform(struct?: WorkersScriptLimits | cdktf.IResolvable): any;
export declare class WorkersScriptLimitsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): WorkersScriptLimits | cdktf.IResolvable | undefined;
    set internalValue(value: WorkersScriptLimits | cdktf.IResolvable | undefined);
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
export interface WorkersScriptMigrationsRenamedClasses {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#from WorkersScript#from}
    */
    readonly from?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#to WorkersScript#to}
    */
    readonly to?: string;
}
export declare function workersScriptMigrationsRenamedClassesToTerraform(struct?: WorkersScriptMigrationsRenamedClasses | cdktf.IResolvable): any;
export declare function workersScriptMigrationsRenamedClassesToHclTerraform(struct?: WorkersScriptMigrationsRenamedClasses | cdktf.IResolvable): any;
export declare class WorkersScriptMigrationsRenamedClassesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): WorkersScriptMigrationsRenamedClasses | cdktf.IResolvable | undefined;
    set internalValue(value: WorkersScriptMigrationsRenamedClasses | cdktf.IResolvable | undefined);
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
export declare class WorkersScriptMigrationsRenamedClassesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: WorkersScriptMigrationsRenamedClasses[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): WorkersScriptMigrationsRenamedClassesOutputReference;
}
export interface WorkersScriptMigrationsStepsRenamedClasses {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#from WorkersScript#from}
    */
    readonly from?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#to WorkersScript#to}
    */
    readonly to?: string;
}
export declare function workersScriptMigrationsStepsRenamedClassesToTerraform(struct?: WorkersScriptMigrationsStepsRenamedClasses | cdktf.IResolvable): any;
export declare function workersScriptMigrationsStepsRenamedClassesToHclTerraform(struct?: WorkersScriptMigrationsStepsRenamedClasses | cdktf.IResolvable): any;
export declare class WorkersScriptMigrationsStepsRenamedClassesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): WorkersScriptMigrationsStepsRenamedClasses | cdktf.IResolvable | undefined;
    set internalValue(value: WorkersScriptMigrationsStepsRenamedClasses | cdktf.IResolvable | undefined);
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
export declare class WorkersScriptMigrationsStepsRenamedClassesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: WorkersScriptMigrationsStepsRenamedClasses[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): WorkersScriptMigrationsStepsRenamedClassesOutputReference;
}
export interface WorkersScriptMigrationsStepsTransferredClasses {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#from WorkersScript#from}
    */
    readonly from?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#from_script WorkersScript#from_script}
    */
    readonly fromScript?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#to WorkersScript#to}
    */
    readonly to?: string;
}
export declare function workersScriptMigrationsStepsTransferredClassesToTerraform(struct?: WorkersScriptMigrationsStepsTransferredClasses | cdktf.IResolvable): any;
export declare function workersScriptMigrationsStepsTransferredClassesToHclTerraform(struct?: WorkersScriptMigrationsStepsTransferredClasses | cdktf.IResolvable): any;
export declare class WorkersScriptMigrationsStepsTransferredClassesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): WorkersScriptMigrationsStepsTransferredClasses | cdktf.IResolvable | undefined;
    set internalValue(value: WorkersScriptMigrationsStepsTransferredClasses | cdktf.IResolvable | undefined);
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
export declare class WorkersScriptMigrationsStepsTransferredClassesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: WorkersScriptMigrationsStepsTransferredClasses[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): WorkersScriptMigrationsStepsTransferredClassesOutputReference;
}
export interface WorkersScriptMigrationsSteps {
    /**
    * A list of classes to delete Durable Object namespaces from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#deleted_classes WorkersScript#deleted_classes}
    */
    readonly deletedClasses?: string[];
    /**
    * A list of classes to create Durable Object namespaces from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#new_classes WorkersScript#new_classes}
    */
    readonly newClasses?: string[];
    /**
    * A list of classes to create Durable Object namespaces with SQLite from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#new_sqlite_classes WorkersScript#new_sqlite_classes}
    */
    readonly newSqliteClasses?: string[];
    /**
    * A list of classes with Durable Object namespaces that were renamed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#renamed_classes WorkersScript#renamed_classes}
    */
    readonly renamedClasses?: WorkersScriptMigrationsStepsRenamedClasses[] | cdktf.IResolvable;
    /**
    * A list of transfers for Durable Object namespaces from a different Worker and class to a class defined in this Worker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#transferred_classes WorkersScript#transferred_classes}
    */
    readonly transferredClasses?: WorkersScriptMigrationsStepsTransferredClasses[] | cdktf.IResolvable;
}
export declare function workersScriptMigrationsStepsToTerraform(struct?: WorkersScriptMigrationsSteps | cdktf.IResolvable): any;
export declare function workersScriptMigrationsStepsToHclTerraform(struct?: WorkersScriptMigrationsSteps | cdktf.IResolvable): any;
export declare class WorkersScriptMigrationsStepsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): WorkersScriptMigrationsSteps | cdktf.IResolvable | undefined;
    set internalValue(value: WorkersScriptMigrationsSteps | cdktf.IResolvable | undefined);
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
    get renamedClasses(): WorkersScriptMigrationsStepsRenamedClassesList;
    putRenamedClasses(value: WorkersScriptMigrationsStepsRenamedClasses[] | cdktf.IResolvable): void;
    resetRenamedClasses(): void;
    get renamedClassesInput(): any;
    private _transferredClasses;
    get transferredClasses(): WorkersScriptMigrationsStepsTransferredClassesList;
    putTransferredClasses(value: WorkersScriptMigrationsStepsTransferredClasses[] | cdktf.IResolvable): void;
    resetTransferredClasses(): void;
    get transferredClassesInput(): any;
}
export declare class WorkersScriptMigrationsStepsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: WorkersScriptMigrationsSteps[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): WorkersScriptMigrationsStepsOutputReference;
}
export interface WorkersScriptMigrationsTransferredClasses {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#from WorkersScript#from}
    */
    readonly from?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#from_script WorkersScript#from_script}
    */
    readonly fromScript?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#to WorkersScript#to}
    */
    readonly to?: string;
}
export declare function workersScriptMigrationsTransferredClassesToTerraform(struct?: WorkersScriptMigrationsTransferredClasses | cdktf.IResolvable): any;
export declare function workersScriptMigrationsTransferredClassesToHclTerraform(struct?: WorkersScriptMigrationsTransferredClasses | cdktf.IResolvable): any;
export declare class WorkersScriptMigrationsTransferredClassesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): WorkersScriptMigrationsTransferredClasses | cdktf.IResolvable | undefined;
    set internalValue(value: WorkersScriptMigrationsTransferredClasses | cdktf.IResolvable | undefined);
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
export declare class WorkersScriptMigrationsTransferredClassesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: WorkersScriptMigrationsTransferredClasses[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): WorkersScriptMigrationsTransferredClassesOutputReference;
}
export interface WorkersScriptMigrations {
    /**
    * A list of classes to delete Durable Object namespaces from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#deleted_classes WorkersScript#deleted_classes}
    */
    readonly deletedClasses?: string[];
    /**
    * A list of classes to create Durable Object namespaces from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#new_classes WorkersScript#new_classes}
    */
    readonly newClasses?: string[];
    /**
    * A list of classes to create Durable Object namespaces with SQLite from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#new_sqlite_classes WorkersScript#new_sqlite_classes}
    */
    readonly newSqliteClasses?: string[];
    /**
    * Tag to set as the latest migration tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#new_tag WorkersScript#new_tag}
    */
    readonly newTag?: string;
    /**
    * Tag used to verify against the latest migration tag for this Worker. If they don't match, the upload is rejected.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#old_tag WorkersScript#old_tag}
    */
    readonly oldTag?: string;
    /**
    * A list of classes with Durable Object namespaces that were renamed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#renamed_classes WorkersScript#renamed_classes}
    */
    readonly renamedClasses?: WorkersScriptMigrationsRenamedClasses[] | cdktf.IResolvable;
    /**
    * Migrations to apply in order.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#steps WorkersScript#steps}
    */
    readonly steps?: WorkersScriptMigrationsSteps[] | cdktf.IResolvable;
    /**
    * A list of transfers for Durable Object namespaces from a different Worker and class to a class defined in this Worker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#transferred_classes WorkersScript#transferred_classes}
    */
    readonly transferredClasses?: WorkersScriptMigrationsTransferredClasses[] | cdktf.IResolvable;
}
export declare function workersScriptMigrationsToTerraform(struct?: WorkersScriptMigrations | cdktf.IResolvable): any;
export declare function workersScriptMigrationsToHclTerraform(struct?: WorkersScriptMigrations | cdktf.IResolvable): any;
export declare class WorkersScriptMigrationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): WorkersScriptMigrations | cdktf.IResolvable | undefined;
    set internalValue(value: WorkersScriptMigrations | cdktf.IResolvable | undefined);
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
    get renamedClasses(): WorkersScriptMigrationsRenamedClassesList;
    putRenamedClasses(value: WorkersScriptMigrationsRenamedClasses[] | cdktf.IResolvable): void;
    resetRenamedClasses(): void;
    get renamedClassesInput(): any;
    private _steps;
    get steps(): WorkersScriptMigrationsStepsList;
    putSteps(value: WorkersScriptMigrationsSteps[] | cdktf.IResolvable): void;
    resetSteps(): void;
    get stepsInput(): any;
    private _transferredClasses;
    get transferredClasses(): WorkersScriptMigrationsTransferredClassesList;
    putTransferredClasses(value: WorkersScriptMigrationsTransferredClasses[] | cdktf.IResolvable): void;
    resetTransferredClasses(): void;
    get transferredClassesInput(): any;
}
export interface WorkersScriptNamedHandlers {
}
export declare function workersScriptNamedHandlersToTerraform(struct?: WorkersScriptNamedHandlers): any;
export declare function workersScriptNamedHandlersToHclTerraform(struct?: WorkersScriptNamedHandlers): any;
export declare class WorkersScriptNamedHandlersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): WorkersScriptNamedHandlers | undefined;
    set internalValue(value: WorkersScriptNamedHandlers | undefined);
    get handlers(): any;
    get name(): any;
}
export declare class WorkersScriptNamedHandlersList extends cdktf.ComplexList {
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
    get(index: number): WorkersScriptNamedHandlersOutputReference;
}
export interface WorkersScriptObservabilityLogs {
    /**
    * A list of destinations where logs will be exported to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#destinations WorkersScript#destinations}
    */
    readonly destinations?: string[];
    /**
    * Whether logs are enabled for the Worker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#enabled WorkersScript#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * The sampling rate for logs. From 0 to 1 (1 = 100%, 0.1 = 10%). Default is 1.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#head_sampling_rate WorkersScript#head_sampling_rate}
    */
    readonly headSamplingRate?: number;
    /**
    * Whether [invocation logs](https://developers.cloudflare.com/workers/observability/logs/workers-logs/#invocation-logs) are enabled for the Worker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#invocation_logs WorkersScript#invocation_logs}
    */
    readonly invocationLogs: boolean | cdktf.IResolvable;
    /**
    * Whether log persistence is enabled for the Worker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#persist WorkersScript#persist}
    */
    readonly persist?: boolean | cdktf.IResolvable;
}
export declare function workersScriptObservabilityLogsToTerraform(struct?: WorkersScriptObservabilityLogs | cdktf.IResolvable): any;
export declare function workersScriptObservabilityLogsToHclTerraform(struct?: WorkersScriptObservabilityLogs | cdktf.IResolvable): any;
export declare class WorkersScriptObservabilityLogsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): WorkersScriptObservabilityLogs | cdktf.IResolvable | undefined;
    set internalValue(value: WorkersScriptObservabilityLogs | cdktf.IResolvable | undefined);
    private _destinations?;
    get destinations(): string[];
    set destinations(value: string[]);
    resetDestinations(): void;
    get destinationsInput(): string[];
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): any;
    private _headSamplingRate?;
    get headSamplingRate(): number;
    set headSamplingRate(value: number);
    resetHeadSamplingRate(): void;
    get headSamplingRateInput(): number;
    private _invocationLogs?;
    get invocationLogs(): boolean | cdktf.IResolvable;
    set invocationLogs(value: boolean | cdktf.IResolvable);
    get invocationLogsInput(): any;
    private _persist?;
    get persist(): boolean | cdktf.IResolvable;
    set persist(value: boolean | cdktf.IResolvable);
    resetPersist(): void;
    get persistInput(): any;
}
export interface WorkersScriptObservabilityTraces {
    /**
    * A list of destinations where traces will be exported to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#destinations WorkersScript#destinations}
    */
    readonly destinations?: string[];
    /**
    * Whether traces are enabled for the Worker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#enabled WorkersScript#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * The sampling rate for traces. From 0 to 1 (1 = 100%, 0.1 = 10%). Default is 1.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#head_sampling_rate WorkersScript#head_sampling_rate}
    */
    readonly headSamplingRate?: number;
    /**
    * Whether trace persistence is enabled for the Worker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#persist WorkersScript#persist}
    */
    readonly persist?: boolean | cdktf.IResolvable;
}
export declare function workersScriptObservabilityTracesToTerraform(struct?: WorkersScriptObservabilityTraces | cdktf.IResolvable): any;
export declare function workersScriptObservabilityTracesToHclTerraform(struct?: WorkersScriptObservabilityTraces | cdktf.IResolvable): any;
export declare class WorkersScriptObservabilityTracesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): WorkersScriptObservabilityTraces | cdktf.IResolvable | undefined;
    set internalValue(value: WorkersScriptObservabilityTraces | cdktf.IResolvable | undefined);
    private _destinations?;
    get destinations(): string[];
    set destinations(value: string[]);
    resetDestinations(): void;
    get destinationsInput(): string[];
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): any;
    private _headSamplingRate?;
    get headSamplingRate(): number;
    set headSamplingRate(value: number);
    resetHeadSamplingRate(): void;
    get headSamplingRateInput(): number;
    private _persist?;
    get persist(): boolean | cdktf.IResolvable;
    set persist(value: boolean | cdktf.IResolvable);
    resetPersist(): void;
    get persistInput(): any;
}
export interface WorkersScriptObservability {
    /**
    * Whether observability is enabled for the Worker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#enabled WorkersScript#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * The sampling rate for incoming requests. From 0 to 1 (1 = 100%, 0.1 = 10%). Default is 1.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#head_sampling_rate WorkersScript#head_sampling_rate}
    */
    readonly headSamplingRate?: number;
    /**
    * Log settings for the Worker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#logs WorkersScript#logs}
    */
    readonly logs?: WorkersScriptObservabilityLogs;
    /**
    * Trace settings for the Worker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#traces WorkersScript#traces}
    */
    readonly traces?: WorkersScriptObservabilityTraces;
}
export declare function workersScriptObservabilityToTerraform(struct?: WorkersScriptObservability | cdktf.IResolvable): any;
export declare function workersScriptObservabilityToHclTerraform(struct?: WorkersScriptObservability | cdktf.IResolvable): any;
export declare class WorkersScriptObservabilityOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): WorkersScriptObservability | cdktf.IResolvable | undefined;
    set internalValue(value: WorkersScriptObservability | cdktf.IResolvable | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): any;
    private _headSamplingRate?;
    get headSamplingRate(): number;
    set headSamplingRate(value: number);
    resetHeadSamplingRate(): void;
    get headSamplingRateInput(): number;
    private _logs;
    get logs(): WorkersScriptObservabilityLogsOutputReference;
    putLogs(value: WorkersScriptObservabilityLogs): void;
    resetLogs(): void;
    get logsInput(): any;
    private _traces;
    get traces(): WorkersScriptObservabilityTracesOutputReference;
    putTraces(value: WorkersScriptObservabilityTraces): void;
    resetTraces(): void;
    get tracesInput(): any;
}
export interface WorkersScriptPlacementTarget {
}
export declare function workersScriptPlacementTargetToTerraform(struct?: WorkersScriptPlacementTarget): any;
export declare function workersScriptPlacementTargetToHclTerraform(struct?: WorkersScriptPlacementTarget): any;
export declare class WorkersScriptPlacementTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): WorkersScriptPlacementTarget | undefined;
    set internalValue(value: WorkersScriptPlacementTarget | undefined);
    get host(): any;
    get hostname(): any;
    get region(): any;
}
export declare class WorkersScriptPlacementTargetList extends cdktf.ComplexList {
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
    get(index: number): WorkersScriptPlacementTargetOutputReference;
}
export interface WorkersScriptPlacement {
    /**
    * Enables [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement).
    * Available values: "smart", "targeted".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#mode WorkersScript#mode}
    */
    readonly mode?: string;
}
export declare function workersScriptPlacementToTerraform(struct?: WorkersScriptPlacement | cdktf.IResolvable): any;
export declare function workersScriptPlacementToHclTerraform(struct?: WorkersScriptPlacement | cdktf.IResolvable): any;
export declare class WorkersScriptPlacementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): WorkersScriptPlacement | cdktf.IResolvable | undefined;
    set internalValue(value: WorkersScriptPlacement | cdktf.IResolvable | undefined);
    get host(): any;
    get hostname(): any;
    get lastAnalyzedAt(): any;
    private _mode?;
    get mode(): string;
    set mode(value: string);
    resetMode(): void;
    get modeInput(): string;
    get region(): any;
    get status(): any;
    private _target;
    get target(): WorkersScriptPlacementTargetList;
}
export interface WorkersScriptTailConsumers {
    /**
    * Optional environment if the Worker utilizes one.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#environment WorkersScript#environment}
    */
    readonly environment?: string;
    /**
    * Optional dispatch namespace the script belongs to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#namespace WorkersScript#namespace}
    */
    readonly namespace?: string;
    /**
    * Name of Worker that is to be the consumer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#service WorkersScript#service}
    */
    readonly service: string;
}
export declare function workersScriptTailConsumersToTerraform(struct?: WorkersScriptTailConsumers | cdktf.IResolvable): any;
export declare function workersScriptTailConsumersToHclTerraform(struct?: WorkersScriptTailConsumers | cdktf.IResolvable): any;
export declare class WorkersScriptTailConsumersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): WorkersScriptTailConsumers | cdktf.IResolvable | undefined;
    set internalValue(value: WorkersScriptTailConsumers | cdktf.IResolvable | undefined);
    private _environment?;
    get environment(): string;
    set environment(value: string);
    resetEnvironment(): void;
    get environmentInput(): string;
    private _namespace?;
    get namespace(): string;
    set namespace(value: string);
    resetNamespace(): void;
    get namespaceInput(): string;
    private _service?;
    get service(): string;
    set service(value: string);
    get serviceInput(): string;
}
export declare class WorkersScriptTailConsumersList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: WorkersScriptTailConsumers[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): WorkersScriptTailConsumersOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script cloudflare_workers_script}
*/
export declare class WorkersScript extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_workers_script";
    /**
    * Generates CDKTF code for importing a WorkersScript resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the WorkersScript to import
    * @param importFromId The id of the existing WorkersScript that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the WorkersScript to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script cloudflare_workers_script} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WorkersScriptConfig
    */
    constructor(scope: Construct, id: string, config: WorkersScriptConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _annotations;
    get annotations(): WorkersScriptAnnotationsOutputReference;
    putAnnotations(value: WorkersScriptAnnotations): void;
    resetAnnotations(): void;
    get annotationsInput(): any;
    private _assets;
    get assets(): WorkersScriptAssetsOutputReference;
    putAssets(value: WorkersScriptAssets): void;
    resetAssets(): void;
    get assetsInput(): any;
    private _bindings;
    get bindings(): WorkersScriptBindingsList;
    putBindings(value: WorkersScriptBindings[] | cdktf.IResolvable): void;
    resetBindings(): void;
    get bindingsInput(): any;
    private _bodyPart?;
    get bodyPart(): string;
    set bodyPart(value: string);
    resetBodyPart(): void;
    get bodyPartInput(): string;
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
    private _content?;
    get content(): string;
    set content(value: string);
    resetContent(): void;
    get contentInput(): string;
    private _contentFile?;
    get contentFile(): string;
    set contentFile(value: string);
    resetContentFile(): void;
    get contentFileInput(): string;
    private _contentSha256?;
    get contentSha256(): string;
    set contentSha256(value: string);
    resetContentSha256(): void;
    get contentSha256Input(): string;
    private _contentType?;
    get contentType(): string;
    set contentType(value: string);
    resetContentType(): void;
    get contentTypeInput(): string;
    get createdOn(): any;
    get etag(): any;
    get handlers(): any;
    get hasAssets(): any;
    get hasModules(): any;
    get id(): any;
    private _keepAssets?;
    get keepAssets(): boolean | cdktf.IResolvable;
    set keepAssets(value: boolean | cdktf.IResolvable);
    resetKeepAssets(): void;
    get keepAssetsInput(): any;
    private _keepBindings?;
    get keepBindings(): string[];
    set keepBindings(value: string[]);
    resetKeepBindings(): void;
    get keepBindingsInput(): string[];
    get lastDeployedFrom(): any;
    private _limits;
    get limits(): WorkersScriptLimitsOutputReference;
    putLimits(value: WorkersScriptLimits): void;
    resetLimits(): void;
    get limitsInput(): any;
    private _logpush?;
    get logpush(): boolean | cdktf.IResolvable;
    set logpush(value: boolean | cdktf.IResolvable);
    resetLogpush(): void;
    get logpushInput(): any;
    private _mainModule?;
    get mainModule(): string;
    set mainModule(value: string);
    resetMainModule(): void;
    get mainModuleInput(): string;
    get migrationTag(): any;
    private _migrations;
    get migrations(): WorkersScriptMigrationsOutputReference;
    putMigrations(value: WorkersScriptMigrations): void;
    resetMigrations(): void;
    get migrationsInput(): any;
    get modifiedOn(): any;
    private _namedHandlers;
    get namedHandlers(): WorkersScriptNamedHandlersList;
    private _observability;
    get observability(): WorkersScriptObservabilityOutputReference;
    putObservability(value: WorkersScriptObservability): void;
    resetObservability(): void;
    get observabilityInput(): any;
    private _placement;
    get placement(): WorkersScriptPlacementOutputReference;
    putPlacement(value: WorkersScriptPlacement): void;
    resetPlacement(): void;
    get placementInput(): any;
    get placementMode(): any;
    get placementStatus(): any;
    private _scriptName?;
    get scriptName(): string;
    set scriptName(value: string);
    get scriptNameInput(): string;
    get startupTimeMs(): any;
    private _tailConsumers;
    get tailConsumers(): WorkersScriptTailConsumersList;
    putTailConsumers(value: WorkersScriptTailConsumers[] | cdktf.IResolvable): void;
    resetTailConsumers(): void;
    get tailConsumersInput(): any;
    private _usageModel?;
    get usageModel(): string;
    set usageModel(value: string);
    resetUsageModel(): void;
    get usageModelInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
