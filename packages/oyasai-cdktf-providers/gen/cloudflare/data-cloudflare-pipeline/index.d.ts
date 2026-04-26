import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflarePipelineConfig extends cdktf.TerraformMetaArguments {
    /**
    * Specifies the public ID of the account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline#account_id DataCloudflarePipeline#account_id}
    */
    readonly accountId?: string;
    /**
    * Specifies the public ID of the pipeline.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline#pipeline_id DataCloudflarePipeline#pipeline_id}
    */
    readonly pipelineId: string;
}
export interface DataCloudflarePipelineTables {
}
export declare function dataCloudflarePipelineTablesToTerraform(struct?: DataCloudflarePipelineTables): any;
export declare function dataCloudflarePipelineTablesToHclTerraform(struct?: DataCloudflarePipelineTables): any;
export declare class DataCloudflarePipelineTablesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflarePipelineTables | undefined;
    set internalValue(value: DataCloudflarePipelineTables | undefined);
    get id(): any;
    get latest(): any;
    get name(): any;
    get type(): any;
    get version(): any;
}
export declare class DataCloudflarePipelineTablesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataCloudflarePipelineTablesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline cloudflare_pipeline}
*/
export declare class DataCloudflarePipeline extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_pipeline";
    /**
    * Generates CDKTF code for importing a DataCloudflarePipeline resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflarePipeline to import
    * @param importFromId The id of the existing DataCloudflarePipeline that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflarePipeline to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline cloudflare_pipeline} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflarePipelineConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflarePipelineConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get createdAt(): any;
    get failureReason(): any;
    get id(): any;
    get modifiedAt(): any;
    get name(): any;
    private _pipelineId?;
    get pipelineId(): string;
    set pipelineId(value: string);
    get pipelineIdInput(): string;
    get sql(): any;
    get status(): any;
    private _tables;
    get tables(): DataCloudflarePipelineTablesList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
