import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WorkersForPlatformsDispatchNamespaceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_for_platforms_dispatch_namespace#account_id WorkersForPlatformsDispatchNamespace#account_id}
    */
    readonly accountId?: string;
    /**
    * The name of the dispatch namespace.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_for_platforms_dispatch_namespace#name WorkersForPlatformsDispatchNamespace#name}
    */
    readonly name?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_for_platforms_dispatch_namespace cloudflare_workers_for_platforms_dispatch_namespace}
*/
export declare class WorkersForPlatformsDispatchNamespace extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_workers_for_platforms_dispatch_namespace";
    /**
    * Generates CDKTF code for importing a WorkersForPlatformsDispatchNamespace resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the WorkersForPlatformsDispatchNamespace to import
    * @param importFromId The id of the existing WorkersForPlatformsDispatchNamespace that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_for_platforms_dispatch_namespace#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the WorkersForPlatformsDispatchNamespace to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_for_platforms_dispatch_namespace cloudflare_workers_for_platforms_dispatch_namespace} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WorkersForPlatformsDispatchNamespaceConfig = {}
    */
    constructor(scope: Construct, id: string, config?: WorkersForPlatformsDispatchNamespaceConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get createdBy(): any;
    get createdOn(): any;
    get id(): any;
    get modifiedBy(): any;
    get modifiedOn(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    get namespaceId(): any;
    get namespaceName(): any;
    get scriptCount(): any;
    get trustedWorkers(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
