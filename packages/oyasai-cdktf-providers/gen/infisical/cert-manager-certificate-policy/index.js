// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate_policy
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function certManagerCertificatePolicyAlgorithmsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        key_algorithm: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.keyAlgorithm),
        signature: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.signature),
    };
}
export function certManagerCertificatePolicyAlgorithmsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        key_algorithm: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.keyAlgorithm),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        signature: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.signature),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class CertManagerCertificatePolicyAlgorithmsOutputReference extends cdktf.ComplexObject {
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
        if (this._keyAlgorithm !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyAlgorithm = this._keyAlgorithm;
        }
        if (this._signature !== undefined) {
            hasAnyValues = true;
            internalValueResult.signature = this._signature;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._keyAlgorithm = undefined;
            this._signature = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._keyAlgorithm = value.keyAlgorithm;
            this._signature = value.signature;
        }
    }
    // key_algorithm - computed: false, optional: false, required: true
    _keyAlgorithm;
    get keyAlgorithm() {
        return this.getListAttribute('key_algorithm');
    }
    set keyAlgorithm(value) {
        this._keyAlgorithm = value;
    }
    // Temporarily expose input value. Use with caution.
    get keyAlgorithmInput() {
        return this._keyAlgorithm;
    }
    // signature - computed: false, optional: false, required: true
    _signature;
    get signature() {
        return this.getListAttribute('signature');
    }
    set signature(value) {
        this._signature = value;
    }
    // Temporarily expose input value. Use with caution.
    get signatureInput() {
        return this._signature;
    }
}
export function certManagerCertificatePolicyExtendedKeyUsagesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        allowed: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.allowed),
        denied: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.denied),
        required: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.required),
    };
}
export function certManagerCertificatePolicyExtendedKeyUsagesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        allowed: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.allowed),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        denied: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.denied),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        required: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.required),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class CertManagerCertificatePolicyExtendedKeyUsagesOutputReference extends cdktf.ComplexObject {
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
        if (this._allowed !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowed = this._allowed;
        }
        if (this._denied !== undefined) {
            hasAnyValues = true;
            internalValueResult.denied = this._denied;
        }
        if (this._required !== undefined) {
            hasAnyValues = true;
            internalValueResult.required = this._required;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowed = undefined;
            this._denied = undefined;
            this._required = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowed = value.allowed;
            this._denied = value.denied;
            this._required = value.required;
        }
    }
    // allowed - computed: false, optional: true, required: false
    _allowed;
    get allowed() {
        return this.getListAttribute('allowed');
    }
    set allowed(value) {
        this._allowed = value;
    }
    resetAllowed() {
        this._allowed = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowedInput() {
        return this._allowed;
    }
    // denied - computed: false, optional: true, required: false
    _denied;
    get denied() {
        return this.getListAttribute('denied');
    }
    set denied(value) {
        this._denied = value;
    }
    resetDenied() {
        this._denied = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deniedInput() {
        return this._denied;
    }
    // required - computed: false, optional: true, required: false
    _required;
    get required() {
        return this.getListAttribute('required');
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
}
export function certManagerCertificatePolicyKeyUsagesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        allowed: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.allowed),
        denied: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.denied),
        required: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.required),
    };
}
export function certManagerCertificatePolicyKeyUsagesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        allowed: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.allowed),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        denied: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.denied),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        required: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.required),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class CertManagerCertificatePolicyKeyUsagesOutputReference extends cdktf.ComplexObject {
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
        if (this._allowed !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowed = this._allowed;
        }
        if (this._denied !== undefined) {
            hasAnyValues = true;
            internalValueResult.denied = this._denied;
        }
        if (this._required !== undefined) {
            hasAnyValues = true;
            internalValueResult.required = this._required;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowed = undefined;
            this._denied = undefined;
            this._required = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowed = value.allowed;
            this._denied = value.denied;
            this._required = value.required;
        }
    }
    // allowed - computed: false, optional: true, required: false
    _allowed;
    get allowed() {
        return this.getListAttribute('allowed');
    }
    set allowed(value) {
        this._allowed = value;
    }
    resetAllowed() {
        this._allowed = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowedInput() {
        return this._allowed;
    }
    // denied - computed: false, optional: true, required: false
    _denied;
    get denied() {
        return this.getListAttribute('denied');
    }
    set denied(value) {
        this._denied = value;
    }
    resetDenied() {
        this._denied = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deniedInput() {
        return this._denied;
    }
    // required - computed: false, optional: true, required: false
    _required;
    get required() {
        return this.getListAttribute('required');
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
}
export function certManagerCertificatePolicySansToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        allowed: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.allowed),
        denied: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.denied),
        required: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.required),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function certManagerCertificatePolicySansToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        allowed: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.allowed),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        denied: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.denied),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        required: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.required),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
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
export class CertManagerCertificatePolicySansOutputReference extends cdktf.ComplexObject {
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
        if (this._allowed !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowed = this._allowed;
        }
        if (this._denied !== undefined) {
            hasAnyValues = true;
            internalValueResult.denied = this._denied;
        }
        if (this._required !== undefined) {
            hasAnyValues = true;
            internalValueResult.required = this._required;
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
            this._allowed = undefined;
            this._denied = undefined;
            this._required = undefined;
            this._type = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowed = value.allowed;
            this._denied = value.denied;
            this._required = value.required;
            this._type = value.type;
        }
    }
    // allowed - computed: false, optional: true, required: false
    _allowed;
    get allowed() {
        return this.getListAttribute('allowed');
    }
    set allowed(value) {
        this._allowed = value;
    }
    resetAllowed() {
        this._allowed = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowedInput() {
        return this._allowed;
    }
    // denied - computed: false, optional: true, required: false
    _denied;
    get denied() {
        return this.getListAttribute('denied');
    }
    set denied(value) {
        this._denied = value;
    }
    resetDenied() {
        this._denied = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deniedInput() {
        return this._denied;
    }
    // required - computed: false, optional: true, required: false
    _required;
    get required() {
        return this.getListAttribute('required');
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
export class CertManagerCertificatePolicySansList extends cdktf.ComplexList {
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
        return new CertManagerCertificatePolicySansOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function certManagerCertificatePolicySubjectToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        allowed: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.allowed),
        denied: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.denied),
        required: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.required),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function certManagerCertificatePolicySubjectToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        allowed: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.allowed),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        denied: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.denied),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        required: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.required),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
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
export class CertManagerCertificatePolicySubjectOutputReference extends cdktf.ComplexObject {
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
        if (this._allowed !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowed = this._allowed;
        }
        if (this._denied !== undefined) {
            hasAnyValues = true;
            internalValueResult.denied = this._denied;
        }
        if (this._required !== undefined) {
            hasAnyValues = true;
            internalValueResult.required = this._required;
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
            this._allowed = undefined;
            this._denied = undefined;
            this._required = undefined;
            this._type = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowed = value.allowed;
            this._denied = value.denied;
            this._required = value.required;
            this._type = value.type;
        }
    }
    // allowed - computed: false, optional: true, required: false
    _allowed;
    get allowed() {
        return this.getListAttribute('allowed');
    }
    set allowed(value) {
        this._allowed = value;
    }
    resetAllowed() {
        this._allowed = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowedInput() {
        return this._allowed;
    }
    // denied - computed: false, optional: true, required: false
    _denied;
    get denied() {
        return this.getListAttribute('denied');
    }
    set denied(value) {
        this._denied = value;
    }
    resetDenied() {
        this._denied = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deniedInput() {
        return this._denied;
    }
    // required - computed: false, optional: true, required: false
    _required;
    get required() {
        return this.getListAttribute('required');
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
export class CertManagerCertificatePolicySubjectList extends cdktf.ComplexList {
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
        return new CertManagerCertificatePolicySubjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function certManagerCertificatePolicyValidityToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        max: cdktf.stringToTerraform(struct.max),
    };
}
export function certManagerCertificatePolicyValidityToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        max: {
            value: cdktf.stringToHclTerraform(struct.max),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class CertManagerCertificatePolicyValidityOutputReference extends cdktf.ComplexObject {
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
        if (this._max !== undefined) {
            hasAnyValues = true;
            internalValueResult.max = this._max;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._max = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._max = value.max;
        }
    }
    // max - computed: false, optional: true, required: false
    _max;
    get max() {
        return this.getStringAttribute('max');
    }
    set max(value) {
        this._max = value;
    }
    resetMax() {
        this._max = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxInput() {
        return this._max;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate_policy infisical_cert_manager_certificate_policy}
*/
export class CertManagerCertificatePolicy extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "infisical_cert_manager_certificate_policy";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a CertManagerCertificatePolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CertManagerCertificatePolicy to import
    * @param importFromId The id of the existing CertManagerCertificatePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CertManagerCertificatePolicy to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_cert_manager_certificate_policy", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate_policy infisical_cert_manager_certificate_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CertManagerCertificatePolicyConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'infisical_cert_manager_certificate_policy',
            terraformGeneratorMetadata: {
                providerName: 'infisical',
                providerVersion: '0.16.18'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._description = config.description;
        this._name = config.name;
        this._projectSlug = config.projectSlug;
        this._algorithms.internalValue = config.algorithms;
        this._extendedKeyUsages.internalValue = config.extendedKeyUsages;
        this._keyUsages.internalValue = config.keyUsages;
        this._sans.internalValue = config.sans;
        this._subject.internalValue = config.subject;
        this._validity.internalValue = config.validity;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // description - computed: false, optional: true, required: false
    _description;
    get description() {
        return this.getStringAttribute('description');
    }
    set description(value) {
        this._description = value;
    }
    resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get descriptionInput() {
        return this._description;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
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
    // project_slug - computed: false, optional: false, required: true
    _projectSlug;
    get projectSlug() {
        return this.getStringAttribute('project_slug');
    }
    set projectSlug(value) {
        this._projectSlug = value;
    }
    // Temporarily expose input value. Use with caution.
    get projectSlugInput() {
        return this._projectSlug;
    }
    // algorithms - computed: false, optional: false, required: true
    _algorithms = new CertManagerCertificatePolicyAlgorithmsOutputReference(this, "algorithms");
    get algorithms() {
        return this._algorithms;
    }
    putAlgorithms(value) {
        this._algorithms.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get algorithmsInput() {
        return this._algorithms.internalValue;
    }
    // extended_key_usages - computed: false, optional: true, required: false
    _extendedKeyUsages = new CertManagerCertificatePolicyExtendedKeyUsagesOutputReference(this, "extended_key_usages");
    get extendedKeyUsages() {
        return this._extendedKeyUsages;
    }
    putExtendedKeyUsages(value) {
        this._extendedKeyUsages.internalValue = value;
    }
    resetExtendedKeyUsages() {
        this._extendedKeyUsages.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get extendedKeyUsagesInput() {
        return this._extendedKeyUsages.internalValue;
    }
    // key_usages - computed: false, optional: true, required: false
    _keyUsages = new CertManagerCertificatePolicyKeyUsagesOutputReference(this, "key_usages");
    get keyUsages() {
        return this._keyUsages;
    }
    putKeyUsages(value) {
        this._keyUsages.internalValue = value;
    }
    resetKeyUsages() {
        this._keyUsages.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get keyUsagesInput() {
        return this._keyUsages.internalValue;
    }
    // sans - computed: false, optional: true, required: false
    _sans = new CertManagerCertificatePolicySansList(this, "sans", false);
    get sans() {
        return this._sans;
    }
    putSans(value) {
        this._sans.internalValue = value;
    }
    resetSans() {
        this._sans.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sansInput() {
        return this._sans.internalValue;
    }
    // subject - computed: false, optional: true, required: false
    _subject = new CertManagerCertificatePolicySubjectList(this, "subject", false);
    get subject() {
        return this._subject;
    }
    putSubject(value) {
        this._subject.internalValue = value;
    }
    resetSubject() {
        this._subject.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get subjectInput() {
        return this._subject.internalValue;
    }
    // validity - computed: false, optional: true, required: false
    _validity = new CertManagerCertificatePolicyValidityOutputReference(this, "validity");
    get validity() {
        return this._validity;
    }
    putValidity(value) {
        this._validity.internalValue = value;
    }
    resetValidity() {
        this._validity.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get validityInput() {
        return this._validity.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            description: cdktf.stringToTerraform(this._description),
            name: cdktf.stringToTerraform(this._name),
            project_slug: cdktf.stringToTerraform(this._projectSlug),
            algorithms: certManagerCertificatePolicyAlgorithmsToTerraform(this._algorithms.internalValue),
            extended_key_usages: certManagerCertificatePolicyExtendedKeyUsagesToTerraform(this._extendedKeyUsages.internalValue),
            key_usages: certManagerCertificatePolicyKeyUsagesToTerraform(this._keyUsages.internalValue),
            sans: cdktf.listMapper(certManagerCertificatePolicySansToTerraform, true)(this._sans.internalValue),
            subject: cdktf.listMapper(certManagerCertificatePolicySubjectToTerraform, true)(this._subject.internalValue),
            validity: certManagerCertificatePolicyValidityToTerraform(this._validity.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            description: {
                value: cdktf.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            project_slug: {
                value: cdktf.stringToHclTerraform(this._projectSlug),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            algorithms: {
                value: certManagerCertificatePolicyAlgorithmsToHclTerraform(this._algorithms.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CertManagerCertificatePolicyAlgorithms",
            },
            extended_key_usages: {
                value: certManagerCertificatePolicyExtendedKeyUsagesToHclTerraform(this._extendedKeyUsages.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CertManagerCertificatePolicyExtendedKeyUsages",
            },
            key_usages: {
                value: certManagerCertificatePolicyKeyUsagesToHclTerraform(this._keyUsages.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CertManagerCertificatePolicyKeyUsages",
            },
            sans: {
                value: cdktf.listMapperHcl(certManagerCertificatePolicySansToHclTerraform, true)(this._sans.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CertManagerCertificatePolicySansList",
            },
            subject: {
                value: cdktf.listMapperHcl(certManagerCertificatePolicySubjectToHclTerraform, true)(this._subject.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CertManagerCertificatePolicySubjectList",
            },
            validity: {
                value: certManagerCertificatePolicyValidityToHclTerraform(this._validity.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CertManagerCertificatePolicyValidity",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
