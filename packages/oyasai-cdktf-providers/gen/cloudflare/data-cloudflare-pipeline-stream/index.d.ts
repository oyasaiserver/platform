import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflarePipelineStreamConfig extends cdktf.TerraformMetaArguments {
    /**
    * Specifies the public ID of the account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline_stream#account_id DataCloudflarePipelineStream#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline_stream#filter DataCloudflarePipelineStream#filter}
    */
    readonly filter?: DataCloudflarePipelineStreamFilter;
    /**
    * Specifies the public ID of the stream.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline_stream#stream_id DataCloudflarePipelineStream#stream_id}
    */
    readonly streamId?: string;
}
export interface DataCloudflarePipelineStreamFilter {
    /**
    * Specifies the public ID of the pipeline.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline_stream#pipeline_id DataCloudflarePipelineStream#pipeline_id}
    */
    readonly pipelineId?: string;
}
export declare function dataCloudflarePipelineStreamFilterToTerraform(struct?: DataCloudflarePipelineStreamFilter | cdktf.IResolvable): any;
export declare function dataCloudflarePipelineStreamFilterToHclTerraform(struct?: DataCloudflarePipelineStreamFilter | cdktf.IResolvable): any;
export declare class DataCloudflarePipelineStreamFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePipelineStreamFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflarePipelineStreamFilter | cdktf.IResolvable | undefined);
    private _pipelineId?;
    get pipelineId(): string;
    set pipelineId(value: string);
    resetPipelineId(): void;
    get pipelineIdInput(): string;
}
export interface DataCloudflarePipelineStreamFormat {
}
export declare function dataCloudflarePipelineStreamFormatToTerraform(struct?: DataCloudflarePipelineStreamFormat): any;
export declare function dataCloudflarePipelineStreamFormatToHclTerraform(struct?: DataCloudflarePipelineStreamFormat): any;
export declare class DataCloudflarePipelineStreamFormatOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePipelineStreamFormat | undefined;
    set internalValue(value: DataCloudflarePipelineStreamFormat | undefined);
    get compression(): any;
    get decimalEncoding(): any;
    get rowGroupBytes(): any;
    get timestampFormat(): any;
    get type(): any;
    get unstructured(): any;
}
export interface DataCloudflarePipelineStreamHttpCors {
}
export declare function dataCloudflarePipelineStreamHttpCorsToTerraform(struct?: DataCloudflarePipelineStreamHttpCors): any;
export declare function dataCloudflarePipelineStreamHttpCorsToHclTerraform(struct?: DataCloudflarePipelineStreamHttpCors): any;
export declare class DataCloudflarePipelineStreamHttpCorsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePipelineStreamHttpCors | undefined;
    set internalValue(value: DataCloudflarePipelineStreamHttpCors | undefined);
    get origins(): any;
}
export interface DataCloudflarePipelineStreamHttp {
}
export declare function dataCloudflarePipelineStreamHttpToTerraform(struct?: DataCloudflarePipelineStreamHttp): any;
export declare function dataCloudflarePipelineStreamHttpToHclTerraform(struct?: DataCloudflarePipelineStreamHttp): any;
export declare class DataCloudflarePipelineStreamHttpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePipelineStreamHttp | undefined;
    set internalValue(value: DataCloudflarePipelineStreamHttp | undefined);
    get authentication(): any;
    private _cors;
    get cors(): DataCloudflarePipelineStreamHttpCorsOutputReference;
    get enabled(): any;
}
export interface DataCloudflarePipelineStreamSchemaFields {
}
export declare function dataCloudflarePipelineStreamSchemaFieldsToTerraform(struct?: DataCloudflarePipelineStreamSchemaFields): any;
export declare function dataCloudflarePipelineStreamSchemaFieldsToHclTerraform(struct?: DataCloudflarePipelineStreamSchemaFields): any;
export declare class DataCloudflarePipelineStreamSchemaFieldsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflarePipelineStreamSchemaFields | undefined;
    set internalValue(value: DataCloudflarePipelineStreamSchemaFields | undefined);
    get metadataKey(): any;
    get name(): any;
    get required(): any;
    get sqlName(): any;
    get type(): any;
    get unit(): any;
}
export declare class DataCloudflarePipelineStreamSchemaFieldsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflarePipelineStreamSchemaFieldsOutputReference;
}
export interface DataCloudflarePipelineStreamSchemaFormat {
}
export declare function dataCloudflarePipelineStreamSchemaFormatToTerraform(struct?: DataCloudflarePipelineStreamSchemaFormat): any;
export declare function dataCloudflarePipelineStreamSchemaFormatToHclTerraform(struct?: DataCloudflarePipelineStreamSchemaFormat): any;
export declare class DataCloudflarePipelineStreamSchemaFormatOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePipelineStreamSchemaFormat | undefined;
    set internalValue(value: DataCloudflarePipelineStreamSchemaFormat | undefined);
    get compression(): any;
    get decimalEncoding(): any;
    get rowGroupBytes(): any;
    get timestampFormat(): any;
    get type(): any;
    get unstructured(): any;
}
export interface DataCloudflarePipelineStreamSchema {
}
export declare function dataCloudflarePipelineStreamSchemaToTerraform(struct?: DataCloudflarePipelineStreamSchema): any;
export declare function dataCloudflarePipelineStreamSchemaToHclTerraform(struct?: DataCloudflarePipelineStreamSchema): any;
export declare class DataCloudflarePipelineStreamSchemaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePipelineStreamSchema | undefined;
    set internalValue(value: DataCloudflarePipelineStreamSchema | undefined);
    private _fields;
    get fields(): DataCloudflarePipelineStreamSchemaFieldsList;
    private _format;
    get format(): DataCloudflarePipelineStreamSchemaFormatOutputReference;
    get inferred(): any;
}
export interface DataCloudflarePipelineStreamWorkerBinding {
}
export declare function dataCloudflarePipelineStreamWorkerBindingToTerraform(struct?: DataCloudflarePipelineStreamWorkerBinding): any;
export declare function dataCloudflarePipelineStreamWorkerBindingToHclTerraform(struct?: DataCloudflarePipelineStreamWorkerBinding): any;
export declare class DataCloudflarePipelineStreamWorkerBindingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePipelineStreamWorkerBinding | undefined;
    set internalValue(value: DataCloudflarePipelineStreamWorkerBinding | undefined);
    get enabled(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline_stream cloudflare_pipeline_stream}
