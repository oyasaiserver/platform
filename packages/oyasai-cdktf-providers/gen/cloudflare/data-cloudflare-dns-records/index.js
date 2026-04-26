// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_records
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataCloudflareDnsRecordsCommentToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        absent: cdktf.stringToTerraform(struct.absent),
        contains: cdktf.stringToTerraform(struct.contains),
        endswith: cdktf.stringToTerraform(struct.endswith),
        exact: cdktf.stringToTerraform(struct.exact),
        present: cdktf.stringToTerraform(struct.present),
        startswith: cdktf.stringToTerraform(struct.startswith),
    };
}
export function dataCloudflareDnsRecordsCommentToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        absent: {
            value: cdktf.stringToHclTerraform(struct.absent),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        contains: {
            value: cdktf.stringToHclTerraform(struct.contains),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        endswith: {
            value: cdktf.stringToHclTerraform(struct.endswith),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        exact: {
            value: cdktf.stringToHclTerraform(struct.exact),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        present: {
            value: cdktf.stringToHclTerraform(struct.present),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        startswith: {
            value: cdktf.stringToHclTerraform(struct.startswith),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class DataCloudflareDnsRecordsCommentOutputReference extends cdktf.ComplexObject {
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
        if (this._absent !== undefined) {
            hasAnyValues = true;
            internalValueResult.absent = this._absent;
        }
        if (this._contains !== undefined) {
            hasAnyValues = true;
            internalValueResult.contains = this._contains;
        }
        if (this._endswith !== undefined) {
            hasAnyValues = true;
            internalValueResult.endswith = this._endswith;
        }
        if (this._exact !== undefined) {
            hasAnyValues = true;
            internalValueResult.exact = this._exact;
        }
        if (this._present !== undefined) {
            hasAnyValues = true;
            internalValueResult.present = this._present;
        }
        if (this._startswith !== undefined) {
            hasAnyValues = true;
            internalValueResult.startswith = this._startswith;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._absent = undefined;
            this._contains = undefined;
            this._endswith = undefined;
            this._exact = undefined;
            this._present = undefined;
            this._startswith = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._absent = value.absent;
            this._contains = value.contains;
            this._endswith = value.endswith;
            this._exact = value.exact;
            this._present = value.present;
            this._startswith = value.startswith;
        }
    }
    // absent - computed: false, optional: true, required: false
    _absent;
    get absent() {
        return this.getStringAttribute('absent');
    }
    set absent(value) {
        this._absent = value;
    }
    resetAbsent() {
        this._absent = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get absentInput() {
        return this._absent;
    }
    // contains - computed: false, optional: true, required: false
    _contains;
    get contains() {
        return this.getStringAttribute('contains');
    }
    set contains(value) {
        this._contains = value;
    }
    resetContains() {
        this._contains = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get containsInput() {
        return this._contains;
    }
    // endswith - computed: false, optional: true, required: false
    _endswith;
    get endswith() {
        return this.getStringAttribute('endswith');
    }
    set endswith(value) {
        this._endswith = value;
    }
    resetEndswith() {
        this._endswith = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get endswithInput() {
        return this._endswith;
    }
    // exact - computed: false, optional: true, required: false
    _exact;
    get exact() {
        return this.getStringAttribute('exact');
    }
    set exact(value) {
        this._exact = value;
    }
    resetExact() {
        this._exact = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get exactInput() {
        return this._exact;
    }
    // present - computed: false, optional: true, required: false
    _present;
    get present() {
        return this.getStringAttribute('present');
    }
    set present(value) {
        this._present = value;
    }
    resetPresent() {
        this._present = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get presentInput() {
        return this._present;
    }
    // startswith - computed: false, optional: true, required: false
    _startswith;
    get startswith() {
        return this.getStringAttribute('startswith');
    }
    set startswith(value) {
        this._startswith = value;
    }
    resetStartswith() {
        this._startswith = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get startswithInput() {
        return this._startswith;
    }
}
export function dataCloudflareDnsRecordsContentToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        contains: cdktf.stringToTerraform(struct.contains),
        endswith: cdktf.stringToTerraform(struct.endswith),
        exact: cdktf.stringToTerraform(struct.exact),
        startswith: cdktf.stringToTerraform(struct.startswith),
    };
}
export function dataCloudflareDnsRecordsContentToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        contains: {
            value: cdktf.stringToHclTerraform(struct.contains),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        endswith: {
            value: cdktf.stringToHclTerraform(struct.endswith),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        exact: {
            value: cdktf.stringToHclTerraform(struct.exact),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        startswith: {
            value: cdktf.stringToHclTerraform(struct.startswith),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class DataCloudflareDnsRecordsContentOutputReference extends cdktf.ComplexObject {
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
        if (this._contains !== undefined) {
            hasAnyValues = true;
            internalValueResult.contains = this._contains;
        }
        if (this._endswith !== undefined) {
            hasAnyValues = true;
            internalValueResult.endswith = this._endswith;
        }
        if (this._exact !== undefined) {
            hasAnyValues = true;
            internalValueResult.exact = this._exact;
        }
        if (this._startswith !== undefined) {
            hasAnyValues = true;
            internalValueResult.startswith = this._startswith;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contains = undefined;
            this._endswith = undefined;
            this._exact = undefined;
            this._startswith = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contains = value.contains;
            this._endswith = value.endswith;
            this._exact = value.exact;
            this._startswith = value.startswith;
        }
    }
    // contains - computed: false, optional: true, required: false
    _contains;
    get contains() {
        return this.getStringAttribute('contains');
    }
    set contains(value) {
        this._contains = value;
    }
    resetContains() {
        this._contains = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get containsInput() {
        return this._contains;
    }
    // endswith - computed: false, optional: true, required: false
    _endswith;
    get endswith() {
        return this.getStringAttribute('endswith');
    }
    set endswith(value) {
        this._endswith = value;
    }
    resetEndswith() {
        this._endswith = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get endswithInput() {
        return this._endswith;
    }
    // exact - computed: false, optional: true, required: false
    _exact;
    get exact() {
        return this.getStringAttribute('exact');
    }
    set exact(value) {
        this._exact = value;
    }
    resetExact() {
        this._exact = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get exactInput() {
        return this._exact;
    }
    // startswith - computed: false, optional: true, required: false
    _startswith;
    get startswith() {
        return this.getStringAttribute('startswith');
    }
    set startswith(value) {
        this._startswith = value;
    }
    resetStartswith() {
        this._startswith = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get startswithInput() {
        return this._startswith;
    }
}
export function dataCloudflareDnsRecordsNameToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        contains: cdktf.stringToTerraform(struct.contains),
        endswith: cdktf.stringToTerraform(struct.endswith),
        exact: cdktf.stringToTerraform(struct.exact),
        startswith: cdktf.stringToTerraform(struct.startswith),
    };
}
export function dataCloudflareDnsRecordsNameToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        contains: {
            value: cdktf.stringToHclTerraform(struct.contains),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        endswith: {
            value: cdktf.stringToHclTerraform(struct.endswith),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        exact: {
            value: cdktf.stringToHclTerraform(struct.exact),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        startswith: {
            value: cdktf.stringToHclTerraform(struct.startswith),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class DataCloudflareDnsRecordsNameOutputReference extends cdktf.ComplexObject {
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
        if (this._contains !== undefined) {
            hasAnyValues = true;
            internalValueResult.contains = this._contains;
        }
        if (this._endswith !== undefined) {
            hasAnyValues = true;
            internalValueResult.endswith = this._endswith;
        }
        if (this._exact !== undefined) {
            hasAnyValues = true;
            internalValueResult.exact = this._exact;
        }
        if (this._startswith !== undefined) {
            hasAnyValues = true;
            internalValueResult.startswith = this._startswith;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contains = undefined;
            this._endswith = undefined;
            this._exact = undefined;
            this._startswith = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contains = value.contains;
            this._endswith = value.endswith;
            this._exact = value.exact;
            this._startswith = value.startswith;
        }
    }
    // contains - computed: false, optional: true, required: false
    _contains;
    get contains() {
        return this.getStringAttribute('contains');
    }
    set contains(value) {
        this._contains = value;
    }
    resetContains() {
        this._contains = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get containsInput() {
        return this._contains;
    }
    // endswith - computed: false, optional: true, required: false
    _endswith;
    get endswith() {
        return this.getStringAttribute('endswith');
    }
    set endswith(value) {
        this._endswith = value;
    }
    resetEndswith() {
        this._endswith = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get endswithInput() {
        return this._endswith;
    }
    // exact - computed: false, optional: true, required: false
    _exact;
    get exact() {
        return this.getStringAttribute('exact');
    }
    set exact(value) {
        this._exact = value;
    }
    resetExact() {
        this._exact = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get exactInput() {
        return this._exact;
    }
    // startswith - computed: false, optional: true, required: false
    _startswith;
    get startswith() {
        return this.getStringAttribute('startswith');
    }
    set startswith(value) {
        this._startswith = value;
    }
    resetStartswith() {
        this._startswith = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get startswithInput() {
        return this._startswith;
    }
}
export function dataCloudflareDnsRecordsResultDataToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareDnsRecordsResultDataToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareDnsRecordsResultDataOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // algorithm - computed: true, optional: false, required: false
    get algorithm() {
        return this.getNumberAttribute('algorithm');
    }
    // altitude - computed: true, optional: false, required: false
    get altitude() {
        return this.getNumberAttribute('altitude');
    }
    // certificate - computed: true, optional: false, required: false
    get certificate() {
        return this.getStringAttribute('certificate');
    }
    // digest - computed: true, optional: false, required: false
    get digest() {
        return this.getStringAttribute('digest');
    }
    // digest_type - computed: true, optional: false, required: false
    get digestType() {
        return this.getNumberAttribute('digest_type');
    }
    // fingerprint - computed: true, optional: false, required: false
    get fingerprint() {
        return this.getStringAttribute('fingerprint');
    }
    // flags - computed: true, optional: false, required: false
    _flags = new cdktf.AnyMap(this, "flags");
    get flags() {
        return this._flags;
    }
    // key_tag - computed: true, optional: false, required: false
    get keyTag() {
        return this.getNumberAttribute('key_tag');
    }
    // lat_degrees - computed: true, optional: false, required: false
    get latDegrees() {
        return this.getNumberAttribute('lat_degrees');
    }
    // lat_direction - computed: true, optional: false, required: false
    get latDirection() {
        return this.getStringAttribute('lat_direction');
    }
    // lat_minutes - computed: true, optional: false, required: false
    get latMinutes() {
        return this.getNumberAttribute('lat_minutes');
    }
    // lat_seconds - computed: true, optional: false, required: false
    get latSeconds() {
        return this.getNumberAttribute('lat_seconds');
    }
    // long_degrees - computed: true, optional: false, required: false
    get longDegrees() {
        return this.getNumberAttribute('long_degrees');
    }
    // long_direction - computed: true, optional: false, required: false
    get longDirection() {
        return this.getStringAttribute('long_direction');
    }
    // long_minutes - computed: true, optional: false, required: false
    get longMinutes() {
        return this.getNumberAttribute('long_minutes');
    }
    // long_seconds - computed: true, optional: false, required: false
    get longSeconds() {
        return this.getNumberAttribute('long_seconds');
    }
    // matching_type - computed: true, optional: false, required: false
    get matchingType() {
        return this.getNumberAttribute('matching_type');
    }
    // order - computed: true, optional: false, required: false
    get order() {
        return this.getNumberAttribute('order');
    }
    // port - computed: true, optional: false, required: false
    get port() {
        return this.getNumberAttribute('port');
    }
    // precision_horz - computed: true, optional: false, required: false
    get precisionHorz() {
        return this.getNumberAttribute('precision_horz');
    }
    // precision_vert - computed: true, optional: false, required: false
    get precisionVert() {
        return this.getNumberAttribute('precision_vert');
    }
    // preference - computed: true, optional: false, required: false
    get preference() {
        return this.getNumberAttribute('preference');
    }
    // priority - computed: true, optional: false, required: false
    get priority() {
        return this.getNumberAttribute('priority');
    }
    // protocol - computed: true, optional: false, required: false
    get protocol() {
        return this.getNumberAttribute('protocol');
    }
    // public_key - computed: true, optional: false, required: false
    get publicKey() {
        return this.getStringAttribute('public_key');
    }
    // regex - computed: true, optional: false, required: false
    get regex() {
        return this.getStringAttribute('regex');
    }
    // replacement - computed: true, optional: false, required: false
    get replacement() {
        return this.getStringAttribute('replacement');
    }
    // selector - computed: true, optional: false, required: false
    get selector() {
        return this.getNumberAttribute('selector');
    }
    // service - computed: true, optional: false, required: false
    get service() {
        return this.getStringAttribute('service');
    }
    // size - computed: true, optional: false, required: false
    get size() {
        return this.getNumberAttribute('size');
    }
    // tag - computed: true, optional: false, required: false
    get tag() {
        return this.getStringAttribute('tag');
    }
    // target - computed: true, optional: false, required: false
    get target() {
        return this.getStringAttribute('target');
    }
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getNumberAttribute('type');
    }
    // usage - computed: true, optional: false, required: false
    get usage() {
        return this.getNumberAttribute('usage');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getStringAttribute('value');
    }
    // weight - computed: true, optional: false, required: false
    get weight() {
        return this.getNumberAttribute('weight');
    }
}
export function dataCloudflareDnsRecordsResultSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareDnsRecordsResultSettingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareDnsRecordsResultSettingsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // flatten_cname - computed: true, optional: false, required: false
    get flattenCname() {
        return this.getBooleanAttribute('flatten_cname');
    }
    // ipv4_only - computed: true, optional: false, required: false
    get ipv4Only() {
        return this.getBooleanAttribute('ipv4_only');
    }
    // ipv6_only - computed: true, optional: false, required: false
    get ipv6Only() {
        return this.getBooleanAttribute('ipv6_only');
    }
}
export function dataCloudflareDnsRecordsResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareDnsRecordsResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareDnsRecordsResultOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
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
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // comment - computed: true, optional: false, required: false
    get comment() {
        return this.getStringAttribute('comment');
    }
    // comment_modified_on - computed: true, optional: false, required: false
    get commentModifiedOn() {
        return this.getStringAttribute('comment_modified_on');
    }
    // content - computed: true, optional: false, required: false
    get content() {
        return this.getStringAttribute('content');
    }
    // created_on - computed: true, optional: false, required: false
    get createdOn() {
        return this.getStringAttribute('created_on');
    }
    // data - computed: true, optional: false, required: false
    _data = new DataCloudflareDnsRecordsResultDataOutputReference(this, "data");
    get data() {
        return this._data;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // meta - computed: true, optional: false, required: false
    get meta() {
        return this.getStringAttribute('meta');
    }
    // modified_on - computed: true, optional: false, required: false
    get modifiedOn() {
        return this.getStringAttribute('modified_on');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // priority - computed: true, optional: false, required: false
    get priority() {
        return this.getNumberAttribute('priority');
    }
    // private_routing - computed: true, optional: false, required: false
    get privateRouting() {
        return this.getBooleanAttribute('private_routing');
    }
    // proxiable - computed: true, optional: false, required: false
    get proxiable() {
        return this.getBooleanAttribute('proxiable');
    }
    // proxied - computed: true, optional: false, required: false
    get proxied() {
        return this.getBooleanAttribute('proxied');
    }
    // settings - computed: true, optional: false, required: false
    _settings = new DataCloudflareDnsRecordsResultSettingsOutputReference(this, "settings");
    get settings() {
        return this._settings;
    }
    // tags - computed: true, optional: false, required: false
    get tags() {
        return cdktf.Fn.tolist(this.getListAttribute('tags'));
    }
    // tags_modified_on - computed: true, optional: false, required: false
    get tagsModifiedOn() {
        return this.getStringAttribute('tags_modified_on');
    }
    // ttl - computed: true, optional: false, required: false
    get ttl() {
        return this.getNumberAttribute('ttl');
    }
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
    }
}
export class DataCloudflareDnsRecordsResultList extends cdktf.ComplexList {
    terraformResource;
    terraformAttribute;
    wrapsSet;
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
        return new DataCloudflareDnsRecordsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function dataCloudflareDnsRecordsTagToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        absent: cdktf.stringToTerraform(struct.absent),
        contains: cdktf.stringToTerraform(struct.contains),
        endswith: cdktf.stringToTerraform(struct.endswith),
        exact: cdktf.stringToTerraform(struct.exact),
        present: cdktf.stringToTerraform(struct.present),
        startswith: cdktf.stringToTerraform(struct.startswith),
    };
}
export function dataCloudflareDnsRecordsTagToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        absent: {
            value: cdktf.stringToHclTerraform(struct.absent),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        contains: {
            value: cdktf.stringToHclTerraform(struct.contains),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        endswith: {
            value: cdktf.stringToHclTerraform(struct.endswith),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        exact: {
            value: cdktf.stringToHclTerraform(struct.exact),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        present: {
            value: cdktf.stringToHclTerraform(struct.present),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        startswith: {
            value: cdktf.stringToHclTerraform(struct.startswith),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class DataCloudflareDnsRecordsTagOutputReference extends cdktf.ComplexObject {
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
        if (this._absent !== undefined) {
            hasAnyValues = true;
            internalValueResult.absent = this._absent;
        }
        if (this._contains !== undefined) {
            hasAnyValues = true;
            internalValueResult.contains = this._contains;
        }
        if (this._endswith !== undefined) {
            hasAnyValues = true;
            internalValueResult.endswith = this._endswith;
        }
        if (this._exact !== undefined) {
            hasAnyValues = true;
            internalValueResult.exact = this._exact;
        }
        if (this._present !== undefined) {
            hasAnyValues = true;
            internalValueResult.present = this._present;
        }
        if (this._startswith !== undefined) {
            hasAnyValues = true;
            internalValueResult.startswith = this._startswith;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._absent = undefined;
            this._contains = undefined;
            this._endswith = undefined;
            this._exact = undefined;
            this._present = undefined;
            this._startswith = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._absent = value.absent;
            this._contains = value.contains;
            this._endswith = value.endswith;
            this._exact = value.exact;
            this._present = value.present;
            this._startswith = value.startswith;
        }
    }
    // absent - computed: false, optional: true, required: false
    _absent;
    get absent() {
        return this.getStringAttribute('absent');
    }
    set absent(value) {
        this._absent = value;
    }
    resetAbsent() {
        this._absent = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get absentInput() {
        return this._absent;
    }
    // contains - computed: false, optional: true, required: false
    _contains;
    get contains() {
        return this.getStringAttribute('contains');
    }
    set contains(value) {
        this._contains = value;
    }
    resetContains() {
        this._contains = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get containsInput() {
        return this._contains;
    }
    // endswith - computed: false, optional: true, required: false
    _endswith;
    get endswith() {
        return this.getStringAttribute('endswith');
    }
    set endswith(value) {
        this._endswith = value;
    }
    resetEndswith() {
        this._endswith = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get endswithInput() {
        return this._endswith;
    }
    // exact - computed: false, optional: true, required: false
    _exact;
    get exact() {
        return this.getStringAttribute('exact');
    }
    set exact(value) {
        this._exact = value;
    }
    resetExact() {
        this._exact = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get exactInput() {
        return this._exact;
    }
    // present - computed: false, optional: true, required: false
    _present;
    get present() {
        return this.getStringAttribute('present');
    }
    set present(value) {
        this._present = value;
    }
    resetPresent() {
        this._present = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get presentInput() {
        return this._present;
    }
    // startswith - computed: false, optional: true, required: false
    _startswith;
    get startswith() {
        return this.getStringAttribute('startswith');
    }
    set startswith(value) {
        this._startswith = value;
    }
    resetStartswith() {
        this._startswith = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get startswithInput() {
        return this._startswith;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_records cloudflare_dns_records}
*/
export class DataCloudflareDnsRecords extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_dns_records";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareDnsRecords resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareDnsRecords to import
    * @param importFromId The id of the existing DataCloudflareDnsRecords that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_records#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareDnsRecords to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_dns_records", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_records cloudflare_dns_records} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareDnsRecordsConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_dns_records',
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
        this._comment.internalValue = config.comment;
        this._content.internalValue = config.content;
        this._direction = config.direction;
        this._match = config.match;
        this._maxItems = config.maxItems;
        this._name.internalValue = config.name;
        this._order = config.order;
        this._proxied = config.proxied;
        this._search = config.search;
        this._tag.internalValue = config.tag;
        this._tagMatch = config.tagMatch;
        this._type = config.type;
        this._zoneId = config.zoneId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // comment - computed: false, optional: true, required: false
    _comment = new DataCloudflareDnsRecordsCommentOutputReference(this, "comment");
    get comment() {
        return this._comment;
    }
    putComment(value) {
        this._comment.internalValue = value;
    }
    resetComment() {
        this._comment.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get commentInput() {
        return this._comment.internalValue;
    }
    // content - computed: false, optional: true, required: false
    _content = new DataCloudflareDnsRecordsContentOutputReference(this, "content");
    get content() {
        return this._content;
    }
    putContent(value) {
        this._content.internalValue = value;
    }
    resetContent() {
        this._content.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get contentInput() {
        return this._content.internalValue;
    }
    // direction - computed: true, optional: true, required: false
    _direction;
    get direction() {
        return this.getStringAttribute('direction');
    }
    set direction(value) {
        this._direction = value;
    }
    resetDirection() {
        this._direction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get directionInput() {
        return this._direction;
    }
    // match - computed: true, optional: true, required: false
    _match;
    get match() {
        return this.getStringAttribute('match');
    }
    set match(value) {
        this._match = value;
    }
    resetMatch() {
        this._match = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get matchInput() {
        return this._match;
    }
    // max_items - computed: false, optional: true, required: false
    _maxItems;
    get maxItems() {
        return this.getNumberAttribute('max_items');
    }
    set maxItems(value) {
        this._maxItems = value;
    }
    resetMaxItems() {
        this._maxItems = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxItemsInput() {
        return this._maxItems;
    }
    // name - computed: false, optional: true, required: false
    _name = new DataCloudflareDnsRecordsNameOutputReference(this, "name");
    get name() {
        return this._name;
    }
    putName(value) {
        this._name.internalValue = value;
    }
    resetName() {
        this._name.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name.internalValue;
    }
    // order - computed: true, optional: true, required: false
    _order;
    get order() {
        return this.getStringAttribute('order');
    }
    set order(value) {
        this._order = value;
    }
    resetOrder() {
        this._order = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get orderInput() {
        return this._order;
    }
    // proxied - computed: true, optional: true, required: false
    _proxied;
    get proxied() {
        return this.getBooleanAttribute('proxied');
    }
    set proxied(value) {
        this._proxied = value;
    }
    resetProxied() {
        this._proxied = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get proxiedInput() {
        return this._proxied;
    }
    // result - computed: true, optional: false, required: false
    _result = new DataCloudflareDnsRecordsResultList(this, "result", false);
    get result() {
        return this._result;
    }
    // search - computed: false, optional: true, required: false
    _search;
    get search() {
        return this.getStringAttribute('search');
    }
    set search(value) {
        this._search = value;
    }
    resetSearch() {
        this._search = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get searchInput() {
        return this._search;
    }
    // tag - computed: false, optional: true, required: false
    _tag = new DataCloudflareDnsRecordsTagOutputReference(this, "tag");
    get tag() {
        return this._tag;
    }
    putTag(value) {
        this._tag.internalValue = value;
    }
    resetTag() {
        this._tag.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tagInput() {
        return this._tag.internalValue;
    }
    // tag_match - computed: true, optional: true, required: false
    _tagMatch;
    get tagMatch() {
        return this.getStringAttribute('tag_match');
    }
    set tagMatch(value) {
        this._tagMatch = value;
    }
    resetTagMatch() {
        this._tagMatch = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tagMatchInput() {
        return this._tagMatch;
    }
    // type - computed: false, optional: true, required: false
    _type;
    get type() {
        return this.getStringAttribute('type');
    }
    set type(value) {
        this._type = value;
    }
    resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get typeInput() {
        return this._type;
    }
    // zone_id - computed: false, optional: true, required: false
    _zoneId;
    get zoneId() {
        return this.getStringAttribute('zone_id');
    }
    set zoneId(value) {
        this._zoneId = value;
    }
    resetZoneId() {
        this._zoneId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get zoneIdInput() {
        return this._zoneId;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            comment: dataCloudflareDnsRecordsCommentToTerraform(this._comment.internalValue),
            content: dataCloudflareDnsRecordsContentToTerraform(this._content.internalValue),
            direction: cdktf.stringToTerraform(this._direction),
            match: cdktf.stringToTerraform(this._match),
            max_items: cdktf.numberToTerraform(this._maxItems),
            name: dataCloudflareDnsRecordsNameToTerraform(this._name.internalValue),
            order: cdktf.stringToTerraform(this._order),
            proxied: cdktf.booleanToTerraform(this._proxied),
            search: cdktf.stringToTerraform(this._search),
            tag: dataCloudflareDnsRecordsTagToTerraform(this._tag.internalValue),
            tag_match: cdktf.stringToTerraform(this._tagMatch),
            type: cdktf.stringToTerraform(this._type),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            comment: {
                value: dataCloudflareDnsRecordsCommentToHclTerraform(this._comment.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareDnsRecordsComment",
            },
            content: {
                value: dataCloudflareDnsRecordsContentToHclTerraform(this._content.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareDnsRecordsContent",
            },
            direction: {
                value: cdktf.stringToHclTerraform(this._direction),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            match: {
                value: cdktf.stringToHclTerraform(this._match),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            max_items: {
                value: cdktf.numberToHclTerraform(this._maxItems),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            name: {
                value: dataCloudflareDnsRecordsNameToHclTerraform(this._name.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareDnsRecordsName",
            },
            order: {
                value: cdktf.stringToHclTerraform(this._order),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            proxied: {
                value: cdktf.booleanToHclTerraform(this._proxied),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            search: {
                value: cdktf.stringToHclTerraform(this._search),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tag: {
                value: dataCloudflareDnsRecordsTagToHclTerraform(this._tag.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareDnsRecordsTag",
            },
            tag_match: {
                value: cdktf.stringToHclTerraform(this._tagMatch),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            type: {
                value: cdktf.stringToHclTerraform(this._type),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            zone_id: {
                value: cdktf.stringToHclTerraform(this._zoneId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
