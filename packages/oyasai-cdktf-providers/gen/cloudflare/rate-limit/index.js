// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/rate_limit
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function rateLimitActionResponseToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        body: cdktf.stringToTerraform(struct.body),
        content_type: cdktf.stringToTerraform(struct.contentType),
    };
}
export function rateLimitActionResponseToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        body: {
            value: cdktf.stringToHclTerraform(struct.body),
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
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RateLimitActionResponseOutputReference extends cdktf.ComplexObject {
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
        if (this._body !== undefined) {
            hasAnyValues = true;
            internalValueResult.body = this._body;
        }
        if (this._contentType !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentType = this._contentType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._body = undefined;
            this._contentType = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._body = value.body;
            this._contentType = value.contentType;
        }
    }
    // body - computed: false, optional: true, required: false
    _body;
    get body() {
        return this.getStringAttribute('body');
    }
    set body(value) {
        this._body = value;
    }
    resetBody() {
        this._body = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body;
    }
    // content_type - computed: false, optional: true, required: false
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
}
export function rateLimitActionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        mode: cdktf.stringToTerraform(struct.mode),
        response: rateLimitActionResponseToTerraform(struct.response),
        timeout: cdktf.numberToTerraform(struct.timeout),
    };
}
export function rateLimitActionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        mode: {
            value: cdktf.stringToHclTerraform(struct.mode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        response: {
            value: rateLimitActionResponseToHclTerraform(struct.response),
            isBlock: true,
            type: "struct",
            storageClassType: "RateLimitActionResponse",
        },
        timeout: {
            value: cdktf.numberToHclTerraform(struct.timeout),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RateLimitActionOutputReference extends cdktf.ComplexObject {
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
        if (this._mode !== undefined) {
            hasAnyValues = true;
            internalValueResult.mode = this._mode;
        }
        if (this._response?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.response = this._response?.internalValue;
        }
        if (this._timeout !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeout = this._timeout;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._mode = undefined;
            this._response.internalValue = undefined;
            this._timeout = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._mode = value.mode;
            this._response.internalValue = value.response;
            this._timeout = value.timeout;
        }
    }
    // mode - computed: false, optional: true, required: false
    _mode;
    get mode() {
        return this.getStringAttribute('mode');
    }
    set mode(value) {
        this._mode = value;
    }
    resetMode() {
        this._mode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get modeInput() {
        return this._mode;
    }
    // response - computed: false, optional: true, required: false
    _response = new RateLimitActionResponseOutputReference(this, "response");
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
    // timeout - computed: false, optional: true, required: false
    _timeout;
    get timeout() {
        return this.getNumberAttribute('timeout');
    }
    set timeout(value) {
        this._timeout = value;
    }
    resetTimeout() {
        this._timeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get timeoutInput() {
        return this._timeout;
    }
}
export function rateLimitBypassToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function rateLimitBypassToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class RateLimitBypassOutputReference extends cdktf.ComplexObject {
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
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getStringAttribute('value');
    }
}
export class RateLimitBypassList extends cdktf.ComplexList {
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
        return new RateLimitBypassOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function rateLimitMatchHeadersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        op: cdktf.stringToTerraform(struct.op),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function rateLimitMatchHeadersToHclTerraform(struct) {
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
        op: {
            value: cdktf.stringToHclTerraform(struct.op),
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
export class RateLimitMatchHeadersOutputReference extends cdktf.ComplexObject {
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
        if (this._op !== undefined) {
            hasAnyValues = true;
            internalValueResult.op = this._op;
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
            this._name = undefined;
            this._op = undefined;
            this._value = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._op = value.op;
            this._value = value.value;
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
    // op - computed: false, optional: true, required: false
    _op;
    get op() {
        return this.getStringAttribute('op');
    }
    set op(value) {
        this._op = value;
    }
    resetOp() {
        this._op = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get opInput() {
        return this._op;
    }
    // value - computed: false, optional: true, required: false
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
export class RateLimitMatchHeadersList extends cdktf.ComplexList {
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
        return new RateLimitMatchHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function rateLimitMatchRequestToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.methods),
        schemes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.schemes),
        url: cdktf.stringToTerraform(struct.url),
    };
}
export function rateLimitMatchRequestToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        methods: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.methods),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        schemes: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.schemes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        url: {
            value: cdktf.stringToHclTerraform(struct.url),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RateLimitMatchRequestOutputReference extends cdktf.ComplexObject {
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
        if (this._methods !== undefined) {
            hasAnyValues = true;
            internalValueResult.methods = this._methods;
        }
        if (this._schemes !== undefined) {
            hasAnyValues = true;
            internalValueResult.schemes = this._schemes;
        }
        if (this._url !== undefined) {
            hasAnyValues = true;
            internalValueResult.url = this._url;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._methods = undefined;
            this._schemes = undefined;
            this._url = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._methods = value.methods;
            this._schemes = value.schemes;
            this._url = value.url;
        }
    }
    // methods - computed: false, optional: true, required: false
    _methods;
    get methods() {
        return this.getListAttribute('methods');
    }
    set methods(value) {
        this._methods = value;
    }
    resetMethods() {
        this._methods = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodsInput() {
        return this._methods;
    }
    // schemes - computed: false, optional: true, required: false
    _schemes;
    get schemes() {
        return this.getListAttribute('schemes');
    }
    set schemes(value) {
        this._schemes = value;
    }
    resetSchemes() {
        this._schemes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get schemesInput() {
        return this._schemes;
    }
    // url - computed: false, optional: true, required: false
    _url;
    get url() {
        return this.getStringAttribute('url');
    }
    set url(value) {
        this._url = value;
    }
    resetUrl() {
        this._url = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get urlInput() {
        return this._url;
    }
}
export function rateLimitMatchResponseToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        origin_traffic: cdktf.booleanToTerraform(struct.originTraffic),
    };
}
export function rateLimitMatchResponseToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        origin_traffic: {
            value: cdktf.booleanToHclTerraform(struct.originTraffic),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RateLimitMatchResponseOutputReference extends cdktf.ComplexObject {
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
        if (this._originTraffic !== undefined) {
            hasAnyValues = true;
            internalValueResult.originTraffic = this._originTraffic;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._originTraffic = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._originTraffic = value.originTraffic;
        }
    }
    // origin_traffic - computed: false, optional: true, required: false
    _originTraffic;
    get originTraffic() {
        return this.getBooleanAttribute('origin_traffic');
    }
    set originTraffic(value) {
        this._originTraffic = value;
    }
    resetOriginTraffic() {
        this._originTraffic = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get originTrafficInput() {
        return this._originTraffic;
    }
}
export function rateLimitMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        headers: cdktf.listMapper(rateLimitMatchHeadersToTerraform, false)(struct.headers),
        request: rateLimitMatchRequestToTerraform(struct.request),
        response: rateLimitMatchResponseToTerraform(struct.response),
    };
}
export function rateLimitMatchToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        headers: {
            value: cdktf.listMapperHcl(rateLimitMatchHeadersToHclTerraform, false)(struct.headers),
            isBlock: true,
            type: "list",
            storageClassType: "RateLimitMatchHeadersList",
        },
        request: {
            value: rateLimitMatchRequestToHclTerraform(struct.request),
            isBlock: true,
            type: "struct",
            storageClassType: "RateLimitMatchRequest",
        },
        response: {
            value: rateLimitMatchResponseToHclTerraform(struct.response),
            isBlock: true,
            type: "struct",
            storageClassType: "RateLimitMatchResponse",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RateLimitMatchOutputReference extends cdktf.ComplexObject {
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
        if (this._headers?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.headers = this._headers?.internalValue;
        }
        if (this._request?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.request = this._request?.internalValue;
        }
        if (this._response?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.response = this._response?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._headers.internalValue = undefined;
            this._request.internalValue = undefined;
            this._response.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._headers.internalValue = value.headers;
            this._request.internalValue = value.request;
            this._response.internalValue = value.response;
        }
    }
    // headers - computed: false, optional: true, required: false
    _headers = new RateLimitMatchHeadersList(this, "headers", false);
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
    // request - computed: false, optional: true, required: false
    _request = new RateLimitMatchRequestOutputReference(this, "request");
    get request() {
        return this._request;
    }
    putRequest(value) {
        this._request.internalValue = value;
    }
    resetRequest() {
        this._request.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requestInput() {
        return this._request.internalValue;
    }
    // response - computed: false, optional: true, required: false
    _response = new RateLimitMatchResponseOutputReference(this, "response");
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
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/rate_limit cloudflare_rate_limit}
*/
export class RateLimit extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_rate_limit";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a RateLimit resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RateLimit to import
    * @param importFromId The id of the existing RateLimit that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/rate_limit#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RateLimit to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_rate_limit", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/rate_limit cloudflare_rate_limit} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RateLimitConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_rate_limit',
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
        this._action.internalValue = config.action;
        this._match.internalValue = config.match;
        this._period = config.period;
        this._threshold = config.threshold;
        this._zoneId = config.zoneId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // action - computed: false, optional: false, required: true
    _action = new RateLimitActionOutputReference(this, "action");
    get action() {
        return this._action;
    }
    putAction(value) {
        this._action.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get actionInput() {
        return this._action.internalValue;
    }
    // bypass - computed: true, optional: false, required: false
    _bypass = new RateLimitBypassList(this, "bypass", false);
    get bypass() {
        return this._bypass;
    }
    // description - computed: true, optional: false, required: false
    get description() {
        return this.getStringAttribute('description');
    }
    // disabled - computed: true, optional: false, required: false
    get disabled() {
        return this.getBooleanAttribute('disabled');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // match - computed: false, optional: false, required: true
    _match = new RateLimitMatchOutputReference(this, "match");
    get match() {
        return this._match;
    }
    putMatch(value) {
        this._match.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get matchInput() {
        return this._match.internalValue;
    }
    // period - computed: false, optional: false, required: true
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
    // threshold - computed: false, optional: false, required: true
    _threshold;
    get threshold() {
        return this.getNumberAttribute('threshold');
    }
    set threshold(value) {
        this._threshold = value;
    }
    // Temporarily expose input value. Use with caution.
    get thresholdInput() {
        return this._threshold;
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
            action: rateLimitActionToTerraform(this._action.internalValue),
            match: rateLimitMatchToTerraform(this._match.internalValue),
            period: cdktf.numberToTerraform(this._period),
            threshold: cdktf.numberToTerraform(this._threshold),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            action: {
                value: rateLimitActionToHclTerraform(this._action.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "RateLimitAction",
            },
            match: {
                value: rateLimitMatchToHclTerraform(this._match.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "RateLimitMatch",
            },
            period: {
                value: cdktf.numberToHclTerraform(this._period),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            threshold: {
                value: cdktf.numberToHclTerraform(this._threshold),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
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
