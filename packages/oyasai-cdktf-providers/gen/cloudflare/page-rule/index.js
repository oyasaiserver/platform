// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_rule
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function pageRuleActionsCacheKeyFieldsCookieToTerraform(struct) {
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
export function pageRuleActionsCacheKeyFieldsCookieToHclTerraform(struct) {
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
export class PageRuleActionsCacheKeyFieldsCookieOutputReference extends cdktf.ComplexObject {
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
export function pageRuleActionsCacheKeyFieldsHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        check_presence: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.checkPresence),
        exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.exclude),
        include: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.include),
    };
}
export function pageRuleActionsCacheKeyFieldsHeaderToHclTerraform(struct) {
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
export class PageRuleActionsCacheKeyFieldsHeaderOutputReference extends cdktf.ComplexObject {
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
            this.resolvableValue = undefined;
            this._checkPresence = undefined;
            this._exclude = undefined;
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
            this._exclude = value.exclude;
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
    // exclude - computed: true, optional: true, required: false
    _exclude;
    get exclude() {
        return this.getListAttribute('exclude');
    }
    set exclude(value) {
        this._exclude = value;
    }
    resetExclude() {
        this._exclude = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get excludeInput() {
        return this._exclude;
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
export function pageRuleActionsCacheKeyFieldsHostToTerraform(struct) {
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
export function pageRuleActionsCacheKeyFieldsHostToHclTerraform(struct) {
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
export class PageRuleActionsCacheKeyFieldsHostOutputReference extends cdktf.ComplexObject {
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
export function pageRuleActionsCacheKeyFieldsQueryStringToTerraform(struct) {
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
export function pageRuleActionsCacheKeyFieldsQueryStringToHclTerraform(struct) {
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
export class PageRuleActionsCacheKeyFieldsQueryStringOutputReference extends cdktf.ComplexObject {
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
            this.resolvableValue = undefined;
            this._exclude = undefined;
            this._include = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._exclude = value.exclude;
            this._include = value.include;
        }
    }
    // exclude - computed: true, optional: true, required: false
    _exclude;
    get exclude() {
        return this.getListAttribute('exclude');
    }
    set exclude(value) {
        this._exclude = value;
    }
    resetExclude() {
        this._exclude = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get excludeInput() {
        return this._exclude;
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
export function pageRuleActionsCacheKeyFieldsUserToTerraform(struct) {
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
export function pageRuleActionsCacheKeyFieldsUserToHclTerraform(struct) {
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
export class PageRuleActionsCacheKeyFieldsUserOutputReference extends cdktf.ComplexObject {
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
export function pageRuleActionsCacheKeyFieldsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cookie: pageRuleActionsCacheKeyFieldsCookieToTerraform(struct.cookie),
        header: pageRuleActionsCacheKeyFieldsHeaderToTerraform(struct.header),
        host: pageRuleActionsCacheKeyFieldsHostToTerraform(struct.host),
        query_string: pageRuleActionsCacheKeyFieldsQueryStringToTerraform(struct.queryString),
        user: pageRuleActionsCacheKeyFieldsUserToTerraform(struct.user),
    };
}
export function pageRuleActionsCacheKeyFieldsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        cookie: {
            value: pageRuleActionsCacheKeyFieldsCookieToHclTerraform(struct.cookie),
            isBlock: true,
            type: "struct",
            storageClassType: "PageRuleActionsCacheKeyFieldsCookie",
        },
        header: {
            value: pageRuleActionsCacheKeyFieldsHeaderToHclTerraform(struct.header),
            isBlock: true,
            type: "struct",
            storageClassType: "PageRuleActionsCacheKeyFieldsHeader",
        },
        host: {
            value: pageRuleActionsCacheKeyFieldsHostToHclTerraform(struct.host),
            isBlock: true,
            type: "struct",
            storageClassType: "PageRuleActionsCacheKeyFieldsHost",
        },
        query_string: {
            value: pageRuleActionsCacheKeyFieldsQueryStringToHclTerraform(struct.queryString),
            isBlock: true,
            type: "struct",
            storageClassType: "PageRuleActionsCacheKeyFieldsQueryString",
        },
        user: {
            value: pageRuleActionsCacheKeyFieldsUserToHclTerraform(struct.user),
            isBlock: true,
            type: "struct",
            storageClassType: "PageRuleActionsCacheKeyFieldsUser",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class PageRuleActionsCacheKeyFieldsOutputReference extends cdktf.ComplexObject {
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
    // cookie - computed: false, optional: true, required: false
    _cookie = new PageRuleActionsCacheKeyFieldsCookieOutputReference(this, "cookie");
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
    // header - computed: false, optional: true, required: false
    _header = new PageRuleActionsCacheKeyFieldsHeaderOutputReference(this, "header");
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
    _host = new PageRuleActionsCacheKeyFieldsHostOutputReference(this, "host");
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
    // query_string - computed: false, optional: true, required: false
    _queryString = new PageRuleActionsCacheKeyFieldsQueryStringOutputReference(this, "query_string");
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
    _user = new PageRuleActionsCacheKeyFieldsUserOutputReference(this, "user");
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
export function pageRuleActionsForwardingUrlToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        status_code: cdktf.numberToTerraform(struct.statusCode),
        url: cdktf.stringToTerraform(struct.url),
    };
}
export function pageRuleActionsForwardingUrlToHclTerraform(struct) {
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
export class PageRuleActionsForwardingUrlOutputReference extends cdktf.ComplexObject {
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
        if (this._statusCode !== undefined) {
            hasAnyValues = true;
            internalValueResult.statusCode = this._statusCode;
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
            this._statusCode = undefined;
            this._url = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._statusCode = value.statusCode;
            this._url = value.url;
        }
    }
    // status_code - computed: false, optional: false, required: true
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
    // url - computed: false, optional: false, required: true
    _url;
    get url() {
        return this.getStringAttribute('url');
    }
    set url(value) {
        this._url = value;
    }
    // Temporarily expose input value. Use with caution.
    get urlInput() {
        return this._url;
    }
}
export function pageRuleActionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        always_use_https: cdktf.booleanToTerraform(struct.alwaysUseHttps),
        automatic_https_rewrites: cdktf.stringToTerraform(struct.automaticHttpsRewrites),
        browser_cache_ttl: cdktf.numberToTerraform(struct.browserCacheTtl),
        browser_check: cdktf.stringToTerraform(struct.browserCheck),
        bypass_cache_on_cookie: cdktf.stringToTerraform(struct.bypassCacheOnCookie),
        cache_by_device_type: cdktf.stringToTerraform(struct.cacheByDeviceType),
        cache_deception_armor: cdktf.stringToTerraform(struct.cacheDeceptionArmor),
        cache_key_fields: pageRuleActionsCacheKeyFieldsToTerraform(struct.cacheKeyFields),
        cache_level: cdktf.stringToTerraform(struct.cacheLevel),
        cache_on_cookie: cdktf.stringToTerraform(struct.cacheOnCookie),
        cache_ttl_by_status: cdktf.hashMapper(cdktf.stringToTerraform)(struct.cacheTtlByStatus),
        disable_apps: cdktf.booleanToTerraform(struct.disableApps),
        disable_performance: cdktf.booleanToTerraform(struct.disablePerformance),
        disable_security: cdktf.booleanToTerraform(struct.disableSecurity),
        disable_zaraz: cdktf.booleanToTerraform(struct.disableZaraz),
        edge_cache_ttl: cdktf.numberToTerraform(struct.edgeCacheTtl),
        email_obfuscation: cdktf.stringToTerraform(struct.emailObfuscation),
        explicit_cache_control: cdktf.stringToTerraform(struct.explicitCacheControl),
        forwarding_url: pageRuleActionsForwardingUrlToTerraform(struct.forwardingUrl),
        host_header_override: cdktf.stringToTerraform(struct.hostHeaderOverride),
        ip_geolocation: cdktf.stringToTerraform(struct.ipGeolocation),
        mirage: cdktf.stringToTerraform(struct.mirage),
        opportunistic_encryption: cdktf.stringToTerraform(struct.opportunisticEncryption),
        origin_error_page_pass_thru: cdktf.stringToTerraform(struct.originErrorPagePassThru),
        polish: cdktf.stringToTerraform(struct.polish),
        resolve_override: cdktf.stringToTerraform(struct.resolveOverride),
        respect_strong_etag: cdktf.stringToTerraform(struct.respectStrongEtag),
        response_buffering: cdktf.stringToTerraform(struct.responseBuffering),
        rocket_loader: cdktf.stringToTerraform(struct.rocketLoader),
        security_level: cdktf.stringToTerraform(struct.securityLevel),
        sort_query_string_for_cache: cdktf.stringToTerraform(struct.sortQueryStringForCache),
        ssl: cdktf.stringToTerraform(struct.ssl),
        true_client_ip_header: cdktf.stringToTerraform(struct.trueClientIpHeader),
        waf: cdktf.stringToTerraform(struct.waf),
    };
}
export function pageRuleActionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        always_use_https: {
            value: cdktf.booleanToHclTerraform(struct.alwaysUseHttps),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        automatic_https_rewrites: {
            value: cdktf.stringToHclTerraform(struct.automaticHttpsRewrites),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        browser_cache_ttl: {
            value: cdktf.numberToHclTerraform(struct.browserCacheTtl),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        browser_check: {
            value: cdktf.stringToHclTerraform(struct.browserCheck),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        bypass_cache_on_cookie: {
            value: cdktf.stringToHclTerraform(struct.bypassCacheOnCookie),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cache_by_device_type: {
            value: cdktf.stringToHclTerraform(struct.cacheByDeviceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cache_deception_armor: {
            value: cdktf.stringToHclTerraform(struct.cacheDeceptionArmor),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cache_key_fields: {
            value: pageRuleActionsCacheKeyFieldsToHclTerraform(struct.cacheKeyFields),
            isBlock: true,
            type: "struct",
            storageClassType: "PageRuleActionsCacheKeyFields",
        },
        cache_level: {
            value: cdktf.stringToHclTerraform(struct.cacheLevel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cache_on_cookie: {
            value: cdktf.stringToHclTerraform(struct.cacheOnCookie),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cache_ttl_by_status: {
            value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct.cacheTtlByStatus),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        disable_apps: {
            value: cdktf.booleanToHclTerraform(struct.disableApps),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        disable_performance: {
            value: cdktf.booleanToHclTerraform(struct.disablePerformance),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        disable_security: {
            value: cdktf.booleanToHclTerraform(struct.disableSecurity),
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
        edge_cache_ttl: {
            value: cdktf.numberToHclTerraform(struct.edgeCacheTtl),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        email_obfuscation: {
            value: cdktf.stringToHclTerraform(struct.emailObfuscation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        explicit_cache_control: {
            value: cdktf.stringToHclTerraform(struct.explicitCacheControl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        forwarding_url: {
            value: pageRuleActionsForwardingUrlToHclTerraform(struct.forwardingUrl),
            isBlock: true,
            type: "struct",
            storageClassType: "PageRuleActionsForwardingUrl",
        },
        host_header_override: {
            value: cdktf.stringToHclTerraform(struct.hostHeaderOverride),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ip_geolocation: {
            value: cdktf.stringToHclTerraform(struct.ipGeolocation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mirage: {
            value: cdktf.stringToHclTerraform(struct.mirage),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        opportunistic_encryption: {
            value: cdktf.stringToHclTerraform(struct.opportunisticEncryption),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        origin_error_page_pass_thru: {
            value: cdktf.stringToHclTerraform(struct.originErrorPagePassThru),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        polish: {
            value: cdktf.stringToHclTerraform(struct.polish),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        resolve_override: {
            value: cdktf.stringToHclTerraform(struct.resolveOverride),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        respect_strong_etag: {
            value: cdktf.stringToHclTerraform(struct.respectStrongEtag),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        response_buffering: {
            value: cdktf.stringToHclTerraform(struct.responseBuffering),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        rocket_loader: {
            value: cdktf.stringToHclTerraform(struct.rocketLoader),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        security_level: {
            value: cdktf.stringToHclTerraform(struct.securityLevel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sort_query_string_for_cache: {
            value: cdktf.stringToHclTerraform(struct.sortQueryStringForCache),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ssl: {
            value: cdktf.stringToHclTerraform(struct.ssl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        true_client_ip_header: {
            value: cdktf.stringToHclTerraform(struct.trueClientIpHeader),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        waf: {
            value: cdktf.stringToHclTerraform(struct.waf),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class PageRuleActionsOutputReference extends cdktf.ComplexObject {
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
        if (this._alwaysUseHttps !== undefined) {
            hasAnyValues = true;
            internalValueResult.alwaysUseHttps = this._alwaysUseHttps;
        }
        if (this._automaticHttpsRewrites !== undefined) {
            hasAnyValues = true;
            internalValueResult.automaticHttpsRewrites = this._automaticHttpsRewrites;
        }
        if (this._browserCacheTtl !== undefined) {
            hasAnyValues = true;
            internalValueResult.browserCacheTtl = this._browserCacheTtl;
        }
        if (this._browserCheck !== undefined) {
            hasAnyValues = true;
            internalValueResult.browserCheck = this._browserCheck;
        }
        if (this._bypassCacheOnCookie !== undefined) {
            hasAnyValues = true;
            internalValueResult.bypassCacheOnCookie = this._bypassCacheOnCookie;
        }
        if (this._cacheByDeviceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.cacheByDeviceType = this._cacheByDeviceType;
        }
        if (this._cacheDeceptionArmor !== undefined) {
            hasAnyValues = true;
            internalValueResult.cacheDeceptionArmor = this._cacheDeceptionArmor;
        }
        if (this._cacheKeyFields?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.cacheKeyFields = this._cacheKeyFields?.internalValue;
        }
        if (this._cacheLevel !== undefined) {
            hasAnyValues = true;
            internalValueResult.cacheLevel = this._cacheLevel;
        }
        if (this._cacheOnCookie !== undefined) {
            hasAnyValues = true;
            internalValueResult.cacheOnCookie = this._cacheOnCookie;
        }
        if (this._cacheTtlByStatus !== undefined) {
            hasAnyValues = true;
            internalValueResult.cacheTtlByStatus = this._cacheTtlByStatus;
        }
        if (this._disableApps !== undefined) {
            hasAnyValues = true;
            internalValueResult.disableApps = this._disableApps;
        }
        if (this._disablePerformance !== undefined) {
            hasAnyValues = true;
            internalValueResult.disablePerformance = this._disablePerformance;
        }
        if (this._disableSecurity !== undefined) {
            hasAnyValues = true;
            internalValueResult.disableSecurity = this._disableSecurity;
        }
        if (this._disableZaraz !== undefined) {
            hasAnyValues = true;
            internalValueResult.disableZaraz = this._disableZaraz;
        }
        if (this._edgeCacheTtl !== undefined) {
            hasAnyValues = true;
            internalValueResult.edgeCacheTtl = this._edgeCacheTtl;
        }
        if (this._emailObfuscation !== undefined) {
            hasAnyValues = true;
            internalValueResult.emailObfuscation = this._emailObfuscation;
        }
        if (this._explicitCacheControl !== undefined) {
            hasAnyValues = true;
            internalValueResult.explicitCacheControl = this._explicitCacheControl;
        }
        if (this._forwardingUrl?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.forwardingUrl = this._forwardingUrl?.internalValue;
        }
        if (this._hostHeaderOverride !== undefined) {
            hasAnyValues = true;
            internalValueResult.hostHeaderOverride = this._hostHeaderOverride;
        }
        if (this._ipGeolocation !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipGeolocation = this._ipGeolocation;
        }
        if (this._mirage !== undefined) {
            hasAnyValues = true;
            internalValueResult.mirage = this._mirage;
        }
        if (this._opportunisticEncryption !== undefined) {
            hasAnyValues = true;
            internalValueResult.opportunisticEncryption = this._opportunisticEncryption;
        }
        if (this._originErrorPagePassThru !== undefined) {
            hasAnyValues = true;
            internalValueResult.originErrorPagePassThru = this._originErrorPagePassThru;
        }
        if (this._polish !== undefined) {
            hasAnyValues = true;
            internalValueResult.polish = this._polish;
        }
        if (this._resolveOverride !== undefined) {
            hasAnyValues = true;
            internalValueResult.resolveOverride = this._resolveOverride;
        }
        if (this._respectStrongEtag !== undefined) {
            hasAnyValues = true;
            internalValueResult.respectStrongEtag = this._respectStrongEtag;
        }
        if (this._responseBuffering !== undefined) {
            hasAnyValues = true;
            internalValueResult.responseBuffering = this._responseBuffering;
        }
        if (this._rocketLoader !== undefined) {
            hasAnyValues = true;
            internalValueResult.rocketLoader = this._rocketLoader;
        }
        if (this._securityLevel !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityLevel = this._securityLevel;
        }
        if (this._sortQueryStringForCache !== undefined) {
            hasAnyValues = true;
            internalValueResult.sortQueryStringForCache = this._sortQueryStringForCache;
        }
        if (this._ssl !== undefined) {
            hasAnyValues = true;
            internalValueResult.ssl = this._ssl;
        }
        if (this._trueClientIpHeader !== undefined) {
            hasAnyValues = true;
            internalValueResult.trueClientIpHeader = this._trueClientIpHeader;
        }
        if (this._waf !== undefined) {
            hasAnyValues = true;
            internalValueResult.waf = this._waf;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._alwaysUseHttps = undefined;
            this._automaticHttpsRewrites = undefined;
            this._browserCacheTtl = undefined;
            this._browserCheck = undefined;
            this._bypassCacheOnCookie = undefined;
            this._cacheByDeviceType = undefined;
            this._cacheDeceptionArmor = undefined;
            this._cacheKeyFields.internalValue = undefined;
            this._cacheLevel = undefined;
            this._cacheOnCookie = undefined;
            this._cacheTtlByStatus = undefined;
            this._disableApps = undefined;
            this._disablePerformance = undefined;
            this._disableSecurity = undefined;
            this._disableZaraz = undefined;
            this._edgeCacheTtl = undefined;
            this._emailObfuscation = undefined;
            this._explicitCacheControl = undefined;
            this._forwardingUrl.internalValue = undefined;
            this._hostHeaderOverride = undefined;
            this._ipGeolocation = undefined;
            this._mirage = undefined;
            this._opportunisticEncryption = undefined;
            this._originErrorPagePassThru = undefined;
            this._polish = undefined;
            this._resolveOverride = undefined;
            this._respectStrongEtag = undefined;
            this._responseBuffering = undefined;
            this._rocketLoader = undefined;
            this._securityLevel = undefined;
            this._sortQueryStringForCache = undefined;
            this._ssl = undefined;
            this._trueClientIpHeader = undefined;
            this._waf = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._alwaysUseHttps = value.alwaysUseHttps;
            this._automaticHttpsRewrites = value.automaticHttpsRewrites;
            this._browserCacheTtl = value.browserCacheTtl;
            this._browserCheck = value.browserCheck;
            this._bypassCacheOnCookie = value.bypassCacheOnCookie;
            this._cacheByDeviceType = value.cacheByDeviceType;
            this._cacheDeceptionArmor = value.cacheDeceptionArmor;
            this._cacheKeyFields.internalValue = value.cacheKeyFields;
            this._cacheLevel = value.cacheLevel;
            this._cacheOnCookie = value.cacheOnCookie;
            this._cacheTtlByStatus = value.cacheTtlByStatus;
            this._disableApps = value.disableApps;
            this._disablePerformance = value.disablePerformance;
            this._disableSecurity = value.disableSecurity;
            this._disableZaraz = value.disableZaraz;
            this._edgeCacheTtl = value.edgeCacheTtl;
            this._emailObfuscation = value.emailObfuscation;
            this._explicitCacheControl = value.explicitCacheControl;
            this._forwardingUrl.internalValue = value.forwardingUrl;
            this._hostHeaderOverride = value.hostHeaderOverride;
            this._ipGeolocation = value.ipGeolocation;
            this._mirage = value.mirage;
            this._opportunisticEncryption = value.opportunisticEncryption;
            this._originErrorPagePassThru = value.originErrorPagePassThru;
            this._polish = value.polish;
            this._resolveOverride = value.resolveOverride;
            this._respectStrongEtag = value.respectStrongEtag;
            this._responseBuffering = value.responseBuffering;
            this._rocketLoader = value.rocketLoader;
            this._securityLevel = value.securityLevel;
            this._sortQueryStringForCache = value.sortQueryStringForCache;
            this._ssl = value.ssl;
            this._trueClientIpHeader = value.trueClientIpHeader;
            this._waf = value.waf;
        }
    }
    // always_use_https - computed: false, optional: true, required: false
    _alwaysUseHttps;
    get alwaysUseHttps() {
        return this.getBooleanAttribute('always_use_https');
    }
    set alwaysUseHttps(value) {
        this._alwaysUseHttps = value;
    }
    resetAlwaysUseHttps() {
        this._alwaysUseHttps = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get alwaysUseHttpsInput() {
        return this._alwaysUseHttps;
    }
    // automatic_https_rewrites - computed: false, optional: true, required: false
    _automaticHttpsRewrites;
    get automaticHttpsRewrites() {
        return this.getStringAttribute('automatic_https_rewrites');
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
    // browser_cache_ttl - computed: false, optional: true, required: false
    _browserCacheTtl;
    get browserCacheTtl() {
        return this.getNumberAttribute('browser_cache_ttl');
    }
    set browserCacheTtl(value) {
        this._browserCacheTtl = value;
    }
    resetBrowserCacheTtl() {
        this._browserCacheTtl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get browserCacheTtlInput() {
        return this._browserCacheTtl;
    }
    // browser_check - computed: false, optional: true, required: false
    _browserCheck;
    get browserCheck() {
        return this.getStringAttribute('browser_check');
    }
    set browserCheck(value) {
        this._browserCheck = value;
    }
    resetBrowserCheck() {
        this._browserCheck = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get browserCheckInput() {
        return this._browserCheck;
    }
    // bypass_cache_on_cookie - computed: false, optional: true, required: false
    _bypassCacheOnCookie;
    get bypassCacheOnCookie() {
        return this.getStringAttribute('bypass_cache_on_cookie');
    }
    set bypassCacheOnCookie(value) {
        this._bypassCacheOnCookie = value;
    }
    resetBypassCacheOnCookie() {
        this._bypassCacheOnCookie = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bypassCacheOnCookieInput() {
        return this._bypassCacheOnCookie;
    }
    // cache_by_device_type - computed: false, optional: true, required: false
    _cacheByDeviceType;
    get cacheByDeviceType() {
        return this.getStringAttribute('cache_by_device_type');
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
    // cache_deception_armor - computed: false, optional: true, required: false
    _cacheDeceptionArmor;
    get cacheDeceptionArmor() {
        return this.getStringAttribute('cache_deception_armor');
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
    // cache_key_fields - computed: false, optional: true, required: false
    _cacheKeyFields = new PageRuleActionsCacheKeyFieldsOutputReference(this, "cache_key_fields");
    get cacheKeyFields() {
        return this._cacheKeyFields;
    }
    putCacheKeyFields(value) {
        this._cacheKeyFields.internalValue = value;
    }
    resetCacheKeyFields() {
        this._cacheKeyFields.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cacheKeyFieldsInput() {
        return this._cacheKeyFields.internalValue;
    }
    // cache_level - computed: false, optional: true, required: false
    _cacheLevel;
    get cacheLevel() {
        return this.getStringAttribute('cache_level');
    }
    set cacheLevel(value) {
        this._cacheLevel = value;
    }
    resetCacheLevel() {
        this._cacheLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cacheLevelInput() {
        return this._cacheLevel;
    }
    // cache_on_cookie - computed: false, optional: true, required: false
    _cacheOnCookie;
    get cacheOnCookie() {
        return this.getStringAttribute('cache_on_cookie');
    }
    set cacheOnCookie(value) {
        this._cacheOnCookie = value;
    }
    resetCacheOnCookie() {
        this._cacheOnCookie = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cacheOnCookieInput() {
        return this._cacheOnCookie;
    }
    // cache_ttl_by_status - computed: false, optional: true, required: false
    _cacheTtlByStatus;
    get cacheTtlByStatus() {
        return this.getStringMapAttribute('cache_ttl_by_status');
    }
    set cacheTtlByStatus(value) {
        this._cacheTtlByStatus = value;
    }
    resetCacheTtlByStatus() {
        this._cacheTtlByStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cacheTtlByStatusInput() {
        return this._cacheTtlByStatus;
    }
    // disable_apps - computed: false, optional: true, required: false
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
    // disable_performance - computed: false, optional: true, required: false
    _disablePerformance;
    get disablePerformance() {
        return this.getBooleanAttribute('disable_performance');
    }
    set disablePerformance(value) {
        this._disablePerformance = value;
    }
    resetDisablePerformance() {
        this._disablePerformance = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get disablePerformanceInput() {
        return this._disablePerformance;
    }
    // disable_security - computed: false, optional: true, required: false
    _disableSecurity;
    get disableSecurity() {
        return this.getBooleanAttribute('disable_security');
    }
    set disableSecurity(value) {
        this._disableSecurity = value;
    }
    resetDisableSecurity() {
        this._disableSecurity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get disableSecurityInput() {
        return this._disableSecurity;
    }
    // disable_zaraz - computed: false, optional: true, required: false
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
    // edge_cache_ttl - computed: false, optional: true, required: false
    _edgeCacheTtl;
    get edgeCacheTtl() {
        return this.getNumberAttribute('edge_cache_ttl');
    }
    set edgeCacheTtl(value) {
        this._edgeCacheTtl = value;
    }
    resetEdgeCacheTtl() {
        this._edgeCacheTtl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get edgeCacheTtlInput() {
        return this._edgeCacheTtl;
    }
    // email_obfuscation - computed: false, optional: true, required: false
    _emailObfuscation;
    get emailObfuscation() {
        return this.getStringAttribute('email_obfuscation');
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
    // explicit_cache_control - computed: false, optional: true, required: false
    _explicitCacheControl;
    get explicitCacheControl() {
        return this.getStringAttribute('explicit_cache_control');
    }
    set explicitCacheControl(value) {
        this._explicitCacheControl = value;
    }
    resetExplicitCacheControl() {
        this._explicitCacheControl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get explicitCacheControlInput() {
        return this._explicitCacheControl;
    }
    // forwarding_url - computed: false, optional: true, required: false
    _forwardingUrl = new PageRuleActionsForwardingUrlOutputReference(this, "forwarding_url");
    get forwardingUrl() {
        return this._forwardingUrl;
    }
    putForwardingUrl(value) {
        this._forwardingUrl.internalValue = value;
    }
    resetForwardingUrl() {
        this._forwardingUrl.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get forwardingUrlInput() {
        return this._forwardingUrl.internalValue;
    }
    // host_header_override - computed: false, optional: true, required: false
    _hostHeaderOverride;
    get hostHeaderOverride() {
        return this.getStringAttribute('host_header_override');
    }
    set hostHeaderOverride(value) {
        this._hostHeaderOverride = value;
    }
    resetHostHeaderOverride() {
        this._hostHeaderOverride = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hostHeaderOverrideInput() {
        return this._hostHeaderOverride;
    }
    // ip_geolocation - computed: false, optional: true, required: false
    _ipGeolocation;
    get ipGeolocation() {
        return this.getStringAttribute('ip_geolocation');
    }
    set ipGeolocation(value) {
        this._ipGeolocation = value;
    }
    resetIpGeolocation() {
        this._ipGeolocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipGeolocationInput() {
        return this._ipGeolocation;
    }
    // mirage - computed: false, optional: true, required: false
    _mirage;
    get mirage() {
        return this.getStringAttribute('mirage');
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
    // opportunistic_encryption - computed: false, optional: true, required: false
    _opportunisticEncryption;
    get opportunisticEncryption() {
        return this.getStringAttribute('opportunistic_encryption');
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
    // origin_error_page_pass_thru - computed: false, optional: true, required: false
    _originErrorPagePassThru;
    get originErrorPagePassThru() {
        return this.getStringAttribute('origin_error_page_pass_thru');
    }
    set originErrorPagePassThru(value) {
        this._originErrorPagePassThru = value;
    }
    resetOriginErrorPagePassThru() {
        this._originErrorPagePassThru = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get originErrorPagePassThruInput() {
        return this._originErrorPagePassThru;
    }
    // polish - computed: false, optional: true, required: false
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
    // resolve_override - computed: false, optional: true, required: false
    _resolveOverride;
    get resolveOverride() {
        return this.getStringAttribute('resolve_override');
    }
    set resolveOverride(value) {
        this._resolveOverride = value;
    }
    resetResolveOverride() {
        this._resolveOverride = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get resolveOverrideInput() {
        return this._resolveOverride;
    }
    // respect_strong_etag - computed: false, optional: true, required: false
    _respectStrongEtag;
    get respectStrongEtag() {
        return this.getStringAttribute('respect_strong_etag');
    }
    set respectStrongEtag(value) {
        this._respectStrongEtag = value;
    }
    resetRespectStrongEtag() {
        this._respectStrongEtag = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get respectStrongEtagInput() {
        return this._respectStrongEtag;
    }
    // response_buffering - computed: false, optional: true, required: false
    _responseBuffering;
    get responseBuffering() {
        return this.getStringAttribute('response_buffering');
    }
    set responseBuffering(value) {
        this._responseBuffering = value;
    }
    resetResponseBuffering() {
        this._responseBuffering = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get responseBufferingInput() {
        return this._responseBuffering;
    }
    // rocket_loader - computed: false, optional: true, required: false
    _rocketLoader;
    get rocketLoader() {
        return this.getStringAttribute('rocket_loader');
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
    // security_level - computed: false, optional: true, required: false
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
    // sort_query_string_for_cache - computed: false, optional: true, required: false
    _sortQueryStringForCache;
    get sortQueryStringForCache() {
        return this.getStringAttribute('sort_query_string_for_cache');
    }
    set sortQueryStringForCache(value) {
        this._sortQueryStringForCache = value;
    }
    resetSortQueryStringForCache() {
        this._sortQueryStringForCache = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sortQueryStringForCacheInput() {
        return this._sortQueryStringForCache;
    }
    // ssl - computed: false, optional: true, required: false
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
    // true_client_ip_header - computed: false, optional: true, required: false
    _trueClientIpHeader;
    get trueClientIpHeader() {
        return this.getStringAttribute('true_client_ip_header');
    }
    set trueClientIpHeader(value) {
        this._trueClientIpHeader = value;
    }
    resetTrueClientIpHeader() {
        this._trueClientIpHeader = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get trueClientIpHeaderInput() {
        return this._trueClientIpHeader;
    }
    // waf - computed: false, optional: true, required: false
    _waf;
    get waf() {
        return this.getStringAttribute('waf');
    }
    set waf(value) {
        this._waf = value;
    }
    resetWaf() {
        this._waf = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get wafInput() {
        return this._waf;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_rule cloudflare_page_rule}
*/
export class PageRule extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_page_rule";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a PageRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the PageRule to import
    * @param importFromId The id of the existing PageRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the PageRule to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_page_rule", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_rule cloudflare_page_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PageRuleConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_page_rule',
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
        this._actions.internalValue = config.actions;
        this._priority = config.priority;
        this._status = config.status;
        this._target = config.target;
        this._zoneId = config.zoneId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // actions - computed: false, optional: false, required: true
    _actions = new PageRuleActionsOutputReference(this, "actions");
    get actions() {
        return this._actions;
    }
    putActions(value) {
        this._actions.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get actionsInput() {
        return this._actions.internalValue;
    }
    // created_on - computed: true, optional: false, required: false
    get createdOn() {
        return this.getStringAttribute('created_on');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // modified_on - computed: true, optional: false, required: false
    get modifiedOn() {
        return this.getStringAttribute('modified_on');
    }
    // priority - computed: true, optional: true, required: false
    _priority;
    get priority() {
        return this.getNumberAttribute('priority');
    }
    set priority(value) {
        this._priority = value;
    }
    resetPriority() {
        this._priority = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get priorityInput() {
        return this._priority;
    }
    // status - computed: true, optional: true, required: false
    _status;
    get status() {
        return this.getStringAttribute('status');
    }
    set status(value) {
        this._status = value;
    }
    resetStatus() {
        this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get statusInput() {
        return this._status;
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
            actions: pageRuleActionsToTerraform(this._actions.internalValue),
            priority: cdktf.numberToTerraform(this._priority),
            status: cdktf.stringToTerraform(this._status),
            target: cdktf.stringToTerraform(this._target),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            actions: {
                value: pageRuleActionsToHclTerraform(this._actions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "PageRuleActions",
            },
            priority: {
                value: cdktf.numberToHclTerraform(this._priority),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            status: {
                value: cdktf.stringToHclTerraform(this._status),
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
