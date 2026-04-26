import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflarePipelineSinkConfig extends cdktf.TerraformMetaArguments {
    /**
    * Specifies the public ID of the account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline_sink#account_id DataCloudflarePipelineSink#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline_sink#filter DataCloudflarePipelineSink#filter}
    */
    readonly filter?: DataCloudflarePipelineSinkFilter;
    /**
    * Specifies the publid ID of the sink.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline_sink#sink_id DataCloudflarePipelineSink#sink_id}
    */
    readonly sinkId?: string;
}
export interface DataCloudflarePipelineSinkConfigFileNaming {
}
export declare function dataCloudflarePipelineSinkConfigFileNamingToTerraform(struct?: DataCloudflarePipelineSinkConfigFileNaming): any;
export declare function dataCloudflarePipelineSinkConfigFileNamingToHclTerraform(struct?: DataCloudflarePipelineSinkConfigFileNaming): any;
export declare class DataCloudflarePipelineSinkConfigFileNamingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePipelineSinkConfigFileNaming | undefined;
    set internalValue(value: DataCloudflarePipelineSinkConfigFileNaming | undefined);
    get prefix(): any;
    get strategy(): any;
    get suffix(): any;
}
export interface DataCloudflarePipelineSinkConfigPartitioning {
}
export declare function dataCloudflarePipelineSinkConfigPartitioningToTerraform(struct?: DataCloudflarePipelineSinkConfigPartitioning): any;
export declare function dataCloudflarePipelineSinkConfigPartitioningToHclTerraform(struct?: DataCloudflarePipelineSinkConfigPartitioning): any;
export declare class DataCloudflarePipelineSinkConfigPartitioningOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePipelineSinkConfigPartitioning | undefined;
    set internalValue(value: DataCloudflarePipelineSinkConfigPartitioning | undefined);
    get timePattern(): any;
}
export interface DataCloudflarePipelineSinkConfigRollingPolicy {
}
export declare function dataCloudflarePipelineSinkConfigRollingPolicyToTerraform(struct?: DataCloudflarePipelineSinkConfigRollingPolicy): any;
export declare function dataCloudflarePipelineSinkConfigRollingPolicyToHclTerraform(struct?: DataCloudflarePipelineSinkConfigRollingPolicy): any;
export declare class DataCloudflarePipelineSinkConfigRollingPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePipelineSinkConfigRollingPolicy | undefined;
    set internalValue(value: DataCloudflarePipelineSinkConfigRollingPolicy | undefined);
    get fileSizeBytes(): any;
    get inactivitySeconds(): any;
    get intervalSeconds(): any;
}
export interface DataCloudflarePipelineSinkConfigA {
}
export declare function dataCloudflarePipelineSinkConfigAToTerraform(struct?: DataCloudflarePipelineSinkConfigA): any;
export declare function dataCloudflarePipelineSinkConfigAToHclTerraform(struct?: DataCloudflarePipelineSinkConfigA): any;
export declare class DataCloudflarePipelineSinkConfigAOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePipelineSinkConfigA | undefined;
    set internalValue(value: DataCloudflarePipelineSinkConfigA | undefined);
    get accountId(): any;
    get bucket(): any;
    private _fileNaming;
    get fileNaming(): DataCloudflarePipelineSinkConfigFileNamingOutputReference;
    get jurisdiction(): any;
    get namespace(): any;
    private _partitioning;
    get partitioning(): DataCloudflarePipelineSinkConfigPartitioningOutputReference;
    get path(): any;
    private _rollingPolicy;
    get rollingPolicy(): DataCloudflarePipelineSinkConfigRollingPolicyOutputReference;
    get tableName(): any;
}
export interface DataCloudflarePipelineSinkFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline_sink#pipeline_id DataCloudflarePipelineSink#pipeline_id}
    */
    readonly pipelineId?: string;
}
export declare function dataCloudflarePipelineSinkFilterToTerraform(struct?: DataCloudflarePipelineSinkFilter | cdktf.IResolvable): any;
export declare function dataCloudflarePipelineSinkFilterToHclTerraform(struct?: DataCloudflarePipelineSinkFilter | cdktf.IResolvable): any;
export declare class DataCloudflarePipelineSinkFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePipelineSinkFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflarePipelineSinkFilter | cdktf.IResolvable | undefined);
    private _pipelineId?;
    get pipelineId(): string;
    set pipelineId(value: string);
    resetPipelineId(): void;
    get pipelineIdInput(): string;
}
export interface DataCloudflarePipelineSinkFormat {
}
export declare function dataCloudflarePipelineSinkFormatToTerraform(struct?: DataCloudflarePipelineSinkFormat): any;
export declare function dataCloudflarePipelineSinkFormatToHclTerraform(struct?: DataCloudflarePipelineSinkFormat): any;
export declare class DataCloudflarePipelineSinkFormatOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePipelineSinkFormat | undefined;
    set internalValue(value: DataCloudflarePipelineSinkFormat | undefined);
    get compression(): any;
    get decimalEncoding(): any;
    get rowGroupBytes(): any;
    get timestampFormat(): any;
    get type(): any;
    get unstructured(): any;
}
export interface DataCloudflarePipelineSinkSchemaFields {
}
export declare function dataCloudflarePipelineSinkSchemaFieldsToTerraform(struct?: DataCloudflarePipelineSinkSchemaFields): any;
export declare function dataCloudflarePipelineSinkSchemaFieldsToHclTerraform(struct?: DataCloudflarePipelineSinkSchemaFields): any;
export declare class DataCloudflarePipelineSinkSchemaFieldsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflarePipelineSinkSchemaFields | undefined;
    set internalValue(value: DataCloudflarePipelineSinkSchemaFields | undefined);
    get metadataKey(): any;
    get name(): any;
    get required(): any;
    get sqlName(): any;
    get type(): any;
    get unit(): any;
}
export declare class DataCloudflarePipelineSinkSchemaFieldsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflarePipelineSinkSchemaFieldsOutputReference;
}
export interface DataCloudflarePipelineSinkSchemaFormat {
}
export declare function dataCloudflarePipelineSinkSchemaFormatToTerraform(struct?: DataCloudflarePipelineSinkSchemaFormat): any;
export declare function dataCloudflarePipelineSinkSchemaFormatToHclTerraform(struct?: DataCloudflarePipelineSinkSchemaFormat): any;
export declare class DataCloudflarePipelineSinkSchemaFormatOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePipelineSinkSchemaFormat | undefined;
    set internalValue(value: DataCloudflarePipelineSinkSchemaFormat | undefined);
    get compression(): any;
    get decimalEncoding(): any;
    get rowGroupBytes(): any;
    get timestampFormat(): any;
    get type(): any;
    get unstructured(): any;
}
export interface DataCloudflarePipelineSinkSchema {
}
export declare function dataCloudflarePipelineSinkSchemaToTerraform(struct?: DataCloudflarePipelineSinkSchema): any;
export declare function dataCloudflarePipelineSinkSchemaToHclTerraform(struct?: DataCloudflarePipelineSinkSchema): any;
export declare class DataCloudflarePipelineSinkSchemaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePipelineSinkSchema | undefined;
    set internalValue(value: DataCloudflarePipelineSinkSchema | undefined);
    private _fields;
    get fields(): DataCloudflarePipelineSinkSchemaFieldsList;
    private _format;
    get format(): DataCloudflarePipelineSinkSchemaFormatOutputReference;
    get inferred(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline_sink cloudflare_pipeline_sink}
*/
export declare class DataCloudflarePipelineSink extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_pipeline_sink";
    /**
    * Generates CDKTF code for importing a DataCloudflarePipelineSink resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflarePipelineSink to import
    * @param importFromId The id of the existing DataCloudflarePipelineSink that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline_sink#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflarePipelineSink to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline_sink cloudflare_pipeline_sink} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflarePipelineSinkConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflarePipelineSinkConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _config;
    get config(): DataCloudflarePipelineSinkConfigAOutputReference;
    get createdAt(): any;
    private _filter;
    get filter(): DataCloudflarePipelineSinkFilterOutputReference;
    putFilter(value: DataCloudflarePipelineSinkFilter): void;
    resetFilter(): void;
    get filterInput(): any;
    private _format;
    get format(): DataCloudflarePipelineSinkFormatOutputReference;
    get id(): any;
    get modifiedAt(): any;
    get name(): any;
    private _schema;
    get schema(): DataCloudflarePipelineSinkSchemaOutputReference;
    private _sinkId?;
    get sinkId(): string;
    set sinkId(value: string);
    resetSinkId(): void;
    get sinkIdInput(): string;
    get type(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
