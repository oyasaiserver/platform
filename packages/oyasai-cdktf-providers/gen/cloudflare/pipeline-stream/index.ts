// https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_stream
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PipelineStreamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the public ID of the account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_stream#account_id PipelineStream#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_stream#format PipelineStream#format}
  */
  readonly format?: PipelineStreamFormat;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_stream#http PipelineStream#http}
  */
  readonly http?: PipelineStreamHttp;
  /**
  * Specifies the name of the Stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_stream#name PipelineStream#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_stream#schema PipelineStream#schema}
  */
  readonly schema?: PipelineStreamSchema;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_stream#worker_binding PipelineStream#worker_binding}
  */
  readonly workerBinding?: PipelineStreamWorkerBinding;
}
export interface PipelineStreamFormat {
  /**
  * Available values: "uncompressed", "snappy", "gzip", "zstd", "lz4".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_stream#compression PipelineStream#compression}
  */
  readonly compression?: string;
  /**
  * Available values: "number", "string", "bytes".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_stream#decimal_encoding PipelineStream#decimal_encoding}
  */
  readonly decimalEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_stream#row_group_bytes PipelineStream#row_group_bytes}
  */
  readonly rowGroupBytes?: number;
  /**
  * Available values: "rfc3339", "unix_millis".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_stream#timestamp_format PipelineStream#timestamp_format}
  */
  readonly timestampFormat?: string;
  /**
  * Available values: "json", "parquet".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_stream#type PipelineStream#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_stream#unstructured PipelineStream#unstructured}
  */
  readonly unstructured?: boolean | cdktf.IResolvable;
}

export function pipelineStreamFormatToTerraform(struct?: PipelineStreamFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compression: cdktf.stringToTerraform(struct!.compression),
    decimal_encoding: cdktf.stringToTerraform(struct!.decimalEncoding),
    row_group_bytes: cdktf.numberToTerraform(struct!.rowGroupBytes),
    timestamp_format: cdktf.stringToTerraform(struct!.timestampFormat),
    type: cdktf.stringToTerraform(struct!.type),
    unstructured: cdktf.booleanToTerraform(struct!.unstructured),
  }
}


