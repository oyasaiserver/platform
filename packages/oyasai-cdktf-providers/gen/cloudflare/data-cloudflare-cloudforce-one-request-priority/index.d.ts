import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareCloudforceOneRequestPriorityConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_request_priority#account_id DataCloudflareCloudforceOneRequestPriority#account_id}
    */
    readonly accountId?: string;
    /**
    * UUID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_request_priority#priority_id DataCloudflareCloudforceOneRequestPriority#priority_id}
    */
    readonly priorityId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_request_priority cloudflare_cloudforce_one_request_priority}
*/
export declare class DataCloudflareCloudforceOneRequestPriority extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_cloudforce_one_request_priority";
    /**
    * Generates CDKTF code for importing a DataCloudflareCloudforceOneRequestPriority resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareCloudforceOneRequestPriority to import
    * @param importFromId The id of the existing DataCloudflareCloudforceOneRequestPriority that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_request_priority#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareCloudforceOneRequestPriority to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_request_priority cloudflare_cloudforce_one_request_priority} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareCloudforceOneRequestPriorityConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareCloudforceOneRequestPriorityConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get completed(): any;
    get content(): any;
    get created(): any;
    get id(): any;
    get messageTokens(): any;
    get priority(): any;
    private _priorityId?;
    get priorityId(): string;
    set priorityId(value: string);
    get priorityIdInput(): string;
    get readableId(): any;
    get request(): any;
    get status(): any;
    get summary(): any;
    get tlp(): any;
    get tokens(): any;
    get updated(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
