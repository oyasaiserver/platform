// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_stream
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function pipelineStreamFormatToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        compression: cdktf.stringToTerraform(struct.compression),
        decimal_encoding: cdktf.stringToTerraform(struct.decimalEncoding),
        row_group_bytes: cdktf.numberToTerraform(struct.rowGroupBytes),
        timestamp_format: cdktf.stringToTerraform(struct.timestampFormat),
        type: cdktf.stringToTerraform(struct.type),
        unstructured: cdktf.booleanToTerraform(struct.unstructured),
    };
}
export function pipelineStreamFormatToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        compression: {
            value: cdktf.stringToHclTerraform(struct.compression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        decimal_encoding: {
            value: cdktf.stringToHclTerraform(struct.decimalEncoding),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        row_group_bytes: {
            value: cdktf.numberToHclTerraform(struct.rowGroupBytes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        timestamp_format: {
            value: cdktf.stringToHclTerraform(struct.timestampFormat),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktf.stringToHclTerraform(struct.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        unstructured: {
            value: cdktf.booleanToHclTerraform(struct.unstructured),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class PipelineStreamFormatOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
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
    set internalValue(value) {
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
    _compression;
    get compression() {
        return this.getStringAttribute('compression');
    }
    set compression(value) {
        this._compression = value;
    }
    resetCompression() {
        this._compression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get compressionInput() {
        return this._compression;
    }
    // decimal_encoding - computed: false, optional: true, required: false
    _decimalEncoding;
    get decimalEncoding() {
        return this.getStringAttribute('decimal_encoding');
    }
    set decimalEncoding(value) {
        this._decimalEncoding = value;
    }
    resetDecimalEncoding() {
        this._decimalEncoding = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get decimalEncodingInput() {
        return this._decimalEncoding;
    }
    // row_group_bytes - computed: false, optional: true, required: false
    _rowGroupBytes;
    get rowGroupBytes() {
        return this.getNumberAttribute('row_group_bytes');
    }
    set rowGroupBytes(value) {
        this._rowGroupBytes = value;
    }
    resetRowGroupBytes() {
        this._rowGroupBytes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get rowGroupBytesInput() {
        return this._rowGroupBytes;
    }
    // timestamp_format - computed: false, optional: true, required: false
    _timestampFormat;
    get timestampFormat() {
        return this.getStringAttribute('timestamp_format');
    }
    set timestampFormat(value) {
        this._timestampFormat = value;
    }
    resetTimestampFormat() {
        this._timestampFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get timestampFormatInput() {
        return this._timestampFormat;
    }
    // type - computed: false, optional: false, required: true
    _type;
    get type() {
        return this.getStringAttribute('type');
    }
    set type(value) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    get typeInput() {
        return this._type;
    }
    // unstructured - computed: false, optional: true, required: false
    _unstructured;
    get unstructured() {
        return this.getBooleanAttribute('unstructured');
    }
    set unstructured(value) {
        this._unstructured = value;
    }
    resetUnstructured() {
        this._unstructured = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get unstructuredInput() {
        return this._unstructured;
    }
}
export function pipelineStreamHttpCorsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        origins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.origins),
    };
}
export function pipelineStreamHttpCorsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        origins: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.origins),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class PipelineStreamHttpCorsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._origins !== undefined) {
            hasAnyValues = true;
            internalValueResult.origins = this._origins;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
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
    _origins;
    get origins() {
        return this.getListAttribute('origins');
    }
    set origins(value) {
        this._origins = value;
    }
    resetOrigins() {
        this._origins = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get originsInput() {
        return this._origins;
    }
}
export function pipelineStreamHttpToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        authentication: cdktf.booleanToTerraform(struct.authentication),
        cors: pipelineStreamHttpCorsToTerraform(struct.cors),
        enabled: cdktf.booleanToTerraform(struct.enabled),
    };
}
export function pipelineStreamHttpToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        authentication: {
            value: cdktf.booleanToHclTerraform(struct.authentication),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        cors: {
            value: pipelineStreamHttpCorsToHclTerraform(struct.cors),
            isBlock: true,
            type: "struct",
            storageClassType: "PipelineStreamHttpCors",
        },
        enabled: {
            value: cdktf.booleanToHclTerraform(struct.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class PipelineStreamHttpOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
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
    set internalValue(value) {
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
    _authentication;
    get authentication() {
        return this.getBooleanAttribute('authentication');
    }
    set authentication(value) {
        this._authentication = value;
    }
    // Temporarily expose input value. Use with caution.
    get authenticationInput() {
        return this._authentication;
    }
    // cors - computed: true, optional: true, required: false
    _cors = new PipelineStreamHttpCorsOutputReference(this, "cors");
    get cors() {
        return this._cors;
    }
    putCors(value) {
        this._cors.internalValue = value;
    }
    resetCors() {
        this._cors.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get corsInput() {
        return this._cors.internalValue;
    }
    // enabled - computed: true, optional: false, required: true
    _enabled;
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    set enabled(value) {
        this._enabled = value;
    }
    // Temporarily expose input value. Use with caution.
    get enabledInput() {
        return this._enabled;
    }
}
export function pipelineStreamSchemaFieldsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        metadata_key: cdktf.stringToTerraform(struct.metadataKey),
        name: cdktf.stringToTerraform(struct.name),
        required: cdktf.booleanToTerraform(struct.required),
        sql_name: cdktf.stringToTerraform(struct.sqlName),
        type: cdktf.stringToTerraform(struct.type),
        unit: cdktf.stringToTerraform(struct.unit),
    };
}
export function pipelineStreamSchemaFieldsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        metadata_key: {
            value: cdktf.stringToHclTerraform(struct.metadataKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        required: {
            value: cdktf.booleanToHclTerraform(struct.required),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        sql_name: {
            value: cdktf.stringToHclTerraform(struct.sqlName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktf.stringToHclTerraform(struct.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        unit: {
            value: cdktf.stringToHclTerraform(struct.unit),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class PipelineStreamSchemaFieldsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
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
    set internalValue(value) {
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
    _metadataKey;
    get metadataKey() {
        return this.getStringAttribute('metadata_key');
    }
    set metadataKey(value) {
        this._metadataKey = value;
    }
    resetMetadataKey() {
        this._metadataKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get metadataKeyInput() {
        return this._metadataKey;
    }
    // name - computed: false, optional: true, required: false
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    // required - computed: false, optional: true, required: false
    _required;
    get required() {
        return this.getBooleanAttribute('required');
    }
    set required(value) {
        this._required = value;
    }
    resetRequired() {
        this._required = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requiredInput() {
        return this._required;
    }
    // sql_name - computed: false, optional: true, required: false
    _sqlName;
    get sqlName() {
        return this.getStringAttribute('sql_name');
    }
    set sqlName(value) {
        this._sqlName = value;
    }
    resetSqlName() {
        this._sqlName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sqlNameInput() {
        return this._sqlName;
    }
    // type - computed: false, optional: false, required: true
    _type;
    get type() {
        return this.getStringAttribute('type');
    }
    set type(value) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    get typeInput() {
        return this._type;
    }
    // unit - computed: false, optional: true, required: false
    _unit;
    get unit() {
        return this.getStringAttribute('unit');
    }
    set unit(value) {
        this._unit = value;
    }
    resetUnit() {
        this._unit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get unitInput() {
        return this._unit;
    }
}
export class PipelineStreamSchemaFieldsList extends cdktf.ComplexList {
    terraformResource;
    terraformAttribute;
    wrapsSet;
    internalValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, wrapsSet) {
        super(terraformResource, terraformAttribute, wrapsSet);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
        this.wrapsSet = wrapsSet;
    }
    /**
    * @param index the index of the item to return
    */
    get(index) {
        return new PipelineStreamSchemaFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function pipelineStreamSchemaFormatToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        compression: cdktf.stringToTerraform(struct.compression),
        decimal_encoding: cdktf.stringToTerraform(struct.decimalEncoding),
        row_group_bytes: cdktf.numberToTerraform(struct.rowGroupBytes),
        timestamp_format: cdktf.stringToTerraform(struct.timestampFormat),
        type: cdktf.stringToTerraform(struct.type),
        unstructured: cdktf.booleanToTerraform(struct.unstructured),
    };
}
export function pipelineStreamSchemaFormatToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        compression: {
            value: cdktf.stringToHclTerraform(struct.compression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        decimal_encoding: {
            value: cdktf.stringToHclTerraform(struct.decimalEncoding),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        row_group_bytes: {
            value: cdktf.numberToHclTerraform(struct.rowGroupBytes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        timestamp_format: {
            value: cdktf.stringToHclTerraform(struct.timestampFormat),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktf.stringToHclTerraform(struct.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        unstructured: {
            value: cdktf.booleanToHclTerraform(struct.unstructured),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class PipelineStreamSchemaFormatOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
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
    set internalValue(value) {
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
    _compression;
    get compression() {
        return this.getStringAttribute('compression');
    }
    set compression(value) {
        this._compression = value;
    }
    resetCompression() {
        this._compression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get compressionInput() {
        return this._compression;
    }
    // decimal_encoding - computed: false, optional: true, required: false
    _decimalEncoding;
    get decimalEncoding() {
        return this.getStringAttribute('decimal_encoding');
    }
    set decimalEncoding(value) {
        this._decimalEncoding = value;
    }
    resetDecimalEncoding() {
        this._decimalEncoding = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get decimalEncodingInput() {
        return this._decimalEncoding;
    }
    // row_group_bytes - computed: false, optional: true, required: false
    _rowGroupBytes;
    get rowGroupBytes() {
        return this.getNumberAttribute('row_group_bytes');
    }
    set rowGroupBytes(value) {
        this._rowGroupBytes = value;
    }
    resetRowGroupBytes() {
        this._rowGroupBytes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get rowGroupBytesInput() {
        return this._rowGroupBytes;
    }
    // timestamp_format - computed: false, optional: true, required: false
    _timestampFormat;
    get timestampFormat() {
        return this.getStringAttribute('timestamp_format');
    }
    set timestampFormat(value) {
        this._timestampFormat = value;
    }
    resetTimestampFormat() {
        this._timestampFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get timestampFormatInput() {
        return this._timestampFormat;
    }
    // type - computed: false, optional: false, required: true
    _type;
    get type() {
        return this.getStringAttribute('type');
    }
    set type(value) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    get typeInput() {
        return this._type;
    }
    // unstructured - computed: false, optional: true, required: false
    _unstructured;
    get unstructured() {
        return this.getBooleanAttribute('unstructured');
    }
    set unstructured(value) {
        this._unstructured = value;
    }
    resetUnstructured() {
        this._unstructured = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get unstructuredInput() {
        return this._unstructured;
    }
}
export function pipelineStreamSchemaToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        fields: cdktf.listMapper(pipelineStreamSchemaFieldsToTerraform, false)(struct.fields),
        format: pipelineStreamSchemaFormatToTerraform(struct.format),
        inferred: cdktf.booleanToTerraform(struct.inferred),
    };
}
export function pipelineStreamSchemaToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        fields: {
            value: cdktf.listMapperHcl(pipelineStreamSchemaFieldsToHclTerraform, false)(struct.fields),
            isBlock: true,
            type: "list",
            storageClassType: "PipelineStreamSchemaFieldsList",
        },
        format: {
            value: pipelineStreamSchemaFormatToHclTerraform(struct.format),
            isBlock: true,
            type: "struct",
            storageClassType: "PipelineStreamSchemaFormat",
        },
        inferred: {
            value: cdktf.booleanToHclTerraform(struct.inferred),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class PipelineStreamSchemaOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
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
    set internalValue(value) {
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
    _fields = new PipelineStreamSchemaFieldsList(this, "fields", false);
    get fields() {
        return this._fields;
    }
    putFields(value) {
        this._fields.internalValue = value;
    }
    resetFields() {
        this._fields.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldsInput() {
        return this._fields.internalValue;
    }
    // format - computed: false, optional: true, required: false
    _format = new PipelineStreamSchemaFormatOutputReference(this, "format");
    get format() {
        return this._format;
    }
    putFormat(value) {
        this._format.internalValue = value;
    }
    resetFormat() {
        this._format.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get formatInput() {
        return this._format.internalValue;
    }
    // inferred - computed: false, optional: true, required: false
    _inferred;
    get inferred() {
        return this.getBooleanAttribute('inferred');
    }
    set inferred(value) {
        this._inferred = value;
    }
    resetInferred() {
        this._inferred = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get inferredInput() {
        return this._inferred;
    }
}
export function pipelineStreamWorkerBindingToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
    };
}
export function pipelineStreamWorkerBindingToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        enabled: {
            value: cdktf.booleanToHclTerraform(struct.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class PipelineStreamWorkerBindingOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
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
    _enabled;
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    set enabled(value) {
        this._enabled = value;
    }
    // Temporarily expose input value. Use with caution.
    get enabledInput() {
        return this._enabled;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_stream cloudflare_pipeline_stream}
*/
export class PipelineStream extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_pipeline_stream";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a PipelineStream resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the PipelineStream to import
    * @param importFromId The id of the existing PipelineStream that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_stream#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the PipelineStream to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_pipeline_stream", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_stream cloudflare_pipeline_stream} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PipelineStreamConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_pipeline_stream',
            terraformGeneratorMetadata: {
                providerName: 'cloudflare',
                providerVersion: '5.19.0'
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
    // account_id - computed: false, optional: true, required: false
    _accountId;
    get accountId() {
        return this.getStringAttribute('account_id');
    }
    set accountId(value) {
        this._accountId = value;
    }
    resetAccountId() {
        this._accountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get accountIdInput() {
        return this._accountId;
    }
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.getStringAttribute('created_at');
    }
    // endpoint - computed: true, optional: false, required: false
    get endpoint() {
        return this.getStringAttribute('endpoint');
    }
    // format - computed: false, optional: true, required: false
    _format = new PipelineStreamFormatOutputReference(this, "format");
    get format() {
        return this._format;
    }
    putFormat(value) {
        this._format.internalValue = value;
    }
    resetFormat() {
        this._format.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get formatInput() {
        return this._format.internalValue;
    }
    // http - computed: true, optional: true, required: false
    _http = new PipelineStreamHttpOutputReference(this, "http");
    get http() {
        return this._http;
    }
    putHttp(value) {
        this._http.internalValue = value;
    }
    resetHttp() {
        this._http.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get httpInput() {
        return this._http.internalValue;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // modified_at - computed: true, optional: false, required: false
    get modifiedAt() {
        return this.getStringAttribute('modified_at');
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    // schema - computed: false, optional: true, required: false
    _schema = new PipelineStreamSchemaOutputReference(this, "schema");
    get schema() {
        return this._schema;
    }
    putSchema(value) {
        this._schema.internalValue = value;
    }
    resetSchema() {
        this._schema.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get schemaInput() {
        return this._schema.internalValue;
    }
    // version - computed: true, optional: false, required: false
    get version() {
        return this.getNumberAttribute('version');
    }
    // worker_binding - computed: true, optional: true, required: false
    _workerBinding = new PipelineStreamWorkerBindingOutputReference(this, "worker_binding");
    get workerBinding() {
        return this._workerBinding;
    }
    putWorkerBinding(value) {
        this._workerBinding.internalValue = value;
    }
    resetWorkerBinding() {
        this._workerBinding.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get workerBindingInput() {
        return this._workerBinding.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            format: pipelineStreamFormatToTerraform(this._format.internalValue),
            http: pipelineStreamHttpToTerraform(this._http.internalValue),
            name: cdktf.stringToTerraform(this._name),
            schema: pipelineStreamSchemaToTerraform(this._schema.internalValue),
            worker_binding: pipelineStreamWorkerBindingToTerraform(this._workerBinding.internalValue),
        };
    }
    synthesizeHclAttributes() {
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
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
