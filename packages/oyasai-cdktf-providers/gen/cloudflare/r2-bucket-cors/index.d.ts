import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface R2BucketCorsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Account ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_cors#account_id R2BucketCors#account_id}
    */
    readonly accountId?: string;
    /**
    * Name of the bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_cors#bucket_name R2BucketCors#bucket_name}
    */
    readonly bucketName: string;
    /**
    * Jurisdiction of the bucket
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_cors#jurisdiction R2BucketCors#jurisdiction}
    */
    readonly jurisdiction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_cors#rules R2BucketCors#rules}
    */
    readonly rules?: R2BucketCorsRules[] | cdktf.IResolvable;
}
export interface R2BucketCorsRulesAllowed {
    /**
    * Specifies the value for the Access-Control-Allow-Headers header R2 sets when requesting objects in this bucket from a browser. Cross-origin requests that include custom headers (e.g. x-user-id) should specify these headers as AllowedHeaders.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_cors#headers R2BucketCors#headers}
    */
    readonly headers?: string[];
    /**
    * Specifies the value for the Access-Control-Allow-Methods header R2 sets when requesting objects in a bucket from a browser.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_cors#methods R2BucketCors#methods}
    */
    readonly methods: string[];
    /**
    * Specifies the value for the Access-Control-Allow-Origin header R2 sets when requesting objects in a bucket from a browser.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_cors#origins R2BucketCors#origins}
    */
    readonly origins: string[];
}
export declare function r2BucketCorsRulesAllowedToTerraform(struct?: R2BucketCorsRulesAllowed | cdktf.IResolvable): any;
export declare function r2BucketCorsRulesAllowedToHclTerraform(struct?: R2BucketCorsRulesAllowed | cdktf.IResolvable): any;
export declare class R2BucketCorsRulesAllowedOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): R2BucketCorsRulesAllowed | cdktf.IResolvable | undefined;
    set internalValue(value: R2BucketCorsRulesAllowed | cdktf.IResolvable | undefined);
    private _headers?;
    get headers(): string[];
    set headers(value: string[]);
    resetHeaders(): void;
    get headersInput(): string[];
    private _methods?;
    get methods(): string[];
    set methods(value: string[]);
    get methodsInput(): string[];
    private _origins?;
    get origins(): string[];
    set origins(value: string[]);
    get originsInput(): string[];
}
export interface R2BucketCorsRules {
    /**
    * Object specifying allowed origins, methods and headers for this CORS rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_cors#allowed R2BucketCors#allowed}
    */
    readonly allowed: R2BucketCorsRulesAllowed;
    /**
    * Specifies the headers that can be exposed back, and accessed by, the JavaScript making the cross-origin request. If you need to access headers beyond the safelisted response headers, such as Content-Encoding or cf-cache-status, you must specify it here.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_cors#expose_headers R2BucketCors#expose_headers}
    */
    readonly exposeHeaders?: string[];
    /**
    * Identifier for this rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_cors#id R2BucketCors#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Specifies the amount of time (in seconds) browsers are allowed to cache CORS preflight responses. Browsers may limit this to 2 hours or less, even if the maximum value (86400) is specified.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_cors#max_age_seconds R2BucketCors#max_age_seconds}
    */
    readonly maxAgeSeconds?: number;
}
export declare function r2BucketCorsRulesToTerraform(struct?: R2BucketCorsRules | cdktf.IResolvable): any;
export declare function r2BucketCorsRulesToHclTerraform(struct?: R2BucketCorsRules | cdktf.IResolvable): any;
export declare class R2BucketCorsRulesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): R2BucketCorsRules | cdktf.IResolvable | undefined;
    set internalValue(value: R2BucketCorsRules | cdktf.IResolvable | undefined);
    private _allowed;
    get allowed(): R2BucketCorsRulesAllowedOutputReference;
    putAllowed(value: R2BucketCorsRulesAllowed): void;
    get allowedInput(): any;
    private _exposeHeaders?;
    get exposeHeaders(): string[];
    set exposeHeaders(value: string[]);
    resetExposeHeaders(): void;
    get exposeHeadersInput(): string[];
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _maxAgeSeconds?;
    get maxAgeSeconds(): number;
    set maxAgeSeconds(value: number);
    resetMaxAgeSeconds(): void;
    get maxAgeSecondsInput(): number;
}
export declare class R2BucketCorsRulesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: R2BucketCorsRules[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): R2BucketCorsRulesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_cors cloudflare_r2_bucket_cors}
*/
export declare class R2BucketCors extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_r2_bucket_cors";
    /**
    * Generates CDKTF code for importing a R2BucketCors resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the R2BucketCors to import
    * @param importFromId The id of the existing R2BucketCors that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_cors#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the R2BucketCors to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_cors cloudflare_r2_bucket_cors} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options R2BucketCorsConfig
    */
    constructor(scope: Construct, id: string, config: R2BucketCorsConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _bucketName?;
    get bucketName(): string;
    set bucketName(value: string);
    get bucketNameInput(): string;
    private _jurisdiction?;
    get jurisdiction(): string;
    set jurisdiction(value: string);
    resetJurisdiction(): void;
    get jurisdictionInput(): string;
    private _rules;
    get rules(): R2BucketCorsRulesList;
    putRules(value: R2BucketCorsRules[] | cdktf.IResolvable): void;
    resetRules(): void;
    get rulesInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
