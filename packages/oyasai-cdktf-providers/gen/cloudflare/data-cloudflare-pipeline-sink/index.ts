// https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/pipeline_sink
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflarePipelineSinkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the public ID of the account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/pipeline_sink#account_id DataCloudflarePipelineSink#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/pipeline_sink#filter DataCloudflarePipelineSink#filter}
  */
  readonly filter?: DataCloudflarePipelineSinkFilter;
  /**
  * Specifies the publid ID of the sink.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/pipeline_sink#sink_id DataCloudflarePipelineSink#sink_id}
  */
  readonly sinkId?: string;
}
export interface DataCloudflarePipelineSinkConfigFileNaming {
}

export function dataCloudflarePipelineSinkConfigFileNamingToTerraform(struct?: DataCloudflarePipelineSinkConfigFileNaming): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePipelineSinkConfigFileNamingToHclTerraform(struct?: DataCloudflarePipelineSinkConfigFileNaming): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePipelineSinkConfigFileNamingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflarePipelineSinkConfigFileNaming | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePipelineSinkConfigFileNaming | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // strategy - computed: true, optional: false, required: false
  public get strategy() {
    return this.getStringAttribute('strategy');
  }

  // suffix - computed: true, optional: false, required: false
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
}
export interface DataCloudflarePipelineSinkConfigPartitioning {
}