*/
export declare class DataCloudflarePipelineStream extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_pipeline_stream";
    /**
    * Generates CDKTF code for importing a DataCloudflarePipelineStream resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflarePipelineStream to import
    * @param importFromId The id of the existing DataCloudflarePipelineStream that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline_stream#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflarePipelineStream to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline_stream cloudflare_pipeline_stream} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflarePipelineStreamConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflarePipelineStreamConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get createdAt(): any;
    get endpoint(): any;
    private _filter;
    get filter(): DataCloudflarePipelineStreamFilterOutputReference;
    putFilter(value: DataCloudflarePipelineStreamFilter): void;
    resetFilter(): void;
    get filterInput(): any;
    private _format;
    get format(): DataCloudflarePipelineStreamFormatOutputReference;
    private _http;
    get http(): DataCloudflarePipelineStreamHttpOutputReference;
    get id(): any;
    get modifiedAt(): any;
    get name(): any;
    private _schema;
    get schema(): DataCloudflarePipelineStreamSchemaOutputReference;
    private _streamId?;
    get streamId(): string;
    set streamId(value: string);
    resetStreamId(): void;
    get streamIdInput(): string;
    get version(): any;
    private _workerBinding;
    get workerBinding(): DataCloudflarePipelineStreamWorkerBindingOutputReference;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
