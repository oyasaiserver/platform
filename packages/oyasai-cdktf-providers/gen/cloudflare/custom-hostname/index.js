// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_hostname
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function customHostnameOwnershipVerificationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function customHostnameOwnershipVerificationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class CustomHostnameOwnershipVerificationOutputReference extends cdktf.ComplexObject {
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
export function customHostnameOwnershipVerificationHttpToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function customHostnameOwnershipVerificationHttpToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class CustomHostnameOwnershipVerificationHttpOutputReference extends cdktf.ComplexObject {
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
export function customHostnameSslCustomCertBundleToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        custom_certificate: cdktf.stringToTerraform(struct.customCertificate),
        custom_key: cdktf.stringToTerraform(struct.customKey),
    };
}
export function customHostnameSslCustomCertBundleToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        custom_certificate: {
            value: cdktf.stringToHclTerraform(struct.customCertificate),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        custom_key: {
            value: cdktf.stringToHclTerraform(struct.customKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class CustomHostnameSslCustomCertBundleOutputReference extends cdktf.ComplexObject {
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
        if (this._customCertificate !== undefined) {
            hasAnyValues = true;
            internalValueResult.customCertificate = this._customCertificate;
        }
        if (this._customKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.customKey = this._customKey;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._customCertificate = undefined;
            this._customKey = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._customCertificate = value.customCertificate;
            this._customKey = value.customKey;
        }
    }
    // custom_certificate - computed: false, optional: false, required: true
    _customCertificate;
    get customCertificate() {
        return this.getStringAttribute('custom_certificate');
    }
    set customCertificate(value) {
        this._customCertificate = value;
    }
    // Temporarily expose input value. Use with caution.
    get customCertificateInput() {
        return this._customCertificate;
    }
    // custom_key - computed: false, optional: false, required: true
    _customKey;
    get customKey() {
        return this.getStringAttribute('custom_key');
    }
    set customKey(value) {
        this._customKey = value;
    }
    // Temporarily expose input value. Use with caution.
    get customKeyInput() {
        return this._customKey;
    }
}
export class CustomHostnameSslCustomCertBundleList extends cdktf.ComplexList {
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
        return new CustomHostnameSslCustomCertBundleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function customHostnameSslSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        ciphers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.ciphers),
        early_hints: cdktf.stringToTerraform(struct.earlyHints),
        http2: cdktf.stringToTerraform(struct.http2),
        min_tls_version: cdktf.stringToTerraform(struct.minTlsVersion),
        tls_1_3: cdktf.stringToTerraform(struct.tls13),
    };
}
export function customHostnameSslSettingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        ciphers: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.ciphers),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        early_hints: {
            value: cdktf.stringToHclTerraform(struct.earlyHints),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        http2: {
            value: cdktf.stringToHclTerraform(struct.http2),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        min_tls_version: {
            value: cdktf.stringToHclTerraform(struct.minTlsVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tls_1_3: {
            value: cdktf.stringToHclTerraform(struct.tls13),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class CustomHostnameSslSettingsOutputReference extends cdktf.ComplexObject {
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
        if (this._ciphers !== undefined) {
            hasAnyValues = true;
            internalValueResult.ciphers = this._ciphers;
        }
        if (this._earlyHints !== undefined) {
            hasAnyValues = true;
            internalValueResult.earlyHints = this._earlyHints;
        }
        if (this._http2 !== undefined) {
            hasAnyValues = true;
            internalValueResult.http2 = this._http2;
        }
        if (this._minTlsVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.minTlsVersion = this._minTlsVersion;
        }
        if (this._tls13 !== undefined) {
            hasAnyValues = true;
            internalValueResult.tls13 = this._tls13;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ciphers = undefined;
            this._earlyHints = undefined;
            this._http2 = undefined;
            this._minTlsVersion = undefined;
            this._tls13 = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ciphers = value.ciphers;
            this._earlyHints = value.earlyHints;
            this._http2 = value.http2;
            this._minTlsVersion = value.minTlsVersion;
            this._tls13 = value.tls13;
        }
    }
    // ciphers - computed: false, optional: true, required: false
    _ciphers;
    get ciphers() {
        return this.getListAttribute('ciphers');
    }
    set ciphers(value) {
        this._ciphers = value;
    }
    resetCiphers() {
        this._ciphers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ciphersInput() {
        return this._ciphers;
    }
    // early_hints - computed: false, optional: true, required: false
    _earlyHints;
    get earlyHints() {
        return this.getStringAttribute('early_hints');
    }
    set earlyHints(value) {
        this._earlyHints = value;
    }
    resetEarlyHints() {
        this._earlyHints = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get earlyHintsInput() {
        return this._earlyHints;
    }
    // http2 - computed: false, optional: true, required: false
    _http2;
    get http2() {
        return this.getStringAttribute('http2');
    }
    set http2(value) {
        this._http2 = value;
    }
    resetHttp2() {
        this._http2 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get http2Input() {
        return this._http2;
    }
    // min_tls_version - computed: false, optional: true, required: false
    _minTlsVersion;
    get minTlsVersion() {
        return this.getStringAttribute('min_tls_version');
    }
    set minTlsVersion(value) {
        this._minTlsVersion = value;
    }
    resetMinTlsVersion() {
        this._minTlsVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get minTlsVersionInput() {
        return this._minTlsVersion;
    }
    // tls_1_3 - computed: false, optional: true, required: false
    _tls13;
    get tls13() {
        return this.getStringAttribute('tls_1_3');
    }
    set tls13(value) {
        this._tls13 = value;
    }
    resetTls13() {
        this._tls13 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tls13Input() {
        return this._tls13;
    }
}
export function customHostnameSslToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        bundle_method: cdktf.stringToTerraform(struct.bundleMethod),
        certificate_authority: cdktf.stringToTerraform(struct.certificateAuthority),
        cloudflare_branding: cdktf.booleanToTerraform(struct.cloudflareBranding),
        custom_cert_bundle: cdktf.listMapper(customHostnameSslCustomCertBundleToTerraform, false)(struct.customCertBundle),
        custom_certificate: cdktf.stringToTerraform(struct.customCertificate),
        custom_csr_id: cdktf.stringToTerraform(struct.customCsrId),
        custom_key: cdktf.stringToTerraform(struct.customKey),
        method: cdktf.stringToTerraform(struct.method),
        settings: customHostnameSslSettingsToTerraform(struct.settings),
        type: cdktf.stringToTerraform(struct.type),
        wildcard: cdktf.booleanToTerraform(struct.wildcard),
    };
}
export function customHostnameSslToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        bundle_method: {
            value: cdktf.stringToHclTerraform(struct.bundleMethod),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        certificate_authority: {
            value: cdktf.stringToHclTerraform(struct.certificateAuthority),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cloudflare_branding: {
            value: cdktf.booleanToHclTerraform(struct.cloudflareBranding),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        custom_cert_bundle: {
            value: cdktf.listMapperHcl(customHostnameSslCustomCertBundleToHclTerraform, false)(struct.customCertBundle),
            isBlock: true,
            type: "list",
            storageClassType: "CustomHostnameSslCustomCertBundleList",
        },
        custom_certificate: {
            value: cdktf.stringToHclTerraform(struct.customCertificate),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        custom_csr_id: {
            value: cdktf.stringToHclTerraform(struct.customCsrId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        custom_key: {
            value: cdktf.stringToHclTerraform(struct.customKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        method: {
            value: cdktf.stringToHclTerraform(struct.method),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        settings: {
            value: customHostnameSslSettingsToHclTerraform(struct.settings),
            isBlock: true,
            type: "struct",
            storageClassType: "CustomHostnameSslSettings",
        },
        type: {
            value: cdktf.stringToHclTerraform(struct.type),
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
export class CustomHostnameSslOutputReference extends cdktf.ComplexObject {
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
        if (this._bundleMethod !== undefined) {
            hasAnyValues = true;
            internalValueResult.bundleMethod = this._bundleMethod;
        }
        if (this._certificateAuthority !== undefined) {
            hasAnyValues = true;
            internalValueResult.certificateAuthority = this._certificateAuthority;
        }
        if (this._cloudflareBranding !== undefined) {
            hasAnyValues = true;
            internalValueResult.cloudflareBranding = this._cloudflareBranding;
        }
        if (this._customCertBundle?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customCertBundle = this._customCertBundle?.internalValue;
        }
        if (this._customCertificate !== undefined) {
            hasAnyValues = true;
            internalValueResult.customCertificate = this._customCertificate;
        }
        if (this._customCsrId !== undefined) {
            hasAnyValues = true;
            internalValueResult.customCsrId = this._customCsrId;
        }
        if (this._customKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.customKey = this._customKey;
        }
        if (this._method !== undefined) {
            hasAnyValues = true;
            internalValueResult.method = this._method;
        }
        if (this._settings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.settings = this._settings?.internalValue;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
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
            this._bundleMethod = undefined;
            this._certificateAuthority = undefined;
            this._cloudflareBranding = undefined;
            this._customCertBundle.internalValue = undefined;
            this._customCertificate = undefined;
            this._customCsrId = undefined;
            this._customKey = undefined;
            this._method = undefined;
            this._settings.internalValue = undefined;
            this._type = undefined;
            this._wildcard = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bundleMethod = value.bundleMethod;
            this._certificateAuthority = value.certificateAuthority;
            this._cloudflareBranding = value.cloudflareBranding;
            this._customCertBundle.internalValue = value.customCertBundle;
            this._customCertificate = value.customCertificate;
            this._customCsrId = value.customCsrId;
            this._customKey = value.customKey;
            this._method = value.method;
            this._settings.internalValue = value.settings;
            this._type = value.type;
            this._wildcard = value.wildcard;
        }
    }
    // bundle_method - computed: true, optional: true, required: false
    _bundleMethod;
    get bundleMethod() {
        return this.getStringAttribute('bundle_method');
    }
    set bundleMethod(value) {
        this._bundleMethod = value;
    }
    resetBundleMethod() {
        this._bundleMethod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bundleMethodInput() {
        return this._bundleMethod;
    }
    // certificate_authority - computed: true, optional: true, required: false
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
    // cloudflare_branding - computed: false, optional: true, required: false
    _cloudflareBranding;
    get cloudflareBranding() {
        return this.getBooleanAttribute('cloudflare_branding');
    }
    set cloudflareBranding(value) {
        this._cloudflareBranding = value;
    }
    resetCloudflareBranding() {
        this._cloudflareBranding = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cloudflareBrandingInput() {
        return this._cloudflareBranding;
    }
    // custom_cert_bundle - computed: false, optional: true, required: false
    _customCertBundle = new CustomHostnameSslCustomCertBundleList(this, "custom_cert_bundle", false);
    get customCertBundle() {
        return this._customCertBundle;
    }
    putCustomCertBundle(value) {
        this._customCertBundle.internalValue = value;
    }
    resetCustomCertBundle() {
        this._customCertBundle.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get customCertBundleInput() {
        return this._customCertBundle.internalValue;
    }
    // custom_certificate - computed: false, optional: true, required: false
    _customCertificate;
    get customCertificate() {
        return this.getStringAttribute('custom_certificate');
    }
    set customCertificate(value) {
        this._customCertificate = value;
    }
    resetCustomCertificate() {
        this._customCertificate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get customCertificateInput() {
        return this._customCertificate;
    }
    // custom_csr_id - computed: false, optional: true, required: false
    _customCsrId;
    get customCsrId() {
        return this.getStringAttribute('custom_csr_id');
    }
    set customCsrId(value) {
        this._customCsrId = value;
    }
    resetCustomCsrId() {
        this._customCsrId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get customCsrIdInput() {
        return this._customCsrId;
    }
    // custom_key - computed: false, optional: true, required: false
    _customKey;
    get customKey() {
        return this.getStringAttribute('custom_key');
    }
    set customKey(value) {
        this._customKey = value;
    }
    resetCustomKey() {
        this._customKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get customKeyInput() {
        return this._customKey;
    }
    // method - computed: false, optional: true, required: false
    _method;
    get method() {
        return this.getStringAttribute('method');
    }
    set method(value) {
        this._method = value;
    }
    resetMethod() {
        this._method = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method;
    }
    // settings - computed: false, optional: true, required: false
    _settings = new CustomHostnameSslSettingsOutputReference(this, "settings");
    get settings() {
        return this._settings;
    }
    putSettings(value) {
        this._settings.internalValue = value;
    }
    resetSettings() {
        this._settings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get settingsInput() {
        return this._settings.internalValue;
    }
    // type - computed: false, optional: true, required: false
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
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_hostname cloudflare_custom_hostname}
*/
export class CustomHostname extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_custom_hostname";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a CustomHostname resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CustomHostname to import
    * @param importFromId The id of the existing CustomHostname that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_hostname#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CustomHostname to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_custom_hostname", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_hostname cloudflare_custom_hostname} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CustomHostnameConfig
    */
    constructor(scope, id, config) {
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
        this._customMetadata = config.customMetadata;
        this._customOriginServer = config.customOriginServer;
        this._customOriginSni = config.customOriginSni;
        this._hostname = config.hostname;
        this._ssl.internalValue = config.ssl;
        this._zoneId = config.zoneId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.getStringAttribute('created_at');
    }
    // custom_metadata - computed: false, optional: true, required: false
    _customMetadata;
    get customMetadata() {
        return this.getStringMapAttribute('custom_metadata');
    }
    set customMetadata(value) {
        this._customMetadata = value;
    }
    resetCustomMetadata() {
        this._customMetadata = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get customMetadataInput() {
        return this._customMetadata;
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
    // custom_origin_sni - computed: false, optional: true, required: false
    _customOriginSni;
    get customOriginSni() {
        return this.getStringAttribute('custom_origin_sni');
    }
    set customOriginSni(value) {
        this._customOriginSni = value;
    }
    resetCustomOriginSni() {
        this._customOriginSni = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get customOriginSniInput() {
        return this._customOriginSni;
    }
    // hostname - computed: false, optional: false, required: true
    _hostname;
    get hostname() {
        return this.getStringAttribute('hostname');
    }
    set hostname(value) {
        this._hostname = value;
    }
    // Temporarily expose input value. Use with caution.
    get hostnameInput() {
        return this._hostname;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // ownership_verification - computed: true, optional: false, required: false
    _ownershipVerification = new CustomHostnameOwnershipVerificationOutputReference(this, "ownership_verification");
    get ownershipVerification() {
        return this._ownershipVerification;
    }
    // ownership_verification_http - computed: true, optional: false, required: false
    _ownershipVerificationHttp = new CustomHostnameOwnershipVerificationHttpOutputReference(this, "ownership_verification_http");
    get ownershipVerificationHttp() {
        return this._ownershipVerificationHttp;
    }
    // ssl - computed: false, optional: true, required: false
    _ssl = new CustomHostnameSslOutputReference(this, "ssl");
    get ssl() {
        return this._ssl;
    }
    putSsl(value) {
        this._ssl.internalValue = value;
    }
    resetSsl() {
        this._ssl.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sslInput() {
        return this._ssl.internalValue;
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
            custom_metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._customMetadata),
            custom_origin_server: cdktf.stringToTerraform(this._customOriginServer),
            custom_origin_sni: cdktf.stringToTerraform(this._customOriginSni),
            hostname: cdktf.stringToTerraform(this._hostname),
            ssl: customHostnameSslToTerraform(this._ssl.internalValue),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            custom_metadata: {
                value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._customMetadata),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            custom_origin_server: {
                value: cdktf.stringToHclTerraform(this._customOriginServer),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            custom_origin_sni: {
                value: cdktf.stringToHclTerraform(this._customOriginSni),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            hostname: {
                value: cdktf.stringToHclTerraform(this._hostname),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ssl: {
                value: customHostnameSslToHclTerraform(this._ssl.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CustomHostnameSsl",
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
