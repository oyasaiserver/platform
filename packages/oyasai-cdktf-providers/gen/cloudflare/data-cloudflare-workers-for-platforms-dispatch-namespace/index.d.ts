import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareWorkersForPlatformsDispatchNamespaceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_for_platforms_dispatch_namespace#account_id DataCloudflareWorkersForPlatformsDispatchNamespace#account_id}
    */
    readonly accountId?: string;
    /**
    * Name of the Workers for Platforms dispatch namespace.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_for_platforms_dispatch_namespace#dispatch_namespace DataCloudflareWorkersForPlatformsDispatchNamespace#dispatch_namespace}
    */
    readonly dispatchNamespace: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_for_platforms_dispatch_namespace cloudflare_workers_for_platforms_dispatch_namespace}
*/
export declare class DataCloudflareWorkersForPlatformsDispatchNamespace extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_workers_for_platforms_dispatch_namespace";
    /**
    * Generates CDKTF code for importing a DataCloudflareWorkersForPlatformsDispatchNamespace resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareWorkersForPlatformsDispatchNamespace to import
    * @param importFromId The id of the existing DataCloudflareWorkersForPlatformsDispatchNamespace that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_for_platforms_dispatch_namespace#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareWorkersForPlatformsDispatchNamespace to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_for_platforms_dispatch_namespace cloudflare_workers_for_platforms_dispatch_namespace} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareWorkersForPlatformsDispatchNamespaceConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareWorkersForPlatformsDispatchNamespaceConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get createdBy(): any;
    get createdOn(): any;
    private _dispatchNamespace?;
    get dispatchNamespace(): string;
    set dispatchNamespace(value: string);
    get dispatchNamespaceInput(): string;
    get id(): any;
    get modifiedBy(): any;
    get modifiedOn(): any;
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
