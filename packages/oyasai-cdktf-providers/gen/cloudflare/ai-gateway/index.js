// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function aiGatewayDlpPoliciesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        action: cdktf.stringToTerraform(struct.action),
        check: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.check),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        id: cdktf.stringToTerraform(struct.id),
        profiles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.profiles),
    };
}
export function aiGatewayDlpPoliciesToHclTerraform(struct) {
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
        check: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.check),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
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
        profiles: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.profiles),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class AiGatewayDlpPoliciesOutputReference extends cdktf.ComplexObject {
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
        if (this._check !== undefined) {
            hasAnyValues = true;
            internalValueResult.check = this._check;
        }
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._profiles !== undefined) {
            hasAnyValues = true;
            internalValueResult.profiles = this._profiles;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._action = undefined;
            this._check = undefined;
            this._enabled = undefined;
            this._id = undefined;
            this._profiles = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._action = value.action;
            this._check = value.check;
            this._enabled = value.enabled;
            this._id = value.id;
            this._profiles = value.profiles;
        }
    }
    // action - computed: false, optional: false, required: true
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
    // check - computed: false, optional: false, required: true
    _check;
    get check() {
        return this.getListAttribute('check');
    }
    set check(value) {
        this._check = value;
    }
    // Temporarily expose input value. Use with caution.
    get checkInput() {
        return this._check;
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
    // profiles - computed: false, optional: false, required: true
    _profiles;
    get profiles() {
        return this.getListAttribute('profiles');
    }
    set profiles(value) {
        this._profiles = value;
    }
    // Temporarily expose input value. Use with caution.
    get profilesInput() {
        return this._profiles;
    }
}
export class AiGatewayDlpPoliciesList extends cdktf.ComplexList {
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
        return new AiGatewayDlpPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function aiGatewayDlpToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        action: cdktf.stringToTerraform(struct.action),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        policies: cdktf.listMapper(aiGatewayDlpPoliciesToTerraform, false)(struct.policies),
        profiles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.profiles),
    };
}
export function aiGatewayDlpToHclTerraform(struct) {
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
        policies: {
            value: cdktf.listMapperHcl(aiGatewayDlpPoliciesToHclTerraform, false)(struct.policies),
            isBlock: true,
            type: "list",
            storageClassType: "AiGatewayDlpPoliciesList",
        },
        profiles: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.profiles),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class AiGatewayDlpOutputReference extends cdktf.ComplexObject {
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
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._policies?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.policies = this._policies?.internalValue;
        }
        if (this._profiles !== undefined) {
            hasAnyValues = true;
            internalValueResult.profiles = this._profiles;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._action = undefined;
            this._enabled = undefined;
            this._policies.internalValue = undefined;
            this._profiles = undefined;
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
            this._policies.internalValue = value.policies;
            this._profiles = value.profiles;
        }
    }
    // action - computed: false, optional: true, required: false
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
    // policies - computed: false, optional: true, required: false
    _policies = new AiGatewayDlpPoliciesList(this, "policies", false);
    get policies() {
        return this._policies;
    }
    putPolicies(value) {
        this._policies.internalValue = value;
    }
    resetPolicies() {
        this._policies.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get policiesInput() {
        return this._policies.internalValue;
    }
    // profiles - computed: false, optional: true, required: false
    _profiles;
    get profiles() {
        return this.getListAttribute('profiles');
    }
    set profiles(value) {
        this._profiles = value;
    }
    resetProfiles() {
        this._profiles = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get profilesInput() {
        return this._profiles;
    }
}
export function aiGatewayOtelToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        authorization: cdktf.stringToTerraform(struct.authorization),
        content_type: cdktf.stringToTerraform(struct.contentType),
        headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct.headers),
        url: cdktf.stringToTerraform(struct.url),
    };
}
export function aiGatewayOtelToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        authorization: {
            value: cdktf.stringToHclTerraform(struct.authorization),
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
        headers: {
            value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct.headers),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
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
export class AiGatewayOtelOutputReference extends cdktf.ComplexObject {
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
        if (this._authorization !== undefined) {
            hasAnyValues = true;
            internalValueResult.authorization = this._authorization;
        }
        if (this._contentType !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentType = this._contentType;
        }
        if (this._headers !== undefined) {
            hasAnyValues = true;
            internalValueResult.headers = this._headers;
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
            this._authorization = undefined;
            this._contentType = undefined;
            this._headers = undefined;
            this._url = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authorization = value.authorization;
            this._contentType = value.contentType;
            this._headers = value.headers;
            this._url = value.url;
        }
    }
    // authorization - computed: true, optional: false, required: true
    _authorization;
    get authorization() {
        return this.getStringAttribute('authorization');
    }
    set authorization(value) {
        this._authorization = value;
    }
    // Temporarily expose input value. Use with caution.
    get authorizationInput() {
        return this._authorization;
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
    // headers - computed: true, optional: false, required: true
    _headers;
    get headers() {
        return this.getStringMapAttribute('headers');
    }
    set headers(value) {
        this._headers = value;
    }
    // Temporarily expose input value. Use with caution.
    get headersInput() {
        return this._headers;
    }
    // url - computed: true, optional: false, required: true
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
export class AiGatewayOtelList extends cdktf.ComplexList {
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
        return new AiGatewayOtelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function aiGatewayStripeUsageEventsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        payload: cdktf.stringToTerraform(struct.payload),
    };
}
export function aiGatewayStripeUsageEventsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        payload: {
            value: cdktf.stringToHclTerraform(struct.payload),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class AiGatewayStripeUsageEventsOutputReference extends cdktf.ComplexObject {
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
        if (this._payload !== undefined) {
            hasAnyValues = true;
            internalValueResult.payload = this._payload;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._payload = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._payload = value.payload;
        }
    }
    // payload - computed: false, optional: false, required: true
    _payload;
    get payload() {
        return this.getStringAttribute('payload');
    }
    set payload(value) {
        this._payload = value;
    }
    // Temporarily expose input value. Use with caution.
    get payloadInput() {
        return this._payload;
    }
}
export class AiGatewayStripeUsageEventsList extends cdktf.ComplexList {
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
        return new AiGatewayStripeUsageEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function aiGatewayStripeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        authorization: cdktf.stringToTerraform(struct.authorization),
        usage_events: cdktf.listMapper(aiGatewayStripeUsageEventsToTerraform, false)(struct.usageEvents),
    };
}
export function aiGatewayStripeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        authorization: {
            value: cdktf.stringToHclTerraform(struct.authorization),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        usage_events: {
            value: cdktf.listMapperHcl(aiGatewayStripeUsageEventsToHclTerraform, false)(struct.usageEvents),
            isBlock: true,
            type: "list",
            storageClassType: "AiGatewayStripeUsageEventsList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class AiGatewayStripeOutputReference extends cdktf.ComplexObject {
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
        if (this._authorization !== undefined) {
            hasAnyValues = true;
            internalValueResult.authorization = this._authorization;
        }
        if (this._usageEvents?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.usageEvents = this._usageEvents?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authorization = undefined;
            this._usageEvents.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authorization = value.authorization;
            this._usageEvents.internalValue = value.usageEvents;
        }
    }
    // authorization - computed: false, optional: false, required: true
    _authorization;
    get authorization() {
        return this.getStringAttribute('authorization');
    }
    set authorization(value) {
        this._authorization = value;
    }
    // Temporarily expose input value. Use with caution.
    get authorizationInput() {
        return this._authorization;
    }
    // usage_events - computed: false, optional: false, required: true
    _usageEvents = new AiGatewayStripeUsageEventsList(this, "usage_events", false);
    get usageEvents() {
        return this._usageEvents;
    }
    putUsageEvents(value) {
        this._usageEvents.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get usageEventsInput() {
        return this._usageEvents.internalValue;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway cloudflare_ai_gateway}
*/
export class AiGateway extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_ai_gateway";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a AiGateway resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AiGateway to import
    * @param importFromId The id of the existing AiGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AiGateway to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_ai_gateway", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway cloudflare_ai_gateway} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AiGatewayConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_ai_gateway',
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
        this._authentication = config.authentication;
        this._cacheInvalidateOnUpdate = config.cacheInvalidateOnUpdate;
        this._cacheTtl = config.cacheTtl;
        this._collectLogs = config.collectLogs;
        this._dlp.internalValue = config.dlp;
        this._id = config.id;
        this._logManagement = config.logManagement;
        this._logManagementStrategy = config.logManagementStrategy;
        this._logpush = config.logpush;
        this._logpushPublicKey = config.logpushPublicKey;
        this._otel.internalValue = config.otel;
        this._rateLimitingInterval = config.rateLimitingInterval;
        this._rateLimitingLimit = config.rateLimitingLimit;
        this._rateLimitingTechnique = config.rateLimitingTechnique;
        this._retryBackoff = config.retryBackoff;
        this._retryDelay = config.retryDelay;
        this._retryMaxAttempts = config.retryMaxAttempts;
        this._storeId = config.storeId;
        this._stripe.internalValue = config.stripe;
        this._workersAiBillingMode = config.workersAiBillingMode;
        this._zdr = config.zdr;
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
    // authentication - computed: false, optional: true, required: false
    _authentication;
    get authentication() {
        return this.getBooleanAttribute('authentication');
    }
    set authentication(value) {
        this._authentication = value;
    }
    resetAuthentication() {
        this._authentication = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get authenticationInput() {
        return this._authentication;
    }
    // cache_invalidate_on_update - computed: false, optional: false, required: true
    _cacheInvalidateOnUpdate;
    get cacheInvalidateOnUpdate() {
        return this.getBooleanAttribute('cache_invalidate_on_update');
    }
    set cacheInvalidateOnUpdate(value) {
        this._cacheInvalidateOnUpdate = value;
    }
    // Temporarily expose input value. Use with caution.
    get cacheInvalidateOnUpdateInput() {
        return this._cacheInvalidateOnUpdate;
    }
    // cache_ttl - computed: false, optional: false, required: true
    _cacheTtl;
    get cacheTtl() {
        return this.getNumberAttribute('cache_ttl');
    }
    set cacheTtl(value) {
        this._cacheTtl = value;
    }
    // Temporarily expose input value. Use with caution.
    get cacheTtlInput() {
        return this._cacheTtl;
    }
    // collect_logs - computed: false, optional: false, required: true
    _collectLogs;
    get collectLogs() {
        return this.getBooleanAttribute('collect_logs');
    }
    set collectLogs(value) {
        this._collectLogs = value;
    }
    // Temporarily expose input value. Use with caution.
    get collectLogsInput() {
        return this._collectLogs;
    }
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.getStringAttribute('created_at');
    }
    // dlp - computed: false, optional: true, required: false
    _dlp = new AiGatewayDlpOutputReference(this, "dlp");
    get dlp() {
        return this._dlp;
    }
    putDlp(value) {
        this._dlp.internalValue = value;
    }
    resetDlp() {
        this._dlp.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dlpInput() {
        return this._dlp.internalValue;
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
    // is_default - computed: true, optional: false, required: false
    get isDefault() {
        return this.getBooleanAttribute('is_default');
    }
    // log_management - computed: false, optional: true, required: false
    _logManagement;
    get logManagement() {
        return this.getNumberAttribute('log_management');
    }
    set logManagement(value) {
        this._logManagement = value;
    }
    resetLogManagement() {
        this._logManagement = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get logManagementInput() {
        return this._logManagement;
    }
    // log_management_strategy - computed: false, optional: true, required: false
    _logManagementStrategy;
    get logManagementStrategy() {
        return this.getStringAttribute('log_management_strategy');
    }
    set logManagementStrategy(value) {
        this._logManagementStrategy = value;
    }
    resetLogManagementStrategy() {
        this._logManagementStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get logManagementStrategyInput() {
        return this._logManagementStrategy;
    }
    // logpush - computed: false, optional: true, required: false
    _logpush;
    get logpush() {
        return this.getBooleanAttribute('logpush');
    }
    set logpush(value) {
        this._logpush = value;
    }
    resetLogpush() {
        this._logpush = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get logpushInput() {
        return this._logpush;
    }
    // logpush_public_key - computed: false, optional: true, required: false
    _logpushPublicKey;
    get logpushPublicKey() {
        return this.getStringAttribute('logpush_public_key');
    }
    set logpushPublicKey(value) {
        this._logpushPublicKey = value;
    }
    resetLogpushPublicKey() {
        this._logpushPublicKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get logpushPublicKeyInput() {
        return this._logpushPublicKey;
    }
    // modified_at - computed: true, optional: false, required: false
    get modifiedAt() {
        return this.getStringAttribute('modified_at');
    }
    // otel - computed: true, optional: true, required: false
    _otel = new AiGatewayOtelList(this, "otel", false);
    get otel() {
        return this._otel;
    }
    putOtel(value) {
        this._otel.internalValue = value;
    }
    resetOtel() {
        this._otel.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get otelInput() {
        return this._otel.internalValue;
    }
    // rate_limiting_interval - computed: false, optional: false, required: true
    _rateLimitingInterval;
    get rateLimitingInterval() {
        return this.getNumberAttribute('rate_limiting_interval');
    }
    set rateLimitingInterval(value) {
        this._rateLimitingInterval = value;
    }
    // Temporarily expose input value. Use with caution.
    get rateLimitingIntervalInput() {
        return this._rateLimitingInterval;
    }
    // rate_limiting_limit - computed: false, optional: false, required: true
    _rateLimitingLimit;
    get rateLimitingLimit() {
        return this.getNumberAttribute('rate_limiting_limit');
    }
    set rateLimitingLimit(value) {
        this._rateLimitingLimit = value;
    }
    // Temporarily expose input value. Use with caution.
    get rateLimitingLimitInput() {
        return this._rateLimitingLimit;
    }
    // rate_limiting_technique - computed: false, optional: true, required: false
    _rateLimitingTechnique;
    get rateLimitingTechnique() {
        return this.getStringAttribute('rate_limiting_technique');
    }
    set rateLimitingTechnique(value) {
        this._rateLimitingTechnique = value;
    }
    resetRateLimitingTechnique() {
        this._rateLimitingTechnique = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get rateLimitingTechniqueInput() {
        return this._rateLimitingTechnique;
    }
    // retry_backoff - computed: false, optional: true, required: false
    _retryBackoff;
    get retryBackoff() {
        return this.getStringAttribute('retry_backoff');
    }
    set retryBackoff(value) {
        this._retryBackoff = value;
    }
    resetRetryBackoff() {
        this._retryBackoff = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get retryBackoffInput() {
        return this._retryBackoff;
    }
    // retry_delay - computed: false, optional: true, required: false
    _retryDelay;
    get retryDelay() {
        return this.getNumberAttribute('retry_delay');
    }
    set retryDelay(value) {
        this._retryDelay = value;
    }
    resetRetryDelay() {
        this._retryDelay = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get retryDelayInput() {
        return this._retryDelay;
    }
    // retry_max_attempts - computed: false, optional: true, required: false
    _retryMaxAttempts;
    get retryMaxAttempts() {
        return this.getNumberAttribute('retry_max_attempts');
    }
    set retryMaxAttempts(value) {
        this._retryMaxAttempts = value;
    }
    resetRetryMaxAttempts() {
        this._retryMaxAttempts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get retryMaxAttemptsInput() {
        return this._retryMaxAttempts;
    }
    // store_id - computed: false, optional: true, required: false
    _storeId;
    get storeId() {
        return this.getStringAttribute('store_id');
    }
    set storeId(value) {
        this._storeId = value;
    }
    resetStoreId() {
        this._storeId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get storeIdInput() {
        return this._storeId;
    }
    // stripe - computed: false, optional: true, required: false
    _stripe = new AiGatewayStripeOutputReference(this, "stripe");
    get stripe() {
        return this._stripe;
    }
    putStripe(value) {
        this._stripe.internalValue = value;
    }
    resetStripe() {
        this._stripe.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get stripeInput() {
        return this._stripe.internalValue;
    }
    // workers_ai_billing_mode - computed: true, optional: true, required: false
    _workersAiBillingMode;
    get workersAiBillingMode() {
        return this.getStringAttribute('workers_ai_billing_mode');
    }
    set workersAiBillingMode(value) {
        this._workersAiBillingMode = value;
    }
    resetWorkersAiBillingMode() {
        this._workersAiBillingMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get workersAiBillingModeInput() {
        return this._workersAiBillingMode;
    }
    // zdr - computed: false, optional: true, required: false
    _zdr;
    get zdr() {
        return this.getBooleanAttribute('zdr');
    }
    set zdr(value) {
        this._zdr = value;
    }
    resetZdr() {
        this._zdr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get zdrInput() {
        return this._zdr;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            authentication: cdktf.booleanToTerraform(this._authentication),
            cache_invalidate_on_update: cdktf.booleanToTerraform(this._cacheInvalidateOnUpdate),
            cache_ttl: cdktf.numberToTerraform(this._cacheTtl),
            collect_logs: cdktf.booleanToTerraform(this._collectLogs),
            dlp: aiGatewayDlpToTerraform(this._dlp.internalValue),
            id: cdktf.stringToTerraform(this._id),
            log_management: cdktf.numberToTerraform(this._logManagement),
            log_management_strategy: cdktf.stringToTerraform(this._logManagementStrategy),
            logpush: cdktf.booleanToTerraform(this._logpush),
            logpush_public_key: cdktf.stringToTerraform(this._logpushPublicKey),
            otel: cdktf.listMapper(aiGatewayOtelToTerraform, false)(this._otel.internalValue),
            rate_limiting_interval: cdktf.numberToTerraform(this._rateLimitingInterval),
            rate_limiting_limit: cdktf.numberToTerraform(this._rateLimitingLimit),
            rate_limiting_technique: cdktf.stringToTerraform(this._rateLimitingTechnique),
            retry_backoff: cdktf.stringToTerraform(this._retryBackoff),
            retry_delay: cdktf.numberToTerraform(this._retryDelay),
            retry_max_attempts: cdktf.numberToTerraform(this._retryMaxAttempts),
            store_id: cdktf.stringToTerraform(this._storeId),
            stripe: aiGatewayStripeToTerraform(this._stripe.internalValue),
            workers_ai_billing_mode: cdktf.stringToTerraform(this._workersAiBillingMode),
            zdr: cdktf.booleanToTerraform(this._zdr),
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
            authentication: {
                value: cdktf.booleanToHclTerraform(this._authentication),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            cache_invalidate_on_update: {
                value: cdktf.booleanToHclTerraform(this._cacheInvalidateOnUpdate),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            cache_ttl: {
                value: cdktf.numberToHclTerraform(this._cacheTtl),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            collect_logs: {
                value: cdktf.booleanToHclTerraform(this._collectLogs),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            dlp: {
                value: aiGatewayDlpToHclTerraform(this._dlp.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "AiGatewayDlp",
            },
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            log_management: {
                value: cdktf.numberToHclTerraform(this._logManagement),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            log_management_strategy: {
                value: cdktf.stringToHclTerraform(this._logManagementStrategy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            logpush: {
                value: cdktf.booleanToHclTerraform(this._logpush),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            logpush_public_key: {
                value: cdktf.stringToHclTerraform(this._logpushPublicKey),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            otel: {
                value: cdktf.listMapperHcl(aiGatewayOtelToHclTerraform, false)(this._otel.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "AiGatewayOtelList",
            },
            rate_limiting_interval: {
                value: cdktf.numberToHclTerraform(this._rateLimitingInterval),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            rate_limiting_limit: {
                value: cdktf.numberToHclTerraform(this._rateLimitingLimit),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            rate_limiting_technique: {
                value: cdktf.stringToHclTerraform(this._rateLimitingTechnique),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            retry_backoff: {
                value: cdktf.stringToHclTerraform(this._retryBackoff),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            retry_delay: {
                value: cdktf.numberToHclTerraform(this._retryDelay),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            retry_max_attempts: {
                value: cdktf.numberToHclTerraform(this._retryMaxAttempts),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            store_id: {
                value: cdktf.stringToHclTerraform(this._storeId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            stripe: {
                value: aiGatewayStripeToHclTerraform(this._stripe.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "AiGatewayStripe",
            },
            workers_ai_billing_mode: {
                value: cdktf.stringToHclTerraform(this._workersAiBillingMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            zdr: {
                value: cdktf.booleanToHclTerraform(this._zdr),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
