import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AiGatewayConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway#account_id AiGateway#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway#authentication AiGateway#authentication}
    */
    readonly authentication?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway#cache_invalidate_on_update AiGateway#cache_invalidate_on_update}
    */
    readonly cacheInvalidateOnUpdate: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway#cache_ttl AiGateway#cache_ttl}
    */
    readonly cacheTtl: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway#collect_logs AiGateway#collect_logs}
    */
    readonly collectLogs: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway#dlp AiGateway#dlp}
    */
    readonly dlp?: AiGatewayDlp;
    /**
    * gateway id
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway#id AiGateway#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway#log_management AiGateway#log_management}
    */
    readonly logManagement?: number;
    /**
    * Available values: "STOP_INSERTING", "DELETE_OLDEST".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway#log_management_strategy AiGateway#log_management_strategy}
    */
    readonly logManagementStrategy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway#logpush AiGateway#logpush}
    */
    readonly logpush?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway#logpush_public_key AiGateway#logpush_public_key}
    */
    readonly logpushPublicKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway#otel AiGateway#otel}
    */
    readonly otel?: AiGatewayOtel[] | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway#rate_limiting_interval AiGateway#rate_limiting_interval}
    */
    readonly rateLimitingInterval: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway#rate_limiting_limit AiGateway#rate_limiting_limit}
    */
    readonly rateLimitingLimit: number;
    /**
    * Available values: "fixed", "sliding".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway#rate_limiting_technique AiGateway#rate_limiting_technique}
    */
    readonly rateLimitingTechnique?: string;
    /**
    * Backoff strategy for retry delays
    * Available values: "constant", "linear", "exponential".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway#retry_backoff AiGateway#retry_backoff}
    */
    readonly retryBackoff?: string;
    /**
    * Delay between retry attempts in milliseconds (0-5000)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway#retry_delay AiGateway#retry_delay}
    */
    readonly retryDelay?: number;
    /**
    * Maximum number of retry attempts for failed requests (1-5)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway#retry_max_attempts AiGateway#retry_max_attempts}
    */
    readonly retryMaxAttempts?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway#store_id AiGateway#store_id}
    */
    readonly storeId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway#stripe AiGateway#stripe}
    */
    readonly stripe?: AiGatewayStripe;
    /**
    * Controls how Workers AI inference calls routed through this gateway are billed. Only 'postpaid' is currently supported.
    * Available values: "postpaid".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway#workers_ai_billing_mode AiGateway#workers_ai_billing_mode}
    */
    readonly workersAiBillingMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway#zdr AiGateway#zdr}
    */
    readonly zdr?: boolean | cdktf.IResolvable;
}
export interface AiGatewayDlpPolicies {
    /**
    * Available values: "FLAG", "BLOCK".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway#action AiGateway#action}
    */
    readonly action: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway#check AiGateway#check}
    */
    readonly check: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway#enabled AiGateway#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway#id AiGateway#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway#profiles AiGateway#profiles}
    */
    readonly profiles: string[];
}
export declare function aiGatewayDlpPoliciesToTerraform(struct?: AiGatewayDlpPolicies | cdktf.IResolvable): any;
export declare function aiGatewayDlpPoliciesToHclTerraform(struct?: AiGatewayDlpPolicies | cdktf.IResolvable): any;
export declare class AiGatewayDlpPoliciesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AiGatewayDlpPolicies | cdktf.IResolvable | undefined;
    set internalValue(value: AiGatewayDlpPolicies | cdktf.IResolvable | undefined);
    private _action?;
    get action(): string;
    set action(value: string);
    get actionInput(): string;
    private _check?;
    get check(): string[];
    set check(value: string[]);
    get checkInput(): string[];
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): any;
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    private _profiles?;
    get profiles(): string[];
    set profiles(value: string[]);
    get profilesInput(): string[];
}
export declare class AiGatewayDlpPoliciesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AiGatewayDlpPolicies[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AiGatewayDlpPoliciesOutputReference;
}
export interface AiGatewayDlp {
    /**
    * Available values: "BLOCK", "FLAG".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway#action AiGateway#action}
    */
    readonly action?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway#enabled AiGateway#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway#policies AiGateway#policies}
    */
    readonly policies?: AiGatewayDlpPolicies[] | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway#profiles AiGateway#profiles}
    */
    readonly profiles?: string[];
}
export declare function aiGatewayDlpToTerraform(struct?: AiGatewayDlp | cdktf.IResolvable): any;
export declare function aiGatewayDlpToHclTerraform(struct?: AiGatewayDlp | cdktf.IResolvable): any;
export declare class AiGatewayDlpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AiGatewayDlp | cdktf.IResolvable | undefined;
    set internalValue(value: AiGatewayDlp | cdktf.IResolvable | undefined);
    private _action?;
    get action(): string;
    set action(value: string);
    resetAction(): void;
    get actionInput(): string;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): any;
    private _policies;
    get policies(): AiGatewayDlpPoliciesList;
    putPolicies(value: AiGatewayDlpPolicies[] | cdktf.IResolvable): void;
    resetPolicies(): void;
    get policiesInput(): any;
    private _profiles?;
    get profiles(): string[];
    set profiles(value: string[]);
    resetProfiles(): void;
    get profilesInput(): string[];
}
export interface AiGatewayOtel {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway#authorization AiGateway#authorization}
    */
    readonly authorization: string;
    /**
    * Available values: "json", "protobuf".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway#content_type AiGateway#content_type}
    */
    readonly contentType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway#headers AiGateway#headers}
    */
    readonly headers: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway#url AiGateway#url}
    */
    readonly url: string;
}
export declare function aiGatewayOtelToTerraform(struct?: AiGatewayOtel | cdktf.IResolvable): any;
export declare function aiGatewayOtelToHclTerraform(struct?: AiGatewayOtel | cdktf.IResolvable): any;
export declare class AiGatewayOtelOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AiGatewayOtel | cdktf.IResolvable | undefined;
    set internalValue(value: AiGatewayOtel | cdktf.IResolvable | undefined);
    private _authorization?;
    get authorization(): string;
    set authorization(value: string);
    get authorizationInput(): string;
    private _contentType?;
    get contentType(): string;
    set contentType(value: string);
    resetContentType(): void;
    get contentTypeInput(): string;
    private _headers?;
    get headers(): {
        [key: string]: string;
    };
    set headers(value: {
        [key: string]: string;
    });
    get headersInput(): {
        [key: string]: string;
    };
    private _url?;
    get url(): string;
    set url(value: string);
    get urlInput(): string;
}
export declare class AiGatewayOtelList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AiGatewayOtel[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AiGatewayOtelOutputReference;
}
export interface AiGatewayStripeUsageEvents {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway#payload AiGateway#payload}
    */
    readonly payload: string;
}
export declare function aiGatewayStripeUsageEventsToTerraform(struct?: AiGatewayStripeUsageEvents | cdktf.IResolvable): any;
export declare function aiGatewayStripeUsageEventsToHclTerraform(struct?: AiGatewayStripeUsageEvents | cdktf.IResolvable): any;
export declare class AiGatewayStripeUsageEventsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AiGatewayStripeUsageEvents | cdktf.IResolvable | undefined;
    set internalValue(value: AiGatewayStripeUsageEvents | cdktf.IResolvable | undefined);
    private _payload?;
    get payload(): string;
    set payload(value: string);
    get payloadInput(): string;
}
export declare class AiGatewayStripeUsageEventsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AiGatewayStripeUsageEvents[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AiGatewayStripeUsageEventsOutputReference;
}
export interface AiGatewayStripe {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway#authorization AiGateway#authorization}
    */
    readonly authorization: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway#usage_events AiGateway#usage_events}
    */
    readonly usageEvents: AiGatewayStripeUsageEvents[] | cdktf.IResolvable;
}
export declare function aiGatewayStripeToTerraform(struct?: AiGatewayStripe | cdktf.IResolvable): any;
export declare function aiGatewayStripeToHclTerraform(struct?: AiGatewayStripe | cdktf.IResolvable): any;
export declare class AiGatewayStripeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AiGatewayStripe | cdktf.IResolvable | undefined;
    set internalValue(value: AiGatewayStripe | cdktf.IResolvable | undefined);
    private _authorization?;
    get authorization(): string;
    set authorization(value: string);
    get authorizationInput(): string;
    private _usageEvents;
    get usageEvents(): AiGatewayStripeUsageEventsList;
    putUsageEvents(value: AiGatewayStripeUsageEvents[] | cdktf.IResolvable): void;
    get usageEventsInput(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway cloudflare_ai_gateway}
