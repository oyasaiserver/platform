import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WorkersKvConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_kv#account_id WorkersKv#account_id}
    */
    readonly accountId?: string;
    /**
    * A key's name. The name may be at most 512 bytes. All printable, non-whitespace characters are valid. Use percent-encoding to define key names as part of a URL.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_kv#key_name WorkersKv#key_name}
    */
    readonly keyName: string;
    /**
    * Associates arbitrary JSON data with a key/value pair.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_kv#metadata WorkersKv#metadata}
    */
    readonly metadata?: string;
    /**
    * Namespace identifier tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_kv#namespace_id WorkersKv#namespace_id}
    */
    readonly namespaceId: string;
    /**
    * A byte sequence to be stored, up to 25 MiB in length.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_kv#value WorkersKv#value}
    */
    readonly value: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_kv cloudflare_workers_kv}
*/
export declare class WorkersKv extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_workers_kv";
    /**
    * Generates CDKTF code for importing a WorkersKv resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the WorkersKv to import
    * @param importFromId The id of the existing WorkersKv that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_kv#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the WorkersKv to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_kv cloudflare_workers_kv} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WorkersKvConfig
    */
    constructor(scope: Construct, id: string, config: WorkersKvConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get id(): any;
    private _keyName?;
    get keyName(): string;
    set keyName(value: string);
    get keyNameInput(): string;
    private _metadata?;
    get metadata(): string;
    set metadata(value: string);
    resetMetadata(): void;
    get metadataInput(): string;
    private _namespaceId?;
    get namespaceId(): string;
    set namespaceId(value: string);
    get namespaceIdInput(): string;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
