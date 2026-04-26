import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface PipelineStreamConfig extends cdktf.TerraformMetaArguments {
    /**
    * Specifies the public ID of the account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_stream#account_id PipelineStream#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_stream#format PipelineStream#format}
    */
    readonly format?: PipelineStreamFormat;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_stream#http PipelineStream#http}
    */
    readonly http?: PipelineStreamHttp;
    /**
    * Specifies the name of the Stream.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_stream#name PipelineStream#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_stream#schema PipelineStream#schema}
    */
    readonly schema?: PipelineStreamSchema;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_stream#worker_binding PipelineStream#worker_binding}
    */
    readonly workerBinding?: PipelineStreamWorkerBinding;
}
export interface PipelineStreamFormat {
    /**
    * Available values: "uncompressed", "snappy", "gzip", "zstd", "lz4".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_stream#compression PipelineStream#compression}
    */
    readonly compression?: string;
    /**
    * Available values: "number", "string", "bytes".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_stream#decimal_encoding PipelineStream#decimal_encoding}
    */
    readonly decimalEncoding?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_stream#row_group_bytes PipelineStream#row_group_bytes}
    */
    readonly rowGroupBytes?: number;
    /**
    * Available values: "rfc3339", "unix_millis".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_stream#timestamp_format PipelineStream#timestamp_format}
    */
    readonly timestampFormat?: string;
    /**
    * Available values: "json", "parquet".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_stream#type PipelineStream#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_stream#unstructured PipelineStream#unstructured}
    */
    readonly unstructured?: boolean | cdktf.IResolvable;
}
export declare function pipelineStreamFormatToTerraform(struct?: PipelineStreamFormat | cdktf.IResolvable): any;
export declare function pipelineStreamFormatToHclTerraform(struct?: PipelineStreamFormat | cdktf.IResolvable): any;
export declare class PipelineStreamFormatOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PipelineStreamFormat | cdktf.IResolvable | undefined;
    set internalValue(value: PipelineStreamFormat | cdktf.IResolvable | undefined);
    private _compression?;
    get compression(): string;
    set compression(value: string);
    resetCompression(): void;
    get compressionInput(): string;
    private _decimalEncoding?;
    get decimalEncoding(): string;
    set decimalEncoding(value: string);
    resetDecimalEncoding(): void;
    get decimalEncodingInput(): string;
    private _rowGroupBytes?;
    get rowGroupBytes(): number;
    set rowGroupBytes(value: number);
    resetRowGroupBytes(): void;
    get rowGroupBytesInput(): number;
    private _timestampFormat?;
    get timestampFormat(): string;
    set timestampFormat(value: string);
    resetTimestampFormat(): void;
    get timestampFormatInput(): string;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    private _unstructured?;
    get unstructured(): boolean | cdktf.IResolvable;
    set unstructured(value: boolean | cdktf.IResolvable);
    resetUnstructured(): void;
    get unstructuredInput(): any;
}
export interface PipelineStreamHttpCors {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_stream#origins PipelineStream#origins}
    */
    readonly origins?: string[];
}
export declare function pipelineStreamHttpCorsToTerraform(struct?: PipelineStreamHttpCors | cdktf.IResolvable): any;
export declare function pipelineStreamHttpCorsToHclTerraform(struct?: PipelineStreamHttpCors | cdktf.IResolvable): any;
export declare class PipelineStreamHttpCorsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PipelineStreamHttpCors | cdktf.IResolvable | undefined;
    set internalValue(value: PipelineStreamHttpCors | cdktf.IResolvable | undefined);
    private _origins?;
    get origins(): string[];
    set origins(value: string[]);
    resetOrigins(): void;
    get originsInput(): string[];
}
export interface PipelineStreamHttp {
    /**
    * Indicates that authentication is required for the HTTP endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_stream#authentication PipelineStream#authentication}
    */
    readonly authentication: boolean | cdktf.IResolvable;
    /**
    * Specifies the CORS options for the HTTP endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_stream#cors PipelineStream#cors}
    */
    readonly cors?: PipelineStreamHttpCors;
    /**
    * Indicates that the HTTP endpoint is enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_stream#enabled PipelineStream#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
}
export declare function pipelineStreamHttpToTerraform(struct?: PipelineStreamHttp | cdktf.IResolvable): any;
export declare function pipelineStreamHttpToHclTerraform(struct?: PipelineStreamHttp | cdktf.IResolvable): any;
export declare class PipelineStreamHttpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PipelineStreamHttp | cdktf.IResolvable | undefined;
    set internalValue(value: PipelineStreamHttp | cdktf.IResolvable | undefined);
    private _authentication?;
    get authentication(): boolean | cdktf.IResolvable;
    set authentication(value: boolean | cdktf.IResolvable);
    get authenticationInput(): any;
    private _cors;
    get cors(): PipelineStreamHttpCorsOutputReference;
    putCors(value: PipelineStreamHttpCors): void;
    resetCors(): void;
    get corsInput(): any;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): any;
}
export interface PipelineStreamSchemaFields {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_stream#metadata_key PipelineStream#metadata_key}
    */
    readonly metadataKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_stream#name PipelineStream#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_stream#required PipelineStream#required}
    */
    readonly required?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_stream#sql_name PipelineStream#sql_name}
    */
    readonly sqlName?: string;
    /**
    * Available values: "int32", "int64", "float32", "float64", "bool", "string", "binary", "timestamp", "json".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_stream#type PipelineStream#type}
    */
    readonly type: string;
    /**
    * Available values: "second", "millisecond", "microsecond", "nanosecond".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_stream#unit PipelineStream#unit}
    */
    readonly unit?: string;
}
export declare function pipelineStreamSchemaFieldsToTerraform(struct?: PipelineStreamSchemaFields | cdktf.IResolvable): any;
export declare function pipelineStreamSchemaFieldsToHclTerraform(struct?: PipelineStreamSchemaFields | cdktf.IResolvable): any;
export declare class PipelineStreamSchemaFieldsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): PipelineStreamSchemaFields | cdktf.IResolvable | undefined;
    set internalValue(value: PipelineStreamSchemaFields | cdktf.IResolvable | undefined);
    private _metadataKey?;
    get metadataKey(): string;
    set metadataKey(value: string);
    resetMetadataKey(): void;
    get metadataKeyInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _required?;
    get required(): boolean | cdktf.IResolvable;
    set required(value: boolean | cdktf.IResolvable);
    resetRequired(): void;
    get requiredInput(): any;
    private _sqlName?;
    get sqlName(): string;
    set sqlName(value: string);
    resetSqlName(): void;
    get sqlNameInput(): string;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    private _unit?;
    get unit(): string;
    set unit(value: string);
    resetUnit(): void;
    get unitInput(): string;
}
export declare class PipelineStreamSchemaFieldsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: PipelineStreamSchemaFields[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): PipelineStreamSchemaFieldsOutputReference;
}
export interface PipelineStreamSchemaFormat {
    /**
    * Available values: "uncompressed", "snappy", "gzip", "zstd", "lz4".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_stream#compression PipelineStream#compression}
    */
    readonly compression?: string;
    /**
    * Available values: "number", "string", "bytes".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_stream#decimal_encoding PipelineStream#decimal_encoding}
    */
    readonly decimalEncoding?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_stream#row_group_bytes PipelineStream#row_group_bytes}
    */
    readonly rowGroupBytes?: number;
    /**
    * Available values: "rfc3339", "unix_millis".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_stream#timestamp_format PipelineStream#timestamp_format}
    */
    readonly timestampFormat?: string;
    /**
    * Available values: "json", "parquet".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_stream#type PipelineStream#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_stream#unstructured PipelineStream#unstructured}
    */
    readonly unstructured?: boolean | cdktf.IResolvable;
}
export declare function pipelineStreamSchemaFormatToTerraform(struct?: PipelineStreamSchemaFormat | cdktf.IResolvable): any;
export declare function pipelineStreamSchemaFormatToHclTerraform(struct?: PipelineStreamSchemaFormat | cdktf.IResolvable): any;
export declare class PipelineStreamSchemaFormatOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PipelineStreamSchemaFormat | cdktf.IResolvable | undefined;
    set internalValue(value: PipelineStreamSchemaFormat | cdktf.IResolvable | undefined);
    private _compression?;
    get compression(): string;
    set compression(value: string);
    resetCompression(): void;
    get compressionInput(): string;
    private _decimalEncoding?;
    get decimalEncoding(): string;
    set decimalEncoding(value: string);
    resetDecimalEncoding(): void;
    get decimalEncodingInput(): string;
    private _rowGroupBytes?;
    get rowGroupBytes(): number;
    set rowGroupBytes(value: number);
    resetRowGroupBytes(): void;
    get rowGroupBytesInput(): number;
    private _timestampFormat?;
    get timestampFormat(): string;
    set timestampFormat(value: string);
    resetTimestampFormat(): void;
    get timestampFormatInput(): string;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    private _unstructured?;
    get unstructured(): boolean | cdktf.IResolvable;
    set unstructured(value: boolean | cdktf.IResolvable);
    resetUnstructured(): void;
    get unstructuredInput(): any;
}
export interface PipelineStreamSchema {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_stream#fields PipelineStream#fields}
    */
    readonly fields?: PipelineStreamSchemaFields[] | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_stream#format PipelineStream#format}
    */
    readonly format?: PipelineStreamSchemaFormat;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_stream#inferred PipelineStream#inferred}
    */
    readonly inferred?: boolean | cdktf.IResolvable;
}
export declare function pipelineStreamSchemaToTerraform(struct?: PipelineStreamSchema | cdktf.IResolvable): any;
export declare function pipelineStreamSchemaToHclTerraform(struct?: PipelineStreamSchema | cdktf.IResolvable): any;
export declare class PipelineStreamSchemaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PipelineStreamSchema | cdktf.IResolvable | undefined;
    set internalValue(value: PipelineStreamSchema | cdktf.IResolvable | undefined);
    private _fields;
    get fields(): PipelineStreamSchemaFieldsList;
    putFields(value: PipelineStreamSchemaFields[] | cdktf.IResolvable): void;
    resetFields(): void;
    get fieldsInput(): any;
    private _format;
    get format(): PipelineStreamSchemaFormatOutputReference;
    putFormat(value: PipelineStreamSchemaFormat): void;
    resetFormat(): void;
    get formatInput(): any;
    private _inferred?;
    get inferred(): boolean | cdktf.IResolvable;
    set inferred(value: boolean | cdktf.IResolvable);
    resetInferred(): void;
    get inferredInput(): any;
}
export interface PipelineStreamWorkerBinding {
    /**
    * Indicates that the worker binding is enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_stream#enabled PipelineStream#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
}
export declare function pipelineStreamWorkerBindingToTerraform(struct?: PipelineStreamWorkerBinding | cdktf.IResolvable): any;
export declare function pipelineStreamWorkerBindingToHclTerraform(struct?: PipelineStreamWorkerBinding | cdktf.IResolvable): any;
export declare class PipelineStreamWorkerBindingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PipelineStreamWorkerBinding | cdktf.IResolvable | undefined;
    set internalValue(value: PipelineStreamWorkerBinding | cdktf.IResolvable | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_stream cloudflare_pipeline_stream}
*/
export declare class PipelineStream extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_pipeline_stream";
    /**
    * Generates CDKTF code for importing a PipelineStream resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the PipelineStream to import
    * @param importFromId The id of the existing PipelineStream that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_stream#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the PipelineStream to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_stream cloudflare_pipeline_stream} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PipelineStreamConfig
    */
    constructor(scope: Construct, id: string, config: PipelineStreamConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get createdAt(): any;
    get endpoint(): any;
    private _format;
    get format(): PipelineStreamFormatOutputReference;
    putFormat(value: PipelineStreamFormat): void;
    resetFormat(): void;
    get formatInput(): any;
    private _http;
    get http(): PipelineStreamHttpOutputReference;
    putHttp(value: PipelineStreamHttp): void;
    resetHttp(): void;
    get httpInput(): any;
    get id(): any;
    get modifiedAt(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _schema;
    get schema(): PipelineStreamSchemaOutputReference;
    putSchema(value: PipelineStreamSchema): void;
    resetSchema(): void;
    get schemaInput(): any;
    get version(): any;
    private _workerBinding;
    get workerBinding(): PipelineStreamWorkerBindingOutputReference;
    putWorkerBinding(value: PipelineStreamWorkerBinding): void;
    resetWorkerBinding(): void;
    get workerBindingInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
