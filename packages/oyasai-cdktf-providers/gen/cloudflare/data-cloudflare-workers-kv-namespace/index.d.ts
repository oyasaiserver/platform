import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareWorkersKvNamespaceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_kv_namespace#account_id DataCloudflareWorkersKvNamespace#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_kv_namespace#filter DataCloudflareWorkersKvNamespace#filter}
    */
    readonly filter?: DataCloudflareWorkersKvNamespaceFilter;
    /**
    * Namespace identifier tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_kv_namespace#namespace_id DataCloudflareWorkersKvNamespace#namespace_id}
    */
    readonly namespaceId?: string;
}
export interface DataCloudflareWorkersKvNamespaceFilter {
    /**
    * Direction to order namespaces.
    * Available values: "asc", "desc".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_kv_namespace#direction DataCloudflareWorkersKvNamespace#direction}
    */
    readonly direction?: string;
    /**
    * Field to order results by.
    * Available values: "id", "title".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_kv_namespace#order DataCloudflareWorkersKvNamespace#order}
    */
    readonly order?: string;
}
export declare function dataCloudflareWorkersKvNamespaceFilterToTerraform(struct?: DataCloudflareWorkersKvNamespaceFilter | cdktf.IResolvable): any;
export declare function dataCloudflareWorkersKvNamespaceFilterToHclTerraform(struct?: DataCloudflareWorkersKvNamespaceFilter | cdktf.IResolvable): any;
export declare class DataCloudflareWorkersKvNamespaceFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareWorkersKvNamespaceFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareWorkersKvNamespaceFilter | cdktf.IResolvable | undefined);
    private _direction?;
    get direction(): string;
    set direction(value: string);
    resetDirection(): void;
    get directionInput(): string;
    private _order?;
    get order(): string;
    set order(value: string);
    resetOrder(): void;
    get orderInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_kv_namespace cloudflare_workers_kv_namespace}
*/
export declare class DataCloudflareWorkersKvNamespace extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_workers_kv_namespace";
    /**
    * Generates CDKTF code for importing a DataCloudflareWorkersKvNamespace resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareWorkersKvNamespace to import
    * @param importFromId The id of the existing DataCloudflareWorkersKvNamespace that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_kv_namespace#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareWorkersKvNamespace to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_kv_namespace cloudflare_workers_kv_namespace} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareWorkersKvNamespaceConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareWorkersKvNamespaceConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _filter;
    get filter(): DataCloudflareWorkersKvNamespaceFilterOutputReference;
    putFilter(value: DataCloudflareWorkersKvNamespaceFilter): void;
    resetFilter(): void;
    get filterInput(): any;
    get id(): any;
    private _namespaceId?;
    get namespaceId(): string;
    set namespaceId(value: string);
    resetNamespaceId(): void;
    get namespaceIdInput(): string;
    get supportsUrlEncoding(): any;
    get title(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
