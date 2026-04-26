import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflarePipelineSinksConfig extends cdktf.TerraformMetaArguments {
    /**
    * Specifies the public ID of the account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline_sinks#account_id DataCloudflarePipelineSinks#account_id}
    */
    readonly accountId?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline_sinks#max_items DataCloudflarePipelineSinks#max_items}
    */
    readonly maxItems?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline_sinks#pipeline_id DataCloudflarePipelineSinks#pipeline_id}
    */
    readonly pipelineId?: string;
}
export interface DataCloudflarePipelineSinksResultConfigFileNaming {
}
export declare function dataCloudflarePipelineSinksResultConfigFileNamingToTerraform(struct?: DataCloudflarePipelineSinksResultConfigFileNaming): any;
export declare function dataCloudflarePipelineSinksResultConfigFileNamingToHclTerraform(struct?: DataCloudflarePipelineSinksResultConfigFileNaming): any;
export declare class DataCloudflarePipelineSinksResultConfigFileNamingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePipelineSinksResultConfigFileNaming | undefined;
    set internalValue(value: DataCloudflarePipelineSinksResultConfigFileNaming | undefined);
    get prefix(): any;
    get strategy(): any;
    get suffix(): any;
}
export interface DataCloudflarePipelineSinksResultConfigPartitioning {
}
export declare function dataCloudflarePipelineSinksResultConfigPartitioningToTerraform(struct?: DataCloudflarePipelineSinksResultConfigPartitioning): any;
export declare function dataCloudflarePipelineSinksResultConfigPartitioningToHclTerraform(struct?: DataCloudflarePipelineSinksResultConfigPartitioning): any;
export declare class DataCloudflarePipelineSinksResultConfigPartitioningOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePipelineSinksResultConfigPartitioning | undefined;
    set internalValue(value: DataCloudflarePipelineSinksResultConfigPartitioning | undefined);
    get timePattern(): any;
}
export interface DataCloudflarePipelineSinksResultConfigRollingPolicy {
}
export declare function dataCloudflarePipelineSinksResultConfigRollingPolicyToTerraform(struct?: DataCloudflarePipelineSinksResultConfigRollingPolicy): any;
export declare function dataCloudflarePipelineSinksResultConfigRollingPolicyToHclTerraform(struct?: DataCloudflarePipelineSinksResultConfigRollingPolicy): any;
export declare class DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePipelineSinksResultConfigRollingPolicy | undefined;
    set internalValue(value: DataCloudflarePipelineSinksResultConfigRollingPolicy | undefined);
    get fileSizeBytes(): any;
    get inactivitySeconds(): any;
    get intervalSeconds(): any;
}
export interface DataCloudflarePipelineSinksResultConfig {
}
export declare function dataCloudflarePipelineSinksResultConfigToTerraform(struct?: DataCloudflarePipelineSinksResultConfig): any;
export declare function dataCloudflarePipelineSinksResultConfigToHclTerraform(struct?: DataCloudflarePipelineSinksResultConfig): any;
export declare class DataCloudflarePipelineSinksResultConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePipelineSinksResultConfig | undefined;
    set internalValue(value: DataCloudflarePipelineSinksResultConfig | undefined);
    get accountId(): any;
    get bucket(): any;
    private _fileNaming;
    get fileNaming(): DataCloudflarePipelineSinksResultConfigFileNamingOutputReference;
    get jurisdiction(): any;
    get namespace(): any;
    private _partitioning;
    get partitioning(): DataCloudflarePipelineSinksResultConfigPartitioningOutputReference;
    get path(): any;
    private _rollingPolicy;
    get rollingPolicy(): DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference;
    get tableName(): any;
}
export interface DataCloudflarePipelineSinksResultFormat {
}
export declare function dataCloudflarePipelineSinksResultFormatToTerraform(struct?: DataCloudflarePipelineSinksResultFormat): any;
export declare function dataCloudflarePipelineSinksResultFormatToHclTerraform(struct?: DataCloudflarePipelineSinksResultFormat): any;
export declare class DataCloudflarePipelineSinksResultFormatOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePipelineSinksResultFormat | undefined;
    set internalValue(value: DataCloudflarePipelineSinksResultFormat | undefined);
    get compression(): any;
    get decimalEncoding(): any;
    get rowGroupBytes(): any;
    get timestampFormat(): any;
    get type(): any;
    get unstructured(): any;
}
export interface DataCloudflarePipelineSinksResultSchemaFields {
}
export declare function dataCloudflarePipelineSinksResultSchemaFieldsToTerraform(struct?: DataCloudflarePipelineSinksResultSchemaFields): any;
export declare function dataCloudflarePipelineSinksResultSchemaFieldsToHclTerraform(struct?: DataCloudflarePipelineSinksResultSchemaFields): any;
export declare class DataCloudflarePipelineSinksResultSchemaFieldsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflarePipelineSinksResultSchemaFields | undefined;
    set internalValue(value: DataCloudflarePipelineSinksResultSchemaFields | undefined);
    get metadataKey(): any;
    get name(): any;
    get required(): any;
    get sqlName(): any;
    get type(): any;
    get unit(): any;
}
export declare class DataCloudflarePipelineSinksResultSchemaFieldsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflarePipelineSinksResultSchemaFieldsOutputReference;
}
export interface DataCloudflarePipelineSinksResultSchemaFormat {
}
export declare function dataCloudflarePipelineSinksResultSchemaFormatToTerraform(struct?: DataCloudflarePipelineSinksResultSchemaFormat): any;
export declare function dataCloudflarePipelineSinksResultSchemaFormatToHclTerraform(struct?: DataCloudflarePipelineSinksResultSchemaFormat): any;
export declare class DataCloudflarePipelineSinksResultSchemaFormatOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePipelineSinksResultSchemaFormat | undefined;
    set internalValue(value: DataCloudflarePipelineSinksResultSchemaFormat | undefined);
    get compression(): any;
    get decimalEncoding(): any;
    get rowGroupBytes(): any;
    get timestampFormat(): any;
    get type(): any;
    get unstructured(): any;
}
export interface DataCloudflarePipelineSinksResultSchema {
}
export declare function dataCloudflarePipelineSinksResultSchemaToTerraform(struct?: DataCloudflarePipelineSinksResultSchema): any;
export declare function dataCloudflarePipelineSinksResultSchemaToHclTerraform(struct?: DataCloudflarePipelineSinksResultSchema): any;
export declare class DataCloudflarePipelineSinksResultSchemaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePipelineSinksResultSchema | undefined;
    set internalValue(value: DataCloudflarePipelineSinksResultSchema | undefined);
    private _fields;
    get fields(): DataCloudflarePipelineSinksResultSchemaFieldsList;
    private _format;
    get format(): DataCloudflarePipelineSinksResultSchemaFormatOutputReference;
    get inferred(): any;
}
export interface DataCloudflarePipelineSinksResult {
}
export declare function dataCloudflarePipelineSinksResultToTerraform(struct?: DataCloudflarePipelineSinksResult): any;
export declare function dataCloudflarePipelineSinksResultToHclTerraform(struct?: DataCloudflarePipelineSinksResult): any;
export declare class DataCloudflarePipelineSinksResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflarePipelineSinksResult | undefined;
    set internalValue(value: DataCloudflarePipelineSinksResult | undefined);
    private _config;
    get config(): DataCloudflarePipelineSinksResultConfigOutputReference;
    get createdAt(): any;
    private _format;
    get format(): DataCloudflarePipelineSinksResultFormatOutputReference;
    get id(): any;
    get modifiedAt(): any;
    get name(): any;
    private _schema;
    get schema(): DataCloudflarePipelineSinksResultSchemaOutputReference;
    get type(): any;
}
export declare class DataCloudflarePipelineSinksResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflarePipelineSinksResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline_sinks cloudflare_pipeline_sinks}
*/
export declare class DataCloudflarePipelineSinks extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_pipeline_sinks";
    /**
    * Generates CDKTF code for importing a DataCloudflarePipelineSinks resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflarePipelineSinks to import
    * @param importFromId The id of the existing DataCloudflarePipelineSinks that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline_sinks#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflarePipelineSinks to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline_sinks cloudflare_pipeline_sinks} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflarePipelineSinksConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflarePipelineSinksConfig);
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
    get result(): DataCloudflarePipelineSinksResultList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
