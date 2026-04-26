import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface PipelineSinkConfig extends cdktf.TerraformMetaArguments {
    /**
    * Specifies the public ID of the account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_sink#account_id PipelineSink#account_id}
    */
    readonly accountId?: string;
    /**
    * Defines the configuration of the R2 Sink.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_sink#config PipelineSink#config}
    */
    readonly config?: PipelineSinkConfigA;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_sink#format PipelineSink#format}
    */
    readonly format?: PipelineSinkFormat;
    /**
    * Defines the name of the Sink.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_sink#name PipelineSink#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_sink#schema PipelineSink#schema}
    */
    readonly schema?: PipelineSinkSchema;
    /**
    * Specifies the type of sink.
    * Available values: "r2", "r2_data_catalog".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_sink#type PipelineSink#type}
    */
    readonly type: string;
}
export interface PipelineSinkConfigCredentials {
    /**
    * Cloudflare Account ID for the bucket
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_sink#access_key_id PipelineSink#access_key_id}
    */
    readonly accessKeyId: string;
    /**
    * Cloudflare Account ID for the bucket
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_sink#secret_access_key PipelineSink#secret_access_key}
    */
    readonly secretAccessKey: string;
}
export declare function pipelineSinkConfigCredentialsToTerraform(struct?: PipelineSinkConfigCredentials | cdktf.IResolvable): any;
export declare function pipelineSinkConfigCredentialsToHclTerraform(struct?: PipelineSinkConfigCredentials | cdktf.IResolvable): any;
export declare class PipelineSinkConfigCredentialsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PipelineSinkConfigCredentials | cdktf.IResolvable | undefined;
    set internalValue(value: PipelineSinkConfigCredentials | cdktf.IResolvable | undefined);
    private _accessKeyId?;
    get accessKeyId(): string;
    set accessKeyId(value: string);
    get accessKeyIdInput(): string;
    private _secretAccessKey?;
    get secretAccessKey(): string;
    set secretAccessKey(value: string);
    get secretAccessKeyInput(): string;
}
export interface PipelineSinkConfigFileNaming {
    /**
    * The prefix to use in file name. i.e prefix-<uuid>.parquet
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_sink#prefix PipelineSink#prefix}
    */
    readonly prefix?: string;
    /**
    * Filename generation strategy.
    * Available values: "serial", "uuid", "uuid_v7", "ulid".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_sink#strategy PipelineSink#strategy}
    */
    readonly strategy?: string;
    /**
    * This will overwrite the default file suffix. i.e .parquet, use with caution
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_sink#suffix PipelineSink#suffix}
    */
    readonly suffix?: string;
}
export declare function pipelineSinkConfigFileNamingToTerraform(struct?: PipelineSinkConfigFileNaming | cdktf.IResolvable): any;
export declare function pipelineSinkConfigFileNamingToHclTerraform(struct?: PipelineSinkConfigFileNaming | cdktf.IResolvable): any;
export declare class PipelineSinkConfigFileNamingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PipelineSinkConfigFileNaming | cdktf.IResolvable | undefined;
    set internalValue(value: PipelineSinkConfigFileNaming | cdktf.IResolvable | undefined);
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string;
    private _strategy?;
    get strategy(): string;
    set strategy(value: string);
    resetStrategy(): void;
    get strategyInput(): string;
    private _suffix?;
    get suffix(): string;
    set suffix(value: string);
    resetSuffix(): void;
    get suffixInput(): string;
}
export interface PipelineSinkConfigPartitioning {
    /**
    * The pattern of the date string
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_sink#time_pattern PipelineSink#time_pattern}
    */
    readonly timePattern?: string;
}
export declare function pipelineSinkConfigPartitioningToTerraform(struct?: PipelineSinkConfigPartitioning | cdktf.IResolvable): any;
export declare function pipelineSinkConfigPartitioningToHclTerraform(struct?: PipelineSinkConfigPartitioning | cdktf.IResolvable): any;
export declare class PipelineSinkConfigPartitioningOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PipelineSinkConfigPartitioning | cdktf.IResolvable | undefined;
    set internalValue(value: PipelineSinkConfigPartitioning | cdktf.IResolvable | undefined);
    private _timePattern?;
    get timePattern(): string;
    set timePattern(value: string);
    resetTimePattern(): void;
    get timePatternInput(): string;
}
export interface PipelineSinkConfigRollingPolicy {
    /**
    * Files will be rolled after reaching this number of bytes
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_sink#file_size_bytes PipelineSink#file_size_bytes}
    */
    readonly fileSizeBytes?: number;
    /**
    * Number of seconds of inactivity to wait before rolling over to a new file
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_sink#inactivity_seconds PipelineSink#inactivity_seconds}
    */
    readonly inactivitySeconds?: number;
    /**
    * Number of seconds to wait before rolling over to a new file
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_sink#interval_seconds PipelineSink#interval_seconds}
    */
    readonly intervalSeconds?: number;
}
export declare function pipelineSinkConfigRollingPolicyToTerraform(struct?: PipelineSinkConfigRollingPolicy | cdktf.IResolvable): any;
export declare function pipelineSinkConfigRollingPolicyToHclTerraform(struct?: PipelineSinkConfigRollingPolicy | cdktf.IResolvable): any;
export declare class PipelineSinkConfigRollingPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PipelineSinkConfigRollingPolicy | cdktf.IResolvable | undefined;
    set internalValue(value: PipelineSinkConfigRollingPolicy | cdktf.IResolvable | undefined);
    private _fileSizeBytes?;
    get fileSizeBytes(): number;
    set fileSizeBytes(value: number);
    resetFileSizeBytes(): void;
    get fileSizeBytesInput(): number;
    private _inactivitySeconds?;
    get inactivitySeconds(): number;
    set inactivitySeconds(value: number);
    resetInactivitySeconds(): void;
    get inactivitySecondsInput(): number;
    private _intervalSeconds?;
    get intervalSeconds(): number;
    set intervalSeconds(value: number);
    resetIntervalSeconds(): void;
    get intervalSecondsInput(): number;
}
export interface PipelineSinkConfigA {
    /**
    * Cloudflare Account ID for the bucket
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_sink#account_id PipelineSink#account_id}
    */
    readonly accountId: string;
    /**
    * R2 Bucket to write to
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_sink#bucket PipelineSink#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_sink#credentials PipelineSink#credentials}
    */
    readonly credentials?: PipelineSinkConfigCredentials;
    /**
    * Controls filename prefix/suffix and strategy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_sink#file_naming PipelineSink#file_naming}
    */
    readonly fileNaming?: PipelineSinkConfigFileNaming;
    /**
    * Jurisdiction this bucket is hosted in
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_sink#jurisdiction PipelineSink#jurisdiction}
    */
    readonly jurisdiction?: string;
    /**
    * Table namespace
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_sink#namespace PipelineSink#namespace}
    */
    readonly namespace?: string;
    /**
    * Data-layout partitioning for sinks.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_sink#partitioning PipelineSink#partitioning}
    */
    readonly partitioning?: PipelineSinkConfigPartitioning;
    /**
    * Subpath within the bucket to write to
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_sink#path PipelineSink#path}
    */
    readonly path?: string;
    /**
    * Rolling policy for file sinks (when & why to close a file and open a new one).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_sink#rolling_policy PipelineSink#rolling_policy}
    */
    readonly rollingPolicy?: PipelineSinkConfigRollingPolicy;
    /**
    * Table name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_sink#table_name PipelineSink#table_name}
    */
    readonly tableName?: string;
    /**
    * Authentication token
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_sink#token PipelineSink#token}
    */
    readonly token?: string;
}
export declare function pipelineSinkConfigAToTerraform(struct?: PipelineSinkConfigA | cdktf.IResolvable): any;
export declare function pipelineSinkConfigAToHclTerraform(struct?: PipelineSinkConfigA | cdktf.IResolvable): any;
export declare class PipelineSinkConfigAOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PipelineSinkConfigA | cdktf.IResolvable | undefined;
    set internalValue(value: PipelineSinkConfigA | cdktf.IResolvable | undefined);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    get accountIdInput(): string;
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string;
    private _credentials;
    get credentials(): PipelineSinkConfigCredentialsOutputReference;
    putCredentials(value: PipelineSinkConfigCredentials): void;
    resetCredentials(): void;
    get credentialsInput(): any;
    private _fileNaming;
    get fileNaming(): PipelineSinkConfigFileNamingOutputReference;
    putFileNaming(value: PipelineSinkConfigFileNaming): void;
    resetFileNaming(): void;
    get fileNamingInput(): any;
    private _jurisdiction?;
    get jurisdiction(): string;
    set jurisdiction(value: string);
    resetJurisdiction(): void;
    get jurisdictionInput(): string;
    private _namespace?;
    get namespace(): string;
    set namespace(value: string);
    resetNamespace(): void;
    get namespaceInput(): string;
    private _partitioning;
    get partitioning(): PipelineSinkConfigPartitioningOutputReference;
    putPartitioning(value: PipelineSinkConfigPartitioning): void;
    resetPartitioning(): void;
    get partitioningInput(): any;
    private _path?;
    get path(): string;
    set path(value: string);
    resetPath(): void;
    get pathInput(): string;
    private _rollingPolicy;
    get rollingPolicy(): PipelineSinkConfigRollingPolicyOutputReference;
    putRollingPolicy(value: PipelineSinkConfigRollingPolicy): void;
    resetRollingPolicy(): void;
    get rollingPolicyInput(): any;
    private _tableName?;
    get tableName(): string;
    set tableName(value: string);
    resetTableName(): void;
    get tableNameInput(): string;
    private _token?;
    get token(): string;
    set token(value: string);
    resetToken(): void;
    get tokenInput(): string;
}
export interface PipelineSinkFormat {
    /**
    * Available values: "uncompressed", "snappy", "gzip", "zstd", "lz4".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_sink#compression PipelineSink#compression}
    */
    readonly compression?: string;
    /**
    * Available values: "number", "string", "bytes".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_sink#decimal_encoding PipelineSink#decimal_encoding}
    */
    readonly decimalEncoding?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_sink#row_group_bytes PipelineSink#row_group_bytes}
    */
    readonly rowGroupBytes?: number;
    /**
    * Available values: "rfc3339", "unix_millis".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_sink#timestamp_format PipelineSink#timestamp_format}
    */
    readonly timestampFormat?: string;
    /**
    * Available values: "json", "parquet".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_sink#type PipelineSink#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_sink#unstructured PipelineSink#unstructured}
    */
    readonly unstructured?: boolean | cdktf.IResolvable;
}
export declare function pipelineSinkFormatToTerraform(struct?: PipelineSinkFormat | cdktf.IResolvable): any;
export declare function pipelineSinkFormatToHclTerraform(struct?: PipelineSinkFormat | cdktf.IResolvable): any;
export declare class PipelineSinkFormatOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PipelineSinkFormat | cdktf.IResolvable | undefined;
    set internalValue(value: PipelineSinkFormat | cdktf.IResolvable | undefined);
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
export interface PipelineSinkSchemaFields {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_sink#metadata_key PipelineSink#metadata_key}
    */
    readonly metadataKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_sink#name PipelineSink#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_sink#required PipelineSink#required}
    */
    readonly required?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_sink#sql_name PipelineSink#sql_name}
    */
    readonly sqlName?: string;
    /**
    * Available values: "int32", "int64", "float32", "float64", "bool", "string", "binary", "timestamp", "json".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_sink#type PipelineSink#type}
    */
    readonly type: string;
    /**
    * Available values: "second", "millisecond", "microsecond", "nanosecond".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_sink#unit PipelineSink#unit}
    */
    readonly unit?: string;
}
export declare function pipelineSinkSchemaFieldsToTerraform(struct?: PipelineSinkSchemaFields | cdktf.IResolvable): any;
export declare function pipelineSinkSchemaFieldsToHclTerraform(struct?: PipelineSinkSchemaFields | cdktf.IResolvable): any;
export declare class PipelineSinkSchemaFieldsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): PipelineSinkSchemaFields | cdktf.IResolvable | undefined;
    set internalValue(value: PipelineSinkSchemaFields | cdktf.IResolvable | undefined);
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
export declare class PipelineSinkSchemaFieldsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: PipelineSinkSchemaFields[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): PipelineSinkSchemaFieldsOutputReference;
}
export interface PipelineSinkSchemaFormat {
    /**
    * Available values: "uncompressed", "snappy", "gzip", "zstd", "lz4".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_sink#compression PipelineSink#compression}
    */
    readonly compression?: string;
    /**
    * Available values: "number", "string", "bytes".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_sink#decimal_encoding PipelineSink#decimal_encoding}
    */
    readonly decimalEncoding?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_sink#row_group_bytes PipelineSink#row_group_bytes}
    */
    readonly rowGroupBytes?: number;
    /**
    * Available values: "rfc3339", "unix_millis".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_sink#timestamp_format PipelineSink#timestamp_format}
    */
    readonly timestampFormat?: string;
    /**
    * Available values: "json", "parquet".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_sink#type PipelineSink#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_sink#unstructured PipelineSink#unstructured}
    */
    readonly unstructured?: boolean | cdktf.IResolvable;
}
export declare function pipelineSinkSchemaFormatToTerraform(struct?: PipelineSinkSchemaFormat | cdktf.IResolvable): any;
export declare function pipelineSinkSchemaFormatToHclTerraform(struct?: PipelineSinkSchemaFormat | cdktf.IResolvable): any;
export declare class PipelineSinkSchemaFormatOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PipelineSinkSchemaFormat | cdktf.IResolvable | undefined;
    set internalValue(value: PipelineSinkSchemaFormat | cdktf.IResolvable | undefined);
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
export interface PipelineSinkSchema {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_sink#fields PipelineSink#fields}
    */
    readonly fields?: PipelineSinkSchemaFields[] | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_sink#format PipelineSink#format}
    */
    readonly format?: PipelineSinkSchemaFormat;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_sink#inferred PipelineSink#inferred}
    */
    readonly inferred?: boolean | cdktf.IResolvable;
}
export declare function pipelineSinkSchemaToTerraform(struct?: PipelineSinkSchema | cdktf.IResolvable): any;
export declare function pipelineSinkSchemaToHclTerraform(struct?: PipelineSinkSchema | cdktf.IResolvable): any;
export declare class PipelineSinkSchemaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PipelineSinkSchema | cdktf.IResolvable | undefined;
    set internalValue(value: PipelineSinkSchema | cdktf.IResolvable | undefined);
    private _fields;
    get fields(): PipelineSinkSchemaFieldsList;
    putFields(value: PipelineSinkSchemaFields[] | cdktf.IResolvable): void;
    resetFields(): void;
    get fieldsInput(): any;
    private _format;
    get format(): PipelineSinkSchemaFormatOutputReference;
    putFormat(value: PipelineSinkSchemaFormat): void;
    resetFormat(): void;
    get formatInput(): any;
    private _inferred?;
    get inferred(): boolean | cdktf.IResolvable;
    set inferred(value: boolean | cdktf.IResolvable);
    resetInferred(): void;
    get inferredInput(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_sink cloudflare_pipeline_sink}
*/
export declare class PipelineSink extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_pipeline_sink";
    /**
    * Generates CDKTF code for importing a PipelineSink resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the PipelineSink to import
    * @param importFromId The id of the existing PipelineSink that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_sink#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the PipelineSink to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_sink cloudflare_pipeline_sink} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PipelineSinkConfig
    */
    constructor(scope: Construct, id: string, config: PipelineSinkConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _config;
    get config(): PipelineSinkConfigAOutputReference;
    putConfig(value: PipelineSinkConfigA): void;
    resetConfig(): void;
    get configInput(): any;
    get createdAt(): any;
    private _format;
    get format(): PipelineSinkFormatOutputReference;
    putFormat(value: PipelineSinkFormat): void;
    resetFormat(): void;
    get formatInput(): any;
    get id(): any;
    get modifiedAt(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _schema;
    get schema(): PipelineSinkSchemaOutputReference;
    putSchema(value: PipelineSinkSchema): void;
    resetSchema(): void;
    get schemaInput(): any;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
