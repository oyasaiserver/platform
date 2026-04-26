import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudforceOneRequestConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloudforce_one_request#account_id CloudforceOneRequest#account_id}
    */
    readonly accountId?: string;
    /**
    * Request content.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloudforce_one_request#content CloudforceOneRequest#content}
    */
    readonly content?: string;
    /**
    * Priority for analyzing the request.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloudforce_one_request#priority CloudforceOneRequest#priority}
    */
    readonly priority?: string;
    /**
    * Requested information from request.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloudforce_one_request#request_type CloudforceOneRequest#request_type}
    */
    readonly requestType?: string;
    /**
    * Brief description of the request.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloudforce_one_request#summary CloudforceOneRequest#summary}
    */
    readonly summary?: string;
    /**
    * The CISA defined Traffic Light Protocol (TLP).
    * Available values: "clear", "amber", "amber-strict", "green", "red".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloudforce_one_request#tlp CloudforceOneRequest#tlp}
    */
    readonly tlp?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloudforce_one_request cloudflare_cloudforce_one_request}
*/
export declare class CloudforceOneRequest extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_cloudforce_one_request";
    /**
    * Generates CDKTF code for importing a CloudforceOneRequest resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CloudforceOneRequest to import
    * @param importFromId The id of the existing CloudforceOneRequest that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloudforce_one_request#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CloudforceOneRequest to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloudforce_one_request cloudflare_cloudforce_one_request} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudforceOneRequestConfig = {}
    */
    constructor(scope: Construct, id: string, config?: CloudforceOneRequestConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get completed(): any;
    private _content?;
    get content(): string;
    set content(value: string);
    resetContent(): void;
    get contentInput(): string;
    get created(): any;
    get id(): any;
    get messageTokens(): any;
    private _priority?;
    get priority(): string;
    set priority(value: string);
    resetPriority(): void;
    get priorityInput(): string;
    get readableId(): any;
    get request(): any;
    private _requestType?;
    get requestType(): string;
    set requestType(value: string);
    resetRequestType(): void;
    get requestTypeInput(): string;
    get status(): any;
    private _summary?;
    get summary(): string;
    set summary(value: string);
    resetSummary(): void;
    get summaryInput(): string;
    private _tlp?;
    get tlp(): string;
    set tlp(value: string);
    resetTlp(): void;
    get tlpInput(): string;
    get tokens(): any;
    get updated(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
