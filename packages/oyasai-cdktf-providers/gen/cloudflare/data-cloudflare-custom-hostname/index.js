// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_hostname
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataCloudflareCustomHostnameFilterHostnameToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        contain: cdktf.stringToTerraform(struct.contain),
    };
}
export function dataCloudflareCustomHostnameFilterHostnameToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        contain: {
            value: cdktf.stringToHclTerraform(struct.contain),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class DataCloudflareCustomHostnameFilterHostnameOutputReference extends cdktf.ComplexObject {
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
        if (this._contain !== undefined) {
            hasAnyValues = true;
            internalValueResult.contain = this._contain;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contain = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contain = value.contain;
        }
    }
    // contain - computed: false, optional: true, required: false
    _contain;
    get contain() {
        return this.getStringAttribute('contain');
    }
    set contain(value) {
        this._contain = value;
    }
    resetContain() {
        this._contain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get containInput() {
        return this._contain;
    }
}
export function dataCloudflareCustomHostnameFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        certificate_authority: cdktf.stringToTerraform(struct.certificateAuthority),
        custom_origin_server: cdktf.stringToTerraform(struct.customOriginServer),
        direction: cdktf.stringToTerraform(struct.direction),
        hostname: dataCloudflareCustomHostnameFilterHostnameToTerraform(struct.hostname),
        hostname_status: cdktf.stringToTerraform(struct.hostnameStatus),
        id: cdktf.stringToTerraform(struct.id),
        order: cdktf.stringToTerraform(struct.order),
        ssl: cdktf.numberToTerraform(struct.ssl),
        ssl_status: cdktf.stringToTerraform(struct.sslStatus),
        wildcard: cdktf.booleanToTerraform(struct.wildcard),
    };
}
export function dataCloudflareCustomHostnameFilterToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        certificate_authority: {
            value: cdktf.stringToHclTerraform(struct.certificateAuthority),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        custom_origin_server: {
            value: cdktf.stringToHclTerraform(struct.customOriginServer),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        direction: {
            value: cdktf.stringToHclTerraform(struct.direction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        hostname: {
            value: dataCloudflareCustomHostnameFilterHostnameToHclTerraform(struct.hostname),
            isBlock: true,
            type: "struct",
            storageClassType: "DataCloudflareCustomHostnameFilterHostname",
        },
        hostname_status: {
            value: cdktf.stringToHclTerraform(struct.hostnameStatus),
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
        order: {
            value: cdktf.stringToHclTerraform(struct.order),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ssl: {
            value: cdktf.numberToHclTerraform(struct.ssl),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        ssl_status: {
            value: cdktf.stringToHclTerraform(struct.sslStatus),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        wildcard: {
            value: cdktf.booleanToHclTerraform(struct.wildcard),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class DataCloudflareCustomHostnameFilterOutputReference extends cdktf.ComplexObject {
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
        if (this._certificateAuthority !== undefined) {
            hasAnyValues = true;
            internalValueResult.certificateAuthority = this._certificateAuthority;
        }
        if (this._customOriginServer !== undefined) {
            hasAnyValues = true;
            internalValueResult.customOriginServer = this._customOriginServer;
        }
        if (this._direction !== undefined) {
            hasAnyValues = true;
            internalValueResult.direction = this._direction;
        }
        if (this._hostname?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.hostname = this._hostname?.internalValue;
        }
        if (this._hostnameStatus !== undefined) {
            hasAnyValues = true;
            internalValueResult.hostnameStatus = this._hostnameStatus;
        }
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._order !== undefined) {
            hasAnyValues = true;
            internalValueResult.order = this._order;
        }
        if (this._ssl !== undefined) {
            hasAnyValues = true;
            internalValueResult.ssl = this._ssl;
        }
        if (this._sslStatus !== undefined) {
            hasAnyValues = true;
            internalValueResult.sslStatus = this._sslStatus;
        }
        if (this._wildcard !== undefined) {
            hasAnyValues = true;
            internalValueResult.wildcard = this._wildcard;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._certificateAuthority = undefined;
            this._customOriginServer = undefined;
            this._direction = undefined;
            this._hostname.internalValue = undefined;
            this._hostnameStatus = undefined;
            this._id = undefined;
            this._order = undefined;
            this._ssl = undefined;
            this._sslStatus = undefined;
            this._wildcard = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._certificateAuthority = value.certificateAuthority;
            this._customOriginServer = value.customOriginServer;
            this._direction = value.direction;
            this._hostname.internalValue = value.hostname;
            this._hostnameStatus = value.hostnameStatus;
            this._id = value.id;
            this._order = value.order;
            this._ssl = value.ssl;
            this._sslStatus = value.sslStatus;
            this._wildcard = value.wildcard;
        }
    }
    // certificate_authority - computed: false, optional: true, required: false
    _certificateAuthority;
    get certificateAuthority() {
        return this.getStringAttribute('certificate_authority');
    }
    set certificateAuthority(value) {
        this._certificateAuthority = value;
    }
    resetCertificateAuthority() {
        this._certificateAuthority = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get certificateAuthorityInput() {
        return this._certificateAuthority;
    }
    // custom_origin_server - computed: false, optional: true, required: false
    _customOriginServer;
    get customOriginServer() {
        return this.getStringAttribute('custom_origin_server');
    }
    set customOriginServer(value) {
        this._customOriginServer = value;
    }
    resetCustomOriginServer() {
        this._customOriginServer = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get customOriginServerInput() {
        return this._customOriginServer;
    }
    // direction - computed: false, optional: true, required: false
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
    // hostname - computed: false, optional: true, required: false
    _hostname = new DataCloudflareCustomHostnameFilterHostnameOutputReference(this, "hostname");
    get hostname() {
        return this._hostname;
    }
    putHostname(value) {
        this._hostname.internalValue = value;
    }
    resetHostname() {
        this._hostname.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hostnameInput() {
        return this._hostname.internalValue;
    }
    // hostname_status - computed: false, optional: true, required: false
    _hostnameStatus;
    get hostnameStatus() {
        return this.getStringAttribute('hostname_status');
    }
    set hostnameStatus(value) {
        this._hostnameStatus = value;
    }
    resetHostnameStatus() {
        this._hostnameStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hostnameStatusInput() {
        return this._hostnameStatus;
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
    // ssl - computed: false, optional: true, required: false
    _ssl;
    get ssl() {
        return this.getNumberAttribute('ssl');
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
    // ssl_status - computed: false, optional: true, required: false
    _sslStatus;
    get sslStatus() {
        return this.getStringAttribute('ssl_status');
    }
    set sslStatus(value) {
        this._sslStatus = value;
    }
    resetSslStatus() {
        this._sslStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sslStatusInput() {
        return this._sslStatus;
    }
    // wildcard - computed: false, optional: true, required: false
    _wildcard;
    get wildcard() {
        return this.getBooleanAttribute('wildcard');
    }
    set wildcard(value) {
        this._wildcard = value;
    }
    resetWildcard() {
        this._wildcard = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get wildcardInput() {
        return this._wildcard;
    }
}
export function dataCloudflareCustomHostnameOwnershipVerificationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareCustomHostnameOwnershipVerificationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareCustomHostnameOwnershipVerificationOutputReference extends cdktf.ComplexObject {
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
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getStringAttribute('value');
    }
}
export function dataCloudflareCustomHostnameOwnershipVerificationHttpToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareCustomHostnameOwnershipVerificationHttpToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference extends cdktf.ComplexObject {
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
    // http_body - computed: true, optional: false, required: false
    get httpBody() {
        return this.getStringAttribute('http_body');
    }
    // http_url - computed: true, optional: false, required: false
    get httpUrl() {
        return this.getStringAttribute('http_url');
    }
}
export function dataCloudflareCustomHostnameSslDcvDelegationRecordsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareCustomHostnameSslDcvDelegationRecordsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference extends cdktf.ComplexObject {
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
    // cname - computed: true, optional: false, required: false
    get cname() {
        return this.getStringAttribute('cname');
    }
    // cname_target - computed: true, optional: false, required: false
    get cnameTarget() {
        return this.getStringAttribute('cname_target');
    }
    // emails - computed: true, optional: false, required: false
    get emails() {
        return this.getListAttribute('emails');
    }
    // http_body - computed: true, optional: false, required: false
    get httpBody() {
        return this.getStringAttribute('http_body');
    }
    // http_url - computed: true, optional: false, required: false
    get httpUrl() {
        return this.getStringAttribute('http_url');
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
    }
    // txt_name - computed: true, optional: false, required: false
    get txtName() {
        return this.getStringAttribute('txt_name');
    }
    // txt_value - computed: true, optional: false, required: false
    get txtValue() {
        return this.getStringAttribute('txt_value');
    }
}
export class DataCloudflareCustomHostnameSslDcvDelegationRecordsList extends cdktf.ComplexList {
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
        return new DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function dataCloudflareCustomHostnameSslSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareCustomHostnameSslSettingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareCustomHostnameSslSettingsOutputReference extends cdktf.ComplexObject {
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
    // ciphers - computed: true, optional: false, required: false
    get ciphers() {
        return this.getListAttribute('ciphers');
    }
    // early_hints - computed: true, optional: false, required: false
    get earlyHints() {
        return this.getStringAttribute('early_hints');
    }
    // http2 - computed: true, optional: false, required: false
    get http2() {
        return this.getStringAttribute('http2');
    }
    // min_tls_version - computed: true, optional: false, required: false
    get minTlsVersion() {
        return this.getStringAttribute('min_tls_version');
    }
    // tls_1_3 - computed: true, optional: false, required: false
    get tls13() {
        return this.getStringAttribute('tls_1_3');
    }
}
export function dataCloudflareCustomHostnameSslValidationErrorsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareCustomHostnameSslValidationErrorsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareCustomHostnameSslValidationErrorsOutputReference extends cdktf.ComplexObject {
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
    // message - computed: true, optional: false, required: false
    get message() {
        return this.getStringAttribute('message');
    }
}
export class DataCloudflareCustomHostnameSslValidationErrorsList extends cdktf.ComplexList {
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
        return new DataCloudflareCustomHostnameSslValidationErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function dataCloudflareCustomHostnameSslValidationRecordsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareCustomHostnameSslValidationRecordsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareCustomHostnameSslValidationRecordsOutputReference extends cdktf.ComplexObject {
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
    // cname - computed: true, optional: false, required: false
    get cname() {
        return this.getStringAttribute('cname');
    }
    // cname_target - computed: true, optional: false, required: false
    get cnameTarget() {
        return this.getStringAttribute('cname_target');
    }
    // emails - computed: true, optional: false, required: false
    get emails() {
        return this.getListAttribute('emails');
    }
    // http_body - computed: true, optional: false, required: false
    get httpBody() {
        return this.getStringAttribute('http_body');
    }
    // http_url - computed: true, optional: false, required: false
    get httpUrl() {
        return this.getStringAttribute('http_url');
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
    }
    // txt_name - computed: true, optional: false, required: false
    get txtName() {
        return this.getStringAttribute('txt_name');
    }
    // txt_value - computed: true, optional: false, required: false
    get txtValue() {
        return this.getStringAttribute('txt_value');
    }
}
export class DataCloudflareCustomHostnameSslValidationRecordsList extends cdktf.ComplexList {
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
        return new DataCloudflareCustomHostnameSslValidationRecordsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function dataCloudflareCustomHostnameSslToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareCustomHostnameSslToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareCustomHostnameSslOutputReference extends cdktf.ComplexObject {
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
    // bundle_method - computed: true, optional: false, required: false
    get bundleMethod() {
        return this.getStringAttribute('bundle_method');
    }
    // certificate_authority - computed: true, optional: false, required: false
    get certificateAuthority() {
        return this.getStringAttribute('certificate_authority');
    }
    // custom_certificate - computed: true, optional: false, required: false
    get customCertificate() {
        return this.getStringAttribute('custom_certificate');
    }
    // custom_csr_id - computed: true, optional: false, required: false
    get customCsrId() {
        return this.getStringAttribute('custom_csr_id');
    }
    // custom_key - computed: true, optional: false, required: false
    get customKey() {
        return this.getStringAttribute('custom_key');
    }
    // dcv_delegation_records - computed: true, optional: false, required: false
    _dcvDelegationRecords = new DataCloudflareCustomHostnameSslDcvDelegationRecordsList(this, "dcv_delegation_records", false);
    get dcvDelegationRecords() {
        return this._dcvDelegationRecords;
    }
    // expires_on - computed: true, optional: false, required: false
    get expiresOn() {
        return this.getStringAttribute('expires_on');
    }
    // hosts - computed: true, optional: false, required: false
    get hosts() {
        return this.getListAttribute('hosts');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // issuer - computed: true, optional: false, required: false
    get issuer() {
        return this.getStringAttribute('issuer');
    }
    // method - computed: true, optional: false, required: false
    get method() {
        return this.getStringAttribute('method');
    }
    // serial_number - computed: true, optional: false, required: false
    get serialNumber() {
        return this.getStringAttribute('serial_number');
    }
    // settings - computed: true, optional: false, required: false
    _settings = new DataCloudflareCustomHostnameSslSettingsOutputReference(this, "settings");
    get settings() {
        return this._settings;
    }
    // signature - computed: true, optional: false, required: false
    get signature() {
        return this.getStringAttribute('signature');
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
    }
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
    }
    // uploaded_on - computed: true, optional: false, required: false
    get uploadedOn() {
        return this.getStringAttribute('uploaded_on');
    }
    // validation_errors - computed: true, optional: false, required: false
    _validationErrors = new DataCloudflareCustomHostnameSslValidationErrorsList(this, "validation_errors", false);
    get validationErrors() {
        return this._validationErrors;
    }
    // validation_records - computed: true, optional: false, required: false
    _validationRecords = new DataCloudflareCustomHostnameSslValidationRecordsList(this, "validation_records", false);
    get validationRecords() {
        return this._validationRecords;
    }
    // wildcard - computed: true, optional: false, required: false
    get wildcard() {
        return this.getBooleanAttribute('wildcard');
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_hostname cloudflare_custom_hostname}
*/
export class DataCloudflareCustomHostname extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_custom_hostname";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareCustomHostname resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareCustomHostname to import
    * @param importFromId The id of the existing DataCloudflareCustomHostname that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_hostname#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareCustomHostname to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_custom_hostname", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_hostname cloudflare_custom_hostname} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareCustomHostnameConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_custom_hostname',
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
        this._customHostnameId = config.customHostnameId;
        this._filter.internalValue = config.filter;
        this._zoneId = config.zoneId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.getStringAttribute('created_at');
    }
    // custom_hostname_id - computed: false, optional: true, required: false
    _customHostnameId;
    get customHostnameId() {
        return this.getStringAttribute('custom_hostname_id');
    }
    set customHostnameId(value) {
        this._customHostnameId = value;
    }
    resetCustomHostnameId() {
        this._customHostnameId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get customHostnameIdInput() {
        return this._customHostnameId;
    }
    // custom_metadata - computed: true, optional: false, required: false
    _customMetadata = new cdktf.StringMap(this, "custom_metadata");
    get customMetadata() {
        return this._customMetadata;
    }
    // custom_origin_server - computed: true, optional: false, required: false
    get customOriginServer() {
        return this.getStringAttribute('custom_origin_server');
    }
    // custom_origin_sni - computed: true, optional: false, required: false
    get customOriginSni() {
        return this.getStringAttribute('custom_origin_sni');
    }
    // filter - computed: false, optional: true, required: false
    _filter = new DataCloudflareCustomHostnameFilterOutputReference(this, "filter");
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
    // hostname - computed: true, optional: false, required: false
    get hostname() {
        return this.getStringAttribute('hostname');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // ownership_verification - computed: true, optional: false, required: false
    _ownershipVerification = new DataCloudflareCustomHostnameOwnershipVerificationOutputReference(this, "ownership_verification");
    get ownershipVerification() {
        return this._ownershipVerification;
    }
    // ownership_verification_http - computed: true, optional: false, required: false
    _ownershipVerificationHttp = new DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference(this, "ownership_verification_http");
    get ownershipVerificationHttp() {
        return this._ownershipVerificationHttp;
    }
    // ssl - computed: true, optional: false, required: false
    _ssl = new DataCloudflareCustomHostnameSslOutputReference(this, "ssl");
    get ssl() {
        return this._ssl;
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
    }
    // verification_errors - computed: true, optional: false, required: false
    get verificationErrors() {
        return this.getListAttribute('verification_errors');
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
            custom_hostname_id: cdktf.stringToTerraform(this._customHostnameId),
            filter: dataCloudflareCustomHostnameFilterToTerraform(this._filter.internalValue),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            custom_hostname_id: {
                value: cdktf.stringToHclTerraform(this._customHostnameId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            filter: {
                value: dataCloudflareCustomHostnameFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareCustomHostnameFilter",
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