*/
export declare class AiGateway extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_ai_gateway";
    /**
    * Generates CDKTF code for importing a AiGateway resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AiGateway to import
    * @param importFromId The id of the existing AiGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AiGateway to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway cloudflare_ai_gateway} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AiGatewayConfig
    */
    constructor(scope: Construct, id: string, config: AiGatewayConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _authentication?;
    get authentication(): boolean | cdktf.IResolvable;
    set authentication(value: boolean | cdktf.IResolvable);
    resetAuthentication(): void;
    get authenticationInput(): any;
    private _cacheInvalidateOnUpdate?;
    get cacheInvalidateOnUpdate(): boolean | cdktf.IResolvable;
    set cacheInvalidateOnUpdate(value: boolean | cdktf.IResolvable);
    get cacheInvalidateOnUpdateInput(): any;
    private _cacheTtl?;
    get cacheTtl(): number;
    set cacheTtl(value: number);
    get cacheTtlInput(): number;
    private _collectLogs?;
    get collectLogs(): boolean | cdktf.IResolvable;
    set collectLogs(value: boolean | cdktf.IResolvable);
    get collectLogsInput(): any;
    get createdAt(): any;
    private _dlp;
    get dlp(): AiGatewayDlpOutputReference;
    putDlp(value: AiGatewayDlp): void;
    resetDlp(): void;
    get dlpInput(): any;
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get isDefault(): any;
    private _logManagement?;
    get logManagement(): number;
    set logManagement(value: number);
    resetLogManagement(): void;
    get logManagementInput(): number;
    private _logManagementStrategy?;
    get logManagementStrategy(): string;
    set logManagementStrategy(value: string);
    resetLogManagementStrategy(): void;
    get logManagementStrategyInput(): string;
    private _logpush?;
    get logpush(): boolean | cdktf.IResolvable;
    set logpush(value: boolean | cdktf.IResolvable);
    resetLogpush(): void;
    get logpushInput(): any;
    private _logpushPublicKey?;
    get logpushPublicKey(): string;
    set logpushPublicKey(value: string);
    resetLogpushPublicKey(): void;
    get logpushPublicKeyInput(): string;
    get modifiedAt(): any;
    private _otel;
    get otel(): AiGatewayOtelList;
    putOtel(value: AiGatewayOtel[] | cdktf.IResolvable): void;
    resetOtel(): void;
    get otelInput(): any;
    private _rateLimitingInterval?;
    get rateLimitingInterval(): number;
    set rateLimitingInterval(value: number);
    get rateLimitingIntervalInput(): number;
    private _rateLimitingLimit?;
    get rateLimitingLimit(): number;
    set rateLimitingLimit(value: number);
    get rateLimitingLimitInput(): number;
    private _rateLimitingTechnique?;
    get rateLimitingTechnique(): string;
    set rateLimitingTechnique(value: string);
    resetRateLimitingTechnique(): void;
    get rateLimitingTechniqueInput(): string;
    private _retryBackoff?;
    get retryBackoff(): string;
    set retryBackoff(value: string);
    resetRetryBackoff(): void;
    get retryBackoffInput(): string;
    private _retryDelay?;
    get retryDelay(): number;
    set retryDelay(value: number);
    resetRetryDelay(): void;
    get retryDelayInput(): number;
    private _retryMaxAttempts?;
    get retryMaxAttempts(): number;
    set retryMaxAttempts(value: number);
    resetRetryMaxAttempts(): void;
    get retryMaxAttemptsInput(): number;
    private _storeId?;
    get storeId(): string;
    set storeId(value: string);
    resetStoreId(): void;
    get storeIdInput(): string;
    private _stripe;
    get stripe(): AiGatewayStripeOutputReference;
    putStripe(value: AiGatewayStripe): void;
    resetStripe(): void;
    get stripeInput(): any;
    private _workersAiBillingMode?;
    get workersAiBillingMode(): string;
    set workersAiBillingMode(value: string);
    resetWorkersAiBillingMode(): void;
    get workersAiBillingModeInput(): string;
    private _zdr?;
    get zdr(): boolean | cdktf.IResolvable;
    set zdr(value: boolean | cdktf.IResolvable);
    resetZdr(): void;
    get zdrInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
