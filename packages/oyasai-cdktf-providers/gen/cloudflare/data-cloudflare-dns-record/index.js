// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_record
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataCloudflareDnsRecordDataToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareDnsRecordDataToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareDnsRecordDataOutputReference extends cdktf.ComplexObject {
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
export function dataCloudflareDnsRecordFilterCommentToTerraform(struct) {
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
export function dataCloudflareDnsRecordFilterCommentToHclTerraform(struct) {
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
export class DataCloudflareDnsRecordFilterCommentOutputReference extends cdktf.ComplexObject {
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
export function dataCloudflareDnsRecordFilterContentToTerraform(struct) {
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
export function dataCloudflareDnsRecordFilterContentToHclTerraform(struct) {
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
export class DataCloudflareDnsRecordFilterContentOutputReference extends cdktf.ComplexObject {
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
export function dataCloudflareDnsRecordFilterNameToTerraform(struct) {
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
export function dataCloudflareDnsRecordFilterNameToHclTerraform(struct) {
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
export class DataCloudflareDnsRecordFilterNameOutputReference extends cdktf.ComplexObject {
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
export function dataCloudflareDnsRecordFilterTagToTerraform(struct) {
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
export function dataCloudflareDnsRecordFilterTagToHclTerraform(struct) {
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
export class DataCloudflareDnsRecordFilterTagOutputReference extends cdktf.ComplexObject {
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
export function dataCloudflareDnsRecordFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comment: dataCloudflareDnsRecordFilterCommentToTerraform(struct.comment),
        content: dataCloudflareDnsRecordFilterContentToTerraform(struct.content),
        direction: cdktf.stringToTerraform(struct.direction),
        match: cdktf.stringToTerraform(struct.match),
        name: dataCloudflareDnsRecordFilterNameToTerraform(struct.name),
        order: cdktf.stringToTerraform(struct.order),
        proxied: cdktf.booleanToTerraform(struct.proxied),
        search: cdktf.stringToTerraform(struct.search),
        tag: dataCloudflareDnsRecordFilterTagToTerraform(struct.tag),
        tag_match: cdktf.stringToTerraform(struct.tagMatch),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function dataCloudflareDnsRecordFilterToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        comment: {
            value: dataCloudflareDnsRecordFilterCommentToHclTerraform(struct.comment),
            isBlock: true,
            type: "struct",
            storageClassType: "DataCloudflareDnsRecordFilterComment",
        },
        content: {
            value: dataCloudflareDnsRecordFilterContentToHclTerraform(struct.content),
            isBlock: true,
            type: "struct",
            storageClassType: "DataCloudflareDnsRecordFilterContent",
        },
        direction: {
            value: cdktf.stringToHclTerraform(struct.direction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        match: {
            value: cdktf.stringToHclTerraform(struct.match),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: dataCloudflareDnsRecordFilterNameToHclTerraform(struct.name),
            isBlock: true,
            type: "struct",
            storageClassType: "DataCloudflareDnsRecordFilterName",
        },
        order: {
            value: cdktf.stringToHclTerraform(struct.order),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        proxied: {
            value: cdktf.booleanToHclTerraform(struct.proxied),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        search: {
            value: cdktf.stringToHclTerraform(struct.search),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tag: {
            value: dataCloudflareDnsRecordFilterTagToHclTerraform(struct.tag),
            isBlock: true,
            type: "struct",
            storageClassType: "DataCloudflareDnsRecordFilterTag",
        },
        tag_match: {
            value: cdktf.stringToHclTerraform(struct.tagMatch),
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
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class DataCloudflareDnsRecordFilterOutputReference extends cdktf.ComplexObject {
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
        if (this._comment?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.comment = this._comment?.internalValue;
        }
        if (this._content?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.content = this._content?.internalValue;
        }
        if (this._direction !== undefined) {
            hasAnyValues = true;
            internalValueResult.direction = this._direction;
        }
        if (this._match !== undefined) {
            hasAnyValues = true;
            internalValueResult.match = this._match;
        }
        if (this._name?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name?.internalValue;
        }
        if (this._order !== undefined) {
            hasAnyValues = true;
            internalValueResult.order = this._order;
        }
        if (this._proxied !== undefined) {
            hasAnyValues = true;
            internalValueResult.proxied = this._proxied;
        }
        if (this._search !== undefined) {
            hasAnyValues = true;
            internalValueResult.search = this._search;
        }
        if (this._tag?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tag = this._tag?.internalValue;
        }
        if (this._tagMatch !== undefined) {
            hasAnyValues = true;
            internalValueResult.tagMatch = this._tagMatch;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comment.internalValue = undefined;
            this._content.internalValue = undefined;
            this._direction = undefined;
            this._match = undefined;
            this._name.internalValue = undefined;
            this._order = undefined;
            this._proxied = undefined;
            this._search = undefined;
            this._tag.internalValue = undefined;
            this._tagMatch = undefined;
            this._type = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comment.internalValue = value.comment;
            this._content.internalValue = value.content;
            this._direction = value.direction;
            this._match = value.match;
            this._name.internalValue = value.name;
            this._order = value.order;
            this._proxied = value.proxied;
            this._search = value.search;
            this._tag.internalValue = value.tag;
            this._tagMatch = value.tagMatch;
            this._type = value.type;
        }
    }
    // comment - computed: false, optional: true, required: false
    _comment = new DataCloudflareDnsRecordFilterCommentOutputReference(this, "comment");
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
    _content = new DataCloudflareDnsRecordFilterContentOutputReference(this, "content");
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
    // name - computed: false, optional: true, required: false
    _name = new DataCloudflareDnsRecordFilterNameOutputReference(this, "name");
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
    _tag = new DataCloudflareDnsRecordFilterTagOutputReference(this, "tag");
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
}
export function dataCloudflareDnsRecordSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareDnsRecordSettingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareDnsRecordSettingsOutputReference extends cdktf.ComplexObject {
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
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_record cloudflare_dns_record}
*/
export class DataCloudflareDnsRecord extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_dns_record";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareDnsRecord resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareDnsRecord to import
    * @param importFromId The id of the existing DataCloudflareDnsRecord that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_record#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareDnsRecord to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_dns_record", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_record cloudflare_dns_record} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareDnsRecordConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_dns_record',
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
        this._dnsRecordId = config.dnsRecordId;
        this._filter.internalValue = config.filter;
        this._zoneId = config.zoneId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
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
    _data = new DataCloudflareDnsRecordDataOutputReference(this, "data");
    get data() {
        return this._data;
    }
    // dns_record_id - computed: false, optional: true, required: false
    _dnsRecordId;
    get dnsRecordId() {
        return this.getStringAttribute('dns_record_id');
    }
    set dnsRecordId(value) {
        this._dnsRecordId = value;
    }
    resetDnsRecordId() {
        this._dnsRecordId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dnsRecordIdInput() {
        return this._dnsRecordId;
    }
    // filter - computed: false, optional: true, required: false
    _filter = new DataCloudflareDnsRecordFilterOutputReference(this, "filter");
    get filter() {
        return this._filter;
    }
    putFilter(value) {
        this._filter.internalValue = value;
    }
    resetFilter() {
        this._filter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get filterInput() {
        return this._filter.internalValue;
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
    _settings = new DataCloudflareDnsRecordSettingsOutputReference(this, "settings");
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
            dns_record_id: cdktf.stringToTerraform(this._dnsRecordId),
            filter: dataCloudflareDnsRecordFilterToTerraform(this._filter.internalValue),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            dns_record_id: {
                value: cdktf.stringToHclTerraform(this._dnsRecordId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            filter: {
                value: dataCloudflareDnsRecordFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareDnsRecordFilter",
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