export function pipelineStreamFormatToHclTerraform(struct?: PipelineStreamFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compression: {
      value: cdktf.stringToHclTerraform(struct!.compression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    decimal_encoding: {
      value: cdktf.stringToHclTerraform(struct!.decimalEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    row_group_bytes: {
      value: cdktf.numberToHclTerraform(struct!.rowGroupBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timestamp_format: {
      value: cdktf.stringToHclTerraform(struct!.timestampFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unstructured: {
      value: cdktf.booleanToHclTerraform(struct!.unstructured),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineStreamFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PipelineStreamFormat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compression !== undefined) {
      hasAnyValues = true;
      internalValueResult.compression = this._compression;
    }
    if (this._decimalEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimalEncoding = this._decimalEncoding;
    }
    if (this._rowGroupBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.rowGroupBytes = this._rowGroupBytes;
    }
    if (this._timestampFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampFormat = this._timestampFormat;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unstructured !== undefined) {
      hasAnyValues = true;
      internalValueResult.unstructured = this._unstructured;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineStreamFormat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compression = undefined;
      this._decimalEncoding = undefined;
      this._rowGroupBytes = undefined;
      this._timestampFormat = undefined;
      this._type = undefined;
      this._unstructured = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compression = value.compression;
      this._decimalEncoding = value.decimalEncoding;
      this._rowGroupBytes = value.rowGroupBytes;
      this._timestampFormat = value.timestampFormat;
      this._type = value.type;
      this._unstructured = value.unstructured;
    }
  }

  // compression - computed: false, optional: true, required: false
  private _compression?: string; 
  public get compression() {
    return this.getStringAttribute('compression');
  }
  public set compression(value: string) {
    this._compression = value;
  }
  public resetCompression() {
    this._compression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression;
  }

  // decimal_encoding - computed: false, optional: true, required: false
  private _decimalEncoding?: string; 
  public get decimalEncoding() {
    return this.getStringAttribute('decimal_encoding');
  }
  public set decimalEncoding(value: string) {
    this._decimalEncoding = value;
  }
  public resetDecimalEncoding() {
    this._decimalEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decimalEncodingInput() {
    return this._decimalEncoding;
  }

  // row_group_bytes - computed: false, optional: true, required: false
  private _rowGroupBytes?: number; 
  public get rowGroupBytes() {
    return this.getNumberAttribute('row_group_bytes');
  }
  public set rowGroupBytes(value: number) {
    this._rowGroupBytes = value;
  }
  public resetRowGroupBytes() {
    this._rowGroupBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowGroupBytesInput() {
    return this._rowGroupBytes;
  }

  // timestamp_format - computed: false, optional: true, required: false
  private _timestampFormat?: string; 
  public get timestampFormat() {
    return this.getStringAttribute('timestamp_format');
  }
  public set timestampFormat(value: string) {
    this._timestampFormat = value;
  }
  public resetTimestampFormat() {
    this._timestampFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampFormatInput() {
    return this._timestampFormat;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unstructured - computed: false, optional: true, required: false
  private _unstructured?: boolean | cdktf.IResolvable; 
  public get unstructured() {
    return this.getBooleanAttribute('unstructured');
  }
  public set unstructured(value: boolean | cdktf.IResolvable) {
    this._unstructured = value;
  }
  public resetUnstructured() {
    this._unstructured = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unstructuredInput() {
    return this._unstructured;
  }
}
export interface PipelineStreamHttpCors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_stream#origins PipelineStream#origins}
  */
  readonly origins?: string[];
}

export function pipelineStreamHttpCorsToTerraform(struct?: PipelineStreamHttpCors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    origins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.origins),
  }
}


export function pipelineStreamHttpCorsToHclTerraform(struct?: PipelineStreamHttpCors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    origins: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.origins),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineStreamHttpCorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PipelineStreamHttpCors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._origins !== undefined) {
      hasAnyValues = true;
      internalValueResult.origins = this._origins;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineStreamHttpCors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._origins = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._origins = value.origins;
    }
  }

  // origins - computed: true, optional: true, required: false
  private _origins?: string[]; 
  public get origins() {
    return this.getListAttribute('origins');
  }
  public set origins(value: string[]) {
    this._origins = value;
  }
  public resetOrigins() {
    this._origins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originsInput() {
    return this._origins;
  }
}
export interface PipelineStreamHttp {
  /**
  * Indicates that authentication is required for the HTTP endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_stream#authentication PipelineStream#authentication}
  */
  readonly authentication: boolean | cdktf.IResolvable;
  /**
  * Specifies the CORS options for the HTTP endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_stream#cors PipelineStream#cors}
  */
  readonly cors?: PipelineStreamHttpCors;
  /**
  * Indicates that the HTTP endpoint is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_stream#enabled PipelineStream#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function pipelineStreamHttpToTerraform(struct?: PipelineStreamHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: cdktf.booleanToTerraform(struct!.authentication),
    cors: pipelineStreamHttpCorsToTerraform(struct!.cors),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function pipelineStreamHttpToHclTerraform(struct?: PipelineStreamHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: cdktf.booleanToHclTerraform(struct!.authentication),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cors: {
      value: pipelineStreamHttpCorsToHclTerraform(struct!.cors),
      isBlock: true,
      type: "struct",
      storageClassType: "PipelineStreamHttpCors",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineStreamHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PipelineStreamHttp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication;
    }
    if (this._cors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cors = this._cors?.internalValue;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineStreamHttp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication = undefined;
      this._cors.internalValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication = value.authentication;
      this._cors.internalValue = value.cors;
      this._enabled = value.enabled;
    }
  }

  // authentication - computed: true, optional: false, required: true
  private _authentication?: boolean | cdktf.IResolvable; 
  public get authentication() {
    return this.getBooleanAttribute('authentication');
  }
  public set authentication(value: boolean | cdktf.IResolvable) {
    this._authentication = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

  // cors - computed: true, optional: true, required: false
  private _cors = new PipelineStreamHttpCorsOutputReference(this, "cors");
  public get cors() {
    return this._cors;
  }
  public putCors(value: PipelineStreamHttpCors) {
    this._cors.internalValue = value;
  }
  public resetCors() {
    this._cors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsInput() {
    return this._cors.internalValue;
  }

  // enabled - computed: true, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface PipelineStreamSchemaFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_stream#metadata_key PipelineStream#metadata_key}
  */
  readonly metadataKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_stream#name PipelineStream#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_stream#required PipelineStream#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_stream#sql_name PipelineStream#sql_name}
  */
  readonly sqlName?: string;
  /**
  * Available values: "int32", "int64", "float32", "float64", "bool", "string", "binary", "timestamp", "json".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_stream#type PipelineStream#type}
  */
  readonly type: string;
  /**
  * Available values: "second", "millisecond", "microsecond", "nanosecond".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_stream#unit PipelineStream#unit}
  */
  readonly unit?: string;
}

export function pipelineStreamSchemaFieldsToTerraform(struct?: PipelineStreamSchemaFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata_key: cdktf.stringToTerraform(struct!.metadataKey),
    name: cdktf.stringToTerraform(struct!.name),
    required: cdktf.booleanToTerraform(struct!.required),
    sql_name: cdktf.stringToTerraform(struct!.sqlName),
    type: cdktf.stringToTerraform(struct!.type),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function pipelineStreamSchemaFieldsToHclTerraform(struct?: PipelineStreamSchemaFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata_key: {
      value: cdktf.stringToHclTerraform(struct!.metadataKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sql_name: {
      value: cdktf.stringToHclTerraform(struct!.sqlName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineStreamSchemaFieldsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PipelineStreamSchemaFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadataKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataKey = this._metadataKey;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._sqlName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlName = this._sqlName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineStreamSchemaFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadataKey = undefined;
      this._name = undefined;
      this._required = undefined;
      this._sqlName = undefined;
      this._type = undefined;
      this._unit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadataKey = value.metadataKey;
      this._name = value.name;
      this._required = value.required;
      this._sqlName = value.sqlName;
      this._type = value.type;
      this._unit = value.unit;
    }
  }

  // metadata_key - computed: false, optional: true, required: false
  private _metadataKey?: string; 
  public get metadataKey() {
    return this.getStringAttribute('metadata_key');
  }
  public set metadataKey(value: string) {
    this._metadataKey = value;
  }
  public resetMetadataKey() {
    this._metadataKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataKeyInput() {
    return this._metadataKey;
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

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // sql_name - computed: false, optional: true, required: false
  private _sqlName?: string; 
  public get sqlName() {
    return this.getStringAttribute('sql_name');
  }
  public set sqlName(value: string) {
    this._sqlName = value;
  }
  public resetSqlName() {
    this._sqlName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlNameInput() {
    return this._sqlName;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}

export class PipelineStreamSchemaFieldsList extends cdktf.ComplexList {
  public internalValue? : PipelineStreamSchemaFields[] | cdktf.IResolvable

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
  public get(index: number): PipelineStreamSchemaFieldsOutputReference {
    return new PipelineStreamSchemaFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PipelineStreamSchemaFormat {
  /**
  * Available values: "uncompressed", "snappy", "gzip", "zstd", "lz4".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_stream#compression PipelineStream#compression}
  */
  readonly compression?: string;
  /**
  * Available values: "number", "string", "bytes".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_stream#decimal_encoding PipelineStream#decimal_encoding}
  */
  readonly decimalEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_stream#row_group_bytes PipelineStream#row_group_bytes}
  */
  readonly rowGroupBytes?: number;
  /**
  * Available values: "rfc3339", "unix_millis".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_stream#timestamp_format PipelineStream#timestamp_format}
  */
  readonly timestampFormat?: string;
  /**
  * Available values: "json", "parquet".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_stream#type PipelineStream#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_stream#unstructured PipelineStream#unstructured}
  */
  readonly unstructured?: boolean | cdktf.IResolvable;
}

export function pipelineStreamSchemaFormatToTerraform(struct?: PipelineStreamSchemaFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compression: cdktf.stringToTerraform(struct!.compression),
    decimal_encoding: cdktf.stringToTerraform(struct!.decimalEncoding),
    row_group_bytes: cdktf.numberToTerraform(struct!.rowGroupBytes),
    timestamp_format: cdktf.stringToTerraform(struct!.timestampFormat),
    type: cdktf.stringToTerraform(struct!.type),
    unstructured: cdktf.booleanToTerraform(struct!.unstructured),
  }
}


export function pipelineStreamSchemaFormatToHclTerraform(struct?: PipelineStreamSchemaFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compression: {
      value: cdktf.stringToHclTerraform(struct!.compression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    decimal_encoding: {
      value: cdktf.stringToHclTerraform(struct!.decimalEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    row_group_bytes: {
      value: cdktf.numberToHclTerraform(struct!.rowGroupBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timestamp_format: {
      value: cdktf.stringToHclTerraform(struct!.timestampFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unstructured: {
      value: cdktf.booleanToHclTerraform(struct!.unstructured),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineStreamSchemaFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PipelineStreamSchemaFormat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compression !== undefined) {
      hasAnyValues = true;
      internalValueResult.compression = this._compression;
    }
    if (this._decimalEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimalEncoding = this._decimalEncoding;
    }
    if (this._rowGroupBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.rowGroupBytes = this._rowGroupBytes;
    }
    if (this._timestampFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampFormat = this._timestampFormat;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unstructured !== undefined) {
      hasAnyValues = true;
      internalValueResult.unstructured = this._unstructured;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineStreamSchemaFormat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compression = undefined;
      this._decimalEncoding = undefined;
      this._rowGroupBytes = undefined;
      this._timestampFormat = undefined;
      this._type = undefined;
      this._unstructured = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compression = value.compression;
      this._decimalEncoding = value.decimalEncoding;
      this._rowGroupBytes = value.rowGroupBytes;
      this._timestampFormat = value.timestampFormat;
      this._type = value.type;
      this._unstructured = value.unstructured;
    }
  }

  // compression - computed: false, optional: true, required: false
  private _compression?: string; 
  public get compression() {
    return this.getStringAttribute('compression');
  }
  public set compression(value: string) {
    this._compression = value;
  }
  public resetCompression() {
    this._compression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression;
  }

  // decimal_encoding - computed: false, optional: true, required: false
  private _decimalEncoding?: string; 
  public get decimalEncoding() {
    return this.getStringAttribute('decimal_encoding');
  }
  public set decimalEncoding(value: string) {
    this._decimalEncoding = value;
  }
  public resetDecimalEncoding() {
    this._decimalEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decimalEncodingInput() {
    return this._decimalEncoding;
  }

  // row_group_bytes - computed: false, optional: true, required: false
  private _rowGroupBytes?: number; 
  public get rowGroupBytes() {
    return this.getNumberAttribute('row_group_bytes');
  }
  public set rowGroupBytes(value: number) {
    this._rowGroupBytes = value;
  }
  public resetRowGroupBytes() {
    this._rowGroupBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowGroupBytesInput() {
    return this._rowGroupBytes;
  }

  // timestamp_format - computed: false, optional: true, required: false
  private _timestampFormat?: string; 
  public get timestampFormat() {
    return this.getStringAttribute('timestamp_format');
  }
  public set timestampFormat(value: string) {
    this._timestampFormat = value;
  }
  public resetTimestampFormat() {
    this._timestampFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampFormatInput() {
    return this._timestampFormat;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unstructured - computed: false, optional: true, required: false
  private _unstructured?: boolean | cdktf.IResolvable; 
  public get unstructured() {
    return this.getBooleanAttribute('unstructured');
  }
  public set unstructured(value: boolean | cdktf.IResolvable) {
    this._unstructured = value;
  }
  public resetUnstructured() {
    this._unstructured = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unstructuredInput() {
    return this._unstructured;
  }
}
export interface PipelineStreamSchema {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_stream#fields PipelineStream#fields}
  */
  readonly fields?: PipelineStreamSchemaFields[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_stream#format PipelineStream#format}
  */
  readonly format?: PipelineStreamSchemaFormat;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_stream#inferred PipelineStream#inferred}
  */
  readonly inferred?: boolean | cdktf.IResolvable;
}

export function pipelineStreamSchemaToTerraform(struct?: PipelineStreamSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.listMapper(pipelineStreamSchemaFieldsToTerraform, false)(struct!.fields),
    format: pipelineStreamSchemaFormatToTerraform(struct!.format),
    inferred: cdktf.booleanToTerraform(struct!.inferred),
  }
}


export function pipelineStreamSchemaToHclTerraform(struct?: PipelineStreamSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: cdktf.listMapperHcl(pipelineStreamSchemaFieldsToHclTerraform, false)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineStreamSchemaFieldsList",
    },
    format: {
      value: pipelineStreamSchemaFormatToHclTerraform(struct!.format),
      isBlock: true,
      type: "struct",
      storageClassType: "PipelineStreamSchemaFormat",
    },
    inferred: {
      value: cdktf.booleanToHclTerraform(struct!.inferred),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineStreamSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PipelineStreamSchema | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    if (this._format?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format?.internalValue;
    }
    if (this._inferred !== undefined) {
      hasAnyValues = true;
      internalValueResult.inferred = this._inferred;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineStreamSchema | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fields.internalValue = undefined;
      this._format.internalValue = undefined;
      this._inferred = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fields.internalValue = value.fields;
      this._format.internalValue = value.format;
      this._inferred = value.inferred;
    }
  }

  // fields - computed: false, optional: true, required: false
  private _fields = new PipelineStreamSchemaFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: PipelineStreamSchemaFields[] | cdktf.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }

  // format - computed: false, optional: true, required: false
  private _format = new PipelineStreamSchemaFormatOutputReference(this, "format");
  public get format() {
    return this._format;
  }
  public putFormat(value: PipelineStreamSchemaFormat) {
    this._format.internalValue = value;
  }
  public resetFormat() {
    this._format.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format.internalValue;
  }

  // inferred - computed: false, optional: true, required: false
  private _inferred?: boolean | cdktf.IResolvable; 
  public get inferred() {
    return this.getBooleanAttribute('inferred');
  }
  public set inferred(value: boolean | cdktf.IResolvable) {
    this._inferred = value;
  }
  public resetInferred() {
    this._inferred = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inferredInput() {
    return this._inferred;
  }
}
export interface PipelineStreamWorkerBinding {
  /**
  * Indicates that the worker binding is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_stream#enabled PipelineStream#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function pipelineStreamWorkerBindingToTerraform(struct?: PipelineStreamWorkerBinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function pipelineStreamWorkerBindingToHclTerraform(struct?: PipelineStreamWorkerBinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineStreamWorkerBindingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PipelineStreamWorkerBinding | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineStreamWorkerBinding | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_stream cloudflare_pipeline_stream}
*/
export class PipelineStream extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_pipeline_stream";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PipelineStream resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PipelineStream to import
  * @param importFromId The id of the existing PipelineStream that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_stream#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PipelineStream to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_pipeline_stream", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_stream cloudflare_pipeline_stream} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PipelineStreamConfig
  */
  public constructor(scope: Construct, id: string, config: PipelineStreamConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_pipeline_stream',
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
    this._format.internalValue = config.format;
    this._http.internalValue = config.http;
    this._name = config.name;
    this._schema.internalValue = config.schema;
    this._workerBinding.internalValue = config.workerBinding;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // format - computed: false, optional: true, required: false
  private _format = new PipelineStreamFormatOutputReference(this, "format");
  public get format() {
    return this._format;
  }
  public putFormat(value: PipelineStreamFormat) {
    this._format.internalValue = value;
  }
  public resetFormat() {
    this._format.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format.internalValue;
  }

  // http - computed: true, optional: true, required: false
  private _http = new PipelineStreamHttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }
  public putHttp(value: PipelineStreamHttp) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // modified_at - computed: true, optional: false, required: false
  public get modifiedAt() {
    return this.getStringAttribute('modified_at');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // schema - computed: false, optional: true, required: false
  private _schema = new PipelineStreamSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: PipelineStreamSchema) {
    this._schema.internalValue = value;
  }
  public resetSchema() {
    this._schema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // worker_binding - computed: true, optional: true, required: false
  private _workerBinding = new PipelineStreamWorkerBindingOutputReference(this, "worker_binding");
  public get workerBinding() {
    return this._workerBinding;
  }
  public putWorkerBinding(value: PipelineStreamWorkerBinding) {
    this._workerBinding.internalValue = value;
  }
  public resetWorkerBinding() {
    this._workerBinding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerBindingInput() {
    return this._workerBinding.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      format: pipelineStreamFormatToTerraform(this._format.internalValue),
      http: pipelineStreamHttpToTerraform(this._http.internalValue),
      name: cdktf.stringToTerraform(this._name),
      schema: pipelineStreamSchemaToTerraform(this._schema.internalValue),
      worker_binding: pipelineStreamWorkerBindingToTerraform(this._workerBinding.internalValue),
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
      format: {
        value: pipelineStreamFormatToHclTerraform(this._format.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PipelineStreamFormat",
      },
      http: {
        value: pipelineStreamHttpToHclTerraform(this._http.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PipelineStreamHttp",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema: {
        value: pipelineStreamSchemaToHclTerraform(this._schema.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PipelineStreamSchema",
      },
      worker_binding: {
        value: pipelineStreamWorkerBindingToHclTerraform(this._workerBinding.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PipelineStreamWorkerBinding",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
