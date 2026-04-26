// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function zeroTrustAccessApplicationCorsHeadersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        allow_all_headers: cdktf.booleanToTerraform(struct.allowAllHeaders),
        allow_all_methods: cdktf.booleanToTerraform(struct.allowAllMethods),
        allow_all_origins: cdktf.booleanToTerraform(struct.allowAllOrigins),
        allow_credentials: cdktf.booleanToTerraform(struct.allowCredentials),
        allowed_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.allowedHeaders),
        allowed_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.allowedMethods),
        allowed_origins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.allowedOrigins),
        max_age: cdktf.numberToTerraform(struct.maxAge),
    };
}
export function zeroTrustAccessApplicationCorsHeadersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        allow_all_headers: {
            value: cdktf.booleanToHclTerraform(struct.allowAllHeaders),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        allow_all_methods: {
            value: cdktf.booleanToHclTerraform(struct.allowAllMethods),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        allow_all_origins: {
            value: cdktf.booleanToHclTerraform(struct.allowAllOrigins),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        allow_credentials: {
            value: cdktf.booleanToHclTerraform(struct.allowCredentials),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        allowed_headers: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.allowedHeaders),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        allowed_methods: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.allowedMethods),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        allowed_origins: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.allowedOrigins),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        max_age: {
            value: cdktf.numberToHclTerraform(struct.maxAge),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationCorsHeadersOutputReference extends cdktf.ComplexObject {
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
        if (this._allowAllHeaders !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowAllHeaders = this._allowAllHeaders;
        }
        if (this._allowAllMethods !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowAllMethods = this._allowAllMethods;
        }
        if (this._allowAllOrigins !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowAllOrigins = this._allowAllOrigins;
        }
        if (this._allowCredentials !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowCredentials = this._allowCredentials;
        }
        if (this._allowedHeaders !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedHeaders = this._allowedHeaders;
        }
        if (this._allowedMethods !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedMethods = this._allowedMethods;
        }
        if (this._allowedOrigins !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedOrigins = this._allowedOrigins;
        }
        if (this._maxAge !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxAge = this._maxAge;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowAllHeaders = undefined;
            this._allowAllMethods = undefined;
            this._allowAllOrigins = undefined;
            this._allowCredentials = undefined;
            this._allowedHeaders = undefined;
            this._allowedMethods = undefined;
            this._allowedOrigins = undefined;
            this._maxAge = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowAllHeaders = value.allowAllHeaders;
            this._allowAllMethods = value.allowAllMethods;
            this._allowAllOrigins = value.allowAllOrigins;
            this._allowCredentials = value.allowCredentials;
            this._allowedHeaders = value.allowedHeaders;
            this._allowedMethods = value.allowedMethods;
            this._allowedOrigins = value.allowedOrigins;
            this._maxAge = value.maxAge;
        }
    }
    // allow_all_headers - computed: false, optional: true, required: false
    _allowAllHeaders;
    get allowAllHeaders() {
        return this.getBooleanAttribute('allow_all_headers');
    }
    set allowAllHeaders(value) {
        this._allowAllHeaders = value;
    }
    resetAllowAllHeaders() {
        this._allowAllHeaders = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowAllHeadersInput() {
        return this._allowAllHeaders;
    }
    // allow_all_methods - computed: false, optional: true, required: false
    _allowAllMethods;
    get allowAllMethods() {
        return this.getBooleanAttribute('allow_all_methods');
    }
    set allowAllMethods(value) {
        this._allowAllMethods = value;
    }
    resetAllowAllMethods() {
        this._allowAllMethods = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowAllMethodsInput() {
        return this._allowAllMethods;
    }
    // allow_all_origins - computed: false, optional: true, required: false
    _allowAllOrigins;
    get allowAllOrigins() {
        return this.getBooleanAttribute('allow_all_origins');
    }
    set allowAllOrigins(value) {
        this._allowAllOrigins = value;
    }
    resetAllowAllOrigins() {
        this._allowAllOrigins = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowAllOriginsInput() {
        return this._allowAllOrigins;
    }
    // allow_credentials - computed: false, optional: true, required: false
    _allowCredentials;
    get allowCredentials() {
        return this.getBooleanAttribute('allow_credentials');
    }
    set allowCredentials(value) {
        this._allowCredentials = value;
    }
    resetAllowCredentials() {
        this._allowCredentials = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowCredentialsInput() {
        return this._allowCredentials;
    }
    // allowed_headers - computed: false, optional: true, required: false
    _allowedHeaders;
    get allowedHeaders() {
        return cdktf.Fn.tolist(this.getListAttribute('allowed_headers'));
    }
    set allowedHeaders(value) {
        this._allowedHeaders = value;
    }
    resetAllowedHeaders() {
        this._allowedHeaders = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowedHeadersInput() {
        return this._allowedHeaders;
    }
    // allowed_methods - computed: false, optional: true, required: false
    _allowedMethods;
    get allowedMethods() {
        return cdktf.Fn.tolist(this.getListAttribute('allowed_methods'));
    }
    set allowedMethods(value) {
        this._allowedMethods = value;
    }
    resetAllowedMethods() {
        this._allowedMethods = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowedMethodsInput() {
        return this._allowedMethods;
    }
    // allowed_origins - computed: false, optional: true, required: false
    _allowedOrigins;
    get allowedOrigins() {
        return cdktf.Fn.tolist(this.getListAttribute('allowed_origins'));
    }
    set allowedOrigins(value) {
        this._allowedOrigins = value;
    }
    resetAllowedOrigins() {
        this._allowedOrigins = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowedOriginsInput() {
        return this._allowedOrigins;
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
}
export function zeroTrustAccessApplicationDestinationsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cidr: cdktf.stringToTerraform(struct.cidr),
        hostname: cdktf.stringToTerraform(struct.hostname),
        l4_protocol: cdktf.stringToTerraform(struct.l4Protocol),
        mcp_server_id: cdktf.stringToTerraform(struct.mcpServerId),
        port_range: cdktf.stringToTerraform(struct.portRange),
        type: cdktf.stringToTerraform(struct.type),
        uri: cdktf.stringToTerraform(struct.uri),
        vnet_id: cdktf.stringToTerraform(struct.vnetId),
    };
}
export function zeroTrustAccessApplicationDestinationsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        cidr: {
            value: cdktf.stringToHclTerraform(struct.cidr),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        hostname: {
            value: cdktf.stringToHclTerraform(struct.hostname),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        l4_protocol: {
            value: cdktf.stringToHclTerraform(struct.l4Protocol),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mcp_server_id: {
            value: cdktf.stringToHclTerraform(struct.mcpServerId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port_range: {
            value: cdktf.stringToHclTerraform(struct.portRange),
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
        uri: {
            value: cdktf.stringToHclTerraform(struct.uri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        vnet_id: {
            value: cdktf.stringToHclTerraform(struct.vnetId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationDestinationsOutputReference extends cdktf.ComplexObject {
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
        if (this._cidr !== undefined) {
            hasAnyValues = true;
            internalValueResult.cidr = this._cidr;
        }
        if (this._hostname !== undefined) {
            hasAnyValues = true;
            internalValueResult.hostname = this._hostname;
        }
        if (this._l4Protocol !== undefined) {
            hasAnyValues = true;
            internalValueResult.l4Protocol = this._l4Protocol;
        }
        if (this._mcpServerId !== undefined) {
            hasAnyValues = true;
            internalValueResult.mcpServerId = this._mcpServerId;
        }
        if (this._portRange !== undefined) {
            hasAnyValues = true;
            internalValueResult.portRange = this._portRange;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if (this._uri !== undefined) {
            hasAnyValues = true;
            internalValueResult.uri = this._uri;
        }
        if (this._vnetId !== undefined) {
            hasAnyValues = true;
            internalValueResult.vnetId = this._vnetId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cidr = undefined;
            this._hostname = undefined;
            this._l4Protocol = undefined;
            this._mcpServerId = undefined;
            this._portRange = undefined;
            this._type = undefined;
            this._uri = undefined;
            this._vnetId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cidr = value.cidr;
            this._hostname = value.hostname;
            this._l4Protocol = value.l4Protocol;
            this._mcpServerId = value.mcpServerId;
            this._portRange = value.portRange;
            this._type = value.type;
            this._uri = value.uri;
            this._vnetId = value.vnetId;
        }
    }
    // cidr - computed: true, optional: true, required: false
    _cidr;
    get cidr() {
        return this.getStringAttribute('cidr');
    }
    set cidr(value) {
        this._cidr = value;
    }
    resetCidr() {
        this._cidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cidrInput() {
        return this._cidr;
    }
    // hostname - computed: true, optional: true, required: false
    _hostname;
    get hostname() {
        return this.getStringAttribute('hostname');
    }
    set hostname(value) {
        this._hostname = value;
    }
    resetHostname() {
        this._hostname = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hostnameInput() {
        return this._hostname;
    }
    // l4_protocol - computed: true, optional: true, required: false
    _l4Protocol;
    get l4Protocol() {
        return this.getStringAttribute('l4_protocol');
    }
    set l4Protocol(value) {
        this._l4Protocol = value;
    }
    resetL4Protocol() {
        this._l4Protocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get l4ProtocolInput() {
        return this._l4Protocol;
    }
    // mcp_server_id - computed: true, optional: true, required: false
    _mcpServerId;
    get mcpServerId() {
        return this.getStringAttribute('mcp_server_id');
    }
    set mcpServerId(value) {
        this._mcpServerId = value;
    }
    resetMcpServerId() {
        this._mcpServerId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get mcpServerIdInput() {
        return this._mcpServerId;
    }
    // port_range - computed: true, optional: true, required: false
    _portRange;
    get portRange() {
        return this.getStringAttribute('port_range');
    }
    set portRange(value) {
        this._portRange = value;
    }
    resetPortRange() {
        this._portRange = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get portRangeInput() {
        return this._portRange;
    }
    // type - computed: true, optional: true, required: false
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
    // uri - computed: true, optional: true, required: false
    _uri;
    get uri() {
        return this.getStringAttribute('uri');
    }
    set uri(value) {
        this._uri = value;
    }
    resetUri() {
        this._uri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriInput() {
        return this._uri;
    }
    // vnet_id - computed: true, optional: true, required: false
    _vnetId;
    get vnetId() {
        return this.getStringAttribute('vnet_id');
    }
    set vnetId(value) {
        this._vnetId = value;
    }
    resetVnetId() {
        this._vnetId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get vnetIdInput() {
        return this._vnetId;
    }
}
export class ZeroTrustAccessApplicationDestinationsList extends cdktf.ComplexList {
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
        return new ZeroTrustAccessApplicationDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function zeroTrustAccessApplicationFooterLinksToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        url: cdktf.stringToTerraform(struct.url),
    };
}
export function zeroTrustAccessApplicationFooterLinksToHclTerraform(struct) {
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
export class ZeroTrustAccessApplicationFooterLinksOutputReference extends cdktf.ComplexObject {
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
            this._name = undefined;
            this._url = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._url = value.url;
        }
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
export class ZeroTrustAccessApplicationFooterLinksList extends cdktf.ComplexList {
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
        return new ZeroTrustAccessApplicationFooterLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function zeroTrustAccessApplicationLandingPageDesignToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        button_color: cdktf.stringToTerraform(struct.buttonColor),
        button_text_color: cdktf.stringToTerraform(struct.buttonTextColor),
        image_url: cdktf.stringToTerraform(struct.imageUrl),
        message: cdktf.stringToTerraform(struct.message),
        title: cdktf.stringToTerraform(struct.title),
    };
}
export function zeroTrustAccessApplicationLandingPageDesignToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        button_color: {
            value: cdktf.stringToHclTerraform(struct.buttonColor),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        button_text_color: {
            value: cdktf.stringToHclTerraform(struct.buttonTextColor),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        image_url: {
            value: cdktf.stringToHclTerraform(struct.imageUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        message: {
            value: cdktf.stringToHclTerraform(struct.message),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        title: {
            value: cdktf.stringToHclTerraform(struct.title),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationLandingPageDesignOutputReference extends cdktf.ComplexObject {
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
        if (this._buttonColor !== undefined) {
            hasAnyValues = true;
            internalValueResult.buttonColor = this._buttonColor;
        }
        if (this._buttonTextColor !== undefined) {
            hasAnyValues = true;
            internalValueResult.buttonTextColor = this._buttonTextColor;
        }
        if (this._imageUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.imageUrl = this._imageUrl;
        }
        if (this._message !== undefined) {
            hasAnyValues = true;
            internalValueResult.message = this._message;
        }
        if (this._title !== undefined) {
            hasAnyValues = true;
            internalValueResult.title = this._title;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._buttonColor = undefined;
            this._buttonTextColor = undefined;
            this._imageUrl = undefined;
            this._message = undefined;
            this._title = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._buttonColor = value.buttonColor;
            this._buttonTextColor = value.buttonTextColor;
            this._imageUrl = value.imageUrl;
            this._message = value.message;
            this._title = value.title;
        }
    }
    // button_color - computed: false, optional: true, required: false
    _buttonColor;
    get buttonColor() {
        return this.getStringAttribute('button_color');
    }
    set buttonColor(value) {
        this._buttonColor = value;
    }
    resetButtonColor() {
        this._buttonColor = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get buttonColorInput() {
        return this._buttonColor;
    }
    // button_text_color - computed: false, optional: true, required: false
    _buttonTextColor;
    get buttonTextColor() {
        return this.getStringAttribute('button_text_color');
    }
    set buttonTextColor(value) {
        this._buttonTextColor = value;
    }
    resetButtonTextColor() {
        this._buttonTextColor = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get buttonTextColorInput() {
        return this._buttonTextColor;
    }
    // image_url - computed: false, optional: true, required: false
    _imageUrl;
    get imageUrl() {
        return this.getStringAttribute('image_url');
    }
    set imageUrl(value) {
        this._imageUrl = value;
    }
    resetImageUrl() {
        this._imageUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get imageUrlInput() {
        return this._imageUrl;
    }
    // message - computed: false, optional: true, required: false
    _message;
    get message() {
        return this.getStringAttribute('message');
    }
    set message(value) {
        this._message = value;
    }
    resetMessage() {
        this._message = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get messageInput() {
        return this._message;
    }
    // title - computed: true, optional: true, required: false
    _title;
    get title() {
        return this.getStringAttribute('title');
    }
    set title(value) {
        this._title = value;
    }
    resetTitle() {
        this._title = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get titleInput() {
        return this._title;
    }
}
export function zeroTrustAccessApplicationOauthConfigurationDynamicClientRegistrationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        allow_any_on_localhost: cdktf.booleanToTerraform(struct.allowAnyOnLocalhost),
        allow_any_on_loopback: cdktf.booleanToTerraform(struct.allowAnyOnLoopback),
        allowed_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.allowedUris),
        enabled: cdktf.booleanToTerraform(struct.enabled),
    };
}
export function zeroTrustAccessApplicationOauthConfigurationDynamicClientRegistrationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        allow_any_on_localhost: {
            value: cdktf.booleanToHclTerraform(struct.allowAnyOnLocalhost),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        allow_any_on_loopback: {
            value: cdktf.booleanToHclTerraform(struct.allowAnyOnLoopback),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        allowed_uris: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.allowedUris),
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
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationOauthConfigurationDynamicClientRegistrationOutputReference extends cdktf.ComplexObject {
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
        if (this._allowAnyOnLocalhost !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowAnyOnLocalhost = this._allowAnyOnLocalhost;
        }
        if (this._allowAnyOnLoopback !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowAnyOnLoopback = this._allowAnyOnLoopback;
        }
        if (this._allowedUris !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedUris = this._allowedUris;
        }
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
            this._allowAnyOnLocalhost = undefined;
            this._allowAnyOnLoopback = undefined;
            this._allowedUris = undefined;
            this._enabled = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowAnyOnLocalhost = value.allowAnyOnLocalhost;
            this._allowAnyOnLoopback = value.allowAnyOnLoopback;
            this._allowedUris = value.allowedUris;
            this._enabled = value.enabled;
        }
    }
    // allow_any_on_localhost - computed: false, optional: true, required: false
    _allowAnyOnLocalhost;
    get allowAnyOnLocalhost() {
        return this.getBooleanAttribute('allow_any_on_localhost');
    }
    set allowAnyOnLocalhost(value) {
        this._allowAnyOnLocalhost = value;
    }
    resetAllowAnyOnLocalhost() {
        this._allowAnyOnLocalhost = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowAnyOnLocalhostInput() {
        return this._allowAnyOnLocalhost;
    }
    // allow_any_on_loopback - computed: false, optional: true, required: false
    _allowAnyOnLoopback;
    get allowAnyOnLoopback() {
        return this.getBooleanAttribute('allow_any_on_loopback');
    }
    set allowAnyOnLoopback(value) {
        this._allowAnyOnLoopback = value;
    }
    resetAllowAnyOnLoopback() {
        this._allowAnyOnLoopback = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowAnyOnLoopbackInput() {
        return this._allowAnyOnLoopback;
    }
    // allowed_uris - computed: false, optional: true, required: false
    _allowedUris;
    get allowedUris() {
        return this.getListAttribute('allowed_uris');
    }
    set allowedUris(value) {
        this._allowedUris = value;
    }
    resetAllowedUris() {
        this._allowedUris = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowedUrisInput() {
        return this._allowedUris;
    }
    // enabled - computed: false, optional: true, required: false
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
export function zeroTrustAccessApplicationOauthConfigurationGrantToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        access_token_lifetime: cdktf.stringToTerraform(struct.accessTokenLifetime),
        session_duration: cdktf.stringToTerraform(struct.sessionDuration),
    };
}
export function zeroTrustAccessApplicationOauthConfigurationGrantToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        access_token_lifetime: {
            value: cdktf.stringToHclTerraform(struct.accessTokenLifetime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        session_duration: {
            value: cdktf.stringToHclTerraform(struct.sessionDuration),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationOauthConfigurationGrantOutputReference extends cdktf.ComplexObject {
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
        if (this._accessTokenLifetime !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessTokenLifetime = this._accessTokenLifetime;
        }
        if (this._sessionDuration !== undefined) {
            hasAnyValues = true;
            internalValueResult.sessionDuration = this._sessionDuration;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accessTokenLifetime = undefined;
            this._sessionDuration = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accessTokenLifetime = value.accessTokenLifetime;
            this._sessionDuration = value.sessionDuration;
        }
    }
    // access_token_lifetime - computed: false, optional: true, required: false
    _accessTokenLifetime;
    get accessTokenLifetime() {
        return this.getStringAttribute('access_token_lifetime');
    }
    set accessTokenLifetime(value) {
        this._accessTokenLifetime = value;
    }
    resetAccessTokenLifetime() {
        this._accessTokenLifetime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get accessTokenLifetimeInput() {
        return this._accessTokenLifetime;
    }
    // session_duration - computed: false, optional: true, required: false
    _sessionDuration;
    get sessionDuration() {
        return this.getStringAttribute('session_duration');
    }
    set sessionDuration(value) {
        this._sessionDuration = value;
    }
    resetSessionDuration() {
        this._sessionDuration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sessionDurationInput() {
        return this._sessionDuration;
    }
}
export function zeroTrustAccessApplicationOauthConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        dynamic_client_registration: zeroTrustAccessApplicationOauthConfigurationDynamicClientRegistrationToTerraform(struct.dynamicClientRegistration),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        grant: zeroTrustAccessApplicationOauthConfigurationGrantToTerraform(struct.grant),
    };
}
export function zeroTrustAccessApplicationOauthConfigurationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        dynamic_client_registration: {
            value: zeroTrustAccessApplicationOauthConfigurationDynamicClientRegistrationToHclTerraform(struct.dynamicClientRegistration),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationOauthConfigurationDynamicClientRegistration",
        },
        enabled: {
            value: cdktf.booleanToHclTerraform(struct.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        grant: {
            value: zeroTrustAccessApplicationOauthConfigurationGrantToHclTerraform(struct.grant),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationOauthConfigurationGrant",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationOauthConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._dynamicClientRegistration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dynamicClientRegistration = this._dynamicClientRegistration?.internalValue;
        }
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._grant?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.grant = this._grant?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dynamicClientRegistration.internalValue = undefined;
            this._enabled = undefined;
            this._grant.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dynamicClientRegistration.internalValue = value.dynamicClientRegistration;
            this._enabled = value.enabled;
            this._grant.internalValue = value.grant;
        }
    }
    // dynamic_client_registration - computed: false, optional: true, required: false
    _dynamicClientRegistration = new ZeroTrustAccessApplicationOauthConfigurationDynamicClientRegistrationOutputReference(this, "dynamic_client_registration");
    get dynamicClientRegistration() {
        return this._dynamicClientRegistration;
    }
    putDynamicClientRegistration(value) {
        this._dynamicClientRegistration.internalValue = value;
    }
    resetDynamicClientRegistration() {
        this._dynamicClientRegistration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dynamicClientRegistrationInput() {
        return this._dynamicClientRegistration.internalValue;
    }
    // enabled - computed: false, optional: true, required: false
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
    // grant - computed: false, optional: true, required: false
    _grant = new ZeroTrustAccessApplicationOauthConfigurationGrantOutputReference(this, "grant");
    get grant() {
        return this._grant;
    }
    putGrant(value) {
        this._grant.internalValue = value;
    }
    resetGrant() {
        this._grant.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get grantInput() {
        return this._grant.internalValue;
    }
}
export function zeroTrustAccessApplicationPoliciesConnectionRulesRdpToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        allowed_clipboard_local_to_remote_formats: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.allowedClipboardLocalToRemoteFormats),
        allowed_clipboard_remote_to_local_formats: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.allowedClipboardRemoteToLocalFormats),
    };
}
export function zeroTrustAccessApplicationPoliciesConnectionRulesRdpToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        allowed_clipboard_local_to_remote_formats: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.allowedClipboardLocalToRemoteFormats),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        allowed_clipboard_remote_to_local_formats: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.allowedClipboardRemoteToLocalFormats),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationPoliciesConnectionRulesRdpOutputReference extends cdktf.ComplexObject {
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
        if (this._allowedClipboardLocalToRemoteFormats !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedClipboardLocalToRemoteFormats = this._allowedClipboardLocalToRemoteFormats;
        }
        if (this._allowedClipboardRemoteToLocalFormats !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedClipboardRemoteToLocalFormats = this._allowedClipboardRemoteToLocalFormats;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowedClipboardLocalToRemoteFormats = undefined;
            this._allowedClipboardRemoteToLocalFormats = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowedClipboardLocalToRemoteFormats = value.allowedClipboardLocalToRemoteFormats;
            this._allowedClipboardRemoteToLocalFormats = value.allowedClipboardRemoteToLocalFormats;
        }
    }
    // allowed_clipboard_local_to_remote_formats - computed: false, optional: true, required: false
    _allowedClipboardLocalToRemoteFormats;
    get allowedClipboardLocalToRemoteFormats() {
        return this.getListAttribute('allowed_clipboard_local_to_remote_formats');
    }
    set allowedClipboardLocalToRemoteFormats(value) {
        this._allowedClipboardLocalToRemoteFormats = value;
    }
    resetAllowedClipboardLocalToRemoteFormats() {
        this._allowedClipboardLocalToRemoteFormats = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowedClipboardLocalToRemoteFormatsInput() {
        return this._allowedClipboardLocalToRemoteFormats;
    }
    // allowed_clipboard_remote_to_local_formats - computed: false, optional: true, required: false
    _allowedClipboardRemoteToLocalFormats;
    get allowedClipboardRemoteToLocalFormats() {
        return this.getListAttribute('allowed_clipboard_remote_to_local_formats');
    }
    set allowedClipboardRemoteToLocalFormats(value) {
        this._allowedClipboardRemoteToLocalFormats = value;
    }
    resetAllowedClipboardRemoteToLocalFormats() {
        this._allowedClipboardRemoteToLocalFormats = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowedClipboardRemoteToLocalFormatsInput() {
        return this._allowedClipboardRemoteToLocalFormats;
    }
}
export function zeroTrustAccessApplicationPoliciesConnectionRulesSshToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        allow_email_alias: cdktf.booleanToTerraform(struct.allowEmailAlias),
        usernames: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.usernames),
    };
}
export function zeroTrustAccessApplicationPoliciesConnectionRulesSshToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        allow_email_alias: {
            value: cdktf.booleanToHclTerraform(struct.allowEmailAlias),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        usernames: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.usernames),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationPoliciesConnectionRulesSshOutputReference extends cdktf.ComplexObject {
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
        if (this._allowEmailAlias !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowEmailAlias = this._allowEmailAlias;
        }
        if (this._usernames !== undefined) {
            hasAnyValues = true;
            internalValueResult.usernames = this._usernames;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowEmailAlias = undefined;
            this._usernames = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowEmailAlias = value.allowEmailAlias;
            this._usernames = value.usernames;
        }
    }
    // allow_email_alias - computed: false, optional: true, required: false
    _allowEmailAlias;
    get allowEmailAlias() {
        return this.getBooleanAttribute('allow_email_alias');
    }
    set allowEmailAlias(value) {
        this._allowEmailAlias = value;
    }
    resetAllowEmailAlias() {
        this._allowEmailAlias = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowEmailAliasInput() {
        return this._allowEmailAlias;
    }
    // usernames - computed: false, optional: false, required: true
    _usernames;
    get usernames() {
        return this.getListAttribute('usernames');
    }
    set usernames(value) {
        this._usernames = value;
    }
    // Temporarily expose input value. Use with caution.
    get usernamesInput() {
        return this._usernames;
    }
}
export function zeroTrustAccessApplicationPoliciesConnectionRulesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        rdp: zeroTrustAccessApplicationPoliciesConnectionRulesRdpToTerraform(struct.rdp),
        ssh: zeroTrustAccessApplicationPoliciesConnectionRulesSshToTerraform(struct.ssh),
    };
}
export function zeroTrustAccessApplicationPoliciesConnectionRulesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        rdp: {
            value: zeroTrustAccessApplicationPoliciesConnectionRulesRdpToHclTerraform(struct.rdp),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesConnectionRulesRdp",
        },
        ssh: {
            value: zeroTrustAccessApplicationPoliciesConnectionRulesSshToHclTerraform(struct.ssh),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesConnectionRulesSsh",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationPoliciesConnectionRulesOutputReference extends cdktf.ComplexObject {
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
        if (this._rdp?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.rdp = this._rdp?.internalValue;
        }
        if (this._ssh?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ssh = this._ssh?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._rdp.internalValue = undefined;
            this._ssh.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._rdp.internalValue = value.rdp;
            this._ssh.internalValue = value.ssh;
        }
    }
    // rdp - computed: false, optional: true, required: false
    _rdp = new ZeroTrustAccessApplicationPoliciesConnectionRulesRdpOutputReference(this, "rdp");
    get rdp() {
        return this._rdp;
    }
    putRdp(value) {
        this._rdp.internalValue = value;
    }
    resetRdp() {
        this._rdp.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get rdpInput() {
        return this._rdp.internalValue;
    }
    // ssh - computed: false, optional: true, required: false
    _ssh = new ZeroTrustAccessApplicationPoliciesConnectionRulesSshOutputReference(this, "ssh");
    get ssh() {
        return this._ssh;
    }
    putSsh(value) {
        this._ssh.internalValue = value;
    }
    resetSsh() {
        this._ssh.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sshInput() {
        return this._ssh.internalValue;
    }
}
export function zeroTrustAccessApplicationPoliciesExcludeAnyValidServiceTokenToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function zeroTrustAccessApplicationPoliciesExcludeAnyValidServiceTokenToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class ZeroTrustAccessApplicationPoliciesExcludeAnyValidServiceTokenOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
        }
    }
}
export function zeroTrustAccessApplicationPoliciesExcludeAuthContextToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        ac_id: cdktf.stringToTerraform(struct.acId),
        id: cdktf.stringToTerraform(struct.id),
        identity_provider_id: cdktf.stringToTerraform(struct.identityProviderId),
    };
}
export function zeroTrustAccessApplicationPoliciesExcludeAuthContextToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        ac_id: {
            value: cdktf.stringToHclTerraform(struct.acId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        identity_provider_id: {
            value: cdktf.stringToHclTerraform(struct.identityProviderId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationPoliciesExcludeAuthContextOutputReference extends cdktf.ComplexObject {
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
        if (this._acId !== undefined) {
            hasAnyValues = true;
            internalValueResult.acId = this._acId;
        }
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._identityProviderId !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityProviderId = this._identityProviderId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._acId = undefined;
            this._id = undefined;
            this._identityProviderId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._acId = value.acId;
            this._id = value.id;
            this._identityProviderId = value.identityProviderId;
        }
    }
    // ac_id - computed: false, optional: false, required: true
    _acId;
    get acId() {
        return this.getStringAttribute('ac_id');
    }
    set acId(value) {
        this._acId = value;
    }
    // Temporarily expose input value. Use with caution.
    get acIdInput() {
        return this._acId;
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
    // identity_provider_id - computed: false, optional: false, required: true
    _identityProviderId;
    get identityProviderId() {
        return this.getStringAttribute('identity_provider_id');
    }
    set identityProviderId(value) {
        this._identityProviderId = value;
    }
    // Temporarily expose input value. Use with caution.
    get identityProviderIdInput() {
        return this._identityProviderId;
    }
}
export function zeroTrustAccessApplicationPoliciesExcludeAuthMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        auth_method: cdktf.stringToTerraform(struct.authMethod),
    };
}
export function zeroTrustAccessApplicationPoliciesExcludeAuthMethodToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        auth_method: {
            value: cdktf.stringToHclTerraform(struct.authMethod),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationPoliciesExcludeAuthMethodOutputReference extends cdktf.ComplexObject {
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
        if (this._authMethod !== undefined) {
            hasAnyValues = true;
            internalValueResult.authMethod = this._authMethod;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authMethod = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authMethod = value.authMethod;
        }
    }
    // auth_method - computed: false, optional: false, required: true
    _authMethod;
    get authMethod() {
        return this.getStringAttribute('auth_method');
    }
    set authMethod(value) {
        this._authMethod = value;
    }
    // Temporarily expose input value. Use with caution.
    get authMethodInput() {
        return this._authMethod;
    }
}
export function zeroTrustAccessApplicationPoliciesExcludeAzureAdToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
        identity_provider_id: cdktf.stringToTerraform(struct.identityProviderId),
    };
}
export function zeroTrustAccessApplicationPoliciesExcludeAzureAdToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        identity_provider_id: {
            value: cdktf.stringToHclTerraform(struct.identityProviderId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationPoliciesExcludeAzureAdOutputReference extends cdktf.ComplexObject {
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
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._identityProviderId !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityProviderId = this._identityProviderId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._id = undefined;
            this._identityProviderId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._id = value.id;
            this._identityProviderId = value.identityProviderId;
        }
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
    // identity_provider_id - computed: false, optional: false, required: true
    _identityProviderId;
    get identityProviderId() {
        return this.getStringAttribute('identity_provider_id');
    }
    set identityProviderId(value) {
        this._identityProviderId = value;
    }
    // Temporarily expose input value. Use with caution.
    get identityProviderIdInput() {
        return this._identityProviderId;
    }
}
export function zeroTrustAccessApplicationPoliciesExcludeCertificateToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function zeroTrustAccessApplicationPoliciesExcludeCertificateToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class ZeroTrustAccessApplicationPoliciesExcludeCertificateOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
        }
    }
}
export function zeroTrustAccessApplicationPoliciesExcludeCommonNameToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        common_name: cdktf.stringToTerraform(struct.commonName),
    };
}
export function zeroTrustAccessApplicationPoliciesExcludeCommonNameToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        common_name: {
            value: cdktf.stringToHclTerraform(struct.commonName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationPoliciesExcludeCommonNameOutputReference extends cdktf.ComplexObject {
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
        if (this._commonName !== undefined) {
            hasAnyValues = true;
            internalValueResult.commonName = this._commonName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._commonName = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._commonName = value.commonName;
        }
    }
    // common_name - computed: false, optional: false, required: true
    _commonName;
    get commonName() {
        return this.getStringAttribute('common_name');
    }
    set commonName(value) {
        this._commonName = value;
    }
    // Temporarily expose input value. Use with caution.
    get commonNameInput() {
        return this._commonName;
    }
}
export function zeroTrustAccessApplicationPoliciesExcludeDevicePostureToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        integration_uid: cdktf.stringToTerraform(struct.integrationUid),
    };
}
export function zeroTrustAccessApplicationPoliciesExcludeDevicePostureToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        integration_uid: {
            value: cdktf.stringToHclTerraform(struct.integrationUid),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationPoliciesExcludeDevicePostureOutputReference extends cdktf.ComplexObject {
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
        if (this._integrationUid !== undefined) {
            hasAnyValues = true;
            internalValueResult.integrationUid = this._integrationUid;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._integrationUid = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._integrationUid = value.integrationUid;
        }
    }
    // integration_uid - computed: false, optional: false, required: true
    _integrationUid;
    get integrationUid() {
        return this.getStringAttribute('integration_uid');
    }
    set integrationUid(value) {
        this._integrationUid = value;
    }
    // Temporarily expose input value. Use with caution.
    get integrationUidInput() {
        return this._integrationUid;
    }
}
export function zeroTrustAccessApplicationPoliciesExcludeEmailToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        email: cdktf.stringToTerraform(struct.email),
    };
}
export function zeroTrustAccessApplicationPoliciesExcludeEmailToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        email: {
            value: cdktf.stringToHclTerraform(struct.email),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationPoliciesExcludeEmailOutputReference extends cdktf.ComplexObject {
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
        if (this._email !== undefined) {
            hasAnyValues = true;
            internalValueResult.email = this._email;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._email = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._email = value.email;
        }
    }
    // email - computed: false, optional: false, required: true
    _email;
    get email() {
        return this.getStringAttribute('email');
    }
    set email(value) {
        this._email = value;
    }
    // Temporarily expose input value. Use with caution.
    get emailInput() {
        return this._email;
    }
}
export function zeroTrustAccessApplicationPoliciesExcludeEmailDomainToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        domain: cdktf.stringToTerraform(struct.domain),
    };
}
export function zeroTrustAccessApplicationPoliciesExcludeEmailDomainToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        domain: {
            value: cdktf.stringToHclTerraform(struct.domain),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationPoliciesExcludeEmailDomainOutputReference extends cdktf.ComplexObject {
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
        if (this._domain !== undefined) {
            hasAnyValues = true;
            internalValueResult.domain = this._domain;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._domain = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._domain = value.domain;
        }
    }
    // domain - computed: false, optional: false, required: true
    _domain;
    get domain() {
        return this.getStringAttribute('domain');
    }
    set domain(value) {
        this._domain = value;
    }
    // Temporarily expose input value. Use with caution.
    get domainInput() {
        return this._domain;
    }
}
export function zeroTrustAccessApplicationPoliciesExcludeEmailListStructToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
    };
}
export function zeroTrustAccessApplicationPoliciesExcludeEmailListStructToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationPoliciesExcludeEmailListStructOutputReference extends cdktf.ComplexObject {
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
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._id = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._id = value.id;
        }
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
}
export function zeroTrustAccessApplicationPoliciesExcludeEveryoneToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function zeroTrustAccessApplicationPoliciesExcludeEveryoneToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class ZeroTrustAccessApplicationPoliciesExcludeEveryoneOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
        }
    }
}
export function zeroTrustAccessApplicationPoliciesExcludeExternalEvaluationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        evaluate_url: cdktf.stringToTerraform(struct.evaluateUrl),
        keys_url: cdktf.stringToTerraform(struct.keysUrl),
    };
}
export function zeroTrustAccessApplicationPoliciesExcludeExternalEvaluationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        evaluate_url: {
            value: cdktf.stringToHclTerraform(struct.evaluateUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        keys_url: {
            value: cdktf.stringToHclTerraform(struct.keysUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationPoliciesExcludeExternalEvaluationOutputReference extends cdktf.ComplexObject {
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
        if (this._evaluateUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.evaluateUrl = this._evaluateUrl;
        }
        if (this._keysUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.keysUrl = this._keysUrl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._evaluateUrl = undefined;
            this._keysUrl = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._evaluateUrl = value.evaluateUrl;
            this._keysUrl = value.keysUrl;
        }
    }
    // evaluate_url - computed: false, optional: false, required: true
    _evaluateUrl;
    get evaluateUrl() {
        return this.getStringAttribute('evaluate_url');
    }
    set evaluateUrl(value) {
        this._evaluateUrl = value;
    }
    // Temporarily expose input value. Use with caution.
    get evaluateUrlInput() {
        return this._evaluateUrl;
    }
    // keys_url - computed: false, optional: false, required: true
    _keysUrl;
    get keysUrl() {
        return this.getStringAttribute('keys_url');
    }
    set keysUrl(value) {
        this._keysUrl = value;
    }
    // Temporarily expose input value. Use with caution.
    get keysUrlInput() {
        return this._keysUrl;
    }
}
export function zeroTrustAccessApplicationPoliciesExcludeGeoToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        country_code: cdktf.stringToTerraform(struct.countryCode),
    };
}
export function zeroTrustAccessApplicationPoliciesExcludeGeoToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        country_code: {
            value: cdktf.stringToHclTerraform(struct.countryCode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationPoliciesExcludeGeoOutputReference extends cdktf.ComplexObject {
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
        if (this._countryCode !== undefined) {
            hasAnyValues = true;
            internalValueResult.countryCode = this._countryCode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._countryCode = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._countryCode = value.countryCode;
        }
    }
    // country_code - computed: false, optional: false, required: true
    _countryCode;
    get countryCode() {
        return this.getStringAttribute('country_code');
    }
    set countryCode(value) {
        this._countryCode = value;
    }
    // Temporarily expose input value. Use with caution.
    get countryCodeInput() {
        return this._countryCode;
    }
}
export function zeroTrustAccessApplicationPoliciesExcludeGithubOrganizationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        identity_provider_id: cdktf.stringToTerraform(struct.identityProviderId),
        name: cdktf.stringToTerraform(struct.name),
        team: cdktf.stringToTerraform(struct.team),
    };
}
export function zeroTrustAccessApplicationPoliciesExcludeGithubOrganizationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        identity_provider_id: {
            value: cdktf.stringToHclTerraform(struct.identityProviderId),
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
        team: {
            value: cdktf.stringToHclTerraform(struct.team),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationPoliciesExcludeGithubOrganizationOutputReference extends cdktf.ComplexObject {
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
        if (this._identityProviderId !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityProviderId = this._identityProviderId;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._team !== undefined) {
            hasAnyValues = true;
            internalValueResult.team = this._team;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._identityProviderId = undefined;
            this._name = undefined;
            this._team = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._identityProviderId = value.identityProviderId;
            this._name = value.name;
            this._team = value.team;
        }
    }
    // identity_provider_id - computed: false, optional: false, required: true
    _identityProviderId;
    get identityProviderId() {
        return this.getStringAttribute('identity_provider_id');
    }
    set identityProviderId(value) {
        this._identityProviderId = value;
    }
    // Temporarily expose input value. Use with caution.
    get identityProviderIdInput() {
        return this._identityProviderId;
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
    // team - computed: false, optional: true, required: false
    _team;
    get team() {
        return this.getStringAttribute('team');
    }
    set team(value) {
        this._team = value;
    }
    resetTeam() {
        this._team = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get teamInput() {
        return this._team;
    }
}
export function zeroTrustAccessApplicationPoliciesExcludeGroupToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
    };
}
export function zeroTrustAccessApplicationPoliciesExcludeGroupToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationPoliciesExcludeGroupOutputReference extends cdktf.ComplexObject {
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
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._id = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._id = value.id;
        }
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
}
export function zeroTrustAccessApplicationPoliciesExcludeGsuiteToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        email: cdktf.stringToTerraform(struct.email),
        identity_provider_id: cdktf.stringToTerraform(struct.identityProviderId),
    };
}
export function zeroTrustAccessApplicationPoliciesExcludeGsuiteToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        email: {
            value: cdktf.stringToHclTerraform(struct.email),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        identity_provider_id: {
            value: cdktf.stringToHclTerraform(struct.identityProviderId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationPoliciesExcludeGsuiteOutputReference extends cdktf.ComplexObject {
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
        if (this._email !== undefined) {
            hasAnyValues = true;
            internalValueResult.email = this._email;
        }
        if (this._identityProviderId !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityProviderId = this._identityProviderId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._email = undefined;
            this._identityProviderId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._email = value.email;
            this._identityProviderId = value.identityProviderId;
        }
    }
    // email - computed: false, optional: false, required: true
    _email;
    get email() {
        return this.getStringAttribute('email');
    }
    set email(value) {
        this._email = value;
    }
    // Temporarily expose input value. Use with caution.
    get emailInput() {
        return this._email;
    }
    // identity_provider_id - computed: false, optional: false, required: true
    _identityProviderId;
    get identityProviderId() {
        return this.getStringAttribute('identity_provider_id');
    }
    set identityProviderId(value) {
        this._identityProviderId = value;
    }
    // Temporarily expose input value. Use with caution.
    get identityProviderIdInput() {
        return this._identityProviderId;
    }
}
export function zeroTrustAccessApplicationPoliciesExcludeIpToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        ip: cdktf.stringToTerraform(struct.ip),
    };
}
export function zeroTrustAccessApplicationPoliciesExcludeIpToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        ip: {
            value: cdktf.stringToHclTerraform(struct.ip),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationPoliciesExcludeIpOutputReference extends cdktf.ComplexObject {
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
        if (this._ip !== undefined) {
            hasAnyValues = true;
            internalValueResult.ip = this._ip;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ip = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ip = value.ip;
        }
    }
    // ip - computed: false, optional: false, required: true
    _ip;
    get ip() {
        return this.getStringAttribute('ip');
    }
    set ip(value) {
        this._ip = value;
    }
    // Temporarily expose input value. Use with caution.
    get ipInput() {
        return this._ip;
    }
}
export function zeroTrustAccessApplicationPoliciesExcludeIpListStructToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
    };
}
export function zeroTrustAccessApplicationPoliciesExcludeIpListStructToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationPoliciesExcludeIpListStructOutputReference extends cdktf.ComplexObject {
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
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._id = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._id = value.id;
        }
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
}
export function zeroTrustAccessApplicationPoliciesExcludeLinkedAppTokenToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        app_uid: cdktf.stringToTerraform(struct.appUid),
    };
}
export function zeroTrustAccessApplicationPoliciesExcludeLinkedAppTokenToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        app_uid: {
            value: cdktf.stringToHclTerraform(struct.appUid),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationPoliciesExcludeLinkedAppTokenOutputReference extends cdktf.ComplexObject {
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
        if (this._appUid !== undefined) {
            hasAnyValues = true;
            internalValueResult.appUid = this._appUid;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._appUid = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._appUid = value.appUid;
        }
    }
    // app_uid - computed: false, optional: false, required: true
    _appUid;
    get appUid() {
        return this.getStringAttribute('app_uid');
    }
    set appUid(value) {
        this._appUid = value;
    }
    // Temporarily expose input value. Use with caution.
    get appUidInput() {
        return this._appUid;
    }
}
export function zeroTrustAccessApplicationPoliciesExcludeLoginMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
    };
}
export function zeroTrustAccessApplicationPoliciesExcludeLoginMethodToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationPoliciesExcludeLoginMethodOutputReference extends cdktf.ComplexObject {
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
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._id = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._id = value.id;
        }
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
}
export function zeroTrustAccessApplicationPoliciesExcludeOidcToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        claim_name: cdktf.stringToTerraform(struct.claimName),
        claim_value: cdktf.stringToTerraform(struct.claimValue),
        identity_provider_id: cdktf.stringToTerraform(struct.identityProviderId),
    };
}
export function zeroTrustAccessApplicationPoliciesExcludeOidcToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        claim_name: {
            value: cdktf.stringToHclTerraform(struct.claimName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        claim_value: {
            value: cdktf.stringToHclTerraform(struct.claimValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        identity_provider_id: {
            value: cdktf.stringToHclTerraform(struct.identityProviderId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationPoliciesExcludeOidcOutputReference extends cdktf.ComplexObject {
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
        if (this._claimName !== undefined) {
            hasAnyValues = true;
            internalValueResult.claimName = this._claimName;
        }
        if (this._claimValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.claimValue = this._claimValue;
        }
        if (this._identityProviderId !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityProviderId = this._identityProviderId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._claimName = undefined;
            this._claimValue = undefined;
            this._identityProviderId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._claimName = value.claimName;
            this._claimValue = value.claimValue;
            this._identityProviderId = value.identityProviderId;
        }
    }
    // claim_name - computed: false, optional: false, required: true
    _claimName;
    get claimName() {
        return this.getStringAttribute('claim_name');
    }
    set claimName(value) {
        this._claimName = value;
    }
    // Temporarily expose input value. Use with caution.
    get claimNameInput() {
        return this._claimName;
    }
    // claim_value - computed: false, optional: false, required: true
    _claimValue;
    get claimValue() {
        return this.getStringAttribute('claim_value');
    }
    set claimValue(value) {
        this._claimValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get claimValueInput() {
        return this._claimValue;
    }
    // identity_provider_id - computed: false, optional: false, required: true
    _identityProviderId;
    get identityProviderId() {
        return this.getStringAttribute('identity_provider_id');
    }
    set identityProviderId(value) {
        this._identityProviderId = value;
    }
    // Temporarily expose input value. Use with caution.
    get identityProviderIdInput() {
        return this._identityProviderId;
    }
}
export function zeroTrustAccessApplicationPoliciesExcludeOktaToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        identity_provider_id: cdktf.stringToTerraform(struct.identityProviderId),
        name: cdktf.stringToTerraform(struct.name),
    };
}
export function zeroTrustAccessApplicationPoliciesExcludeOktaToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        identity_provider_id: {
            value: cdktf.stringToHclTerraform(struct.identityProviderId),
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
export class ZeroTrustAccessApplicationPoliciesExcludeOktaOutputReference extends cdktf.ComplexObject {
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
        if (this._identityProviderId !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityProviderId = this._identityProviderId;
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
            this._identityProviderId = undefined;
            this._name = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._identityProviderId = value.identityProviderId;
            this._name = value.name;
        }
    }
    // identity_provider_id - computed: false, optional: false, required: true
    _identityProviderId;
    get identityProviderId() {
        return this.getStringAttribute('identity_provider_id');
    }
    set identityProviderId(value) {
        this._identityProviderId = value;
    }
    // Temporarily expose input value. Use with caution.
    get identityProviderIdInput() {
        return this._identityProviderId;
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
}
export function zeroTrustAccessApplicationPoliciesExcludeSamlToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        attribute_name: cdktf.stringToTerraform(struct.attributeName),
        attribute_value: cdktf.stringToTerraform(struct.attributeValue),
        identity_provider_id: cdktf.stringToTerraform(struct.identityProviderId),
    };
}
export function zeroTrustAccessApplicationPoliciesExcludeSamlToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        attribute_name: {
            value: cdktf.stringToHclTerraform(struct.attributeName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        attribute_value: {
            value: cdktf.stringToHclTerraform(struct.attributeValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        identity_provider_id: {
            value: cdktf.stringToHclTerraform(struct.identityProviderId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationPoliciesExcludeSamlOutputReference extends cdktf.ComplexObject {
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
        if (this._attributeName !== undefined) {
            hasAnyValues = true;
            internalValueResult.attributeName = this._attributeName;
        }
        if (this._attributeValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.attributeValue = this._attributeValue;
        }
        if (this._identityProviderId !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityProviderId = this._identityProviderId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._attributeName = undefined;
            this._attributeValue = undefined;
            this._identityProviderId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._attributeName = value.attributeName;
            this._attributeValue = value.attributeValue;
            this._identityProviderId = value.identityProviderId;
        }
    }
    // attribute_name - computed: false, optional: false, required: true
    _attributeName;
    get attributeName() {
        return this.getStringAttribute('attribute_name');
    }
    set attributeName(value) {
        this._attributeName = value;
    }
    // Temporarily expose input value. Use with caution.
    get attributeNameInput() {
        return this._attributeName;
    }
    // attribute_value - computed: false, optional: false, required: true
    _attributeValue;
    get attributeValue() {
        return this.getStringAttribute('attribute_value');
    }
    set attributeValue(value) {
        this._attributeValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get attributeValueInput() {
        return this._attributeValue;
    }
    // identity_provider_id - computed: false, optional: false, required: true
    _identityProviderId;
    get identityProviderId() {
        return this.getStringAttribute('identity_provider_id');
    }
    set identityProviderId(value) {
        this._identityProviderId = value;
    }
    // Temporarily expose input value. Use with caution.
    get identityProviderIdInput() {
        return this._identityProviderId;
    }
}
export function zeroTrustAccessApplicationPoliciesExcludeServiceTokenToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        token_id: cdktf.stringToTerraform(struct.tokenId),
    };
}
export function zeroTrustAccessApplicationPoliciesExcludeServiceTokenToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        token_id: {
            value: cdktf.stringToHclTerraform(struct.tokenId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationPoliciesExcludeServiceTokenOutputReference extends cdktf.ComplexObject {
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
        if (this._tokenId !== undefined) {
            hasAnyValues = true;
            internalValueResult.tokenId = this._tokenId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._tokenId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._tokenId = value.tokenId;
        }
    }
    // token_id - computed: false, optional: false, required: true
    _tokenId;
    get tokenId() {
        return this.getStringAttribute('token_id');
    }
    set tokenId(value) {
        this._tokenId = value;
    }
    // Temporarily expose input value. Use with caution.
    get tokenIdInput() {
        return this._tokenId;
    }
}
export function zeroTrustAccessApplicationPoliciesExcludeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        any_valid_service_token: zeroTrustAccessApplicationPoliciesExcludeAnyValidServiceTokenToTerraform(struct.anyValidServiceToken),
        auth_context: zeroTrustAccessApplicationPoliciesExcludeAuthContextToTerraform(struct.authContext),
        auth_method: zeroTrustAccessApplicationPoliciesExcludeAuthMethodToTerraform(struct.authMethod),
        azure_ad: zeroTrustAccessApplicationPoliciesExcludeAzureAdToTerraform(struct.azureAd),
        certificate: zeroTrustAccessApplicationPoliciesExcludeCertificateToTerraform(struct.certificate),
        common_name: zeroTrustAccessApplicationPoliciesExcludeCommonNameToTerraform(struct.commonName),
        device_posture: zeroTrustAccessApplicationPoliciesExcludeDevicePostureToTerraform(struct.devicePosture),
        email: zeroTrustAccessApplicationPoliciesExcludeEmailToTerraform(struct.email),
        email_domain: zeroTrustAccessApplicationPoliciesExcludeEmailDomainToTerraform(struct.emailDomain),
        email_list: zeroTrustAccessApplicationPoliciesExcludeEmailListStructToTerraform(struct.emailList),
        everyone: zeroTrustAccessApplicationPoliciesExcludeEveryoneToTerraform(struct.everyone),
        external_evaluation: zeroTrustAccessApplicationPoliciesExcludeExternalEvaluationToTerraform(struct.externalEvaluation),
        geo: zeroTrustAccessApplicationPoliciesExcludeGeoToTerraform(struct.geo),
        github_organization: zeroTrustAccessApplicationPoliciesExcludeGithubOrganizationToTerraform(struct.githubOrganization),
        group: zeroTrustAccessApplicationPoliciesExcludeGroupToTerraform(struct.group),
        gsuite: zeroTrustAccessApplicationPoliciesExcludeGsuiteToTerraform(struct.gsuite),
        ip: zeroTrustAccessApplicationPoliciesExcludeIpToTerraform(struct.ip),
        ip_list: zeroTrustAccessApplicationPoliciesExcludeIpListStructToTerraform(struct.ipList),
        linked_app_token: zeroTrustAccessApplicationPoliciesExcludeLinkedAppTokenToTerraform(struct.linkedAppToken),
        login_method: zeroTrustAccessApplicationPoliciesExcludeLoginMethodToTerraform(struct.loginMethod),
        oidc: zeroTrustAccessApplicationPoliciesExcludeOidcToTerraform(struct.oidc),
        okta: zeroTrustAccessApplicationPoliciesExcludeOktaToTerraform(struct.okta),
        saml: zeroTrustAccessApplicationPoliciesExcludeSamlToTerraform(struct.saml),
        service_token: zeroTrustAccessApplicationPoliciesExcludeServiceTokenToTerraform(struct.serviceToken),
    };
}
export function zeroTrustAccessApplicationPoliciesExcludeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        any_valid_service_token: {
            value: zeroTrustAccessApplicationPoliciesExcludeAnyValidServiceTokenToHclTerraform(struct.anyValidServiceToken),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesExcludeAnyValidServiceToken",
        },
        auth_context: {
            value: zeroTrustAccessApplicationPoliciesExcludeAuthContextToHclTerraform(struct.authContext),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesExcludeAuthContext",
        },
        auth_method: {
            value: zeroTrustAccessApplicationPoliciesExcludeAuthMethodToHclTerraform(struct.authMethod),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesExcludeAuthMethod",
        },
        azure_ad: {
            value: zeroTrustAccessApplicationPoliciesExcludeAzureAdToHclTerraform(struct.azureAd),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesExcludeAzureAd",
        },
        certificate: {
            value: zeroTrustAccessApplicationPoliciesExcludeCertificateToHclTerraform(struct.certificate),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesExcludeCertificate",
        },
        common_name: {
            value: zeroTrustAccessApplicationPoliciesExcludeCommonNameToHclTerraform(struct.commonName),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesExcludeCommonName",
        },
        device_posture: {
            value: zeroTrustAccessApplicationPoliciesExcludeDevicePostureToHclTerraform(struct.devicePosture),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesExcludeDevicePosture",
        },
        email: {
            value: zeroTrustAccessApplicationPoliciesExcludeEmailToHclTerraform(struct.email),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesExcludeEmail",
        },
        email_domain: {
            value: zeroTrustAccessApplicationPoliciesExcludeEmailDomainToHclTerraform(struct.emailDomain),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesExcludeEmailDomain",
        },
        email_list: {
            value: zeroTrustAccessApplicationPoliciesExcludeEmailListStructToHclTerraform(struct.emailList),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesExcludeEmailListStruct",
        },
        everyone: {
            value: zeroTrustAccessApplicationPoliciesExcludeEveryoneToHclTerraform(struct.everyone),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesExcludeEveryone",
        },
        external_evaluation: {
            value: zeroTrustAccessApplicationPoliciesExcludeExternalEvaluationToHclTerraform(struct.externalEvaluation),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesExcludeExternalEvaluation",
        },
        geo: {
            value: zeroTrustAccessApplicationPoliciesExcludeGeoToHclTerraform(struct.geo),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesExcludeGeo",
        },
        github_organization: {
            value: zeroTrustAccessApplicationPoliciesExcludeGithubOrganizationToHclTerraform(struct.githubOrganization),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesExcludeGithubOrganization",
        },
        group: {
            value: zeroTrustAccessApplicationPoliciesExcludeGroupToHclTerraform(struct.group),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesExcludeGroup",
        },
        gsuite: {
            value: zeroTrustAccessApplicationPoliciesExcludeGsuiteToHclTerraform(struct.gsuite),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesExcludeGsuite",
        },
        ip: {
            value: zeroTrustAccessApplicationPoliciesExcludeIpToHclTerraform(struct.ip),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesExcludeIp",
        },
        ip_list: {
            value: zeroTrustAccessApplicationPoliciesExcludeIpListStructToHclTerraform(struct.ipList),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesExcludeIpListStruct",
        },
        linked_app_token: {
            value: zeroTrustAccessApplicationPoliciesExcludeLinkedAppTokenToHclTerraform(struct.linkedAppToken),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesExcludeLinkedAppToken",
        },
        login_method: {
            value: zeroTrustAccessApplicationPoliciesExcludeLoginMethodToHclTerraform(struct.loginMethod),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesExcludeLoginMethod",
        },
        oidc: {
            value: zeroTrustAccessApplicationPoliciesExcludeOidcToHclTerraform(struct.oidc),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesExcludeOidc",
        },
        okta: {
            value: zeroTrustAccessApplicationPoliciesExcludeOktaToHclTerraform(struct.okta),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesExcludeOkta",
        },
        saml: {
            value: zeroTrustAccessApplicationPoliciesExcludeSamlToHclTerraform(struct.saml),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesExcludeSaml",
        },
        service_token: {
            value: zeroTrustAccessApplicationPoliciesExcludeServiceTokenToHclTerraform(struct.serviceToken),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesExcludeServiceToken",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationPoliciesExcludeOutputReference extends cdktf.ComplexObject {
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
        if (this._anyValidServiceToken?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.anyValidServiceToken = this._anyValidServiceToken?.internalValue;
        }
        if (this._authContext?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.authContext = this._authContext?.internalValue;
        }
        if (this._authMethod?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.authMethod = this._authMethod?.internalValue;
        }
        if (this._azureAd?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.azureAd = this._azureAd?.internalValue;
        }
        if (this._certificate?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.certificate = this._certificate?.internalValue;
        }
        if (this._commonName?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.commonName = this._commonName?.internalValue;
        }
        if (this._devicePosture?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.devicePosture = this._devicePosture?.internalValue;
        }
        if (this._email?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.email = this._email?.internalValue;
        }
        if (this._emailDomain?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.emailDomain = this._emailDomain?.internalValue;
        }
        if (this._emailList?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.emailList = this._emailList?.internalValue;
        }
        if (this._everyone?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.everyone = this._everyone?.internalValue;
        }
        if (this._externalEvaluation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.externalEvaluation = this._externalEvaluation?.internalValue;
        }
        if (this._geo?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.geo = this._geo?.internalValue;
        }
        if (this._githubOrganization?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.githubOrganization = this._githubOrganization?.internalValue;
        }
        if (this._group?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.group = this._group?.internalValue;
        }
        if (this._gsuite?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.gsuite = this._gsuite?.internalValue;
        }
        if (this._ip?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ip = this._ip?.internalValue;
        }
        if (this._ipList?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipList = this._ipList?.internalValue;
        }
        if (this._linkedAppToken?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.linkedAppToken = this._linkedAppToken?.internalValue;
        }
        if (this._loginMethod?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.loginMethod = this._loginMethod?.internalValue;
        }
        if (this._oidc?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.oidc = this._oidc?.internalValue;
        }
        if (this._okta?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.okta = this._okta?.internalValue;
        }
        if (this._saml?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.saml = this._saml?.internalValue;
        }
        if (this._serviceToken?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.serviceToken = this._serviceToken?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._anyValidServiceToken.internalValue = undefined;
            this._authContext.internalValue = undefined;
            this._authMethod.internalValue = undefined;
            this._azureAd.internalValue = undefined;
            this._certificate.internalValue = undefined;
            this._commonName.internalValue = undefined;
            this._devicePosture.internalValue = undefined;
            this._email.internalValue = undefined;
            this._emailDomain.internalValue = undefined;
            this._emailList.internalValue = undefined;
            this._everyone.internalValue = undefined;
            this._externalEvaluation.internalValue = undefined;
            this._geo.internalValue = undefined;
            this._githubOrganization.internalValue = undefined;
            this._group.internalValue = undefined;
            this._gsuite.internalValue = undefined;
            this._ip.internalValue = undefined;
            this._ipList.internalValue = undefined;
            this._linkedAppToken.internalValue = undefined;
            this._loginMethod.internalValue = undefined;
            this._oidc.internalValue = undefined;
            this._okta.internalValue = undefined;
            this._saml.internalValue = undefined;
            this._serviceToken.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._anyValidServiceToken.internalValue = value.anyValidServiceToken;
            this._authContext.internalValue = value.authContext;
            this._authMethod.internalValue = value.authMethod;
            this._azureAd.internalValue = value.azureAd;
            this._certificate.internalValue = value.certificate;
            this._commonName.internalValue = value.commonName;
            this._devicePosture.internalValue = value.devicePosture;
            this._email.internalValue = value.email;
            this._emailDomain.internalValue = value.emailDomain;
            this._emailList.internalValue = value.emailList;
            this._everyone.internalValue = value.everyone;
            this._externalEvaluation.internalValue = value.externalEvaluation;
            this._geo.internalValue = value.geo;
            this._githubOrganization.internalValue = value.githubOrganization;
            this._group.internalValue = value.group;
            this._gsuite.internalValue = value.gsuite;
            this._ip.internalValue = value.ip;
            this._ipList.internalValue = value.ipList;
            this._linkedAppToken.internalValue = value.linkedAppToken;
            this._loginMethod.internalValue = value.loginMethod;
            this._oidc.internalValue = value.oidc;
            this._okta.internalValue = value.okta;
            this._saml.internalValue = value.saml;
            this._serviceToken.internalValue = value.serviceToken;
        }
    }
    // any_valid_service_token - computed: false, optional: true, required: false
    _anyValidServiceToken = new ZeroTrustAccessApplicationPoliciesExcludeAnyValidServiceTokenOutputReference(this, "any_valid_service_token");
    get anyValidServiceToken() {
        return this._anyValidServiceToken;
    }
    putAnyValidServiceToken(value) {
        this._anyValidServiceToken.internalValue = value;
    }
    resetAnyValidServiceToken() {
        this._anyValidServiceToken.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get anyValidServiceTokenInput() {
        return this._anyValidServiceToken.internalValue;
    }
    // auth_context - computed: false, optional: true, required: false
    _authContext = new ZeroTrustAccessApplicationPoliciesExcludeAuthContextOutputReference(this, "auth_context");
    get authContext() {
        return this._authContext;
    }
    putAuthContext(value) {
        this._authContext.internalValue = value;
    }
    resetAuthContext() {
        this._authContext.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get authContextInput() {
        return this._authContext.internalValue;
    }
    // auth_method - computed: false, optional: true, required: false
    _authMethod = new ZeroTrustAccessApplicationPoliciesExcludeAuthMethodOutputReference(this, "auth_method");
    get authMethod() {
        return this._authMethod;
    }
    putAuthMethod(value) {
        this._authMethod.internalValue = value;
    }
    resetAuthMethod() {
        this._authMethod.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get authMethodInput() {
        return this._authMethod.internalValue;
    }
    // azure_ad - computed: false, optional: true, required: false
    _azureAd = new ZeroTrustAccessApplicationPoliciesExcludeAzureAdOutputReference(this, "azure_ad");
    get azureAd() {
        return this._azureAd;
    }
    putAzureAd(value) {
        this._azureAd.internalValue = value;
    }
    resetAzureAd() {
        this._azureAd.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get azureAdInput() {
        return this._azureAd.internalValue;
    }
    // certificate - computed: false, optional: true, required: false
    _certificate = new ZeroTrustAccessApplicationPoliciesExcludeCertificateOutputReference(this, "certificate");
    get certificate() {
        return this._certificate;
    }
    putCertificate(value) {
        this._certificate.internalValue = value;
    }
    resetCertificate() {
        this._certificate.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get certificateInput() {
        return this._certificate.internalValue;
    }
    // common_name - computed: false, optional: true, required: false
    _commonName = new ZeroTrustAccessApplicationPoliciesExcludeCommonNameOutputReference(this, "common_name");
    get commonName() {
        return this._commonName;
    }
    putCommonName(value) {
        this._commonName.internalValue = value;
    }
    resetCommonName() {
        this._commonName.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get commonNameInput() {
        return this._commonName.internalValue;
    }
    // device_posture - computed: false, optional: true, required: false
    _devicePosture = new ZeroTrustAccessApplicationPoliciesExcludeDevicePostureOutputReference(this, "device_posture");
    get devicePosture() {
        return this._devicePosture;
    }
    putDevicePosture(value) {
        this._devicePosture.internalValue = value;
    }
    resetDevicePosture() {
        this._devicePosture.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get devicePostureInput() {
        return this._devicePosture.internalValue;
    }
    // email - computed: false, optional: true, required: false
    _email = new ZeroTrustAccessApplicationPoliciesExcludeEmailOutputReference(this, "email");
    get email() {
        return this._email;
    }
    putEmail(value) {
        this._email.internalValue = value;
    }
    resetEmail() {
        this._email.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get emailInput() {
        return this._email.internalValue;
    }
    // email_domain - computed: false, optional: true, required: false
    _emailDomain = new ZeroTrustAccessApplicationPoliciesExcludeEmailDomainOutputReference(this, "email_domain");
    get emailDomain() {
        return this._emailDomain;
    }
    putEmailDomain(value) {
        this._emailDomain.internalValue = value;
    }
    resetEmailDomain() {
        this._emailDomain.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get emailDomainInput() {
        return this._emailDomain.internalValue;
    }
    // email_list - computed: false, optional: true, required: false
    _emailList = new ZeroTrustAccessApplicationPoliciesExcludeEmailListStructOutputReference(this, "email_list");
    get emailList() {
        return this._emailList;
    }
    putEmailList(value) {
        this._emailList.internalValue = value;
    }
    resetEmailList() {
        this._emailList.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get emailListInput() {
        return this._emailList.internalValue;
    }
    // everyone - computed: false, optional: true, required: false
    _everyone = new ZeroTrustAccessApplicationPoliciesExcludeEveryoneOutputReference(this, "everyone");
    get everyone() {
        return this._everyone;
    }
    putEveryone(value) {
        this._everyone.internalValue = value;
    }
    resetEveryone() {
        this._everyone.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get everyoneInput() {
        return this._everyone.internalValue;
    }
    // external_evaluation - computed: false, optional: true, required: false
    _externalEvaluation = new ZeroTrustAccessApplicationPoliciesExcludeExternalEvaluationOutputReference(this, "external_evaluation");
    get externalEvaluation() {
        return this._externalEvaluation;
    }
    putExternalEvaluation(value) {
        this._externalEvaluation.internalValue = value;
    }
    resetExternalEvaluation() {
        this._externalEvaluation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get externalEvaluationInput() {
        return this._externalEvaluation.internalValue;
    }
    // geo - computed: false, optional: true, required: false
    _geo = new ZeroTrustAccessApplicationPoliciesExcludeGeoOutputReference(this, "geo");
    get geo() {
        return this._geo;
    }
    putGeo(value) {
        this._geo.internalValue = value;
    }
    resetGeo() {
        this._geo.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get geoInput() {
        return this._geo.internalValue;
    }
    // github_organization - computed: false, optional: true, required: false
    _githubOrganization = new ZeroTrustAccessApplicationPoliciesExcludeGithubOrganizationOutputReference(this, "github_organization");
    get githubOrganization() {
        return this._githubOrganization;
    }
    putGithubOrganization(value) {
        this._githubOrganization.internalValue = value;
    }
    resetGithubOrganization() {
        this._githubOrganization.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get githubOrganizationInput() {
        return this._githubOrganization.internalValue;
    }
    // group - computed: false, optional: true, required: false
    _group = new ZeroTrustAccessApplicationPoliciesExcludeGroupOutputReference(this, "group");
    get group() {
        return this._group;
    }
    putGroup(value) {
        this._group.internalValue = value;
    }
    resetGroup() {
        this._group.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get groupInput() {
        return this._group.internalValue;
    }
    // gsuite - computed: false, optional: true, required: false
    _gsuite = new ZeroTrustAccessApplicationPoliciesExcludeGsuiteOutputReference(this, "gsuite");
    get gsuite() {
        return this._gsuite;
    }
    putGsuite(value) {
        this._gsuite.internalValue = value;
    }
    resetGsuite() {
        this._gsuite.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get gsuiteInput() {
        return this._gsuite.internalValue;
    }
    // ip - computed: false, optional: true, required: false
    _ip = new ZeroTrustAccessApplicationPoliciesExcludeIpOutputReference(this, "ip");
    get ip() {
        return this._ip;
    }
    putIp(value) {
        this._ip.internalValue = value;
    }
    resetIp() {
        this._ip.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipInput() {
        return this._ip.internalValue;
    }
    // ip_list - computed: false, optional: true, required: false
    _ipList = new ZeroTrustAccessApplicationPoliciesExcludeIpListStructOutputReference(this, "ip_list");
    get ipList() {
        return this._ipList;
    }
    putIpList(value) {
        this._ipList.internalValue = value;
    }
    resetIpList() {
        this._ipList.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipListInput() {
        return this._ipList.internalValue;
    }
    // linked_app_token - computed: false, optional: true, required: false
    _linkedAppToken = new ZeroTrustAccessApplicationPoliciesExcludeLinkedAppTokenOutputReference(this, "linked_app_token");
    get linkedAppToken() {
        return this._linkedAppToken;
    }
    putLinkedAppToken(value) {
        this._linkedAppToken.internalValue = value;
    }
    resetLinkedAppToken() {
        this._linkedAppToken.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get linkedAppTokenInput() {
        return this._linkedAppToken.internalValue;
    }
    // login_method - computed: false, optional: true, required: false
    _loginMethod = new ZeroTrustAccessApplicationPoliciesExcludeLoginMethodOutputReference(this, "login_method");
    get loginMethod() {
        return this._loginMethod;
    }
    putLoginMethod(value) {
        this._loginMethod.internalValue = value;
    }
    resetLoginMethod() {
        this._loginMethod.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get loginMethodInput() {
        return this._loginMethod.internalValue;
    }
    // oidc - computed: false, optional: true, required: false
    _oidc = new ZeroTrustAccessApplicationPoliciesExcludeOidcOutputReference(this, "oidc");
    get oidc() {
        return this._oidc;
    }
    putOidc(value) {
        this._oidc.internalValue = value;
    }
    resetOidc() {
        this._oidc.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get oidcInput() {
        return this._oidc.internalValue;
    }
    // okta - computed: false, optional: true, required: false
    _okta = new ZeroTrustAccessApplicationPoliciesExcludeOktaOutputReference(this, "okta");
    get okta() {
        return this._okta;
    }
    putOkta(value) {
        this._okta.internalValue = value;
    }
    resetOkta() {
        this._okta.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get oktaInput() {
        return this._okta.internalValue;
    }
    // saml - computed: false, optional: true, required: false
    _saml = new ZeroTrustAccessApplicationPoliciesExcludeSamlOutputReference(this, "saml");
    get saml() {
        return this._saml;
    }
    putSaml(value) {
        this._saml.internalValue = value;
    }
    resetSaml() {
        this._saml.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get samlInput() {
        return this._saml.internalValue;
    }
    // service_token - computed: false, optional: true, required: false
    _serviceToken = new ZeroTrustAccessApplicationPoliciesExcludeServiceTokenOutputReference(this, "service_token");
    get serviceToken() {
        return this._serviceToken;
    }
    putServiceToken(value) {
        this._serviceToken.internalValue = value;
    }
    resetServiceToken() {
        this._serviceToken.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get serviceTokenInput() {
        return this._serviceToken.internalValue;
    }
}
export class ZeroTrustAccessApplicationPoliciesExcludeList extends cdktf.ComplexList {
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
        return new ZeroTrustAccessApplicationPoliciesExcludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function zeroTrustAccessApplicationPoliciesIncludeAnyValidServiceTokenToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function zeroTrustAccessApplicationPoliciesIncludeAnyValidServiceTokenToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class ZeroTrustAccessApplicationPoliciesIncludeAnyValidServiceTokenOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
        }
    }
}
export function zeroTrustAccessApplicationPoliciesIncludeAuthContextToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        ac_id: cdktf.stringToTerraform(struct.acId),
        id: cdktf.stringToTerraform(struct.id),
        identity_provider_id: cdktf.stringToTerraform(struct.identityProviderId),
    };
}
export function zeroTrustAccessApplicationPoliciesIncludeAuthContextToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        ac_id: {
            value: cdktf.stringToHclTerraform(struct.acId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        identity_provider_id: {
            value: cdktf.stringToHclTerraform(struct.identityProviderId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationPoliciesIncludeAuthContextOutputReference extends cdktf.ComplexObject {
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
        if (this._acId !== undefined) {
            hasAnyValues = true;
            internalValueResult.acId = this._acId;
        }
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._identityProviderId !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityProviderId = this._identityProviderId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._acId = undefined;
            this._id = undefined;
            this._identityProviderId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._acId = value.acId;
            this._id = value.id;
            this._identityProviderId = value.identityProviderId;
        }
    }
    // ac_id - computed: false, optional: false, required: true
    _acId;
    get acId() {
        return this.getStringAttribute('ac_id');
    }
    set acId(value) {
        this._acId = value;
    }
    // Temporarily expose input value. Use with caution.
    get acIdInput() {
        return this._acId;
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
    // identity_provider_id - computed: false, optional: false, required: true
    _identityProviderId;
    get identityProviderId() {
        return this.getStringAttribute('identity_provider_id');
    }
    set identityProviderId(value) {
        this._identityProviderId = value;
    }
    // Temporarily expose input value. Use with caution.
    get identityProviderIdInput() {
        return this._identityProviderId;
    }
}
export function zeroTrustAccessApplicationPoliciesIncludeAuthMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        auth_method: cdktf.stringToTerraform(struct.authMethod),
    };
}
export function zeroTrustAccessApplicationPoliciesIncludeAuthMethodToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        auth_method: {
            value: cdktf.stringToHclTerraform(struct.authMethod),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationPoliciesIncludeAuthMethodOutputReference extends cdktf.ComplexObject {
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
        if (this._authMethod !== undefined) {
            hasAnyValues = true;
            internalValueResult.authMethod = this._authMethod;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authMethod = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authMethod = value.authMethod;
        }
    }
    // auth_method - computed: false, optional: false, required: true
    _authMethod;
    get authMethod() {
        return this.getStringAttribute('auth_method');
    }
    set authMethod(value) {
        this._authMethod = value;
    }
    // Temporarily expose input value. Use with caution.
    get authMethodInput() {
        return this._authMethod;
    }
}
export function zeroTrustAccessApplicationPoliciesIncludeAzureAdToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
        identity_provider_id: cdktf.stringToTerraform(struct.identityProviderId),
    };
}
export function zeroTrustAccessApplicationPoliciesIncludeAzureAdToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        identity_provider_id: {
            value: cdktf.stringToHclTerraform(struct.identityProviderId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationPoliciesIncludeAzureAdOutputReference extends cdktf.ComplexObject {
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
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._identityProviderId !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityProviderId = this._identityProviderId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._id = undefined;
            this._identityProviderId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._id = value.id;
            this._identityProviderId = value.identityProviderId;
        }
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
    // identity_provider_id - computed: false, optional: false, required: true
    _identityProviderId;
    get identityProviderId() {
        return this.getStringAttribute('identity_provider_id');
    }
    set identityProviderId(value) {
        this._identityProviderId = value;
    }
    // Temporarily expose input value. Use with caution.
    get identityProviderIdInput() {
        return this._identityProviderId;
    }
}
export function zeroTrustAccessApplicationPoliciesIncludeCertificateToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function zeroTrustAccessApplicationPoliciesIncludeCertificateToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class ZeroTrustAccessApplicationPoliciesIncludeCertificateOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
        }
    }
}
export function zeroTrustAccessApplicationPoliciesIncludeCommonNameToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        common_name: cdktf.stringToTerraform(struct.commonName),
    };
}
export function zeroTrustAccessApplicationPoliciesIncludeCommonNameToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        common_name: {
            value: cdktf.stringToHclTerraform(struct.commonName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationPoliciesIncludeCommonNameOutputReference extends cdktf.ComplexObject {
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
        if (this._commonName !== undefined) {
            hasAnyValues = true;
            internalValueResult.commonName = this._commonName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._commonName = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._commonName = value.commonName;
        }
    }
    // common_name - computed: false, optional: false, required: true
    _commonName;
    get commonName() {
        return this.getStringAttribute('common_name');
    }
    set commonName(value) {
        this._commonName = value;
    }
    // Temporarily expose input value. Use with caution.
    get commonNameInput() {
        return this._commonName;
    }
}
export function zeroTrustAccessApplicationPoliciesIncludeDevicePostureToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        integration_uid: cdktf.stringToTerraform(struct.integrationUid),
    };
}
export function zeroTrustAccessApplicationPoliciesIncludeDevicePostureToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        integration_uid: {
            value: cdktf.stringToHclTerraform(struct.integrationUid),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationPoliciesIncludeDevicePostureOutputReference extends cdktf.ComplexObject {
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
        if (this._integrationUid !== undefined) {
            hasAnyValues = true;
            internalValueResult.integrationUid = this._integrationUid;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._integrationUid = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._integrationUid = value.integrationUid;
        }
    }
    // integration_uid - computed: false, optional: false, required: true
    _integrationUid;
    get integrationUid() {
        return this.getStringAttribute('integration_uid');
    }
    set integrationUid(value) {
        this._integrationUid = value;
    }
    // Temporarily expose input value. Use with caution.
    get integrationUidInput() {
        return this._integrationUid;
    }
}
export function zeroTrustAccessApplicationPoliciesIncludeEmailToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        email: cdktf.stringToTerraform(struct.email),
    };
}
export function zeroTrustAccessApplicationPoliciesIncludeEmailToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        email: {
            value: cdktf.stringToHclTerraform(struct.email),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationPoliciesIncludeEmailOutputReference extends cdktf.ComplexObject {
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
        if (this._email !== undefined) {
            hasAnyValues = true;
            internalValueResult.email = this._email;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._email = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._email = value.email;
        }
    }
    // email - computed: false, optional: false, required: true
    _email;
    get email() {
        return this.getStringAttribute('email');
    }
    set email(value) {
        this._email = value;
    }
    // Temporarily expose input value. Use with caution.
    get emailInput() {
        return this._email;
    }
}
export function zeroTrustAccessApplicationPoliciesIncludeEmailDomainToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        domain: cdktf.stringToTerraform(struct.domain),
    };
}
export function zeroTrustAccessApplicationPoliciesIncludeEmailDomainToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        domain: {
            value: cdktf.stringToHclTerraform(struct.domain),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationPoliciesIncludeEmailDomainOutputReference extends cdktf.ComplexObject {
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
        if (this._domain !== undefined) {
            hasAnyValues = true;
            internalValueResult.domain = this._domain;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._domain = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._domain = value.domain;
        }
    }
    // domain - computed: false, optional: false, required: true
    _domain;
    get domain() {
        return this.getStringAttribute('domain');
    }
    set domain(value) {
        this._domain = value;
    }
    // Temporarily expose input value. Use with caution.
    get domainInput() {
        return this._domain;
    }
}
export function zeroTrustAccessApplicationPoliciesIncludeEmailListStructToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
    };
}
export function zeroTrustAccessApplicationPoliciesIncludeEmailListStructToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationPoliciesIncludeEmailListStructOutputReference extends cdktf.ComplexObject {
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
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._id = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._id = value.id;
        }
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
}
export function zeroTrustAccessApplicationPoliciesIncludeEveryoneToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function zeroTrustAccessApplicationPoliciesIncludeEveryoneToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class ZeroTrustAccessApplicationPoliciesIncludeEveryoneOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
        }
    }
}
export function zeroTrustAccessApplicationPoliciesIncludeExternalEvaluationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        evaluate_url: cdktf.stringToTerraform(struct.evaluateUrl),
        keys_url: cdktf.stringToTerraform(struct.keysUrl),
    };
}
export function zeroTrustAccessApplicationPoliciesIncludeExternalEvaluationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        evaluate_url: {
            value: cdktf.stringToHclTerraform(struct.evaluateUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        keys_url: {
            value: cdktf.stringToHclTerraform(struct.keysUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationPoliciesIncludeExternalEvaluationOutputReference extends cdktf.ComplexObject {
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
        if (this._evaluateUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.evaluateUrl = this._evaluateUrl;
        }
        if (this._keysUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.keysUrl = this._keysUrl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._evaluateUrl = undefined;
            this._keysUrl = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._evaluateUrl = value.evaluateUrl;
            this._keysUrl = value.keysUrl;
        }
    }
    // evaluate_url - computed: false, optional: false, required: true
    _evaluateUrl;
    get evaluateUrl() {
        return this.getStringAttribute('evaluate_url');
    }
    set evaluateUrl(value) {
        this._evaluateUrl = value;
    }
    // Temporarily expose input value. Use with caution.
    get evaluateUrlInput() {
        return this._evaluateUrl;
    }
    // keys_url - computed: false, optional: false, required: true
    _keysUrl;
    get keysUrl() {
        return this.getStringAttribute('keys_url');
    }
    set keysUrl(value) {
        this._keysUrl = value;
    }
    // Temporarily expose input value. Use with caution.
    get keysUrlInput() {
        return this._keysUrl;
    }
}
export function zeroTrustAccessApplicationPoliciesIncludeGeoToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        country_code: cdktf.stringToTerraform(struct.countryCode),
    };
}
export function zeroTrustAccessApplicationPoliciesIncludeGeoToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        country_code: {
            value: cdktf.stringToHclTerraform(struct.countryCode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationPoliciesIncludeGeoOutputReference extends cdktf.ComplexObject {
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
        if (this._countryCode !== undefined) {
            hasAnyValues = true;
            internalValueResult.countryCode = this._countryCode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._countryCode = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._countryCode = value.countryCode;
        }
    }
    // country_code - computed: false, optional: false, required: true
    _countryCode;
    get countryCode() {
        return this.getStringAttribute('country_code');
    }
    set countryCode(value) {
        this._countryCode = value;
    }
    // Temporarily expose input value. Use with caution.
    get countryCodeInput() {
        return this._countryCode;
    }
}
export function zeroTrustAccessApplicationPoliciesIncludeGithubOrganizationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        identity_provider_id: cdktf.stringToTerraform(struct.identityProviderId),
        name: cdktf.stringToTerraform(struct.name),
        team: cdktf.stringToTerraform(struct.team),
    };
}
export function zeroTrustAccessApplicationPoliciesIncludeGithubOrganizationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        identity_provider_id: {
            value: cdktf.stringToHclTerraform(struct.identityProviderId),
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
        team: {
            value: cdktf.stringToHclTerraform(struct.team),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationPoliciesIncludeGithubOrganizationOutputReference extends cdktf.ComplexObject {
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
        if (this._identityProviderId !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityProviderId = this._identityProviderId;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._team !== undefined) {
            hasAnyValues = true;
            internalValueResult.team = this._team;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._identityProviderId = undefined;
            this._name = undefined;
            this._team = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._identityProviderId = value.identityProviderId;
            this._name = value.name;
            this._team = value.team;
        }
    }
    // identity_provider_id - computed: false, optional: false, required: true
    _identityProviderId;
    get identityProviderId() {
        return this.getStringAttribute('identity_provider_id');
    }
    set identityProviderId(value) {
        this._identityProviderId = value;
    }
    // Temporarily expose input value. Use with caution.
    get identityProviderIdInput() {
        return this._identityProviderId;
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
    // team - computed: false, optional: true, required: false
    _team;
    get team() {
        return this.getStringAttribute('team');
    }
    set team(value) {
        this._team = value;
    }
    resetTeam() {
        this._team = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get teamInput() {
        return this._team;
    }
}
export function zeroTrustAccessApplicationPoliciesIncludeGroupToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
    };
}
export function zeroTrustAccessApplicationPoliciesIncludeGroupToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationPoliciesIncludeGroupOutputReference extends cdktf.ComplexObject {
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
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._id = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._id = value.id;
        }
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
}
export function zeroTrustAccessApplicationPoliciesIncludeGsuiteToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        email: cdktf.stringToTerraform(struct.email),
        identity_provider_id: cdktf.stringToTerraform(struct.identityProviderId),
    };
}
export function zeroTrustAccessApplicationPoliciesIncludeGsuiteToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        email: {
            value: cdktf.stringToHclTerraform(struct.email),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        identity_provider_id: {
            value: cdktf.stringToHclTerraform(struct.identityProviderId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationPoliciesIncludeGsuiteOutputReference extends cdktf.ComplexObject {
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
        if (this._email !== undefined) {
            hasAnyValues = true;
            internalValueResult.email = this._email;
        }
        if (this._identityProviderId !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityProviderId = this._identityProviderId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._email = undefined;
            this._identityProviderId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._email = value.email;
            this._identityProviderId = value.identityProviderId;
        }
    }
    // email - computed: false, optional: false, required: true
    _email;
    get email() {
        return this.getStringAttribute('email');
    }
    set email(value) {
        this._email = value;
    }
    // Temporarily expose input value. Use with caution.
    get emailInput() {
        return this._email;
    }
    // identity_provider_id - computed: false, optional: false, required: true
    _identityProviderId;
    get identityProviderId() {
        return this.getStringAttribute('identity_provider_id');
    }
    set identityProviderId(value) {
        this._identityProviderId = value;
    }
    // Temporarily expose input value. Use with caution.
    get identityProviderIdInput() {
        return this._identityProviderId;
    }
}
export function zeroTrustAccessApplicationPoliciesIncludeIpToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        ip: cdktf.stringToTerraform(struct.ip),
    };
}
export function zeroTrustAccessApplicationPoliciesIncludeIpToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        ip: {
            value: cdktf.stringToHclTerraform(struct.ip),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationPoliciesIncludeIpOutputReference extends cdktf.ComplexObject {
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
        if (this._ip !== undefined) {
            hasAnyValues = true;
            internalValueResult.ip = this._ip;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ip = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ip = value.ip;
        }
    }
    // ip - computed: false, optional: false, required: true
    _ip;
    get ip() {
        return this.getStringAttribute('ip');
    }
    set ip(value) {
        this._ip = value;
    }
    // Temporarily expose input value. Use with caution.
    get ipInput() {
        return this._ip;
    }
}
export function zeroTrustAccessApplicationPoliciesIncludeIpListStructToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
    };
}
export function zeroTrustAccessApplicationPoliciesIncludeIpListStructToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationPoliciesIncludeIpListStructOutputReference extends cdktf.ComplexObject {
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
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._id = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._id = value.id;
        }
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
}
export function zeroTrustAccessApplicationPoliciesIncludeLinkedAppTokenToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        app_uid: cdktf.stringToTerraform(struct.appUid),
    };
}
export function zeroTrustAccessApplicationPoliciesIncludeLinkedAppTokenToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        app_uid: {
            value: cdktf.stringToHclTerraform(struct.appUid),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationPoliciesIncludeLinkedAppTokenOutputReference extends cdktf.ComplexObject {
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
        if (this._appUid !== undefined) {
            hasAnyValues = true;
            internalValueResult.appUid = this._appUid;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._appUid = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._appUid = value.appUid;
        }
    }
    // app_uid - computed: false, optional: false, required: true
    _appUid;
    get appUid() {
        return this.getStringAttribute('app_uid');
    }
    set appUid(value) {
        this._appUid = value;
    }
    // Temporarily expose input value. Use with caution.
    get appUidInput() {
        return this._appUid;
    }
}
export function zeroTrustAccessApplicationPoliciesIncludeLoginMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
    };
}
export function zeroTrustAccessApplicationPoliciesIncludeLoginMethodToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationPoliciesIncludeLoginMethodOutputReference extends cdktf.ComplexObject {
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
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._id = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._id = value.id;
        }
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
}
export function zeroTrustAccessApplicationPoliciesIncludeOidcToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        claim_name: cdktf.stringToTerraform(struct.claimName),
        claim_value: cdktf.stringToTerraform(struct.claimValue),
        identity_provider_id: cdktf.stringToTerraform(struct.identityProviderId),
    };
}
export function zeroTrustAccessApplicationPoliciesIncludeOidcToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        claim_name: {
            value: cdktf.stringToHclTerraform(struct.claimName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        claim_value: {
            value: cdktf.stringToHclTerraform(struct.claimValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        identity_provider_id: {
            value: cdktf.stringToHclTerraform(struct.identityProviderId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationPoliciesIncludeOidcOutputReference extends cdktf.ComplexObject {
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
        if (this._claimName !== undefined) {
            hasAnyValues = true;
            internalValueResult.claimName = this._claimName;
        }
        if (this._claimValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.claimValue = this._claimValue;
        }
        if (this._identityProviderId !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityProviderId = this._identityProviderId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._claimName = undefined;
            this._claimValue = undefined;
            this._identityProviderId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._claimName = value.claimName;
            this._claimValue = value.claimValue;
            this._identityProviderId = value.identityProviderId;
        }
    }
    // claim_name - computed: false, optional: false, required: true
    _claimName;
    get claimName() {
        return this.getStringAttribute('claim_name');
    }
    set claimName(value) {
        this._claimName = value;
    }
    // Temporarily expose input value. Use with caution.
    get claimNameInput() {
        return this._claimName;
    }
    // claim_value - computed: false, optional: false, required: true
    _claimValue;
    get claimValue() {
        return this.getStringAttribute('claim_value');
    }
    set claimValue(value) {
        this._claimValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get claimValueInput() {
        return this._claimValue;
    }
    // identity_provider_id - computed: false, optional: false, required: true
    _identityProviderId;
    get identityProviderId() {
        return this.getStringAttribute('identity_provider_id');
    }
    set identityProviderId(value) {
        this._identityProviderId = value;
    }
    // Temporarily expose input value. Use with caution.
    get identityProviderIdInput() {
        return this._identityProviderId;
    }
}
export function zeroTrustAccessApplicationPoliciesIncludeOktaToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        identity_provider_id: cdktf.stringToTerraform(struct.identityProviderId),
        name: cdktf.stringToTerraform(struct.name),
    };
}
export function zeroTrustAccessApplicationPoliciesIncludeOktaToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        identity_provider_id: {
            value: cdktf.stringToHclTerraform(struct.identityProviderId),
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
export class ZeroTrustAccessApplicationPoliciesIncludeOktaOutputReference extends cdktf.ComplexObject {
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
        if (this._identityProviderId !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityProviderId = this._identityProviderId;
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
            this._identityProviderId = undefined;
            this._name = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._identityProviderId = value.identityProviderId;
            this._name = value.name;
        }
    }
    // identity_provider_id - computed: false, optional: false, required: true
    _identityProviderId;
    get identityProviderId() {
        return this.getStringAttribute('identity_provider_id');
    }
    set identityProviderId(value) {
        this._identityProviderId = value;
    }
    // Temporarily expose input value. Use with caution.
    get identityProviderIdInput() {
        return this._identityProviderId;
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
}
export function zeroTrustAccessApplicationPoliciesIncludeSamlToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        attribute_name: cdktf.stringToTerraform(struct.attributeName),
        attribute_value: cdktf.stringToTerraform(struct.attributeValue),
        identity_provider_id: cdktf.stringToTerraform(struct.identityProviderId),
    };
}
export function zeroTrustAccessApplicationPoliciesIncludeSamlToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        attribute_name: {
            value: cdktf.stringToHclTerraform(struct.attributeName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        attribute_value: {
            value: cdktf.stringToHclTerraform(struct.attributeValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        identity_provider_id: {
            value: cdktf.stringToHclTerraform(struct.identityProviderId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationPoliciesIncludeSamlOutputReference extends cdktf.ComplexObject {
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
        if (this._attributeName !== undefined) {
            hasAnyValues = true;
            internalValueResult.attributeName = this._attributeName;
        }
        if (this._attributeValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.attributeValue = this._attributeValue;
        }
        if (this._identityProviderId !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityProviderId = this._identityProviderId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._attributeName = undefined;
            this._attributeValue = undefined;
            this._identityProviderId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._attributeName = value.attributeName;
            this._attributeValue = value.attributeValue;
            this._identityProviderId = value.identityProviderId;
        }
    }
    // attribute_name - computed: false, optional: false, required: true
    _attributeName;
    get attributeName() {
        return this.getStringAttribute('attribute_name');
    }
    set attributeName(value) {
        this._attributeName = value;
    }
    // Temporarily expose input value. Use with caution.
    get attributeNameInput() {
        return this._attributeName;
    }
    // attribute_value - computed: false, optional: false, required: true
    _attributeValue;
    get attributeValue() {
        return this.getStringAttribute('attribute_value');
    }
    set attributeValue(value) {
        this._attributeValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get attributeValueInput() {
        return this._attributeValue;
    }
    // identity_provider_id - computed: false, optional: false, required: true
    _identityProviderId;
    get identityProviderId() {
        return this.getStringAttribute('identity_provider_id');
    }
    set identityProviderId(value) {
        this._identityProviderId = value;
    }
    // Temporarily expose input value. Use with caution.
    get identityProviderIdInput() {
        return this._identityProviderId;
    }
}
export function zeroTrustAccessApplicationPoliciesIncludeServiceTokenToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        token_id: cdktf.stringToTerraform(struct.tokenId),
    };
}
export function zeroTrustAccessApplicationPoliciesIncludeServiceTokenToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        token_id: {
            value: cdktf.stringToHclTerraform(struct.tokenId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationPoliciesIncludeServiceTokenOutputReference extends cdktf.ComplexObject {
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
        if (this._tokenId !== undefined) {
            hasAnyValues = true;
            internalValueResult.tokenId = this._tokenId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._tokenId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._tokenId = value.tokenId;
        }
    }
    // token_id - computed: false, optional: false, required: true
    _tokenId;
    get tokenId() {
        return this.getStringAttribute('token_id');
    }
    set tokenId(value) {
        this._tokenId = value;
    }
    // Temporarily expose input value. Use with caution.
    get tokenIdInput() {
        return this._tokenId;
    }
}
export function zeroTrustAccessApplicationPoliciesIncludeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        any_valid_service_token: zeroTrustAccessApplicationPoliciesIncludeAnyValidServiceTokenToTerraform(struct.anyValidServiceToken),
        auth_context: zeroTrustAccessApplicationPoliciesIncludeAuthContextToTerraform(struct.authContext),
        auth_method: zeroTrustAccessApplicationPoliciesIncludeAuthMethodToTerraform(struct.authMethod),
        azure_ad: zeroTrustAccessApplicationPoliciesIncludeAzureAdToTerraform(struct.azureAd),
        certificate: zeroTrustAccessApplicationPoliciesIncludeCertificateToTerraform(struct.certificate),
        common_name: zeroTrustAccessApplicationPoliciesIncludeCommonNameToTerraform(struct.commonName),
        device_posture: zeroTrustAccessApplicationPoliciesIncludeDevicePostureToTerraform(struct.devicePosture),
        email: zeroTrustAccessApplicationPoliciesIncludeEmailToTerraform(struct.email),
        email_domain: zeroTrustAccessApplicationPoliciesIncludeEmailDomainToTerraform(struct.emailDomain),
        email_list: zeroTrustAccessApplicationPoliciesIncludeEmailListStructToTerraform(struct.emailList),
        everyone: zeroTrustAccessApplicationPoliciesIncludeEveryoneToTerraform(struct.everyone),
        external_evaluation: zeroTrustAccessApplicationPoliciesIncludeExternalEvaluationToTerraform(struct.externalEvaluation),
        geo: zeroTrustAccessApplicationPoliciesIncludeGeoToTerraform(struct.geo),
        github_organization: zeroTrustAccessApplicationPoliciesIncludeGithubOrganizationToTerraform(struct.githubOrganization),
        group: zeroTrustAccessApplicationPoliciesIncludeGroupToTerraform(struct.group),
        gsuite: zeroTrustAccessApplicationPoliciesIncludeGsuiteToTerraform(struct.gsuite),
        ip: zeroTrustAccessApplicationPoliciesIncludeIpToTerraform(struct.ip),
        ip_list: zeroTrustAccessApplicationPoliciesIncludeIpListStructToTerraform(struct.ipList),
        linked_app_token: zeroTrustAccessApplicationPoliciesIncludeLinkedAppTokenToTerraform(struct.linkedAppToken),
        login_method: zeroTrustAccessApplicationPoliciesIncludeLoginMethodToTerraform(struct.loginMethod),
        oidc: zeroTrustAccessApplicationPoliciesIncludeOidcToTerraform(struct.oidc),
        okta: zeroTrustAccessApplicationPoliciesIncludeOktaToTerraform(struct.okta),
        saml: zeroTrustAccessApplicationPoliciesIncludeSamlToTerraform(struct.saml),
        service_token: zeroTrustAccessApplicationPoliciesIncludeServiceTokenToTerraform(struct.serviceToken),
    };
}
export function zeroTrustAccessApplicationPoliciesIncludeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        any_valid_service_token: {
            value: zeroTrustAccessApplicationPoliciesIncludeAnyValidServiceTokenToHclTerraform(struct.anyValidServiceToken),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesIncludeAnyValidServiceToken",
        },
        auth_context: {
            value: zeroTrustAccessApplicationPoliciesIncludeAuthContextToHclTerraform(struct.authContext),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesIncludeAuthContext",
        },
        auth_method: {
            value: zeroTrustAccessApplicationPoliciesIncludeAuthMethodToHclTerraform(struct.authMethod),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesIncludeAuthMethod",
        },
        azure_ad: {
            value: zeroTrustAccessApplicationPoliciesIncludeAzureAdToHclTerraform(struct.azureAd),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesIncludeAzureAd",
        },
        certificate: {
            value: zeroTrustAccessApplicationPoliciesIncludeCertificateToHclTerraform(struct.certificate),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesIncludeCertificate",
        },
        common_name: {
            value: zeroTrustAccessApplicationPoliciesIncludeCommonNameToHclTerraform(struct.commonName),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesIncludeCommonName",
        },
        device_posture: {
            value: zeroTrustAccessApplicationPoliciesIncludeDevicePostureToHclTerraform(struct.devicePosture),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesIncludeDevicePosture",
        },
        email: {
            value: zeroTrustAccessApplicationPoliciesIncludeEmailToHclTerraform(struct.email),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesIncludeEmail",
        },
        email_domain: {
            value: zeroTrustAccessApplicationPoliciesIncludeEmailDomainToHclTerraform(struct.emailDomain),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesIncludeEmailDomain",
        },
        email_list: {
            value: zeroTrustAccessApplicationPoliciesIncludeEmailListStructToHclTerraform(struct.emailList),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesIncludeEmailListStruct",
        },
        everyone: {
            value: zeroTrustAccessApplicationPoliciesIncludeEveryoneToHclTerraform(struct.everyone),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesIncludeEveryone",
        },
        external_evaluation: {
            value: zeroTrustAccessApplicationPoliciesIncludeExternalEvaluationToHclTerraform(struct.externalEvaluation),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesIncludeExternalEvaluation",
        },
        geo: {
            value: zeroTrustAccessApplicationPoliciesIncludeGeoToHclTerraform(struct.geo),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesIncludeGeo",
        },
        github_organization: {
            value: zeroTrustAccessApplicationPoliciesIncludeGithubOrganizationToHclTerraform(struct.githubOrganization),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesIncludeGithubOrganization",
        },
        group: {
            value: zeroTrustAccessApplicationPoliciesIncludeGroupToHclTerraform(struct.group),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesIncludeGroup",
        },
        gsuite: {
            value: zeroTrustAccessApplicationPoliciesIncludeGsuiteToHclTerraform(struct.gsuite),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesIncludeGsuite",
        },
        ip: {
            value: zeroTrustAccessApplicationPoliciesIncludeIpToHclTerraform(struct.ip),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesIncludeIp",
        },
        ip_list: {
            value: zeroTrustAccessApplicationPoliciesIncludeIpListStructToHclTerraform(struct.ipList),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesIncludeIpListStruct",
        },
        linked_app_token: {
            value: zeroTrustAccessApplicationPoliciesIncludeLinkedAppTokenToHclTerraform(struct.linkedAppToken),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesIncludeLinkedAppToken",
        },
        login_method: {
            value: zeroTrustAccessApplicationPoliciesIncludeLoginMethodToHclTerraform(struct.loginMethod),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesIncludeLoginMethod",
        },
        oidc: {
            value: zeroTrustAccessApplicationPoliciesIncludeOidcToHclTerraform(struct.oidc),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesIncludeOidc",
        },
        okta: {
            value: zeroTrustAccessApplicationPoliciesIncludeOktaToHclTerraform(struct.okta),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesIncludeOkta",
        },
        saml: {
            value: zeroTrustAccessApplicationPoliciesIncludeSamlToHclTerraform(struct.saml),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesIncludeSaml",
        },
        service_token: {
            value: zeroTrustAccessApplicationPoliciesIncludeServiceTokenToHclTerraform(struct.serviceToken),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesIncludeServiceToken",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationPoliciesIncludeOutputReference extends cdktf.ComplexObject {
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
        if (this._anyValidServiceToken?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.anyValidServiceToken = this._anyValidServiceToken?.internalValue;
        }
        if (this._authContext?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.authContext = this._authContext?.internalValue;
        }
        if (this._authMethod?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.authMethod = this._authMethod?.internalValue;
        }
        if (this._azureAd?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.azureAd = this._azureAd?.internalValue;
        }
        if (this._certificate?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.certificate = this._certificate?.internalValue;
        }
        if (this._commonName?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.commonName = this._commonName?.internalValue;
        }
        if (this._devicePosture?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.devicePosture = this._devicePosture?.internalValue;
        }
        if (this._email?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.email = this._email?.internalValue;
        }
        if (this._emailDomain?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.emailDomain = this._emailDomain?.internalValue;
        }
        if (this._emailList?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.emailList = this._emailList?.internalValue;
        }
        if (this._everyone?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.everyone = this._everyone?.internalValue;
        }
        if (this._externalEvaluation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.externalEvaluation = this._externalEvaluation?.internalValue;
        }
        if (this._geo?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.geo = this._geo?.internalValue;
        }
        if (this._githubOrganization?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.githubOrganization = this._githubOrganization?.internalValue;
        }
        if (this._group?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.group = this._group?.internalValue;
        }
        if (this._gsuite?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.gsuite = this._gsuite?.internalValue;
        }
        if (this._ip?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ip = this._ip?.internalValue;
        }
        if (this._ipList?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipList = this._ipList?.internalValue;
        }
        if (this._linkedAppToken?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.linkedAppToken = this._linkedAppToken?.internalValue;
        }
        if (this._loginMethod?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.loginMethod = this._loginMethod?.internalValue;
        }
        if (this._oidc?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.oidc = this._oidc?.internalValue;
        }
        if (this._okta?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.okta = this._okta?.internalValue;
        }
        if (this._saml?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.saml = this._saml?.internalValue;
        }
        if (this._serviceToken?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.serviceToken = this._serviceToken?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._anyValidServiceToken.internalValue = undefined;
            this._authContext.internalValue = undefined;
            this._authMethod.internalValue = undefined;
            this._azureAd.internalValue = undefined;
            this._certificate.internalValue = undefined;
            this._commonName.internalValue = undefined;
            this._devicePosture.internalValue = undefined;
            this._email.internalValue = undefined;
            this._emailDomain.internalValue = undefined;
            this._emailList.internalValue = undefined;
            this._everyone.internalValue = undefined;
            this._externalEvaluation.internalValue = undefined;
            this._geo.internalValue = undefined;
            this._githubOrganization.internalValue = undefined;
            this._group.internalValue = undefined;
            this._gsuite.internalValue = undefined;
            this._ip.internalValue = undefined;
            this._ipList.internalValue = undefined;
            this._linkedAppToken.internalValue = undefined;
            this._loginMethod.internalValue = undefined;
            this._oidc.internalValue = undefined;
            this._okta.internalValue = undefined;
            this._saml.internalValue = undefined;
            this._serviceToken.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._anyValidServiceToken.internalValue = value.anyValidServiceToken;
            this._authContext.internalValue = value.authContext;
            this._authMethod.internalValue = value.authMethod;
            this._azureAd.internalValue = value.azureAd;
            this._certificate.internalValue = value.certificate;
            this._commonName.internalValue = value.commonName;
            this._devicePosture.internalValue = value.devicePosture;
            this._email.internalValue = value.email;
            this._emailDomain.internalValue = value.emailDomain;
            this._emailList.internalValue = value.emailList;
            this._everyone.internalValue = value.everyone;
            this._externalEvaluation.internalValue = value.externalEvaluation;
            this._geo.internalValue = value.geo;
            this._githubOrganization.internalValue = value.githubOrganization;
            this._group.internalValue = value.group;
            this._gsuite.internalValue = value.gsuite;
            this._ip.internalValue = value.ip;
            this._ipList.internalValue = value.ipList;
            this._linkedAppToken.internalValue = value.linkedAppToken;
            this._loginMethod.internalValue = value.loginMethod;
            this._oidc.internalValue = value.oidc;
            this._okta.internalValue = value.okta;
            this._saml.internalValue = value.saml;
            this._serviceToken.internalValue = value.serviceToken;
        }
    }
    // any_valid_service_token - computed: false, optional: true, required: false
    _anyValidServiceToken = new ZeroTrustAccessApplicationPoliciesIncludeAnyValidServiceTokenOutputReference(this, "any_valid_service_token");
    get anyValidServiceToken() {
        return this._anyValidServiceToken;
    }
    putAnyValidServiceToken(value) {
        this._anyValidServiceToken.internalValue = value;
    }
    resetAnyValidServiceToken() {
        this._anyValidServiceToken.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get anyValidServiceTokenInput() {
        return this._anyValidServiceToken.internalValue;
    }
    // auth_context - computed: false, optional: true, required: false
    _authContext = new ZeroTrustAccessApplicationPoliciesIncludeAuthContextOutputReference(this, "auth_context");
    get authContext() {
        return this._authContext;
    }
    putAuthContext(value) {
        this._authContext.internalValue = value;
    }
    resetAuthContext() {
        this._authContext.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get authContextInput() {
        return this._authContext.internalValue;
    }
    // auth_method - computed: false, optional: true, required: false
    _authMethod = new ZeroTrustAccessApplicationPoliciesIncludeAuthMethodOutputReference(this, "auth_method");
    get authMethod() {
        return this._authMethod;
    }
    putAuthMethod(value) {
        this._authMethod.internalValue = value;
    }
    resetAuthMethod() {
        this._authMethod.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get authMethodInput() {
        return this._authMethod.internalValue;
    }
    // azure_ad - computed: false, optional: true, required: false
    _azureAd = new ZeroTrustAccessApplicationPoliciesIncludeAzureAdOutputReference(this, "azure_ad");
    get azureAd() {
        return this._azureAd;
    }
    putAzureAd(value) {
        this._azureAd.internalValue = value;
    }
    resetAzureAd() {
        this._azureAd.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get azureAdInput() {
        return this._azureAd.internalValue;
    }
    // certificate - computed: false, optional: true, required: false
    _certificate = new ZeroTrustAccessApplicationPoliciesIncludeCertificateOutputReference(this, "certificate");
    get certificate() {
        return this._certificate;
    }
    putCertificate(value) {
        this._certificate.internalValue = value;
    }
    resetCertificate() {
        this._certificate.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get certificateInput() {
        return this._certificate.internalValue;
    }
    // common_name - computed: false, optional: true, required: false
    _commonName = new ZeroTrustAccessApplicationPoliciesIncludeCommonNameOutputReference(this, "common_name");
    get commonName() {
        return this._commonName;
    }
    putCommonName(value) {
        this._commonName.internalValue = value;
    }
    resetCommonName() {
        this._commonName.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get commonNameInput() {
        return this._commonName.internalValue;
    }
    // device_posture - computed: false, optional: true, required: false
    _devicePosture = new ZeroTrustAccessApplicationPoliciesIncludeDevicePostureOutputReference(this, "device_posture");
    get devicePosture() {
        return this._devicePosture;
    }
    putDevicePosture(value) {
        this._devicePosture.internalValue = value;
    }
    resetDevicePosture() {
        this._devicePosture.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get devicePostureInput() {
        return this._devicePosture.internalValue;
    }
    // email - computed: false, optional: true, required: false
    _email = new ZeroTrustAccessApplicationPoliciesIncludeEmailOutputReference(this, "email");
    get email() {
        return this._email;
    }
    putEmail(value) {
        this._email.internalValue = value;
    }
    resetEmail() {
        this._email.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get emailInput() {
        return this._email.internalValue;
    }
    // email_domain - computed: false, optional: true, required: false
    _emailDomain = new ZeroTrustAccessApplicationPoliciesIncludeEmailDomainOutputReference(this, "email_domain");
    get emailDomain() {
        return this._emailDomain;
    }
    putEmailDomain(value) {
        this._emailDomain.internalValue = value;
    }
    resetEmailDomain() {
        this._emailDomain.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get emailDomainInput() {
        return this._emailDomain.internalValue;
    }
    // email_list - computed: false, optional: true, required: false
    _emailList = new ZeroTrustAccessApplicationPoliciesIncludeEmailListStructOutputReference(this, "email_list");
    get emailList() {
        return this._emailList;
    }
    putEmailList(value) {
        this._emailList.internalValue = value;
    }
    resetEmailList() {
        this._emailList.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get emailListInput() {
        return this._emailList.internalValue;
    }
    // everyone - computed: false, optional: true, required: false
    _everyone = new ZeroTrustAccessApplicationPoliciesIncludeEveryoneOutputReference(this, "everyone");
    get everyone() {
        return this._everyone;
    }
    putEveryone(value) {
        this._everyone.internalValue = value;
    }
    resetEveryone() {
        this._everyone.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get everyoneInput() {
        return this._everyone.internalValue;
    }
    // external_evaluation - computed: false, optional: true, required: false
    _externalEvaluation = new ZeroTrustAccessApplicationPoliciesIncludeExternalEvaluationOutputReference(this, "external_evaluation");
    get externalEvaluation() {
        return this._externalEvaluation;
    }
    putExternalEvaluation(value) {
        this._externalEvaluation.internalValue = value;
    }
    resetExternalEvaluation() {
        this._externalEvaluation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get externalEvaluationInput() {
        return this._externalEvaluation.internalValue;
    }
    // geo - computed: false, optional: true, required: false
    _geo = new ZeroTrustAccessApplicationPoliciesIncludeGeoOutputReference(this, "geo");
    get geo() {
        return this._geo;
    }
    putGeo(value) {
        this._geo.internalValue = value;
    }
    resetGeo() {
        this._geo.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get geoInput() {
        return this._geo.internalValue;
    }
    // github_organization - computed: false, optional: true, required: false
    _githubOrganization = new ZeroTrustAccessApplicationPoliciesIncludeGithubOrganizationOutputReference(this, "github_organization");
    get githubOrganization() {
        return this._githubOrganization;
    }
    putGithubOrganization(value) {
        this._githubOrganization.internalValue = value;
    }
    resetGithubOrganization() {
        this._githubOrganization.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get githubOrganizationInput() {
        return this._githubOrganization.internalValue;
    }
    // group - computed: false, optional: true, required: false
    _group = new ZeroTrustAccessApplicationPoliciesIncludeGroupOutputReference(this, "group");
    get group() {
        return this._group;
    }
    putGroup(value) {
        this._group.internalValue = value;
    }
    resetGroup() {
        this._group.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get groupInput() {
        return this._group.internalValue;
    }
    // gsuite - computed: false, optional: true, required: false
    _gsuite = new ZeroTrustAccessApplicationPoliciesIncludeGsuiteOutputReference(this, "gsuite");
    get gsuite() {
        return this._gsuite;
    }
    putGsuite(value) {
        this._gsuite.internalValue = value;
    }
    resetGsuite() {
        this._gsuite.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get gsuiteInput() {
        return this._gsuite.internalValue;
    }
    // ip - computed: false, optional: true, required: false
    _ip = new ZeroTrustAccessApplicationPoliciesIncludeIpOutputReference(this, "ip");
    get ip() {
        return this._ip;
    }
    putIp(value) {
        this._ip.internalValue = value;
    }
    resetIp() {
        this._ip.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipInput() {
        return this._ip.internalValue;
    }
    // ip_list - computed: false, optional: true, required: false
    _ipList = new ZeroTrustAccessApplicationPoliciesIncludeIpListStructOutputReference(this, "ip_list");
    get ipList() {
        return this._ipList;
    }
    putIpList(value) {
        this._ipList.internalValue = value;
    }
    resetIpList() {
        this._ipList.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipListInput() {
        return this._ipList.internalValue;
    }
    // linked_app_token - computed: false, optional: true, required: false
    _linkedAppToken = new ZeroTrustAccessApplicationPoliciesIncludeLinkedAppTokenOutputReference(this, "linked_app_token");
    get linkedAppToken() {
        return this._linkedAppToken;
    }
    putLinkedAppToken(value) {
        this._linkedAppToken.internalValue = value;
    }
    resetLinkedAppToken() {
        this._linkedAppToken.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get linkedAppTokenInput() {
        return this._linkedAppToken.internalValue;
    }
    // login_method - computed: false, optional: true, required: false
    _loginMethod = new ZeroTrustAccessApplicationPoliciesIncludeLoginMethodOutputReference(this, "login_method");
    get loginMethod() {
        return this._loginMethod;
    }
    putLoginMethod(value) {
        this._loginMethod.internalValue = value;
    }
    resetLoginMethod() {
        this._loginMethod.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get loginMethodInput() {
        return this._loginMethod.internalValue;
    }
    // oidc - computed: false, optional: true, required: false
    _oidc = new ZeroTrustAccessApplicationPoliciesIncludeOidcOutputReference(this, "oidc");
    get oidc() {
        return this._oidc;
    }
    putOidc(value) {
        this._oidc.internalValue = value;
    }
    resetOidc() {
        this._oidc.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get oidcInput() {
        return this._oidc.internalValue;
    }
    // okta - computed: false, optional: true, required: false
    _okta = new ZeroTrustAccessApplicationPoliciesIncludeOktaOutputReference(this, "okta");
    get okta() {
        return this._okta;
    }
    putOkta(value) {
        this._okta.internalValue = value;
    }
    resetOkta() {
        this._okta.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get oktaInput() {
        return this._okta.internalValue;
    }
    // saml - computed: false, optional: true, required: false
    _saml = new ZeroTrustAccessApplicationPoliciesIncludeSamlOutputReference(this, "saml");
    get saml() {
        return this._saml;
    }
    putSaml(value) {
        this._saml.internalValue = value;
    }
    resetSaml() {
        this._saml.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get samlInput() {
        return this._saml.internalValue;
    }
    // service_token - computed: false, optional: true, required: false
    _serviceToken = new ZeroTrustAccessApplicationPoliciesIncludeServiceTokenOutputReference(this, "service_token");
    get serviceToken() {
        return this._serviceToken;
    }
    putServiceToken(value) {
        this._serviceToken.internalValue = value;
    }
    resetServiceToken() {
        this._serviceToken.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get serviceTokenInput() {
        return this._serviceToken.internalValue;
    }
}
export class ZeroTrustAccessApplicationPoliciesIncludeList extends cdktf.ComplexList {
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
        return new ZeroTrustAccessApplicationPoliciesIncludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function zeroTrustAccessApplicationPoliciesRequireAnyValidServiceTokenToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function zeroTrustAccessApplicationPoliciesRequireAnyValidServiceTokenToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class ZeroTrustAccessApplicationPoliciesRequireAnyValidServiceTokenOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
        }
    }
}
export function zeroTrustAccessApplicationPoliciesRequireAuthContextToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        ac_id: cdktf.stringToTerraform(struct.acId),
        id: cdktf.stringToTerraform(struct.id),
        identity_provider_id: cdktf.stringToTerraform(struct.identityProviderId),
    };
}
export function zeroTrustAccessApplicationPoliciesRequireAuthContextToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        ac_id: {
            value: cdktf.stringToHclTerraform(struct.acId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        identity_provider_id: {
            value: cdktf.stringToHclTerraform(struct.identityProviderId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationPoliciesRequireAuthContextOutputReference extends cdktf.ComplexObject {
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
        if (this._acId !== undefined) {
            hasAnyValues = true;
            internalValueResult.acId = this._acId;
        }
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._identityProviderId !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityProviderId = this._identityProviderId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._acId = undefined;
            this._id = undefined;
            this._identityProviderId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._acId = value.acId;
            this._id = value.id;
            this._identityProviderId = value.identityProviderId;
        }
    }
    // ac_id - computed: false, optional: false, required: true
    _acId;
    get acId() {
        return this.getStringAttribute('ac_id');
    }
    set acId(value) {
        this._acId = value;
    }
    // Temporarily expose input value. Use with caution.
    get acIdInput() {
        return this._acId;
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
    // identity_provider_id - computed: false, optional: false, required: true
    _identityProviderId;
    get identityProviderId() {
        return this.getStringAttribute('identity_provider_id');
    }
    set identityProviderId(value) {
        this._identityProviderId = value;
    }
    // Temporarily expose input value. Use with caution.
    get identityProviderIdInput() {
        return this._identityProviderId;
    }
}
export function zeroTrustAccessApplicationPoliciesRequireAuthMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        auth_method: cdktf.stringToTerraform(struct.authMethod),
    };
}
export function zeroTrustAccessApplicationPoliciesRequireAuthMethodToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        auth_method: {
            value: cdktf.stringToHclTerraform(struct.authMethod),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationPoliciesRequireAuthMethodOutputReference extends cdktf.ComplexObject {
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
        if (this._authMethod !== undefined) {
            hasAnyValues = true;
            internalValueResult.authMethod = this._authMethod;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authMethod = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authMethod = value.authMethod;
        }
    }
    // auth_method - computed: false, optional: false, required: true
    _authMethod;
    get authMethod() {
        return this.getStringAttribute('auth_method');
    }
    set authMethod(value) {
        this._authMethod = value;
    }
    // Temporarily expose input value. Use with caution.
    get authMethodInput() {
        return this._authMethod;
    }
}
export function zeroTrustAccessApplicationPoliciesRequireAzureAdToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
        identity_provider_id: cdktf.stringToTerraform(struct.identityProviderId),
    };
}
export function zeroTrustAccessApplicationPoliciesRequireAzureAdToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        identity_provider_id: {
            value: cdktf.stringToHclTerraform(struct.identityProviderId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationPoliciesRequireAzureAdOutputReference extends cdktf.ComplexObject {
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
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._identityProviderId !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityProviderId = this._identityProviderId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._id = undefined;
            this._identityProviderId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._id = value.id;
            this._identityProviderId = value.identityProviderId;
        }
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
    // identity_provider_id - computed: false, optional: false, required: true
    _identityProviderId;
    get identityProviderId() {
        return this.getStringAttribute('identity_provider_id');
    }
    set identityProviderId(value) {
        this._identityProviderId = value;
    }
    // Temporarily expose input value. Use with caution.
    get identityProviderIdInput() {
        return this._identityProviderId;
    }
}
export function zeroTrustAccessApplicationPoliciesRequireCertificateToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function zeroTrustAccessApplicationPoliciesRequireCertificateToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class ZeroTrustAccessApplicationPoliciesRequireCertificateOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
        }
    }
}
export function zeroTrustAccessApplicationPoliciesRequireCommonNameToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        common_name: cdktf.stringToTerraform(struct.commonName),
    };
}
export function zeroTrustAccessApplicationPoliciesRequireCommonNameToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        common_name: {
            value: cdktf.stringToHclTerraform(struct.commonName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationPoliciesRequireCommonNameOutputReference extends cdktf.ComplexObject {
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
        if (this._commonName !== undefined) {
            hasAnyValues = true;
            internalValueResult.commonName = this._commonName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._commonName = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._commonName = value.commonName;
        }
    }
    // common_name - computed: false, optional: false, required: true
    _commonName;
    get commonName() {
        return this.getStringAttribute('common_name');
    }
    set commonName(value) {
        this._commonName = value;
    }
    // Temporarily expose input value. Use with caution.
    get commonNameInput() {
        return this._commonName;
    }
}
export function zeroTrustAccessApplicationPoliciesRequireDevicePostureToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        integration_uid: cdktf.stringToTerraform(struct.integrationUid),
    };
}
export function zeroTrustAccessApplicationPoliciesRequireDevicePostureToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        integration_uid: {
            value: cdktf.stringToHclTerraform(struct.integrationUid),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationPoliciesRequireDevicePostureOutputReference extends cdktf.ComplexObject {
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
        if (this._integrationUid !== undefined) {
            hasAnyValues = true;
            internalValueResult.integrationUid = this._integrationUid;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._integrationUid = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._integrationUid = value.integrationUid;
        }
    }
    // integration_uid - computed: false, optional: false, required: true
    _integrationUid;
    get integrationUid() {
        return this.getStringAttribute('integration_uid');
    }
    set integrationUid(value) {
        this._integrationUid = value;
    }
    // Temporarily expose input value. Use with caution.
    get integrationUidInput() {
        return this._integrationUid;
    }
}
export function zeroTrustAccessApplicationPoliciesRequireEmailToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        email: cdktf.stringToTerraform(struct.email),
    };
}
export function zeroTrustAccessApplicationPoliciesRequireEmailToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        email: {
            value: cdktf.stringToHclTerraform(struct.email),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationPoliciesRequireEmailOutputReference extends cdktf.ComplexObject {
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
        if (this._email !== undefined) {
            hasAnyValues = true;
            internalValueResult.email = this._email;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._email = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._email = value.email;
        }
    }
    // email - computed: false, optional: false, required: true
    _email;
    get email() {
        return this.getStringAttribute('email');
    }
    set email(value) {
        this._email = value;
    }
    // Temporarily expose input value. Use with caution.
    get emailInput() {
        return this._email;
    }
}
export function zeroTrustAccessApplicationPoliciesRequireEmailDomainToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        domain: cdktf.stringToTerraform(struct.domain),
    };
}
export function zeroTrustAccessApplicationPoliciesRequireEmailDomainToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        domain: {
            value: cdktf.stringToHclTerraform(struct.domain),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationPoliciesRequireEmailDomainOutputReference extends cdktf.ComplexObject {
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
        if (this._domain !== undefined) {
            hasAnyValues = true;
            internalValueResult.domain = this._domain;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._domain = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._domain = value.domain;
        }
    }
    // domain - computed: false, optional: false, required: true
    _domain;
    get domain() {
        return this.getStringAttribute('domain');
    }
    set domain(value) {
        this._domain = value;
    }
    // Temporarily expose input value. Use with caution.
    get domainInput() {
        return this._domain;
    }
}
export function zeroTrustAccessApplicationPoliciesRequireEmailListStructToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
    };
}
export function zeroTrustAccessApplicationPoliciesRequireEmailListStructToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationPoliciesRequireEmailListStructOutputReference extends cdktf.ComplexObject {
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
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._id = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._id = value.id;
        }
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
}
export function zeroTrustAccessApplicationPoliciesRequireEveryoneToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function zeroTrustAccessApplicationPoliciesRequireEveryoneToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class ZeroTrustAccessApplicationPoliciesRequireEveryoneOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
        }
    }
}
export function zeroTrustAccessApplicationPoliciesRequireExternalEvaluationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        evaluate_url: cdktf.stringToTerraform(struct.evaluateUrl),
        keys_url: cdktf.stringToTerraform(struct.keysUrl),
    };
}
export function zeroTrustAccessApplicationPoliciesRequireExternalEvaluationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        evaluate_url: {
            value: cdktf.stringToHclTerraform(struct.evaluateUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        keys_url: {
            value: cdktf.stringToHclTerraform(struct.keysUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationPoliciesRequireExternalEvaluationOutputReference extends cdktf.ComplexObject {
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
        if (this._evaluateUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.evaluateUrl = this._evaluateUrl;
        }
        if (this._keysUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.keysUrl = this._keysUrl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._evaluateUrl = undefined;
            this._keysUrl = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._evaluateUrl = value.evaluateUrl;
            this._keysUrl = value.keysUrl;
        }
    }
    // evaluate_url - computed: false, optional: false, required: true
    _evaluateUrl;
    get evaluateUrl() {
        return this.getStringAttribute('evaluate_url');
    }
    set evaluateUrl(value) {
        this._evaluateUrl = value;
    }
    // Temporarily expose input value. Use with caution.
    get evaluateUrlInput() {
        return this._evaluateUrl;
    }
    // keys_url - computed: false, optional: false, required: true
    _keysUrl;
    get keysUrl() {
        return this.getStringAttribute('keys_url');
    }
    set keysUrl(value) {
        this._keysUrl = value;
    }
    // Temporarily expose input value. Use with caution.
    get keysUrlInput() {
        return this._keysUrl;
    }
}
export function zeroTrustAccessApplicationPoliciesRequireGeoToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        country_code: cdktf.stringToTerraform(struct.countryCode),
    };
}
export function zeroTrustAccessApplicationPoliciesRequireGeoToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        country_code: {
            value: cdktf.stringToHclTerraform(struct.countryCode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationPoliciesRequireGeoOutputReference extends cdktf.ComplexObject {
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
        if (this._countryCode !== undefined) {
            hasAnyValues = true;
            internalValueResult.countryCode = this._countryCode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._countryCode = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._countryCode = value.countryCode;
        }
    }
    // country_code - computed: false, optional: false, required: true
    _countryCode;
    get countryCode() {
        return this.getStringAttribute('country_code');
    }
    set countryCode(value) {
        this._countryCode = value;
    }
    // Temporarily expose input value. Use with caution.
    get countryCodeInput() {
        return this._countryCode;
    }
}
export function zeroTrustAccessApplicationPoliciesRequireGithubOrganizationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        identity_provider_id: cdktf.stringToTerraform(struct.identityProviderId),
        name: cdktf.stringToTerraform(struct.name),
        team: cdktf.stringToTerraform(struct.team),
    };
}
export function zeroTrustAccessApplicationPoliciesRequireGithubOrganizationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        identity_provider_id: {
            value: cdktf.stringToHclTerraform(struct.identityProviderId),
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
        team: {
            value: cdktf.stringToHclTerraform(struct.team),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationPoliciesRequireGithubOrganizationOutputReference extends cdktf.ComplexObject {
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
        if (this._identityProviderId !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityProviderId = this._identityProviderId;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._team !== undefined) {
            hasAnyValues = true;
            internalValueResult.team = this._team;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._identityProviderId = undefined;
            this._name = undefined;
            this._team = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._identityProviderId = value.identityProviderId;
            this._name = value.name;
            this._team = value.team;
        }
    }
    // identity_provider_id - computed: false, optional: false, required: true
    _identityProviderId;
    get identityProviderId() {
        return this.getStringAttribute('identity_provider_id');
    }
    set identityProviderId(value) {
        this._identityProviderId = value;
    }
    // Temporarily expose input value. Use with caution.
    get identityProviderIdInput() {
        return this._identityProviderId;
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
    // team - computed: false, optional: true, required: false
    _team;
    get team() {
        return this.getStringAttribute('team');
    }
    set team(value) {
        this._team = value;
    }
    resetTeam() {
        this._team = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get teamInput() {
        return this._team;
    }
}
export function zeroTrustAccessApplicationPoliciesRequireGroupToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
    };
}
export function zeroTrustAccessApplicationPoliciesRequireGroupToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationPoliciesRequireGroupOutputReference extends cdktf.ComplexObject {
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
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._id = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._id = value.id;
        }
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
}
export function zeroTrustAccessApplicationPoliciesRequireGsuiteToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        email: cdktf.stringToTerraform(struct.email),
        identity_provider_id: cdktf.stringToTerraform(struct.identityProviderId),
    };
}
export function zeroTrustAccessApplicationPoliciesRequireGsuiteToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        email: {
            value: cdktf.stringToHclTerraform(struct.email),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        identity_provider_id: {
            value: cdktf.stringToHclTerraform(struct.identityProviderId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationPoliciesRequireGsuiteOutputReference extends cdktf.ComplexObject {
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
        if (this._email !== undefined) {
            hasAnyValues = true;
            internalValueResult.email = this._email;
        }
        if (this._identityProviderId !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityProviderId = this._identityProviderId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._email = undefined;
            this._identityProviderId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._email = value.email;
            this._identityProviderId = value.identityProviderId;
        }
    }
    // email - computed: false, optional: false, required: true
    _email;
    get email() {
        return this.getStringAttribute('email');
    }
    set email(value) {
        this._email = value;
    }
    // Temporarily expose input value. Use with caution.
    get emailInput() {
        return this._email;
    }
    // identity_provider_id - computed: false, optional: false, required: true
    _identityProviderId;
    get identityProviderId() {
        return this.getStringAttribute('identity_provider_id');
    }
    set identityProviderId(value) {
        this._identityProviderId = value;
    }
    // Temporarily expose input value. Use with caution.
    get identityProviderIdInput() {
        return this._identityProviderId;
    }
}
export function zeroTrustAccessApplicationPoliciesRequireIpToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        ip: cdktf.stringToTerraform(struct.ip),
    };
}
export function zeroTrustAccessApplicationPoliciesRequireIpToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        ip: {
            value: cdktf.stringToHclTerraform(struct.ip),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationPoliciesRequireIpOutputReference extends cdktf.ComplexObject {
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
        if (this._ip !== undefined) {
            hasAnyValues = true;
            internalValueResult.ip = this._ip;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ip = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ip = value.ip;
        }
    }
    // ip - computed: false, optional: false, required: true
    _ip;
    get ip() {
        return this.getStringAttribute('ip');
    }
    set ip(value) {
        this._ip = value;
    }
    // Temporarily expose input value. Use with caution.
    get ipInput() {
        return this._ip;
    }
}
export function zeroTrustAccessApplicationPoliciesRequireIpListStructToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
    };
}
export function zeroTrustAccessApplicationPoliciesRequireIpListStructToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationPoliciesRequireIpListStructOutputReference extends cdktf.ComplexObject {
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
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._id = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._id = value.id;
        }
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
}
export function zeroTrustAccessApplicationPoliciesRequireLinkedAppTokenToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        app_uid: cdktf.stringToTerraform(struct.appUid),
    };
}
export function zeroTrustAccessApplicationPoliciesRequireLinkedAppTokenToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        app_uid: {
            value: cdktf.stringToHclTerraform(struct.appUid),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationPoliciesRequireLinkedAppTokenOutputReference extends cdktf.ComplexObject {
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
        if (this._appUid !== undefined) {
            hasAnyValues = true;
            internalValueResult.appUid = this._appUid;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._appUid = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._appUid = value.appUid;
        }
    }
    // app_uid - computed: false, optional: false, required: true
    _appUid;
    get appUid() {
        return this.getStringAttribute('app_uid');
    }
    set appUid(value) {
        this._appUid = value;
    }
    // Temporarily expose input value. Use with caution.
    get appUidInput() {
        return this._appUid;
    }
}
export function zeroTrustAccessApplicationPoliciesRequireLoginMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
    };
}
export function zeroTrustAccessApplicationPoliciesRequireLoginMethodToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationPoliciesRequireLoginMethodOutputReference extends cdktf.ComplexObject {
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
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._id = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._id = value.id;
        }
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
}
export function zeroTrustAccessApplicationPoliciesRequireOidcToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        claim_name: cdktf.stringToTerraform(struct.claimName),
        claim_value: cdktf.stringToTerraform(struct.claimValue),
        identity_provider_id: cdktf.stringToTerraform(struct.identityProviderId),
    };
}
export function zeroTrustAccessApplicationPoliciesRequireOidcToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        claim_name: {
            value: cdktf.stringToHclTerraform(struct.claimName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        claim_value: {
            value: cdktf.stringToHclTerraform(struct.claimValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        identity_provider_id: {
            value: cdktf.stringToHclTerraform(struct.identityProviderId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationPoliciesRequireOidcOutputReference extends cdktf.ComplexObject {
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
        if (this._claimName !== undefined) {
            hasAnyValues = true;
            internalValueResult.claimName = this._claimName;
        }
        if (this._claimValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.claimValue = this._claimValue;
        }
        if (this._identityProviderId !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityProviderId = this._identityProviderId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._claimName = undefined;
            this._claimValue = undefined;
            this._identityProviderId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._claimName = value.claimName;
            this._claimValue = value.claimValue;
            this._identityProviderId = value.identityProviderId;
        }
    }
    // claim_name - computed: false, optional: false, required: true
    _claimName;
    get claimName() {
        return this.getStringAttribute('claim_name');
    }
    set claimName(value) {
        this._claimName = value;
    }
    // Temporarily expose input value. Use with caution.
    get claimNameInput() {
        return this._claimName;
    }
    // claim_value - computed: false, optional: false, required: true
    _claimValue;
    get claimValue() {
        return this.getStringAttribute('claim_value');
    }
    set claimValue(value) {
        this._claimValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get claimValueInput() {
        return this._claimValue;
    }
    // identity_provider_id - computed: false, optional: false, required: true
    _identityProviderId;
    get identityProviderId() {
        return this.getStringAttribute('identity_provider_id');
    }
    set identityProviderId(value) {
        this._identityProviderId = value;
    }
    // Temporarily expose input value. Use with caution.
    get identityProviderIdInput() {
        return this._identityProviderId;
    }
}
export function zeroTrustAccessApplicationPoliciesRequireOktaToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        identity_provider_id: cdktf.stringToTerraform(struct.identityProviderId),
        name: cdktf.stringToTerraform(struct.name),
    };
}
export function zeroTrustAccessApplicationPoliciesRequireOktaToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        identity_provider_id: {
            value: cdktf.stringToHclTerraform(struct.identityProviderId),
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
export class ZeroTrustAccessApplicationPoliciesRequireOktaOutputReference extends cdktf.ComplexObject {
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
        if (this._identityProviderId !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityProviderId = this._identityProviderId;
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
            this._identityProviderId = undefined;
            this._name = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._identityProviderId = value.identityProviderId;
            this._name = value.name;
        }
    }
    // identity_provider_id - computed: false, optional: false, required: true
    _identityProviderId;
    get identityProviderId() {
        return this.getStringAttribute('identity_provider_id');
    }
    set identityProviderId(value) {
        this._identityProviderId = value;
    }
    // Temporarily expose input value. Use with caution.
    get identityProviderIdInput() {
        return this._identityProviderId;
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
}
export function zeroTrustAccessApplicationPoliciesRequireSamlToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        attribute_name: cdktf.stringToTerraform(struct.attributeName),
        attribute_value: cdktf.stringToTerraform(struct.attributeValue),
        identity_provider_id: cdktf.stringToTerraform(struct.identityProviderId),
    };
}
export function zeroTrustAccessApplicationPoliciesRequireSamlToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        attribute_name: {
            value: cdktf.stringToHclTerraform(struct.attributeName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        attribute_value: {
            value: cdktf.stringToHclTerraform(struct.attributeValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        identity_provider_id: {
            value: cdktf.stringToHclTerraform(struct.identityProviderId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationPoliciesRequireSamlOutputReference extends cdktf.ComplexObject {
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
        if (this._attributeName !== undefined) {
            hasAnyValues = true;
            internalValueResult.attributeName = this._attributeName;
        }
        if (this._attributeValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.attributeValue = this._attributeValue;
        }
        if (this._identityProviderId !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityProviderId = this._identityProviderId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._attributeName = undefined;
            this._attributeValue = undefined;
            this._identityProviderId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._attributeName = value.attributeName;
            this._attributeValue = value.attributeValue;
            this._identityProviderId = value.identityProviderId;
        }
    }
    // attribute_name - computed: false, optional: false, required: true
    _attributeName;
    get attributeName() {
        return this.getStringAttribute('attribute_name');
    }
    set attributeName(value) {
        this._attributeName = value;
    }
    // Temporarily expose input value. Use with caution.
    get attributeNameInput() {
        return this._attributeName;
    }
    // attribute_value - computed: false, optional: false, required: true
    _attributeValue;
    get attributeValue() {
        return this.getStringAttribute('attribute_value');
    }
    set attributeValue(value) {
        this._attributeValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get attributeValueInput() {
        return this._attributeValue;
    }
    // identity_provider_id - computed: false, optional: false, required: true
    _identityProviderId;
    get identityProviderId() {
        return this.getStringAttribute('identity_provider_id');
    }
    set identityProviderId(value) {
        this._identityProviderId = value;
    }
    // Temporarily expose input value. Use with caution.
    get identityProviderIdInput() {
        return this._identityProviderId;
    }
}
export function zeroTrustAccessApplicationPoliciesRequireServiceTokenToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        token_id: cdktf.stringToTerraform(struct.tokenId),
    };
}
export function zeroTrustAccessApplicationPoliciesRequireServiceTokenToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        token_id: {
            value: cdktf.stringToHclTerraform(struct.tokenId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationPoliciesRequireServiceTokenOutputReference extends cdktf.ComplexObject {
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
        if (this._tokenId !== undefined) {
            hasAnyValues = true;
            internalValueResult.tokenId = this._tokenId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._tokenId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._tokenId = value.tokenId;
        }
    }
    // token_id - computed: false, optional: false, required: true
    _tokenId;
    get tokenId() {
        return this.getStringAttribute('token_id');
    }
    set tokenId(value) {
        this._tokenId = value;
    }
    // Temporarily expose input value. Use with caution.
    get tokenIdInput() {
        return this._tokenId;
    }
}
export function zeroTrustAccessApplicationPoliciesRequireToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        any_valid_service_token: zeroTrustAccessApplicationPoliciesRequireAnyValidServiceTokenToTerraform(struct.anyValidServiceToken),
        auth_context: zeroTrustAccessApplicationPoliciesRequireAuthContextToTerraform(struct.authContext),
        auth_method: zeroTrustAccessApplicationPoliciesRequireAuthMethodToTerraform(struct.authMethod),
        azure_ad: zeroTrustAccessApplicationPoliciesRequireAzureAdToTerraform(struct.azureAd),
        certificate: zeroTrustAccessApplicationPoliciesRequireCertificateToTerraform(struct.certificate),
        common_name: zeroTrustAccessApplicationPoliciesRequireCommonNameToTerraform(struct.commonName),
        device_posture: zeroTrustAccessApplicationPoliciesRequireDevicePostureToTerraform(struct.devicePosture),
        email: zeroTrustAccessApplicationPoliciesRequireEmailToTerraform(struct.email),
        email_domain: zeroTrustAccessApplicationPoliciesRequireEmailDomainToTerraform(struct.emailDomain),
        email_list: zeroTrustAccessApplicationPoliciesRequireEmailListStructToTerraform(struct.emailList),
        everyone: zeroTrustAccessApplicationPoliciesRequireEveryoneToTerraform(struct.everyone),
        external_evaluation: zeroTrustAccessApplicationPoliciesRequireExternalEvaluationToTerraform(struct.externalEvaluation),
        geo: zeroTrustAccessApplicationPoliciesRequireGeoToTerraform(struct.geo),
        github_organization: zeroTrustAccessApplicationPoliciesRequireGithubOrganizationToTerraform(struct.githubOrganization),
        group: zeroTrustAccessApplicationPoliciesRequireGroupToTerraform(struct.group),
        gsuite: zeroTrustAccessApplicationPoliciesRequireGsuiteToTerraform(struct.gsuite),
        ip: zeroTrustAccessApplicationPoliciesRequireIpToTerraform(struct.ip),
        ip_list: zeroTrustAccessApplicationPoliciesRequireIpListStructToTerraform(struct.ipList),
        linked_app_token: zeroTrustAccessApplicationPoliciesRequireLinkedAppTokenToTerraform(struct.linkedAppToken),
        login_method: zeroTrustAccessApplicationPoliciesRequireLoginMethodToTerraform(struct.loginMethod),
        oidc: zeroTrustAccessApplicationPoliciesRequireOidcToTerraform(struct.oidc),
        okta: zeroTrustAccessApplicationPoliciesRequireOktaToTerraform(struct.okta),
        saml: zeroTrustAccessApplicationPoliciesRequireSamlToTerraform(struct.saml),
        service_token: zeroTrustAccessApplicationPoliciesRequireServiceTokenToTerraform(struct.serviceToken),
    };
}
export function zeroTrustAccessApplicationPoliciesRequireToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        any_valid_service_token: {
            value: zeroTrustAccessApplicationPoliciesRequireAnyValidServiceTokenToHclTerraform(struct.anyValidServiceToken),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesRequireAnyValidServiceToken",
        },
        auth_context: {
            value: zeroTrustAccessApplicationPoliciesRequireAuthContextToHclTerraform(struct.authContext),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesRequireAuthContext",
        },
        auth_method: {
            value: zeroTrustAccessApplicationPoliciesRequireAuthMethodToHclTerraform(struct.authMethod),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesRequireAuthMethod",
        },
        azure_ad: {
            value: zeroTrustAccessApplicationPoliciesRequireAzureAdToHclTerraform(struct.azureAd),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesRequireAzureAd",
        },
        certificate: {
            value: zeroTrustAccessApplicationPoliciesRequireCertificateToHclTerraform(struct.certificate),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesRequireCertificate",
        },
        common_name: {
            value: zeroTrustAccessApplicationPoliciesRequireCommonNameToHclTerraform(struct.commonName),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesRequireCommonName",
        },
        device_posture: {
            value: zeroTrustAccessApplicationPoliciesRequireDevicePostureToHclTerraform(struct.devicePosture),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesRequireDevicePosture",
        },
        email: {
            value: zeroTrustAccessApplicationPoliciesRequireEmailToHclTerraform(struct.email),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesRequireEmail",
        },
        email_domain: {
            value: zeroTrustAccessApplicationPoliciesRequireEmailDomainToHclTerraform(struct.emailDomain),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesRequireEmailDomain",
        },
        email_list: {
            value: zeroTrustAccessApplicationPoliciesRequireEmailListStructToHclTerraform(struct.emailList),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesRequireEmailListStruct",
        },
        everyone: {
            value: zeroTrustAccessApplicationPoliciesRequireEveryoneToHclTerraform(struct.everyone),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesRequireEveryone",
        },
        external_evaluation: {
            value: zeroTrustAccessApplicationPoliciesRequireExternalEvaluationToHclTerraform(struct.externalEvaluation),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesRequireExternalEvaluation",
        },
        geo: {
            value: zeroTrustAccessApplicationPoliciesRequireGeoToHclTerraform(struct.geo),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesRequireGeo",
        },
        github_organization: {
            value: zeroTrustAccessApplicationPoliciesRequireGithubOrganizationToHclTerraform(struct.githubOrganization),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesRequireGithubOrganization",
        },
        group: {
            value: zeroTrustAccessApplicationPoliciesRequireGroupToHclTerraform(struct.group),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesRequireGroup",
        },
        gsuite: {
            value: zeroTrustAccessApplicationPoliciesRequireGsuiteToHclTerraform(struct.gsuite),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesRequireGsuite",
        },
        ip: {
            value: zeroTrustAccessApplicationPoliciesRequireIpToHclTerraform(struct.ip),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesRequireIp",
        },
        ip_list: {
            value: zeroTrustAccessApplicationPoliciesRequireIpListStructToHclTerraform(struct.ipList),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesRequireIpListStruct",
        },
        linked_app_token: {
            value: zeroTrustAccessApplicationPoliciesRequireLinkedAppTokenToHclTerraform(struct.linkedAppToken),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesRequireLinkedAppToken",
        },
        login_method: {
            value: zeroTrustAccessApplicationPoliciesRequireLoginMethodToHclTerraform(struct.loginMethod),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesRequireLoginMethod",
        },
        oidc: {
            value: zeroTrustAccessApplicationPoliciesRequireOidcToHclTerraform(struct.oidc),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesRequireOidc",
        },
        okta: {
            value: zeroTrustAccessApplicationPoliciesRequireOktaToHclTerraform(struct.okta),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesRequireOkta",
        },
        saml: {
            value: zeroTrustAccessApplicationPoliciesRequireSamlToHclTerraform(struct.saml),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesRequireSaml",
        },
        service_token: {
            value: zeroTrustAccessApplicationPoliciesRequireServiceTokenToHclTerraform(struct.serviceToken),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesRequireServiceToken",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationPoliciesRequireOutputReference extends cdktf.ComplexObject {
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
        if (this._anyValidServiceToken?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.anyValidServiceToken = this._anyValidServiceToken?.internalValue;
        }
        if (this._authContext?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.authContext = this._authContext?.internalValue;
        }
        if (this._authMethod?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.authMethod = this._authMethod?.internalValue;
        }
        if (this._azureAd?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.azureAd = this._azureAd?.internalValue;
        }
        if (this._certificate?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.certificate = this._certificate?.internalValue;
        }
        if (this._commonName?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.commonName = this._commonName?.internalValue;
        }
        if (this._devicePosture?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.devicePosture = this._devicePosture?.internalValue;
        }
        if (this._email?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.email = this._email?.internalValue;
        }
        if (this._emailDomain?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.emailDomain = this._emailDomain?.internalValue;
        }
        if (this._emailList?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.emailList = this._emailList?.internalValue;
        }
        if (this._everyone?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.everyone = this._everyone?.internalValue;
        }
        if (this._externalEvaluation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.externalEvaluation = this._externalEvaluation?.internalValue;
        }
        if (this._geo?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.geo = this._geo?.internalValue;
        }
        if (this._githubOrganization?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.githubOrganization = this._githubOrganization?.internalValue;
        }
        if (this._group?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.group = this._group?.internalValue;
        }
        if (this._gsuite?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.gsuite = this._gsuite?.internalValue;
        }
        if (this._ip?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ip = this._ip?.internalValue;
        }
        if (this._ipList?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipList = this._ipList?.internalValue;
        }
        if (this._linkedAppToken?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.linkedAppToken = this._linkedAppToken?.internalValue;
        }
        if (this._loginMethod?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.loginMethod = this._loginMethod?.internalValue;
        }
        if (this._oidc?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.oidc = this._oidc?.internalValue;
        }
        if (this._okta?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.okta = this._okta?.internalValue;
        }
        if (this._saml?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.saml = this._saml?.internalValue;
        }
        if (this._serviceToken?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.serviceToken = this._serviceToken?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._anyValidServiceToken.internalValue = undefined;
            this._authContext.internalValue = undefined;
            this._authMethod.internalValue = undefined;
            this._azureAd.internalValue = undefined;
            this._certificate.internalValue = undefined;
            this._commonName.internalValue = undefined;
            this._devicePosture.internalValue = undefined;
            this._email.internalValue = undefined;
            this._emailDomain.internalValue = undefined;
            this._emailList.internalValue = undefined;
            this._everyone.internalValue = undefined;
            this._externalEvaluation.internalValue = undefined;
            this._geo.internalValue = undefined;
            this._githubOrganization.internalValue = undefined;
            this._group.internalValue = undefined;
            this._gsuite.internalValue = undefined;
            this._ip.internalValue = undefined;
            this._ipList.internalValue = undefined;
            this._linkedAppToken.internalValue = undefined;
            this._loginMethod.internalValue = undefined;
            this._oidc.internalValue = undefined;
            this._okta.internalValue = undefined;
            this._saml.internalValue = undefined;
            this._serviceToken.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._anyValidServiceToken.internalValue = value.anyValidServiceToken;
            this._authContext.internalValue = value.authContext;
            this._authMethod.internalValue = value.authMethod;
            this._azureAd.internalValue = value.azureAd;
            this._certificate.internalValue = value.certificate;
            this._commonName.internalValue = value.commonName;
            this._devicePosture.internalValue = value.devicePosture;
            this._email.internalValue = value.email;
            this._emailDomain.internalValue = value.emailDomain;
            this._emailList.internalValue = value.emailList;
            this._everyone.internalValue = value.everyone;
            this._externalEvaluation.internalValue = value.externalEvaluation;
            this._geo.internalValue = value.geo;
            this._githubOrganization.internalValue = value.githubOrganization;
            this._group.internalValue = value.group;
            this._gsuite.internalValue = value.gsuite;
            this._ip.internalValue = value.ip;
            this._ipList.internalValue = value.ipList;
            this._linkedAppToken.internalValue = value.linkedAppToken;
            this._loginMethod.internalValue = value.loginMethod;
            this._oidc.internalValue = value.oidc;
            this._okta.internalValue = value.okta;
            this._saml.internalValue = value.saml;
            this._serviceToken.internalValue = value.serviceToken;
        }
    }
    // any_valid_service_token - computed: false, optional: true, required: false
    _anyValidServiceToken = new ZeroTrustAccessApplicationPoliciesRequireAnyValidServiceTokenOutputReference(this, "any_valid_service_token");
    get anyValidServiceToken() {
        return this._anyValidServiceToken;
    }
    putAnyValidServiceToken(value) {
        this._anyValidServiceToken.internalValue = value;
    }
    resetAnyValidServiceToken() {
        this._anyValidServiceToken.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get anyValidServiceTokenInput() {
        return this._anyValidServiceToken.internalValue;
    }
    // auth_context - computed: false, optional: true, required: false
    _authContext = new ZeroTrustAccessApplicationPoliciesRequireAuthContextOutputReference(this, "auth_context");
    get authContext() {
        return this._authContext;
    }
    putAuthContext(value) {
        this._authContext.internalValue = value;
    }
    resetAuthContext() {
        this._authContext.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get authContextInput() {
        return this._authContext.internalValue;
    }
    // auth_method - computed: false, optional: true, required: false
    _authMethod = new ZeroTrustAccessApplicationPoliciesRequireAuthMethodOutputReference(this, "auth_method");
    get authMethod() {
        return this._authMethod;
    }
    putAuthMethod(value) {
        this._authMethod.internalValue = value;
    }
    resetAuthMethod() {
        this._authMethod.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get authMethodInput() {
        return this._authMethod.internalValue;
    }
    // azure_ad - computed: false, optional: true, required: false
    _azureAd = new ZeroTrustAccessApplicationPoliciesRequireAzureAdOutputReference(this, "azure_ad");
    get azureAd() {
        return this._azureAd;
    }
    putAzureAd(value) {
        this._azureAd.internalValue = value;
    }
    resetAzureAd() {
        this._azureAd.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get azureAdInput() {
        return this._azureAd.internalValue;
    }
    // certificate - computed: false, optional: true, required: false
    _certificate = new ZeroTrustAccessApplicationPoliciesRequireCertificateOutputReference(this, "certificate");
    get certificate() {
        return this._certificate;
    }
    putCertificate(value) {
        this._certificate.internalValue = value;
    }
    resetCertificate() {
        this._certificate.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get certificateInput() {
        return this._certificate.internalValue;
    }
    // common_name - computed: false, optional: true, required: false
    _commonName = new ZeroTrustAccessApplicationPoliciesRequireCommonNameOutputReference(this, "common_name");
    get commonName() {
        return this._commonName;
    }
    putCommonName(value) {
        this._commonName.internalValue = value;
    }
    resetCommonName() {
        this._commonName.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get commonNameInput() {
        return this._commonName.internalValue;
    }
    // device_posture - computed: false, optional: true, required: false
    _devicePosture = new ZeroTrustAccessApplicationPoliciesRequireDevicePostureOutputReference(this, "device_posture");
    get devicePosture() {
        return this._devicePosture;
    }
    putDevicePosture(value) {
        this._devicePosture.internalValue = value;
    }
    resetDevicePosture() {
        this._devicePosture.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get devicePostureInput() {
        return this._devicePosture.internalValue;
    }
    // email - computed: false, optional: true, required: false
    _email = new ZeroTrustAccessApplicationPoliciesRequireEmailOutputReference(this, "email");
    get email() {
        return this._email;
    }
    putEmail(value) {
        this._email.internalValue = value;
    }
    resetEmail() {
        this._email.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get emailInput() {
        return this._email.internalValue;
    }
    // email_domain - computed: false, optional: true, required: false
    _emailDomain = new ZeroTrustAccessApplicationPoliciesRequireEmailDomainOutputReference(this, "email_domain");
    get emailDomain() {
        return this._emailDomain;
    }
    putEmailDomain(value) {
        this._emailDomain.internalValue = value;
    }
    resetEmailDomain() {
        this._emailDomain.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get emailDomainInput() {
        return this._emailDomain.internalValue;
    }
    // email_list - computed: false, optional: true, required: false
    _emailList = new ZeroTrustAccessApplicationPoliciesRequireEmailListStructOutputReference(this, "email_list");
    get emailList() {
        return this._emailList;
    }
    putEmailList(value) {
        this._emailList.internalValue = value;
    }
    resetEmailList() {
        this._emailList.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get emailListInput() {
        return this._emailList.internalValue;
    }
    // everyone - computed: false, optional: true, required: false
    _everyone = new ZeroTrustAccessApplicationPoliciesRequireEveryoneOutputReference(this, "everyone");
    get everyone() {
        return this._everyone;
    }
    putEveryone(value) {
        this._everyone.internalValue = value;
    }
    resetEveryone() {
        this._everyone.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get everyoneInput() {
        return this._everyone.internalValue;
    }
    // external_evaluation - computed: false, optional: true, required: false
    _externalEvaluation = new ZeroTrustAccessApplicationPoliciesRequireExternalEvaluationOutputReference(this, "external_evaluation");
    get externalEvaluation() {
        return this._externalEvaluation;
    }
    putExternalEvaluation(value) {
        this._externalEvaluation.internalValue = value;
    }
    resetExternalEvaluation() {
        this._externalEvaluation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get externalEvaluationInput() {
        return this._externalEvaluation.internalValue;
    }
    // geo - computed: false, optional: true, required: false
    _geo = new ZeroTrustAccessApplicationPoliciesRequireGeoOutputReference(this, "geo");
    get geo() {
        return this._geo;
    }
    putGeo(value) {
        this._geo.internalValue = value;
    }
    resetGeo() {
        this._geo.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get geoInput() {
        return this._geo.internalValue;
    }
    // github_organization - computed: false, optional: true, required: false
    _githubOrganization = new ZeroTrustAccessApplicationPoliciesRequireGithubOrganizationOutputReference(this, "github_organization");
    get githubOrganization() {
        return this._githubOrganization;
    }
    putGithubOrganization(value) {
        this._githubOrganization.internalValue = value;
    }
    resetGithubOrganization() {
        this._githubOrganization.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get githubOrganizationInput() {
        return this._githubOrganization.internalValue;
    }
    // group - computed: false, optional: true, required: false
    _group = new ZeroTrustAccessApplicationPoliciesRequireGroupOutputReference(this, "group");
    get group() {
        return this._group;
    }
    putGroup(value) {
        this._group.internalValue = value;
    }
    resetGroup() {
        this._group.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get groupInput() {
        return this._group.internalValue;
    }
    // gsuite - computed: false, optional: true, required: false
    _gsuite = new ZeroTrustAccessApplicationPoliciesRequireGsuiteOutputReference(this, "gsuite");
    get gsuite() {
        return this._gsuite;
    }
    putGsuite(value) {
        this._gsuite.internalValue = value;
    }
    resetGsuite() {
        this._gsuite.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get gsuiteInput() {
        return this._gsuite.internalValue;
    }
    // ip - computed: false, optional: true, required: false
    _ip = new ZeroTrustAccessApplicationPoliciesRequireIpOutputReference(this, "ip");
    get ip() {
        return this._ip;
    }
    putIp(value) {
        this._ip.internalValue = value;
    }
    resetIp() {
        this._ip.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipInput() {
        return this._ip.internalValue;
    }
    // ip_list - computed: false, optional: true, required: false
    _ipList = new ZeroTrustAccessApplicationPoliciesRequireIpListStructOutputReference(this, "ip_list");
    get ipList() {
        return this._ipList;
    }
    putIpList(value) {
        this._ipList.internalValue = value;
    }
    resetIpList() {
        this._ipList.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipListInput() {
        return this._ipList.internalValue;
    }
    // linked_app_token - computed: false, optional: true, required: false
    _linkedAppToken = new ZeroTrustAccessApplicationPoliciesRequireLinkedAppTokenOutputReference(this, "linked_app_token");
    get linkedAppToken() {
        return this._linkedAppToken;
    }
    putLinkedAppToken(value) {
        this._linkedAppToken.internalValue = value;
    }
    resetLinkedAppToken() {
        this._linkedAppToken.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get linkedAppTokenInput() {
        return this._linkedAppToken.internalValue;
    }
    // login_method - computed: false, optional: true, required: false
    _loginMethod = new ZeroTrustAccessApplicationPoliciesRequireLoginMethodOutputReference(this, "login_method");
    get loginMethod() {
        return this._loginMethod;
    }
    putLoginMethod(value) {
        this._loginMethod.internalValue = value;
    }
    resetLoginMethod() {
        this._loginMethod.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get loginMethodInput() {
        return this._loginMethod.internalValue;
    }
    // oidc - computed: false, optional: true, required: false
    _oidc = new ZeroTrustAccessApplicationPoliciesRequireOidcOutputReference(this, "oidc");
    get oidc() {
        return this._oidc;
    }
    putOidc(value) {
        this._oidc.internalValue = value;
    }
    resetOidc() {
        this._oidc.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get oidcInput() {
        return this._oidc.internalValue;
    }
    // okta - computed: false, optional: true, required: false
    _okta = new ZeroTrustAccessApplicationPoliciesRequireOktaOutputReference(this, "okta");
    get okta() {
        return this._okta;
    }
    putOkta(value) {
        this._okta.internalValue = value;
    }
    resetOkta() {
        this._okta.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get oktaInput() {
        return this._okta.internalValue;
    }
    // saml - computed: false, optional: true, required: false
    _saml = new ZeroTrustAccessApplicationPoliciesRequireSamlOutputReference(this, "saml");
    get saml() {
        return this._saml;
    }
    putSaml(value) {
        this._saml.internalValue = value;
    }
    resetSaml() {
        this._saml.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get samlInput() {
        return this._saml.internalValue;
    }
    // service_token - computed: false, optional: true, required: false
    _serviceToken = new ZeroTrustAccessApplicationPoliciesRequireServiceTokenOutputReference(this, "service_token");
    get serviceToken() {
        return this._serviceToken;
    }
    putServiceToken(value) {
        this._serviceToken.internalValue = value;
    }
    resetServiceToken() {
        this._serviceToken.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get serviceTokenInput() {
        return this._serviceToken.internalValue;
    }
}
export class ZeroTrustAccessApplicationPoliciesRequireList extends cdktf.ComplexList {
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
        return new ZeroTrustAccessApplicationPoliciesRequireOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function zeroTrustAccessApplicationPoliciesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        connection_rules: zeroTrustAccessApplicationPoliciesConnectionRulesToTerraform(struct.connectionRules),
        decision: cdktf.stringToTerraform(struct.decision),
        exclude: cdktf.listMapper(zeroTrustAccessApplicationPoliciesExcludeToTerraform, false)(struct.exclude),
        id: cdktf.stringToTerraform(struct.id),
        include: cdktf.listMapper(zeroTrustAccessApplicationPoliciesIncludeToTerraform, false)(struct.include),
        name: cdktf.stringToTerraform(struct.name),
        precedence: cdktf.numberToTerraform(struct.precedence),
        require: cdktf.listMapper(zeroTrustAccessApplicationPoliciesRequireToTerraform, false)(struct.require),
    };
}
export function zeroTrustAccessApplicationPoliciesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        connection_rules: {
            value: zeroTrustAccessApplicationPoliciesConnectionRulesToHclTerraform(struct.connectionRules),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationPoliciesConnectionRules",
        },
        decision: {
            value: cdktf.stringToHclTerraform(struct.decision),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        exclude: {
            value: cdktf.listMapperHcl(zeroTrustAccessApplicationPoliciesExcludeToHclTerraform, false)(struct.exclude),
            isBlock: true,
            type: "set",
            storageClassType: "ZeroTrustAccessApplicationPoliciesExcludeList",
        },
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        include: {
            value: cdktf.listMapperHcl(zeroTrustAccessApplicationPoliciesIncludeToHclTerraform, false)(struct.include),
            isBlock: true,
            type: "set",
            storageClassType: "ZeroTrustAccessApplicationPoliciesIncludeList",
        },
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        precedence: {
            value: cdktf.numberToHclTerraform(struct.precedence),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        require: {
            value: cdktf.listMapperHcl(zeroTrustAccessApplicationPoliciesRequireToHclTerraform, false)(struct.require),
            isBlock: true,
            type: "set",
            storageClassType: "ZeroTrustAccessApplicationPoliciesRequireList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationPoliciesOutputReference extends cdktf.ComplexObject {
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
        if (this._connectionRules?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.connectionRules = this._connectionRules?.internalValue;
        }
        if (this._decision !== undefined) {
            hasAnyValues = true;
            internalValueResult.decision = this._decision;
        }
        if (this._exclude?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.exclude = this._exclude?.internalValue;
        }
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._include?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.include = this._include?.internalValue;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._precedence !== undefined) {
            hasAnyValues = true;
            internalValueResult.precedence = this._precedence;
        }
        if (this._require?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.require = this._require?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._connectionRules.internalValue = undefined;
            this._decision = undefined;
            this._exclude.internalValue = undefined;
            this._id = undefined;
            this._include.internalValue = undefined;
            this._name = undefined;
            this._precedence = undefined;
            this._require.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._connectionRules.internalValue = value.connectionRules;
            this._decision = value.decision;
            this._exclude.internalValue = value.exclude;
            this._id = value.id;
            this._include.internalValue = value.include;
            this._name = value.name;
            this._precedence = value.precedence;
            this._require.internalValue = value.require;
        }
    }
    // connection_rules - computed: false, optional: true, required: false
    _connectionRules = new ZeroTrustAccessApplicationPoliciesConnectionRulesOutputReference(this, "connection_rules");
    get connectionRules() {
        return this._connectionRules;
    }
    putConnectionRules(value) {
        this._connectionRules.internalValue = value;
    }
    resetConnectionRules() {
        this._connectionRules.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get connectionRulesInput() {
        return this._connectionRules.internalValue;
    }
    // decision - computed: false, optional: true, required: false
    _decision;
    get decision() {
        return this.getStringAttribute('decision');
    }
    set decision(value) {
        this._decision = value;
    }
    resetDecision() {
        this._decision = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get decisionInput() {
        return this._decision;
    }
    // exclude - computed: false, optional: true, required: false
    _exclude = new ZeroTrustAccessApplicationPoliciesExcludeList(this, "exclude", true);
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
    // id - computed: false, optional: true, required: false
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
    // include - computed: false, optional: true, required: false
    _include = new ZeroTrustAccessApplicationPoliciesIncludeList(this, "include", true);
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
    // precedence - computed: true, optional: true, required: false
    _precedence;
    get precedence() {
        return this.getNumberAttribute('precedence');
    }
    set precedence(value) {
        this._precedence = value;
    }
    resetPrecedence() {
        this._precedence = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get precedenceInput() {
        return this._precedence;
    }
    // require - computed: false, optional: true, required: false
    _require = new ZeroTrustAccessApplicationPoliciesRequireList(this, "require", true);
    get require() {
        return this._require;
    }
    putRequire(value) {
        this._require.internalValue = value;
    }
    resetRequire() {
        this._require.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requireInput() {
        return this._require.internalValue;
    }
}
export class ZeroTrustAccessApplicationPoliciesList extends cdktf.ComplexList {
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
        return new ZeroTrustAccessApplicationPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function zeroTrustAccessApplicationSaasAppCustomAttributesSourceNameByIdpToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        idp_id: cdktf.stringToTerraform(struct.idpId),
        source_name: cdktf.stringToTerraform(struct.sourceName),
    };
}
export function zeroTrustAccessApplicationSaasAppCustomAttributesSourceNameByIdpToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        idp_id: {
            value: cdktf.stringToHclTerraform(struct.idpId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        source_name: {
            value: cdktf.stringToHclTerraform(struct.sourceName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationSaasAppCustomAttributesSourceNameByIdpOutputReference extends cdktf.ComplexObject {
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
        if (this._idpId !== undefined) {
            hasAnyValues = true;
            internalValueResult.idpId = this._idpId;
        }
        if (this._sourceName !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceName = this._sourceName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._idpId = undefined;
            this._sourceName = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._idpId = value.idpId;
            this._sourceName = value.sourceName;
        }
    }
    // idp_id - computed: false, optional: true, required: false
    _idpId;
    get idpId() {
        return this.getStringAttribute('idp_id');
    }
    set idpId(value) {
        this._idpId = value;
    }
    resetIdpId() {
        this._idpId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get idpIdInput() {
        return this._idpId;
    }
    // source_name - computed: false, optional: true, required: false
    _sourceName;
    get sourceName() {
        return this.getStringAttribute('source_name');
    }
    set sourceName(value) {
        this._sourceName = value;
    }
    resetSourceName() {
        this._sourceName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sourceNameInput() {
        return this._sourceName;
    }
}
export class ZeroTrustAccessApplicationSaasAppCustomAttributesSourceNameByIdpList extends cdktf.ComplexList {
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
        return new ZeroTrustAccessApplicationSaasAppCustomAttributesSourceNameByIdpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function zeroTrustAccessApplicationSaasAppCustomAttributesSourceToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        name_by_idp: cdktf.listMapper(zeroTrustAccessApplicationSaasAppCustomAttributesSourceNameByIdpToTerraform, false)(struct.nameByIdp),
    };
}
export function zeroTrustAccessApplicationSaasAppCustomAttributesSourceToHclTerraform(struct) {
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
        name_by_idp: {
            value: cdktf.listMapperHcl(zeroTrustAccessApplicationSaasAppCustomAttributesSourceNameByIdpToHclTerraform, false)(struct.nameByIdp),
            isBlock: true,
            type: "list",
            storageClassType: "ZeroTrustAccessApplicationSaasAppCustomAttributesSourceNameByIdpList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationSaasAppCustomAttributesSourceOutputReference extends cdktf.ComplexObject {
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
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._nameByIdp?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.nameByIdp = this._nameByIdp?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._nameByIdp.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._nameByIdp.internalValue = value.nameByIdp;
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
    // name_by_idp - computed: false, optional: true, required: false
    _nameByIdp = new ZeroTrustAccessApplicationSaasAppCustomAttributesSourceNameByIdpList(this, "name_by_idp", false);
    get nameByIdp() {
        return this._nameByIdp;
    }
    putNameByIdp(value) {
        this._nameByIdp.internalValue = value;
    }
    resetNameByIdp() {
        this._nameByIdp.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get nameByIdpInput() {
        return this._nameByIdp.internalValue;
    }
}
export function zeroTrustAccessApplicationSaasAppCustomAttributesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        friendly_name: cdktf.stringToTerraform(struct.friendlyName),
        name: cdktf.stringToTerraform(struct.name),
        name_format: cdktf.stringToTerraform(struct.nameFormat),
        required: cdktf.booleanToTerraform(struct.required),
        source: zeroTrustAccessApplicationSaasAppCustomAttributesSourceToTerraform(struct.source),
    };
}
export function zeroTrustAccessApplicationSaasAppCustomAttributesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        friendly_name: {
            value: cdktf.stringToHclTerraform(struct.friendlyName),
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
        name_format: {
            value: cdktf.stringToHclTerraform(struct.nameFormat),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        required: {
            value: cdktf.booleanToHclTerraform(struct.required),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        source: {
            value: zeroTrustAccessApplicationSaasAppCustomAttributesSourceToHclTerraform(struct.source),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationSaasAppCustomAttributesSource",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationSaasAppCustomAttributesOutputReference extends cdktf.ComplexObject {
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
        if (this._friendlyName !== undefined) {
            hasAnyValues = true;
            internalValueResult.friendlyName = this._friendlyName;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._nameFormat !== undefined) {
            hasAnyValues = true;
            internalValueResult.nameFormat = this._nameFormat;
        }
        if (this._required !== undefined) {
            hasAnyValues = true;
            internalValueResult.required = this._required;
        }
        if (this._source?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.source = this._source?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._friendlyName = undefined;
            this._name = undefined;
            this._nameFormat = undefined;
            this._required = undefined;
            this._source.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._friendlyName = value.friendlyName;
            this._name = value.name;
            this._nameFormat = value.nameFormat;
            this._required = value.required;
            this._source.internalValue = value.source;
        }
    }
    // friendly_name - computed: false, optional: true, required: false
    _friendlyName;
    get friendlyName() {
        return this.getStringAttribute('friendly_name');
    }
    set friendlyName(value) {
        this._friendlyName = value;
    }
    resetFriendlyName() {
        this._friendlyName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get friendlyNameInput() {
        return this._friendlyName;
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
    // name_format - computed: false, optional: true, required: false
    _nameFormat;
    get nameFormat() {
        return this.getStringAttribute('name_format');
    }
    set nameFormat(value) {
        this._nameFormat = value;
    }
    resetNameFormat() {
        this._nameFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get nameFormatInput() {
        return this._nameFormat;
    }
    // required - computed: false, optional: true, required: false
    _required;
    get required() {
        return this.getBooleanAttribute('required');
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
    // source - computed: false, optional: true, required: false
    _source = new ZeroTrustAccessApplicationSaasAppCustomAttributesSourceOutputReference(this, "source");
    get source() {
        return this._source;
    }
    putSource(value) {
        this._source.internalValue = value;
    }
    resetSource() {
        this._source.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sourceInput() {
        return this._source.internalValue;
    }
}
export class ZeroTrustAccessApplicationSaasAppCustomAttributesList extends cdktf.ComplexList {
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
        return new ZeroTrustAccessApplicationSaasAppCustomAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function zeroTrustAccessApplicationSaasAppCustomClaimsSourceToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        name_by_idp: cdktf.hashMapper(cdktf.stringToTerraform)(struct.nameByIdp),
    };
}
export function zeroTrustAccessApplicationSaasAppCustomClaimsSourceToHclTerraform(struct) {
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
        name_by_idp: {
            value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct.nameByIdp),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationSaasAppCustomClaimsSourceOutputReference extends cdktf.ComplexObject {
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
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._nameByIdp !== undefined) {
            hasAnyValues = true;
            internalValueResult.nameByIdp = this._nameByIdp;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._nameByIdp = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._nameByIdp = value.nameByIdp;
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
    // name_by_idp - computed: false, optional: true, required: false
    _nameByIdp;
    get nameByIdp() {
        return this.getStringMapAttribute('name_by_idp');
    }
    set nameByIdp(value) {
        this._nameByIdp = value;
    }
    resetNameByIdp() {
        this._nameByIdp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get nameByIdpInput() {
        return this._nameByIdp;
    }
}
export function zeroTrustAccessApplicationSaasAppCustomClaimsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        required: cdktf.booleanToTerraform(struct.required),
        scope: cdktf.stringToTerraform(struct.scope),
        source: zeroTrustAccessApplicationSaasAppCustomClaimsSourceToTerraform(struct.source),
    };
}
export function zeroTrustAccessApplicationSaasAppCustomClaimsToHclTerraform(struct) {
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
        required: {
            value: cdktf.booleanToHclTerraform(struct.required),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        scope: {
            value: cdktf.stringToHclTerraform(struct.scope),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        source: {
            value: zeroTrustAccessApplicationSaasAppCustomClaimsSourceToHclTerraform(struct.source),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationSaasAppCustomClaimsSource",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationSaasAppCustomClaimsOutputReference extends cdktf.ComplexObject {
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
        if (this._required !== undefined) {
            hasAnyValues = true;
            internalValueResult.required = this._required;
        }
        if (this._scope !== undefined) {
            hasAnyValues = true;
            internalValueResult.scope = this._scope;
        }
        if (this._source?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.source = this._source?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._required = undefined;
            this._scope = undefined;
            this._source.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._required = value.required;
            this._scope = value.scope;
            this._source.internalValue = value.source;
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
    // required - computed: false, optional: true, required: false
    _required;
    get required() {
        return this.getBooleanAttribute('required');
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
    // scope - computed: false, optional: true, required: false
    _scope;
    get scope() {
        return this.getStringAttribute('scope');
    }
    set scope(value) {
        this._scope = value;
    }
    resetScope() {
        this._scope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get scopeInput() {
        return this._scope;
    }
    // source - computed: false, optional: true, required: false
    _source = new ZeroTrustAccessApplicationSaasAppCustomClaimsSourceOutputReference(this, "source");
    get source() {
        return this._source;
    }
    putSource(value) {
        this._source.internalValue = value;
    }
    resetSource() {
        this._source.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sourceInput() {
        return this._source.internalValue;
    }
}
export class ZeroTrustAccessApplicationSaasAppCustomClaimsList extends cdktf.ComplexList {
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
        return new ZeroTrustAccessApplicationSaasAppCustomClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function zeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        return_access_token_from_authorization_endpoint: cdktf.booleanToTerraform(struct.returnAccessTokenFromAuthorizationEndpoint),
        return_id_token_from_authorization_endpoint: cdktf.booleanToTerraform(struct.returnIdTokenFromAuthorizationEndpoint),
    };
}
export function zeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        return_access_token_from_authorization_endpoint: {
            value: cdktf.booleanToHclTerraform(struct.returnAccessTokenFromAuthorizationEndpoint),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        return_id_token_from_authorization_endpoint: {
            value: cdktf.booleanToHclTerraform(struct.returnIdTokenFromAuthorizationEndpoint),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference extends cdktf.ComplexObject {
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
        if (this._returnAccessTokenFromAuthorizationEndpoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.returnAccessTokenFromAuthorizationEndpoint = this._returnAccessTokenFromAuthorizationEndpoint;
        }
        if (this._returnIdTokenFromAuthorizationEndpoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.returnIdTokenFromAuthorizationEndpoint = this._returnIdTokenFromAuthorizationEndpoint;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._returnAccessTokenFromAuthorizationEndpoint = undefined;
            this._returnIdTokenFromAuthorizationEndpoint = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._returnAccessTokenFromAuthorizationEndpoint = value.returnAccessTokenFromAuthorizationEndpoint;
            this._returnIdTokenFromAuthorizationEndpoint = value.returnIdTokenFromAuthorizationEndpoint;
        }
    }
    // return_access_token_from_authorization_endpoint - computed: false, optional: true, required: false
    _returnAccessTokenFromAuthorizationEndpoint;
    get returnAccessTokenFromAuthorizationEndpoint() {
        return this.getBooleanAttribute('return_access_token_from_authorization_endpoint');
    }
    set returnAccessTokenFromAuthorizationEndpoint(value) {
        this._returnAccessTokenFromAuthorizationEndpoint = value;
    }
    resetReturnAccessTokenFromAuthorizationEndpoint() {
        this._returnAccessTokenFromAuthorizationEndpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get returnAccessTokenFromAuthorizationEndpointInput() {
        return this._returnAccessTokenFromAuthorizationEndpoint;
    }
    // return_id_token_from_authorization_endpoint - computed: false, optional: true, required: false
    _returnIdTokenFromAuthorizationEndpoint;
    get returnIdTokenFromAuthorizationEndpoint() {
        return this.getBooleanAttribute('return_id_token_from_authorization_endpoint');
    }
    set returnIdTokenFromAuthorizationEndpoint(value) {
        this._returnIdTokenFromAuthorizationEndpoint = value;
    }
    resetReturnIdTokenFromAuthorizationEndpoint() {
        this._returnIdTokenFromAuthorizationEndpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get returnIdTokenFromAuthorizationEndpointInput() {
        return this._returnIdTokenFromAuthorizationEndpoint;
    }
}
export function zeroTrustAccessApplicationSaasAppRefreshTokenOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        lifetime: cdktf.stringToTerraform(struct.lifetime),
    };
}
export function zeroTrustAccessApplicationSaasAppRefreshTokenOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        lifetime: {
            value: cdktf.stringToHclTerraform(struct.lifetime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference extends cdktf.ComplexObject {
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
        if (this._lifetime !== undefined) {
            hasAnyValues = true;
            internalValueResult.lifetime = this._lifetime;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._lifetime = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._lifetime = value.lifetime;
        }
    }
    // lifetime - computed: false, optional: true, required: false
    _lifetime;
    get lifetime() {
        return this.getStringAttribute('lifetime');
    }
    set lifetime(value) {
        this._lifetime = value;
    }
    resetLifetime() {
        this._lifetime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get lifetimeInput() {
        return this._lifetime;
    }
}
export function zeroTrustAccessApplicationSaasAppToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        access_token_lifetime: cdktf.stringToTerraform(struct.accessTokenLifetime),
        allow_pkce_without_client_secret: cdktf.booleanToTerraform(struct.allowPkceWithoutClientSecret),
        app_launcher_url: cdktf.stringToTerraform(struct.appLauncherUrl),
        auth_type: cdktf.stringToTerraform(struct.authType),
        consumer_service_url: cdktf.stringToTerraform(struct.consumerServiceUrl),
        custom_attributes: cdktf.listMapper(zeroTrustAccessApplicationSaasAppCustomAttributesToTerraform, false)(struct.customAttributes),
        custom_claims: cdktf.listMapper(zeroTrustAccessApplicationSaasAppCustomClaimsToTerraform, false)(struct.customClaims),
        default_relay_state: cdktf.stringToTerraform(struct.defaultRelayState),
        grant_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.grantTypes),
        group_filter_regex: cdktf.stringToTerraform(struct.groupFilterRegex),
        hybrid_and_implicit_options: zeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsToTerraform(struct.hybridAndImplicitOptions),
        idp_entity_id: cdktf.stringToTerraform(struct.idpEntityId),
        name_id_format: cdktf.stringToTerraform(struct.nameIdFormat),
        name_id_transform_jsonata: cdktf.stringToTerraform(struct.nameIdTransformJsonata),
        redirect_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.redirectUris),
        refresh_token_options: zeroTrustAccessApplicationSaasAppRefreshTokenOptionsToTerraform(struct.refreshTokenOptions),
        saml_attribute_transform_jsonata: cdktf.stringToTerraform(struct.samlAttributeTransformJsonata),
        scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.scopes),
        sp_entity_id: cdktf.stringToTerraform(struct.spEntityId),
        sso_endpoint: cdktf.stringToTerraform(struct.ssoEndpoint),
    };
}
export function zeroTrustAccessApplicationSaasAppToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        access_token_lifetime: {
            value: cdktf.stringToHclTerraform(struct.accessTokenLifetime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        allow_pkce_without_client_secret: {
            value: cdktf.booleanToHclTerraform(struct.allowPkceWithoutClientSecret),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        app_launcher_url: {
            value: cdktf.stringToHclTerraform(struct.appLauncherUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        auth_type: {
            value: cdktf.stringToHclTerraform(struct.authType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        consumer_service_url: {
            value: cdktf.stringToHclTerraform(struct.consumerServiceUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        custom_attributes: {
            value: cdktf.listMapperHcl(zeroTrustAccessApplicationSaasAppCustomAttributesToHclTerraform, false)(struct.customAttributes),
            isBlock: true,
            type: "list",
            storageClassType: "ZeroTrustAccessApplicationSaasAppCustomAttributesList",
        },
        custom_claims: {
            value: cdktf.listMapperHcl(zeroTrustAccessApplicationSaasAppCustomClaimsToHclTerraform, false)(struct.customClaims),
            isBlock: true,
            type: "list",
            storageClassType: "ZeroTrustAccessApplicationSaasAppCustomClaimsList",
        },
        default_relay_state: {
            value: cdktf.stringToHclTerraform(struct.defaultRelayState),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        grant_types: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.grantTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        group_filter_regex: {
            value: cdktf.stringToHclTerraform(struct.groupFilterRegex),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        hybrid_and_implicit_options: {
            value: zeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsToHclTerraform(struct.hybridAndImplicitOptions),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions",
        },
        idp_entity_id: {
            value: cdktf.stringToHclTerraform(struct.idpEntityId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name_id_format: {
            value: cdktf.stringToHclTerraform(struct.nameIdFormat),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name_id_transform_jsonata: {
            value: cdktf.stringToHclTerraform(struct.nameIdTransformJsonata),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        redirect_uris: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.redirectUris),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        refresh_token_options: {
            value: zeroTrustAccessApplicationSaasAppRefreshTokenOptionsToHclTerraform(struct.refreshTokenOptions),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationSaasAppRefreshTokenOptions",
        },
        saml_attribute_transform_jsonata: {
            value: cdktf.stringToHclTerraform(struct.samlAttributeTransformJsonata),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        scopes: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.scopes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        sp_entity_id: {
            value: cdktf.stringToHclTerraform(struct.spEntityId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sso_endpoint: {
            value: cdktf.stringToHclTerraform(struct.ssoEndpoint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationSaasAppOutputReference extends cdktf.ComplexObject {
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
        if (this._accessTokenLifetime !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessTokenLifetime = this._accessTokenLifetime;
        }
        if (this._allowPkceWithoutClientSecret !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowPkceWithoutClientSecret = this._allowPkceWithoutClientSecret;
        }
        if (this._appLauncherUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.appLauncherUrl = this._appLauncherUrl;
        }
        if (this._authType !== undefined) {
            hasAnyValues = true;
            internalValueResult.authType = this._authType;
        }
        if (this._consumerServiceUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.consumerServiceUrl = this._consumerServiceUrl;
        }
        if (this._customAttributes?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customAttributes = this._customAttributes?.internalValue;
        }
        if (this._customClaims?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customClaims = this._customClaims?.internalValue;
        }
        if (this._defaultRelayState !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultRelayState = this._defaultRelayState;
        }
        if (this._grantTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.grantTypes = this._grantTypes;
        }
        if (this._groupFilterRegex !== undefined) {
            hasAnyValues = true;
            internalValueResult.groupFilterRegex = this._groupFilterRegex;
        }
        if (this._hybridAndImplicitOptions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.hybridAndImplicitOptions = this._hybridAndImplicitOptions?.internalValue;
        }
        if (this._idpEntityId !== undefined) {
            hasAnyValues = true;
            internalValueResult.idpEntityId = this._idpEntityId;
        }
        if (this._nameIdFormat !== undefined) {
            hasAnyValues = true;
            internalValueResult.nameIdFormat = this._nameIdFormat;
        }
        if (this._nameIdTransformJsonata !== undefined) {
            hasAnyValues = true;
            internalValueResult.nameIdTransformJsonata = this._nameIdTransformJsonata;
        }
        if (this._redirectUris !== undefined) {
            hasAnyValues = true;
            internalValueResult.redirectUris = this._redirectUris;
        }
        if (this._refreshTokenOptions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.refreshTokenOptions = this._refreshTokenOptions?.internalValue;
        }
        if (this._samlAttributeTransformJsonata !== undefined) {
            hasAnyValues = true;
            internalValueResult.samlAttributeTransformJsonata = this._samlAttributeTransformJsonata;
        }
        if (this._scopes !== undefined) {
            hasAnyValues = true;
            internalValueResult.scopes = this._scopes;
        }
        if (this._spEntityId !== undefined) {
            hasAnyValues = true;
            internalValueResult.spEntityId = this._spEntityId;
        }
        if (this._ssoEndpoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.ssoEndpoint = this._ssoEndpoint;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accessTokenLifetime = undefined;
            this._allowPkceWithoutClientSecret = undefined;
            this._appLauncherUrl = undefined;
            this._authType = undefined;
            this._consumerServiceUrl = undefined;
            this._customAttributes.internalValue = undefined;
            this._customClaims.internalValue = undefined;
            this._defaultRelayState = undefined;
            this._grantTypes = undefined;
            this._groupFilterRegex = undefined;
            this._hybridAndImplicitOptions.internalValue = undefined;
            this._idpEntityId = undefined;
            this._nameIdFormat = undefined;
            this._nameIdTransformJsonata = undefined;
            this._redirectUris = undefined;
            this._refreshTokenOptions.internalValue = undefined;
            this._samlAttributeTransformJsonata = undefined;
            this._scopes = undefined;
            this._spEntityId = undefined;
            this._ssoEndpoint = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accessTokenLifetime = value.accessTokenLifetime;
            this._allowPkceWithoutClientSecret = value.allowPkceWithoutClientSecret;
            this._appLauncherUrl = value.appLauncherUrl;
            this._authType = value.authType;
            this._consumerServiceUrl = value.consumerServiceUrl;
            this._customAttributes.internalValue = value.customAttributes;
            this._customClaims.internalValue = value.customClaims;
            this._defaultRelayState = value.defaultRelayState;
            this._grantTypes = value.grantTypes;
            this._groupFilterRegex = value.groupFilterRegex;
            this._hybridAndImplicitOptions.internalValue = value.hybridAndImplicitOptions;
            this._idpEntityId = value.idpEntityId;
            this._nameIdFormat = value.nameIdFormat;
            this._nameIdTransformJsonata = value.nameIdTransformJsonata;
            this._redirectUris = value.redirectUris;
            this._refreshTokenOptions.internalValue = value.refreshTokenOptions;
            this._samlAttributeTransformJsonata = value.samlAttributeTransformJsonata;
            this._scopes = value.scopes;
            this._spEntityId = value.spEntityId;
            this._ssoEndpoint = value.ssoEndpoint;
        }
    }
    // access_token_lifetime - computed: true, optional: true, required: false
    _accessTokenLifetime;
    get accessTokenLifetime() {
        return this.getStringAttribute('access_token_lifetime');
    }
    set accessTokenLifetime(value) {
        this._accessTokenLifetime = value;
    }
    resetAccessTokenLifetime() {
        this._accessTokenLifetime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get accessTokenLifetimeInput() {
        return this._accessTokenLifetime;
    }
    // allow_pkce_without_client_secret - computed: false, optional: true, required: false
    _allowPkceWithoutClientSecret;
    get allowPkceWithoutClientSecret() {
        return this.getBooleanAttribute('allow_pkce_without_client_secret');
    }
    set allowPkceWithoutClientSecret(value) {
        this._allowPkceWithoutClientSecret = value;
    }
    resetAllowPkceWithoutClientSecret() {
        this._allowPkceWithoutClientSecret = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowPkceWithoutClientSecretInput() {
        return this._allowPkceWithoutClientSecret;
    }
    // app_launcher_url - computed: false, optional: true, required: false
    _appLauncherUrl;
    get appLauncherUrl() {
        return this.getStringAttribute('app_launcher_url');
    }
    set appLauncherUrl(value) {
        this._appLauncherUrl = value;
    }
    resetAppLauncherUrl() {
        this._appLauncherUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get appLauncherUrlInput() {
        return this._appLauncherUrl;
    }
    // auth_type - computed: true, optional: true, required: false
    _authType;
    get authType() {
        return this.getStringAttribute('auth_type');
    }
    set authType(value) {
        this._authType = value;
    }
    resetAuthType() {
        this._authType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get authTypeInput() {
        return this._authType;
    }
    // client_id - computed: true, optional: false, required: false
    get clientId() {
        return this.getStringAttribute('client_id');
    }
    // client_secret - computed: true, optional: false, required: false
    get clientSecret() {
        return this.getStringAttribute('client_secret');
    }
    // consumer_service_url - computed: false, optional: true, required: false
    _consumerServiceUrl;
    get consumerServiceUrl() {
        return this.getStringAttribute('consumer_service_url');
    }
    set consumerServiceUrl(value) {
        this._consumerServiceUrl = value;
    }
    resetConsumerServiceUrl() {
        this._consumerServiceUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get consumerServiceUrlInput() {
        return this._consumerServiceUrl;
    }
    // custom_attributes - computed: false, optional: true, required: false
    _customAttributes = new ZeroTrustAccessApplicationSaasAppCustomAttributesList(this, "custom_attributes", false);
    get customAttributes() {
        return this._customAttributes;
    }
    putCustomAttributes(value) {
        this._customAttributes.internalValue = value;
    }
    resetCustomAttributes() {
        this._customAttributes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get customAttributesInput() {
        return this._customAttributes.internalValue;
    }
    // custom_claims - computed: false, optional: true, required: false
    _customClaims = new ZeroTrustAccessApplicationSaasAppCustomClaimsList(this, "custom_claims", false);
    get customClaims() {
        return this._customClaims;
    }
    putCustomClaims(value) {
        this._customClaims.internalValue = value;
    }
    resetCustomClaims() {
        this._customClaims.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get customClaimsInput() {
        return this._customClaims.internalValue;
    }
    // default_relay_state - computed: false, optional: true, required: false
    _defaultRelayState;
    get defaultRelayState() {
        return this.getStringAttribute('default_relay_state');
    }
    set defaultRelayState(value) {
        this._defaultRelayState = value;
    }
    resetDefaultRelayState() {
        this._defaultRelayState = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get defaultRelayStateInput() {
        return this._defaultRelayState;
    }
    // grant_types - computed: false, optional: true, required: false
    _grantTypes;
    get grantTypes() {
        return this.getListAttribute('grant_types');
    }
    set grantTypes(value) {
        this._grantTypes = value;
    }
    resetGrantTypes() {
        this._grantTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get grantTypesInput() {
        return this._grantTypes;
    }
    // group_filter_regex - computed: false, optional: true, required: false
    _groupFilterRegex;
    get groupFilterRegex() {
        return this.getStringAttribute('group_filter_regex');
    }
    set groupFilterRegex(value) {
        this._groupFilterRegex = value;
    }
    resetGroupFilterRegex() {
        this._groupFilterRegex = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get groupFilterRegexInput() {
        return this._groupFilterRegex;
    }
    // hybrid_and_implicit_options - computed: false, optional: true, required: false
    _hybridAndImplicitOptions = new ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference(this, "hybrid_and_implicit_options");
    get hybridAndImplicitOptions() {
        return this._hybridAndImplicitOptions;
    }
    putHybridAndImplicitOptions(value) {
        this._hybridAndImplicitOptions.internalValue = value;
    }
    resetHybridAndImplicitOptions() {
        this._hybridAndImplicitOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hybridAndImplicitOptionsInput() {
        return this._hybridAndImplicitOptions.internalValue;
    }
    // idp_entity_id - computed: true, optional: true, required: false
    _idpEntityId;
    get idpEntityId() {
        return this.getStringAttribute('idp_entity_id');
    }
    set idpEntityId(value) {
        this._idpEntityId = value;
    }
    resetIdpEntityId() {
        this._idpEntityId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get idpEntityIdInput() {
        return this._idpEntityId;
    }
    // name_id_format - computed: true, optional: true, required: false
    _nameIdFormat;
    get nameIdFormat() {
        return this.getStringAttribute('name_id_format');
    }
    set nameIdFormat(value) {
        this._nameIdFormat = value;
    }
    resetNameIdFormat() {
        this._nameIdFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get nameIdFormatInput() {
        return this._nameIdFormat;
    }
    // name_id_transform_jsonata - computed: false, optional: true, required: false
    _nameIdTransformJsonata;
    get nameIdTransformJsonata() {
        return this.getStringAttribute('name_id_transform_jsonata');
    }
    set nameIdTransformJsonata(value) {
        this._nameIdTransformJsonata = value;
    }
    resetNameIdTransformJsonata() {
        this._nameIdTransformJsonata = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get nameIdTransformJsonataInput() {
        return this._nameIdTransformJsonata;
    }
    // public_key - computed: true, optional: false, required: false
    get publicKey() {
        return this.getStringAttribute('public_key');
    }
    // redirect_uris - computed: false, optional: true, required: false
    _redirectUris;
    get redirectUris() {
        return this.getListAttribute('redirect_uris');
    }
    set redirectUris(value) {
        this._redirectUris = value;
    }
    resetRedirectUris() {
        this._redirectUris = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get redirectUrisInput() {
        return this._redirectUris;
    }
    // refresh_token_options - computed: false, optional: true, required: false
    _refreshTokenOptions = new ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference(this, "refresh_token_options");
    get refreshTokenOptions() {
        return this._refreshTokenOptions;
    }
    putRefreshTokenOptions(value) {
        this._refreshTokenOptions.internalValue = value;
    }
    resetRefreshTokenOptions() {
        this._refreshTokenOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get refreshTokenOptionsInput() {
        return this._refreshTokenOptions.internalValue;
    }
    // saml_attribute_transform_jsonata - computed: false, optional: true, required: false
    _samlAttributeTransformJsonata;
    get samlAttributeTransformJsonata() {
        return this.getStringAttribute('saml_attribute_transform_jsonata');
    }
    set samlAttributeTransformJsonata(value) {
        this._samlAttributeTransformJsonata = value;
    }
    resetSamlAttributeTransformJsonata() {
        this._samlAttributeTransformJsonata = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get samlAttributeTransformJsonataInput() {
        return this._samlAttributeTransformJsonata;
    }
    // scopes - computed: false, optional: true, required: false
    _scopes;
    get scopes() {
        return this.getListAttribute('scopes');
    }
    set scopes(value) {
        this._scopes = value;
    }
    resetScopes() {
        this._scopes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get scopesInput() {
        return this._scopes;
    }
    // sp_entity_id - computed: false, optional: true, required: false
    _spEntityId;
    get spEntityId() {
        return this.getStringAttribute('sp_entity_id');
    }
    set spEntityId(value) {
        this._spEntityId = value;
    }
    resetSpEntityId() {
        this._spEntityId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get spEntityIdInput() {
        return this._spEntityId;
    }
    // sso_endpoint - computed: true, optional: true, required: false
    _ssoEndpoint;
    get ssoEndpoint() {
        return this.getStringAttribute('sso_endpoint');
    }
    set ssoEndpoint(value) {
        this._ssoEndpoint = value;
    }
    resetSsoEndpoint() {
        this._ssoEndpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ssoEndpointInput() {
        return this._ssoEndpoint;
    }
}
export function zeroTrustAccessApplicationScimConfigAuthenticationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        authorization_url: cdktf.stringToTerraform(struct.authorizationUrl),
        client_id: cdktf.stringToTerraform(struct.clientId),
        client_secret: cdktf.stringToTerraform(struct.clientSecret),
        password: cdktf.stringToTerraform(struct.password),
        scheme: cdktf.stringToTerraform(struct.scheme),
        scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.scopes),
        token: cdktf.stringToTerraform(struct.token),
        token_url: cdktf.stringToTerraform(struct.tokenUrl),
        user: cdktf.stringToTerraform(struct.user),
    };
}
export function zeroTrustAccessApplicationScimConfigAuthenticationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        authorization_url: {
            value: cdktf.stringToHclTerraform(struct.authorizationUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        client_id: {
            value: cdktf.stringToHclTerraform(struct.clientId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        client_secret: {
            value: cdktf.stringToHclTerraform(struct.clientSecret),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        password: {
            value: cdktf.stringToHclTerraform(struct.password),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        scheme: {
            value: cdktf.stringToHclTerraform(struct.scheme),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        scopes: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.scopes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        token: {
            value: cdktf.stringToHclTerraform(struct.token),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        token_url: {
            value: cdktf.stringToHclTerraform(struct.tokenUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        user: {
            value: cdktf.stringToHclTerraform(struct.user),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference extends cdktf.ComplexObject {
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
        if (this._authorizationUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.authorizationUrl = this._authorizationUrl;
        }
        if (this._clientId !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientId = this._clientId;
        }
        if (this._clientSecret !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientSecret = this._clientSecret;
        }
        if (this._password !== undefined) {
            hasAnyValues = true;
            internalValueResult.password = this._password;
        }
        if (this._scheme !== undefined) {
            hasAnyValues = true;
            internalValueResult.scheme = this._scheme;
        }
        if (this._scopes !== undefined) {
            hasAnyValues = true;
            internalValueResult.scopes = this._scopes;
        }
        if (this._token !== undefined) {
            hasAnyValues = true;
            internalValueResult.token = this._token;
        }
        if (this._tokenUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.tokenUrl = this._tokenUrl;
        }
        if (this._user !== undefined) {
            hasAnyValues = true;
            internalValueResult.user = this._user;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authorizationUrl = undefined;
            this._clientId = undefined;
            this._clientSecret = undefined;
            this._password = undefined;
            this._scheme = undefined;
            this._scopes = undefined;
            this._token = undefined;
            this._tokenUrl = undefined;
            this._user = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authorizationUrl = value.authorizationUrl;
            this._clientId = value.clientId;
            this._clientSecret = value.clientSecret;
            this._password = value.password;
            this._scheme = value.scheme;
            this._scopes = value.scopes;
            this._token = value.token;
            this._tokenUrl = value.tokenUrl;
            this._user = value.user;
        }
    }
    // authorization_url - computed: false, optional: true, required: false
    _authorizationUrl;
    get authorizationUrl() {
        return this.getStringAttribute('authorization_url');
    }
    set authorizationUrl(value) {
        this._authorizationUrl = value;
    }
    resetAuthorizationUrl() {
        this._authorizationUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get authorizationUrlInput() {
        return this._authorizationUrl;
    }
    // client_id - computed: false, optional: true, required: false
    _clientId;
    get clientId() {
        return this.getStringAttribute('client_id');
    }
    set clientId(value) {
        this._clientId = value;
    }
    resetClientId() {
        this._clientId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get clientIdInput() {
        return this._clientId;
    }
    // client_secret - computed: false, optional: true, required: false
    _clientSecret;
    get clientSecret() {
        return this.getStringAttribute('client_secret');
    }
    set clientSecret(value) {
        this._clientSecret = value;
    }
    resetClientSecret() {
        this._clientSecret = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get clientSecretInput() {
        return this._clientSecret;
    }
    // password - computed: false, optional: true, required: false
    _password;
    get password() {
        return this.getStringAttribute('password');
    }
    set password(value) {
        this._password = value;
    }
    resetPassword() {
        this._password = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get passwordInput() {
        return this._password;
    }
    // scheme - computed: false, optional: false, required: true
    _scheme;
    get scheme() {
        return this.getStringAttribute('scheme');
    }
    set scheme(value) {
        this._scheme = value;
    }
    // Temporarily expose input value. Use with caution.
    get schemeInput() {
        return this._scheme;
    }
    // scopes - computed: false, optional: true, required: false
    _scopes;
    get scopes() {
        return this.getListAttribute('scopes');
    }
    set scopes(value) {
        this._scopes = value;
    }
    resetScopes() {
        this._scopes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get scopesInput() {
        return this._scopes;
    }
    // token - computed: false, optional: true, required: false
    _token;
    get token() {
        return this.getStringAttribute('token');
    }
    set token(value) {
        this._token = value;
    }
    resetToken() {
        this._token = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tokenInput() {
        return this._token;
    }
    // token_url - computed: false, optional: true, required: false
    _tokenUrl;
    get tokenUrl() {
        return this.getStringAttribute('token_url');
    }
    set tokenUrl(value) {
        this._tokenUrl = value;
    }
    resetTokenUrl() {
        this._tokenUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tokenUrlInput() {
        return this._tokenUrl;
    }
    // user - computed: false, optional: true, required: false
    _user;
    get user() {
        return this.getStringAttribute('user');
    }
    set user(value) {
        this._user = value;
    }
    resetUser() {
        this._user = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get userInput() {
        return this._user;
    }
}
export function zeroTrustAccessApplicationScimConfigMappingsOperationsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        create: cdktf.booleanToTerraform(struct.create),
        delete: cdktf.booleanToTerraform(struct.delete),
        update: cdktf.booleanToTerraform(struct.update),
    };
}
export function zeroTrustAccessApplicationScimConfigMappingsOperationsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        create: {
            value: cdktf.booleanToHclTerraform(struct.create),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        delete: {
            value: cdktf.booleanToHclTerraform(struct.delete),
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
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference extends cdktf.ComplexObject {
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
        if (this._create !== undefined) {
            hasAnyValues = true;
            internalValueResult.create = this._create;
        }
        if (this._delete !== undefined) {
            hasAnyValues = true;
            internalValueResult.delete = this._delete;
        }
        if (this._update !== undefined) {
            hasAnyValues = true;
            internalValueResult.update = this._update;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._create = undefined;
            this._delete = undefined;
            this._update = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._create = value.create;
            this._delete = value.delete;
            this._update = value.update;
        }
    }
    // create - computed: false, optional: true, required: false
    _create;
    get create() {
        return this.getBooleanAttribute('create');
    }
    set create(value) {
        this._create = value;
    }
    resetCreate() {
        this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get createInput() {
        return this._create;
    }
    // delete - computed: false, optional: true, required: false
    _delete;
    get delete() {
        return this.getBooleanAttribute('delete');
    }
    set delete(value) {
        this._delete = value;
    }
    resetDelete() {
        this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deleteInput() {
        return this._delete;
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
}
export function zeroTrustAccessApplicationScimConfigMappingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        filter: cdktf.stringToTerraform(struct.filter),
        operations: zeroTrustAccessApplicationScimConfigMappingsOperationsToTerraform(struct.operations),
        schema: cdktf.stringToTerraform(struct.schema),
        strictness: cdktf.stringToTerraform(struct.strictness),
        transform_jsonata: cdktf.stringToTerraform(struct.transformJsonata),
    };
}
export function zeroTrustAccessApplicationScimConfigMappingsToHclTerraform(struct) {
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
        filter: {
            value: cdktf.stringToHclTerraform(struct.filter),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        operations: {
            value: zeroTrustAccessApplicationScimConfigMappingsOperationsToHclTerraform(struct.operations),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationScimConfigMappingsOperations",
        },
        schema: {
            value: cdktf.stringToHclTerraform(struct.schema),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        strictness: {
            value: cdktf.stringToHclTerraform(struct.strictness),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        transform_jsonata: {
            value: cdktf.stringToHclTerraform(struct.transformJsonata),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationScimConfigMappingsOutputReference extends cdktf.ComplexObject {
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
        if (this._filter !== undefined) {
            hasAnyValues = true;
            internalValueResult.filter = this._filter;
        }
        if (this._operations?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.operations = this._operations?.internalValue;
        }
        if (this._schema !== undefined) {
            hasAnyValues = true;
            internalValueResult.schema = this._schema;
        }
        if (this._strictness !== undefined) {
            hasAnyValues = true;
            internalValueResult.strictness = this._strictness;
        }
        if (this._transformJsonata !== undefined) {
            hasAnyValues = true;
            internalValueResult.transformJsonata = this._transformJsonata;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
            this._filter = undefined;
            this._operations.internalValue = undefined;
            this._schema = undefined;
            this._strictness = undefined;
            this._transformJsonata = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
            this._filter = value.filter;
            this._operations.internalValue = value.operations;
            this._schema = value.schema;
            this._strictness = value.strictness;
            this._transformJsonata = value.transformJsonata;
        }
    }
    // enabled - computed: false, optional: true, required: false
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
    // filter - computed: false, optional: true, required: false
    _filter;
    get filter() {
        return this.getStringAttribute('filter');
    }
    set filter(value) {
        this._filter = value;
    }
    resetFilter() {
        this._filter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get filterInput() {
        return this._filter;
    }
    // operations - computed: false, optional: true, required: false
    _operations = new ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference(this, "operations");
    get operations() {
        return this._operations;
    }
    putOperations(value) {
        this._operations.internalValue = value;
    }
    resetOperations() {
        this._operations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get operationsInput() {
        return this._operations.internalValue;
    }
    // schema - computed: false, optional: false, required: true
    _schema;
    get schema() {
        return this.getStringAttribute('schema');
    }
    set schema(value) {
        this._schema = value;
    }
    // Temporarily expose input value. Use with caution.
    get schemaInput() {
        return this._schema;
    }
    // strictness - computed: false, optional: true, required: false
    _strictness;
    get strictness() {
        return this.getStringAttribute('strictness');
    }
    set strictness(value) {
        this._strictness = value;
    }
    resetStrictness() {
        this._strictness = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get strictnessInput() {
        return this._strictness;
    }
    // transform_jsonata - computed: false, optional: true, required: false
    _transformJsonata;
    get transformJsonata() {
        return this.getStringAttribute('transform_jsonata');
    }
    set transformJsonata(value) {
        this._transformJsonata = value;
    }
    resetTransformJsonata() {
        this._transformJsonata = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get transformJsonataInput() {
        return this._transformJsonata;
    }
}
export class ZeroTrustAccessApplicationScimConfigMappingsList extends cdktf.ComplexList {
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
        return new ZeroTrustAccessApplicationScimConfigMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function zeroTrustAccessApplicationScimConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        authentication: zeroTrustAccessApplicationScimConfigAuthenticationToTerraform(struct.authentication),
        deactivate_on_delete: cdktf.booleanToTerraform(struct.deactivateOnDelete),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        idp_uid: cdktf.stringToTerraform(struct.idpUid),
        mappings: cdktf.listMapper(zeroTrustAccessApplicationScimConfigMappingsToTerraform, false)(struct.mappings),
        remote_uri: cdktf.stringToTerraform(struct.remoteUri),
    };
}
export function zeroTrustAccessApplicationScimConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        authentication: {
            value: zeroTrustAccessApplicationScimConfigAuthenticationToHclTerraform(struct.authentication),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessApplicationScimConfigAuthentication",
        },
        deactivate_on_delete: {
            value: cdktf.booleanToHclTerraform(struct.deactivateOnDelete),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        enabled: {
            value: cdktf.booleanToHclTerraform(struct.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        idp_uid: {
            value: cdktf.stringToHclTerraform(struct.idpUid),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mappings: {
            value: cdktf.listMapperHcl(zeroTrustAccessApplicationScimConfigMappingsToHclTerraform, false)(struct.mappings),
            isBlock: true,
            type: "list",
            storageClassType: "ZeroTrustAccessApplicationScimConfigMappingsList",
        },
        remote_uri: {
            value: cdktf.stringToHclTerraform(struct.remoteUri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationScimConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._authentication?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.authentication = this._authentication?.internalValue;
        }
        if (this._deactivateOnDelete !== undefined) {
            hasAnyValues = true;
            internalValueResult.deactivateOnDelete = this._deactivateOnDelete;
        }
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._idpUid !== undefined) {
            hasAnyValues = true;
            internalValueResult.idpUid = this._idpUid;
        }
        if (this._mappings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.mappings = this._mappings?.internalValue;
        }
        if (this._remoteUri !== undefined) {
            hasAnyValues = true;
            internalValueResult.remoteUri = this._remoteUri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authentication.internalValue = undefined;
            this._deactivateOnDelete = undefined;
            this._enabled = undefined;
            this._idpUid = undefined;
            this._mappings.internalValue = undefined;
            this._remoteUri = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authentication.internalValue = value.authentication;
            this._deactivateOnDelete = value.deactivateOnDelete;
            this._enabled = value.enabled;
            this._idpUid = value.idpUid;
            this._mappings.internalValue = value.mappings;
            this._remoteUri = value.remoteUri;
        }
    }
    // authentication - computed: false, optional: true, required: false
    _authentication = new ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference(this, "authentication");
    get authentication() {
        return this._authentication;
    }
    putAuthentication(value) {
        this._authentication.internalValue = value;
    }
    resetAuthentication() {
        this._authentication.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get authenticationInput() {
        return this._authentication.internalValue;
    }
    // deactivate_on_delete - computed: false, optional: true, required: false
    _deactivateOnDelete;
    get deactivateOnDelete() {
        return this.getBooleanAttribute('deactivate_on_delete');
    }
    set deactivateOnDelete(value) {
        this._deactivateOnDelete = value;
    }
    resetDeactivateOnDelete() {
        this._deactivateOnDelete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deactivateOnDeleteInput() {
        return this._deactivateOnDelete;
    }
    // enabled - computed: false, optional: true, required: false
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
    // idp_uid - computed: false, optional: false, required: true
    _idpUid;
    get idpUid() {
        return this.getStringAttribute('idp_uid');
    }
    set idpUid(value) {
        this._idpUid = value;
    }
    // Temporarily expose input value. Use with caution.
    get idpUidInput() {
        return this._idpUid;
    }
    // mappings - computed: false, optional: true, required: false
    _mappings = new ZeroTrustAccessApplicationScimConfigMappingsList(this, "mappings", false);
    get mappings() {
        return this._mappings;
    }
    putMappings(value) {
        this._mappings.internalValue = value;
    }
    resetMappings() {
        this._mappings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get mappingsInput() {
        return this._mappings.internalValue;
    }
    // remote_uri - computed: false, optional: false, required: true
    _remoteUri;
    get remoteUri() {
        return this.getStringAttribute('remote_uri');
    }
    set remoteUri(value) {
        this._remoteUri = value;
    }
    // Temporarily expose input value. Use with caution.
    get remoteUriInput() {
        return this._remoteUri;
    }
}
export function zeroTrustAccessApplicationTargetCriteriaToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        port: cdktf.numberToTerraform(struct.port),
        protocol: cdktf.stringToTerraform(struct.protocol),
        target_attributes: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct.targetAttributes),
    };
}
export function zeroTrustAccessApplicationTargetCriteriaToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        port: {
            value: cdktf.numberToHclTerraform(struct.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        protocol: {
            value: cdktf.stringToHclTerraform(struct.protocol),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        target_attributes: {
            value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct.targetAttributes),
            isBlock: false,
            type: "map",
            storageClassType: "stringListMap",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessApplicationTargetCriteriaOutputReference extends cdktf.ComplexObject {
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
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        if (this._protocol !== undefined) {
            hasAnyValues = true;
            internalValueResult.protocol = this._protocol;
        }
        if (this._targetAttributes !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetAttributes = this._targetAttributes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._port = undefined;
            this._protocol = undefined;
            this._targetAttributes = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._port = value.port;
            this._protocol = value.protocol;
            this._targetAttributes = value.targetAttributes;
        }
    }
    // port - computed: false, optional: false, required: true
    _port;
    get port() {
        return this.getNumberAttribute('port');
    }
    set port(value) {
        this._port = value;
    }
    // Temporarily expose input value. Use with caution.
    get portInput() {
        return this._port;
    }
    // protocol - computed: false, optional: false, required: true
    _protocol;
    get protocol() {
        return this.getStringAttribute('protocol');
    }
    set protocol(value) {
        this._protocol = value;
    }
    // Temporarily expose input value. Use with caution.
    get protocolInput() {
        return this._protocol;
    }
    // target_attributes - computed: false, optional: false, required: true
    _targetAttributes;
    get targetAttributes() {
        return this.interpolationForAttribute('target_attributes');
    }
    set targetAttributes(value) {
        this._targetAttributes = value;
    }
    // Temporarily expose input value. Use with caution.
    get targetAttributesInput() {
        return this._targetAttributes;
    }
}
export class ZeroTrustAccessApplicationTargetCriteriaList extends cdktf.ComplexList {
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
        return new ZeroTrustAccessApplicationTargetCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application cloudflare_zero_trust_access_application}
*/
export class ZeroTrustAccessApplication extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_zero_trust_access_application";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ZeroTrustAccessApplication resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustAccessApplication to import
    * @param importFromId The id of the existing ZeroTrustAccessApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustAccessApplication to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_access_application", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_application cloudflare_zero_trust_access_application} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustAccessApplicationConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_access_application',
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
        this._allowAuthenticateViaWarp = config.allowAuthenticateViaWarp;
        this._allowIframe = config.allowIframe;
        this._allowedIdps = config.allowedIdps;
        this._appLauncherLogoUrl = config.appLauncherLogoUrl;
        this._appLauncherVisible = config.appLauncherVisible;
        this._autoRedirectToIdentity = config.autoRedirectToIdentity;
        this._bgColor = config.bgColor;
        this._corsHeaders.internalValue = config.corsHeaders;
        this._customDenyMessage = config.customDenyMessage;
        this._customDenyUrl = config.customDenyUrl;
        this._customNonIdentityDenyUrl = config.customNonIdentityDenyUrl;
        this._customPages = config.customPages;
        this._destinations.internalValue = config.destinations;
        this._domain = config.domain;
        this._enableBindingCookie = config.enableBindingCookie;
        this._footerLinks.internalValue = config.footerLinks;
        this._headerBgColor = config.headerBgColor;
        this._httpOnlyCookieAttribute = config.httpOnlyCookieAttribute;
        this._landingPageDesign.internalValue = config.landingPageDesign;
        this._logoUrl = config.logoUrl;
        this._name = config.name;
        this._oauthConfiguration.internalValue = config.oauthConfiguration;
        this._optionsPreflightBypass = config.optionsPreflightBypass;
        this._pathCookieAttribute = config.pathCookieAttribute;
        this._policies.internalValue = config.policies;
        this._readServiceTokensFromHeader = config.readServiceTokensFromHeader;
        this._saasApp.internalValue = config.saasApp;
        this._sameSiteCookieAttribute = config.sameSiteCookieAttribute;
        this._scimConfig.internalValue = config.scimConfig;
        this._selfHostedDomains = config.selfHostedDomains;
        this._serviceAuth401Redirect = config.serviceAuth401Redirect;
        this._sessionDuration = config.sessionDuration;
        this._skipAppLauncherLoginPage = config.skipAppLauncherLoginPage;
        this._skipInterstitial = config.skipInterstitial;
        this._tags = config.tags;
        this._targetCriteria.internalValue = config.targetCriteria;
        this._type = config.type;
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
    // allow_authenticate_via_warp - computed: false, optional: true, required: false
    _allowAuthenticateViaWarp;
    get allowAuthenticateViaWarp() {
        return this.getBooleanAttribute('allow_authenticate_via_warp');
    }
    set allowAuthenticateViaWarp(value) {
        this._allowAuthenticateViaWarp = value;
    }
    resetAllowAuthenticateViaWarp() {
        this._allowAuthenticateViaWarp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowAuthenticateViaWarpInput() {
        return this._allowAuthenticateViaWarp;
    }
    // allow_iframe - computed: false, optional: true, required: false
    _allowIframe;
    get allowIframe() {
        return this.getBooleanAttribute('allow_iframe');
    }
    set allowIframe(value) {
        this._allowIframe = value;
    }
    resetAllowIframe() {
        this._allowIframe = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowIframeInput() {
        return this._allowIframe;
    }
    // allowed_idps - computed: false, optional: true, required: false
    _allowedIdps;
    get allowedIdps() {
        return cdktf.Fn.tolist(this.getListAttribute('allowed_idps'));
    }
    set allowedIdps(value) {
        this._allowedIdps = value;
    }
    resetAllowedIdps() {
        this._allowedIdps = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowedIdpsInput() {
        return this._allowedIdps;
    }
    // app_launcher_logo_url - computed: false, optional: true, required: false
    _appLauncherLogoUrl;
    get appLauncherLogoUrl() {
        return this.getStringAttribute('app_launcher_logo_url');
    }
    set appLauncherLogoUrl(value) {
        this._appLauncherLogoUrl = value;
    }
    resetAppLauncherLogoUrl() {
        this._appLauncherLogoUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get appLauncherLogoUrlInput() {
        return this._appLauncherLogoUrl;
    }
    // app_launcher_visible - computed: true, optional: true, required: false
    _appLauncherVisible;
    get appLauncherVisible() {
        return this.getBooleanAttribute('app_launcher_visible');
    }
    set appLauncherVisible(value) {
        this._appLauncherVisible = value;
    }
    resetAppLauncherVisible() {
        this._appLauncherVisible = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get appLauncherVisibleInput() {
        return this._appLauncherVisible;
    }
    // aud - computed: true, optional: false, required: false
    get aud() {
        return this.getStringAttribute('aud');
    }
    // auto_redirect_to_identity - computed: false, optional: true, required: false
    _autoRedirectToIdentity;
    get autoRedirectToIdentity() {
        return this.getBooleanAttribute('auto_redirect_to_identity');
    }
    set autoRedirectToIdentity(value) {
        this._autoRedirectToIdentity = value;
    }
    resetAutoRedirectToIdentity() {
        this._autoRedirectToIdentity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get autoRedirectToIdentityInput() {
        return this._autoRedirectToIdentity;
    }
    // bg_color - computed: false, optional: true, required: false
    _bgColor;
    get bgColor() {
        return this.getStringAttribute('bg_color');
    }
    set bgColor(value) {
        this._bgColor = value;
    }
    resetBgColor() {
        this._bgColor = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bgColorInput() {
        return this._bgColor;
    }
    // cors_headers - computed: false, optional: true, required: false
    _corsHeaders = new ZeroTrustAccessApplicationCorsHeadersOutputReference(this, "cors_headers");
    get corsHeaders() {
        return this._corsHeaders;
    }
    putCorsHeaders(value) {
        this._corsHeaders.internalValue = value;
    }
    resetCorsHeaders() {
        this._corsHeaders.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get corsHeadersInput() {
        return this._corsHeaders.internalValue;
    }
    // custom_deny_message - computed: false, optional: true, required: false
    _customDenyMessage;
    get customDenyMessage() {
        return this.getStringAttribute('custom_deny_message');
    }
    set customDenyMessage(value) {
        this._customDenyMessage = value;
    }
    resetCustomDenyMessage() {
        this._customDenyMessage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get customDenyMessageInput() {
        return this._customDenyMessage;
    }
    // custom_deny_url - computed: false, optional: true, required: false
    _customDenyUrl;
    get customDenyUrl() {
        return this.getStringAttribute('custom_deny_url');
    }
    set customDenyUrl(value) {
        this._customDenyUrl = value;
    }
    resetCustomDenyUrl() {
        this._customDenyUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get customDenyUrlInput() {
        return this._customDenyUrl;
    }
    // custom_non_identity_deny_url - computed: false, optional: true, required: false
    _customNonIdentityDenyUrl;
    get customNonIdentityDenyUrl() {
        return this.getStringAttribute('custom_non_identity_deny_url');
    }
    set customNonIdentityDenyUrl(value) {
        this._customNonIdentityDenyUrl = value;
    }
    resetCustomNonIdentityDenyUrl() {
        this._customNonIdentityDenyUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get customNonIdentityDenyUrlInput() {
        return this._customNonIdentityDenyUrl;
    }
    // custom_pages - computed: false, optional: true, required: false
    _customPages;
    get customPages() {
        return this.getListAttribute('custom_pages');
    }
    set customPages(value) {
        this._customPages = value;
    }
    resetCustomPages() {
        this._customPages = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get customPagesInput() {
        return this._customPages;
    }
    // destinations - computed: true, optional: true, required: false
    _destinations = new ZeroTrustAccessApplicationDestinationsList(this, "destinations", false);
    get destinations() {
        return this._destinations;
    }
    putDestinations(value) {
        this._destinations.internalValue = value;
    }
    resetDestinations() {
        this._destinations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get destinationsInput() {
        return this._destinations.internalValue;
    }
    // domain - computed: true, optional: true, required: false
    _domain;
    get domain() {
        return this.getStringAttribute('domain');
    }
    set domain(value) {
        this._domain = value;
    }
    resetDomain() {
        this._domain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get domainInput() {
        return this._domain;
    }
    // enable_binding_cookie - computed: false, optional: true, required: false
    _enableBindingCookie;
    get enableBindingCookie() {
        return this.getBooleanAttribute('enable_binding_cookie');
    }
    set enableBindingCookie(value) {
        this._enableBindingCookie = value;
    }
    resetEnableBindingCookie() {
        this._enableBindingCookie = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enableBindingCookieInput() {
        return this._enableBindingCookie;
    }
    // footer_links - computed: false, optional: true, required: false
    _footerLinks = new ZeroTrustAccessApplicationFooterLinksList(this, "footer_links", false);
    get footerLinks() {
        return this._footerLinks;
    }
    putFooterLinks(value) {
        this._footerLinks.internalValue = value;
    }
    resetFooterLinks() {
        this._footerLinks.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get footerLinksInput() {
        return this._footerLinks.internalValue;
    }
    // header_bg_color - computed: false, optional: true, required: false
    _headerBgColor;
    get headerBgColor() {
        return this.getStringAttribute('header_bg_color');
    }
    set headerBgColor(value) {
        this._headerBgColor = value;
    }
    resetHeaderBgColor() {
        this._headerBgColor = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get headerBgColorInput() {
        return this._headerBgColor;
    }
    // http_only_cookie_attribute - computed: true, optional: true, required: false
    _httpOnlyCookieAttribute;
    get httpOnlyCookieAttribute() {
        return this.getBooleanAttribute('http_only_cookie_attribute');
    }
    set httpOnlyCookieAttribute(value) {
        this._httpOnlyCookieAttribute = value;
    }
    resetHttpOnlyCookieAttribute() {
        this._httpOnlyCookieAttribute = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get httpOnlyCookieAttributeInput() {
        return this._httpOnlyCookieAttribute;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // landing_page_design - computed: false, optional: true, required: false
    _landingPageDesign = new ZeroTrustAccessApplicationLandingPageDesignOutputReference(this, "landing_page_design");
    get landingPageDesign() {
        return this._landingPageDesign;
    }
    putLandingPageDesign(value) {
        this._landingPageDesign.internalValue = value;
    }
    resetLandingPageDesign() {
        this._landingPageDesign.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get landingPageDesignInput() {
        return this._landingPageDesign.internalValue;
    }
    // logo_url - computed: false, optional: true, required: false
    _logoUrl;
    get logoUrl() {
        return this.getStringAttribute('logo_url');
    }
    set logoUrl(value) {
        this._logoUrl = value;
    }
    resetLogoUrl() {
        this._logoUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get logoUrlInput() {
        return this._logoUrl;
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
    // oauth_configuration - computed: false, optional: true, required: false
    _oauthConfiguration = new ZeroTrustAccessApplicationOauthConfigurationOutputReference(this, "oauth_configuration");
    get oauthConfiguration() {
        return this._oauthConfiguration;
    }
    putOauthConfiguration(value) {
        this._oauthConfiguration.internalValue = value;
    }
    resetOauthConfiguration() {
        this._oauthConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get oauthConfigurationInput() {
        return this._oauthConfiguration.internalValue;
    }
    // options_preflight_bypass - computed: false, optional: true, required: false
    _optionsPreflightBypass;
    get optionsPreflightBypass() {
        return this.getBooleanAttribute('options_preflight_bypass');
    }
    set optionsPreflightBypass(value) {
        this._optionsPreflightBypass = value;
    }
    resetOptionsPreflightBypass() {
        this._optionsPreflightBypass = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get optionsPreflightBypassInput() {
        return this._optionsPreflightBypass;
    }
    // path_cookie_attribute - computed: false, optional: true, required: false
    _pathCookieAttribute;
    get pathCookieAttribute() {
        return this.getBooleanAttribute('path_cookie_attribute');
    }
    set pathCookieAttribute(value) {
        this._pathCookieAttribute = value;
    }
    resetPathCookieAttribute() {
        this._pathCookieAttribute = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get pathCookieAttributeInput() {
        return this._pathCookieAttribute;
    }
    // policies - computed: false, optional: true, required: false
    _policies = new ZeroTrustAccessApplicationPoliciesList(this, "policies", false);
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
    // read_service_tokens_from_header - computed: false, optional: true, required: false
    _readServiceTokensFromHeader;
    get readServiceTokensFromHeader() {
        return this.getStringAttribute('read_service_tokens_from_header');
    }
    set readServiceTokensFromHeader(value) {
        this._readServiceTokensFromHeader = value;
    }
    resetReadServiceTokensFromHeader() {
        this._readServiceTokensFromHeader = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get readServiceTokensFromHeaderInput() {
        return this._readServiceTokensFromHeader;
    }
    // saas_app - computed: false, optional: true, required: false
    _saasApp = new ZeroTrustAccessApplicationSaasAppOutputReference(this, "saas_app");
    get saasApp() {
        return this._saasApp;
    }
    putSaasApp(value) {
        this._saasApp.internalValue = value;
    }
    resetSaasApp() {
        this._saasApp.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get saasAppInput() {
        return this._saasApp.internalValue;
    }
    // same_site_cookie_attribute - computed: false, optional: true, required: false
    _sameSiteCookieAttribute;
    get sameSiteCookieAttribute() {
        return this.getStringAttribute('same_site_cookie_attribute');
    }
    set sameSiteCookieAttribute(value) {
        this._sameSiteCookieAttribute = value;
    }
    resetSameSiteCookieAttribute() {
        this._sameSiteCookieAttribute = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sameSiteCookieAttributeInput() {
        return this._sameSiteCookieAttribute;
    }
    // scim_config - computed: false, optional: true, required: false
    _scimConfig = new ZeroTrustAccessApplicationScimConfigOutputReference(this, "scim_config");
    get scimConfig() {
        return this._scimConfig;
    }
    putScimConfig(value) {
        this._scimConfig.internalValue = value;
    }
    resetScimConfig() {
        this._scimConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get scimConfigInput() {
        return this._scimConfig.internalValue;
    }
    // self_hosted_domains - computed: true, optional: true, required: false
    _selfHostedDomains;
    get selfHostedDomains() {
        return cdktf.Fn.tolist(this.getListAttribute('self_hosted_domains'));
    }
    set selfHostedDomains(value) {
        this._selfHostedDomains = value;
    }
    resetSelfHostedDomains() {
        this._selfHostedDomains = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get selfHostedDomainsInput() {
        return this._selfHostedDomains;
    }
    // service_auth_401_redirect - computed: false, optional: true, required: false
    _serviceAuth401Redirect;
    get serviceAuth401Redirect() {
        return this.getBooleanAttribute('service_auth_401_redirect');
    }
    set serviceAuth401Redirect(value) {
        this._serviceAuth401Redirect = value;
    }
    resetServiceAuth401Redirect() {
        this._serviceAuth401Redirect = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get serviceAuth401RedirectInput() {
        return this._serviceAuth401Redirect;
    }
    // session_duration - computed: true, optional: true, required: false
    _sessionDuration;
    get sessionDuration() {
        return this.getStringAttribute('session_duration');
    }
    set sessionDuration(value) {
        this._sessionDuration = value;
    }
    resetSessionDuration() {
        this._sessionDuration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sessionDurationInput() {
        return this._sessionDuration;
    }
    // skip_app_launcher_login_page - computed: true, optional: true, required: false
    _skipAppLauncherLoginPage;
    get skipAppLauncherLoginPage() {
        return this.getBooleanAttribute('skip_app_launcher_login_page');
    }
    set skipAppLauncherLoginPage(value) {
        this._skipAppLauncherLoginPage = value;
    }
    resetSkipAppLauncherLoginPage() {
        this._skipAppLauncherLoginPage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get skipAppLauncherLoginPageInput() {
        return this._skipAppLauncherLoginPage;
    }
    // skip_interstitial - computed: false, optional: true, required: false
    _skipInterstitial;
    get skipInterstitial() {
        return this.getBooleanAttribute('skip_interstitial');
    }
    set skipInterstitial(value) {
        this._skipInterstitial = value;
    }
    resetSkipInterstitial() {
        this._skipInterstitial = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get skipInterstitialInput() {
        return this._skipInterstitial;
    }
    // tags - computed: false, optional: true, required: false
    _tags;
    get tags() {
        return cdktf.Fn.tolist(this.getListAttribute('tags'));
    }
    set tags(value) {
        this._tags = value;
    }
    resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tagsInput() {
        return this._tags;
    }
    // target_criteria - computed: false, optional: true, required: false
    _targetCriteria = new ZeroTrustAccessApplicationTargetCriteriaList(this, "target_criteria", false);
    get targetCriteria() {
        return this._targetCriteria;
    }
    putTargetCriteria(value) {
        this._targetCriteria.internalValue = value;
    }
    resetTargetCriteria() {
        this._targetCriteria.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get targetCriteriaInput() {
        return this._targetCriteria.internalValue;
    }
    // type - computed: true, optional: true, required: false
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
            account_id: cdktf.stringToTerraform(this._accountId),
            allow_authenticate_via_warp: cdktf.booleanToTerraform(this._allowAuthenticateViaWarp),
            allow_iframe: cdktf.booleanToTerraform(this._allowIframe),
            allowed_idps: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedIdps),
            app_launcher_logo_url: cdktf.stringToTerraform(this._appLauncherLogoUrl),
            app_launcher_visible: cdktf.booleanToTerraform(this._appLauncherVisible),
            auto_redirect_to_identity: cdktf.booleanToTerraform(this._autoRedirectToIdentity),
            bg_color: cdktf.stringToTerraform(this._bgColor),
            cors_headers: zeroTrustAccessApplicationCorsHeadersToTerraform(this._corsHeaders.internalValue),
            custom_deny_message: cdktf.stringToTerraform(this._customDenyMessage),
            custom_deny_url: cdktf.stringToTerraform(this._customDenyUrl),
            custom_non_identity_deny_url: cdktf.stringToTerraform(this._customNonIdentityDenyUrl),
            custom_pages: cdktf.listMapper(cdktf.stringToTerraform, false)(this._customPages),
            destinations: cdktf.listMapper(zeroTrustAccessApplicationDestinationsToTerraform, false)(this._destinations.internalValue),
            domain: cdktf.stringToTerraform(this._domain),
            enable_binding_cookie: cdktf.booleanToTerraform(this._enableBindingCookie),
            footer_links: cdktf.listMapper(zeroTrustAccessApplicationFooterLinksToTerraform, false)(this._footerLinks.internalValue),
            header_bg_color: cdktf.stringToTerraform(this._headerBgColor),
            http_only_cookie_attribute: cdktf.booleanToTerraform(this._httpOnlyCookieAttribute),
            landing_page_design: zeroTrustAccessApplicationLandingPageDesignToTerraform(this._landingPageDesign.internalValue),
            logo_url: cdktf.stringToTerraform(this._logoUrl),
            name: cdktf.stringToTerraform(this._name),
            oauth_configuration: zeroTrustAccessApplicationOauthConfigurationToTerraform(this._oauthConfiguration.internalValue),
            options_preflight_bypass: cdktf.booleanToTerraform(this._optionsPreflightBypass),
            path_cookie_attribute: cdktf.booleanToTerraform(this._pathCookieAttribute),
            policies: cdktf.listMapper(zeroTrustAccessApplicationPoliciesToTerraform, false)(this._policies.internalValue),
            read_service_tokens_from_header: cdktf.stringToTerraform(this._readServiceTokensFromHeader),
            saas_app: zeroTrustAccessApplicationSaasAppToTerraform(this._saasApp.internalValue),
            same_site_cookie_attribute: cdktf.stringToTerraform(this._sameSiteCookieAttribute),
            scim_config: zeroTrustAccessApplicationScimConfigToTerraform(this._scimConfig.internalValue),
            self_hosted_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._selfHostedDomains),
            service_auth_401_redirect: cdktf.booleanToTerraform(this._serviceAuth401Redirect),
            session_duration: cdktf.stringToTerraform(this._sessionDuration),
            skip_app_launcher_login_page: cdktf.booleanToTerraform(this._skipAppLauncherLoginPage),
            skip_interstitial: cdktf.booleanToTerraform(this._skipInterstitial),
            tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
            target_criteria: cdktf.listMapper(zeroTrustAccessApplicationTargetCriteriaToTerraform, false)(this._targetCriteria.internalValue),
            type: cdktf.stringToTerraform(this._type),
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
            allow_authenticate_via_warp: {
                value: cdktf.booleanToHclTerraform(this._allowAuthenticateViaWarp),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            allow_iframe: {
                value: cdktf.booleanToHclTerraform(this._allowIframe),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            allowed_idps: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedIdps),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            app_launcher_logo_url: {
                value: cdktf.stringToHclTerraform(this._appLauncherLogoUrl),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            app_launcher_visible: {
                value: cdktf.booleanToHclTerraform(this._appLauncherVisible),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            auto_redirect_to_identity: {
                value: cdktf.booleanToHclTerraform(this._autoRedirectToIdentity),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            bg_color: {
                value: cdktf.stringToHclTerraform(this._bgColor),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            cors_headers: {
                value: zeroTrustAccessApplicationCorsHeadersToHclTerraform(this._corsHeaders.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ZeroTrustAccessApplicationCorsHeaders",
            },
            custom_deny_message: {
                value: cdktf.stringToHclTerraform(this._customDenyMessage),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            custom_deny_url: {
                value: cdktf.stringToHclTerraform(this._customDenyUrl),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            custom_non_identity_deny_url: {
                value: cdktf.stringToHclTerraform(this._customNonIdentityDenyUrl),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            custom_pages: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._customPages),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            destinations: {
                value: cdktf.listMapperHcl(zeroTrustAccessApplicationDestinationsToHclTerraform, false)(this._destinations.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ZeroTrustAccessApplicationDestinationsList",
            },
            domain: {
                value: cdktf.stringToHclTerraform(this._domain),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            enable_binding_cookie: {
                value: cdktf.booleanToHclTerraform(this._enableBindingCookie),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            footer_links: {
                value: cdktf.listMapperHcl(zeroTrustAccessApplicationFooterLinksToHclTerraform, false)(this._footerLinks.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ZeroTrustAccessApplicationFooterLinksList",
            },
            header_bg_color: {
                value: cdktf.stringToHclTerraform(this._headerBgColor),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            http_only_cookie_attribute: {
                value: cdktf.booleanToHclTerraform(this._httpOnlyCookieAttribute),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            landing_page_design: {
                value: zeroTrustAccessApplicationLandingPageDesignToHclTerraform(this._landingPageDesign.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ZeroTrustAccessApplicationLandingPageDesign",
            },
            logo_url: {
                value: cdktf.stringToHclTerraform(this._logoUrl),
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
            oauth_configuration: {
                value: zeroTrustAccessApplicationOauthConfigurationToHclTerraform(this._oauthConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ZeroTrustAccessApplicationOauthConfiguration",
            },
            options_preflight_bypass: {
                value: cdktf.booleanToHclTerraform(this._optionsPreflightBypass),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            path_cookie_attribute: {
                value: cdktf.booleanToHclTerraform(this._pathCookieAttribute),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            policies: {
                value: cdktf.listMapperHcl(zeroTrustAccessApplicationPoliciesToHclTerraform, false)(this._policies.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ZeroTrustAccessApplicationPoliciesList",
            },
            read_service_tokens_from_header: {
                value: cdktf.stringToHclTerraform(this._readServiceTokensFromHeader),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            saas_app: {
                value: zeroTrustAccessApplicationSaasAppToHclTerraform(this._saasApp.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ZeroTrustAccessApplicationSaasApp",
            },
            same_site_cookie_attribute: {
                value: cdktf.stringToHclTerraform(this._sameSiteCookieAttribute),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            scim_config: {
                value: zeroTrustAccessApplicationScimConfigToHclTerraform(this._scimConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ZeroTrustAccessApplicationScimConfig",
            },
            self_hosted_domains: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._selfHostedDomains),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            service_auth_401_redirect: {
                value: cdktf.booleanToHclTerraform(this._serviceAuth401Redirect),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            session_duration: {
                value: cdktf.stringToHclTerraform(this._sessionDuration),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            skip_app_launcher_login_page: {
                value: cdktf.booleanToHclTerraform(this._skipAppLauncherLoginPage),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            skip_interstitial: {
                value: cdktf.booleanToHclTerraform(this._skipInterstitial),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            tags: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            target_criteria: {
                value: cdktf.listMapperHcl(zeroTrustAccessApplicationTargetCriteriaToHclTerraform, false)(this._targetCriteria.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ZeroTrustAccessApplicationTargetCriteriaList",
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
