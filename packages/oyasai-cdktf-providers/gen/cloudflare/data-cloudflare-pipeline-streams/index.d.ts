import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflarePipelineStreamsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Specifies the public ID of the account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline_streams#account_id DataCloudflarePipelineStreams#account_id}
    */
    readonly accountId?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline_streams#max_items DataCloudflarePipelineStreams#max_items}
    */
    readonly maxItems?: number;
    /**
    * Specifies the public ID of the pipeline.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline_streams#pipeline_id DataCloudflarePipelineStreams#pipeline_id}
    */
    readonly pipelineId?: string;
}
export interface DataCloudflarePipelineStreamsResultFormat {
}
export declare function dataCloudflarePipelineStreamsResultFormatToTerraform(struct?: DataCloudflarePipelineStreamsResultFormat): any;
export declare function dataCloudflarePipelineStreamsResultFormatToHclTerraform(struct?: DataCloudflarePipelineStreamsResultFormat): any;
export declare class DataCloudflarePipelineStreamsResultFormatOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePipelineStreamsResultFormat | undefined;
    set internalValue(value: DataCloudflarePipelineStreamsResultFormat | undefined);
    get compression(): any;
    get decimalEncoding(): any;
    get rowGroupBytes(): any;
    get timestampFormat(): any;
    get type(): any;
    get unstructured(): any;
}
export interface DataCloudflarePipelineStreamsResultHttpCors {
}
export declare function dataCloudflarePipelineStreamsResultHttpCorsToTerraform(struct?: DataCloudflarePipelineStreamsResultHttpCors): any;
export declare function dataCloudflarePipelineStreamsResultHttpCorsToHclTerraform(struct?: DataCloudflarePipelineStreamsResultHttpCors): any;
export declare class DataCloudflarePipelineStreamsResultHttpCorsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePipelineStreamsResultHttpCors | undefined;
    set internalValue(value: DataCloudflarePipelineStreamsResultHttpCors | undefined);
    get origins(): any;
}
export interface DataCloudflarePipelineStreamsResultHttp {
}
export declare function dataCloudflarePipelineStreamsResultHttpToTerraform(struct?: DataCloudflarePipelineStreamsResultHttp): any;
export declare function dataCloudflarePipelineStreamsResultHttpToHclTerraform(struct?: DataCloudflarePipelineStreamsResultHttp): any;
export declare class DataCloudflarePipelineStreamsResultHttpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePipelineStreamsResultHttp | undefined;
    set internalValue(value: DataCloudflarePipelineStreamsResultHttp | undefined);
    get authentication(): any;
    private _cors;
    get cors(): DataCloudflarePipelineStreamsResultHttpCorsOutputReference;
    get enabled(): any;
}
export interface DataCloudflarePipelineStreamsResultSchemaFields {
}
export declare function dataCloudflarePipelineStreamsResultSchemaFieldsToTerraform(struct?: DataCloudflarePipelineStreamsResultSchemaFields): any;
export declare function dataCloudflarePipelineStreamsResultSchemaFieldsToHclTerraform(struct?: DataCloudflarePipelineStreamsResultSchemaFields): any;
export declare class DataCloudflarePipelineStreamsResultSchemaFieldsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflarePipelineStreamsResultSchemaFields | undefined;
    set internalValue(value: DataCloudflarePipelineStreamsResultSchemaFields | undefined);
    get metadataKey(): any;
    get name(): any;
    get required(): any;
    get sqlName(): any;
    get type(): any;
    get unit(): any;
}
export declare class DataCloudflarePipelineStreamsResultSchemaFieldsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflarePipelineStreamsResultSchemaFieldsOutputReference;
}
export interface DataCloudflarePipelineStreamsResultSchemaFormat {
}
export declare function dataCloudflarePipelineStreamsResultSchemaFormatToTerraform(struct?: DataCloudflarePipelineStreamsResultSchemaFormat): any;
export declare function dataCloudflarePipelineStreamsResultSchemaFormatToHclTerraform(struct?: DataCloudflarePipelineStreamsResultSchemaFormat): any;
export declare class DataCloudflarePipelineStreamsResultSchemaFormatOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePipelineStreamsResultSchemaFormat | undefined;
    set internalValue(value: DataCloudflarePipelineStreamsResultSchemaFormat | undefined);
    get compression(): any;
    get decimalEncoding(): any;
    get rowGroupBytes(): any;
    get timestampFormat(): any;
    get type(): any;
    get unstructured(): any;
}
export interface DataCloudflarePipelineStreamsResultSchema {
}
export declare function dataCloudflarePipelineStreamsResultSchemaToTerraform(struct?: DataCloudflarePipelineStreamsResultSchema): any;
export declare function dataCloudflarePipelineStreamsResultSchemaToHclTerraform(struct?: DataCloudflarePipelineStreamsResultSchema): any;
export declare class DataCloudflarePipelineStreamsResultSchemaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePipelineStreamsResultSchema | undefined;
    set internalValue(value: DataCloudflarePipelineStreamsResultSchema | undefined);
    private _fields;
    get fields(): DataCloudflarePipelineStreamsResultSchemaFieldsList;
    private _format;
    get format(): DataCloudflarePipelineStreamsResultSchemaFormatOutputReference;
    get inferred(): any;
}
export interface DataCloudflarePipelineStreamsResultWorkerBinding {
}
export declare function dataCloudflarePipelineStreamsResultWorkerBindingToTerraform(struct?: DataCloudflarePipelineStreamsResultWorkerBinding): any;
export declare function dataCloudflarePipelineStreamsResultWorkerBindingToHclTerraform(struct?: DataCloudflarePipelineStreamsResultWorkerBinding): any;
export declare class DataCloudflarePipelineStreamsResultWorkerBindingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePipelineStreamsResultWorkerBinding | undefined;
    set internalValue(value: DataCloudflarePipelineStreamsResultWorkerBinding | undefined);
    get enabled(): any;
}
export interface DataCloudflarePipelineStreamsResult {
}
export declare function dataCloudflarePipelineStreamsResultToTerraform(struct?: DataCloudflarePipelineStreamsResult): any;
export declare function dataCloudflarePipelineStreamsResultToHclTerraform(struct?: DataCloudflarePipelineStreamsResult): any;
export declare class DataCloudflarePipelineStreamsResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflarePipelineStreamsResult | undefined;
    set internalValue(value: DataCloudflarePipelineStreamsResult | undefined);
    get createdAt(): any;
    get endpoint(): any;
    private _format;
    get format(): DataCloudflarePipelineStreamsResultFormatOutputReference;
    private _http;
    get http(): DataCloudflarePipelineStreamsResultHttpOutputReference;
    get id(): any;
    get modifiedAt(): any;
    get name(): any;
    private _schema;
    get schema(): DataCloudflarePipelineStreamsResultSchemaOutputReference;
    get version(): any;
    private _workerBinding;
    get workerBinding(): DataCloudflarePipelineStreamsResultWorkerBindingOutputReference;
}
export declare class DataCloudflarePipelineStreamsResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflarePipelineStreamsResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline_streams cloudflare_pipeline_streams}
*/
export declare class DataCloudflarePipelineStreams extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_pipeline_streams";
    /**
    * Generates CDKTF code for importing a DataCloudflarePipelineStreams resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflarePipelineStreams to import
    * @param importFromId The id of the existing DataCloudflarePipelineStreams that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline_streams#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflarePipelineStreams to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline_streams cloudflare_pipeline_streams} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflarePipelineStreamsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflarePipelineStreamsConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _maxItems?;
    get maxItems(): number;
    set maxItems(value: number);
    resetMaxItems(): void;
    get maxItemsInput(): number;
    private _pipelineId?;
    get pipelineId(): string;
    set pipelineId(value: string);
    resetPipelineId(): void;
    get pipelineIdInput(): string;
    private _result;
    get result(): DataCloudflarePipelineStreamsResultList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