export function dataCloudflarePipelineSinkConfigPartitioningToTerraform(struct?: DataCloudflarePipelineSinkConfigPartitioning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePipelineSinkConfigPartitioningToHclTerraform(struct?: DataCloudflarePipelineSinkConfigPartitioning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePipelineSinkConfigPartitioningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflarePipelineSinkConfigPartitioning | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePipelineSinkConfigPartitioning | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // time_pattern - computed: true, optional: false, required: false
  public get timePattern() {
    return this.getStringAttribute('time_pattern');
  }
}
export interface DataCloudflarePipelineSinkConfigRollingPolicy {
}

export function dataCloudflarePipelineSinkConfigRollingPolicyToTerraform(struct?: DataCloudflarePipelineSinkConfigRollingPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePipelineSinkConfigRollingPolicyToHclTerraform(struct?: DataCloudflarePipelineSinkConfigRollingPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePipelineSinkConfigRollingPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflarePipelineSinkConfigRollingPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePipelineSinkConfigRollingPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // file_size_bytes - computed: true, optional: false, required: false
  public get fileSizeBytes() {
    return this.getNumberAttribute('file_size_bytes');
  }

  // inactivity_seconds - computed: true, optional: false, required: false
  public get inactivitySeconds() {
    return this.getNumberAttribute('inactivity_seconds');
  }

  // interval_seconds - computed: true, optional: false, required: false
  public get intervalSeconds() {
    return this.getNumberAttribute('interval_seconds');
  }
}
export interface DataCloudflarePipelineSinkConfigA {
}

export function dataCloudflarePipelineSinkConfigAToTerraform(struct?: DataCloudflarePipelineSinkConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePipelineSinkConfigAToHclTerraform(struct?: DataCloudflarePipelineSinkConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePipelineSinkConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflarePipelineSinkConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePipelineSinkConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // file_naming - computed: true, optional: false, required: false
  private _fileNaming = new DataCloudflarePipelineSinkConfigFileNamingOutputReference(this, "file_naming");
  public get fileNaming() {
    return this._fileNaming;
  }

  // jurisdiction - computed: true, optional: false, required: false
  public get jurisdiction() {
    return this.getStringAttribute('jurisdiction');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // partitioning - computed: true, optional: false, required: false
  private _partitioning = new DataCloudflarePipelineSinkConfigPartitioningOutputReference(this, "partitioning");
  public get partitioning() {
    return this._partitioning;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // rolling_policy - computed: true, optional: false, required: false
  private _rollingPolicy = new DataCloudflarePipelineSinkConfigRollingPolicyOutputReference(this, "rolling_policy");
  public get rollingPolicy() {
    return this._rollingPolicy;
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
}
export interface DataCloudflarePipelineSinkFilter {
  /**
  * Filters sinks by name (case-insensitive substring).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/pipeline_sink#name DataCloudflarePipelineSink#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/pipeline_sink#pipeline_id DataCloudflarePipelineSink#pipeline_id}
  */
  readonly pipelineId?: string;
}

export function dataCloudflarePipelineSinkFilterToTerraform(struct?: DataCloudflarePipelineSinkFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    pipeline_id: cdktf.stringToTerraform(struct!.pipelineId),
  }
}


export function dataCloudflarePipelineSinkFilterToHclTerraform(struct?: DataCloudflarePipelineSinkFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pipeline_id: {
      value: cdktf.stringToHclTerraform(struct!.pipelineId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCloudflarePipelineSinkFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflarePipelineSinkFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pipelineId !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineId = this._pipelineId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePipelineSinkFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._pipelineId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._pipelineId = value.pipelineId;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // pipeline_id - computed: false, optional: true, required: false
  private _pipelineId?: string; 
  public get pipelineId() {
    return this.getStringAttribute('pipeline_id');
  }
  public set pipelineId(value: string) {
    this._pipelineId = value;
  }
  public resetPipelineId() {
    this._pipelineId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineIdInput() {
    return this._pipelineId;
  }
}
export interface DataCloudflarePipelineSinkFormat {
}

export function dataCloudflarePipelineSinkFormatToTerraform(struct?: DataCloudflarePipelineSinkFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePipelineSinkFormatToHclTerraform(struct?: DataCloudflarePipelineSinkFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePipelineSinkFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflarePipelineSinkFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePipelineSinkFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compression - computed: true, optional: false, required: false
  public get compression() {
    return this.getStringAttribute('compression');
  }

  // decimal_encoding - computed: true, optional: false, required: false
  public get decimalEncoding() {
    return this.getStringAttribute('decimal_encoding');
  }

  // row_group_bytes - computed: true, optional: false, required: false
  public get rowGroupBytes() {
    return this.getNumberAttribute('row_group_bytes');
  }

  // timestamp_format - computed: true, optional: false, required: false
  public get timestampFormat() {
    return this.getStringAttribute('timestamp_format');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // unstructured - computed: true, optional: false, required: false
  public get unstructured() {
    return this.getBooleanAttribute('unstructured');
  }
}
export interface DataCloudflarePipelineSinkSchemaFields {
}

export function dataCloudflarePipelineSinkSchemaFieldsToTerraform(struct?: DataCloudflarePipelineSinkSchemaFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePipelineSinkSchemaFieldsToHclTerraform(struct?: DataCloudflarePipelineSinkSchemaFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePipelineSinkSchemaFieldsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataCloudflarePipelineSinkSchemaFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePipelineSinkSchemaFields | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metadata_key - computed: true, optional: false, required: false
  public get metadataKey() {
    return this.getStringAttribute('metadata_key');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }

  // sql_name - computed: true, optional: false, required: false
  public get sqlName() {
    return this.getStringAttribute('sql_name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }
}

export class DataCloudflarePipelineSinkSchemaFieldsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataCloudflarePipelineSinkSchemaFieldsOutputReference {
    return new DataCloudflarePipelineSinkSchemaFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflarePipelineSinkSchemaFormat {
}

export function dataCloudflarePipelineSinkSchemaFormatToTerraform(struct?: DataCloudflarePipelineSinkSchemaFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePipelineSinkSchemaFormatToHclTerraform(struct?: DataCloudflarePipelineSinkSchemaFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePipelineSinkSchemaFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflarePipelineSinkSchemaFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePipelineSinkSchemaFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compression - computed: true, optional: false, required: false
  public get compression() {
    return this.getStringAttribute('compression');
  }

  // decimal_encoding - computed: true, optional: false, required: false
  public get decimalEncoding() {
    return this.getStringAttribute('decimal_encoding');
  }

  // row_group_bytes - computed: true, optional: false, required: false
  public get rowGroupBytes() {
    return this.getNumberAttribute('row_group_bytes');
  }

  // timestamp_format - computed: true, optional: false, required: false
  public get timestampFormat() {
    return this.getStringAttribute('timestamp_format');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // unstructured - computed: true, optional: false, required: false
  public get unstructured() {
    return this.getBooleanAttribute('unstructured');
  }
}
export interface DataCloudflarePipelineSinkSchema {
}

export function dataCloudflarePipelineSinkSchemaToTerraform(struct?: DataCloudflarePipelineSinkSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePipelineSinkSchemaToHclTerraform(struct?: DataCloudflarePipelineSinkSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePipelineSinkSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflarePipelineSinkSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePipelineSinkSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fields - computed: true, optional: false, required: false
  private _fields = new DataCloudflarePipelineSinkSchemaFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }

  // format - computed: true, optional: false, required: false
  private _format = new DataCloudflarePipelineSinkSchemaFormatOutputReference(this, "format");
  public get format() {
    return this._format;
  }

  // inferred - computed: true, optional: false, required: false
  public get inferred() {
    return this.getBooleanAttribute('inferred');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/pipeline_sink cloudflare_pipeline_sink}
*/
export class DataCloudflarePipelineSink extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_pipeline_sink";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflarePipelineSink resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflarePipelineSink to import
  * @param importFromId The id of the existing DataCloudflarePipelineSink that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/pipeline_sink#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflarePipelineSink to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_pipeline_sink", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/pipeline_sink cloudflare_pipeline_sink} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflarePipelineSinkConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCloudflarePipelineSinkConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_pipeline_sink',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.21.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._filter.internalValue = config.filter;
    this._sinkId = config.sinkId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // config - computed: true, optional: false, required: false
  private _config = new DataCloudflarePipelineSinkConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataCloudflarePipelineSinkFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataCloudflarePipelineSinkFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // format - computed: true, optional: false, required: false
  private _format = new DataCloudflarePipelineSinkFormatOutputReference(this, "format");
  public get format() {
    return this._format;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // modified_at - computed: true, optional: false, required: false
  public get modifiedAt() {
    return this.getStringAttribute('modified_at');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // schema - computed: true, optional: false, required: false
  private _schema = new DataCloudflarePipelineSinkSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }

  // sink_id - computed: false, optional: true, required: false
  private _sinkId?: string; 
  public get sinkId() {
    return this.getStringAttribute('sink_id');
  }
  public set sinkId(value: string) {
    this._sinkId = value;
  }
  public resetSinkId() {
    this._sinkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sinkIdInput() {
    return this._sinkId;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      filter: dataCloudflarePipelineSinkFilterToTerraform(this._filter.internalValue),
      sink_id: cdktf.stringToTerraform(this._sinkId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: dataCloudflarePipelineSinkFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataCloudflarePipelineSinkFilter",
      },
      sink_id: {
        value: cdktf.stringToHclTerraform(this._sinkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
