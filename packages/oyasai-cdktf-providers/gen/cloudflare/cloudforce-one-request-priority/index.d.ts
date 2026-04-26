import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudforceOneRequestPriorityConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloudforce_one_request_priority#account_id CloudforceOneRequestPriority#account_id}
    */
    readonly accountId?: string;
    /**
    * List of labels.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloudforce_one_request_priority#labels CloudforceOneRequestPriority#labels}
    */
    readonly labels: string[];
    /**
    * Priority.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloudforce_one_request_priority#priority CloudforceOneRequestPriority#priority}
    */
    readonly priority: number;
    /**
    * Requirement.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloudforce_one_request_priority#requirement CloudforceOneRequestPriority#requirement}
    */
    readonly requirement: string;
    /**
    * The CISA defined Traffic Light Protocol (TLP).
    * Available values: "clear", "amber", "amber-strict", "green", "red".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloudforce_one_request_priority#tlp CloudforceOneRequestPriority#tlp}
    */
    readonly tlp: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloudforce_one_request_priority cloudflare_cloudforce_one_request_priority}
*/
export declare class CloudforceOneRequestPriority extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_cloudforce_one_request_priority";
    /**
    * Generates CDKTF code for importing a CloudforceOneRequestPriority resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CloudforceOneRequestPriority to import
    * @param importFromId The id of the existing CloudforceOneRequestPriority that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloudforce_one_request_priority#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CloudforceOneRequestPriority to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloudforce_one_request_priority cloudflare_cloudforce_one_request_priority} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudforceOneRequestPriorityConfig
    */
    constructor(scope: Construct, id: string, config: CloudforceOneRequestPriorityConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get completed(): any;
    get content(): any;
    get created(): any;
    get id(): any;
    private _labels?;
    get labels(): string[];
    set labels(value: string[]);
    get labelsInput(): string[];
    get messageTokens(): any;
    private _priority?;
    get priority(): number;
    set priority(value: number);
    get priorityInput(): number;
    get readableId(): any;
    get request(): any;
    private _requirement?;
    get requirement(): string;
    set requirement(value: string);
    get requirementInput(): string;
    get status(): any;
    get summary(): any;
    private _tlp?;
    get tlp(): string;
    set tlp(value: string);
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
