import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WorkersKvNamespaceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_kv_namespace#account_id WorkersKvNamespace#account_id}
    */
    readonly accountId?: string;
    /**
    * A human-readable string name for a Namespace.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_kv_namespace#title WorkersKvNamespace#title}
    */
    readonly title: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_kv_namespace cloudflare_workers_kv_namespace}
*/
export declare class WorkersKvNamespace extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_workers_kv_namespace";
    /**
    * Generates CDKTF code for importing a WorkersKvNamespace resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the WorkersKvNamespace to import
    * @param importFromId The id of the existing WorkersKvNamespace that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_kv_namespace#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the WorkersKvNamespace to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_kv_namespace cloudflare_workers_kv_namespace} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WorkersKvNamespaceConfig
    */
    constructor(scope: Construct, id: string, config: WorkersKvNamespaceConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get id(): any;
    get supportsUrlEncoding(): any;
    private _title?;
    get title(): string;
    set title(value: string);
    get titleInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
