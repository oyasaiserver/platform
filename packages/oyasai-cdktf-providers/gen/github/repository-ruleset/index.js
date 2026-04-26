// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function repositoryRulesetBypassActorsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        actor_id: cdktf.numberToTerraform(struct.actorId),
        actor_type: cdktf.stringToTerraform(struct.actorType),
        bypass_mode: cdktf.stringToTerraform(struct.bypassMode),
    };
}
export function repositoryRulesetBypassActorsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        actor_id: {
            value: cdktf.numberToHclTerraform(struct.actorId),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        actor_type: {
            value: cdktf.stringToHclTerraform(struct.actorType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        bypass_mode: {
            value: cdktf.stringToHclTerraform(struct.bypassMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RepositoryRulesetBypassActorsOutputReference extends cdktf.ComplexObject {
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
        if (this._actorId !== undefined) {
            hasAnyValues = true;
            internalValueResult.actorId = this._actorId;
        }
        if (this._actorType !== undefined) {
            hasAnyValues = true;
            internalValueResult.actorType = this._actorType;
        }
        if (this._bypassMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.bypassMode = this._bypassMode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._actorId = undefined;
            this._actorType = undefined;
            this._bypassMode = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._actorId = value.actorId;
            this._actorType = value.actorType;
            this._bypassMode = value.bypassMode;
        }
    }
    // actor_id - computed: false, optional: true, required: false
    _actorId;
    get actorId() {
        return this.getNumberAttribute('actor_id');
    }
    set actorId(value) {
        this._actorId = value;
    }
    resetActorId() {
        this._actorId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get actorIdInput() {
        return this._actorId;
    }
    // actor_type - computed: false, optional: false, required: true
    _actorType;
    get actorType() {
        return this.getStringAttribute('actor_type');
    }
    set actorType(value) {
        this._actorType = value;
    }
    // Temporarily expose input value. Use with caution.
    get actorTypeInput() {
        return this._actorType;
    }
    // bypass_mode - computed: false, optional: false, required: true
    _bypassMode;
    get bypassMode() {
        return this.getStringAttribute('bypass_mode');
    }
    set bypassMode(value) {
        this._bypassMode = value;
    }
    // Temporarily expose input value. Use with caution.
    get bypassModeInput() {
        return this._bypassMode;
    }
}
export class RepositoryRulesetBypassActorsList extends cdktf.ComplexList {
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
        return new RepositoryRulesetBypassActorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function repositoryRulesetConditionsRefNameToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.exclude),
        include: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.include),
    };
}
export function repositoryRulesetConditionsRefNameToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        exclude: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.exclude),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        include: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.include),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RepositoryRulesetConditionsRefNameOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._exclude !== undefined) {
            hasAnyValues = true;
            internalValueResult.exclude = this._exclude;
        }
        if (this._include !== undefined) {
            hasAnyValues = true;
            internalValueResult.include = this._include;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._exclude = undefined;
            this._include = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._exclude = value.exclude;
            this._include = value.include;
        }
    }
    // exclude - computed: false, optional: false, required: true
    _exclude;
    get exclude() {
        return this.getListAttribute('exclude');
    }
    set exclude(value) {
        this._exclude = value;
    }
    // Temporarily expose input value. Use with caution.
    get excludeInput() {
        return this._exclude;
    }
    // include - computed: false, optional: false, required: true
    _include;
    get include() {
        return this.getListAttribute('include');
    }
    set include(value) {
        this._include = value;
    }
    // Temporarily expose input value. Use with caution.
    get includeInput() {
        return this._include;
    }
}
export function repositoryRulesetConditionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        ref_name: repositoryRulesetConditionsRefNameToTerraform(struct.refName),
    };
}
export function repositoryRulesetConditionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        ref_name: {
            value: repositoryRulesetConditionsRefNameToHclTerraform(struct.refName),
            isBlock: true,
            type: "list",
            storageClassType: "RepositoryRulesetConditionsRefNameList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RepositoryRulesetConditionsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._refName?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.refName = this._refName?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._refName.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._refName.internalValue = value.refName;
        }
    }
    // ref_name - computed: false, optional: false, required: true
    _refName = new RepositoryRulesetConditionsRefNameOutputReference(this, "ref_name");
    get refName() {
        return this._refName;
    }
    putRefName(value) {
        this._refName.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get refNameInput() {
        return this._refName.internalValue;
    }
}
export function repositoryRulesetRulesBranchNamePatternToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        negate: cdktf.booleanToTerraform(struct.negate),
        operator: cdktf.stringToTerraform(struct.operator),
        pattern: cdktf.stringToTerraform(struct.pattern),
    };
}
export function repositoryRulesetRulesBranchNamePatternToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        negate: {
            value: cdktf.booleanToHclTerraform(struct.negate),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        operator: {
            value: cdktf.stringToHclTerraform(struct.operator),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        pattern: {
            value: cdktf.stringToHclTerraform(struct.pattern),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RepositoryRulesetRulesBranchNamePatternOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._negate !== undefined) {
            hasAnyValues = true;
            internalValueResult.negate = this._negate;
        }
        if (this._operator !== undefined) {
            hasAnyValues = true;
            internalValueResult.operator = this._operator;
        }
        if (this._pattern !== undefined) {
            hasAnyValues = true;
            internalValueResult.pattern = this._pattern;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
            this._negate = undefined;
            this._operator = undefined;
            this._pattern = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
            this._negate = value.negate;
            this._operator = value.operator;
            this._pattern = value.pattern;
        }
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
    // negate - computed: false, optional: true, required: false
    _negate;
    get negate() {
        return this.getBooleanAttribute('negate');
    }
    set negate(value) {
        this._negate = value;
    }
    resetNegate() {
        this._negate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get negateInput() {
        return this._negate;
    }
    // operator - computed: false, optional: false, required: true
    _operator;
    get operator() {
        return this.getStringAttribute('operator');
    }
    set operator(value) {
        this._operator = value;
    }
    // Temporarily expose input value. Use with caution.
    get operatorInput() {
        return this._operator;
    }
    // pattern - computed: false, optional: false, required: true
    _pattern;
    get pattern() {
        return this.getStringAttribute('pattern');
    }
    set pattern(value) {
        this._pattern = value;
    }
    // Temporarily expose input value. Use with caution.
    get patternInput() {
        return this._pattern;
    }
}
export function repositoryRulesetRulesCommitAuthorEmailPatternToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        negate: cdktf.booleanToTerraform(struct.negate),
        operator: cdktf.stringToTerraform(struct.operator),
        pattern: cdktf.stringToTerraform(struct.pattern),
    };
}
export function repositoryRulesetRulesCommitAuthorEmailPatternToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        negate: {
            value: cdktf.booleanToHclTerraform(struct.negate),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        operator: {
            value: cdktf.stringToHclTerraform(struct.operator),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        pattern: {
            value: cdktf.stringToHclTerraform(struct.pattern),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._negate !== undefined) {
            hasAnyValues = true;
            internalValueResult.negate = this._negate;
        }
        if (this._operator !== undefined) {
            hasAnyValues = true;
            internalValueResult.operator = this._operator;
        }
        if (this._pattern !== undefined) {
            hasAnyValues = true;
            internalValueResult.pattern = this._pattern;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
            this._negate = undefined;
            this._operator = undefined;
            this._pattern = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
            this._negate = value.negate;
            this._operator = value.operator;
            this._pattern = value.pattern;
        }
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
    // negate - computed: false, optional: true, required: false
    _negate;
    get negate() {
        return this.getBooleanAttribute('negate');
    }
    set negate(value) {
        this._negate = value;
    }
    resetNegate() {
        this._negate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get negateInput() {
        return this._negate;
    }
    // operator - computed: false, optional: false, required: true
    _operator;
    get operator() {
        return this.getStringAttribute('operator');
    }
    set operator(value) {
        this._operator = value;
    }
    // Temporarily expose input value. Use with caution.
    get operatorInput() {
        return this._operator;
    }
    // pattern - computed: false, optional: false, required: true
    _pattern;
    get pattern() {
        return this.getStringAttribute('pattern');
    }
    set pattern(value) {
        this._pattern = value;
    }
    // Temporarily expose input value. Use with caution.
    get patternInput() {
        return this._pattern;
    }
}
export function repositoryRulesetRulesCommitMessagePatternToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        negate: cdktf.booleanToTerraform(struct.negate),
        operator: cdktf.stringToTerraform(struct.operator),
        pattern: cdktf.stringToTerraform(struct.pattern),
    };
}
export function repositoryRulesetRulesCommitMessagePatternToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        negate: {
            value: cdktf.booleanToHclTerraform(struct.negate),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        operator: {
            value: cdktf.stringToHclTerraform(struct.operator),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        pattern: {
            value: cdktf.stringToHclTerraform(struct.pattern),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RepositoryRulesetRulesCommitMessagePatternOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._negate !== undefined) {
            hasAnyValues = true;
            internalValueResult.negate = this._negate;
        }
        if (this._operator !== undefined) {
            hasAnyValues = true;
            internalValueResult.operator = this._operator;
        }
        if (this._pattern !== undefined) {
            hasAnyValues = true;
            internalValueResult.pattern = this._pattern;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
            this._negate = undefined;
            this._operator = undefined;
            this._pattern = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
            this._negate = value.negate;
            this._operator = value.operator;
            this._pattern = value.pattern;
        }
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
    // negate - computed: false, optional: true, required: false
    _negate;
    get negate() {
        return this.getBooleanAttribute('negate');
    }
    set negate(value) {
        this._negate = value;
    }
    resetNegate() {
        this._negate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get negateInput() {
        return this._negate;
    }
    // operator - computed: false, optional: false, required: true
    _operator;
    get operator() {
        return this.getStringAttribute('operator');
    }
    set operator(value) {
        this._operator = value;
    }
    // Temporarily expose input value. Use with caution.
    get operatorInput() {
        return this._operator;
    }
    // pattern - computed: false, optional: false, required: true
    _pattern;
    get pattern() {
        return this.getStringAttribute('pattern');
    }
    set pattern(value) {
        this._pattern = value;
    }
    // Temporarily expose input value. Use with caution.
    get patternInput() {
        return this._pattern;
    }
}
export function repositoryRulesetRulesCommitterEmailPatternToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        negate: cdktf.booleanToTerraform(struct.negate),
        operator: cdktf.stringToTerraform(struct.operator),
        pattern: cdktf.stringToTerraform(struct.pattern),
    };
}
export function repositoryRulesetRulesCommitterEmailPatternToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        negate: {
            value: cdktf.booleanToHclTerraform(struct.negate),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        operator: {
            value: cdktf.stringToHclTerraform(struct.operator),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        pattern: {
            value: cdktf.stringToHclTerraform(struct.pattern),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RepositoryRulesetRulesCommitterEmailPatternOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._negate !== undefined) {
            hasAnyValues = true;
            internalValueResult.negate = this._negate;
        }
        if (this._operator !== undefined) {
            hasAnyValues = true;
            internalValueResult.operator = this._operator;
        }
        if (this._pattern !== undefined) {
            hasAnyValues = true;
            internalValueResult.pattern = this._pattern;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
            this._negate = undefined;
            this._operator = undefined;
            this._pattern = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
            this._negate = value.negate;
            this._operator = value.operator;
            this._pattern = value.pattern;
        }
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
    // negate - computed: false, optional: true, required: false
    _negate;
    get negate() {
        return this.getBooleanAttribute('negate');
    }
    set negate(value) {
        this._negate = value;
    }
    resetNegate() {
        this._negate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get negateInput() {
        return this._negate;
    }
    // operator - computed: false, optional: false, required: true
    _operator;
    get operator() {
        return this.getStringAttribute('operator');
    }
    set operator(value) {
        this._operator = value;
    }
    // Temporarily expose input value. Use with caution.
    get operatorInput() {
        return this._operator;
    }
    // pattern - computed: false, optional: false, required: true
    _pattern;
    get pattern() {
        return this.getStringAttribute('pattern');
    }
    set pattern(value) {
        this._pattern = value;
    }
    // Temporarily expose input value. Use with caution.
    get patternInput() {
        return this._pattern;
    }
}
export function repositoryRulesetRulesCopilotCodeReviewToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        review_draft_pull_requests: cdktf.booleanToTerraform(struct.reviewDraftPullRequests),
        review_on_push: cdktf.booleanToTerraform(struct.reviewOnPush),
    };
}
export function repositoryRulesetRulesCopilotCodeReviewToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        review_draft_pull_requests: {
            value: cdktf.booleanToHclTerraform(struct.reviewDraftPullRequests),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        review_on_push: {
            value: cdktf.booleanToHclTerraform(struct.reviewOnPush),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RepositoryRulesetRulesCopilotCodeReviewOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._reviewDraftPullRequests !== undefined) {
            hasAnyValues = true;
            internalValueResult.reviewDraftPullRequests = this._reviewDraftPullRequests;
        }
        if (this._reviewOnPush !== undefined) {
            hasAnyValues = true;
            internalValueResult.reviewOnPush = this._reviewOnPush;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._reviewDraftPullRequests = undefined;
            this._reviewOnPush = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._reviewDraftPullRequests = value.reviewDraftPullRequests;
            this._reviewOnPush = value.reviewOnPush;
        }
    }
    // review_draft_pull_requests - computed: false, optional: true, required: false
    _reviewDraftPullRequests;
    get reviewDraftPullRequests() {
        return this.getBooleanAttribute('review_draft_pull_requests');
    }
    set reviewDraftPullRequests(value) {
        this._reviewDraftPullRequests = value;
    }
    resetReviewDraftPullRequests() {
        this._reviewDraftPullRequests = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get reviewDraftPullRequestsInput() {
        return this._reviewDraftPullRequests;
    }
    // review_on_push - computed: false, optional: true, required: false
    _reviewOnPush;
    get reviewOnPush() {
        return this.getBooleanAttribute('review_on_push');
    }
    set reviewOnPush(value) {
        this._reviewOnPush = value;
    }
    resetReviewOnPush() {
        this._reviewOnPush = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get reviewOnPushInput() {
        return this._reviewOnPush;
    }
}
export function repositoryRulesetRulesFileExtensionRestrictionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        restricted_file_extensions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.restrictedFileExtensions),
    };
}
export function repositoryRulesetRulesFileExtensionRestrictionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        restricted_file_extensions: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.restrictedFileExtensions),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RepositoryRulesetRulesFileExtensionRestrictionOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._restrictedFileExtensions !== undefined) {
            hasAnyValues = true;
            internalValueResult.restrictedFileExtensions = this._restrictedFileExtensions;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._restrictedFileExtensions = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._restrictedFileExtensions = value.restrictedFileExtensions;
        }
    }
    // restricted_file_extensions - computed: false, optional: false, required: true
    _restrictedFileExtensions;
    get restrictedFileExtensions() {
        return cdktf.Fn.tolist(this.getListAttribute('restricted_file_extensions'));
    }
    set restrictedFileExtensions(value) {
        this._restrictedFileExtensions = value;
    }
    // Temporarily expose input value. Use with caution.
    get restrictedFileExtensionsInput() {
        return this._restrictedFileExtensions;
    }
}
export function repositoryRulesetRulesFilePathRestrictionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        restricted_file_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.restrictedFilePaths),
    };
}
export function repositoryRulesetRulesFilePathRestrictionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        restricted_file_paths: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.restrictedFilePaths),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RepositoryRulesetRulesFilePathRestrictionOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._restrictedFilePaths !== undefined) {
            hasAnyValues = true;
            internalValueResult.restrictedFilePaths = this._restrictedFilePaths;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._restrictedFilePaths = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._restrictedFilePaths = value.restrictedFilePaths;
        }
    }
    // restricted_file_paths - computed: false, optional: false, required: true
    _restrictedFilePaths;
    get restrictedFilePaths() {
        return this.getListAttribute('restricted_file_paths');
    }
    set restrictedFilePaths(value) {
        this._restrictedFilePaths = value;
    }
    // Temporarily expose input value. Use with caution.
    get restrictedFilePathsInput() {
        return this._restrictedFilePaths;
    }
}
export function repositoryRulesetRulesMaxFilePathLengthToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        max_file_path_length: cdktf.numberToTerraform(struct.maxFilePathLength),
    };
}
export function repositoryRulesetRulesMaxFilePathLengthToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        max_file_path_length: {
            value: cdktf.numberToHclTerraform(struct.maxFilePathLength),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RepositoryRulesetRulesMaxFilePathLengthOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._maxFilePathLength !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxFilePathLength = this._maxFilePathLength;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._maxFilePathLength = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._maxFilePathLength = value.maxFilePathLength;
        }
    }
    // max_file_path_length - computed: false, optional: false, required: true
    _maxFilePathLength;
    get maxFilePathLength() {
        return this.getNumberAttribute('max_file_path_length');
    }
    set maxFilePathLength(value) {
        this._maxFilePathLength = value;
    }
    // Temporarily expose input value. Use with caution.
    get maxFilePathLengthInput() {
        return this._maxFilePathLength;
    }
}
export function repositoryRulesetRulesMaxFileSizeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        max_file_size: cdktf.numberToTerraform(struct.maxFileSize),
    };
}
export function repositoryRulesetRulesMaxFileSizeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        max_file_size: {
            value: cdktf.numberToHclTerraform(struct.maxFileSize),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RepositoryRulesetRulesMaxFileSizeOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._maxFileSize !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxFileSize = this._maxFileSize;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._maxFileSize = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._maxFileSize = value.maxFileSize;
        }
    }
    // max_file_size - computed: false, optional: false, required: true
    _maxFileSize;
    get maxFileSize() {
        return this.getNumberAttribute('max_file_size');
    }
    set maxFileSize(value) {
        this._maxFileSize = value;
    }
    // Temporarily expose input value. Use with caution.
    get maxFileSizeInput() {
        return this._maxFileSize;
    }
}
export function repositoryRulesetRulesMergeQueueToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        check_response_timeout_minutes: cdktf.numberToTerraform(struct.checkResponseTimeoutMinutes),
        grouping_strategy: cdktf.stringToTerraform(struct.groupingStrategy),
        max_entries_to_build: cdktf.numberToTerraform(struct.maxEntriesToBuild),
        max_entries_to_merge: cdktf.numberToTerraform(struct.maxEntriesToMerge),
        merge_method: cdktf.stringToTerraform(struct.mergeMethod),
        min_entries_to_merge: cdktf.numberToTerraform(struct.minEntriesToMerge),
        min_entries_to_merge_wait_minutes: cdktf.numberToTerraform(struct.minEntriesToMergeWaitMinutes),
    };
}
export function repositoryRulesetRulesMergeQueueToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        check_response_timeout_minutes: {
            value: cdktf.numberToHclTerraform(struct.checkResponseTimeoutMinutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        grouping_strategy: {
            value: cdktf.stringToHclTerraform(struct.groupingStrategy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        max_entries_to_build: {
            value: cdktf.numberToHclTerraform(struct.maxEntriesToBuild),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        max_entries_to_merge: {
            value: cdktf.numberToHclTerraform(struct.maxEntriesToMerge),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        merge_method: {
            value: cdktf.stringToHclTerraform(struct.mergeMethod),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        min_entries_to_merge: {
            value: cdktf.numberToHclTerraform(struct.minEntriesToMerge),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min_entries_to_merge_wait_minutes: {
            value: cdktf.numberToHclTerraform(struct.minEntriesToMergeWaitMinutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RepositoryRulesetRulesMergeQueueOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._checkResponseTimeoutMinutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.checkResponseTimeoutMinutes = this._checkResponseTimeoutMinutes;
        }
        if (this._groupingStrategy !== undefined) {
            hasAnyValues = true;
            internalValueResult.groupingStrategy = this._groupingStrategy;
        }
        if (this._maxEntriesToBuild !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxEntriesToBuild = this._maxEntriesToBuild;
        }
        if (this._maxEntriesToMerge !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxEntriesToMerge = this._maxEntriesToMerge;
        }
        if (this._mergeMethod !== undefined) {
            hasAnyValues = true;
            internalValueResult.mergeMethod = this._mergeMethod;
        }
        if (this._minEntriesToMerge !== undefined) {
            hasAnyValues = true;
            internalValueResult.minEntriesToMerge = this._minEntriesToMerge;
        }
        if (this._minEntriesToMergeWaitMinutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.minEntriesToMergeWaitMinutes = this._minEntriesToMergeWaitMinutes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._checkResponseTimeoutMinutes = undefined;
            this._groupingStrategy = undefined;
            this._maxEntriesToBuild = undefined;
            this._maxEntriesToMerge = undefined;
            this._mergeMethod = undefined;
            this._minEntriesToMerge = undefined;
            this._minEntriesToMergeWaitMinutes = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._checkResponseTimeoutMinutes = value.checkResponseTimeoutMinutes;
            this._groupingStrategy = value.groupingStrategy;
            this._maxEntriesToBuild = value.maxEntriesToBuild;
            this._maxEntriesToMerge = value.maxEntriesToMerge;
            this._mergeMethod = value.mergeMethod;
            this._minEntriesToMerge = value.minEntriesToMerge;
            this._minEntriesToMergeWaitMinutes = value.minEntriesToMergeWaitMinutes;
        }
    }
    // check_response_timeout_minutes - computed: false, optional: true, required: false
    _checkResponseTimeoutMinutes;
    get checkResponseTimeoutMinutes() {
        return this.getNumberAttribute('check_response_timeout_minutes');
    }
    set checkResponseTimeoutMinutes(value) {
        this._checkResponseTimeoutMinutes = value;
    }
    resetCheckResponseTimeoutMinutes() {
        this._checkResponseTimeoutMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get checkResponseTimeoutMinutesInput() {
        return this._checkResponseTimeoutMinutes;
    }
    // grouping_strategy - computed: false, optional: true, required: false
    _groupingStrategy;
    get groupingStrategy() {
        return this.getStringAttribute('grouping_strategy');
    }
    set groupingStrategy(value) {
        this._groupingStrategy = value;
    }
    resetGroupingStrategy() {
        this._groupingStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get groupingStrategyInput() {
        return this._groupingStrategy;
    }
    // max_entries_to_build - computed: false, optional: true, required: false
    _maxEntriesToBuild;
    get maxEntriesToBuild() {
        return this.getNumberAttribute('max_entries_to_build');
    }
    set maxEntriesToBuild(value) {
        this._maxEntriesToBuild = value;
    }
    resetMaxEntriesToBuild() {
        this._maxEntriesToBuild = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxEntriesToBuildInput() {
        return this._maxEntriesToBuild;
    }
    // max_entries_to_merge - computed: false, optional: true, required: false
    _maxEntriesToMerge;
    get maxEntriesToMerge() {
        return this.getNumberAttribute('max_entries_to_merge');
    }
    set maxEntriesToMerge(value) {
        this._maxEntriesToMerge = value;
    }
    resetMaxEntriesToMerge() {
        this._maxEntriesToMerge = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxEntriesToMergeInput() {
        return this._maxEntriesToMerge;
    }
    // merge_method - computed: false, optional: true, required: false
    _mergeMethod;
    get mergeMethod() {
        return this.getStringAttribute('merge_method');
    }
    set mergeMethod(value) {
        this._mergeMethod = value;
    }
    resetMergeMethod() {
        this._mergeMethod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get mergeMethodInput() {
        return this._mergeMethod;
    }
    // min_entries_to_merge - computed: false, optional: true, required: false
    _minEntriesToMerge;
    get minEntriesToMerge() {
        return this.getNumberAttribute('min_entries_to_merge');
    }
    set minEntriesToMerge(value) {
        this._minEntriesToMerge = value;
    }
    resetMinEntriesToMerge() {
        this._minEntriesToMerge = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get minEntriesToMergeInput() {
        return this._minEntriesToMerge;
    }
    // min_entries_to_merge_wait_minutes - computed: false, optional: true, required: false
    _minEntriesToMergeWaitMinutes;
    get minEntriesToMergeWaitMinutes() {
        return this.getNumberAttribute('min_entries_to_merge_wait_minutes');
    }
    set minEntriesToMergeWaitMinutes(value) {
        this._minEntriesToMergeWaitMinutes = value;
    }
    resetMinEntriesToMergeWaitMinutes() {
        this._minEntriesToMergeWaitMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get minEntriesToMergeWaitMinutesInput() {
        return this._minEntriesToMergeWaitMinutes;
    }
}
export function repositoryRulesetRulesPullRequestRequiredReviewersReviewerToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        id: cdktf.numberToTerraform(struct.id),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function repositoryRulesetRulesPullRequestRequiredReviewersReviewerToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        id: {
            value: cdktf.numberToHclTerraform(struct.id),
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
export class RepositoryRulesetRulesPullRequestRequiredReviewersReviewerOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
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
            this._id = undefined;
            this._type = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._id = value.id;
            this._type = value.type;
        }
    }
    // id - computed: false, optional: false, required: true
    _id;
    get id() {
        return this.getNumberAttribute('id');
    }
    set id(value) {
        this._id = value;
    }
    // Temporarily expose input value. Use with caution.
    get idInput() {
        return this._id;
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
export function repositoryRulesetRulesPullRequestRequiredReviewersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        file_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.filePatterns),
        minimum_approvals: cdktf.numberToTerraform(struct.minimumApprovals),
        reviewer: repositoryRulesetRulesPullRequestRequiredReviewersReviewerToTerraform(struct.reviewer),
    };
}
export function repositoryRulesetRulesPullRequestRequiredReviewersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        file_patterns: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.filePatterns),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        minimum_approvals: {
            value: cdktf.numberToHclTerraform(struct.minimumApprovals),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        reviewer: {
            value: repositoryRulesetRulesPullRequestRequiredReviewersReviewerToHclTerraform(struct.reviewer),
            isBlock: true,
            type: "list",
            storageClassType: "RepositoryRulesetRulesPullRequestRequiredReviewersReviewerList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RepositoryRulesetRulesPullRequestRequiredReviewersOutputReference extends cdktf.ComplexObject {
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
        if (this._filePatterns !== undefined) {
            hasAnyValues = true;
            internalValueResult.filePatterns = this._filePatterns;
        }
        if (this._minimumApprovals !== undefined) {
            hasAnyValues = true;
            internalValueResult.minimumApprovals = this._minimumApprovals;
        }
        if (this._reviewer?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.reviewer = this._reviewer?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._filePatterns = undefined;
            this._minimumApprovals = undefined;
            this._reviewer.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._filePatterns = value.filePatterns;
            this._minimumApprovals = value.minimumApprovals;
            this._reviewer.internalValue = value.reviewer;
        }
    }
    // file_patterns - computed: false, optional: false, required: true
    _filePatterns;
    get filePatterns() {
        return this.getListAttribute('file_patterns');
    }
    set filePatterns(value) {
        this._filePatterns = value;
    }
    // Temporarily expose input value. Use with caution.
    get filePatternsInput() {
        return this._filePatterns;
    }
    // minimum_approvals - computed: false, optional: false, required: true
    _minimumApprovals;
    get minimumApprovals() {
        return this.getNumberAttribute('minimum_approvals');
    }
    set minimumApprovals(value) {
        this._minimumApprovals = value;
    }
    // Temporarily expose input value. Use with caution.
    get minimumApprovalsInput() {
        return this._minimumApprovals;
    }
    // reviewer - computed: false, optional: false, required: true
    _reviewer = new RepositoryRulesetRulesPullRequestRequiredReviewersReviewerOutputReference(this, "reviewer");
    get reviewer() {
        return this._reviewer;
    }
    putReviewer(value) {
        this._reviewer.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get reviewerInput() {
        return this._reviewer.internalValue;
    }
}
export class RepositoryRulesetRulesPullRequestRequiredReviewersList extends cdktf.ComplexList {
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
        return new RepositoryRulesetRulesPullRequestRequiredReviewersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function repositoryRulesetRulesPullRequestToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        allowed_merge_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.allowedMergeMethods),
        dismiss_stale_reviews_on_push: cdktf.booleanToTerraform(struct.dismissStaleReviewsOnPush),
        require_code_owner_review: cdktf.booleanToTerraform(struct.requireCodeOwnerReview),
        require_last_push_approval: cdktf.booleanToTerraform(struct.requireLastPushApproval),
        required_approving_review_count: cdktf.numberToTerraform(struct.requiredApprovingReviewCount),
        required_review_thread_resolution: cdktf.booleanToTerraform(struct.requiredReviewThreadResolution),
        required_reviewers: cdktf.listMapper(repositoryRulesetRulesPullRequestRequiredReviewersToTerraform, true)(struct.requiredReviewers),
    };
}
export function repositoryRulesetRulesPullRequestToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        allowed_merge_methods: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.allowedMergeMethods),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        dismiss_stale_reviews_on_push: {
            value: cdktf.booleanToHclTerraform(struct.dismissStaleReviewsOnPush),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        require_code_owner_review: {
            value: cdktf.booleanToHclTerraform(struct.requireCodeOwnerReview),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        require_last_push_approval: {
            value: cdktf.booleanToHclTerraform(struct.requireLastPushApproval),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        required_approving_review_count: {
            value: cdktf.numberToHclTerraform(struct.requiredApprovingReviewCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        required_review_thread_resolution: {
            value: cdktf.booleanToHclTerraform(struct.requiredReviewThreadResolution),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        required_reviewers: {
            value: cdktf.listMapperHcl(repositoryRulesetRulesPullRequestRequiredReviewersToHclTerraform, true)(struct.requiredReviewers),
            isBlock: true,
            type: "list",
            storageClassType: "RepositoryRulesetRulesPullRequestRequiredReviewersList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RepositoryRulesetRulesPullRequestOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._allowedMergeMethods !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedMergeMethods = this._allowedMergeMethods;
        }
        if (this._dismissStaleReviewsOnPush !== undefined) {
            hasAnyValues = true;
            internalValueResult.dismissStaleReviewsOnPush = this._dismissStaleReviewsOnPush;
        }
        if (this._requireCodeOwnerReview !== undefined) {
            hasAnyValues = true;
            internalValueResult.requireCodeOwnerReview = this._requireCodeOwnerReview;
        }
        if (this._requireLastPushApproval !== undefined) {
            hasAnyValues = true;
            internalValueResult.requireLastPushApproval = this._requireLastPushApproval;
        }
        if (this._requiredApprovingReviewCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.requiredApprovingReviewCount = this._requiredApprovingReviewCount;
        }
        if (this._requiredReviewThreadResolution !== undefined) {
            hasAnyValues = true;
            internalValueResult.requiredReviewThreadResolution = this._requiredReviewThreadResolution;
        }
        if (this._requiredReviewers?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.requiredReviewers = this._requiredReviewers?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allowedMergeMethods = undefined;
            this._dismissStaleReviewsOnPush = undefined;
            this._requireCodeOwnerReview = undefined;
            this._requireLastPushApproval = undefined;
            this._requiredApprovingReviewCount = undefined;
            this._requiredReviewThreadResolution = undefined;
            this._requiredReviewers.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allowedMergeMethods = value.allowedMergeMethods;
            this._dismissStaleReviewsOnPush = value.dismissStaleReviewsOnPush;
            this._requireCodeOwnerReview = value.requireCodeOwnerReview;
            this._requireLastPushApproval = value.requireLastPushApproval;
            this._requiredApprovingReviewCount = value.requiredApprovingReviewCount;
            this._requiredReviewThreadResolution = value.requiredReviewThreadResolution;
            this._requiredReviewers.internalValue = value.requiredReviewers;
        }
    }
    // allowed_merge_methods - computed: true, optional: true, required: false
    _allowedMergeMethods;
    get allowedMergeMethods() {
        return this.getListAttribute('allowed_merge_methods');
    }
    set allowedMergeMethods(value) {
        this._allowedMergeMethods = value;
    }
    resetAllowedMergeMethods() {
        this._allowedMergeMethods = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowedMergeMethodsInput() {
        return this._allowedMergeMethods;
    }
    // dismiss_stale_reviews_on_push - computed: false, optional: true, required: false
    _dismissStaleReviewsOnPush;
    get dismissStaleReviewsOnPush() {
        return this.getBooleanAttribute('dismiss_stale_reviews_on_push');
    }
    set dismissStaleReviewsOnPush(value) {
        this._dismissStaleReviewsOnPush = value;
    }
    resetDismissStaleReviewsOnPush() {
        this._dismissStaleReviewsOnPush = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dismissStaleReviewsOnPushInput() {
        return this._dismissStaleReviewsOnPush;
    }
    // require_code_owner_review - computed: false, optional: true, required: false
    _requireCodeOwnerReview;
    get requireCodeOwnerReview() {
        return this.getBooleanAttribute('require_code_owner_review');
    }
    set requireCodeOwnerReview(value) {
        this._requireCodeOwnerReview = value;
    }
    resetRequireCodeOwnerReview() {
        this._requireCodeOwnerReview = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requireCodeOwnerReviewInput() {
        return this._requireCodeOwnerReview;
    }
    // require_last_push_approval - computed: false, optional: true, required: false
    _requireLastPushApproval;
    get requireLastPushApproval() {
        return this.getBooleanAttribute('require_last_push_approval');
    }
    set requireLastPushApproval(value) {
        this._requireLastPushApproval = value;
    }
    resetRequireLastPushApproval() {
        this._requireLastPushApproval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requireLastPushApprovalInput() {
        return this._requireLastPushApproval;
    }
    // required_approving_review_count - computed: false, optional: true, required: false
    _requiredApprovingReviewCount;
    get requiredApprovingReviewCount() {
        return this.getNumberAttribute('required_approving_review_count');
    }
    set requiredApprovingReviewCount(value) {
        this._requiredApprovingReviewCount = value;
    }
    resetRequiredApprovingReviewCount() {
        this._requiredApprovingReviewCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requiredApprovingReviewCountInput() {
        return this._requiredApprovingReviewCount;
    }
    // required_review_thread_resolution - computed: false, optional: true, required: false
    _requiredReviewThreadResolution;
    get requiredReviewThreadResolution() {
        return this.getBooleanAttribute('required_review_thread_resolution');
    }
    set requiredReviewThreadResolution(value) {
        this._requiredReviewThreadResolution = value;
    }
    resetRequiredReviewThreadResolution() {
        this._requiredReviewThreadResolution = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requiredReviewThreadResolutionInput() {
        return this._requiredReviewThreadResolution;
    }
    // required_reviewers - computed: false, optional: true, required: false
    _requiredReviewers = new RepositoryRulesetRulesPullRequestRequiredReviewersList(this, "required_reviewers", false);
    get requiredReviewers() {
        return this._requiredReviewers;
    }
    putRequiredReviewers(value) {
        this._requiredReviewers.internalValue = value;
    }
    resetRequiredReviewers() {
        this._requiredReviewers.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requiredReviewersInput() {
        return this._requiredReviewers.internalValue;
    }
}
export function repositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        alerts_threshold: cdktf.stringToTerraform(struct.alertsThreshold),
        security_alerts_threshold: cdktf.stringToTerraform(struct.securityAlertsThreshold),
        tool: cdktf.stringToTerraform(struct.tool),
    };
}
export function repositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        alerts_threshold: {
            value: cdktf.stringToHclTerraform(struct.alertsThreshold),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        security_alerts_threshold: {
            value: cdktf.stringToHclTerraform(struct.securityAlertsThreshold),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tool: {
            value: cdktf.stringToHclTerraform(struct.tool),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference extends cdktf.ComplexObject {
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
        if (this._alertsThreshold !== undefined) {
            hasAnyValues = true;
            internalValueResult.alertsThreshold = this._alertsThreshold;
        }
        if (this._securityAlertsThreshold !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityAlertsThreshold = this._securityAlertsThreshold;
        }
        if (this._tool !== undefined) {
            hasAnyValues = true;
            internalValueResult.tool = this._tool;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._alertsThreshold = undefined;
            this._securityAlertsThreshold = undefined;
            this._tool = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._alertsThreshold = value.alertsThreshold;
            this._securityAlertsThreshold = value.securityAlertsThreshold;
            this._tool = value.tool;
        }
    }
    // alerts_threshold - computed: false, optional: false, required: true
    _alertsThreshold;
    get alertsThreshold() {
        return this.getStringAttribute('alerts_threshold');
    }
    set alertsThreshold(value) {
        this._alertsThreshold = value;
    }
    // Temporarily expose input value. Use with caution.
    get alertsThresholdInput() {
        return this._alertsThreshold;
    }
    // security_alerts_threshold - computed: false, optional: false, required: true
    _securityAlertsThreshold;
    get securityAlertsThreshold() {
        return this.getStringAttribute('security_alerts_threshold');
    }
    set securityAlertsThreshold(value) {
        this._securityAlertsThreshold = value;
    }
    // Temporarily expose input value. Use with caution.
    get securityAlertsThresholdInput() {
        return this._securityAlertsThreshold;
    }
    // tool - computed: false, optional: false, required: true
    _tool;
    get tool() {
        return this.getStringAttribute('tool');
    }
    set tool(value) {
        this._tool = value;
    }
    // Temporarily expose input value. Use with caution.
    get toolInput() {
        return this._tool;
    }
}
export class RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList extends cdktf.ComplexList {
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
        return new RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function repositoryRulesetRulesRequiredCodeScanningToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        required_code_scanning_tool: cdktf.listMapper(repositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolToTerraform, true)(struct.requiredCodeScanningTool),
    };
}
export function repositoryRulesetRulesRequiredCodeScanningToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        required_code_scanning_tool: {
            value: cdktf.listMapperHcl(repositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolToHclTerraform, true)(struct.requiredCodeScanningTool),
            isBlock: true,
            type: "set",
            storageClassType: "RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RepositoryRulesetRulesRequiredCodeScanningOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._requiredCodeScanningTool?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.requiredCodeScanningTool = this._requiredCodeScanningTool?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._requiredCodeScanningTool.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._requiredCodeScanningTool.internalValue = value.requiredCodeScanningTool;
        }
    }
    // required_code_scanning_tool - computed: false, optional: false, required: true
    _requiredCodeScanningTool = new RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList(this, "required_code_scanning_tool", true);
    get requiredCodeScanningTool() {
        return this._requiredCodeScanningTool;
    }
    putRequiredCodeScanningTool(value) {
        this._requiredCodeScanningTool.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get requiredCodeScanningToolInput() {
        return this._requiredCodeScanningTool.internalValue;
    }
}
export function repositoryRulesetRulesRequiredDeploymentsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        required_deployment_environments: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.requiredDeploymentEnvironments),
    };
}
export function repositoryRulesetRulesRequiredDeploymentsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        required_deployment_environments: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.requiredDeploymentEnvironments),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RepositoryRulesetRulesRequiredDeploymentsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._requiredDeploymentEnvironments !== undefined) {
            hasAnyValues = true;
            internalValueResult.requiredDeploymentEnvironments = this._requiredDeploymentEnvironments;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._requiredDeploymentEnvironments = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._requiredDeploymentEnvironments = value.requiredDeploymentEnvironments;
        }
    }
    // required_deployment_environments - computed: false, optional: false, required: true
    _requiredDeploymentEnvironments;
    get requiredDeploymentEnvironments() {
        return this.getListAttribute('required_deployment_environments');
    }
    set requiredDeploymentEnvironments(value) {
        this._requiredDeploymentEnvironments = value;
    }
    // Temporarily expose input value. Use with caution.
    get requiredDeploymentEnvironmentsInput() {
        return this._requiredDeploymentEnvironments;
    }
}
export function repositoryRulesetRulesRequiredStatusChecksRequiredCheckToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        context: cdktf.stringToTerraform(struct.context),
        integration_id: cdktf.numberToTerraform(struct.integrationId),
    };
}
export function repositoryRulesetRulesRequiredStatusChecksRequiredCheckToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        context: {
            value: cdktf.stringToHclTerraform(struct.context),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        integration_id: {
            value: cdktf.numberToHclTerraform(struct.integrationId),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference extends cdktf.ComplexObject {
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
        if (this._context !== undefined) {
            hasAnyValues = true;
            internalValueResult.context = this._context;
        }
        if (this._integrationId !== undefined) {
            hasAnyValues = true;
            internalValueResult.integrationId = this._integrationId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._context = undefined;
            this._integrationId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._context = value.context;
            this._integrationId = value.integrationId;
        }
    }
    // context - computed: false, optional: false, required: true
    _context;
    get context() {
        return this.getStringAttribute('context');
    }
    set context(value) {
        this._context = value;
    }
    // Temporarily expose input value. Use with caution.
    get contextInput() {
        return this._context;
    }
    // integration_id - computed: false, optional: true, required: false
    _integrationId;
    get integrationId() {
        return this.getNumberAttribute('integration_id');
    }
    set integrationId(value) {
        this._integrationId = value;
    }
    resetIntegrationId() {
        this._integrationId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get integrationIdInput() {
        return this._integrationId;
    }
}
export class RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList extends cdktf.ComplexList {
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
        return new RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function repositoryRulesetRulesRequiredStatusChecksToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        do_not_enforce_on_create: cdktf.booleanToTerraform(struct.doNotEnforceOnCreate),
        strict_required_status_checks_policy: cdktf.booleanToTerraform(struct.strictRequiredStatusChecksPolicy),
        required_check: cdktf.listMapper(repositoryRulesetRulesRequiredStatusChecksRequiredCheckToTerraform, true)(struct.requiredCheck),
    };
}
export function repositoryRulesetRulesRequiredStatusChecksToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        do_not_enforce_on_create: {
            value: cdktf.booleanToHclTerraform(struct.doNotEnforceOnCreate),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        strict_required_status_checks_policy: {
            value: cdktf.booleanToHclTerraform(struct.strictRequiredStatusChecksPolicy),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        required_check: {
            value: cdktf.listMapperHcl(repositoryRulesetRulesRequiredStatusChecksRequiredCheckToHclTerraform, true)(struct.requiredCheck),
            isBlock: true,
            type: "set",
            storageClassType: "RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RepositoryRulesetRulesRequiredStatusChecksOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._doNotEnforceOnCreate !== undefined) {
            hasAnyValues = true;
            internalValueResult.doNotEnforceOnCreate = this._doNotEnforceOnCreate;
        }
        if (this._strictRequiredStatusChecksPolicy !== undefined) {
            hasAnyValues = true;
            internalValueResult.strictRequiredStatusChecksPolicy = this._strictRequiredStatusChecksPolicy;
        }
        if (this._requiredCheck?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.requiredCheck = this._requiredCheck?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._doNotEnforceOnCreate = undefined;
            this._strictRequiredStatusChecksPolicy = undefined;
            this._requiredCheck.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._doNotEnforceOnCreate = value.doNotEnforceOnCreate;
            this._strictRequiredStatusChecksPolicy = value.strictRequiredStatusChecksPolicy;
            this._requiredCheck.internalValue = value.requiredCheck;
        }
    }
    // do_not_enforce_on_create - computed: false, optional: true, required: false
    _doNotEnforceOnCreate;
    get doNotEnforceOnCreate() {
        return this.getBooleanAttribute('do_not_enforce_on_create');
    }
    set doNotEnforceOnCreate(value) {
        this._doNotEnforceOnCreate = value;
    }
    resetDoNotEnforceOnCreate() {
        this._doNotEnforceOnCreate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get doNotEnforceOnCreateInput() {
        return this._doNotEnforceOnCreate;
    }
    // strict_required_status_checks_policy - computed: false, optional: true, required: false
    _strictRequiredStatusChecksPolicy;
    get strictRequiredStatusChecksPolicy() {
        return this.getBooleanAttribute('strict_required_status_checks_policy');
    }
    set strictRequiredStatusChecksPolicy(value) {
        this._strictRequiredStatusChecksPolicy = value;
    }
    resetStrictRequiredStatusChecksPolicy() {
        this._strictRequiredStatusChecksPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get strictRequiredStatusChecksPolicyInput() {
        return this._strictRequiredStatusChecksPolicy;
    }
    // required_check - computed: false, optional: false, required: true
    _requiredCheck = new RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList(this, "required_check", true);
    get requiredCheck() {
        return this._requiredCheck;
    }
    putRequiredCheck(value) {
        this._requiredCheck.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get requiredCheckInput() {
        return this._requiredCheck.internalValue;
    }
}
export function repositoryRulesetRulesTagNamePatternToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        negate: cdktf.booleanToTerraform(struct.negate),
        operator: cdktf.stringToTerraform(struct.operator),
        pattern: cdktf.stringToTerraform(struct.pattern),
    };
}
export function repositoryRulesetRulesTagNamePatternToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        negate: {
            value: cdktf.booleanToHclTerraform(struct.negate),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        operator: {
            value: cdktf.stringToHclTerraform(struct.operator),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        pattern: {
            value: cdktf.stringToHclTerraform(struct.pattern),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RepositoryRulesetRulesTagNamePatternOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._negate !== undefined) {
            hasAnyValues = true;
            internalValueResult.negate = this._negate;
        }
        if (this._operator !== undefined) {
            hasAnyValues = true;
            internalValueResult.operator = this._operator;
        }
        if (this._pattern !== undefined) {
            hasAnyValues = true;
            internalValueResult.pattern = this._pattern;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
            this._negate = undefined;
            this._operator = undefined;
            this._pattern = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
            this._negate = value.negate;
            this._operator = value.operator;
            this._pattern = value.pattern;
        }
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
    // negate - computed: false, optional: true, required: false
    _negate;
    get negate() {
        return this.getBooleanAttribute('negate');
    }
    set negate(value) {
        this._negate = value;
    }
    resetNegate() {
        this._negate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get negateInput() {
        return this._negate;
    }
    // operator - computed: false, optional: false, required: true
    _operator;
    get operator() {
        return this.getStringAttribute('operator');
    }
    set operator(value) {
        this._operator = value;
    }
    // Temporarily expose input value. Use with caution.
    get operatorInput() {
        return this._operator;
    }
    // pattern - computed: false, optional: false, required: true
    _pattern;
    get pattern() {
        return this.getStringAttribute('pattern');
    }
    set pattern(value) {
        this._pattern = value;
    }
    // Temporarily expose input value. Use with caution.
    get patternInput() {
        return this._pattern;
    }
}
export function repositoryRulesetRulesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        creation: cdktf.booleanToTerraform(struct.creation),
        deletion: cdktf.booleanToTerraform(struct.deletion),
        non_fast_forward: cdktf.booleanToTerraform(struct.nonFastForward),
        required_linear_history: cdktf.booleanToTerraform(struct.requiredLinearHistory),
        required_signatures: cdktf.booleanToTerraform(struct.requiredSignatures),
        update: cdktf.booleanToTerraform(struct.update),
        update_allows_fetch_and_merge: cdktf.booleanToTerraform(struct.updateAllowsFetchAndMerge),
        branch_name_pattern: repositoryRulesetRulesBranchNamePatternToTerraform(struct.branchNamePattern),
        commit_author_email_pattern: repositoryRulesetRulesCommitAuthorEmailPatternToTerraform(struct.commitAuthorEmailPattern),
        commit_message_pattern: repositoryRulesetRulesCommitMessagePatternToTerraform(struct.commitMessagePattern),
        committer_email_pattern: repositoryRulesetRulesCommitterEmailPatternToTerraform(struct.committerEmailPattern),
        copilot_code_review: repositoryRulesetRulesCopilotCodeReviewToTerraform(struct.copilotCodeReview),
        file_extension_restriction: repositoryRulesetRulesFileExtensionRestrictionToTerraform(struct.fileExtensionRestriction),
        file_path_restriction: repositoryRulesetRulesFilePathRestrictionToTerraform(struct.filePathRestriction),
        max_file_path_length: repositoryRulesetRulesMaxFilePathLengthToTerraform(struct.maxFilePathLength),
        max_file_size: repositoryRulesetRulesMaxFileSizeToTerraform(struct.maxFileSize),
        merge_queue: repositoryRulesetRulesMergeQueueToTerraform(struct.mergeQueue),
        pull_request: repositoryRulesetRulesPullRequestToTerraform(struct.pullRequest),
        required_code_scanning: repositoryRulesetRulesRequiredCodeScanningToTerraform(struct.requiredCodeScanning),
        required_deployments: repositoryRulesetRulesRequiredDeploymentsToTerraform(struct.requiredDeployments),
        required_status_checks: repositoryRulesetRulesRequiredStatusChecksToTerraform(struct.requiredStatusChecks),
        tag_name_pattern: repositoryRulesetRulesTagNamePatternToTerraform(struct.tagNamePattern),
    };
}
export function repositoryRulesetRulesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        creation: {
            value: cdktf.booleanToHclTerraform(struct.creation),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        deletion: {
            value: cdktf.booleanToHclTerraform(struct.deletion),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        non_fast_forward: {
            value: cdktf.booleanToHclTerraform(struct.nonFastForward),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        required_linear_history: {
            value: cdktf.booleanToHclTerraform(struct.requiredLinearHistory),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        required_signatures: {
            value: cdktf.booleanToHclTerraform(struct.requiredSignatures),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        update: {
            value: cdktf.booleanToHclTerraform(struct.update),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        update_allows_fetch_and_merge: {
            value: cdktf.booleanToHclTerraform(struct.updateAllowsFetchAndMerge),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        branch_name_pattern: {
            value: repositoryRulesetRulesBranchNamePatternToHclTerraform(struct.branchNamePattern),
            isBlock: true,
            type: "list",
            storageClassType: "RepositoryRulesetRulesBranchNamePatternList",
        },
        commit_author_email_pattern: {
            value: repositoryRulesetRulesCommitAuthorEmailPatternToHclTerraform(struct.commitAuthorEmailPattern),
            isBlock: true,
            type: "list",
            storageClassType: "RepositoryRulesetRulesCommitAuthorEmailPatternList",
        },
        commit_message_pattern: {
            value: repositoryRulesetRulesCommitMessagePatternToHclTerraform(struct.commitMessagePattern),
            isBlock: true,
            type: "list",
            storageClassType: "RepositoryRulesetRulesCommitMessagePatternList",
        },
        committer_email_pattern: {
            value: repositoryRulesetRulesCommitterEmailPatternToHclTerraform(struct.committerEmailPattern),
            isBlock: true,
            type: "list",
            storageClassType: "RepositoryRulesetRulesCommitterEmailPatternList",
        },
        copilot_code_review: {
            value: repositoryRulesetRulesCopilotCodeReviewToHclTerraform(struct.copilotCodeReview),
            isBlock: true,
            type: "list",
            storageClassType: "RepositoryRulesetRulesCopilotCodeReviewList",
        },
        file_extension_restriction: {
            value: repositoryRulesetRulesFileExtensionRestrictionToHclTerraform(struct.fileExtensionRestriction),
            isBlock: true,
            type: "list",
            storageClassType: "RepositoryRulesetRulesFileExtensionRestrictionList",
        },
        file_path_restriction: {
            value: repositoryRulesetRulesFilePathRestrictionToHclTerraform(struct.filePathRestriction),
            isBlock: true,
            type: "list",
            storageClassType: "RepositoryRulesetRulesFilePathRestrictionList",
        },
        max_file_path_length: {
            value: repositoryRulesetRulesMaxFilePathLengthToHclTerraform(struct.maxFilePathLength),
            isBlock: true,
            type: "list",
            storageClassType: "RepositoryRulesetRulesMaxFilePathLengthList",
        },
        max_file_size: {
            value: repositoryRulesetRulesMaxFileSizeToHclTerraform(struct.maxFileSize),
            isBlock: true,
            type: "list",
            storageClassType: "RepositoryRulesetRulesMaxFileSizeList",
        },
        merge_queue: {
            value: repositoryRulesetRulesMergeQueueToHclTerraform(struct.mergeQueue),
            isBlock: true,
            type: "list",
            storageClassType: "RepositoryRulesetRulesMergeQueueList",
        },
        pull_request: {
            value: repositoryRulesetRulesPullRequestToHclTerraform(struct.pullRequest),
            isBlock: true,
            type: "list",
            storageClassType: "RepositoryRulesetRulesPullRequestList",
        },
        required_code_scanning: {
            value: repositoryRulesetRulesRequiredCodeScanningToHclTerraform(struct.requiredCodeScanning),
            isBlock: true,
            type: "list",
            storageClassType: "RepositoryRulesetRulesRequiredCodeScanningList",
        },
        required_deployments: {
            value: repositoryRulesetRulesRequiredDeploymentsToHclTerraform(struct.requiredDeployments),
            isBlock: true,
            type: "list",
            storageClassType: "RepositoryRulesetRulesRequiredDeploymentsList",
        },
        required_status_checks: {
            value: repositoryRulesetRulesRequiredStatusChecksToHclTerraform(struct.requiredStatusChecks),
            isBlock: true,
            type: "list",
            storageClassType: "RepositoryRulesetRulesRequiredStatusChecksList",
        },
        tag_name_pattern: {
            value: repositoryRulesetRulesTagNamePatternToHclTerraform(struct.tagNamePattern),
            isBlock: true,
            type: "list",
            storageClassType: "RepositoryRulesetRulesTagNamePatternList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RepositoryRulesetRulesOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._creation !== undefined) {
            hasAnyValues = true;
            internalValueResult.creation = this._creation;
        }
        if (this._deletion !== undefined) {
            hasAnyValues = true;
            internalValueResult.deletion = this._deletion;
        }
        if (this._nonFastForward !== undefined) {
            hasAnyValues = true;
            internalValueResult.nonFastForward = this._nonFastForward;
        }
        if (this._requiredLinearHistory !== undefined) {
            hasAnyValues = true;
            internalValueResult.requiredLinearHistory = this._requiredLinearHistory;
        }
        if (this._requiredSignatures !== undefined) {
            hasAnyValues = true;
            internalValueResult.requiredSignatures = this._requiredSignatures;
        }
        if (this._update !== undefined) {
            hasAnyValues = true;
            internalValueResult.update = this._update;
        }
        if (this._updateAllowsFetchAndMerge !== undefined) {
            hasAnyValues = true;
            internalValueResult.updateAllowsFetchAndMerge = this._updateAllowsFetchAndMerge;
        }
        if (this._branchNamePattern?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.branchNamePattern = this._branchNamePattern?.internalValue;
        }
        if (this._commitAuthorEmailPattern?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.commitAuthorEmailPattern = this._commitAuthorEmailPattern?.internalValue;
        }
        if (this._commitMessagePattern?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.commitMessagePattern = this._commitMessagePattern?.internalValue;
        }
        if (this._committerEmailPattern?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.committerEmailPattern = this._committerEmailPattern?.internalValue;
        }
        if (this._copilotCodeReview?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.copilotCodeReview = this._copilotCodeReview?.internalValue;
        }
        if (this._fileExtensionRestriction?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.fileExtensionRestriction = this._fileExtensionRestriction?.internalValue;
        }
        if (this._filePathRestriction?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.filePathRestriction = this._filePathRestriction?.internalValue;
        }
        if (this._maxFilePathLength?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxFilePathLength = this._maxFilePathLength?.internalValue;
        }
        if (this._maxFileSize?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxFileSize = this._maxFileSize?.internalValue;
        }
        if (this._mergeQueue?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.mergeQueue = this._mergeQueue?.internalValue;
        }
        if (this._pullRequest?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.pullRequest = this._pullRequest?.internalValue;
        }
        if (this._requiredCodeScanning?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.requiredCodeScanning = this._requiredCodeScanning?.internalValue;
        }
        if (this._requiredDeployments?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.requiredDeployments = this._requiredDeployments?.internalValue;
        }
        if (this._requiredStatusChecks?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.requiredStatusChecks = this._requiredStatusChecks?.internalValue;
        }
        if (this._tagNamePattern?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tagNamePattern = this._tagNamePattern?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._creation = undefined;
            this._deletion = undefined;
            this._nonFastForward = undefined;
            this._requiredLinearHistory = undefined;
            this._requiredSignatures = undefined;
            this._update = undefined;
            this._updateAllowsFetchAndMerge = undefined;
            this._branchNamePattern.internalValue = undefined;
            this._commitAuthorEmailPattern.internalValue = undefined;
            this._commitMessagePattern.internalValue = undefined;
            this._committerEmailPattern.internalValue = undefined;
            this._copilotCodeReview.internalValue = undefined;
            this._fileExtensionRestriction.internalValue = undefined;
            this._filePathRestriction.internalValue = undefined;
            this._maxFilePathLength.internalValue = undefined;
            this._maxFileSize.internalValue = undefined;
            this._mergeQueue.internalValue = undefined;
            this._pullRequest.internalValue = undefined;
            this._requiredCodeScanning.internalValue = undefined;
            this._requiredDeployments.internalValue = undefined;
            this._requiredStatusChecks.internalValue = undefined;
            this._tagNamePattern.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._creation = value.creation;
            this._deletion = value.deletion;
            this._nonFastForward = value.nonFastForward;
            this._requiredLinearHistory = value.requiredLinearHistory;
            this._requiredSignatures = value.requiredSignatures;
            this._update = value.update;
            this._updateAllowsFetchAndMerge = value.updateAllowsFetchAndMerge;
            this._branchNamePattern.internalValue = value.branchNamePattern;
            this._commitAuthorEmailPattern.internalValue = value.commitAuthorEmailPattern;
            this._commitMessagePattern.internalValue = value.commitMessagePattern;
            this._committerEmailPattern.internalValue = value.committerEmailPattern;
            this._copilotCodeReview.internalValue = value.copilotCodeReview;
            this._fileExtensionRestriction.internalValue = value.fileExtensionRestriction;
            this._filePathRestriction.internalValue = value.filePathRestriction;
            this._maxFilePathLength.internalValue = value.maxFilePathLength;
            this._maxFileSize.internalValue = value.maxFileSize;
            this._mergeQueue.internalValue = value.mergeQueue;
            this._pullRequest.internalValue = value.pullRequest;
            this._requiredCodeScanning.internalValue = value.requiredCodeScanning;
            this._requiredDeployments.internalValue = value.requiredDeployments;
            this._requiredStatusChecks.internalValue = value.requiredStatusChecks;
            this._tagNamePattern.internalValue = value.tagNamePattern;
        }
    }
    // creation - computed: false, optional: true, required: false
    _creation;
    get creation() {
        return this.getBooleanAttribute('creation');
    }
    set creation(value) {
        this._creation = value;
    }
    resetCreation() {
        this._creation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get creationInput() {
        return this._creation;
    }
    // deletion - computed: false, optional: true, required: false
    _deletion;
    get deletion() {
        return this.getBooleanAttribute('deletion');
    }
    set deletion(value) {
        this._deletion = value;
    }
    resetDeletion() {
        this._deletion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deletionInput() {
        return this._deletion;
    }
    // non_fast_forward - computed: false, optional: true, required: false
    _nonFastForward;
    get nonFastForward() {
        return this.getBooleanAttribute('non_fast_forward');
    }
    set nonFastForward(value) {
        this._nonFastForward = value;
    }
    resetNonFastForward() {
        this._nonFastForward = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get nonFastForwardInput() {
        return this._nonFastForward;
    }
    // required_linear_history - computed: false, optional: true, required: false
    _requiredLinearHistory;
    get requiredLinearHistory() {
        return this.getBooleanAttribute('required_linear_history');
    }
    set requiredLinearHistory(value) {
        this._requiredLinearHistory = value;
    }
    resetRequiredLinearHistory() {
        this._requiredLinearHistory = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requiredLinearHistoryInput() {
        return this._requiredLinearHistory;
    }
    // required_signatures - computed: false, optional: true, required: false
    _requiredSignatures;
    get requiredSignatures() {
        return this.getBooleanAttribute('required_signatures');
    }
    set requiredSignatures(value) {
        this._requiredSignatures = value;
    }
    resetRequiredSignatures() {
        this._requiredSignatures = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requiredSignaturesInput() {
        return this._requiredSignatures;
    }
    // update - computed: false, optional: true, required: false
    _update;
    get update() {
        return this.getBooleanAttribute('update');
    }
    set update(value) {
        this._update = value;
    }
    resetUpdate() {
        this._update = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get updateInput() {
        return this._update;
    }
    // update_allows_fetch_and_merge - computed: false, optional: true, required: false
    _updateAllowsFetchAndMerge;
    get updateAllowsFetchAndMerge() {
        return this.getBooleanAttribute('update_allows_fetch_and_merge');
    }
    set updateAllowsFetchAndMerge(value) {
        this._updateAllowsFetchAndMerge = value;
    }
    resetUpdateAllowsFetchAndMerge() {
        this._updateAllowsFetchAndMerge = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get updateAllowsFetchAndMergeInput() {
        return this._updateAllowsFetchAndMerge;
    }
    // branch_name_pattern - computed: false, optional: true, required: false
    _branchNamePattern = new RepositoryRulesetRulesBranchNamePatternOutputReference(this, "branch_name_pattern");
    get branchNamePattern() {
        return this._branchNamePattern;
    }
    putBranchNamePattern(value) {
        this._branchNamePattern.internalValue = value;
    }
    resetBranchNamePattern() {
        this._branchNamePattern.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get branchNamePatternInput() {
        return this._branchNamePattern.internalValue;
    }
    // commit_author_email_pattern - computed: false, optional: true, required: false
    _commitAuthorEmailPattern = new RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference(this, "commit_author_email_pattern");
    get commitAuthorEmailPattern() {
        return this._commitAuthorEmailPattern;
    }
    putCommitAuthorEmailPattern(value) {
        this._commitAuthorEmailPattern.internalValue = value;
    }
    resetCommitAuthorEmailPattern() {
        this._commitAuthorEmailPattern.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get commitAuthorEmailPatternInput() {
        return this._commitAuthorEmailPattern.internalValue;
    }
    // commit_message_pattern - computed: false, optional: true, required: false
    _commitMessagePattern = new RepositoryRulesetRulesCommitMessagePatternOutputReference(this, "commit_message_pattern");
    get commitMessagePattern() {
        return this._commitMessagePattern;
    }
    putCommitMessagePattern(value) {
        this._commitMessagePattern.internalValue = value;
    }
    resetCommitMessagePattern() {
        this._commitMessagePattern.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get commitMessagePatternInput() {
        return this._commitMessagePattern.internalValue;
    }
    // committer_email_pattern - computed: false, optional: true, required: false
    _committerEmailPattern = new RepositoryRulesetRulesCommitterEmailPatternOutputReference(this, "committer_email_pattern");
    get committerEmailPattern() {
        return this._committerEmailPattern;
    }
    putCommitterEmailPattern(value) {
        this._committerEmailPattern.internalValue = value;
    }
    resetCommitterEmailPattern() {
        this._committerEmailPattern.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get committerEmailPatternInput() {
        return this._committerEmailPattern.internalValue;
    }
    // copilot_code_review - computed: false, optional: true, required: false
    _copilotCodeReview = new RepositoryRulesetRulesCopilotCodeReviewOutputReference(this, "copilot_code_review");
    get copilotCodeReview() {
        return this._copilotCodeReview;
    }
    putCopilotCodeReview(value) {
        this._copilotCodeReview.internalValue = value;
    }
    resetCopilotCodeReview() {
        this._copilotCodeReview.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get copilotCodeReviewInput() {
        return this._copilotCodeReview.internalValue;
    }
    // file_extension_restriction - computed: false, optional: true, required: false
    _fileExtensionRestriction = new RepositoryRulesetRulesFileExtensionRestrictionOutputReference(this, "file_extension_restriction");
    get fileExtensionRestriction() {
        return this._fileExtensionRestriction;
    }
    putFileExtensionRestriction(value) {
        this._fileExtensionRestriction.internalValue = value;
    }
    resetFileExtensionRestriction() {
        this._fileExtensionRestriction.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fileExtensionRestrictionInput() {
        return this._fileExtensionRestriction.internalValue;
    }
    // file_path_restriction - computed: false, optional: true, required: false
    _filePathRestriction = new RepositoryRulesetRulesFilePathRestrictionOutputReference(this, "file_path_restriction");
    get filePathRestriction() {
        return this._filePathRestriction;
    }
    putFilePathRestriction(value) {
        this._filePathRestriction.internalValue = value;
    }
    resetFilePathRestriction() {
        this._filePathRestriction.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get filePathRestrictionInput() {
        return this._filePathRestriction.internalValue;
    }
    // max_file_path_length - computed: false, optional: true, required: false
    _maxFilePathLength = new RepositoryRulesetRulesMaxFilePathLengthOutputReference(this, "max_file_path_length");
    get maxFilePathLength() {
        return this._maxFilePathLength;
    }
    putMaxFilePathLength(value) {
        this._maxFilePathLength.internalValue = value;
    }
    resetMaxFilePathLength() {
        this._maxFilePathLength.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxFilePathLengthInput() {
        return this._maxFilePathLength.internalValue;
    }
    // max_file_size - computed: false, optional: true, required: false
    _maxFileSize = new RepositoryRulesetRulesMaxFileSizeOutputReference(this, "max_file_size");
    get maxFileSize() {
        return this._maxFileSize;
    }
    putMaxFileSize(value) {
        this._maxFileSize.internalValue = value;
    }
    resetMaxFileSize() {
        this._maxFileSize.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxFileSizeInput() {
        return this._maxFileSize.internalValue;
    }
    // merge_queue - computed: false, optional: true, required: false
    _mergeQueue = new RepositoryRulesetRulesMergeQueueOutputReference(this, "merge_queue");
    get mergeQueue() {
        return this._mergeQueue;
    }
    putMergeQueue(value) {
        this._mergeQueue.internalValue = value;
    }
    resetMergeQueue() {
        this._mergeQueue.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get mergeQueueInput() {
        return this._mergeQueue.internalValue;
    }
    // pull_request - computed: false, optional: true, required: false
    _pullRequest = new RepositoryRulesetRulesPullRequestOutputReference(this, "pull_request");
    get pullRequest() {
        return this._pullRequest;
    }
    putPullRequest(value) {
        this._pullRequest.internalValue = value;
    }
    resetPullRequest() {
        this._pullRequest.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get pullRequestInput() {
        return this._pullRequest.internalValue;
    }
    // required_code_scanning - computed: false, optional: true, required: false
    _requiredCodeScanning = new RepositoryRulesetRulesRequiredCodeScanningOutputReference(this, "required_code_scanning");
    get requiredCodeScanning() {
        return this._requiredCodeScanning;
    }
    putRequiredCodeScanning(value) {
        this._requiredCodeScanning.internalValue = value;
    }
    resetRequiredCodeScanning() {
        this._requiredCodeScanning.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requiredCodeScanningInput() {
        return this._requiredCodeScanning.internalValue;
    }
    // required_deployments - computed: false, optional: true, required: false
    _requiredDeployments = new RepositoryRulesetRulesRequiredDeploymentsOutputReference(this, "required_deployments");
    get requiredDeployments() {
        return this._requiredDeployments;
    }
    putRequiredDeployments(value) {
        this._requiredDeployments.internalValue = value;
    }
    resetRequiredDeployments() {
        this._requiredDeployments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requiredDeploymentsInput() {
        return this._requiredDeployments.internalValue;
    }
    // required_status_checks - computed: false, optional: true, required: false
    _requiredStatusChecks = new RepositoryRulesetRulesRequiredStatusChecksOutputReference(this, "required_status_checks");
    get requiredStatusChecks() {
        return this._requiredStatusChecks;
    }
    putRequiredStatusChecks(value) {
        this._requiredStatusChecks.internalValue = value;
    }
    resetRequiredStatusChecks() {
        this._requiredStatusChecks.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requiredStatusChecksInput() {
        return this._requiredStatusChecks.internalValue;
    }
    // tag_name_pattern - computed: false, optional: true, required: false
    _tagNamePattern = new RepositoryRulesetRulesTagNamePatternOutputReference(this, "tag_name_pattern");
    get tagNamePattern() {
        return this._tagNamePattern;
    }
    putTagNamePattern(value) {
        this._tagNamePattern.internalValue = value;
    }
    resetTagNamePattern() {
        this._tagNamePattern.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tagNamePatternInput() {
        return this._tagNamePattern.internalValue;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset github_repository_ruleset}
*/
export class RepositoryRuleset extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "github_repository_ruleset";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a RepositoryRuleset resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RepositoryRuleset to import
    * @param importFromId The id of the existing RepositoryRuleset that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RepositoryRuleset to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_repository_ruleset", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset github_repository_ruleset} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RepositoryRulesetConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'github_repository_ruleset',
            terraformGeneratorMetadata: {
                providerName: 'github',
                providerVersion: '6.12.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._enforcement = config.enforcement;
        this._id = config.id;
        this._name = config.name;
        this._repository = config.repository;
        this._target = config.target;
        this._bypassActors.internalValue = config.bypassActors;
        this._conditions.internalValue = config.conditions;
        this._rules.internalValue = config.rules;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // enforcement - computed: false, optional: false, required: true
    _enforcement;
    get enforcement() {
        return this.getStringAttribute('enforcement');
    }
    set enforcement(value) {
        this._enforcement = value;
    }
    // Temporarily expose input value. Use with caution.
    get enforcementInput() {
        return this._enforcement;
    }
    // etag - computed: true, optional: false, required: false
    get etag() {
        return this.getStringAttribute('etag');
    }
    // id - computed: true, optional: true, required: false
    _id;
    get id() {
        return this.getStringAttribute('id');
    }
    set id(value) {
        this._id = value;
    }
    resetId() {
        this._id = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get idInput() {
        return this._id;
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
    // node_id - computed: true, optional: false, required: false
    get nodeId() {
        return this.getStringAttribute('node_id');
    }
    // repository - computed: false, optional: false, required: true
    _repository;
    get repository() {
        return this.getStringAttribute('repository');
    }
    set repository(value) {
        this._repository = value;
    }
    // Temporarily expose input value. Use with caution.
    get repositoryInput() {
        return this._repository;
    }
    // ruleset_id - computed: true, optional: false, required: false
    get rulesetId() {
        return this.getNumberAttribute('ruleset_id');
    }
    // target - computed: false, optional: false, required: true
    _target;
    get target() {
        return this.getStringAttribute('target');
    }
    set target(value) {
        this._target = value;
    }
    // Temporarily expose input value. Use with caution.
    get targetInput() {
        return this._target;
    }
    // bypass_actors - computed: false, optional: true, required: false
    _bypassActors = new RepositoryRulesetBypassActorsList(this, "bypass_actors", false);
    get bypassActors() {
        return this._bypassActors;
    }
    putBypassActors(value) {
        this._bypassActors.internalValue = value;
    }
    resetBypassActors() {
        this._bypassActors.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bypassActorsInput() {
        return this._bypassActors.internalValue;
    }
    // conditions - computed: false, optional: true, required: false
    _conditions = new RepositoryRulesetConditionsOutputReference(this, "conditions");
    get conditions() {
        return this._conditions;
    }
    putConditions(value) {
        this._conditions.internalValue = value;
    }
    resetConditions() {
        this._conditions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get conditionsInput() {
        return this._conditions.internalValue;
    }
    // rules - computed: false, optional: false, required: true
    _rules = new RepositoryRulesetRulesOutputReference(this, "rules");
    get rules() {
        return this._rules;
    }
    putRules(value) {
        this._rules.internalValue = value;
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
            enforcement: cdktf.stringToTerraform(this._enforcement),
            id: cdktf.stringToTerraform(this._id),
            name: cdktf.stringToTerraform(this._name),
            repository: cdktf.stringToTerraform(this._repository),
            target: cdktf.stringToTerraform(this._target),
            bypass_actors: cdktf.listMapper(repositoryRulesetBypassActorsToTerraform, true)(this._bypassActors.internalValue),
            conditions: repositoryRulesetConditionsToTerraform(this._conditions.internalValue),
            rules: repositoryRulesetRulesToTerraform(this._rules.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            enforcement: {
                value: cdktf.stringToHclTerraform(this._enforcement),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            id: {
                value: cdktf.stringToHclTerraform(this._id),
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
            repository: {
                value: cdktf.stringToHclTerraform(this._repository),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            target: {
                value: cdktf.stringToHclTerraform(this._target),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            bypass_actors: {
                value: cdktf.listMapperHcl(repositoryRulesetBypassActorsToHclTerraform, true)(this._bypassActors.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "RepositoryRulesetBypassActorsList",
            },
            conditions: {
                value: repositoryRulesetConditionsToHclTerraform(this._conditions.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "RepositoryRulesetConditionsList",
            },
            rules: {
                value: repositoryRulesetRulesToHclTerraform(this._rules.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "RepositoryRulesetRulesList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
