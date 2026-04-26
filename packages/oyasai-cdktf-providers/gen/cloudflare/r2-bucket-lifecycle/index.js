// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_lifecycle
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function r2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        max_age: cdktf.numberToTerraform(struct.maxAge),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function r2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        max_age: {
            value: cdktf.numberToHclTerraform(struct.maxAge),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
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
export class R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference extends cdktf.ComplexObject {
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
        if (this._maxAge !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxAge = this._maxAge;
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
            this._maxAge = undefined;
            this._type = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxAge = value.maxAge;
            this._type = value.type;
        }
    }
    // max_age - computed: false, optional: false, required: true
    _maxAge;
    get maxAge() {
        return this.getNumberAttribute('max_age');
    }
    set maxAge(value) {
        this._maxAge = value;
    }
    // Temporarily expose input value. Use with caution.
    get maxAgeInput() {
        return this._maxAge;
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
}
export function r2BucketLifecycleRulesAbortMultipartUploadsTransitionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        condition: r2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionToTerraform(struct.condition),
    };
}
export function r2BucketLifecycleRulesAbortMultipartUploadsTransitionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        condition: {
            value: r2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionToHclTerraform(struct.condition),
            isBlock: true,
            type: "struct",
            storageClassType: "R2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference extends cdktf.ComplexObject {
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
        if (this._condition?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.condition = this._condition?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._condition.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._condition.internalValue = value.condition;
        }
    }
    // condition - computed: false, optional: true, required: false
    _condition = new R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference(this, "condition");
    get condition() {
        return this._condition;
    }
    putCondition(value) {
        this._condition.internalValue = value;
    }
    resetCondition() {
        this._condition.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get conditionInput() {
        return this._condition.internalValue;
    }
}
export function r2BucketLifecycleRulesConditionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        prefix: cdktf.stringToTerraform(struct.prefix),
    };
}
export function r2BucketLifecycleRulesConditionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        prefix: {
            value: cdktf.stringToHclTerraform(struct.prefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class R2BucketLifecycleRulesConditionsOutputReference extends cdktf.ComplexObject {
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
        if (this._prefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.prefix = this._prefix;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._prefix = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._prefix = value.prefix;
        }
    }
    // prefix - computed: false, optional: false, required: true
    _prefix;
    get prefix() {
        return this.getStringAttribute('prefix');
    }
    set prefix(value) {
        this._prefix = value;
    }
    // Temporarily expose input value. Use with caution.
    get prefixInput() {
        return this._prefix;
    }
}
export function r2BucketLifecycleRulesDeleteObjectsTransitionConditionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        date: cdktf.stringToTerraform(struct.date),
        max_age: cdktf.numberToTerraform(struct.maxAge),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function r2BucketLifecycleRulesDeleteObjectsTransitionConditionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        date: {
            value: cdktf.stringToHclTerraform(struct.date),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        max_age: {
            value: cdktf.numberToHclTerraform(struct.maxAge),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
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
export class R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference extends cdktf.ComplexObject {
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
        if (this._date !== undefined) {
            hasAnyValues = true;
            internalValueResult.date = this._date;
        }
        if (this._maxAge !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxAge = this._maxAge;
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
            this._date = undefined;
            this._maxAge = undefined;
            this._type = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._date = value.date;
            this._maxAge = value.maxAge;
            this._type = value.type;
        }
    }
    // date - computed: false, optional: true, required: false
    _date;
    get date() {
        return this.getStringAttribute('date');
    }
    set date(value) {
        this._date = value;
    }
    resetDate() {
        this._date = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dateInput() {
        return this._date;
    }
    // max_age - computed: false, optional: true, required: false
    _maxAge;
    get maxAge() {
        return this.getNumberAttribute('max_age');
    }
    set maxAge(value) {
        this._maxAge = value;
    }
    resetMaxAge() {
        this._maxAge = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxAgeInput() {
        return this._maxAge;
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
}
export function r2BucketLifecycleRulesDeleteObjectsTransitionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        condition: r2BucketLifecycleRulesDeleteObjectsTransitionConditionToTerraform(struct.condition),
    };
}
export function r2BucketLifecycleRulesDeleteObjectsTransitionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        condition: {
            value: r2BucketLifecycleRulesDeleteObjectsTransitionConditionToHclTerraform(struct.condition),
            isBlock: true,
            type: "struct",
            storageClassType: "R2BucketLifecycleRulesDeleteObjectsTransitionCondition",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference extends cdktf.ComplexObject {
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
        if (this._condition?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.condition = this._condition?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._condition.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._condition.internalValue = value.condition;
        }
    }
    // condition - computed: false, optional: true, required: false
    _condition = new R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference(this, "condition");
    get condition() {
        return this._condition;
    }
    putCondition(value) {
        this._condition.internalValue = value;
    }
    resetCondition() {
        this._condition.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get conditionInput() {
        return this._condition.internalValue;
    }
}
export function r2BucketLifecycleRulesStorageClassTransitionsConditionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        date: cdktf.stringToTerraform(struct.date),
        max_age: cdktf.numberToTerraform(struct.maxAge),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function r2BucketLifecycleRulesStorageClassTransitionsConditionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        date: {
            value: cdktf.stringToHclTerraform(struct.date),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        max_age: {
            value: cdktf.numberToHclTerraform(struct.maxAge),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
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
export class R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference extends cdktf.ComplexObject {
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
        if (this._date !== undefined) {
            hasAnyValues = true;
            internalValueResult.date = this._date;
        }
        if (this._maxAge !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxAge = this._maxAge;
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
            this._date = undefined;
            this._maxAge = undefined;
            this._type = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._date = value.date;
            this._maxAge = value.maxAge;
            this._type = value.type;
        }
    }
    // date - computed: false, optional: true, required: false
    _date;
    get date() {
        return this.getStringAttribute('date');
    }
    set date(value) {
        this._date = value;
    }
    resetDate() {
        this._date = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dateInput() {
        return this._date;
    }
    // max_age - computed: false, optional: true, required: false
    _maxAge;
    get maxAge() {
        return this.getNumberAttribute('max_age');
    }
    set maxAge(value) {
        this._maxAge = value;
    }
    resetMaxAge() {
        this._maxAge = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxAgeInput() {
        return this._maxAge;
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
}
export function r2BucketLifecycleRulesStorageClassTransitionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        condition: r2BucketLifecycleRulesStorageClassTransitionsConditionToTerraform(struct.condition),
        storage_class: cdktf.stringToTerraform(struct.storageClass),
    };
}
export function r2BucketLifecycleRulesStorageClassTransitionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        condition: {
            value: r2BucketLifecycleRulesStorageClassTransitionsConditionToHclTerraform(struct.condition),
            isBlock: true,
            type: "struct",
            storageClassType: "R2BucketLifecycleRulesStorageClassTransitionsCondition",
        },
        storage_class: {
            value: cdktf.stringToHclTerraform(struct.storageClass),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class R2BucketLifecycleRulesStorageClassTransitionsOutputReference extends cdktf.ComplexObject {
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
        if (this._condition?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.condition = this._condition?.internalValue;
        }
        if (this._storageClass !== undefined) {
            hasAnyValues = true;
            internalValueResult.storageClass = this._storageClass;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._condition.internalValue = undefined;
            this._storageClass = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._condition.internalValue = value.condition;
            this._storageClass = value.storageClass;
        }
    }
    // condition - computed: false, optional: false, required: true
    _condition = new R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference(this, "condition");
    get condition() {
        return this._condition;
    }
    putCondition(value) {
        this._condition.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get conditionInput() {
        return this._condition.internalValue;
    }
    // storage_class - computed: false, optional: false, required: true
    _storageClass;
    get storageClass() {
        return this.getStringAttribute('storage_class');
    }
    set storageClass(value) {
        this._storageClass = value;
    }
    // Temporarily expose input value. Use with caution.
    get storageClassInput() {
        return this._storageClass;
    }
}
export class R2BucketLifecycleRulesStorageClassTransitionsList extends cdktf.ComplexList {
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
        return new R2BucketLifecycleRulesStorageClassTransitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function r2BucketLifecycleRulesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        abort_multipart_uploads_transition: r2BucketLifecycleRulesAbortMultipartUploadsTransitionToTerraform(struct.abortMultipartUploadsTransition),
        conditions: r2BucketLifecycleRulesConditionsToTerraform(struct.conditions),
        delete_objects_transition: r2BucketLifecycleRulesDeleteObjectsTransitionToTerraform(struct.deleteObjectsTransition),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        id: cdktf.stringToTerraform(struct.id),
        storage_class_transitions: cdktf.listMapper(r2BucketLifecycleRulesStorageClassTransitionsToTerraform, false)(struct.storageClassTransitions),
    };
}
export function r2BucketLifecycleRulesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        abort_multipart_uploads_transition: {
            value: r2BucketLifecycleRulesAbortMultipartUploadsTransitionToHclTerraform(struct.abortMultipartUploadsTransition),
            isBlock: true,
            type: "struct",
            storageClassType: "R2BucketLifecycleRulesAbortMultipartUploadsTransition",
        },
        conditions: {
            value: r2BucketLifecycleRulesConditionsToHclTerraform(struct.conditions),
            isBlock: true,
            type: "struct",
            storageClassType: "R2BucketLifecycleRulesConditions",
        },
        delete_objects_transition: {
            value: r2BucketLifecycleRulesDeleteObjectsTransitionToHclTerraform(struct.deleteObjectsTransition),
            isBlock: true,
            type: "struct",
            storageClassType: "R2BucketLifecycleRulesDeleteObjectsTransition",
        },
        enabled: {
            value: cdktf.booleanToHclTerraform(struct.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        storage_class_transitions: {
            value: cdktf.listMapperHcl(r2BucketLifecycleRulesStorageClassTransitionsToHclTerraform, false)(struct.storageClassTransitions),
            isBlock: true,
            type: "list",
            storageClassType: "R2BucketLifecycleRulesStorageClassTransitionsList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class R2BucketLifecycleRulesOutputReference extends cdktf.ComplexObject {
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
        if (this._abortMultipartUploadsTransition?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.abortMultipartUploadsTransition = this._abortMultipartUploadsTransition?.internalValue;
        }
        if (this._conditions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.conditions = this._conditions?.internalValue;
        }
        if (this._deleteObjectsTransition?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.deleteObjectsTransition = this._deleteObjectsTransition?.internalValue;
        }
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._storageClassTransitions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.storageClassTransitions = this._storageClassTransitions?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._abortMultipartUploadsTransition.internalValue = undefined;
            this._conditions.internalValue = undefined;
            this._deleteObjectsTransition.internalValue = undefined;
            this._enabled = undefined;
            this._id = undefined;
            this._storageClassTransitions.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._abortMultipartUploadsTransition.internalValue = value.abortMultipartUploadsTransition;
            this._conditions.internalValue = value.conditions;
            this._deleteObjectsTransition.internalValue = value.deleteObjectsTransition;
            this._enabled = value.enabled;
            this._id = value.id;
            this._storageClassTransitions.internalValue = value.storageClassTransitions;
        }
    }
    // abort_multipart_uploads_transition - computed: false, optional: true, required: false
    _abortMultipartUploadsTransition = new R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference(this, "abort_multipart_uploads_transition");
    get abortMultipartUploadsTransition() {
        return this._abortMultipartUploadsTransition;
    }
    putAbortMultipartUploadsTransition(value) {
        this._abortMultipartUploadsTransition.internalValue = value;
    }
    resetAbortMultipartUploadsTransition() {
        this._abortMultipartUploadsTransition.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get abortMultipartUploadsTransitionInput() {
        return this._abortMultipartUploadsTransition.internalValue;
    }
    // conditions - computed: false, optional: false, required: true
    _conditions = new R2BucketLifecycleRulesConditionsOutputReference(this, "conditions");
    get conditions() {
        return this._conditions;
    }
    putConditions(value) {
        this._conditions.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get conditionsInput() {
        return this._conditions.internalValue;
    }
    // delete_objects_transition - computed: false, optional: true, required: false
    _deleteObjectsTransition = new R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference(this, "delete_objects_transition");
    get deleteObjectsTransition() {
        return this._deleteObjectsTransition;
    }
    putDeleteObjectsTransition(value) {
        this._deleteObjectsTransition.internalValue = value;
    }
    resetDeleteObjectsTransition() {
        this._deleteObjectsTransition.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deleteObjectsTransitionInput() {
        return this._deleteObjectsTransition.internalValue;
    }
    // enabled - computed: false, optional: false, required: true
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
    // id - computed: false, optional: false, required: true
    _id;
    get id() {
        return this.getStringAttribute('id');
    }
    set id(value) {
        this._id = value;
    }
    // Temporarily expose input value. Use with caution.
    get idInput() {
        return this._id;
    }
    // storage_class_transitions - computed: false, optional: true, required: false
    _storageClassTransitions = new R2BucketLifecycleRulesStorageClassTransitionsList(this, "storage_class_transitions", false);
    get storageClassTransitions() {
        return this._storageClassTransitions;
    }
    putStorageClassTransitions(value) {
        this._storageClassTransitions.internalValue = value;
    }
    resetStorageClassTransitions() {
        this._storageClassTransitions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get storageClassTransitionsInput() {
        return this._storageClassTransitions.internalValue;
    }
}
export class R2BucketLifecycleRulesList extends cdktf.ComplexList {
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
        return new R2BucketLifecycleRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_lifecycle cloudflare_r2_bucket_lifecycle}
*/
export class R2BucketLifecycle extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_r2_bucket_lifecycle";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a R2BucketLifecycle resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the R2BucketLifecycle to import
    * @param importFromId The id of the existing R2BucketLifecycle that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_lifecycle#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the R2BucketLifecycle to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_r2_bucket_lifecycle", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_lifecycle cloudflare_r2_bucket_lifecycle} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options R2BucketLifecycleConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_r2_bucket_lifecycle',
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
        this._bucketName = config.bucketName;
        this._jurisdiction = config.jurisdiction;
        this._rules.internalValue = config.rules;
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
    // bucket_name - computed: false, optional: false, required: true
    _bucketName;
    get bucketName() {
        return this.getStringAttribute('bucket_name');
    }
    set bucketName(value) {
        this._bucketName = value;
    }
    // Temporarily expose input value. Use with caution.
    get bucketNameInput() {
        return this._bucketName;
    }
    // jurisdiction - computed: true, optional: true, required: false
    _jurisdiction;
    get jurisdiction() {
        return this.getStringAttribute('jurisdiction');
    }
    set jurisdiction(value) {
        this._jurisdiction = value;
    }
    resetJurisdiction() {
        this._jurisdiction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get jurisdictionInput() {
        return this._jurisdiction;
    }
    // rules - computed: false, optional: true, required: false
    _rules = new R2BucketLifecycleRulesList(this, "rules", false);
    get rules() {
        return this._rules;
    }
    putRules(value) {
        this._rules.internalValue = value;
    }
    resetRules() {
        this._rules.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get rulesInput() {
        return this._rules.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            bucket_name: cdktf.stringToTerraform(this._bucketName),
            jurisdiction: cdktf.stringToTerraform(this._jurisdiction),
            rules: cdktf.listMapper(r2BucketLifecycleRulesToTerraform, false)(this._rules.internalValue),
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
            bucket_name: {
                value: cdktf.stringToHclTerraform(this._bucketName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            jurisdiction: {
                value: cdktf.stringToHclTerraform(this._jurisdiction),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            rules: {
                value: cdktf.listMapperHcl(r2BucketLifecycleRulesToHclTerraform, false)(this._rules.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "R2BucketLifecycleRulesList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
