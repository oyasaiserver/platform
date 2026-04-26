import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudforceOneRequestMessageConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloudforce_one_request_message#account_id CloudforceOneRequestMessage#account_id}
    */
    readonly accountId?: string;
    /**
    * Content of message.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloudforce_one_request_message#content CloudforceOneRequestMessage#content}
    */
    readonly content?: string;
    /**
    * UUID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloudforce_one_request_message#request_id CloudforceOneRequestMessage#request_id}
    */
    readonly requestId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloudforce_one_request_message cloudflare_cloudforce_one_request_message}
*/
export declare class CloudforceOneRequestMessage extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_cloudforce_one_request_message";
    /**
    * Generates CDKTF code for importing a CloudforceOneRequestMessage resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CloudforceOneRequestMessage to import
    * @param importFromId The id of the existing CloudforceOneRequestMessage that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloudforce_one_request_message#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CloudforceOneRequestMessage to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloudforce_one_request_message cloudflare_cloudforce_one_request_message} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudforceOneRequestMessageConfig
    */
    constructor(scope: Construct, id: string, config: CloudforceOneRequestMessageConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get author(): any;
    private _content?;
    get content(): string;
    set content(value: string);
    resetContent(): void;
    get contentInput(): string;
    get created(): any;
    get id(): any;
    get isFollowOnRequest(): any;
    private _requestId?;
    get requestId(): string;
    set requestId(value: string);
    get requestIdInput(): string;
    get updated(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
