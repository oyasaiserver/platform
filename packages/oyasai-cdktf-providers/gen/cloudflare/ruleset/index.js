// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function rulesetRulesActionParametersAlgorithmsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export function rulesetRulesActionParametersAlgorithmsToHclTerraform(struct) {
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
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RulesetRulesActionParametersAlgorithmsOutputReference extends cdktf.ComplexObject {
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
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
        }
    }
    // name - computed: true, optional: true, required: false
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
}
export class RulesetRulesActionParametersAlgorithmsList extends cdktf.ComplexList {
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
        return new RulesetRulesActionParametersAlgorithmsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function rulesetRulesActionParametersAutominifyToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        css: cdktf.booleanToTerraform(struct.css),
        html: cdktf.booleanToTerraform(struct.html),
        js: cdktf.booleanToTerraform(struct.js),
    };
}
export function rulesetRulesActionParametersAutominifyToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        css: {
            value: cdktf.booleanToHclTerraform(struct.css),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        html: {
            value: cdktf.booleanToHclTerraform(struct.html),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        js: {
            value: cdktf.booleanToHclTerraform(struct.js),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RulesetRulesActionParametersAutominifyOutputReference extends cdktf.ComplexObject {
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
        if (this._css !== undefined) {
            hasAnyValues = true;
            internalValueResult.css = this._css;
        }
        if (this._html !== undefined) {
            hasAnyValues = true;
            internalValueResult.html = this._html;
        }
        if (this._js !== undefined) {
            hasAnyValues = true;
            internalValueResult.js = this._js;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._css = undefined;
            this._html = undefined;
            this._js = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._css = value.css;
            this._html = value.html;
            this._js = value.js;
        }
    }
    // css - computed: true, optional: true, required: false
    _css;
    get css() {
        return this.getBooleanAttribute('css');
    }
    set css(value) {
        this._css = value;
    }
    resetCss() {
        this._css = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cssInput() {
        return this._css;
    }
    // html - computed: true, optional: true, required: false
    _html;
    get html() {
        return this.getBooleanAttribute('html');
    }
    set html(value) {
        this._html = value;
    }
    resetHtml() {
        this._html = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get htmlInput() {
        return this._html;
    }
    // js - computed: true, optional: true, required: false
    _js;
    get js() {
        return this.getBooleanAttribute('js');
    }
    set js(value) {
        this._js = value;
    }
    resetJs() {
        this._js = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get jsInput() {
        return this._js;
    }
}
export function rulesetRulesActionParametersBrowserTtlToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        default: cdktf.numberToTerraform(struct.default),
        mode: cdktf.stringToTerraform(struct.mode),
    };
}
export function rulesetRulesActionParametersBrowserTtlToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        default: {
            value: cdktf.numberToHclTerraform(struct.default),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        mode: {
            value: cdktf.stringToHclTerraform(struct.mode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RulesetRulesActionParametersBrowserTtlOutputReference extends cdktf.ComplexObject {
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
        if (this._default !== undefined) {
            hasAnyValues = true;
            internalValueResult.default = this._default;
        }
        if (this._mode !== undefined) {
            hasAnyValues = true;
            internalValueResult.mode = this._mode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._default = undefined;
            this._mode = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._default = value.default;
            this._mode = value.mode;
        }
    }
    // default - computed: true, optional: true, required: false
    _default;
    get default() {
        return this.getNumberAttribute('default');
    }
    set default(value) {
        this._default = value;
    }
    resetDefault() {
        this._default = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get defaultInput() {
        return this._default;
    }
    // mode - computed: true, optional: false, required: true
    _mode;
    get mode() {
        return this.getStringAttribute('mode');
    }
    set mode(value) {
        this._mode = value;
    }
    // Temporarily expose input value. Use with caution.
    get modeInput() {
        return this._mode;
    }
}
export function rulesetRulesActionParametersCacheKeyCustomKeyCookieToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        check_presence: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.checkPresence),
        include: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.include),
    };
}
export function rulesetRulesActionParametersCacheKeyCustomKeyCookieToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        check_presence: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.checkPresence),
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
export class RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference extends cdktf.ComplexObject {
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
        if (this._checkPresence !== undefined) {
            hasAnyValues = true;
            internalValueResult.checkPresence = this._checkPresence;
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
            this.resolvableValue = undefined;
            this._checkPresence = undefined;
            this._include = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._checkPresence = value.checkPresence;
            this._include = value.include;
        }
    }
    // check_presence - computed: true, optional: true, required: false
    _checkPresence;
    get checkPresence() {
        return this.getListAttribute('check_presence');
    }
    set checkPresence(value) {
        this._checkPresence = value;
    }
    resetCheckPresence() {
        this._checkPresence = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get checkPresenceInput() {
        return this._checkPresence;
    }
    // include - computed: true, optional: true, required: false
    _include;
    get include() {
        return this.getListAttribute('include');
    }
    set include(value) {
        this._include = value;
    }
    resetInclude() {
        this._include = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get includeInput() {
        return this._include;
    }
}
export function rulesetRulesActionParametersCacheKeyCustomKeyHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        check_presence: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.checkPresence),
        contains: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct.contains),
        exclude_origin: cdktf.booleanToTerraform(struct.excludeOrigin),
        include: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.include),
    };
}
export function rulesetRulesActionParametersCacheKeyCustomKeyHeaderToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        check_presence: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.checkPresence),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        contains: {
            value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct.contains),
            isBlock: false,
            type: "map",
            storageClassType: "stringListMap",
        },
        exclude_origin: {
            value: cdktf.booleanToHclTerraform(struct.excludeOrigin),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
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
export class RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference extends cdktf.ComplexObject {
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
        if (this._checkPresence !== undefined) {
            hasAnyValues = true;
            internalValueResult.checkPresence = this._checkPresence;
        }
        if (this._contains !== undefined) {
            hasAnyValues = true;
            internalValueResult.contains = this._contains;
        }
        if (this._excludeOrigin !== undefined) {
            hasAnyValues = true;
            internalValueResult.excludeOrigin = this._excludeOrigin;
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
            this.resolvableValue = undefined;
            this._checkPresence = undefined;
            this._contains = undefined;
            this._excludeOrigin = undefined;
            this._include = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._checkPresence = value.checkPresence;
            this._contains = value.contains;
            this._excludeOrigin = value.excludeOrigin;
            this._include = value.include;
        }
    }
    // check_presence - computed: true, optional: true, required: false
    _checkPresence;
    get checkPresence() {
        return this.getListAttribute('check_presence');
    }
    set checkPresence(value) {
        this._checkPresence = value;
    }
    resetCheckPresence() {
        this._checkPresence = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get checkPresenceInput() {
        return this._checkPresence;
    }
    // contains - computed: true, optional: true, required: false
    _contains;
    get contains() {
        return this.interpolationForAttribute('contains');
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
    // exclude_origin - computed: true, optional: true, required: false
    _excludeOrigin;
    get excludeOrigin() {
        return this.getBooleanAttribute('exclude_origin');
    }
    set excludeOrigin(value) {
        this._excludeOrigin = value;
    }
    resetExcludeOrigin() {
        this._excludeOrigin = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get excludeOriginInput() {
        return this._excludeOrigin;
    }
    // include - computed: true, optional: true, required: false
    _include;
    get include() {
        return this.getListAttribute('include');
    }
    set include(value) {
        this._include = value;
    }
    resetInclude() {
        this._include = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get includeInput() {
        return this._include;
    }
}
export function rulesetRulesActionParametersCacheKeyCustomKeyHostToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        resolved: cdktf.booleanToTerraform(struct.resolved),
    };
}
export function rulesetRulesActionParametersCacheKeyCustomKeyHostToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        resolved: {
            value: cdktf.booleanToHclTerraform(struct.resolved),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference extends cdktf.ComplexObject {
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
        if (this._resolved !== undefined) {
            hasAnyValues = true;
            internalValueResult.resolved = this._resolved;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._resolved = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._resolved = value.resolved;
        }
    }
    // resolved - computed: true, optional: true, required: false
    _resolved;
    get resolved() {
        return this.getBooleanAttribute('resolved');
    }
    set resolved(value) {
        this._resolved = value;
    }
    resetResolved() {
        this._resolved = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get resolvedInput() {
        return this._resolved;
    }
}
export function rulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all: cdktf.booleanToTerraform(struct.all),
        list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.list),
    };
}
export function rulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        all: {
            value: cdktf.booleanToHclTerraform(struct.all),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        list: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.list),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference extends cdktf.ComplexObject {
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
        if (this._all !== undefined) {
            hasAnyValues = true;
            internalValueResult.all = this._all;
        }
        if (this._list !== undefined) {
            hasAnyValues = true;
            internalValueResult.list = this._list;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._all = undefined;
            this._list = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._all = value.all;
            this._list = value.list;
        }
    }
    // all - computed: true, optional: true, required: false
    _all;
    get all() {
        return this.getBooleanAttribute('all');
    }
    set all(value) {
        this._all = value;
    }
    resetAll() {
        this._all = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allInput() {
        return this._all;
    }
    // list - computed: true, optional: true, required: false
    _list;
    get list() {
        return this.getListAttribute('list');
    }
    set list(value) {
        this._list = value;
    }
    resetList() {
        this._list = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get listInput() {
        return this._list;
    }
}
export function rulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all: cdktf.booleanToTerraform(struct.all),
        list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.list),
    };
}
export function rulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        all: {
            value: cdktf.booleanToHclTerraform(struct.all),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        list: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.list),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference extends cdktf.ComplexObject {
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
        if (this._all !== undefined) {
            hasAnyValues = true;
            internalValueResult.all = this._all;
        }
        if (this._list !== undefined) {
            hasAnyValues = true;
            internalValueResult.list = this._list;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._all = undefined;
            this._list = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._all = value.all;
            this._list = value.list;
        }
    }
    // all - computed: true, optional: true, required: false
    _all;
    get all() {
        return this.getBooleanAttribute('all');
    }
    set all(value) {
        this._all = value;
    }
    resetAll() {
        this._all = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allInput() {
        return this._all;
    }
    // list - computed: true, optional: true, required: false
    _list;
    get list() {
        return this.getListAttribute('list');
    }
    set list(value) {
        this._list = value;
    }
    resetList() {
        this._list = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get listInput() {
        return this._list;
    }
}
export function rulesetRulesActionParametersCacheKeyCustomKeyQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        exclude: rulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeToTerraform(struct.exclude),
        include: rulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeToTerraform(struct.include),
    };
}
export function rulesetRulesActionParametersCacheKeyCustomKeyQueryStringToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        exclude: {
            value: rulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeToHclTerraform(struct.exclude),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersCacheKeyCustomKeyQueryStringExclude",
        },
        include: {
            value: rulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeToHclTerraform(struct.include),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersCacheKeyCustomKeyQueryStringInclude",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference extends cdktf.ComplexObject {
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
        if (this._exclude?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.exclude = this._exclude?.internalValue;
        }
        if (this._include?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.include = this._include?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._exclude.internalValue = undefined;
            this._include.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._exclude.internalValue = value.exclude;
            this._include.internalValue = value.include;
        }
    }
    // exclude - computed: true, optional: true, required: false
    _exclude = new RulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference(this, "exclude");
    get exclude() {
        return this._exclude;
    }
    putExclude(value) {
        this._exclude.internalValue = value;
    }
    resetExclude() {
        this._exclude.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get excludeInput() {
        return this._exclude.internalValue;
    }
    // include - computed: true, optional: true, required: false
    _include = new RulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference(this, "include");
    get include() {
        return this._include;
    }
    putInclude(value) {
        this._include.internalValue = value;
    }
    resetInclude() {
        this._include.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get includeInput() {
        return this._include.internalValue;
    }
}
export function rulesetRulesActionParametersCacheKeyCustomKeyUserToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        device_type: cdktf.booleanToTerraform(struct.deviceType),
        geo: cdktf.booleanToTerraform(struct.geo),
        lang: cdktf.booleanToTerraform(struct.lang),
    };
}
export function rulesetRulesActionParametersCacheKeyCustomKeyUserToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        device_type: {
            value: cdktf.booleanToHclTerraform(struct.deviceType),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        geo: {
            value: cdktf.booleanToHclTerraform(struct.geo),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        lang: {
            value: cdktf.booleanToHclTerraform(struct.lang),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference extends cdktf.ComplexObject {
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
        if (this._deviceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.deviceType = this._deviceType;
        }
        if (this._geo !== undefined) {
            hasAnyValues = true;
            internalValueResult.geo = this._geo;
        }
        if (this._lang !== undefined) {
            hasAnyValues = true;
            internalValueResult.lang = this._lang;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._deviceType = undefined;
            this._geo = undefined;
            this._lang = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._deviceType = value.deviceType;
            this._geo = value.geo;
            this._lang = value.lang;
        }
    }
    // device_type - computed: true, optional: true, required: false
    _deviceType;
    get deviceType() {
        return this.getBooleanAttribute('device_type');
    }
    set deviceType(value) {
        this._deviceType = value;
    }
    resetDeviceType() {
        this._deviceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deviceTypeInput() {
        return this._deviceType;
    }
    // geo - computed: true, optional: true, required: false
    _geo;
    get geo() {
        return this.getBooleanAttribute('geo');
    }
    set geo(value) {
        this._geo = value;
    }
    resetGeo() {
        this._geo = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get geoInput() {
        return this._geo;
    }
    // lang - computed: true, optional: true, required: false
    _lang;
    get lang() {
        return this.getBooleanAttribute('lang');
    }
    set lang(value) {
        this._lang = value;
    }
    resetLang() {
        this._lang = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get langInput() {
        return this._lang;
    }
}
export function rulesetRulesActionParametersCacheKeyCustomKeyToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cookie: rulesetRulesActionParametersCacheKeyCustomKeyCookieToTerraform(struct.cookie),
        header: rulesetRulesActionParametersCacheKeyCustomKeyHeaderToTerraform(struct.header),
        host: rulesetRulesActionParametersCacheKeyCustomKeyHostToTerraform(struct.host),
        query_string: rulesetRulesActionParametersCacheKeyCustomKeyQueryStringToTerraform(struct.queryString),
        user: rulesetRulesActionParametersCacheKeyCustomKeyUserToTerraform(struct.user),
    };
}
export function rulesetRulesActionParametersCacheKeyCustomKeyToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        cookie: {
            value: rulesetRulesActionParametersCacheKeyCustomKeyCookieToHclTerraform(struct.cookie),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersCacheKeyCustomKeyCookie",
        },
        header: {
            value: rulesetRulesActionParametersCacheKeyCustomKeyHeaderToHclTerraform(struct.header),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersCacheKeyCustomKeyHeader",
        },
        host: {
            value: rulesetRulesActionParametersCacheKeyCustomKeyHostToHclTerraform(struct.host),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersCacheKeyCustomKeyHost",
        },
        query_string: {
            value: rulesetRulesActionParametersCacheKeyCustomKeyQueryStringToHclTerraform(struct.queryString),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersCacheKeyCustomKeyQueryString",
        },
        user: {
            value: rulesetRulesActionParametersCacheKeyCustomKeyUserToHclTerraform(struct.user),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersCacheKeyCustomKeyUser",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RulesetRulesActionParametersCacheKeyCustomKeyOutputReference extends cdktf.ComplexObject {
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
        if (this._cookie?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.cookie = this._cookie?.internalValue;
        }
        if (this._header?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.header = this._header?.internalValue;
        }
        if (this._host?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.host = this._host?.internalValue;
        }
        if (this._queryString?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString?.internalValue;
        }
        if (this._user?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.user = this._user?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cookie.internalValue = undefined;
            this._header.internalValue = undefined;
            this._host.internalValue = undefined;
            this._queryString.internalValue = undefined;
            this._user.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cookie.internalValue = value.cookie;
            this._header.internalValue = value.header;
            this._host.internalValue = value.host;
            this._queryString.internalValue = value.queryString;
            this._user.internalValue = value.user;
        }
    }
    // cookie - computed: true, optional: true, required: false
    _cookie = new RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference(this, "cookie");
    get cookie() {
        return this._cookie;
    }
    putCookie(value) {
        this._cookie.internalValue = value;
    }
    resetCookie() {
        this._cookie.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cookieInput() {
        return this._cookie.internalValue;
    }
    // header - computed: true, optional: true, required: false
    _header = new RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference(this, "header");
    get header() {
        return this._header;
    }
    putHeader(value) {
        this._header.internalValue = value;
    }
    resetHeader() {
        this._header.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get headerInput() {
        return this._header.internalValue;
    }
    // host - computed: true, optional: true, required: false
    _host = new RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference(this, "host");
    get host() {
        return this._host;
    }
    putHost(value) {
        this._host.internalValue = value;
    }
    resetHost() {
        this._host.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hostInput() {
        return this._host.internalValue;
    }
    // query_string - computed: true, optional: true, required: false
    _queryString = new RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference(this, "query_string");
    get queryString() {
        return this._queryString;
    }
    putQueryString(value) {
        this._queryString.internalValue = value;
    }
    resetQueryString() {
        this._queryString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString.internalValue;
    }
    // user - computed: true, optional: true, required: false
    _user = new RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference(this, "user");
    get user() {
        return this._user;
    }
    putUser(value) {
        this._user.internalValue = value;
    }
    resetUser() {
        this._user.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get userInput() {
        return this._user.internalValue;
    }
}
export function rulesetRulesActionParametersCacheKeyToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cache_by_device_type: cdktf.booleanToTerraform(struct.cacheByDeviceType),
        cache_deception_armor: cdktf.booleanToTerraform(struct.cacheDeceptionArmor),
        custom_key: rulesetRulesActionParametersCacheKeyCustomKeyToTerraform(struct.customKey),
        ignore_query_strings_order: cdktf.booleanToTerraform(struct.ignoreQueryStringsOrder),
    };
}
export function rulesetRulesActionParametersCacheKeyToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        cache_by_device_type: {
            value: cdktf.booleanToHclTerraform(struct.cacheByDeviceType),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        cache_deception_armor: {
            value: cdktf.booleanToHclTerraform(struct.cacheDeceptionArmor),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        custom_key: {
            value: rulesetRulesActionParametersCacheKeyCustomKeyToHclTerraform(struct.customKey),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersCacheKeyCustomKey",
        },
        ignore_query_strings_order: {
            value: cdktf.booleanToHclTerraform(struct.ignoreQueryStringsOrder),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RulesetRulesActionParametersCacheKeyOutputReference extends cdktf.ComplexObject {
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
        if (this._cacheByDeviceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.cacheByDeviceType = this._cacheByDeviceType;
        }
        if (this._cacheDeceptionArmor !== undefined) {
            hasAnyValues = true;
            internalValueResult.cacheDeceptionArmor = this._cacheDeceptionArmor;
        }
        if (this._customKey?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customKey = this._customKey?.internalValue;
        }
        if (this._ignoreQueryStringsOrder !== undefined) {
            hasAnyValues = true;
            internalValueResult.ignoreQueryStringsOrder = this._ignoreQueryStringsOrder;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cacheByDeviceType = undefined;
            this._cacheDeceptionArmor = undefined;
            this._customKey.internalValue = undefined;
            this._ignoreQueryStringsOrder = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cacheByDeviceType = value.cacheByDeviceType;
            this._cacheDeceptionArmor = value.cacheDeceptionArmor;
            this._customKey.internalValue = value.customKey;
            this._ignoreQueryStringsOrder = value.ignoreQueryStringsOrder;
        }
    }
    // cache_by_device_type - computed: true, optional: true, required: false
    _cacheByDeviceType;
    get cacheByDeviceType() {
        return this.getBooleanAttribute('cache_by_device_type');
    }
    set cacheByDeviceType(value) {
        this._cacheByDeviceType = value;
    }
    resetCacheByDeviceType() {
        this._cacheByDeviceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cacheByDeviceTypeInput() {
        return this._cacheByDeviceType;
    }
    // cache_deception_armor - computed: true, optional: true, required: false
    _cacheDeceptionArmor;
    get cacheDeceptionArmor() {
        return this.getBooleanAttribute('cache_deception_armor');
    }
    set cacheDeceptionArmor(value) {
        this._cacheDeceptionArmor = value;
    }
    resetCacheDeceptionArmor() {
        this._cacheDeceptionArmor = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cacheDeceptionArmorInput() {
        return this._cacheDeceptionArmor;
    }
    // custom_key - computed: true, optional: true, required: false
    _customKey = new RulesetRulesActionParametersCacheKeyCustomKeyOutputReference(this, "custom_key");
    get customKey() {
        return this._customKey;
    }
    putCustomKey(value) {
        this._customKey.internalValue = value;
    }
    resetCustomKey() {
        this._customKey.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get customKeyInput() {
        return this._customKey.internalValue;
    }
    // ignore_query_strings_order - computed: true, optional: true, required: false
    _ignoreQueryStringsOrder;
    get ignoreQueryStringsOrder() {
        return this.getBooleanAttribute('ignore_query_strings_order');
    }
    set ignoreQueryStringsOrder(value) {
        this._ignoreQueryStringsOrder = value;
    }
    resetIgnoreQueryStringsOrder() {
        this._ignoreQueryStringsOrder = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ignoreQueryStringsOrderInput() {
        return this._ignoreQueryStringsOrder;
    }
}
export function rulesetRulesActionParametersCacheReserveToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        eligible: cdktf.booleanToTerraform(struct.eligible),
        minimum_file_size: cdktf.numberToTerraform(struct.minimumFileSize),
    };
}
export function rulesetRulesActionParametersCacheReserveToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        eligible: {
            value: cdktf.booleanToHclTerraform(struct.eligible),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        minimum_file_size: {
            value: cdktf.numberToHclTerraform(struct.minimumFileSize),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RulesetRulesActionParametersCacheReserveOutputReference extends cdktf.ComplexObject {
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
        if (this._eligible !== undefined) {
            hasAnyValues = true;
            internalValueResult.eligible = this._eligible;
        }
        if (this._minimumFileSize !== undefined) {
            hasAnyValues = true;
            internalValueResult.minimumFileSize = this._minimumFileSize;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._eligible = undefined;
            this._minimumFileSize = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._eligible = value.eligible;
            this._minimumFileSize = value.minimumFileSize;
        }
    }
    // eligible - computed: true, optional: false, required: true
    _eligible;
    get eligible() {
        return this.getBooleanAttribute('eligible');
    }
    set eligible(value) {
        this._eligible = value;
    }
    // Temporarily expose input value. Use with caution.
    get eligibleInput() {
        return this._eligible;
    }
    // minimum_file_size - computed: true, optional: true, required: false
    _minimumFileSize;
    get minimumFileSize() {
        return this.getNumberAttribute('minimum_file_size');
    }
    set minimumFileSize(value) {
        this._minimumFileSize = value;
    }
    resetMinimumFileSize() {
        this._minimumFileSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get minimumFileSizeInput() {
        return this._minimumFileSize;
    }
}
export function rulesetRulesActionParametersCookieFieldsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export function rulesetRulesActionParametersCookieFieldsToHclTerraform(struct) {
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
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RulesetRulesActionParametersCookieFieldsOutputReference extends cdktf.ComplexObject {
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
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
        }
    }
    // name - computed: true, optional: false, required: true
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
}
export class RulesetRulesActionParametersCookieFieldsList extends cdktf.ComplexList {
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
        return new RulesetRulesActionParametersCookieFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function rulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        from: cdktf.numberToTerraform(struct.from),
        to: cdktf.numberToTerraform(struct.to),
    };
}
export function rulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        from: {
            value: cdktf.numberToHclTerraform(struct.from),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        to: {
            value: cdktf.numberToHclTerraform(struct.to),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference extends cdktf.ComplexObject {
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
        if (this._from !== undefined) {
            hasAnyValues = true;
            internalValueResult.from = this._from;
        }
        if (this._to !== undefined) {
            hasAnyValues = true;
            internalValueResult.to = this._to;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._from = undefined;
            this._to = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._from = value.from;
            this._to = value.to;
        }
    }
    // from - computed: true, optional: true, required: false
    _from;
    get from() {
        return this.getNumberAttribute('from');
    }
    set from(value) {
        this._from = value;
    }
    resetFrom() {
        this._from = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fromInput() {
        return this._from;
    }
    // to - computed: true, optional: true, required: false
    _to;
    get to() {
        return this.getNumberAttribute('to');
    }
    set to(value) {
        this._to = value;
    }
    resetTo() {
        this._to = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get toInput() {
        return this._to;
    }
}
export function rulesetRulesActionParametersEdgeTtlStatusCodeTtlToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        status_code: cdktf.numberToTerraform(struct.statusCode),
        status_code_range: rulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeToTerraform(struct.statusCodeRange),
        value: cdktf.numberToTerraform(struct.value),
    };
}
export function rulesetRulesActionParametersEdgeTtlStatusCodeTtlToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        status_code: {
            value: cdktf.numberToHclTerraform(struct.statusCode),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        status_code_range: {
            value: rulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeToHclTerraform(struct.statusCodeRange),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange",
        },
        value: {
            value: cdktf.numberToHclTerraform(struct.value),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference extends cdktf.ComplexObject {
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
        if (this._statusCode !== undefined) {
            hasAnyValues = true;
            internalValueResult.statusCode = this._statusCode;
        }
        if (this._statusCodeRange?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.statusCodeRange = this._statusCodeRange?.internalValue;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._statusCode = undefined;
            this._statusCodeRange.internalValue = undefined;
            this._value = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._statusCode = value.statusCode;
            this._statusCodeRange.internalValue = value.statusCodeRange;
            this._value = value.value;
        }
    }
    // status_code - computed: true, optional: true, required: false
    _statusCode;
    get statusCode() {
        return this.getNumberAttribute('status_code');
    }
    set statusCode(value) {
        this._statusCode = value;
    }
    resetStatusCode() {
        this._statusCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get statusCodeInput() {
        return this._statusCode;
    }
    // status_code_range - computed: true, optional: true, required: false
    _statusCodeRange = new RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference(this, "status_code_range");
    get statusCodeRange() {
        return this._statusCodeRange;
    }
    putStatusCodeRange(value) {
        this._statusCodeRange.internalValue = value;
    }
    resetStatusCodeRange() {
        this._statusCodeRange.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get statusCodeRangeInput() {
        return this._statusCodeRange.internalValue;
    }
    // value - computed: true, optional: false, required: true
    _value;
    get value() {
        return this.getNumberAttribute('value');
    }
    set value(value) {
        this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    get valueInput() {
        return this._value;
    }
}
export class RulesetRulesActionParametersEdgeTtlStatusCodeTtlList extends cdktf.ComplexList {
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
        return new RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function rulesetRulesActionParametersEdgeTtlToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        default: cdktf.numberToTerraform(struct.default),
        mode: cdktf.stringToTerraform(struct.mode),
        status_code_ttl: cdktf.listMapper(rulesetRulesActionParametersEdgeTtlStatusCodeTtlToTerraform, false)(struct.statusCodeTtl),
    };
}
export function rulesetRulesActionParametersEdgeTtlToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        default: {
            value: cdktf.numberToHclTerraform(struct.default),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        mode: {
            value: cdktf.stringToHclTerraform(struct.mode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        status_code_ttl: {
            value: cdktf.listMapperHcl(rulesetRulesActionParametersEdgeTtlStatusCodeTtlToHclTerraform, false)(struct.statusCodeTtl),
            isBlock: true,
            type: "list",
            storageClassType: "RulesetRulesActionParametersEdgeTtlStatusCodeTtlList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RulesetRulesActionParametersEdgeTtlOutputReference extends cdktf.ComplexObject {
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
        if (this._default !== undefined) {
            hasAnyValues = true;
            internalValueResult.default = this._default;
        }
        if (this._mode !== undefined) {
            hasAnyValues = true;
            internalValueResult.mode = this._mode;
        }
        if (this._statusCodeTtl?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.statusCodeTtl = this._statusCodeTtl?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._default = undefined;
            this._mode = undefined;
            this._statusCodeTtl.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._default = value.default;
            this._mode = value.mode;
            this._statusCodeTtl.internalValue = value.statusCodeTtl;
        }
    }
    // default - computed: true, optional: true, required: false
    _default;
    get default() {
        return this.getNumberAttribute('default');
    }
    set default(value) {
        this._default = value;
    }
    resetDefault() {
        this._default = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get defaultInput() {
        return this._default;
    }
    // mode - computed: true, optional: false, required: true
    _mode;
    get mode() {
        return this.getStringAttribute('mode');
    }
    set mode(value) {
        this._mode = value;
    }
    // Temporarily expose input value. Use with caution.
    get modeInput() {
        return this._mode;
    }
    // status_code_ttl - computed: true, optional: true, required: false
    _statusCodeTtl = new RulesetRulesActionParametersEdgeTtlStatusCodeTtlList(this, "status_code_ttl", false);
    get statusCodeTtl() {
        return this._statusCodeTtl;
    }
    putStatusCodeTtl(value) {
        this._statusCodeTtl.internalValue = value;
    }
    resetStatusCodeTtl() {
        this._statusCodeTtl.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get statusCodeTtlInput() {
        return this._statusCodeTtl.internalValue;
    }
}
export function rulesetRulesActionParametersFromListStructToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        name: cdktf.stringToTerraform(struct.name),
    };
}
export function rulesetRulesActionParametersFromListStructToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        key: {
            value: cdktf.stringToHclTerraform(struct.key),
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
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RulesetRulesActionParametersFromListStructOutputReference extends cdktf.ComplexObject {
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
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._key = undefined;
            this._name = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._key = value.key;
            this._name = value.name;
        }
    }
    // key - computed: true, optional: false, required: true
    _key;
    get key() {
        return this.getStringAttribute('key');
    }
    set key(value) {
        this._key = value;
    }
    // Temporarily expose input value. Use with caution.
    get keyInput() {
        return this._key;
    }
    // name - computed: true, optional: false, required: true
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
}
export function rulesetRulesActionParametersFromValueTargetUrlToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        expression: cdktf.stringToTerraform(struct.expression),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function rulesetRulesActionParametersFromValueTargetUrlToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        expression: {
            value: cdktf.stringToHclTerraform(struct.expression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktf.stringToHclTerraform(struct.value),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RulesetRulesActionParametersFromValueTargetUrlOutputReference extends cdktf.ComplexObject {
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
        if (this._expression !== undefined) {
            hasAnyValues = true;
            internalValueResult.expression = this._expression;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._expression = undefined;
            this._value = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._expression = value.expression;
            this._value = value.value;
        }
    }
    // expression - computed: true, optional: true, required: false
    _expression;
    get expression() {
        return this.getStringAttribute('expression');
    }
    set expression(value) {
        this._expression = value;
    }
    resetExpression() {
        this._expression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get expressionInput() {
        return this._expression;
    }
    // value - computed: true, optional: true, required: false
    _value;
    get value() {
        return this.getStringAttribute('value');
    }
    set value(value) {
        this._value = value;
    }
    resetValue() {
        this._value = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get valueInput() {
        return this._value;
    }
}
export function rulesetRulesActionParametersFromValueToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        preserve_query_string: cdktf.booleanToTerraform(struct.preserveQueryString),
        status_code: cdktf.numberToTerraform(struct.statusCode),
        target_url: rulesetRulesActionParametersFromValueTargetUrlToTerraform(struct.targetUrl),
    };
}
export function rulesetRulesActionParametersFromValueToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        preserve_query_string: {
            value: cdktf.booleanToHclTerraform(struct.preserveQueryString),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        status_code: {
            value: cdktf.numberToHclTerraform(struct.statusCode),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        target_url: {
            value: rulesetRulesActionParametersFromValueTargetUrlToHclTerraform(struct.targetUrl),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersFromValueTargetUrl",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RulesetRulesActionParametersFromValueOutputReference extends cdktf.ComplexObject {
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
        if (this._preserveQueryString !== undefined) {
            hasAnyValues = true;
            internalValueResult.preserveQueryString = this._preserveQueryString;
        }
        if (this._statusCode !== undefined) {
            hasAnyValues = true;
            internalValueResult.statusCode = this._statusCode;
        }
        if (this._targetUrl?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetUrl = this._targetUrl?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._preserveQueryString = undefined;
            this._statusCode = undefined;
            this._targetUrl.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._preserveQueryString = value.preserveQueryString;
            this._statusCode = value.statusCode;
            this._targetUrl.internalValue = value.targetUrl;
        }
    }
    // preserve_query_string - computed: true, optional: true, required: false
    _preserveQueryString;
    get preserveQueryString() {
        return this.getBooleanAttribute('preserve_query_string');
    }
    set preserveQueryString(value) {
        this._preserveQueryString = value;
    }
    resetPreserveQueryString() {
        this._preserveQueryString = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get preserveQueryStringInput() {
        return this._preserveQueryString;
    }
    // status_code - computed: true, optional: true, required: false
    _statusCode;
    get statusCode() {
        return this.getNumberAttribute('status_code');
    }
    set statusCode(value) {
        this._statusCode = value;
    }
    resetStatusCode() {
        this._statusCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get statusCodeInput() {
        return this._statusCode;
    }
    // target_url - computed: true, optional: false, required: true
    _targetUrl = new RulesetRulesActionParametersFromValueTargetUrlOutputReference(this, "target_url");
    get targetUrl() {
        return this._targetUrl;
    }
    putTargetUrl(value) {
        this._targetUrl.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get targetUrlInput() {
        return this._targetUrl.internalValue;
    }
}
export function rulesetRulesActionParametersHeadersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        expression: cdktf.stringToTerraform(struct.expression),
        operation: cdktf.stringToTerraform(struct.operation),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function rulesetRulesActionParametersHeadersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        expression: {
            value: cdktf.stringToHclTerraform(struct.expression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        operation: {
            value: cdktf.stringToHclTerraform(struct.operation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktf.stringToHclTerraform(struct.value),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RulesetRulesActionParametersHeadersOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource, terraformAttribute, complexObjectKey) {
        super(terraformResource, terraformAttribute, false, complexObjectKey);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._expression !== undefined) {
            hasAnyValues = true;
            internalValueResult.expression = this._expression;
        }
        if (this._operation !== undefined) {
            hasAnyValues = true;
            internalValueResult.operation = this._operation;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._expression = undefined;
            this._operation = undefined;
            this._value = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._expression = value.expression;
            this._operation = value.operation;
            this._value = value.value;
        }
    }
    // expression - computed: true, optional: true, required: false
    _expression;
    get expression() {
        return this.getStringAttribute('expression');
    }
    set expression(value) {
        this._expression = value;
    }
    resetExpression() {
        this._expression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get expressionInput() {
        return this._expression;
    }
    // operation - computed: true, optional: false, required: true
    _operation;
    get operation() {
        return this.getStringAttribute('operation');
    }
    set operation(value) {
        this._operation = value;
    }
    // Temporarily expose input value. Use with caution.
    get operationInput() {
        return this._operation;
    }
    // value - computed: true, optional: true, required: false
    _value;
    get value() {
        return this.getStringAttribute('value');
    }
    set value(value) {
        this._value = value;
    }
    resetValue() {
        this._value = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get valueInput() {
        return this._value;
    }
}
export class RulesetRulesActionParametersHeadersMap extends cdktf.ComplexMap {
    terraformResource;
    terraformAttribute;
    internalValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
    }
    /**
    * @param key the key of the item to return
    */
    get(key) {
        return new RulesetRulesActionParametersHeadersOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
export function rulesetRulesActionParametersImmutableToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cloudflare_only: cdktf.booleanToTerraform(struct.cloudflareOnly),
        operation: cdktf.stringToTerraform(struct.operation),
    };
}
export function rulesetRulesActionParametersImmutableToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        cloudflare_only: {
            value: cdktf.booleanToHclTerraform(struct.cloudflareOnly),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        operation: {
            value: cdktf.stringToHclTerraform(struct.operation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RulesetRulesActionParametersImmutableOutputReference extends cdktf.ComplexObject {
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
        if (this._cloudflareOnly !== undefined) {
            hasAnyValues = true;
            internalValueResult.cloudflareOnly = this._cloudflareOnly;
        }
        if (this._operation !== undefined) {
            hasAnyValues = true;
            internalValueResult.operation = this._operation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cloudflareOnly = undefined;
            this._operation = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cloudflareOnly = value.cloudflareOnly;
            this._operation = value.operation;
        }
    }
    // cloudflare_only - computed: true, optional: true, required: false
    _cloudflareOnly;
    get cloudflareOnly() {
        return this.getBooleanAttribute('cloudflare_only');
    }
    set cloudflareOnly(value) {
        this._cloudflareOnly = value;
    }
    resetCloudflareOnly() {
        this._cloudflareOnly = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cloudflareOnlyInput() {
        return this._cloudflareOnly;
    }
    // operation - computed: true, optional: false, required: true
    _operation;
    get operation() {
        return this.getStringAttribute('operation');
    }
    set operation(value) {
        this._operation = value;
    }
    // Temporarily expose input value. Use with caution.
    get operationInput() {
        return this._operation;
    }
}
export function rulesetRulesActionParametersMatchedDataToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        public_key: cdktf.stringToTerraform(struct.publicKey),
    };
}
export function rulesetRulesActionParametersMatchedDataToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        public_key: {
            value: cdktf.stringToHclTerraform(struct.publicKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RulesetRulesActionParametersMatchedDataOutputReference extends cdktf.ComplexObject {
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
        if (this._publicKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.publicKey = this._publicKey;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._publicKey = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._publicKey = value.publicKey;
        }
    }
    // public_key - computed: true, optional: false, required: true
    _publicKey;
    get publicKey() {
        return this.getStringAttribute('public_key');
    }
    set publicKey(value) {
        this._publicKey = value;
    }
    // Temporarily expose input value. Use with caution.
    get publicKeyInput() {
        return this._publicKey;
    }
}
export function rulesetRulesActionParametersMaxAgeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cloudflare_only: cdktf.booleanToTerraform(struct.cloudflareOnly),
        operation: cdktf.stringToTerraform(struct.operation),
        value: cdktf.numberToTerraform(struct.value),
    };
}
export function rulesetRulesActionParametersMaxAgeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        cloudflare_only: {
            value: cdktf.booleanToHclTerraform(struct.cloudflareOnly),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        operation: {
            value: cdktf.stringToHclTerraform(struct.operation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktf.numberToHclTerraform(struct.value),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RulesetRulesActionParametersMaxAgeOutputReference extends cdktf.ComplexObject {
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
        if (this._cloudflareOnly !== undefined) {
            hasAnyValues = true;
            internalValueResult.cloudflareOnly = this._cloudflareOnly;
        }
        if (this._operation !== undefined) {
            hasAnyValues = true;
            internalValueResult.operation = this._operation;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cloudflareOnly = undefined;
            this._operation = undefined;
            this._value = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cloudflareOnly = value.cloudflareOnly;
            this._operation = value.operation;
            this._value = value.value;
        }
    }
    // cloudflare_only - computed: true, optional: true, required: false
    _cloudflareOnly;
    get cloudflareOnly() {
        return this.getBooleanAttribute('cloudflare_only');
    }
    set cloudflareOnly(value) {
        this._cloudflareOnly = value;
    }
    resetCloudflareOnly() {
        this._cloudflareOnly = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cloudflareOnlyInput() {
        return this._cloudflareOnly;
    }
    // operation - computed: true, optional: false, required: true
    _operation;
    get operation() {
        return this.getStringAttribute('operation');
    }
    set operation(value) {
        this._operation = value;
    }
    // Temporarily expose input value. Use with caution.
    get operationInput() {
        return this._operation;
    }
    // value - computed: true, optional: true, required: false
    _value;
    get value() {
        return this.getNumberAttribute('value');
    }
    set value(value) {
        this._value = value;
    }
    resetValue() {
        this._value = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get valueInput() {
        return this._value;
    }
}
export function rulesetRulesActionParametersMustRevalidateToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cloudflare_only: cdktf.booleanToTerraform(struct.cloudflareOnly),
        operation: cdktf.stringToTerraform(struct.operation),
    };
}
export function rulesetRulesActionParametersMustRevalidateToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        cloudflare_only: {
            value: cdktf.booleanToHclTerraform(struct.cloudflareOnly),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        operation: {
            value: cdktf.stringToHclTerraform(struct.operation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RulesetRulesActionParametersMustRevalidateOutputReference extends cdktf.ComplexObject {
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
        if (this._cloudflareOnly !== undefined) {
            hasAnyValues = true;
            internalValueResult.cloudflareOnly = this._cloudflareOnly;
        }
        if (this._operation !== undefined) {
            hasAnyValues = true;
            internalValueResult.operation = this._operation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cloudflareOnly = undefined;
            this._operation = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cloudflareOnly = value.cloudflareOnly;
            this._operation = value.operation;
        }
    }
    // cloudflare_only - computed: true, optional: true, required: false
    _cloudflareOnly;
    get cloudflareOnly() {
        return this.getBooleanAttribute('cloudflare_only');
    }
    set cloudflareOnly(value) {
        this._cloudflareOnly = value;
    }
    resetCloudflareOnly() {
        this._cloudflareOnly = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cloudflareOnlyInput() {
        return this._cloudflareOnly;
    }
    // operation - computed: true, optional: false, required: true
    _operation;
    get operation() {
        return this.getStringAttribute('operation');
    }
    set operation(value) {
        this._operation = value;
    }
    // Temporarily expose input value. Use with caution.
    get operationInput() {
        return this._operation;
    }
}
export function rulesetRulesActionParametersMustUnderstandToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cloudflare_only: cdktf.booleanToTerraform(struct.cloudflareOnly),
        operation: cdktf.stringToTerraform(struct.operation),
    };
}
export function rulesetRulesActionParametersMustUnderstandToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        cloudflare_only: {
            value: cdktf.booleanToHclTerraform(struct.cloudflareOnly),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        operation: {
            value: cdktf.stringToHclTerraform(struct.operation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RulesetRulesActionParametersMustUnderstandOutputReference extends cdktf.ComplexObject {
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
        if (this._cloudflareOnly !== undefined) {
            hasAnyValues = true;
            internalValueResult.cloudflareOnly = this._cloudflareOnly;
        }
        if (this._operation !== undefined) {
            hasAnyValues = true;
            internalValueResult.operation = this._operation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cloudflareOnly = undefined;
            this._operation = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cloudflareOnly = value.cloudflareOnly;
            this._operation = value.operation;
        }
    }
    // cloudflare_only - computed: true, optional: true, required: false
    _cloudflareOnly;
    get cloudflareOnly() {
        return this.getBooleanAttribute('cloudflare_only');
    }
    set cloudflareOnly(value) {
        this._cloudflareOnly = value;
    }
    resetCloudflareOnly() {
        this._cloudflareOnly = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cloudflareOnlyInput() {
        return this._cloudflareOnly;
    }
    // operation - computed: true, optional: false, required: true
    _operation;
    get operation() {
        return this.getStringAttribute('operation');
    }
    set operation(value) {
        this._operation = value;
    }
    // Temporarily expose input value. Use with caution.
    get operationInput() {
        return this._operation;
    }
}
export function rulesetRulesActionParametersNoCacheToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cloudflare_only: cdktf.booleanToTerraform(struct.cloudflareOnly),
        operation: cdktf.stringToTerraform(struct.operation),
        qualifiers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.qualifiers),
    };
}
export function rulesetRulesActionParametersNoCacheToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        cloudflare_only: {
            value: cdktf.booleanToHclTerraform(struct.cloudflareOnly),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        operation: {
            value: cdktf.stringToHclTerraform(struct.operation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        qualifiers: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.qualifiers),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RulesetRulesActionParametersNoCacheOutputReference extends cdktf.ComplexObject {
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
        if (this._cloudflareOnly !== undefined) {
            hasAnyValues = true;
            internalValueResult.cloudflareOnly = this._cloudflareOnly;
        }
        if (this._operation !== undefined) {
            hasAnyValues = true;
            internalValueResult.operation = this._operation;
        }
        if (this._qualifiers !== undefined) {
            hasAnyValues = true;
            internalValueResult.qualifiers = this._qualifiers;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cloudflareOnly = undefined;
            this._operation = undefined;
            this._qualifiers = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cloudflareOnly = value.cloudflareOnly;
            this._operation = value.operation;
            this._qualifiers = value.qualifiers;
        }
    }
    // cloudflare_only - computed: true, optional: true, required: false
    _cloudflareOnly;
    get cloudflareOnly() {
        return this.getBooleanAttribute('cloudflare_only');
    }
    set cloudflareOnly(value) {
        this._cloudflareOnly = value;
    }
    resetCloudflareOnly() {
        this._cloudflareOnly = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cloudflareOnlyInput() {
        return this._cloudflareOnly;
    }
    // operation - computed: true, optional: false, required: true
    _operation;
    get operation() {
        return this.getStringAttribute('operation');
    }
    set operation(value) {
        this._operation = value;
    }
    // Temporarily expose input value. Use with caution.
    get operationInput() {
        return this._operation;
    }
    // qualifiers - computed: true, optional: true, required: false
    _qualifiers;
    get qualifiers() {
        return this.getListAttribute('qualifiers');
    }
    set qualifiers(value) {
        this._qualifiers = value;
    }
    resetQualifiers() {
        this._qualifiers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get qualifiersInput() {
        return this._qualifiers;
    }
}
export function rulesetRulesActionParametersNoStoreToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cloudflare_only: cdktf.booleanToTerraform(struct.cloudflareOnly),
        operation: cdktf.stringToTerraform(struct.operation),
    };
}
export function rulesetRulesActionParametersNoStoreToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        cloudflare_only: {
            value: cdktf.booleanToHclTerraform(struct.cloudflareOnly),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        operation: {
            value: cdktf.stringToHclTerraform(struct.operation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RulesetRulesActionParametersNoStoreOutputReference extends cdktf.ComplexObject {
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
        if (this._cloudflareOnly !== undefined) {
            hasAnyValues = true;
            internalValueResult.cloudflareOnly = this._cloudflareOnly;
        }
        if (this._operation !== undefined) {
            hasAnyValues = true;
            internalValueResult.operation = this._operation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cloudflareOnly = undefined;
            this._operation = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cloudflareOnly = value.cloudflareOnly;
            this._operation = value.operation;
        }
    }
    // cloudflare_only - computed: true, optional: true, required: false
    _cloudflareOnly;
    get cloudflareOnly() {
        return this.getBooleanAttribute('cloudflare_only');
    }
    set cloudflareOnly(value) {
        this._cloudflareOnly = value;
    }
    resetCloudflareOnly() {
        this._cloudflareOnly = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cloudflareOnlyInput() {
        return this._cloudflareOnly;
    }
    // operation - computed: true, optional: false, required: true
    _operation;
    get operation() {
        return this.getStringAttribute('operation');
    }
    set operation(value) {
        this._operation = value;
    }
    // Temporarily expose input value. Use with caution.
    get operationInput() {
        return this._operation;
    }
}
export function rulesetRulesActionParametersNoTransformToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cloudflare_only: cdktf.booleanToTerraform(struct.cloudflareOnly),
        operation: cdktf.stringToTerraform(struct.operation),
    };
}
export function rulesetRulesActionParametersNoTransformToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        cloudflare_only: {
            value: cdktf.booleanToHclTerraform(struct.cloudflareOnly),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        operation: {
            value: cdktf.stringToHclTerraform(struct.operation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RulesetRulesActionParametersNoTransformOutputReference extends cdktf.ComplexObject {
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
        if (this._cloudflareOnly !== undefined) {
            hasAnyValues = true;
            internalValueResult.cloudflareOnly = this._cloudflareOnly;
        }
        if (this._operation !== undefined) {
            hasAnyValues = true;
            internalValueResult.operation = this._operation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cloudflareOnly = undefined;
            this._operation = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cloudflareOnly = value.cloudflareOnly;
            this._operation = value.operation;
        }
    }
    // cloudflare_only - computed: true, optional: true, required: false
    _cloudflareOnly;
    get cloudflareOnly() {
        return this.getBooleanAttribute('cloudflare_only');
    }
    set cloudflareOnly(value) {
        this._cloudflareOnly = value;
    }
    resetCloudflareOnly() {
        this._cloudflareOnly = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cloudflareOnlyInput() {
        return this._cloudflareOnly;
    }
    // operation - computed: true, optional: false, required: true
    _operation;
    get operation() {
        return this.getStringAttribute('operation');
    }
    set operation(value) {
        this._operation = value;
    }
    // Temporarily expose input value. Use with caution.
    get operationInput() {
        return this._operation;
    }
}
export function rulesetRulesActionParametersOriginToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        host: cdktf.stringToTerraform(struct.host),
        port: cdktf.numberToTerraform(struct.port),
    };
}
export function rulesetRulesActionParametersOriginToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        host: {
            value: cdktf.stringToHclTerraform(struct.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktf.numberToHclTerraform(struct.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RulesetRulesActionParametersOriginOutputReference extends cdktf.ComplexObject {
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
        if (this._host !== undefined) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._host = undefined;
            this._port = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._host = value.host;
            this._port = value.port;
        }
    }
    // host - computed: true, optional: true, required: false
    _host;
    get host() {
        return this.getStringAttribute('host');
    }
    set host(value) {
        this._host = value;
    }
    resetHost() {
        this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hostInput() {
        return this._host;
    }
    // port - computed: true, optional: true, required: false
    _port;
    get port() {
        return this.getNumberAttribute('port');
    }
    set port(value) {
        this._port = value;
    }
    resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get portInput() {
        return this._port;
    }
}
export function rulesetRulesActionParametersOverridesCategoriesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        action: cdktf.stringToTerraform(struct.action),
        category: cdktf.stringToTerraform(struct.category),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        sensitivity_level: cdktf.stringToTerraform(struct.sensitivityLevel),
    };
}
export function rulesetRulesActionParametersOverridesCategoriesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        action: {
            value: cdktf.stringToHclTerraform(struct.action),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        category: {
            value: cdktf.stringToHclTerraform(struct.category),
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
        sensitivity_level: {
            value: cdktf.stringToHclTerraform(struct.sensitivityLevel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RulesetRulesActionParametersOverridesCategoriesOutputReference extends cdktf.ComplexObject {
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
        if (this._action !== undefined) {
            hasAnyValues = true;
            internalValueResult.action = this._action;
        }
        if (this._category !== undefined) {
            hasAnyValues = true;
            internalValueResult.category = this._category;
        }
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._sensitivityLevel !== undefined) {
            hasAnyValues = true;
            internalValueResult.sensitivityLevel = this._sensitivityLevel;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._action = undefined;
            this._category = undefined;
            this._enabled = undefined;
            this._sensitivityLevel = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._action = value.action;
            this._category = value.category;
            this._enabled = value.enabled;
            this._sensitivityLevel = value.sensitivityLevel;
        }
    }
    // action - computed: true, optional: true, required: false
    _action;
    get action() {
        return this.getStringAttribute('action');
    }
    set action(value) {
        this._action = value;
    }
    resetAction() {
        this._action = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get actionInput() {
        return this._action;
    }
    // category - computed: true, optional: false, required: true
    _category;
    get category() {
        return this.getStringAttribute('category');
    }
    set category(value) {
        this._category = value;
    }
    // Temporarily expose input value. Use with caution.
    get categoryInput() {
        return this._category;
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
    // sensitivity_level - computed: true, optional: true, required: false
    _sensitivityLevel;
    get sensitivityLevel() {
        return this.getStringAttribute('sensitivity_level');
    }
    set sensitivityLevel(value) {
        this._sensitivityLevel = value;
    }
    resetSensitivityLevel() {
        this._sensitivityLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sensitivityLevelInput() {
        return this._sensitivityLevel;
    }
}
export class RulesetRulesActionParametersOverridesCategoriesList extends cdktf.ComplexList {
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
        return new RulesetRulesActionParametersOverridesCategoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function rulesetRulesActionParametersOverridesRulesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        action: cdktf.stringToTerraform(struct.action),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        id: cdktf.stringToTerraform(struct.id),
        score_threshold: cdktf.numberToTerraform(struct.scoreThreshold),
        sensitivity_level: cdktf.stringToTerraform(struct.sensitivityLevel),
    };
}
export function rulesetRulesActionParametersOverridesRulesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        action: {
            value: cdktf.stringToHclTerraform(struct.action),
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
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        score_threshold: {
            value: cdktf.numberToHclTerraform(struct.scoreThreshold),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        sensitivity_level: {
            value: cdktf.stringToHclTerraform(struct.sensitivityLevel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RulesetRulesActionParametersOverridesRulesOutputReference extends cdktf.ComplexObject {
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
        if (this._action !== undefined) {
            hasAnyValues = true;
            internalValueResult.action = this._action;
        }
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._scoreThreshold !== undefined) {
            hasAnyValues = true;
            internalValueResult.scoreThreshold = this._scoreThreshold;
        }
        if (this._sensitivityLevel !== undefined) {
            hasAnyValues = true;
            internalValueResult.sensitivityLevel = this._sensitivityLevel;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._action = undefined;
            this._enabled = undefined;
            this._id = undefined;
            this._scoreThreshold = undefined;
            this._sensitivityLevel = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._action = value.action;
            this._enabled = value.enabled;
            this._id = value.id;
            this._scoreThreshold = value.scoreThreshold;
            this._sensitivityLevel = value.sensitivityLevel;
        }
    }
    // action - computed: true, optional: true, required: false
    _action;
    get action() {
        return this.getStringAttribute('action');
    }
    set action(value) {
        this._action = value;
    }
    resetAction() {
        this._action = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get actionInput() {
        return this._action;
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
    // id - computed: true, optional: false, required: true
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
    // score_threshold - computed: true, optional: true, required: false
    _scoreThreshold;
    get scoreThreshold() {
        return this.getNumberAttribute('score_threshold');
    }
    set scoreThreshold(value) {
        this._scoreThreshold = value;
    }
    resetScoreThreshold() {
        this._scoreThreshold = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get scoreThresholdInput() {
        return this._scoreThreshold;
    }
    // sensitivity_level - computed: true, optional: true, required: false
    _sensitivityLevel;
    get sensitivityLevel() {
        return this.getStringAttribute('sensitivity_level');
    }
    set sensitivityLevel(value) {
        this._sensitivityLevel = value;
    }
    resetSensitivityLevel() {
        this._sensitivityLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sensitivityLevelInput() {
        return this._sensitivityLevel;
    }
}
export class RulesetRulesActionParametersOverridesRulesList extends cdktf.ComplexList {
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
        return new RulesetRulesActionParametersOverridesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function rulesetRulesActionParametersOverridesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        action: cdktf.stringToTerraform(struct.action),
        categories: cdktf.listMapper(rulesetRulesActionParametersOverridesCategoriesToTerraform, false)(struct.categories),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        rules: cdktf.listMapper(rulesetRulesActionParametersOverridesRulesToTerraform, false)(struct.rules),
        sensitivity_level: cdktf.stringToTerraform(struct.sensitivityLevel),
    };
}
export function rulesetRulesActionParametersOverridesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        action: {
            value: cdktf.stringToHclTerraform(struct.action),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        categories: {
            value: cdktf.listMapperHcl(rulesetRulesActionParametersOverridesCategoriesToHclTerraform, false)(struct.categories),
            isBlock: true,
            type: "list",
            storageClassType: "RulesetRulesActionParametersOverridesCategoriesList",
        },
        enabled: {
            value: cdktf.booleanToHclTerraform(struct.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        rules: {
            value: cdktf.listMapperHcl(rulesetRulesActionParametersOverridesRulesToHclTerraform, false)(struct.rules),
            isBlock: true,
            type: "list",
            storageClassType: "RulesetRulesActionParametersOverridesRulesList",
        },
        sensitivity_level: {
            value: cdktf.stringToHclTerraform(struct.sensitivityLevel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RulesetRulesActionParametersOverridesOutputReference extends cdktf.ComplexObject {
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
        if (this._action !== undefined) {
            hasAnyValues = true;
            internalValueResult.action = this._action;
        }
        if (this._categories?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.categories = this._categories?.internalValue;
        }
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._rules?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.rules = this._rules?.internalValue;
        }
        if (this._sensitivityLevel !== undefined) {
            hasAnyValues = true;
            internalValueResult.sensitivityLevel = this._sensitivityLevel;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._action = undefined;
            this._categories.internalValue = undefined;
            this._enabled = undefined;
            this._rules.internalValue = undefined;
            this._sensitivityLevel = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._action = value.action;
            this._categories.internalValue = value.categories;
            this._enabled = value.enabled;
            this._rules.internalValue = value.rules;
            this._sensitivityLevel = value.sensitivityLevel;
        }
    }
    // action - computed: true, optional: true, required: false
    _action;
    get action() {
        return this.getStringAttribute('action');
    }
    set action(value) {
        this._action = value;
    }
    resetAction() {
        this._action = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get actionInput() {
        return this._action;
    }
    // categories - computed: true, optional: true, required: false
    _categories = new RulesetRulesActionParametersOverridesCategoriesList(this, "categories", false);
    get categories() {
        return this._categories;
    }
    putCategories(value) {
        this._categories.internalValue = value;
    }
    resetCategories() {
        this._categories.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get categoriesInput() {
        return this._categories.internalValue;
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
    // rules - computed: true, optional: true, required: false
    _rules = new RulesetRulesActionParametersOverridesRulesList(this, "rules", false);
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
    // sensitivity_level - computed: true, optional: true, required: false
    _sensitivityLevel;
    get sensitivityLevel() {
        return this.getStringAttribute('sensitivity_level');
    }
    set sensitivityLevel(value) {
        this._sensitivityLevel = value;
    }
    resetSensitivityLevel() {
        this._sensitivityLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sensitivityLevelInput() {
        return this._sensitivityLevel;
    }
}
export function rulesetRulesActionParametersPrivateToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cloudflare_only: cdktf.booleanToTerraform(struct.cloudflareOnly),
        operation: cdktf.stringToTerraform(struct.operation),
        qualifiers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.qualifiers),
    };
}
export function rulesetRulesActionParametersPrivateToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        cloudflare_only: {
            value: cdktf.booleanToHclTerraform(struct.cloudflareOnly),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        operation: {
            value: cdktf.stringToHclTerraform(struct.operation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        qualifiers: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.qualifiers),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RulesetRulesActionParametersPrivateOutputReference extends cdktf.ComplexObject {
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
        if (this._cloudflareOnly !== undefined) {
            hasAnyValues = true;
            internalValueResult.cloudflareOnly = this._cloudflareOnly;
        }
        if (this._operation !== undefined) {
            hasAnyValues = true;
            internalValueResult.operation = this._operation;
        }
        if (this._qualifiers !== undefined) {
            hasAnyValues = true;
            internalValueResult.qualifiers = this._qualifiers;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cloudflareOnly = undefined;
            this._operation = undefined;
            this._qualifiers = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cloudflareOnly = value.cloudflareOnly;
            this._operation = value.operation;
            this._qualifiers = value.qualifiers;
        }
    }
    // cloudflare_only - computed: true, optional: true, required: false
    _cloudflareOnly;
    get cloudflareOnly() {
        return this.getBooleanAttribute('cloudflare_only');
    }
    set cloudflareOnly(value) {
        this._cloudflareOnly = value;
    }
    resetCloudflareOnly() {
        this._cloudflareOnly = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cloudflareOnlyInput() {
        return this._cloudflareOnly;
    }
    // operation - computed: true, optional: false, required: true
    _operation;
    get operation() {
        return this.getStringAttribute('operation');
    }
    set operation(value) {
        this._operation = value;
    }
    // Temporarily expose input value. Use with caution.
    get operationInput() {
        return this._operation;
    }
    // qualifiers - computed: true, optional: true, required: false
    _qualifiers;
    get qualifiers() {
        return this.getListAttribute('qualifiers');
    }
    set qualifiers(value) {
        this._qualifiers = value;
    }
    resetQualifiers() {
        this._qualifiers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get qualifiersInput() {
        return this._qualifiers;
    }
}
export function rulesetRulesActionParametersProxyRevalidateToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cloudflare_only: cdktf.booleanToTerraform(struct.cloudflareOnly),
        operation: cdktf.stringToTerraform(struct.operation),
    };
}
export function rulesetRulesActionParametersProxyRevalidateToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        cloudflare_only: {
            value: cdktf.booleanToHclTerraform(struct.cloudflareOnly),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        operation: {
            value: cdktf.stringToHclTerraform(struct.operation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RulesetRulesActionParametersProxyRevalidateOutputReference extends cdktf.ComplexObject {
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
        if (this._cloudflareOnly !== undefined) {
            hasAnyValues = true;
            internalValueResult.cloudflareOnly = this._cloudflareOnly;
        }
        if (this._operation !== undefined) {
            hasAnyValues = true;
            internalValueResult.operation = this._operation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cloudflareOnly = undefined;
            this._operation = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cloudflareOnly = value.cloudflareOnly;
            this._operation = value.operation;
        }
    }
    // cloudflare_only - computed: true, optional: true, required: false
    _cloudflareOnly;
    get cloudflareOnly() {
        return this.getBooleanAttribute('cloudflare_only');
    }
    set cloudflareOnly(value) {
        this._cloudflareOnly = value;
    }
    resetCloudflareOnly() {
        this._cloudflareOnly = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cloudflareOnlyInput() {
        return this._cloudflareOnly;
    }
    // operation - computed: true, optional: false, required: true
    _operation;
    get operation() {
        return this.getStringAttribute('operation');
    }
    set operation(value) {
        this._operation = value;
    }
    // Temporarily expose input value. Use with caution.
    get operationInput() {
        return this._operation;
    }
}
export function rulesetRulesActionParametersPublicToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cloudflare_only: cdktf.booleanToTerraform(struct.cloudflareOnly),
        operation: cdktf.stringToTerraform(struct.operation),
    };
}
export function rulesetRulesActionParametersPublicToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        cloudflare_only: {
            value: cdktf.booleanToHclTerraform(struct.cloudflareOnly),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        operation: {
            value: cdktf.stringToHclTerraform(struct.operation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RulesetRulesActionParametersPublicOutputReference extends cdktf.ComplexObject {
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
        if (this._cloudflareOnly !== undefined) {
            hasAnyValues = true;
            internalValueResult.cloudflareOnly = this._cloudflareOnly;
        }
        if (this._operation !== undefined) {
            hasAnyValues = true;
            internalValueResult.operation = this._operation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cloudflareOnly = undefined;
            this._operation = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cloudflareOnly = value.cloudflareOnly;
            this._operation = value.operation;
        }
    }
    // cloudflare_only - computed: true, optional: true, required: false
    _cloudflareOnly;
    get cloudflareOnly() {
        return this.getBooleanAttribute('cloudflare_only');
    }
    set cloudflareOnly(value) {
        this._cloudflareOnly = value;
    }
    resetCloudflareOnly() {
        this._cloudflareOnly = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cloudflareOnlyInput() {
        return this._cloudflareOnly;
    }
    // operation - computed: true, optional: false, required: true
    _operation;
    get operation() {
        return this.getStringAttribute('operation');
    }
    set operation(value) {
        this._operation = value;
    }
    // Temporarily expose input value. Use with caution.
    get operationInput() {
        return this._operation;
    }
}
export function rulesetRulesActionParametersRawResponseFieldsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        preserve_duplicates: cdktf.booleanToTerraform(struct.preserveDuplicates),
    };
}
export function rulesetRulesActionParametersRawResponseFieldsToHclTerraform(struct) {
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
        preserve_duplicates: {
            value: cdktf.booleanToHclTerraform(struct.preserveDuplicates),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RulesetRulesActionParametersRawResponseFieldsOutputReference extends cdktf.ComplexObject {
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
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._preserveDuplicates !== undefined) {
            hasAnyValues = true;
            internalValueResult.preserveDuplicates = this._preserveDuplicates;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._preserveDuplicates = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._preserveDuplicates = value.preserveDuplicates;
        }
    }
    // name - computed: true, optional: false, required: true
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
    // preserve_duplicates - computed: true, optional: true, required: false
    _preserveDuplicates;
    get preserveDuplicates() {
        return this.getBooleanAttribute('preserve_duplicates');
    }
    set preserveDuplicates(value) {
        this._preserveDuplicates = value;
    }
    resetPreserveDuplicates() {
        this._preserveDuplicates = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get preserveDuplicatesInput() {
        return this._preserveDuplicates;
    }
}
export class RulesetRulesActionParametersRawResponseFieldsList extends cdktf.ComplexList {
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
        return new RulesetRulesActionParametersRawResponseFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function rulesetRulesActionParametersRequestFieldsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export function rulesetRulesActionParametersRequestFieldsToHclTerraform(struct) {
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
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RulesetRulesActionParametersRequestFieldsOutputReference extends cdktf.ComplexObject {
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
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
        }
    }
    // name - computed: true, optional: false, required: true
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
}
export class RulesetRulesActionParametersRequestFieldsList extends cdktf.ComplexList {
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
        return new RulesetRulesActionParametersRequestFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function rulesetRulesActionParametersResponseToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        content: cdktf.stringToTerraform(struct.content),
        content_type: cdktf.stringToTerraform(struct.contentType),
        status_code: cdktf.numberToTerraform(struct.statusCode),
    };
}
export function rulesetRulesActionParametersResponseToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        content: {
            value: cdktf.stringToHclTerraform(struct.content),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        content_type: {
            value: cdktf.stringToHclTerraform(struct.contentType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        status_code: {
            value: cdktf.numberToHclTerraform(struct.statusCode),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RulesetRulesActionParametersResponseOutputReference extends cdktf.ComplexObject {
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
        if (this._content !== undefined) {
            hasAnyValues = true;
            internalValueResult.content = this._content;
        }
        if (this._contentType !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentType = this._contentType;
        }
        if (this._statusCode !== undefined) {
            hasAnyValues = true;
            internalValueResult.statusCode = this._statusCode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._content = undefined;
            this._contentType = undefined;
            this._statusCode = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._content = value.content;
            this._contentType = value.contentType;
            this._statusCode = value.statusCode;
        }
    }
    // content - computed: true, optional: false, required: true
    _content;
    get content() {
        return this.getStringAttribute('content');
    }
    set content(value) {
        this._content = value;
    }
    // Temporarily expose input value. Use with caution.
    get contentInput() {
        return this._content;
    }
    // content_type - computed: true, optional: false, required: true
    _contentType;
    get contentType() {
        return this.getStringAttribute('content_type');
    }
    set contentType(value) {
        this._contentType = value;
    }
    // Temporarily expose input value. Use with caution.
    get contentTypeInput() {
        return this._contentType;
    }
    // status_code - computed: true, optional: false, required: true
    _statusCode;
    get statusCode() {
        return this.getNumberAttribute('status_code');
    }
    set statusCode(value) {
        this._statusCode = value;
    }
    // Temporarily expose input value. Use with caution.
    get statusCodeInput() {
        return this._statusCode;
    }
}
export function rulesetRulesActionParametersResponseFieldsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        preserve_duplicates: cdktf.booleanToTerraform(struct.preserveDuplicates),
    };
}
export function rulesetRulesActionParametersResponseFieldsToHclTerraform(struct) {
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
        preserve_duplicates: {
            value: cdktf.booleanToHclTerraform(struct.preserveDuplicates),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RulesetRulesActionParametersResponseFieldsOutputReference extends cdktf.ComplexObject {
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
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._preserveDuplicates !== undefined) {
            hasAnyValues = true;
            internalValueResult.preserveDuplicates = this._preserveDuplicates;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._preserveDuplicates = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._preserveDuplicates = value.preserveDuplicates;
        }
    }
    // name - computed: true, optional: false, required: true
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
    // preserve_duplicates - computed: true, optional: true, required: false
    _preserveDuplicates;
    get preserveDuplicates() {
        return this.getBooleanAttribute('preserve_duplicates');
    }
    set preserveDuplicates(value) {
        this._preserveDuplicates = value;
    }
    resetPreserveDuplicates() {
        this._preserveDuplicates = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get preserveDuplicatesInput() {
        return this._preserveDuplicates;
    }
}
export class RulesetRulesActionParametersResponseFieldsList extends cdktf.ComplexList {
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
        return new RulesetRulesActionParametersResponseFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function rulesetRulesActionParametersSMaxageToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cloudflare_only: cdktf.booleanToTerraform(struct.cloudflareOnly),
        operation: cdktf.stringToTerraform(struct.operation),
        value: cdktf.numberToTerraform(struct.value),
    };
}
export function rulesetRulesActionParametersSMaxageToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        cloudflare_only: {
            value: cdktf.booleanToHclTerraform(struct.cloudflareOnly),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        operation: {
            value: cdktf.stringToHclTerraform(struct.operation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktf.numberToHclTerraform(struct.value),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RulesetRulesActionParametersSMaxageOutputReference extends cdktf.ComplexObject {
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
        if (this._cloudflareOnly !== undefined) {
            hasAnyValues = true;
            internalValueResult.cloudflareOnly = this._cloudflareOnly;
        }
        if (this._operation !== undefined) {
            hasAnyValues = true;
            internalValueResult.operation = this._operation;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cloudflareOnly = undefined;
            this._operation = undefined;
            this._value = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cloudflareOnly = value.cloudflareOnly;
            this._operation = value.operation;
            this._value = value.value;
        }
    }
    // cloudflare_only - computed: true, optional: true, required: false
    _cloudflareOnly;
    get cloudflareOnly() {
        return this.getBooleanAttribute('cloudflare_only');
    }
    set cloudflareOnly(value) {
        this._cloudflareOnly = value;
    }
    resetCloudflareOnly() {
        this._cloudflareOnly = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cloudflareOnlyInput() {
        return this._cloudflareOnly;
    }
    // operation - computed: true, optional: false, required: true
    _operation;
    get operation() {
        return this.getStringAttribute('operation');
    }
    set operation(value) {
        this._operation = value;
    }
    // Temporarily expose input value. Use with caution.
    get operationInput() {
        return this._operation;
    }
    // value - computed: true, optional: true, required: false
    _value;
    get value() {
        return this.getNumberAttribute('value');
    }
    set value(value) {
        this._value = value;
    }
    resetValue() {
        this._value = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get valueInput() {
        return this._value;
    }
}
export function rulesetRulesActionParametersServeStaleToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        disable_stale_while_updating: cdktf.booleanToTerraform(struct.disableStaleWhileUpdating),
    };
}
export function rulesetRulesActionParametersServeStaleToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        disable_stale_while_updating: {
            value: cdktf.booleanToHclTerraform(struct.disableStaleWhileUpdating),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RulesetRulesActionParametersServeStaleOutputReference extends cdktf.ComplexObject {
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
        if (this._disableStaleWhileUpdating !== undefined) {
            hasAnyValues = true;
            internalValueResult.disableStaleWhileUpdating = this._disableStaleWhileUpdating;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._disableStaleWhileUpdating = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._disableStaleWhileUpdating = value.disableStaleWhileUpdating;
        }
    }
    // disable_stale_while_updating - computed: true, optional: true, required: false
    _disableStaleWhileUpdating;
    get disableStaleWhileUpdating() {
        return this.getBooleanAttribute('disable_stale_while_updating');
    }
    set disableStaleWhileUpdating(value) {
        this._disableStaleWhileUpdating = value;
    }
    resetDisableStaleWhileUpdating() {
        this._disableStaleWhileUpdating = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get disableStaleWhileUpdatingInput() {
        return this._disableStaleWhileUpdating;
    }
}
export function rulesetRulesActionParametersSniToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function rulesetRulesActionParametersSniToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        value: {
            value: cdktf.stringToHclTerraform(struct.value),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RulesetRulesActionParametersSniOutputReference extends cdktf.ComplexObject {
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
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._value = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._value = value.value;
        }
    }
    // value - computed: true, optional: false, required: true
    _value;
    get value() {
        return this.getStringAttribute('value');
    }
    set value(value) {
        this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    get valueInput() {
        return this._value;
    }
}
export function rulesetRulesActionParametersStaleIfErrorToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cloudflare_only: cdktf.booleanToTerraform(struct.cloudflareOnly),
        operation: cdktf.stringToTerraform(struct.operation),
        value: cdktf.numberToTerraform(struct.value),
    };
}
export function rulesetRulesActionParametersStaleIfErrorToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        cloudflare_only: {
            value: cdktf.booleanToHclTerraform(struct.cloudflareOnly),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        operation: {
            value: cdktf.stringToHclTerraform(struct.operation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktf.numberToHclTerraform(struct.value),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RulesetRulesActionParametersStaleIfErrorOutputReference extends cdktf.ComplexObject {
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
        if (this._cloudflareOnly !== undefined) {
            hasAnyValues = true;
            internalValueResult.cloudflareOnly = this._cloudflareOnly;
        }
        if (this._operation !== undefined) {
            hasAnyValues = true;
            internalValueResult.operation = this._operation;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cloudflareOnly = undefined;
            this._operation = undefined;
            this._value = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cloudflareOnly = value.cloudflareOnly;
            this._operation = value.operation;
            this._value = value.value;
        }
    }
    // cloudflare_only - computed: true, optional: true, required: false
    _cloudflareOnly;
    get cloudflareOnly() {
        return this.getBooleanAttribute('cloudflare_only');
    }
    set cloudflareOnly(value) {
        this._cloudflareOnly = value;
    }
    resetCloudflareOnly() {
        this._cloudflareOnly = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cloudflareOnlyInput() {
        return this._cloudflareOnly;
    }
    // operation - computed: true, optional: false, required: true
    _operation;
    get operation() {
        return this.getStringAttribute('operation');
    }
    set operation(value) {
        this._operation = value;
    }
    // Temporarily expose input value. Use with caution.
    get operationInput() {
        return this._operation;
    }
    // value - computed: true, optional: true, required: false
    _value;
    get value() {
        return this.getNumberAttribute('value');
    }
    set value(value) {
        this._value = value;
    }
    resetValue() {
        this._value = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get valueInput() {
        return this._value;
    }
}
export function rulesetRulesActionParametersStaleWhileRevalidateToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cloudflare_only: cdktf.booleanToTerraform(struct.cloudflareOnly),
        operation: cdktf.stringToTerraform(struct.operation),
        value: cdktf.numberToTerraform(struct.value),
    };
}
export function rulesetRulesActionParametersStaleWhileRevalidateToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        cloudflare_only: {
            value: cdktf.booleanToHclTerraform(struct.cloudflareOnly),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        operation: {
            value: cdktf.stringToHclTerraform(struct.operation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktf.numberToHclTerraform(struct.value),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RulesetRulesActionParametersStaleWhileRevalidateOutputReference extends cdktf.ComplexObject {
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
        if (this._cloudflareOnly !== undefined) {
            hasAnyValues = true;
            internalValueResult.cloudflareOnly = this._cloudflareOnly;
        }
        if (this._operation !== undefined) {
            hasAnyValues = true;
            internalValueResult.operation = this._operation;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cloudflareOnly = undefined;
            this._operation = undefined;
            this._value = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cloudflareOnly = value.cloudflareOnly;
            this._operation = value.operation;
            this._value = value.value;
        }
    }
    // cloudflare_only - computed: true, optional: true, required: false
    _cloudflareOnly;
    get cloudflareOnly() {
        return this.getBooleanAttribute('cloudflare_only');
    }
    set cloudflareOnly(value) {
        this._cloudflareOnly = value;
    }
    resetCloudflareOnly() {
        this._cloudflareOnly = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cloudflareOnlyInput() {
        return this._cloudflareOnly;
    }
    // operation - computed: true, optional: false, required: true
    _operation;
    get operation() {
        return this.getStringAttribute('operation');
    }
    set operation(value) {
        this._operation = value;
    }
    // Temporarily expose input value. Use with caution.
    get operationInput() {
        return this._operation;
    }
    // value - computed: true, optional: true, required: false
    _value;
    get value() {
        return this.getNumberAttribute('value');
    }
    set value(value) {
        this._value = value;
    }
    resetValue() {
        this._value = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get valueInput() {
        return this._value;
    }
}
export function rulesetRulesActionParametersTransformedRequestFieldsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export function rulesetRulesActionParametersTransformedRequestFieldsToHclTerraform(struct) {
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
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RulesetRulesActionParametersTransformedRequestFieldsOutputReference extends cdktf.ComplexObject {
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
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
        }
    }
    // name - computed: true, optional: false, required: true
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
}
export class RulesetRulesActionParametersTransformedRequestFieldsList extends cdktf.ComplexList {
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
        return new RulesetRulesActionParametersTransformedRequestFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function rulesetRulesActionParametersUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        expression: cdktf.stringToTerraform(struct.expression),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function rulesetRulesActionParametersUriPathToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        expression: {
            value: cdktf.stringToHclTerraform(struct.expression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktf.stringToHclTerraform(struct.value),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RulesetRulesActionParametersUriPathOutputReference extends cdktf.ComplexObject {
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
        if (this._expression !== undefined) {
            hasAnyValues = true;
            internalValueResult.expression = this._expression;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._expression = undefined;
            this._value = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._expression = value.expression;
            this._value = value.value;
        }
    }
    // expression - computed: true, optional: true, required: false
    _expression;
    get expression() {
        return this.getStringAttribute('expression');
    }
    set expression(value) {
        this._expression = value;
    }
    resetExpression() {
        this._expression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get expressionInput() {
        return this._expression;
    }
    // value - computed: true, optional: true, required: false
    _value;
    get value() {
        return this.getStringAttribute('value');
    }
    set value(value) {
        this._value = value;
    }
    resetValue() {
        this._value = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get valueInput() {
        return this._value;
    }
}
export function rulesetRulesActionParametersUriQueryToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        expression: cdktf.stringToTerraform(struct.expression),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function rulesetRulesActionParametersUriQueryToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        expression: {
            value: cdktf.stringToHclTerraform(struct.expression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktf.stringToHclTerraform(struct.value),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RulesetRulesActionParametersUriQueryOutputReference extends cdktf.ComplexObject {
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
        if (this._expression !== undefined) {
            hasAnyValues = true;
            internalValueResult.expression = this._expression;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._expression = undefined;
            this._value = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._expression = value.expression;
            this._value = value.value;
        }
    }
    // expression - computed: true, optional: true, required: false
    _expression;
    get expression() {
        return this.getStringAttribute('expression');
    }
    set expression(value) {
        this._expression = value;
    }
    resetExpression() {
        this._expression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get expressionInput() {
        return this._expression;
    }
    // value - computed: true, optional: true, required: false
    _value;
    get value() {
        return this.getStringAttribute('value');
    }
    set value(value) {
        this._value = value;
    }
    resetValue() {
        this._value = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get valueInput() {
        return this._value;
    }
}
export function rulesetRulesActionParametersUriToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        path: rulesetRulesActionParametersUriPathToTerraform(struct.path),
        query: rulesetRulesActionParametersUriQueryToTerraform(struct.query),
    };
}
export function rulesetRulesActionParametersUriToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        path: {
            value: rulesetRulesActionParametersUriPathToHclTerraform(struct.path),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersUriPath",
        },
        query: {
            value: rulesetRulesActionParametersUriQueryToHclTerraform(struct.query),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersUriQuery",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RulesetRulesActionParametersUriOutputReference extends cdktf.ComplexObject {
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
        if (this._path?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.path = this._path?.internalValue;
        }
        if (this._query?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.query = this._query?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._path.internalValue = undefined;
            this._query.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._path.internalValue = value.path;
            this._query.internalValue = value.query;
        }
    }
    // path - computed: true, optional: true, required: false
    _path = new RulesetRulesActionParametersUriPathOutputReference(this, "path");
    get path() {
        return this._path;
    }
    putPath(value) {
        this._path.internalValue = value;
    }
    resetPath() {
        this._path.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get pathInput() {
        return this._path.internalValue;
    }
    // query - computed: true, optional: true, required: false
    _query = new RulesetRulesActionParametersUriQueryOutputReference(this, "query");
    get query() {
        return this._query;
    }
    putQuery(value) {
        this._query.internalValue = value;
    }
    resetQuery() {
        this._query.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryInput() {
        return this._query.internalValue;
    }
}
export function rulesetRulesActionParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        additional_cacheable_ports: cdktf.listMapper(cdktf.numberToTerraform, false)(struct.additionalCacheablePorts),
        algorithms: cdktf.listMapper(rulesetRulesActionParametersAlgorithmsToTerraform, false)(struct.algorithms),
        asset_name: cdktf.stringToTerraform(struct.assetName),
        automatic_https_rewrites: cdktf.booleanToTerraform(struct.automaticHttpsRewrites),
        autominify: rulesetRulesActionParametersAutominifyToTerraform(struct.autominify),
        bic: cdktf.booleanToTerraform(struct.bic),
        browser_ttl: rulesetRulesActionParametersBrowserTtlToTerraform(struct.browserTtl),
        cache: cdktf.booleanToTerraform(struct.cache),
        cache_key: rulesetRulesActionParametersCacheKeyToTerraform(struct.cacheKey),
        cache_reserve: rulesetRulesActionParametersCacheReserveToTerraform(struct.cacheReserve),
        content: cdktf.stringToTerraform(struct.content),
        content_converter: cdktf.booleanToTerraform(struct.contentConverter),
        content_type: cdktf.stringToTerraform(struct.contentType),
        cookie_fields: cdktf.listMapper(rulesetRulesActionParametersCookieFieldsToTerraform, false)(struct.cookieFields),
        disable_apps: cdktf.booleanToTerraform(struct.disableApps),
        disable_rum: cdktf.booleanToTerraform(struct.disableRum),
        disable_zaraz: cdktf.booleanToTerraform(struct.disableZaraz),
        edge_ttl: rulesetRulesActionParametersEdgeTtlToTerraform(struct.edgeTtl),
        email_obfuscation: cdktf.booleanToTerraform(struct.emailObfuscation),
        expression: cdktf.stringToTerraform(struct.expression),
        fonts: cdktf.booleanToTerraform(struct.fonts),
        from_list: rulesetRulesActionParametersFromListStructToTerraform(struct.fromList),
        from_value: rulesetRulesActionParametersFromValueToTerraform(struct.fromValue),
        headers: cdktf.hashMapper(rulesetRulesActionParametersHeadersToTerraform)(struct.headers),
        host_header: cdktf.stringToTerraform(struct.hostHeader),
        hotlink_protection: cdktf.booleanToTerraform(struct.hotlinkProtection),
        id: cdktf.stringToTerraform(struct.id),
        immutable: rulesetRulesActionParametersImmutableToTerraform(struct.immutable),
        increment: cdktf.numberToTerraform(struct.increment),
        matched_data: rulesetRulesActionParametersMatchedDataToTerraform(struct.matchedData),
        max_age: rulesetRulesActionParametersMaxAgeToTerraform(struct.maxAge),
        mirage: cdktf.booleanToTerraform(struct.mirage),
        must_revalidate: rulesetRulesActionParametersMustRevalidateToTerraform(struct.mustRevalidate),
        must_understand: rulesetRulesActionParametersMustUnderstandToTerraform(struct.mustUnderstand),
        no_cache: rulesetRulesActionParametersNoCacheToTerraform(struct.noCache),
        no_store: rulesetRulesActionParametersNoStoreToTerraform(struct.noStore),
        no_transform: rulesetRulesActionParametersNoTransformToTerraform(struct.noTransform),
        operation: cdktf.stringToTerraform(struct.operation),
        opportunistic_encryption: cdktf.booleanToTerraform(struct.opportunisticEncryption),
        origin: rulesetRulesActionParametersOriginToTerraform(struct.origin),
        origin_cache_control: cdktf.booleanToTerraform(struct.originCacheControl),
        origin_error_page_passthru: cdktf.booleanToTerraform(struct.originErrorPagePassthru),
        overrides: rulesetRulesActionParametersOverridesToTerraform(struct.overrides),
        phases: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.phases),
        polish: cdktf.stringToTerraform(struct.polish),
        private: rulesetRulesActionParametersPrivateToTerraform(struct.private),
        products: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.products),
        proxy_revalidate: rulesetRulesActionParametersProxyRevalidateToTerraform(struct.proxyRevalidate),
        public: rulesetRulesActionParametersPublicToTerraform(struct.public),
        raw_response_fields: cdktf.listMapper(rulesetRulesActionParametersRawResponseFieldsToTerraform, false)(struct.rawResponseFields),
        read_timeout: cdktf.numberToTerraform(struct.readTimeout),
        redirects_for_ai_training: cdktf.booleanToTerraform(struct.redirectsForAiTraining),
        request_body_buffering: cdktf.stringToTerraform(struct.requestBodyBuffering),
        request_fields: cdktf.listMapper(rulesetRulesActionParametersRequestFieldsToTerraform, false)(struct.requestFields),
        respect_strong_etags: cdktf.booleanToTerraform(struct.respectStrongEtags),
        response: rulesetRulesActionParametersResponseToTerraform(struct.response),
        response_body_buffering: cdktf.stringToTerraform(struct.responseBodyBuffering),
        response_fields: cdktf.listMapper(rulesetRulesActionParametersResponseFieldsToTerraform, false)(struct.responseFields),
        rocket_loader: cdktf.booleanToTerraform(struct.rocketLoader),
        rules: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct.rules),
        ruleset: cdktf.stringToTerraform(struct.ruleset),
        rulesets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.rulesets),
        s_maxage: rulesetRulesActionParametersSMaxageToTerraform(struct.sMaxage),
        security_level: cdktf.stringToTerraform(struct.securityLevel),
        serve_stale: rulesetRulesActionParametersServeStaleToTerraform(struct.serveStale),
        server_side_excludes: cdktf.booleanToTerraform(struct.serverSideExcludes),
        sni: rulesetRulesActionParametersSniToTerraform(struct.sni),
        ssl: cdktf.stringToTerraform(struct.ssl),
        stale_if_error: rulesetRulesActionParametersStaleIfErrorToTerraform(struct.staleIfError),
        stale_while_revalidate: rulesetRulesActionParametersStaleWhileRevalidateToTerraform(struct.staleWhileRevalidate),
        status_code: cdktf.numberToTerraform(struct.statusCode),
        strip_etags: cdktf.booleanToTerraform(struct.stripEtags),
        strip_last_modified: cdktf.booleanToTerraform(struct.stripLastModified),
        strip_set_cookie: cdktf.booleanToTerraform(struct.stripSetCookie),
        sxg: cdktf.booleanToTerraform(struct.sxg),
        transformed_request_fields: cdktf.listMapper(rulesetRulesActionParametersTransformedRequestFieldsToTerraform, false)(struct.transformedRequestFields),
        uri: rulesetRulesActionParametersUriToTerraform(struct.uri),
        values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.values),
    };
}
export function rulesetRulesActionParametersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        additional_cacheable_ports: {
            value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct.additionalCacheablePorts),
            isBlock: false,
            type: "list",
            storageClassType: "numberList",
        },
        algorithms: {
            value: cdktf.listMapperHcl(rulesetRulesActionParametersAlgorithmsToHclTerraform, false)(struct.algorithms),
            isBlock: true,
            type: "list",
            storageClassType: "RulesetRulesActionParametersAlgorithmsList",
        },
        asset_name: {
            value: cdktf.stringToHclTerraform(struct.assetName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        automatic_https_rewrites: {
            value: cdktf.booleanToHclTerraform(struct.automaticHttpsRewrites),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        autominify: {
            value: rulesetRulesActionParametersAutominifyToHclTerraform(struct.autominify),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersAutominify",
        },
        bic: {
            value: cdktf.booleanToHclTerraform(struct.bic),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        browser_ttl: {
            value: rulesetRulesActionParametersBrowserTtlToHclTerraform(struct.browserTtl),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersBrowserTtl",
        },
        cache: {
            value: cdktf.booleanToHclTerraform(struct.cache),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        cache_key: {
            value: rulesetRulesActionParametersCacheKeyToHclTerraform(struct.cacheKey),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersCacheKey",
        },
        cache_reserve: {
            value: rulesetRulesActionParametersCacheReserveToHclTerraform(struct.cacheReserve),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersCacheReserve",
        },
        content: {
            value: cdktf.stringToHclTerraform(struct.content),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        content_converter: {
            value: cdktf.booleanToHclTerraform(struct.contentConverter),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        content_type: {
            value: cdktf.stringToHclTerraform(struct.contentType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cookie_fields: {
            value: cdktf.listMapperHcl(rulesetRulesActionParametersCookieFieldsToHclTerraform, false)(struct.cookieFields),
            isBlock: true,
            type: "list",
            storageClassType: "RulesetRulesActionParametersCookieFieldsList",
        },
        disable_apps: {
            value: cdktf.booleanToHclTerraform(struct.disableApps),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        disable_rum: {
            value: cdktf.booleanToHclTerraform(struct.disableRum),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        disable_zaraz: {
            value: cdktf.booleanToHclTerraform(struct.disableZaraz),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        edge_ttl: {
            value: rulesetRulesActionParametersEdgeTtlToHclTerraform(struct.edgeTtl),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersEdgeTtl",
        },
        email_obfuscation: {
            value: cdktf.booleanToHclTerraform(struct.emailObfuscation),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        expression: {
            value: cdktf.stringToHclTerraform(struct.expression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        fonts: {
            value: cdktf.booleanToHclTerraform(struct.fonts),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        from_list: {
            value: rulesetRulesActionParametersFromListStructToHclTerraform(struct.fromList),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersFromListStruct",
        },
        from_value: {
            value: rulesetRulesActionParametersFromValueToHclTerraform(struct.fromValue),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersFromValue",
        },
        headers: {
            value: cdktf.hashMapperHcl(rulesetRulesActionParametersHeadersToHclTerraform)(struct.headers),
            isBlock: true,
            type: "map",
            storageClassType: "RulesetRulesActionParametersHeadersMap",
        },
        host_header: {
            value: cdktf.stringToHclTerraform(struct.hostHeader),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        hotlink_protection: {
            value: cdktf.booleanToHclTerraform(struct.hotlinkProtection),
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
        immutable: {
            value: rulesetRulesActionParametersImmutableToHclTerraform(struct.immutable),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersImmutable",
        },
        increment: {
            value: cdktf.numberToHclTerraform(struct.increment),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        matched_data: {
            value: rulesetRulesActionParametersMatchedDataToHclTerraform(struct.matchedData),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersMatchedData",
        },
        max_age: {
            value: rulesetRulesActionParametersMaxAgeToHclTerraform(struct.maxAge),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersMaxAge",
        },
        mirage: {
            value: cdktf.booleanToHclTerraform(struct.mirage),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        must_revalidate: {
            value: rulesetRulesActionParametersMustRevalidateToHclTerraform(struct.mustRevalidate),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersMustRevalidate",
        },
        must_understand: {
            value: rulesetRulesActionParametersMustUnderstandToHclTerraform(struct.mustUnderstand),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersMustUnderstand",
        },
        no_cache: {
            value: rulesetRulesActionParametersNoCacheToHclTerraform(struct.noCache),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersNoCache",
        },
        no_store: {
            value: rulesetRulesActionParametersNoStoreToHclTerraform(struct.noStore),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersNoStore",
        },
        no_transform: {
            value: rulesetRulesActionParametersNoTransformToHclTerraform(struct.noTransform),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersNoTransform",
        },
        operation: {
            value: cdktf.stringToHclTerraform(struct.operation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        opportunistic_encryption: {
            value: cdktf.booleanToHclTerraform(struct.opportunisticEncryption),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        origin: {
            value: rulesetRulesActionParametersOriginToHclTerraform(struct.origin),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersOrigin",
        },
        origin_cache_control: {
            value: cdktf.booleanToHclTerraform(struct.originCacheControl),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        origin_error_page_passthru: {
            value: cdktf.booleanToHclTerraform(struct.originErrorPagePassthru),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        overrides: {
            value: rulesetRulesActionParametersOverridesToHclTerraform(struct.overrides),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersOverrides",
        },
        phases: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.phases),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        polish: {
            value: cdktf.stringToHclTerraform(struct.polish),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        private: {
            value: rulesetRulesActionParametersPrivateToHclTerraform(struct.private),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersPrivate",
        },
        products: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.products),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        proxy_revalidate: {
            value: rulesetRulesActionParametersProxyRevalidateToHclTerraform(struct.proxyRevalidate),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersProxyRevalidate",
        },
        public: {
            value: rulesetRulesActionParametersPublicToHclTerraform(struct.public),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersPublic",
        },
        raw_response_fields: {
            value: cdktf.listMapperHcl(rulesetRulesActionParametersRawResponseFieldsToHclTerraform, false)(struct.rawResponseFields),
            isBlock: true,
            type: "list",
            storageClassType: "RulesetRulesActionParametersRawResponseFieldsList",
        },
        read_timeout: {
            value: cdktf.numberToHclTerraform(struct.readTimeout),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        redirects_for_ai_training: {
            value: cdktf.booleanToHclTerraform(struct.redirectsForAiTraining),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        request_body_buffering: {
            value: cdktf.stringToHclTerraform(struct.requestBodyBuffering),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        request_fields: {
            value: cdktf.listMapperHcl(rulesetRulesActionParametersRequestFieldsToHclTerraform, false)(struct.requestFields),
            isBlock: true,
            type: "list",
            storageClassType: "RulesetRulesActionParametersRequestFieldsList",
        },
        respect_strong_etags: {
            value: cdktf.booleanToHclTerraform(struct.respectStrongEtags),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        response: {
            value: rulesetRulesActionParametersResponseToHclTerraform(struct.response),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersResponse",
        },
        response_body_buffering: {
            value: cdktf.stringToHclTerraform(struct.responseBodyBuffering),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        response_fields: {
            value: cdktf.listMapperHcl(rulesetRulesActionParametersResponseFieldsToHclTerraform, false)(struct.responseFields),
            isBlock: true,
            type: "list",
            storageClassType: "RulesetRulesActionParametersResponseFieldsList",
        },
        rocket_loader: {
            value: cdktf.booleanToHclTerraform(struct.rocketLoader),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        rules: {
            value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct.rules),
            isBlock: false,
            type: "map",
            storageClassType: "stringListMap",
        },
        ruleset: {
            value: cdktf.stringToHclTerraform(struct.ruleset),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        rulesets: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.rulesets),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        s_maxage: {
            value: rulesetRulesActionParametersSMaxageToHclTerraform(struct.sMaxage),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersSMaxage",
        },
        security_level: {
            value: cdktf.stringToHclTerraform(struct.securityLevel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        serve_stale: {
            value: rulesetRulesActionParametersServeStaleToHclTerraform(struct.serveStale),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersServeStale",
        },
        server_side_excludes: {
            value: cdktf.booleanToHclTerraform(struct.serverSideExcludes),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        sni: {
            value: rulesetRulesActionParametersSniToHclTerraform(struct.sni),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersSni",
        },
        ssl: {
            value: cdktf.stringToHclTerraform(struct.ssl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        stale_if_error: {
            value: rulesetRulesActionParametersStaleIfErrorToHclTerraform(struct.staleIfError),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersStaleIfError",
        },
        stale_while_revalidate: {
            value: rulesetRulesActionParametersStaleWhileRevalidateToHclTerraform(struct.staleWhileRevalidate),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersStaleWhileRevalidate",
        },
        status_code: {
            value: cdktf.numberToHclTerraform(struct.statusCode),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        strip_etags: {
            value: cdktf.booleanToHclTerraform(struct.stripEtags),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        strip_last_modified: {
            value: cdktf.booleanToHclTerraform(struct.stripLastModified),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        strip_set_cookie: {
            value: cdktf.booleanToHclTerraform(struct.stripSetCookie),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        sxg: {
            value: cdktf.booleanToHclTerraform(struct.sxg),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        transformed_request_fields: {
            value: cdktf.listMapperHcl(rulesetRulesActionParametersTransformedRequestFieldsToHclTerraform, false)(struct.transformedRequestFields),
            isBlock: true,
            type: "list",
            storageClassType: "RulesetRulesActionParametersTransformedRequestFieldsList",
        },
        uri: {
            value: rulesetRulesActionParametersUriToHclTerraform(struct.uri),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersUri",
        },
        values: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.values),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RulesetRulesActionParametersOutputReference extends cdktf.ComplexObject {
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
        if (this._additionalCacheablePorts !== undefined) {
            hasAnyValues = true;
            internalValueResult.additionalCacheablePorts = this._additionalCacheablePorts;
        }
        if (this._algorithms?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.algorithms = this._algorithms?.internalValue;
        }
        if (this._assetName !== undefined) {
            hasAnyValues = true;
            internalValueResult.assetName = this._assetName;
        }
        if (this._automaticHttpsRewrites !== undefined) {
            hasAnyValues = true;
            internalValueResult.automaticHttpsRewrites = this._automaticHttpsRewrites;
        }
        if (this._autominify?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.autominify = this._autominify?.internalValue;
        }
        if (this._bic !== undefined) {
            hasAnyValues = true;
            internalValueResult.bic = this._bic;
        }
        if (this._browserTtl?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.browserTtl = this._browserTtl?.internalValue;
        }
        if (this._cache !== undefined) {
            hasAnyValues = true;
            internalValueResult.cache = this._cache;
        }
        if (this._cacheKey?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.cacheKey = this._cacheKey?.internalValue;
        }
        if (this._cacheReserve?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.cacheReserve = this._cacheReserve?.internalValue;
        }
        if (this._content !== undefined) {
            hasAnyValues = true;
            internalValueResult.content = this._content;
        }
        if (this._contentConverter !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentConverter = this._contentConverter;
        }
        if (this._contentType !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentType = this._contentType;
        }
        if (this._cookieFields?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.cookieFields = this._cookieFields?.internalValue;
        }
        if (this._disableApps !== undefined) {
            hasAnyValues = true;
            internalValueResult.disableApps = this._disableApps;
        }
        if (this._disableRum !== undefined) {
            hasAnyValues = true;
            internalValueResult.disableRum = this._disableRum;
        }
        if (this._disableZaraz !== undefined) {
            hasAnyValues = true;
            internalValueResult.disableZaraz = this._disableZaraz;
        }
        if (this._edgeTtl?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.edgeTtl = this._edgeTtl?.internalValue;
        }
        if (this._emailObfuscation !== undefined) {
            hasAnyValues = true;
            internalValueResult.emailObfuscation = this._emailObfuscation;
        }
        if (this._expression !== undefined) {
            hasAnyValues = true;
            internalValueResult.expression = this._expression;
        }
        if (this._fonts !== undefined) {
            hasAnyValues = true;
            internalValueResult.fonts = this._fonts;
        }
        if (this._fromList?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.fromList = this._fromList?.internalValue;
        }
        if (this._fromValue?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.fromValue = this._fromValue?.internalValue;
        }
        if (this._headers?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.headers = this._headers?.internalValue;
        }
        if (this._hostHeader !== undefined) {
            hasAnyValues = true;
            internalValueResult.hostHeader = this._hostHeader;
        }
        if (this._hotlinkProtection !== undefined) {
            hasAnyValues = true;
            internalValueResult.hotlinkProtection = this._hotlinkProtection;
        }
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._immutable?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.immutable = this._immutable?.internalValue;
        }
        if (this._increment !== undefined) {
            hasAnyValues = true;
            internalValueResult.increment = this._increment;
        }
        if (this._matchedData?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.matchedData = this._matchedData?.internalValue;
        }
        if (this._maxAge?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxAge = this._maxAge?.internalValue;
        }
        if (this._mirage !== undefined) {
            hasAnyValues = true;
            internalValueResult.mirage = this._mirage;
        }
        if (this._mustRevalidate?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.mustRevalidate = this._mustRevalidate?.internalValue;
        }
        if (this._mustUnderstand?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.mustUnderstand = this._mustUnderstand?.internalValue;
        }
        if (this._noCache?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.noCache = this._noCache?.internalValue;
        }
        if (this._noStore?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.noStore = this._noStore?.internalValue;
        }
        if (this._noTransform?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.noTransform = this._noTransform?.internalValue;
        }
        if (this._operation !== undefined) {
            hasAnyValues = true;
            internalValueResult.operation = this._operation;
        }
        if (this._opportunisticEncryption !== undefined) {
            hasAnyValues = true;
            internalValueResult.opportunisticEncryption = this._opportunisticEncryption;
        }
        if (this._origin?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.origin = this._origin?.internalValue;
        }
        if (this._originCacheControl !== undefined) {
            hasAnyValues = true;
            internalValueResult.originCacheControl = this._originCacheControl;
        }
        if (this._originErrorPagePassthru !== undefined) {
            hasAnyValues = true;
            internalValueResult.originErrorPagePassthru = this._originErrorPagePassthru;
        }
        if (this._overrides?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.overrides = this._overrides?.internalValue;
        }
        if (this._phases !== undefined) {
            hasAnyValues = true;
            internalValueResult.phases = this._phases;
        }
        if (this._polish !== undefined) {
            hasAnyValues = true;
            internalValueResult.polish = this._polish;
        }
        if (this._private?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.private = this._private?.internalValue;
        }
        if (this._products !== undefined) {
            hasAnyValues = true;
            internalValueResult.products = this._products;
        }
        if (this._proxyRevalidate?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.proxyRevalidate = this._proxyRevalidate?.internalValue;
        }
        if (this._public?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.public = this._public?.internalValue;
        }
        if (this._rawResponseFields?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.rawResponseFields = this._rawResponseFields?.internalValue;
        }
        if (this._readTimeout !== undefined) {
            hasAnyValues = true;
            internalValueResult.readTimeout = this._readTimeout;
        }
        if (this._redirectsForAiTraining !== undefined) {
            hasAnyValues = true;
            internalValueResult.redirectsForAiTraining = this._redirectsForAiTraining;
        }
        if (this._requestBodyBuffering !== undefined) {
            hasAnyValues = true;
            internalValueResult.requestBodyBuffering = this._requestBodyBuffering;
        }
        if (this._requestFields?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.requestFields = this._requestFields?.internalValue;
        }
        if (this._respectStrongEtags !== undefined) {
            hasAnyValues = true;
            internalValueResult.respectStrongEtags = this._respectStrongEtags;
        }
        if (this._response?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.response = this._response?.internalValue;
        }
        if (this._responseBodyBuffering !== undefined) {
            hasAnyValues = true;
            internalValueResult.responseBodyBuffering = this._responseBodyBuffering;
        }
        if (this._responseFields?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.responseFields = this._responseFields?.internalValue;
        }
        if (this._rocketLoader !== undefined) {
            hasAnyValues = true;
            internalValueResult.rocketLoader = this._rocketLoader;
        }
        if (this._rules !== undefined) {
            hasAnyValues = true;
            internalValueResult.rules = this._rules;
        }
        if (this._ruleset !== undefined) {
            hasAnyValues = true;
            internalValueResult.ruleset = this._ruleset;
        }
        if (this._rulesets !== undefined) {
            hasAnyValues = true;
            internalValueResult.rulesets = this._rulesets;
        }
        if (this._sMaxage?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sMaxage = this._sMaxage?.internalValue;
        }
        if (this._securityLevel !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityLevel = this._securityLevel;
        }
        if (this._serveStale?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.serveStale = this._serveStale?.internalValue;
        }
        if (this._serverSideExcludes !== undefined) {
            hasAnyValues = true;
            internalValueResult.serverSideExcludes = this._serverSideExcludes;
        }
        if (this._sni?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sni = this._sni?.internalValue;
        }
        if (this._ssl !== undefined) {
            hasAnyValues = true;
            internalValueResult.ssl = this._ssl;
        }
        if (this._staleIfError?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.staleIfError = this._staleIfError?.internalValue;
        }
        if (this._staleWhileRevalidate?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.staleWhileRevalidate = this._staleWhileRevalidate?.internalValue;
        }
        if (this._statusCode !== undefined) {
            hasAnyValues = true;
            internalValueResult.statusCode = this._statusCode;
        }
        if (this._stripEtags !== undefined) {
            hasAnyValues = true;
            internalValueResult.stripEtags = this._stripEtags;
        }
        if (this._stripLastModified !== undefined) {
            hasAnyValues = true;
            internalValueResult.stripLastModified = this._stripLastModified;
        }
        if (this._stripSetCookie !== undefined) {
            hasAnyValues = true;
            internalValueResult.stripSetCookie = this._stripSetCookie;
        }
        if (this._sxg !== undefined) {
            hasAnyValues = true;
            internalValueResult.sxg = this._sxg;
        }
        if (this._transformedRequestFields?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.transformedRequestFields = this._transformedRequestFields?.internalValue;
        }
        if (this._uri?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.uri = this._uri?.internalValue;
        }
        if (this._values !== undefined) {
            hasAnyValues = true;
            internalValueResult.values = this._values;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._additionalCacheablePorts = undefined;
            this._algorithms.internalValue = undefined;
            this._assetName = undefined;
            this._automaticHttpsRewrites = undefined;
            this._autominify.internalValue = undefined;
            this._bic = undefined;
            this._browserTtl.internalValue = undefined;
            this._cache = undefined;
            this._cacheKey.internalValue = undefined;
            this._cacheReserve.internalValue = undefined;
            this._content = undefined;
            this._contentConverter = undefined;
            this._contentType = undefined;
            this._cookieFields.internalValue = undefined;
            this._disableApps = undefined;
            this._disableRum = undefined;
            this._disableZaraz = undefined;
            this._edgeTtl.internalValue = undefined;
            this._emailObfuscation = undefined;
            this._expression = undefined;
            this._fonts = undefined;
            this._fromList.internalValue = undefined;
            this._fromValue.internalValue = undefined;
            this._headers.internalValue = undefined;
            this._hostHeader = undefined;
            this._hotlinkProtection = undefined;
            this._id = undefined;
            this._immutable.internalValue = undefined;
            this._increment = undefined;
            this._matchedData.internalValue = undefined;
            this._maxAge.internalValue = undefined;
            this._mirage = undefined;
            this._mustRevalidate.internalValue = undefined;
            this._mustUnderstand.internalValue = undefined;
            this._noCache.internalValue = undefined;
            this._noStore.internalValue = undefined;
            this._noTransform.internalValue = undefined;
            this._operation = undefined;
            this._opportunisticEncryption = undefined;
            this._origin.internalValue = undefined;
            this._originCacheControl = undefined;
            this._originErrorPagePassthru = undefined;
            this._overrides.internalValue = undefined;
            this._phases = undefined;
            this._polish = undefined;
            this._private.internalValue = undefined;
            this._products = undefined;
            this._proxyRevalidate.internalValue = undefined;
            this._public.internalValue = undefined;
            this._rawResponseFields.internalValue = undefined;
            this._readTimeout = undefined;
            this._redirectsForAiTraining = undefined;
            this._requestBodyBuffering = undefined;
            this._requestFields.internalValue = undefined;
            this._respectStrongEtags = undefined;
            this._response.internalValue = undefined;
            this._responseBodyBuffering = undefined;
            this._responseFields.internalValue = undefined;
            this._rocketLoader = undefined;
            this._rules = undefined;
            this._ruleset = undefined;
            this._rulesets = undefined;
            this._sMaxage.internalValue = undefined;
            this._securityLevel = undefined;
            this._serveStale.internalValue = undefined;
            this._serverSideExcludes = undefined;
            this._sni.internalValue = undefined;
            this._ssl = undefined;
            this._staleIfError.internalValue = undefined;
            this._staleWhileRevalidate.internalValue = undefined;
            this._statusCode = undefined;
            this._stripEtags = undefined;
            this._stripLastModified = undefined;
            this._stripSetCookie = undefined;
            this._sxg = undefined;
            this._transformedRequestFields.internalValue = undefined;
            this._uri.internalValue = undefined;
            this._values = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._additionalCacheablePorts = value.additionalCacheablePorts;
            this._algorithms.internalValue = value.algorithms;
            this._assetName = value.assetName;
            this._automaticHttpsRewrites = value.automaticHttpsRewrites;
            this._autominify.internalValue = value.autominify;
            this._bic = value.bic;
            this._browserTtl.internalValue = value.browserTtl;
            this._cache = value.cache;
            this._cacheKey.internalValue = value.cacheKey;
            this._cacheReserve.internalValue = value.cacheReserve;
            this._content = value.content;
            this._contentConverter = value.contentConverter;
            this._contentType = value.contentType;
            this._cookieFields.internalValue = value.cookieFields;
            this._disableApps = value.disableApps;
            this._disableRum = value.disableRum;
            this._disableZaraz = value.disableZaraz;
            this._edgeTtl.internalValue = value.edgeTtl;
            this._emailObfuscation = value.emailObfuscation;
            this._expression = value.expression;
            this._fonts = value.fonts;
            this._fromList.internalValue = value.fromList;
            this._fromValue.internalValue = value.fromValue;
            this._headers.internalValue = value.headers;
            this._hostHeader = value.hostHeader;
            this._hotlinkProtection = value.hotlinkProtection;
            this._id = value.id;
            this._immutable.internalValue = value.immutable;
            this._increment = value.increment;
            this._matchedData.internalValue = value.matchedData;
            this._maxAge.internalValue = value.maxAge;
            this._mirage = value.mirage;
            this._mustRevalidate.internalValue = value.mustRevalidate;
            this._mustUnderstand.internalValue = value.mustUnderstand;
            this._noCache.internalValue = value.noCache;
            this._noStore.internalValue = value.noStore;
            this._noTransform.internalValue = value.noTransform;
            this._operation = value.operation;
            this._opportunisticEncryption = value.opportunisticEncryption;
            this._origin.internalValue = value.origin;
            this._originCacheControl = value.originCacheControl;
            this._originErrorPagePassthru = value.originErrorPagePassthru;
            this._overrides.internalValue = value.overrides;
            this._phases = value.phases;
            this._polish = value.polish;
            this._private.internalValue = value.private;
            this._products = value.products;
            this._proxyRevalidate.internalValue = value.proxyRevalidate;
            this._public.internalValue = value.public;
            this._rawResponseFields.internalValue = value.rawResponseFields;
            this._readTimeout = value.readTimeout;
            this._redirectsForAiTraining = value.redirectsForAiTraining;
            this._requestBodyBuffering = value.requestBodyBuffering;
            this._requestFields.internalValue = value.requestFields;
            this._respectStrongEtags = value.respectStrongEtags;
            this._response.internalValue = value.response;
            this._responseBodyBuffering = value.responseBodyBuffering;
            this._responseFields.internalValue = value.responseFields;
            this._rocketLoader = value.rocketLoader;
            this._rules = value.rules;
            this._ruleset = value.ruleset;
            this._rulesets = value.rulesets;
            this._sMaxage.internalValue = value.sMaxage;
            this._securityLevel = value.securityLevel;
            this._serveStale.internalValue = value.serveStale;
            this._serverSideExcludes = value.serverSideExcludes;
            this._sni.internalValue = value.sni;
            this._ssl = value.ssl;
            this._staleIfError.internalValue = value.staleIfError;
            this._staleWhileRevalidate.internalValue = value.staleWhileRevalidate;
            this._statusCode = value.statusCode;
            this._stripEtags = value.stripEtags;
            this._stripLastModified = value.stripLastModified;
            this._stripSetCookie = value.stripSetCookie;
            this._sxg = value.sxg;
            this._transformedRequestFields.internalValue = value.transformedRequestFields;
            this._uri.internalValue = value.uri;
            this._values = value.values;
        }
    }
    // additional_cacheable_ports - computed: true, optional: true, required: false
    _additionalCacheablePorts;
    get additionalCacheablePorts() {
        return this.getNumberListAttribute('additional_cacheable_ports');
    }
    set additionalCacheablePorts(value) {
        this._additionalCacheablePorts = value;
    }
    resetAdditionalCacheablePorts() {
        this._additionalCacheablePorts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get additionalCacheablePortsInput() {
        return this._additionalCacheablePorts;
    }
    // algorithms - computed: true, optional: true, required: false
    _algorithms = new RulesetRulesActionParametersAlgorithmsList(this, "algorithms", false);
    get algorithms() {
        return this._algorithms;
    }
    putAlgorithms(value) {
        this._algorithms.internalValue = value;
    }
    resetAlgorithms() {
        this._algorithms.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get algorithmsInput() {
        return this._algorithms.internalValue;
    }
    // asset_name - computed: true, optional: true, required: false
    _assetName;
    get assetName() {
        return this.getStringAttribute('asset_name');
    }
    set assetName(value) {
        this._assetName = value;
    }
    resetAssetName() {
        this._assetName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get assetNameInput() {
        return this._assetName;
    }
    // automatic_https_rewrites - computed: true, optional: true, required: false
    _automaticHttpsRewrites;
    get automaticHttpsRewrites() {
        return this.getBooleanAttribute('automatic_https_rewrites');
    }
    set automaticHttpsRewrites(value) {
        this._automaticHttpsRewrites = value;
    }
    resetAutomaticHttpsRewrites() {
        this._automaticHttpsRewrites = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get automaticHttpsRewritesInput() {
        return this._automaticHttpsRewrites;
    }
    // autominify - computed: true, optional: true, required: false
    _autominify = new RulesetRulesActionParametersAutominifyOutputReference(this, "autominify");
    get autominify() {
        return this._autominify;
    }
    putAutominify(value) {
        this._autominify.internalValue = value;
    }
    resetAutominify() {
        this._autominify.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get autominifyInput() {
        return this._autominify.internalValue;
    }
    // bic - computed: true, optional: true, required: false
    _bic;
    get bic() {
        return this.getBooleanAttribute('bic');
    }
    set bic(value) {
        this._bic = value;
    }
    resetBic() {
        this._bic = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bicInput() {
        return this._bic;
    }
    // browser_ttl - computed: true, optional: true, required: false
    _browserTtl = new RulesetRulesActionParametersBrowserTtlOutputReference(this, "browser_ttl");
    get browserTtl() {
        return this._browserTtl;
    }
    putBrowserTtl(value) {
        this._browserTtl.internalValue = value;
    }
    resetBrowserTtl() {
        this._browserTtl.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get browserTtlInput() {
        return this._browserTtl.internalValue;
    }
    // cache - computed: true, optional: true, required: false
    _cache;
    get cache() {
        return this.getBooleanAttribute('cache');
    }
    set cache(value) {
        this._cache = value;
    }
    resetCache() {
        this._cache = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cacheInput() {
        return this._cache;
    }
    // cache_key - computed: true, optional: true, required: false
    _cacheKey = new RulesetRulesActionParametersCacheKeyOutputReference(this, "cache_key");
    get cacheKey() {
        return this._cacheKey;
    }
    putCacheKey(value) {
        this._cacheKey.internalValue = value;
    }
    resetCacheKey() {
        this._cacheKey.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cacheKeyInput() {
        return this._cacheKey.internalValue;
    }
    // cache_reserve - computed: true, optional: true, required: false
    _cacheReserve = new RulesetRulesActionParametersCacheReserveOutputReference(this, "cache_reserve");
    get cacheReserve() {
        return this._cacheReserve;
    }
    putCacheReserve(value) {
        this._cacheReserve.internalValue = value;
    }
    resetCacheReserve() {
        this._cacheReserve.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cacheReserveInput() {
        return this._cacheReserve.internalValue;
    }
    // content - computed: true, optional: true, required: false
    _content;
    get content() {
        return this.getStringAttribute('content');
    }
    set content(value) {
        this._content = value;
    }
    resetContent() {
        this._content = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get contentInput() {
        return this._content;
    }
    // content_converter - computed: true, optional: true, required: false
    _contentConverter;
    get contentConverter() {
        return this.getBooleanAttribute('content_converter');
    }
    set contentConverter(value) {
        this._contentConverter = value;
    }
    resetContentConverter() {
        this._contentConverter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get contentConverterInput() {
        return this._contentConverter;
    }
    // content_type - computed: true, optional: true, required: false
    _contentType;
    get contentType() {
        return this.getStringAttribute('content_type');
    }
    set contentType(value) {
        this._contentType = value;
    }
    resetContentType() {
        this._contentType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get contentTypeInput() {
        return this._contentType;
    }
    // cookie_fields - computed: true, optional: true, required: false
    _cookieFields = new RulesetRulesActionParametersCookieFieldsList(this, "cookie_fields", false);
    get cookieFields() {
        return this._cookieFields;
    }
    putCookieFields(value) {
        this._cookieFields.internalValue = value;
    }
    resetCookieFields() {
        this._cookieFields.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cookieFieldsInput() {
        return this._cookieFields.internalValue;
    }
    // disable_apps - computed: true, optional: true, required: false
    _disableApps;
    get disableApps() {
        return this.getBooleanAttribute('disable_apps');
    }
    set disableApps(value) {
        this._disableApps = value;
    }
    resetDisableApps() {
        this._disableApps = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get disableAppsInput() {
        return this._disableApps;
    }
    // disable_rum - computed: true, optional: true, required: false
    _disableRum;
    get disableRum() {
        return this.getBooleanAttribute('disable_rum');
    }
    set disableRum(value) {
        this._disableRum = value;
    }
    resetDisableRum() {
        this._disableRum = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get disableRumInput() {
        return this._disableRum;
    }
    // disable_zaraz - computed: true, optional: true, required: false
    _disableZaraz;
    get disableZaraz() {
        return this.getBooleanAttribute('disable_zaraz');
    }
    set disableZaraz(value) {
        this._disableZaraz = value;
    }
    resetDisableZaraz() {
        this._disableZaraz = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get disableZarazInput() {
        return this._disableZaraz;
    }
    // edge_ttl - computed: true, optional: true, required: false
    _edgeTtl = new RulesetRulesActionParametersEdgeTtlOutputReference(this, "edge_ttl");
    get edgeTtl() {
        return this._edgeTtl;
    }
    putEdgeTtl(value) {
        this._edgeTtl.internalValue = value;
    }
    resetEdgeTtl() {
        this._edgeTtl.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get edgeTtlInput() {
        return this._edgeTtl.internalValue;
    }
    // email_obfuscation - computed: true, optional: true, required: false
    _emailObfuscation;
    get emailObfuscation() {
        return this.getBooleanAttribute('email_obfuscation');
    }
    set emailObfuscation(value) {
        this._emailObfuscation = value;
    }
    resetEmailObfuscation() {
        this._emailObfuscation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get emailObfuscationInput() {
        return this._emailObfuscation;
    }
    // expression - computed: true, optional: true, required: false
    _expression;
    get expression() {
        return this.getStringAttribute('expression');
    }
    set expression(value) {
        this._expression = value;
    }
    resetExpression() {
        this._expression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get expressionInput() {
        return this._expression;
    }
    // fonts - computed: true, optional: true, required: false
    _fonts;
    get fonts() {
        return this.getBooleanAttribute('fonts');
    }
    set fonts(value) {
        this._fonts = value;
    }
    resetFonts() {
        this._fonts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fontsInput() {
        return this._fonts;
    }
    // from_list - computed: true, optional: true, required: false
    _fromList = new RulesetRulesActionParametersFromListStructOutputReference(this, "from_list");
    get fromList() {
        return this._fromList;
    }
    putFromList(value) {
        this._fromList.internalValue = value;
    }
    resetFromList() {
        this._fromList.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fromListInput() {
        return this._fromList.internalValue;
    }
    // from_value - computed: true, optional: true, required: false
    _fromValue = new RulesetRulesActionParametersFromValueOutputReference(this, "from_value");
    get fromValue() {
        return this._fromValue;
    }
    putFromValue(value) {
        this._fromValue.internalValue = value;
    }
    resetFromValue() {
        this._fromValue.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fromValueInput() {
        return this._fromValue.internalValue;
    }
    // headers - computed: true, optional: true, required: false
    _headers = new RulesetRulesActionParametersHeadersMap(this, "headers");
    get headers() {
        return this._headers;
    }
    putHeaders(value) {
        this._headers.internalValue = value;
    }
    resetHeaders() {
        this._headers.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get headersInput() {
        return this._headers.internalValue;
    }
    // host_header - computed: true, optional: true, required: false
    _hostHeader;
    get hostHeader() {
        return this.getStringAttribute('host_header');
    }
    set hostHeader(value) {
        this._hostHeader = value;
    }
    resetHostHeader() {
        this._hostHeader = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hostHeaderInput() {
        return this._hostHeader;
    }
    // hotlink_protection - computed: true, optional: true, required: false
    _hotlinkProtection;
    get hotlinkProtection() {
        return this.getBooleanAttribute('hotlink_protection');
    }
    set hotlinkProtection(value) {
        this._hotlinkProtection = value;
    }
    resetHotlinkProtection() {
        this._hotlinkProtection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hotlinkProtectionInput() {
        return this._hotlinkProtection;
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
    // immutable - computed: true, optional: true, required: false
    _immutable = new RulesetRulesActionParametersImmutableOutputReference(this, "immutable");
    get immutable() {
        return this._immutable;
    }
    putImmutable(value) {
        this._immutable.internalValue = value;
    }
    resetImmutable() {
        this._immutable.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get immutableInput() {
        return this._immutable.internalValue;
    }
    // increment - computed: true, optional: true, required: false
    _increment;
    get increment() {
        return this.getNumberAttribute('increment');
    }
    set increment(value) {
        this._increment = value;
    }
    resetIncrement() {
        this._increment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get incrementInput() {
        return this._increment;
    }
    // matched_data - computed: true, optional: true, required: false
    _matchedData = new RulesetRulesActionParametersMatchedDataOutputReference(this, "matched_data");
    get matchedData() {
        return this._matchedData;
    }
    putMatchedData(value) {
        this._matchedData.internalValue = value;
    }
    resetMatchedData() {
        this._matchedData.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get matchedDataInput() {
        return this._matchedData.internalValue;
    }
    // max_age - computed: true, optional: true, required: false
    _maxAge = new RulesetRulesActionParametersMaxAgeOutputReference(this, "max_age");
    get maxAge() {
        return this._maxAge;
    }
    putMaxAge(value) {
        this._maxAge.internalValue = value;
    }
    resetMaxAge() {
        this._maxAge.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxAgeInput() {
        return this._maxAge.internalValue;
    }
    // mirage - computed: true, optional: true, required: false
    _mirage;
    get mirage() {
        return this.getBooleanAttribute('mirage');
    }
    set mirage(value) {
        this._mirage = value;
    }
    resetMirage() {
        this._mirage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get mirageInput() {
        return this._mirage;
    }
    // must_revalidate - computed: true, optional: true, required: false
    _mustRevalidate = new RulesetRulesActionParametersMustRevalidateOutputReference(this, "must_revalidate");
    get mustRevalidate() {
        return this._mustRevalidate;
    }
    putMustRevalidate(value) {
        this._mustRevalidate.internalValue = value;
    }
    resetMustRevalidate() {
        this._mustRevalidate.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get mustRevalidateInput() {
        return this._mustRevalidate.internalValue;
    }
    // must_understand - computed: true, optional: true, required: false
    _mustUnderstand = new RulesetRulesActionParametersMustUnderstandOutputReference(this, "must_understand");
    get mustUnderstand() {
        return this._mustUnderstand;
    }
    putMustUnderstand(value) {
        this._mustUnderstand.internalValue = value;
    }
    resetMustUnderstand() {
        this._mustUnderstand.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get mustUnderstandInput() {
        return this._mustUnderstand.internalValue;
    }
    // no_cache - computed: true, optional: true, required: false
    _noCache = new RulesetRulesActionParametersNoCacheOutputReference(this, "no_cache");
    get noCache() {
        return this._noCache;
    }
    putNoCache(value) {
        this._noCache.internalValue = value;
    }
    resetNoCache() {
        this._noCache.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get noCacheInput() {
        return this._noCache.internalValue;
    }
    // no_store - computed: true, optional: true, required: false
    _noStore = new RulesetRulesActionParametersNoStoreOutputReference(this, "no_store");
    get noStore() {
        return this._noStore;
    }
    putNoStore(value) {
        this._noStore.internalValue = value;
    }
    resetNoStore() {
        this._noStore.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get noStoreInput() {
        return this._noStore.internalValue;
    }
    // no_transform - computed: true, optional: true, required: false
    _noTransform = new RulesetRulesActionParametersNoTransformOutputReference(this, "no_transform");
    get noTransform() {
        return this._noTransform;
    }
    putNoTransform(value) {
        this._noTransform.internalValue = value;
    }
    resetNoTransform() {
        this._noTransform.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get noTransformInput() {
        return this._noTransform.internalValue;
    }
    // operation - computed: true, optional: true, required: false
    _operation;
    get operation() {
        return this.getStringAttribute('operation');
    }
    set operation(value) {
        this._operation = value;
    }
    resetOperation() {
        this._operation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get operationInput() {
        return this._operation;
    }
    // opportunistic_encryption - computed: true, optional: true, required: false
    _opportunisticEncryption;
    get opportunisticEncryption() {
        return this.getBooleanAttribute('opportunistic_encryption');
    }
    set opportunisticEncryption(value) {
        this._opportunisticEncryption = value;
    }
    resetOpportunisticEncryption() {
        this._opportunisticEncryption = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get opportunisticEncryptionInput() {
        return this._opportunisticEncryption;
    }
    // origin - computed: true, optional: true, required: false
    _origin = new RulesetRulesActionParametersOriginOutputReference(this, "origin");
    get origin() {
        return this._origin;
    }
    putOrigin(value) {
        this._origin.internalValue = value;
    }
    resetOrigin() {
        this._origin.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get originInput() {
        return this._origin.internalValue;
    }
    // origin_cache_control - computed: true, optional: true, required: false
    _originCacheControl;
    get originCacheControl() {
        return this.getBooleanAttribute('origin_cache_control');
    }
    set originCacheControl(value) {
        this._originCacheControl = value;
    }
    resetOriginCacheControl() {
        this._originCacheControl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get originCacheControlInput() {
        return this._originCacheControl;
    }
    // origin_error_page_passthru - computed: true, optional: true, required: false
    _originErrorPagePassthru;
    get originErrorPagePassthru() {
        return this.getBooleanAttribute('origin_error_page_passthru');
    }
    set originErrorPagePassthru(value) {
        this._originErrorPagePassthru = value;
    }
    resetOriginErrorPagePassthru() {
        this._originErrorPagePassthru = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get originErrorPagePassthruInput() {
        return this._originErrorPagePassthru;
    }
    // overrides - computed: true, optional: true, required: false
    _overrides = new RulesetRulesActionParametersOverridesOutputReference(this, "overrides");
    get overrides() {
        return this._overrides;
    }
    putOverrides(value) {
        this._overrides.internalValue = value;
    }
    resetOverrides() {
        this._overrides.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get overridesInput() {
        return this._overrides.internalValue;
    }
    // phases - computed: true, optional: true, required: false
    _phases;
    get phases() {
        return this.getListAttribute('phases');
    }
    set phases(value) {
        this._phases = value;
    }
    resetPhases() {
        this._phases = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get phasesInput() {
        return this._phases;
    }
    // polish - computed: true, optional: true, required: false
    _polish;
    get polish() {
        return this.getStringAttribute('polish');
    }
    set polish(value) {
        this._polish = value;
    }
    resetPolish() {
        this._polish = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get polishInput() {
        return this._polish;
    }
    // private - computed: true, optional: true, required: false
    _private = new RulesetRulesActionParametersPrivateOutputReference(this, "private");
    get private() {
        return this._private;
    }
    putPrivate(value) {
        this._private.internalValue = value;
    }
    resetPrivate() {
        this._private.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get privateInput() {
        return this._private.internalValue;
    }
    // products - computed: true, optional: true, required: false
    _products;
    get products() {
        return this.getListAttribute('products');
    }
    set products(value) {
        this._products = value;
    }
    resetProducts() {
        this._products = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get productsInput() {
        return this._products;
    }
    // proxy_revalidate - computed: true, optional: true, required: false
    _proxyRevalidate = new RulesetRulesActionParametersProxyRevalidateOutputReference(this, "proxy_revalidate");
    get proxyRevalidate() {
        return this._proxyRevalidate;
    }
    putProxyRevalidate(value) {
        this._proxyRevalidate.internalValue = value;
    }
    resetProxyRevalidate() {
        this._proxyRevalidate.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get proxyRevalidateInput() {
        return this._proxyRevalidate.internalValue;
    }
    // public - computed: true, optional: true, required: false
    _public = new RulesetRulesActionParametersPublicOutputReference(this, "public");
    get public() {
        return this._public;
    }
    putPublic(value) {
        this._public.internalValue = value;
    }
    resetPublic() {
        this._public.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get publicInput() {
        return this._public.internalValue;
    }
    // raw_response_fields - computed: true, optional: true, required: false
    _rawResponseFields = new RulesetRulesActionParametersRawResponseFieldsList(this, "raw_response_fields", false);
    get rawResponseFields() {
        return this._rawResponseFields;
    }
    putRawResponseFields(value) {
        this._rawResponseFields.internalValue = value;
    }
    resetRawResponseFields() {
        this._rawResponseFields.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get rawResponseFieldsInput() {
        return this._rawResponseFields.internalValue;
    }
    // read_timeout - computed: true, optional: true, required: false
    _readTimeout;
    get readTimeout() {
        return this.getNumberAttribute('read_timeout');
    }
    set readTimeout(value) {
        this._readTimeout = value;
    }
    resetReadTimeout() {
        this._readTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get readTimeoutInput() {
        return this._readTimeout;
    }
    // redirects_for_ai_training - computed: true, optional: true, required: false
    _redirectsForAiTraining;
    get redirectsForAiTraining() {
        return this.getBooleanAttribute('redirects_for_ai_training');
    }
    set redirectsForAiTraining(value) {
        this._redirectsForAiTraining = value;
    }
    resetRedirectsForAiTraining() {
        this._redirectsForAiTraining = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get redirectsForAiTrainingInput() {
        return this._redirectsForAiTraining;
    }
    // request_body_buffering - computed: true, optional: true, required: false
    _requestBodyBuffering;
    get requestBodyBuffering() {
        return this.getStringAttribute('request_body_buffering');
    }
    set requestBodyBuffering(value) {
        this._requestBodyBuffering = value;
    }
    resetRequestBodyBuffering() {
        this._requestBodyBuffering = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requestBodyBufferingInput() {
        return this._requestBodyBuffering;
    }
    // request_fields - computed: true, optional: true, required: false
    _requestFields = new RulesetRulesActionParametersRequestFieldsList(this, "request_fields", false);
    get requestFields() {
        return this._requestFields;
    }
    putRequestFields(value) {
        this._requestFields.internalValue = value;
    }
    resetRequestFields() {
        this._requestFields.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requestFieldsInput() {
        return this._requestFields.internalValue;
    }
    // respect_strong_etags - computed: true, optional: true, required: false
    _respectStrongEtags;
    get respectStrongEtags() {
        return this.getBooleanAttribute('respect_strong_etags');
    }
    set respectStrongEtags(value) {
        this._respectStrongEtags = value;
    }
    resetRespectStrongEtags() {
        this._respectStrongEtags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get respectStrongEtagsInput() {
        return this._respectStrongEtags;
    }
    // response - computed: true, optional: true, required: false
    _response = new RulesetRulesActionParametersResponseOutputReference(this, "response");
    get response() {
        return this._response;
    }
    putResponse(value) {
        this._response.internalValue = value;
    }
    resetResponse() {
        this._response.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get responseInput() {
        return this._response.internalValue;
    }
    // response_body_buffering - computed: true, optional: true, required: false
    _responseBodyBuffering;
    get responseBodyBuffering() {
        return this.getStringAttribute('response_body_buffering');
    }
    set responseBodyBuffering(value) {
        this._responseBodyBuffering = value;
    }
    resetResponseBodyBuffering() {
        this._responseBodyBuffering = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get responseBodyBufferingInput() {
        return this._responseBodyBuffering;
    }
    // response_fields - computed: true, optional: true, required: false
    _responseFields = new RulesetRulesActionParametersResponseFieldsList(this, "response_fields", false);
    get responseFields() {
        return this._responseFields;
    }
    putResponseFields(value) {
        this._responseFields.internalValue = value;
    }
    resetResponseFields() {
        this._responseFields.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get responseFieldsInput() {
        return this._responseFields.internalValue;
    }
    // rocket_loader - computed: true, optional: true, required: false
    _rocketLoader;
    get rocketLoader() {
        return this.getBooleanAttribute('rocket_loader');
    }
    set rocketLoader(value) {
        this._rocketLoader = value;
    }
    resetRocketLoader() {
        this._rocketLoader = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get rocketLoaderInput() {
        return this._rocketLoader;
    }
    // rules - computed: true, optional: true, required: false
    _rules;
    get rules() {
        return this.interpolationForAttribute('rules');
    }
    set rules(value) {
        this._rules = value;
    }
    resetRules() {
        this._rules = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get rulesInput() {
        return this._rules;
    }
    // ruleset - computed: true, optional: true, required: false
    _ruleset;
    get ruleset() {
        return this.getStringAttribute('ruleset');
    }
    set ruleset(value) {
        this._ruleset = value;
    }
    resetRuleset() {
        this._ruleset = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get rulesetInput() {
        return this._ruleset;
    }
    // rulesets - computed: true, optional: true, required: false
    _rulesets;
    get rulesets() {
        return this.getListAttribute('rulesets');
    }
    set rulesets(value) {
        this._rulesets = value;
    }
    resetRulesets() {
        this._rulesets = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get rulesetsInput() {
        return this._rulesets;
    }
    // s_maxage - computed: true, optional: true, required: false
    _sMaxage = new RulesetRulesActionParametersSMaxageOutputReference(this, "s_maxage");
    get sMaxage() {
        return this._sMaxage;
    }
    putSMaxage(value) {
        this._sMaxage.internalValue = value;
    }
    resetSMaxage() {
        this._sMaxage.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sMaxageInput() {
        return this._sMaxage.internalValue;
    }
    // security_level - computed: true, optional: true, required: false
    _securityLevel;
    get securityLevel() {
        return this.getStringAttribute('security_level');
    }
    set securityLevel(value) {
        this._securityLevel = value;
    }
    resetSecurityLevel() {
        this._securityLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get securityLevelInput() {
        return this._securityLevel;
    }
    // serve_stale - computed: true, optional: true, required: false
    _serveStale = new RulesetRulesActionParametersServeStaleOutputReference(this, "serve_stale");
    get serveStale() {
        return this._serveStale;
    }
    putServeStale(value) {
        this._serveStale.internalValue = value;
    }
    resetServeStale() {
        this._serveStale.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get serveStaleInput() {
        return this._serveStale.internalValue;
    }
    // server_side_excludes - computed: true, optional: true, required: false
    _serverSideExcludes;
    get serverSideExcludes() {
        return this.getBooleanAttribute('server_side_excludes');
    }
    set serverSideExcludes(value) {
        this._serverSideExcludes = value;
    }
    resetServerSideExcludes() {
        this._serverSideExcludes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get serverSideExcludesInput() {
        return this._serverSideExcludes;
    }
    // sni - computed: true, optional: true, required: false
    _sni = new RulesetRulesActionParametersSniOutputReference(this, "sni");
    get sni() {
        return this._sni;
    }
    putSni(value) {
        this._sni.internalValue = value;
    }
    resetSni() {
        this._sni.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sniInput() {
        return this._sni.internalValue;
    }
    // ssl - computed: true, optional: true, required: false
    _ssl;
    get ssl() {
        return this.getStringAttribute('ssl');
    }
    set ssl(value) {
        this._ssl = value;
    }
    resetSsl() {
        this._ssl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sslInput() {
        return this._ssl;
    }
    // stale_if_error - computed: true, optional: true, required: false
    _staleIfError = new RulesetRulesActionParametersStaleIfErrorOutputReference(this, "stale_if_error");
    get staleIfError() {
        return this._staleIfError;
    }
    putStaleIfError(value) {
        this._staleIfError.internalValue = value;
    }
    resetStaleIfError() {
        this._staleIfError.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get staleIfErrorInput() {
        return this._staleIfError.internalValue;
    }
    // stale_while_revalidate - computed: true, optional: true, required: false
    _staleWhileRevalidate = new RulesetRulesActionParametersStaleWhileRevalidateOutputReference(this, "stale_while_revalidate");
    get staleWhileRevalidate() {
        return this._staleWhileRevalidate;
    }
    putStaleWhileRevalidate(value) {
        this._staleWhileRevalidate.internalValue = value;
    }
    resetStaleWhileRevalidate() {
        this._staleWhileRevalidate.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get staleWhileRevalidateInput() {
        return this._staleWhileRevalidate.internalValue;
    }
    // status_code - computed: true, optional: true, required: false
    _statusCode;
    get statusCode() {
        return this.getNumberAttribute('status_code');
    }
    set statusCode(value) {
        this._statusCode = value;
    }
    resetStatusCode() {
        this._statusCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get statusCodeInput() {
        return this._statusCode;
    }
    // strip_etags - computed: true, optional: true, required: false
    _stripEtags;
    get stripEtags() {
        return this.getBooleanAttribute('strip_etags');
    }
    set stripEtags(value) {
        this._stripEtags = value;
    }
    resetStripEtags() {
        this._stripEtags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get stripEtagsInput() {
        return this._stripEtags;
    }
    // strip_last_modified - computed: true, optional: true, required: false
    _stripLastModified;
    get stripLastModified() {
        return this.getBooleanAttribute('strip_last_modified');
    }
    set stripLastModified(value) {
        this._stripLastModified = value;
    }
    resetStripLastModified() {
        this._stripLastModified = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get stripLastModifiedInput() {
        return this._stripLastModified;
    }
    // strip_set_cookie - computed: true, optional: true, required: false
    _stripSetCookie;
    get stripSetCookie() {
        return this.getBooleanAttribute('strip_set_cookie');
    }
    set stripSetCookie(value) {
        this._stripSetCookie = value;
    }
    resetStripSetCookie() {
        this._stripSetCookie = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get stripSetCookieInput() {
        return this._stripSetCookie;
    }
    // sxg - computed: true, optional: true, required: false
    _sxg;
    get sxg() {
        return this.getBooleanAttribute('sxg');
    }
    set sxg(value) {
        this._sxg = value;
    }
    resetSxg() {
        this._sxg = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sxgInput() {
        return this._sxg;
    }
    // transformed_request_fields - computed: true, optional: true, required: false
    _transformedRequestFields = new RulesetRulesActionParametersTransformedRequestFieldsList(this, "transformed_request_fields", false);
    get transformedRequestFields() {
        return this._transformedRequestFields;
    }
    putTransformedRequestFields(value) {
        this._transformedRequestFields.internalValue = value;
    }
    resetTransformedRequestFields() {
        this._transformedRequestFields.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get transformedRequestFieldsInput() {
        return this._transformedRequestFields.internalValue;
    }
    // uri - computed: true, optional: true, required: false
    _uri = new RulesetRulesActionParametersUriOutputReference(this, "uri");
    get uri() {
        return this._uri;
    }
    putUri(value) {
        this._uri.internalValue = value;
    }
    resetUri() {
        this._uri.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriInput() {
        return this._uri.internalValue;
    }
    // values - computed: true, optional: true, required: false
    _values;
    get values() {
        return this.getListAttribute('values');
    }
    set values(value) {
        this._values = value;
    }
    resetValues() {
        this._values = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get valuesInput() {
        return this._values;
    }
}
export function rulesetRulesExposedCredentialCheckToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        password_expression: cdktf.stringToTerraform(struct.passwordExpression),
        username_expression: cdktf.stringToTerraform(struct.usernameExpression),
    };
}
export function rulesetRulesExposedCredentialCheckToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        password_expression: {
            value: cdktf.stringToHclTerraform(struct.passwordExpression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        username_expression: {
            value: cdktf.stringToHclTerraform(struct.usernameExpression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RulesetRulesExposedCredentialCheckOutputReference extends cdktf.ComplexObject {
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
        if (this._passwordExpression !== undefined) {
            hasAnyValues = true;
            internalValueResult.passwordExpression = this._passwordExpression;
        }
        if (this._usernameExpression !== undefined) {
            hasAnyValues = true;
            internalValueResult.usernameExpression = this._usernameExpression;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._passwordExpression = undefined;
            this._usernameExpression = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._passwordExpression = value.passwordExpression;
            this._usernameExpression = value.usernameExpression;
        }
    }
    // password_expression - computed: true, optional: false, required: true
    _passwordExpression;
    get passwordExpression() {
        return this.getStringAttribute('password_expression');
    }
    set passwordExpression(value) {
        this._passwordExpression = value;
    }
    // Temporarily expose input value. Use with caution.
    get passwordExpressionInput() {
        return this._passwordExpression;
    }
    // username_expression - computed: true, optional: false, required: true
    _usernameExpression;
    get usernameExpression() {
        return this.getStringAttribute('username_expression');
    }
    set usernameExpression(value) {
        this._usernameExpression = value;
    }
    // Temporarily expose input value. Use with caution.
    get usernameExpressionInput() {
        return this._usernameExpression;
    }
}
export function rulesetRulesLoggingToTerraform(struct) {
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
export function rulesetRulesLoggingToHclTerraform(struct) {
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
export class RulesetRulesLoggingOutputReference extends cdktf.ComplexObject {
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
}
export function rulesetRulesRatelimitToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        characteristics: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.characteristics),
        counting_expression: cdktf.stringToTerraform(struct.countingExpression),
        mitigation_timeout: cdktf.numberToTerraform(struct.mitigationTimeout),
        period: cdktf.numberToTerraform(struct.period),
        requests_per_period: cdktf.numberToTerraform(struct.requestsPerPeriod),
        requests_to_origin: cdktf.booleanToTerraform(struct.requestsToOrigin),
        score_per_period: cdktf.numberToTerraform(struct.scorePerPeriod),
        score_response_header_name: cdktf.stringToTerraform(struct.scoreResponseHeaderName),
    };
}
export function rulesetRulesRatelimitToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        characteristics: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.characteristics),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        counting_expression: {
            value: cdktf.stringToHclTerraform(struct.countingExpression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mitigation_timeout: {
            value: cdktf.numberToHclTerraform(struct.mitigationTimeout),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        period: {
            value: cdktf.numberToHclTerraform(struct.period),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        requests_per_period: {
            value: cdktf.numberToHclTerraform(struct.requestsPerPeriod),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        requests_to_origin: {
            value: cdktf.booleanToHclTerraform(struct.requestsToOrigin),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        score_per_period: {
            value: cdktf.numberToHclTerraform(struct.scorePerPeriod),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        score_response_header_name: {
            value: cdktf.stringToHclTerraform(struct.scoreResponseHeaderName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RulesetRulesRatelimitOutputReference extends cdktf.ComplexObject {
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
        if (this._characteristics !== undefined) {
            hasAnyValues = true;
            internalValueResult.characteristics = this._characteristics;
        }
        if (this._countingExpression !== undefined) {
            hasAnyValues = true;
            internalValueResult.countingExpression = this._countingExpression;
        }
        if (this._mitigationTimeout !== undefined) {
            hasAnyValues = true;
            internalValueResult.mitigationTimeout = this._mitigationTimeout;
        }
        if (this._period !== undefined) {
            hasAnyValues = true;
            internalValueResult.period = this._period;
        }
        if (this._requestsPerPeriod !== undefined) {
            hasAnyValues = true;
            internalValueResult.requestsPerPeriod = this._requestsPerPeriod;
        }
        if (this._requestsToOrigin !== undefined) {
            hasAnyValues = true;
            internalValueResult.requestsToOrigin = this._requestsToOrigin;
        }
        if (this._scorePerPeriod !== undefined) {
            hasAnyValues = true;
            internalValueResult.scorePerPeriod = this._scorePerPeriod;
        }
        if (this._scoreResponseHeaderName !== undefined) {
            hasAnyValues = true;
            internalValueResult.scoreResponseHeaderName = this._scoreResponseHeaderName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._characteristics = undefined;
            this._countingExpression = undefined;
            this._mitigationTimeout = undefined;
            this._period = undefined;
            this._requestsPerPeriod = undefined;
            this._requestsToOrigin = undefined;
            this._scorePerPeriod = undefined;
            this._scoreResponseHeaderName = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._characteristics = value.characteristics;
            this._countingExpression = value.countingExpression;
            this._mitigationTimeout = value.mitigationTimeout;
            this._period = value.period;
            this._requestsPerPeriod = value.requestsPerPeriod;
            this._requestsToOrigin = value.requestsToOrigin;
            this._scorePerPeriod = value.scorePerPeriod;
            this._scoreResponseHeaderName = value.scoreResponseHeaderName;
        }
    }
    // characteristics - computed: true, optional: false, required: true
    _characteristics;
    get characteristics() {
        return this.getListAttribute('characteristics');
    }
    set characteristics(value) {
        this._characteristics = value;
    }
    // Temporarily expose input value. Use with caution.
    get characteristicsInput() {
        return this._characteristics;
    }
    // counting_expression - computed: true, optional: true, required: false
    _countingExpression;
    get countingExpression() {
        return this.getStringAttribute('counting_expression');
    }
    set countingExpression(value) {
        this._countingExpression = value;
    }
    resetCountingExpression() {
        this._countingExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get countingExpressionInput() {
        return this._countingExpression;
    }
    // mitigation_timeout - computed: true, optional: true, required: false
    _mitigationTimeout;
    get mitigationTimeout() {
        return this.getNumberAttribute('mitigation_timeout');
    }
    set mitigationTimeout(value) {
        this._mitigationTimeout = value;
    }
    resetMitigationTimeout() {
        this._mitigationTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get mitigationTimeoutInput() {
        return this._mitigationTimeout;
    }
    // period - computed: true, optional: false, required: true
    _period;
    get period() {
        return this.getNumberAttribute('period');
    }
    set period(value) {
        this._period = value;
    }
    // Temporarily expose input value. Use with caution.
    get periodInput() {
        return this._period;
    }
    // requests_per_period - computed: true, optional: true, required: false
    _requestsPerPeriod;
    get requestsPerPeriod() {
        return this.getNumberAttribute('requests_per_period');
    }
    set requestsPerPeriod(value) {
        this._requestsPerPeriod = value;
    }
    resetRequestsPerPeriod() {
        this._requestsPerPeriod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requestsPerPeriodInput() {
        return this._requestsPerPeriod;
    }
    // requests_to_origin - computed: true, optional: true, required: false
    _requestsToOrigin;
    get requestsToOrigin() {
        return this.getBooleanAttribute('requests_to_origin');
    }
    set requestsToOrigin(value) {
        this._requestsToOrigin = value;
    }
    resetRequestsToOrigin() {
        this._requestsToOrigin = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requestsToOriginInput() {
        return this._requestsToOrigin;
    }
    // score_per_period - computed: true, optional: true, required: false
    _scorePerPeriod;
    get scorePerPeriod() {
        return this.getNumberAttribute('score_per_period');
    }
    set scorePerPeriod(value) {
        this._scorePerPeriod = value;
    }
    resetScorePerPeriod() {
        this._scorePerPeriod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get scorePerPeriodInput() {
        return this._scorePerPeriod;
    }
    // score_response_header_name - computed: true, optional: true, required: false
    _scoreResponseHeaderName;
    get scoreResponseHeaderName() {
        return this.getStringAttribute('score_response_header_name');
    }
    set scoreResponseHeaderName(value) {
        this._scoreResponseHeaderName = value;
    }
    resetScoreResponseHeaderName() {
        this._scoreResponseHeaderName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get scoreResponseHeaderNameInput() {
        return this._scoreResponseHeaderName;
    }
}
export function rulesetRulesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        action: cdktf.stringToTerraform(struct.action),
        action_parameters: rulesetRulesActionParametersToTerraform(struct.actionParameters),
        description: cdktf.stringToTerraform(struct.description),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        exposed_credential_check: rulesetRulesExposedCredentialCheckToTerraform(struct.exposedCredentialCheck),
        expression: cdktf.stringToTerraform(struct.expression),
        logging: rulesetRulesLoggingToTerraform(struct.logging),
        ratelimit: rulesetRulesRatelimitToTerraform(struct.ratelimit),
        ref: cdktf.stringToTerraform(struct.ref),
    };
}
export function rulesetRulesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        action: {
            value: cdktf.stringToHclTerraform(struct.action),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        action_parameters: {
            value: rulesetRulesActionParametersToHclTerraform(struct.actionParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParameters",
        },
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
        exposed_credential_check: {
            value: rulesetRulesExposedCredentialCheckToHclTerraform(struct.exposedCredentialCheck),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesExposedCredentialCheck",
        },
        expression: {
            value: cdktf.stringToHclTerraform(struct.expression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        logging: {
            value: rulesetRulesLoggingToHclTerraform(struct.logging),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesLogging",
        },
        ratelimit: {
            value: rulesetRulesRatelimitToHclTerraform(struct.ratelimit),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesRatelimit",
        },
        ref: {
            value: cdktf.stringToHclTerraform(struct.ref),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RulesetRulesOutputReference extends cdktf.ComplexObject {
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
        if (this._action !== undefined) {
            hasAnyValues = true;
            internalValueResult.action = this._action;
        }
        if (this._actionParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.actionParameters = this._actionParameters?.internalValue;
        }
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._exposedCredentialCheck?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.exposedCredentialCheck = this._exposedCredentialCheck?.internalValue;
        }
        if (this._expression !== undefined) {
            hasAnyValues = true;
            internalValueResult.expression = this._expression;
        }
        if (this._logging?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.logging = this._logging?.internalValue;
        }
        if (this._ratelimit?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ratelimit = this._ratelimit?.internalValue;
        }
        if (this._ref !== undefined) {
            hasAnyValues = true;
            internalValueResult.ref = this._ref;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._action = undefined;
            this._actionParameters.internalValue = undefined;
            this._description = undefined;
            this._enabled = undefined;
            this._exposedCredentialCheck.internalValue = undefined;
            this._expression = undefined;
            this._logging.internalValue = undefined;
            this._ratelimit.internalValue = undefined;
            this._ref = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._action = value.action;
            this._actionParameters.internalValue = value.actionParameters;
            this._description = value.description;
            this._enabled = value.enabled;
            this._exposedCredentialCheck.internalValue = value.exposedCredentialCheck;
            this._expression = value.expression;
            this._logging.internalValue = value.logging;
            this._ratelimit.internalValue = value.ratelimit;
            this._ref = value.ref;
        }
    }
    // action - computed: true, optional: false, required: true
    _action;
    get action() {
        return this.getStringAttribute('action');
    }
    set action(value) {
        this._action = value;
    }
    // Temporarily expose input value. Use with caution.
    get actionInput() {
        return this._action;
    }
    // action_parameters - computed: true, optional: true, required: false
    _actionParameters = new RulesetRulesActionParametersOutputReference(this, "action_parameters");
    get actionParameters() {
        return this._actionParameters;
    }
    putActionParameters(value) {
        this._actionParameters.internalValue = value;
    }
    resetActionParameters() {
        this._actionParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get actionParametersInput() {
        return this._actionParameters.internalValue;
    }
    // description - computed: true, optional: true, required: false
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
    // exposed_credential_check - computed: true, optional: true, required: false
    _exposedCredentialCheck = new RulesetRulesExposedCredentialCheckOutputReference(this, "exposed_credential_check");
    get exposedCredentialCheck() {
        return this._exposedCredentialCheck;
    }
    putExposedCredentialCheck(value) {
        this._exposedCredentialCheck.internalValue = value;
    }
    resetExposedCredentialCheck() {
        this._exposedCredentialCheck.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get exposedCredentialCheckInput() {
        return this._exposedCredentialCheck.internalValue;
    }
    // expression - computed: true, optional: false, required: true
    _expression;
    get expression() {
        return this.getStringAttribute('expression');
    }
    set expression(value) {
        this._expression = value;
    }
    // Temporarily expose input value. Use with caution.
    get expressionInput() {
        return this._expression;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // logging - computed: true, optional: true, required: false
    _logging = new RulesetRulesLoggingOutputReference(this, "logging");
    get logging() {
        return this._logging;
    }
    putLogging(value) {
        this._logging.internalValue = value;
    }
    resetLogging() {
        this._logging.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get loggingInput() {
        return this._logging.internalValue;
    }
    // ratelimit - computed: true, optional: true, required: false
    _ratelimit = new RulesetRulesRatelimitOutputReference(this, "ratelimit");
    get ratelimit() {
        return this._ratelimit;
    }
    putRatelimit(value) {
        this._ratelimit.internalValue = value;
    }
    resetRatelimit() {
        this._ratelimit.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ratelimitInput() {
        return this._ratelimit.internalValue;
    }
    // ref - computed: true, optional: true, required: false
    _ref;
    get ref() {
        return this.getStringAttribute('ref');
    }
    set ref(value) {
        this._ref = value;
    }
    resetRef() {
        this._ref = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get refInput() {
        return this._ref;
    }
}
export class RulesetRulesList extends cdktf.ComplexList {
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
        return new RulesetRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset cloudflare_ruleset}
*/
export class Ruleset extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_ruleset";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a Ruleset resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Ruleset to import
    * @param importFromId The id of the existing Ruleset that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Ruleset to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_ruleset", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset cloudflare_ruleset} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RulesetConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_ruleset',
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
        this._description = config.description;
        this._kind = config.kind;
        this._name = config.name;
        this._phase = config.phase;
        this._rules.internalValue = config.rules;
        this._zoneId = config.zoneId;
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
    // description - computed: true, optional: true, required: false
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
    // kind - computed: false, optional: false, required: true
    _kind;
    get kind() {
        return this.getStringAttribute('kind');
    }
    set kind(value) {
        this._kind = value;
    }
    // Temporarily expose input value. Use with caution.
    get kindInput() {
        return this._kind;
    }
    // last_updated - computed: true, optional: false, required: false
    get lastUpdated() {
        return this.getStringAttribute('last_updated');
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
    // phase - computed: false, optional: false, required: true
    _phase;
    get phase() {
        return this.getStringAttribute('phase');
    }
    set phase(value) {
        this._phase = value;
    }
    // Temporarily expose input value. Use with caution.
    get phaseInput() {
        return this._phase;
    }
    // rules - computed: true, optional: true, required: false
    _rules = new RulesetRulesList(this, "rules", false);
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
    // version - computed: true, optional: false, required: false
    get version() {
        return this.getStringAttribute('version');
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
            account_id: cdktf.stringToTerraform(this._accountId),
            description: cdktf.stringToTerraform(this._description),
            kind: cdktf.stringToTerraform(this._kind),
            name: cdktf.stringToTerraform(this._name),
            phase: cdktf.stringToTerraform(this._phase),
            rules: cdktf.listMapper(rulesetRulesToTerraform, false)(this._rules.internalValue),
            zone_id: cdktf.stringToTerraform(this._zoneId),
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
            description: {
                value: cdktf.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            kind: {
                value: cdktf.stringToHclTerraform(this._kind),
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
            phase: {
                value: cdktf.stringToHclTerraform(this._phase),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            rules: {
                value: cdktf.listMapperHcl(rulesetRulesToHclTerraform, false)(this._rules.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "RulesetRulesList",
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
