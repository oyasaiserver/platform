// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_custom_profile
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function zeroTrustDlpCustomProfileContextAwarenessSkipToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        files: cdktf.booleanToTerraform(struct.files),
    };
}
export function zeroTrustDlpCustomProfileContextAwarenessSkipToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        files: {
            value: cdktf.booleanToHclTerraform(struct.files),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference extends cdktf.ComplexObject {
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
        if (this._files !== undefined) {
            hasAnyValues = true;
            internalValueResult.files = this._files;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._files = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._files = value.files;
        }
    }
    // files - computed: true, optional: true, required: false
    _files;
    get files() {
        return this.getBooleanAttribute('files');
    }
    set files(value) {
        this._files = value;
    }
    resetFiles() {
        this._files = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get filesInput() {
        return this._files;
    }
}
export function zeroTrustDlpCustomProfileContextAwarenessToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        skip: zeroTrustDlpCustomProfileContextAwarenessSkipToTerraform(struct.skip),
    };
}
export function zeroTrustDlpCustomProfileContextAwarenessToHclTerraform(struct) {
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
        skip: {
            value: zeroTrustDlpCustomProfileContextAwarenessSkipToHclTerraform(struct.skip),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustDlpCustomProfileContextAwarenessSkip",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustDlpCustomProfileContextAwarenessOutputReference extends cdktf.ComplexObject {
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
        if (this._skip?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.skip = this._skip?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
            this._skip.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
            this._skip.internalValue = value.skip;
        }
    }
    // enabled - computed: true, optional: true, required: false
    _enabled;
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    set enabled(value) {
        this._enabled = value;
    }
    resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enabledInput() {
        return this._enabled;
    }
    // skip - computed: true, optional: true, required: false
    _skip = new ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference(this, "skip");
    get skip() {
        return this._skip;
    }
    putSkip(value) {
        this._skip.internalValue = value;
    }
    resetSkip() {
        this._skip.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get skipInput() {
        return this._skip.internalValue;
    }
}
export function zeroTrustDlpCustomProfileEntriesPatternToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        regex: cdktf.stringToTerraform(struct.regex),
        validation: cdktf.stringToTerraform(struct.validation),
    };
}
export function zeroTrustDlpCustomProfileEntriesPatternToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        regex: {
            value: cdktf.stringToHclTerraform(struct.regex),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        validation: {
            value: cdktf.stringToHclTerraform(struct.validation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustDlpCustomProfileEntriesPatternOutputReference extends cdktf.ComplexObject {
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
        if (this._regex !== undefined) {
            hasAnyValues = true;
            internalValueResult.regex = this._regex;
        }
        if (this._validation !== undefined) {
            hasAnyValues = true;
            internalValueResult.validation = this._validation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._regex = undefined;
            this._validation = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._regex = value.regex;
            this._validation = value.validation;
        }
    }
    // regex - computed: false, optional: false, required: true
    _regex;
    get regex() {
        return this.getStringAttribute('regex');
    }
    set regex(value) {
        this._regex = value;
    }
    // Temporarily expose input value. Use with caution.
    get regexInput() {
        return this._regex;
    }
    // validation - computed: false, optional: true, required: false
    _validation;
    get validation() {
        return this.getStringAttribute('validation');
    }
    set validation(value) {
        this._validation = value;
    }
    resetValidation() {
        this._validation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get validationInput() {
        return this._validation;
    }
}
export function zeroTrustDlpCustomProfileEntriesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        description: cdktf.stringToTerraform(struct.description),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        entry_id: cdktf.stringToTerraform(struct.entryId),
        name: cdktf.stringToTerraform(struct.name),
        pattern: zeroTrustDlpCustomProfileEntriesPatternToTerraform(struct.pattern),
    };
}
export function zeroTrustDlpCustomProfileEntriesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        description: {
            value: cdktf.stringToHclTerraform(struct.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        enabled: {
            value: cdktf.booleanToHclTerraform(struct.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        entry_id: {
            value: cdktf.stringToHclTerraform(struct.entryId),
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
        pattern: {
            value: zeroTrustDlpCustomProfileEntriesPatternToHclTerraform(struct.pattern),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustDlpCustomProfileEntriesPattern",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustDlpCustomProfileEntriesOutputReference extends cdktf.ComplexObject {
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
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._entryId !== undefined) {
            hasAnyValues = true;
            internalValueResult.entryId = this._entryId;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._pattern?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.pattern = this._pattern?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._description = undefined;
            this._enabled = undefined;
            this._entryId = undefined;
            this._name = undefined;
            this._pattern.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._description = value.description;
            this._enabled = value.enabled;
            this._entryId = value.entryId;
            this._name = value.name;
            this._pattern.internalValue = value.pattern;
        }
    }
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
    // entry_id - computed: false, optional: true, required: false
    _entryId;
    get entryId() {
        return this.getStringAttribute('entry_id');
    }
    set entryId(value) {
        this._entryId = value;
    }
    resetEntryId() {
        this._entryId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get entryIdInput() {
        return this._entryId;
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
    // pattern - computed: false, optional: false, required: true
    _pattern = new ZeroTrustDlpCustomProfileEntriesPatternOutputReference(this, "pattern");
    get pattern() {
        return this._pattern;
    }
    putPattern(value) {
        this._pattern.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get patternInput() {
        return this._pattern.internalValue;
    }
}
export class ZeroTrustDlpCustomProfileEntriesList extends cdktf.ComplexList {
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
        return new ZeroTrustDlpCustomProfileEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function zeroTrustDlpCustomProfileSensitivityLevelsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        group_id: cdktf.stringToTerraform(struct.groupId),
        level_id: cdktf.stringToTerraform(struct.levelId),
    };
}
export function zeroTrustDlpCustomProfileSensitivityLevelsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        group_id: {
            value: cdktf.stringToHclTerraform(struct.groupId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        level_id: {
            value: cdktf.stringToHclTerraform(struct.levelId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustDlpCustomProfileSensitivityLevelsOutputReference extends cdktf.ComplexObject {
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
        if (this._groupId !== undefined) {
            hasAnyValues = true;
            internalValueResult.groupId = this._groupId;
        }
        if (this._levelId !== undefined) {
            hasAnyValues = true;
            internalValueResult.levelId = this._levelId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._groupId = undefined;
            this._levelId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._groupId = value.groupId;
            this._levelId = value.levelId;
        }
    }
    // group_id - computed: false, optional: false, required: true
    _groupId;
    get groupId() {
        return this.getStringAttribute('group_id');
    }
    set groupId(value) {
        this._groupId = value;
    }
    // Temporarily expose input value. Use with caution.
    get groupIdInput() {
        return this._groupId;
    }
    // level_id - computed: false, optional: false, required: true
    _levelId;
    get levelId() {
        return this.getStringAttribute('level_id');
    }
    set levelId(value) {
        this._levelId = value;
    }
    // Temporarily expose input value. Use with caution.
    get levelIdInput() {
        return this._levelId;
    }
}
export class ZeroTrustDlpCustomProfileSensitivityLevelsList extends cdktf.ComplexList {
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
        return new ZeroTrustDlpCustomProfileSensitivityLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function zeroTrustDlpCustomProfileSharedEntriesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        entry_id: cdktf.stringToTerraform(struct.entryId),
        entry_type: cdktf.stringToTerraform(struct.entryType),
    };
}
export function zeroTrustDlpCustomProfileSharedEntriesToHclTerraform(struct) {
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
        entry_id: {
            value: cdktf.stringToHclTerraform(struct.entryId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        entry_type: {
            value: cdktf.stringToHclTerraform(struct.entryType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustDlpCustomProfileSharedEntriesOutputReference extends cdktf.ComplexObject {
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
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._entryId !== undefined) {
            hasAnyValues = true;
            internalValueResult.entryId = this._entryId;
        }
        if (this._entryType !== undefined) {
            hasAnyValues = true;
            internalValueResult.entryType = this._entryType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
            this._entryId = undefined;
            this._entryType = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
            this._entryId = value.entryId;
            this._entryType = value.entryType;
        }
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
    // entry_id - computed: false, optional: false, required: true
    _entryId;
    get entryId() {
        return this.getStringAttribute('entry_id');
    }
    set entryId(value) {
        this._entryId = value;
    }
    // Temporarily expose input value. Use with caution.
    get entryIdInput() {
        return this._entryId;
    }
    // entry_type - computed: false, optional: false, required: true
    _entryType;
    get entryType() {
        return this.getStringAttribute('entry_type');
    }
    set entryType(value) {
        this._entryType = value;
    }
    // Temporarily expose input value. Use with caution.
    get entryTypeInput() {
        return this._entryType;
    }
}
export class ZeroTrustDlpCustomProfileSharedEntriesList extends cdktf.ComplexList {
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
        return new ZeroTrustDlpCustomProfileSharedEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_custom_profile cloudflare_zero_trust_dlp_custom_profile}
*/
export class ZeroTrustDlpCustomProfile extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_zero_trust_dlp_custom_profile";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ZeroTrustDlpCustomProfile resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustDlpCustomProfile to import
    * @param importFromId The id of the existing ZeroTrustDlpCustomProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_custom_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustDlpCustomProfile to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_dlp_custom_profile", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_custom_profile cloudflare_zero_trust_dlp_custom_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustDlpCustomProfileConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_dlp_custom_profile',
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
        this._aiContextEnabled = config.aiContextEnabled;
        this._allowedMatchCount = config.allowedMatchCount;
        this._confidenceThreshold = config.confidenceThreshold;
        this._contextAwareness.internalValue = config.contextAwareness;
        this._dataClasses = config.dataClasses;
        this._dataTags = config.dataTags;
        this._description = config.description;
        this._entries.internalValue = config.entries;
        this._name = config.name;
        this._ocrEnabled = config.ocrEnabled;
        this._sensitivityLevels.internalValue = config.sensitivityLevels;
        this._sharedEntries.internalValue = config.sharedEntries;
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
    // ai_context_enabled - computed: true, optional: true, required: false
    _aiContextEnabled;
    get aiContextEnabled() {
        return this.getBooleanAttribute('ai_context_enabled');
    }
    set aiContextEnabled(value) {
        this._aiContextEnabled = value;
    }
    resetAiContextEnabled() {
        this._aiContextEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get aiContextEnabledInput() {
        return this._aiContextEnabled;
    }
    // allowed_match_count - computed: true, optional: true, required: false
    _allowedMatchCount;
    get allowedMatchCount() {
        return this.getNumberAttribute('allowed_match_count');
    }
    set allowedMatchCount(value) {
        this._allowedMatchCount = value;
    }
    resetAllowedMatchCount() {
        this._allowedMatchCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowedMatchCountInput() {
        return this._allowedMatchCount;
    }
    // confidence_threshold - computed: true, optional: true, required: false
    _confidenceThreshold;
    get confidenceThreshold() {
        return this.getStringAttribute('confidence_threshold');
    }
    set confidenceThreshold(value) {
        this._confidenceThreshold = value;
    }
    resetConfidenceThreshold() {
        this._confidenceThreshold = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get confidenceThresholdInput() {
        return this._confidenceThreshold;
    }
    // context_awareness - computed: true, optional: true, required: false
    _contextAwareness = new ZeroTrustDlpCustomProfileContextAwarenessOutputReference(this, "context_awareness");
    get contextAwareness() {
        return this._contextAwareness;
    }
    putContextAwareness(value) {
        this._contextAwareness.internalValue = value;
    }
    resetContextAwareness() {
        this._contextAwareness.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get contextAwarenessInput() {
        return this._contextAwareness.internalValue;
    }
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.getStringAttribute('created_at');
    }
    // data_classes - computed: false, optional: true, required: false
    _dataClasses;
    get dataClasses() {
        return this.getListAttribute('data_classes');
    }
    set dataClasses(value) {
        this._dataClasses = value;
    }
    resetDataClasses() {
        this._dataClasses = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dataClassesInput() {
        return this._dataClasses;
    }
    // data_tags - computed: false, optional: true, required: false
    _dataTags;
    get dataTags() {
        return this.getListAttribute('data_tags');
    }
    set dataTags(value) {
        this._dataTags = value;
    }
    resetDataTags() {
        this._dataTags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dataTagsInput() {
        return this._dataTags;
    }
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
    // entries - computed: false, optional: true, required: false
    _entries = new ZeroTrustDlpCustomProfileEntriesList(this, "entries", true);
    get entries() {
        return this._entries;
    }
    putEntries(value) {
        this._entries.internalValue = value;
    }
    resetEntries() {
        this._entries.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get entriesInput() {
        return this._entries.internalValue;
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
    // ocr_enabled - computed: true, optional: true, required: false
    _ocrEnabled;
    get ocrEnabled() {
        return this.getBooleanAttribute('ocr_enabled');
    }
    set ocrEnabled(value) {
        this._ocrEnabled = value;
    }
    resetOcrEnabled() {
        this._ocrEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ocrEnabledInput() {
        return this._ocrEnabled;
    }
    // open_access - computed: true, optional: false, required: false
    get openAccess() {
        return this.getBooleanAttribute('open_access');
    }
    // sensitivity_levels - computed: false, optional: true, required: false
    _sensitivityLevels = new ZeroTrustDlpCustomProfileSensitivityLevelsList(this, "sensitivity_levels", false);
    get sensitivityLevels() {
        return this._sensitivityLevels;
    }
    putSensitivityLevels(value) {
        this._sensitivityLevels.internalValue = value;
    }
    resetSensitivityLevels() {
        this._sensitivityLevels.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sensitivityLevelsInput() {
        return this._sensitivityLevels.internalValue;
    }
    // shared_entries - computed: false, optional: true, required: false
    _sharedEntries = new ZeroTrustDlpCustomProfileSharedEntriesList(this, "shared_entries", true);
    get sharedEntries() {
        return this._sharedEntries;
    }
    putSharedEntries(value) {
        this._sharedEntries.internalValue = value;
    }
    resetSharedEntries() {
        this._sharedEntries.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sharedEntriesInput() {
        return this._sharedEntries.internalValue;
    }
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
    }
    // updated_at - computed: true, optional: false, required: false
    get updatedAt() {
        return this.getStringAttribute('updated_at');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            ai_context_enabled: cdktf.booleanToTerraform(this._aiContextEnabled),
            allowed_match_count: cdktf.numberToTerraform(this._allowedMatchCount),
            confidence_threshold: cdktf.stringToTerraform(this._confidenceThreshold),
            context_awareness: zeroTrustDlpCustomProfileContextAwarenessToTerraform(this._contextAwareness.internalValue),
            data_classes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dataClasses),
            data_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dataTags),
            description: cdktf.stringToTerraform(this._description),
            entries: cdktf.listMapper(zeroTrustDlpCustomProfileEntriesToTerraform, false)(this._entries.internalValue),
            name: cdktf.stringToTerraform(this._name),
            ocr_enabled: cdktf.booleanToTerraform(this._ocrEnabled),
            sensitivity_levels: cdktf.listMapper(zeroTrustDlpCustomProfileSensitivityLevelsToTerraform, false)(this._sensitivityLevels.internalValue),
            shared_entries: cdktf.listMapper(zeroTrustDlpCustomProfileSharedEntriesToTerraform, false)(this._sharedEntries.internalValue),
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
            ai_context_enabled: {
                value: cdktf.booleanToHclTerraform(this._aiContextEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            allowed_match_count: {
                value: cdktf.numberToHclTerraform(this._allowedMatchCount),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            confidence_threshold: {
                value: cdktf.stringToHclTerraform(this._confidenceThreshold),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            context_awareness: {
                value: zeroTrustDlpCustomProfileContextAwarenessToHclTerraform(this._contextAwareness.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ZeroTrustDlpCustomProfileContextAwareness",
            },
            data_classes: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dataClasses),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            data_tags: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dataTags),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            description: {
                value: cdktf.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            entries: {
                value: cdktf.listMapperHcl(zeroTrustDlpCustomProfileEntriesToHclTerraform, false)(this._entries.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "ZeroTrustDlpCustomProfileEntriesList",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ocr_enabled: {
                value: cdktf.booleanToHclTerraform(this._ocrEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            sensitivity_levels: {
                value: cdktf.listMapperHcl(zeroTrustDlpCustomProfileSensitivityLevelsToHclTerraform, false)(this._sensitivityLevels.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ZeroTrustDlpCustomProfileSensitivityLevelsList",
            },
            shared_entries: {
                value: cdktf.listMapperHcl(zeroTrustDlpCustomProfileSharedEntriesToHclTerraform, false)(this._sharedEntries.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "ZeroTrustDlpCustomProfileSharedEntriesList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
