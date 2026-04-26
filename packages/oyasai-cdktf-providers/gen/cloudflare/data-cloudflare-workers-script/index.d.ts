import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareWorkersScriptConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_script#account_id DataCloudflareWorkersScript#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_script#filter DataCloudflareWorkersScript#filter}
    */
    readonly filter?: DataCloudflareWorkersScriptFilter;
    /**
    * Name of the script, used in URLs and route configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_script#script_name DataCloudflareWorkersScript#script_name}
    */
    readonly scriptName?: string;
}
export interface DataCloudflareWorkersScriptFilter {
    /**
    * Filter scripts by tags. Format: comma-separated list of tag:allowed pairs where allowed is 'yes' or 'no'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_script#tags DataCloudflareWorkersScript#tags}
    */
    readonly tags?: string;
}
export declare function dataCloudflareWorkersScriptFilterToTerraform(struct?: DataCloudflareWorkersScriptFilter | cdktf.IResolvable): any;
export declare function dataCloudflareWorkersScriptFilterToHclTerraform(struct?: DataCloudflareWorkersScriptFilter | cdktf.IResolvable): any;
export declare class DataCloudflareWorkersScriptFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareWorkersScriptFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareWorkersScriptFilter | cdktf.IResolvable | undefined);
    private _tags?;
    get tags(): string;
    set tags(value: string);
    resetTags(): void;
    get tagsInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_script cloudflare_workers_script}
*/
export declare class DataCloudflareWorkersScript extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_workers_script";
    /**
    * Generates CDKTF code for importing a DataCloudflareWorkersScript resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareWorkersScript to import
    * @param importFromId The id of the existing DataCloudflareWorkersScript that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_script#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareWorkersScript to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_script cloudflare_workers_script} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareWorkersScriptConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareWorkersScriptConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _filter;
    get filter(): DataCloudflareWorkersScriptFilterOutputReference;
    putFilter(value: DataCloudflareWorkersScriptFilter): void;
    resetFilter(): void;
    get filterInput(): any;
    get id(): any;
    get script(): any;
    private _scriptName?;
    get scriptName(): string;
    set scriptName(value: string);
    resetScriptName(): void;
    get scriptNameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
