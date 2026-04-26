// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_settings
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function zeroTrustGatewaySettingsSettingsActivityLogToTerraform(struct) {
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
export function zeroTrustGatewaySettingsSettingsActivityLogToHclTerraform(struct) {
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
export class ZeroTrustGatewaySettingsSettingsActivityLogOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        include_context: cdktf.booleanToTerraform(struct.includeContext),
        msg: cdktf.stringToTerraform(struct.msg),
        support_url: cdktf.stringToTerraform(struct.supportUrl),
    };
}
export function zeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsToHclTerraform(struct) {
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
        include_context: {
            value: cdktf.booleanToHclTerraform(struct.includeContext),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        msg: {
            value: cdktf.stringToHclTerraform(struct.msg),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        support_url: {
            value: cdktf.stringToHclTerraform(struct.supportUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference extends cdktf.ComplexObject {
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
        if (this._includeContext !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeContext = this._includeContext;
        }
        if (this._msg !== undefined) {
            hasAnyValues = true;
            internalValueResult.msg = this._msg;
        }
        if (this._supportUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.supportUrl = this._supportUrl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
            this._includeContext = undefined;
            this._msg = undefined;
            this._supportUrl = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
            this._includeContext = value.includeContext;
            this._msg = value.msg;
            this._supportUrl = value.supportUrl;
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
    // include_context - computed: true, optional: true, required: false
    _includeContext;
    get includeContext() {
        return this.getBooleanAttribute('include_context');
    }
    set includeContext(value) {
        this._includeContext = value;
    }
    resetIncludeContext() {
        this._includeContext = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get includeContextInput() {
        return this._includeContext;
    }
    // msg - computed: true, optional: true, required: false
    _msg;
    get msg() {
        return this.getStringAttribute('msg');
    }
    set msg(value) {
        this._msg = value;
    }
    resetMsg() {
        this._msg = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get msgInput() {
        return this._msg;
    }
    // support_url - computed: true, optional: true, required: false
    _supportUrl;
    get supportUrl() {
        return this.getStringAttribute('support_url');
    }
    set supportUrl(value) {
        this._supportUrl = value;
    }
    resetSupportUrl() {
        this._supportUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get supportUrlInput() {
        return this._supportUrl;
    }
}
export function zeroTrustGatewaySettingsSettingsAntivirusToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled_download_phase: cdktf.booleanToTerraform(struct.enabledDownloadPhase),
        enabled_upload_phase: cdktf.booleanToTerraform(struct.enabledUploadPhase),
        fail_closed: cdktf.booleanToTerraform(struct.failClosed),
        notification_settings: zeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsToTerraform(struct.notificationSettings),
    };
}
export function zeroTrustGatewaySettingsSettingsAntivirusToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        enabled_download_phase: {
            value: cdktf.booleanToHclTerraform(struct.enabledDownloadPhase),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        enabled_upload_phase: {
            value: cdktf.booleanToHclTerraform(struct.enabledUploadPhase),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        fail_closed: {
            value: cdktf.booleanToHclTerraform(struct.failClosed),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        notification_settings: {
            value: zeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsToHclTerraform(struct.notificationSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettings",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustGatewaySettingsSettingsAntivirusOutputReference extends cdktf.ComplexObject {
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
        if (this._enabledDownloadPhase !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabledDownloadPhase = this._enabledDownloadPhase;
        }
        if (this._enabledUploadPhase !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabledUploadPhase = this._enabledUploadPhase;
        }
        if (this._failClosed !== undefined) {
            hasAnyValues = true;
            internalValueResult.failClosed = this._failClosed;
        }
        if (this._notificationSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.notificationSettings = this._notificationSettings?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabledDownloadPhase = undefined;
            this._enabledUploadPhase = undefined;
            this._failClosed = undefined;
            this._notificationSettings.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabledDownloadPhase = value.enabledDownloadPhase;
            this._enabledUploadPhase = value.enabledUploadPhase;
            this._failClosed = value.failClosed;
            this._notificationSettings.internalValue = value.notificationSettings;
        }
    }
    // enabled_download_phase - computed: true, optional: true, required: false
    _enabledDownloadPhase;
    get enabledDownloadPhase() {
        return this.getBooleanAttribute('enabled_download_phase');
    }
    set enabledDownloadPhase(value) {
        this._enabledDownloadPhase = value;
    }
    resetEnabledDownloadPhase() {
        this._enabledDownloadPhase = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enabledDownloadPhaseInput() {
        return this._enabledDownloadPhase;
    }
    // enabled_upload_phase - computed: true, optional: true, required: false
    _enabledUploadPhase;
    get enabledUploadPhase() {
        return this.getBooleanAttribute('enabled_upload_phase');
    }
    set enabledUploadPhase(value) {
        this._enabledUploadPhase = value;
    }
    resetEnabledUploadPhase() {
        this._enabledUploadPhase = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enabledUploadPhaseInput() {
        return this._enabledUploadPhase;
    }
    // fail_closed - computed: true, optional: true, required: false
    _failClosed;
    get failClosed() {
        return this.getBooleanAttribute('fail_closed');
    }
    set failClosed(value) {
        this._failClosed = value;
    }
    resetFailClosed() {
        this._failClosed = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get failClosedInput() {
        return this._failClosed;
    }
    // notification_settings - computed: true, optional: true, required: false
    _notificationSettings = new ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference(this, "notification_settings");
    get notificationSettings() {
        return this._notificationSettings;
    }
    putNotificationSettings(value) {
        this._notificationSettings.internalValue = value;
    }
    resetNotificationSettings() {
        this._notificationSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get notificationSettingsInput() {
        return this._notificationSettings.internalValue;
    }
}
export function zeroTrustGatewaySettingsSettingsBlockPageToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        background_color: cdktf.stringToTerraform(struct.backgroundColor),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        footer_text: cdktf.stringToTerraform(struct.footerText),
        header_text: cdktf.stringToTerraform(struct.headerText),
        include_context: cdktf.booleanToTerraform(struct.includeContext),
        logo_path: cdktf.stringToTerraform(struct.logoPath),
        mailto_address: cdktf.stringToTerraform(struct.mailtoAddress),
        mailto_subject: cdktf.stringToTerraform(struct.mailtoSubject),
        mode: cdktf.stringToTerraform(struct.mode),
        name: cdktf.stringToTerraform(struct.name),
        read_only: cdktf.booleanToTerraform(struct.readOnly),
        source_account: cdktf.stringToTerraform(struct.sourceAccount),
        suppress_footer: cdktf.booleanToTerraform(struct.suppressFooter),
        target_uri: cdktf.stringToTerraform(struct.targetUri),
        version: cdktf.numberToTerraform(struct.version),
    };
}
export function zeroTrustGatewaySettingsSettingsBlockPageToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        background_color: {
            value: cdktf.stringToHclTerraform(struct.backgroundColor),
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
        footer_text: {
            value: cdktf.stringToHclTerraform(struct.footerText),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        header_text: {
            value: cdktf.stringToHclTerraform(struct.headerText),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        include_context: {
            value: cdktf.booleanToHclTerraform(struct.includeContext),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        logo_path: {
            value: cdktf.stringToHclTerraform(struct.logoPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mailto_address: {
            value: cdktf.stringToHclTerraform(struct.mailtoAddress),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mailto_subject: {
            value: cdktf.stringToHclTerraform(struct.mailtoSubject),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mode: {
            value: cdktf.stringToHclTerraform(struct.mode),
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
        read_only: {
            value: cdktf.booleanToHclTerraform(struct.readOnly),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        source_account: {
            value: cdktf.stringToHclTerraform(struct.sourceAccount),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        suppress_footer: {
            value: cdktf.booleanToHclTerraform(struct.suppressFooter),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        target_uri: {
            value: cdktf.stringToHclTerraform(struct.targetUri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        version: {
            value: cdktf.numberToHclTerraform(struct.version),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustGatewaySettingsSettingsBlockPageOutputReference extends cdktf.ComplexObject {
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
        if (this._backgroundColor !== undefined) {
            hasAnyValues = true;
            internalValueResult.backgroundColor = this._backgroundColor;
        }
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._footerText !== undefined) {
            hasAnyValues = true;
            internalValueResult.footerText = this._footerText;
        }
        if (this._headerText !== undefined) {
            hasAnyValues = true;
            internalValueResult.headerText = this._headerText;
        }
        if (this._includeContext !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeContext = this._includeContext;
        }
        if (this._logoPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.logoPath = this._logoPath;
        }
        if (this._mailtoAddress !== undefined) {
            hasAnyValues = true;
            internalValueResult.mailtoAddress = this._mailtoAddress;
        }
        if (this._mailtoSubject !== undefined) {
            hasAnyValues = true;
            internalValueResult.mailtoSubject = this._mailtoSubject;
        }
        if (this._mode !== undefined) {
            hasAnyValues = true;
            internalValueResult.mode = this._mode;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._readOnly !== undefined) {
            hasAnyValues = true;
            internalValueResult.readOnly = this._readOnly;
        }
        if (this._sourceAccount !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceAccount = this._sourceAccount;
        }
        if (this._suppressFooter !== undefined) {
            hasAnyValues = true;
            internalValueResult.suppressFooter = this._suppressFooter;
        }
        if (this._targetUri !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetUri = this._targetUri;
        }
        if (this._version !== undefined) {
            hasAnyValues = true;
            internalValueResult.version = this._version;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._backgroundColor = undefined;
            this._enabled = undefined;
            this._footerText = undefined;
            this._headerText = undefined;
            this._includeContext = undefined;
            this._logoPath = undefined;
            this._mailtoAddress = undefined;
            this._mailtoSubject = undefined;
            this._mode = undefined;
            this._name = undefined;
            this._readOnly = undefined;
            this._sourceAccount = undefined;
            this._suppressFooter = undefined;
            this._targetUri = undefined;
            this._version = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._backgroundColor = value.backgroundColor;
            this._enabled = value.enabled;
            this._footerText = value.footerText;
            this._headerText = value.headerText;
            this._includeContext = value.includeContext;
            this._logoPath = value.logoPath;
            this._mailtoAddress = value.mailtoAddress;
            this._mailtoSubject = value.mailtoSubject;
            this._mode = value.mode;
            this._name = value.name;
            this._readOnly = value.readOnly;
            this._sourceAccount = value.sourceAccount;
            this._suppressFooter = value.suppressFooter;
            this._targetUri = value.targetUri;
            this._version = value.version;
        }
    }
    // background_color - computed: false, optional: true, required: false
    _backgroundColor;
    get backgroundColor() {
        return this.getStringAttribute('background_color');
    }
    set backgroundColor(value) {
        this._backgroundColor = value;
    }
    resetBackgroundColor() {
        this._backgroundColor = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get backgroundColorInput() {
        return this._backgroundColor;
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
    // footer_text - computed: false, optional: true, required: false
    _footerText;
    get footerText() {
        return this.getStringAttribute('footer_text');
    }
    set footerText(value) {
        this._footerText = value;
    }
    resetFooterText() {
        this._footerText = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get footerTextInput() {
        return this._footerText;
    }
    // header_text - computed: false, optional: true, required: false
    _headerText;
    get headerText() {
        return this.getStringAttribute('header_text');
    }
    set headerText(value) {
        this._headerText = value;
    }
    resetHeaderText() {
        this._headerText = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get headerTextInput() {
        return this._headerText;
    }
    // include_context - computed: false, optional: true, required: false
    _includeContext;
    get includeContext() {
        return this.getBooleanAttribute('include_context');
    }
    set includeContext(value) {
        this._includeContext = value;
    }
    resetIncludeContext() {
        this._includeContext = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get includeContextInput() {
        return this._includeContext;
    }
    // logo_path - computed: false, optional: true, required: false
    _logoPath;
    get logoPath() {
        return this.getStringAttribute('logo_path');
    }
    set logoPath(value) {
        this._logoPath = value;
    }
    resetLogoPath() {
        this._logoPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get logoPathInput() {
        return this._logoPath;
    }
    // mailto_address - computed: false, optional: true, required: false
    _mailtoAddress;
    get mailtoAddress() {
        return this.getStringAttribute('mailto_address');
    }
    set mailtoAddress(value) {
        this._mailtoAddress = value;
    }
    resetMailtoAddress() {
        this._mailtoAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get mailtoAddressInput() {
        return this._mailtoAddress;
    }
    // mailto_subject - computed: false, optional: true, required: false
    _mailtoSubject;
    get mailtoSubject() {
        return this.getStringAttribute('mailto_subject');
    }
    set mailtoSubject(value) {
        this._mailtoSubject = value;
    }
    resetMailtoSubject() {
        this._mailtoSubject = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get mailtoSubjectInput() {
        return this._mailtoSubject;
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
    // read_only - computed: true, optional: true, required: false
    _readOnly;
    get readOnly() {
        return this.getBooleanAttribute('read_only');
    }
    set readOnly(value) {
        this._readOnly = value;
    }
    resetReadOnly() {
        this._readOnly = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get readOnlyInput() {
        return this._readOnly;
    }
    // source_account - computed: true, optional: true, required: false
    _sourceAccount;
    get sourceAccount() {
        return this.getStringAttribute('source_account');
    }
    set sourceAccount(value) {
        this._sourceAccount = value;
    }
    resetSourceAccount() {
        this._sourceAccount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sourceAccountInput() {
        return this._sourceAccount;
    }
    // suppress_footer - computed: false, optional: true, required: false
    _suppressFooter;
    get suppressFooter() {
        return this.getBooleanAttribute('suppress_footer');
    }
    set suppressFooter(value) {
        this._suppressFooter = value;
    }
    resetSuppressFooter() {
        this._suppressFooter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get suppressFooterInput() {
        return this._suppressFooter;
    }
    // target_uri - computed: false, optional: true, required: false
    _targetUri;
    get targetUri() {
        return this.getStringAttribute('target_uri');
    }
    set targetUri(value) {
        this._targetUri = value;
    }
    resetTargetUri() {
        this._targetUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get targetUriInput() {
        return this._targetUri;
    }
    // version - computed: true, optional: true, required: false
    _version;
    get version() {
        return this.getNumberAttribute('version');
    }
    set version(value) {
        this._version = value;
    }
    resetVersion() {
        this._version = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get versionInput() {
        return this._version;
    }
}
export function zeroTrustGatewaySettingsSettingsBodyScanningToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        inspection_mode: cdktf.stringToTerraform(struct.inspectionMode),
    };
}
export function zeroTrustGatewaySettingsSettingsBodyScanningToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        inspection_mode: {
            value: cdktf.stringToHclTerraform(struct.inspectionMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference extends cdktf.ComplexObject {
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
        if (this._inspectionMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.inspectionMode = this._inspectionMode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._inspectionMode = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._inspectionMode = value.inspectionMode;
        }
    }
    // inspection_mode - computed: false, optional: true, required: false
    _inspectionMode;
    get inspectionMode() {
        return this.getStringAttribute('inspection_mode');
    }
    set inspectionMode(value) {
        this._inspectionMode = value;
    }
    resetInspectionMode() {
        this._inspectionMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get inspectionModeInput() {
        return this._inspectionMode;
    }
}
export function zeroTrustGatewaySettingsSettingsBrowserIsolationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        non_identity_enabled: cdktf.booleanToTerraform(struct.nonIdentityEnabled),
        url_browser_isolation_enabled: cdktf.booleanToTerraform(struct.urlBrowserIsolationEnabled),
    };
}
export function zeroTrustGatewaySettingsSettingsBrowserIsolationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        non_identity_enabled: {
            value: cdktf.booleanToHclTerraform(struct.nonIdentityEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        url_browser_isolation_enabled: {
            value: cdktf.booleanToHclTerraform(struct.urlBrowserIsolationEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference extends cdktf.ComplexObject {
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
        if (this._nonIdentityEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.nonIdentityEnabled = this._nonIdentityEnabled;
        }
        if (this._urlBrowserIsolationEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.urlBrowserIsolationEnabled = this._urlBrowserIsolationEnabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._nonIdentityEnabled = undefined;
            this._urlBrowserIsolationEnabled = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._nonIdentityEnabled = value.nonIdentityEnabled;
            this._urlBrowserIsolationEnabled = value.urlBrowserIsolationEnabled;
        }
    }
    // non_identity_enabled - computed: false, optional: true, required: false
    _nonIdentityEnabled;
    get nonIdentityEnabled() {
        return this.getBooleanAttribute('non_identity_enabled');
    }
    set nonIdentityEnabled(value) {
        this._nonIdentityEnabled = value;
    }
    resetNonIdentityEnabled() {
        this._nonIdentityEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get nonIdentityEnabledInput() {
        return this._nonIdentityEnabled;
    }
    // url_browser_isolation_enabled - computed: false, optional: true, required: false
    _urlBrowserIsolationEnabled;
    get urlBrowserIsolationEnabled() {
        return this.getBooleanAttribute('url_browser_isolation_enabled');
    }
    set urlBrowserIsolationEnabled(value) {
        this._urlBrowserIsolationEnabled = value;
    }
    resetUrlBrowserIsolationEnabled() {
        this._urlBrowserIsolationEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get urlBrowserIsolationEnabledInput() {
        return this._urlBrowserIsolationEnabled;
    }
}
export function zeroTrustGatewaySettingsSettingsCertificateToTerraform(struct) {
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
export function zeroTrustGatewaySettingsSettingsCertificateToHclTerraform(struct) {
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
export class ZeroTrustGatewaySettingsSettingsCertificateOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustGatewaySettingsSettingsCustomCertificateToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        binding_status: cdktf.stringToTerraform(struct.bindingStatus),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        id: cdktf.stringToTerraform(struct.id),
        updated_at: cdktf.stringToTerraform(struct.updatedAt),
    };
}
export function zeroTrustGatewaySettingsSettingsCustomCertificateToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        binding_status: {
            value: cdktf.stringToHclTerraform(struct.bindingStatus),
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
        updated_at: {
            value: cdktf.stringToHclTerraform(struct.updatedAt),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference extends cdktf.ComplexObject {
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
        if (this._bindingStatus !== undefined) {
            hasAnyValues = true;
            internalValueResult.bindingStatus = this._bindingStatus;
        }
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._updatedAt !== undefined) {
            hasAnyValues = true;
            internalValueResult.updatedAt = this._updatedAt;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bindingStatus = undefined;
            this._enabled = undefined;
            this._id = undefined;
            this._updatedAt = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bindingStatus = value.bindingStatus;
            this._enabled = value.enabled;
            this._id = value.id;
            this._updatedAt = value.updatedAt;
        }
    }
    // binding_status - computed: true, optional: true, required: false
    _bindingStatus;
    get bindingStatus() {
        return this.getStringAttribute('binding_status');
    }
    set bindingStatus(value) {
        this._bindingStatus = value;
    }
    resetBindingStatus() {
        this._bindingStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bindingStatusInput() {
        return this._bindingStatus;
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
    // updated_at - computed: true, optional: true, required: false
    _updatedAt;
    get updatedAt() {
        return this.getStringAttribute('updated_at');
    }
    set updatedAt(value) {
        this._updatedAt = value;
    }
    resetUpdatedAt() {
        this._updatedAt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get updatedAtInput() {
        return this._updatedAt;
    }
}
export function zeroTrustGatewaySettingsSettingsExtendedEmailMatchingToTerraform(struct) {
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
export function zeroTrustGatewaySettingsSettingsExtendedEmailMatchingToHclTerraform(struct) {
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
export class ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference extends cdktf.ComplexObject {
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
    // read_only - computed: true, optional: false, required: false
    get readOnly() {
        return this.getBooleanAttribute('read_only');
    }
    // source_account - computed: true, optional: false, required: false
    get sourceAccount() {
        return this.getStringAttribute('source_account');
    }
    // version - computed: true, optional: false, required: false
    get version() {
        return this.getNumberAttribute('version');
    }
}
export function zeroTrustGatewaySettingsSettingsFipsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        tls: cdktf.booleanToTerraform(struct.tls),
    };
}
export function zeroTrustGatewaySettingsSettingsFipsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        tls: {
            value: cdktf.booleanToHclTerraform(struct.tls),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustGatewaySettingsSettingsFipsOutputReference extends cdktf.ComplexObject {
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
        if (this._tls !== undefined) {
            hasAnyValues = true;
            internalValueResult.tls = this._tls;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._tls = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._tls = value.tls;
        }
    }
    // tls - computed: false, optional: true, required: false
    _tls;
    get tls() {
        return this.getBooleanAttribute('tls');
    }
    set tls(value) {
        this._tls = value;
    }
    resetTls() {
        this._tls = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tlsInput() {
        return this._tls;
    }
}
export function zeroTrustGatewaySettingsSettingsHostSelectorToTerraform(struct) {
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
export function zeroTrustGatewaySettingsSettingsHostSelectorToHclTerraform(struct) {
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
export class ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustGatewaySettingsSettingsInspectionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        mode: cdktf.stringToTerraform(struct.mode),
    };
}
export function zeroTrustGatewaySettingsSettingsInspectionToHclTerraform(struct) {
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
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustGatewaySettingsSettingsInspectionOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._mode = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._mode = value.mode;
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
}
export function zeroTrustGatewaySettingsSettingsProtocolDetectionToTerraform(struct) {
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
export function zeroTrustGatewaySettingsSettingsProtocolDetectionToHclTerraform(struct) {
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
export class ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustGatewaySettingsSettingsSandboxToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        fallback_action: cdktf.stringToTerraform(struct.fallbackAction),
    };
}
export function zeroTrustGatewaySettingsSettingsSandboxToHclTerraform(struct) {
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
        fallback_action: {
            value: cdktf.stringToHclTerraform(struct.fallbackAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustGatewaySettingsSettingsSandboxOutputReference extends cdktf.ComplexObject {
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
        if (this._fallbackAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.fallbackAction = this._fallbackAction;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
            this._fallbackAction = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
            this._fallbackAction = value.fallbackAction;
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
    // fallback_action - computed: false, optional: true, required: false
    _fallbackAction;
    get fallbackAction() {
        return this.getStringAttribute('fallback_action');
    }
    set fallbackAction(value) {
        this._fallbackAction = value;
    }
    resetFallbackAction() {
        this._fallbackAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fallbackActionInput() {
        return this._fallbackAction;
    }
}
export function zeroTrustGatewaySettingsSettingsTlsDecryptToTerraform(struct) {
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
export function zeroTrustGatewaySettingsSettingsTlsDecryptToHclTerraform(struct) {
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
export class ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustGatewaySettingsSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        activity_log: zeroTrustGatewaySettingsSettingsActivityLogToTerraform(struct.activityLog),
        antivirus: zeroTrustGatewaySettingsSettingsAntivirusToTerraform(struct.antivirus),
        block_page: zeroTrustGatewaySettingsSettingsBlockPageToTerraform(struct.blockPage),
        body_scanning: zeroTrustGatewaySettingsSettingsBodyScanningToTerraform(struct.bodyScanning),
        browser_isolation: zeroTrustGatewaySettingsSettingsBrowserIsolationToTerraform(struct.browserIsolation),
        certificate: zeroTrustGatewaySettingsSettingsCertificateToTerraform(struct.certificate),
        custom_certificate: zeroTrustGatewaySettingsSettingsCustomCertificateToTerraform(struct.customCertificate),
        extended_email_matching: zeroTrustGatewaySettingsSettingsExtendedEmailMatchingToTerraform(struct.extendedEmailMatching),
        fips: zeroTrustGatewaySettingsSettingsFipsToTerraform(struct.fips),
        host_selector: zeroTrustGatewaySettingsSettingsHostSelectorToTerraform(struct.hostSelector),
        inspection: zeroTrustGatewaySettingsSettingsInspectionToTerraform(struct.inspection),
        protocol_detection: zeroTrustGatewaySettingsSettingsProtocolDetectionToTerraform(struct.protocolDetection),
        sandbox: zeroTrustGatewaySettingsSettingsSandboxToTerraform(struct.sandbox),
        tls_decrypt: zeroTrustGatewaySettingsSettingsTlsDecryptToTerraform(struct.tlsDecrypt),
    };
}
export function zeroTrustGatewaySettingsSettingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        activity_log: {
            value: zeroTrustGatewaySettingsSettingsActivityLogToHclTerraform(struct.activityLog),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustGatewaySettingsSettingsActivityLog",
        },
        antivirus: {
            value: zeroTrustGatewaySettingsSettingsAntivirusToHclTerraform(struct.antivirus),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustGatewaySettingsSettingsAntivirus",
        },
        block_page: {
            value: zeroTrustGatewaySettingsSettingsBlockPageToHclTerraform(struct.blockPage),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustGatewaySettingsSettingsBlockPage",
        },
        body_scanning: {
            value: zeroTrustGatewaySettingsSettingsBodyScanningToHclTerraform(struct.bodyScanning),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustGatewaySettingsSettingsBodyScanning",
        },
        browser_isolation: {
            value: zeroTrustGatewaySettingsSettingsBrowserIsolationToHclTerraform(struct.browserIsolation),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustGatewaySettingsSettingsBrowserIsolation",
        },
        certificate: {
            value: zeroTrustGatewaySettingsSettingsCertificateToHclTerraform(struct.certificate),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustGatewaySettingsSettingsCertificate",
        },
        custom_certificate: {
            value: zeroTrustGatewaySettingsSettingsCustomCertificateToHclTerraform(struct.customCertificate),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustGatewaySettingsSettingsCustomCertificate",
        },
        extended_email_matching: {
            value: zeroTrustGatewaySettingsSettingsExtendedEmailMatchingToHclTerraform(struct.extendedEmailMatching),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustGatewaySettingsSettingsExtendedEmailMatching",
        },
        fips: {
            value: zeroTrustGatewaySettingsSettingsFipsToHclTerraform(struct.fips),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustGatewaySettingsSettingsFips",
        },
        host_selector: {
            value: zeroTrustGatewaySettingsSettingsHostSelectorToHclTerraform(struct.hostSelector),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustGatewaySettingsSettingsHostSelector",
        },
        inspection: {
            value: zeroTrustGatewaySettingsSettingsInspectionToHclTerraform(struct.inspection),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustGatewaySettingsSettingsInspection",
        },
        protocol_detection: {
            value: zeroTrustGatewaySettingsSettingsProtocolDetectionToHclTerraform(struct.protocolDetection),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustGatewaySettingsSettingsProtocolDetection",
        },
        sandbox: {
            value: zeroTrustGatewaySettingsSettingsSandboxToHclTerraform(struct.sandbox),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustGatewaySettingsSettingsSandbox",
        },
        tls_decrypt: {
            value: zeroTrustGatewaySettingsSettingsTlsDecryptToHclTerraform(struct.tlsDecrypt),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustGatewaySettingsSettingsTlsDecrypt",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustGatewaySettingsSettingsOutputReference extends cdktf.ComplexObject {
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
        if (this._activityLog?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.activityLog = this._activityLog?.internalValue;
        }
        if (this._antivirus?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.antivirus = this._antivirus?.internalValue;
        }
        if (this._blockPage?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.blockPage = this._blockPage?.internalValue;
        }
        if (this._bodyScanning?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.bodyScanning = this._bodyScanning?.internalValue;
        }
        if (this._browserIsolation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.browserIsolation = this._browserIsolation?.internalValue;
        }
        if (this._certificate?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.certificate = this._certificate?.internalValue;
        }
        if (this._customCertificate?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customCertificate = this._customCertificate?.internalValue;
        }
        if (this._extendedEmailMatching?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.extendedEmailMatching = this._extendedEmailMatching?.internalValue;
        }
        if (this._fips?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.fips = this._fips?.internalValue;
        }
        if (this._hostSelector?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.hostSelector = this._hostSelector?.internalValue;
        }
        if (this._inspection?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.inspection = this._inspection?.internalValue;
        }
        if (this._protocolDetection?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.protocolDetection = this._protocolDetection?.internalValue;
        }
        if (this._sandbox?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sandbox = this._sandbox?.internalValue;
        }
        if (this._tlsDecrypt?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tlsDecrypt = this._tlsDecrypt?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._activityLog.internalValue = undefined;
            this._antivirus.internalValue = undefined;
            this._blockPage.internalValue = undefined;
            this._bodyScanning.internalValue = undefined;
            this._browserIsolation.internalValue = undefined;
            this._certificate.internalValue = undefined;
            this._customCertificate.internalValue = undefined;
            this._extendedEmailMatching.internalValue = undefined;
            this._fips.internalValue = undefined;
            this._hostSelector.internalValue = undefined;
            this._inspection.internalValue = undefined;
            this._protocolDetection.internalValue = undefined;
            this._sandbox.internalValue = undefined;
            this._tlsDecrypt.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._activityLog.internalValue = value.activityLog;
            this._antivirus.internalValue = value.antivirus;
            this._blockPage.internalValue = value.blockPage;
            this._bodyScanning.internalValue = value.bodyScanning;
            this._browserIsolation.internalValue = value.browserIsolation;
            this._certificate.internalValue = value.certificate;
            this._customCertificate.internalValue = value.customCertificate;
            this._extendedEmailMatching.internalValue = value.extendedEmailMatching;
            this._fips.internalValue = value.fips;
            this._hostSelector.internalValue = value.hostSelector;
            this._inspection.internalValue = value.inspection;
            this._protocolDetection.internalValue = value.protocolDetection;
            this._sandbox.internalValue = value.sandbox;
            this._tlsDecrypt.internalValue = value.tlsDecrypt;
        }
    }
    // activity_log - computed: false, optional: true, required: false
    _activityLog = new ZeroTrustGatewaySettingsSettingsActivityLogOutputReference(this, "activity_log");
    get activityLog() {
        return this._activityLog;
    }
    putActivityLog(value) {
        this._activityLog.internalValue = value;
    }
    resetActivityLog() {
        this._activityLog.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get activityLogInput() {
        return this._activityLog.internalValue;
    }
    // antivirus - computed: false, optional: true, required: false
    _antivirus = new ZeroTrustGatewaySettingsSettingsAntivirusOutputReference(this, "antivirus");
    get antivirus() {
        return this._antivirus;
    }
    putAntivirus(value) {
        this._antivirus.internalValue = value;
    }
    resetAntivirus() {
        this._antivirus.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get antivirusInput() {
        return this._antivirus.internalValue;
    }
    // block_page - computed: false, optional: true, required: false
    _blockPage = new ZeroTrustGatewaySettingsSettingsBlockPageOutputReference(this, "block_page");
    get blockPage() {
        return this._blockPage;
    }
    putBlockPage(value) {
        this._blockPage.internalValue = value;
    }
    resetBlockPage() {
        this._blockPage.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get blockPageInput() {
        return this._blockPage.internalValue;
    }
    // body_scanning - computed: false, optional: true, required: false
    _bodyScanning = new ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference(this, "body_scanning");
    get bodyScanning() {
        return this._bodyScanning;
    }
    putBodyScanning(value) {
        this._bodyScanning.internalValue = value;
    }
    resetBodyScanning() {
        this._bodyScanning.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyScanningInput() {
        return this._bodyScanning.internalValue;
    }
    // browser_isolation - computed: false, optional: true, required: false
    _browserIsolation = new ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference(this, "browser_isolation");
    get browserIsolation() {
        return this._browserIsolation;
    }
    putBrowserIsolation(value) {
        this._browserIsolation.internalValue = value;
    }
    resetBrowserIsolation() {
        this._browserIsolation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get browserIsolationInput() {
        return this._browserIsolation.internalValue;
    }
    // certificate - computed: false, optional: true, required: false
    _certificate = new ZeroTrustGatewaySettingsSettingsCertificateOutputReference(this, "certificate");
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
    // custom_certificate - computed: false, optional: true, required: false
    _customCertificate = new ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference(this, "custom_certificate");
    get customCertificate() {
        return this._customCertificate;
    }
    putCustomCertificate(value) {
        this._customCertificate.internalValue = value;
    }
    resetCustomCertificate() {
        this._customCertificate.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get customCertificateInput() {
        return this._customCertificate.internalValue;
    }
    // extended_email_matching - computed: false, optional: true, required: false
    _extendedEmailMatching = new ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference(this, "extended_email_matching");
    get extendedEmailMatching() {
        return this._extendedEmailMatching;
    }
    putExtendedEmailMatching(value) {
        this._extendedEmailMatching.internalValue = value;
    }
    resetExtendedEmailMatching() {
        this._extendedEmailMatching.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get extendedEmailMatchingInput() {
        return this._extendedEmailMatching.internalValue;
    }
    // fips - computed: false, optional: true, required: false
    _fips = new ZeroTrustGatewaySettingsSettingsFipsOutputReference(this, "fips");
    get fips() {
        return this._fips;
    }
    putFips(value) {
        this._fips.internalValue = value;
    }
    resetFips() {
        this._fips.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fipsInput() {
        return this._fips.internalValue;
    }
    // host_selector - computed: false, optional: true, required: false
    _hostSelector = new ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference(this, "host_selector");
    get hostSelector() {
        return this._hostSelector;
    }
    putHostSelector(value) {
        this._hostSelector.internalValue = value;
    }
    resetHostSelector() {
        this._hostSelector.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hostSelectorInput() {
        return this._hostSelector.internalValue;
    }
    // inspection - computed: false, optional: true, required: false
    _inspection = new ZeroTrustGatewaySettingsSettingsInspectionOutputReference(this, "inspection");
    get inspection() {
        return this._inspection;
    }
    putInspection(value) {
        this._inspection.internalValue = value;
    }
    resetInspection() {
        this._inspection.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get inspectionInput() {
        return this._inspection.internalValue;
    }
    // protocol_detection - computed: false, optional: true, required: false
    _protocolDetection = new ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference(this, "protocol_detection");
    get protocolDetection() {
        return this._protocolDetection;
    }
    putProtocolDetection(value) {
        this._protocolDetection.internalValue = value;
    }
    resetProtocolDetection() {
        this._protocolDetection.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get protocolDetectionInput() {
        return this._protocolDetection.internalValue;
    }
    // sandbox - computed: false, optional: true, required: false
    _sandbox = new ZeroTrustGatewaySettingsSettingsSandboxOutputReference(this, "sandbox");
    get sandbox() {
        return this._sandbox;
    }
    putSandbox(value) {
        this._sandbox.internalValue = value;
    }
    resetSandbox() {
        this._sandbox.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sandboxInput() {
        return this._sandbox.internalValue;
    }
    // tls_decrypt - computed: false, optional: true, required: false
    _tlsDecrypt = new ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference(this, "tls_decrypt");
    get tlsDecrypt() {
        return this._tlsDecrypt;
    }
    putTlsDecrypt(value) {
        this._tlsDecrypt.internalValue = value;
    }
    resetTlsDecrypt() {
        this._tlsDecrypt.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tlsDecryptInput() {
        return this._tlsDecrypt.internalValue;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_settings cloudflare_zero_trust_gateway_settings}
*/
export class ZeroTrustGatewaySettings extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_zero_trust_gateway_settings";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ZeroTrustGatewaySettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustGatewaySettings to import
    * @param importFromId The id of the existing ZeroTrustGatewaySettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustGatewaySettings to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_gateway_settings", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_settings cloudflare_zero_trust_gateway_settings} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustGatewaySettingsConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_gateway_settings',
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
        this._settings.internalValue = config.settings;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // account_id - computed: false, optional: false, required: true
    _accountId;
    get accountId() {
        return this.getStringAttribute('account_id');
    }
    set accountId(value) {
        this._accountId = value;
    }
    // Temporarily expose input value. Use with caution.
    get accountIdInput() {
        return this._accountId;
    }
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.getStringAttribute('created_at');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // settings - computed: false, optional: true, required: false
    _settings = new ZeroTrustGatewaySettingsSettingsOutputReference(this, "settings");
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
            settings: zeroTrustGatewaySettingsSettingsToTerraform(this._settings.internalValue),
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
            settings: {
                value: zeroTrustGatewaySettingsSettingsToHclTerraform(this._settings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ZeroTrustGatewaySettingsSettings",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
