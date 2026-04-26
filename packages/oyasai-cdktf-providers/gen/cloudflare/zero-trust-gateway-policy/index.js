// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function zeroTrustGatewayPolicyExpirationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        duration: cdktf.numberToTerraform(struct.duration),
        expires_at: cdktf.stringToTerraform(struct.expiresAt),
    };
}
export function zeroTrustGatewayPolicyExpirationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        duration: {
            value: cdktf.numberToHclTerraform(struct.duration),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        expires_at: {
            value: cdktf.stringToHclTerraform(struct.expiresAt),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustGatewayPolicyExpirationOutputReference extends cdktf.ComplexObject {
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
        if (this._duration !== undefined) {
            hasAnyValues = true;
            internalValueResult.duration = this._duration;
        }
        if (this._expiresAt !== undefined) {
            hasAnyValues = true;
            internalValueResult.expiresAt = this._expiresAt;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._duration = undefined;
            this._expiresAt = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._duration = value.duration;
            this._expiresAt = value.expiresAt;
        }
    }
    // duration - computed: true, optional: true, required: false
    _duration;
    get duration() {
        return this.getNumberAttribute('duration');
    }
    set duration(value) {
        this._duration = value;
    }
    resetDuration() {
        this._duration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get durationInput() {
        return this._duration;
    }
    // expired - computed: true, optional: false, required: false
    get expired() {
        return this.getBooleanAttribute('expired');
    }
    // expires_at - computed: true, optional: false, required: true
    _expiresAt;
    get expiresAt() {
        return this.getStringAttribute('expires_at');
    }
    set expiresAt(value) {
        this._expiresAt = value;
    }
    // Temporarily expose input value. Use with caution.
    get expiresAtInput() {
        return this._expiresAt;
    }
}
export function zeroTrustGatewayPolicyRuleSettingsAuditSshToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        command_logging: cdktf.booleanToTerraform(struct.commandLogging),
    };
}
export function zeroTrustGatewayPolicyRuleSettingsAuditSshToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        command_logging: {
            value: cdktf.booleanToHclTerraform(struct.commandLogging),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference extends cdktf.ComplexObject {
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
        if (this._commandLogging !== undefined) {
            hasAnyValues = true;
            internalValueResult.commandLogging = this._commandLogging;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._commandLogging = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._commandLogging = value.commandLogging;
        }
    }
    // command_logging - computed: true, optional: true, required: false
    _commandLogging;
    get commandLogging() {
        return this.getBooleanAttribute('command_logging');
    }
    set commandLogging(value) {
        this._commandLogging = value;
    }
    resetCommandLogging() {
        this._commandLogging = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get commandLoggingInput() {
        return this._commandLogging;
    }
}
export function zeroTrustGatewayPolicyRuleSettingsBisoAdminControlsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        copy: cdktf.stringToTerraform(struct.copy),
        dcp: cdktf.booleanToTerraform(struct.dcp),
        dd: cdktf.booleanToTerraform(struct.dd),
        dk: cdktf.booleanToTerraform(struct.dk),
        download: cdktf.stringToTerraform(struct.download),
        dp: cdktf.booleanToTerraform(struct.dp),
        du: cdktf.booleanToTerraform(struct.du),
        keyboard: cdktf.stringToTerraform(struct.keyboard),
        paste: cdktf.stringToTerraform(struct.paste),
        printing: cdktf.stringToTerraform(struct.printing),
        upload: cdktf.stringToTerraform(struct.upload),
        version: cdktf.stringToTerraform(struct.version),
        wm_id: cdktf.stringToTerraform(struct.wmId),
    };
}
export function zeroTrustGatewayPolicyRuleSettingsBisoAdminControlsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        copy: {
            value: cdktf.stringToHclTerraform(struct.copy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        dcp: {
            value: cdktf.booleanToHclTerraform(struct.dcp),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        dd: {
            value: cdktf.booleanToHclTerraform(struct.dd),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        dk: {
            value: cdktf.booleanToHclTerraform(struct.dk),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        download: {
            value: cdktf.stringToHclTerraform(struct.download),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        dp: {
            value: cdktf.booleanToHclTerraform(struct.dp),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        du: {
            value: cdktf.booleanToHclTerraform(struct.du),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        keyboard: {
            value: cdktf.stringToHclTerraform(struct.keyboard),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        paste: {
            value: cdktf.stringToHclTerraform(struct.paste),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        printing: {
            value: cdktf.stringToHclTerraform(struct.printing),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        upload: {
            value: cdktf.stringToHclTerraform(struct.upload),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        version: {
            value: cdktf.stringToHclTerraform(struct.version),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        wm_id: {
            value: cdktf.stringToHclTerraform(struct.wmId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference extends cdktf.ComplexObject {
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
        if (this._copy !== undefined) {
            hasAnyValues = true;
            internalValueResult.copy = this._copy;
        }
        if (this._dcp !== undefined) {
            hasAnyValues = true;
            internalValueResult.dcp = this._dcp;
        }
        if (this._dd !== undefined) {
            hasAnyValues = true;
            internalValueResult.dd = this._dd;
        }
        if (this._dk !== undefined) {
            hasAnyValues = true;
            internalValueResult.dk = this._dk;
        }
        if (this._download !== undefined) {
            hasAnyValues = true;
            internalValueResult.download = this._download;
        }
        if (this._dp !== undefined) {
            hasAnyValues = true;
            internalValueResult.dp = this._dp;
        }
        if (this._du !== undefined) {
            hasAnyValues = true;
            internalValueResult.du = this._du;
        }
        if (this._keyboard !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyboard = this._keyboard;
        }
        if (this._paste !== undefined) {
            hasAnyValues = true;
            internalValueResult.paste = this._paste;
        }
        if (this._printing !== undefined) {
            hasAnyValues = true;
            internalValueResult.printing = this._printing;
        }
        if (this._upload !== undefined) {
            hasAnyValues = true;
            internalValueResult.upload = this._upload;
        }
        if (this._version !== undefined) {
            hasAnyValues = true;
            internalValueResult.version = this._version;
        }
        if (this._wmId !== undefined) {
            hasAnyValues = true;
            internalValueResult.wmId = this._wmId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._copy = undefined;
            this._dcp = undefined;
            this._dd = undefined;
            this._dk = undefined;
            this._download = undefined;
            this._dp = undefined;
            this._du = undefined;
            this._keyboard = undefined;
            this._paste = undefined;
            this._printing = undefined;
            this._upload = undefined;
            this._version = undefined;
            this._wmId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._copy = value.copy;
            this._dcp = value.dcp;
            this._dd = value.dd;
            this._dk = value.dk;
            this._download = value.download;
            this._dp = value.dp;
            this._du = value.du;
            this._keyboard = value.keyboard;
            this._paste = value.paste;
            this._printing = value.printing;
            this._upload = value.upload;
            this._version = value.version;
            this._wmId = value.wmId;
        }
    }
    // copy - computed: true, optional: true, required: false
    _copy;
    get copy() {
        return this.getStringAttribute('copy');
    }
    set copy(value) {
        this._copy = value;
    }
    resetCopy() {
        this._copy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get copyInput() {
        return this._copy;
    }
    // dcp - computed: true, optional: true, required: false
    _dcp;
    get dcp() {
        return this.getBooleanAttribute('dcp');
    }
    set dcp(value) {
        this._dcp = value;
    }
    resetDcp() {
        this._dcp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dcpInput() {
        return this._dcp;
    }
    // dd - computed: true, optional: true, required: false
    _dd;
    get dd() {
        return this.getBooleanAttribute('dd');
    }
    set dd(value) {
        this._dd = value;
    }
    resetDd() {
        this._dd = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ddInput() {
        return this._dd;
    }
    // dk - computed: true, optional: true, required: false
    _dk;
    get dk() {
        return this.getBooleanAttribute('dk');
    }
    set dk(value) {
        this._dk = value;
    }
    resetDk() {
        this._dk = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dkInput() {
        return this._dk;
    }
    // download - computed: true, optional: true, required: false
    _download;
    get download() {
        return this.getStringAttribute('download');
    }
    set download(value) {
        this._download = value;
    }
    resetDownload() {
        this._download = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get downloadInput() {
        return this._download;
    }
    // dp - computed: true, optional: true, required: false
    _dp;
    get dp() {
        return this.getBooleanAttribute('dp');
    }
    set dp(value) {
        this._dp = value;
    }
    resetDp() {
        this._dp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dpInput() {
        return this._dp;
    }
    // du - computed: true, optional: true, required: false
    _du;
    get du() {
        return this.getBooleanAttribute('du');
    }
    set du(value) {
        this._du = value;
    }
    resetDu() {
        this._du = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get duInput() {
        return this._du;
    }
    // keyboard - computed: true, optional: true, required: false
    _keyboard;
    get keyboard() {
        return this.getStringAttribute('keyboard');
    }
    set keyboard(value) {
        this._keyboard = value;
    }
    resetKeyboard() {
        this._keyboard = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get keyboardInput() {
        return this._keyboard;
    }
    // paste - computed: true, optional: true, required: false
    _paste;
    get paste() {
        return this.getStringAttribute('paste');
    }
    set paste(value) {
        this._paste = value;
    }
    resetPaste() {
        this._paste = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get pasteInput() {
        return this._paste;
    }
    // printing - computed: true, optional: true, required: false
    _printing;
    get printing() {
        return this.getStringAttribute('printing');
    }
    set printing(value) {
        this._printing = value;
    }
    resetPrinting() {
        this._printing = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get printingInput() {
        return this._printing;
    }
    // upload - computed: true, optional: true, required: false
    _upload;
    get upload() {
        return this.getStringAttribute('upload');
    }
    set upload(value) {
        this._upload = value;
    }
    resetUpload() {
        this._upload = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uploadInput() {
        return this._upload;
    }
    // version - computed: true, optional: true, required: false
    _version;
    get version() {
        return this.getStringAttribute('version');
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
    // wm_id - computed: true, optional: true, required: false
    _wmId;
    get wmId() {
        return this.getStringAttribute('wm_id');
    }
    set wmId(value) {
        this._wmId = value;
    }
    resetWmId() {
        this._wmId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get wmIdInput() {
        return this._wmId;
    }
}
export function zeroTrustGatewayPolicyRuleSettingsBlockPageToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        include_context: cdktf.booleanToTerraform(struct.includeContext),
        target_uri: cdktf.stringToTerraform(struct.targetUri),
    };
}
export function zeroTrustGatewayPolicyRuleSettingsBlockPageToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        include_context: {
            value: cdktf.booleanToHclTerraform(struct.includeContext),
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
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference extends cdktf.ComplexObject {
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
        if (this._includeContext !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeContext = this._includeContext;
        }
        if (this._targetUri !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetUri = this._targetUri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._includeContext = undefined;
            this._targetUri = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._includeContext = value.includeContext;
            this._targetUri = value.targetUri;
        }
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
    // target_uri - computed: true, optional: false, required: true
    _targetUri;
    get targetUri() {
        return this.getStringAttribute('target_uri');
    }
    set targetUri(value) {
        this._targetUri = value;
    }
    // Temporarily expose input value. Use with caution.
    get targetUriInput() {
        return this._targetUri;
    }
}
export function zeroTrustGatewayPolicyRuleSettingsCheckSessionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        duration: cdktf.stringToTerraform(struct.duration),
        enforce: cdktf.booleanToTerraform(struct.enforce),
    };
}
export function zeroTrustGatewayPolicyRuleSettingsCheckSessionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        duration: {
            value: cdktf.stringToHclTerraform(struct.duration),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        enforce: {
            value: cdktf.booleanToHclTerraform(struct.enforce),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference extends cdktf.ComplexObject {
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
        if (this._duration !== undefined) {
            hasAnyValues = true;
            internalValueResult.duration = this._duration;
        }
        if (this._enforce !== undefined) {
            hasAnyValues = true;
            internalValueResult.enforce = this._enforce;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._duration = undefined;
            this._enforce = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._duration = value.duration;
            this._enforce = value.enforce;
        }
    }
    // duration - computed: true, optional: true, required: false
    _duration;
    get duration() {
        return this.getStringAttribute('duration');
    }
    set duration(value) {
        this._duration = value;
    }
    resetDuration() {
        this._duration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get durationInput() {
        return this._duration;
    }
    // enforce - computed: true, optional: true, required: false
    _enforce;
    get enforce() {
        return this.getBooleanAttribute('enforce');
    }
    set enforce(value) {
        this._enforce = value;
    }
    resetEnforce() {
        this._enforce = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enforceInput() {
        return this._enforce;
    }
}
export function zeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4ToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        ip: cdktf.stringToTerraform(struct.ip),
        port: cdktf.numberToTerraform(struct.port),
        route_through_private_network: cdktf.booleanToTerraform(struct.routeThroughPrivateNetwork),
        vnet_id: cdktf.stringToTerraform(struct.vnetId),
    };
}
export function zeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4ToHclTerraform(struct) {
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
        port: {
            value: cdktf.numberToHclTerraform(struct.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        route_through_private_network: {
            value: cdktf.booleanToHclTerraform(struct.routeThroughPrivateNetwork),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
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
export class ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference extends cdktf.ComplexObject {
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
        if (this._ip !== undefined) {
            hasAnyValues = true;
            internalValueResult.ip = this._ip;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        if (this._routeThroughPrivateNetwork !== undefined) {
            hasAnyValues = true;
            internalValueResult.routeThroughPrivateNetwork = this._routeThroughPrivateNetwork;
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
            this._ip = undefined;
            this._port = undefined;
            this._routeThroughPrivateNetwork = undefined;
            this._vnetId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ip = value.ip;
            this._port = value.port;
            this._routeThroughPrivateNetwork = value.routeThroughPrivateNetwork;
            this._vnetId = value.vnetId;
        }
    }
    // ip - computed: true, optional: false, required: true
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
    // route_through_private_network - computed: true, optional: true, required: false
    _routeThroughPrivateNetwork;
    get routeThroughPrivateNetwork() {
        return this.getBooleanAttribute('route_through_private_network');
    }
    set routeThroughPrivateNetwork(value) {
        this._routeThroughPrivateNetwork = value;
    }
    resetRouteThroughPrivateNetwork() {
        this._routeThroughPrivateNetwork = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get routeThroughPrivateNetworkInput() {
        return this._routeThroughPrivateNetwork;
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
export class ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List extends cdktf.ComplexList {
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
        return new ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function zeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6ToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        ip: cdktf.stringToTerraform(struct.ip),
        port: cdktf.numberToTerraform(struct.port),
        route_through_private_network: cdktf.booleanToTerraform(struct.routeThroughPrivateNetwork),
        vnet_id: cdktf.stringToTerraform(struct.vnetId),
    };
}
export function zeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6ToHclTerraform(struct) {
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
        port: {
            value: cdktf.numberToHclTerraform(struct.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        route_through_private_network: {
            value: cdktf.booleanToHclTerraform(struct.routeThroughPrivateNetwork),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
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
export class ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference extends cdktf.ComplexObject {
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
        if (this._ip !== undefined) {
            hasAnyValues = true;
            internalValueResult.ip = this._ip;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        if (this._routeThroughPrivateNetwork !== undefined) {
            hasAnyValues = true;
            internalValueResult.routeThroughPrivateNetwork = this._routeThroughPrivateNetwork;
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
            this._ip = undefined;
            this._port = undefined;
            this._routeThroughPrivateNetwork = undefined;
            this._vnetId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ip = value.ip;
            this._port = value.port;
            this._routeThroughPrivateNetwork = value.routeThroughPrivateNetwork;
            this._vnetId = value.vnetId;
        }
    }
    // ip - computed: true, optional: false, required: true
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
    // route_through_private_network - computed: true, optional: true, required: false
    _routeThroughPrivateNetwork;
    get routeThroughPrivateNetwork() {
        return this.getBooleanAttribute('route_through_private_network');
    }
    set routeThroughPrivateNetwork(value) {
        this._routeThroughPrivateNetwork = value;
    }
    resetRouteThroughPrivateNetwork() {
        this._routeThroughPrivateNetwork = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get routeThroughPrivateNetworkInput() {
        return this._routeThroughPrivateNetwork;
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
export class ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List extends cdktf.ComplexList {
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
        return new ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function zeroTrustGatewayPolicyRuleSettingsDnsResolversToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        ipv4: cdktf.listMapper(zeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4ToTerraform, false)(struct.ipv4),
        ipv6: cdktf.listMapper(zeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6ToTerraform, false)(struct.ipv6),
    };
}
export function zeroTrustGatewayPolicyRuleSettingsDnsResolversToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        ipv4: {
            value: cdktf.listMapperHcl(zeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4ToHclTerraform, false)(struct.ipv4),
            isBlock: true,
            type: "list",
            storageClassType: "ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List",
        },
        ipv6: {
            value: cdktf.listMapperHcl(zeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6ToHclTerraform, false)(struct.ipv6),
            isBlock: true,
            type: "list",
            storageClassType: "ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference extends cdktf.ComplexObject {
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
        if (this._ipv4?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipv4 = this._ipv4?.internalValue;
        }
        if (this._ipv6?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipv6 = this._ipv6?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ipv4.internalValue = undefined;
            this._ipv6.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ipv4.internalValue = value.ipv4;
            this._ipv6.internalValue = value.ipv6;
        }
    }
    // ipv4 - computed: true, optional: true, required: false
    _ipv4 = new ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List(this, "ipv4", false);
    get ipv4() {
        return this._ipv4;
    }
    putIpv4(value) {
        this._ipv4.internalValue = value;
    }
    resetIpv4() {
        this._ipv4.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipv4Input() {
        return this._ipv4.internalValue;
    }
    // ipv6 - computed: true, optional: true, required: false
    _ipv6 = new ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List(this, "ipv6", false);
    get ipv6() {
        return this._ipv6;
    }
    putIpv6(value) {
        this._ipv6.internalValue = value;
    }
    resetIpv6() {
        this._ipv6.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipv6Input() {
        return this._ipv6.internalValue;
    }
}
export function zeroTrustGatewayPolicyRuleSettingsEgressToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        ipv4: cdktf.stringToTerraform(struct.ipv4),
        ipv4_fallback: cdktf.stringToTerraform(struct.ipv4Fallback),
        ipv6: cdktf.stringToTerraform(struct.ipv6),
    };
}
export function zeroTrustGatewayPolicyRuleSettingsEgressToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        ipv4: {
            value: cdktf.stringToHclTerraform(struct.ipv4),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ipv4_fallback: {
            value: cdktf.stringToHclTerraform(struct.ipv4Fallback),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ipv6: {
            value: cdktf.stringToHclTerraform(struct.ipv6),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference extends cdktf.ComplexObject {
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
        if (this._ipv4 !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipv4 = this._ipv4;
        }
        if (this._ipv4Fallback !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipv4Fallback = this._ipv4Fallback;
        }
        if (this._ipv6 !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipv6 = this._ipv6;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ipv4 = undefined;
            this._ipv4Fallback = undefined;
            this._ipv6 = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ipv4 = value.ipv4;
            this._ipv4Fallback = value.ipv4Fallback;
            this._ipv6 = value.ipv6;
        }
    }
    // ipv4 - computed: true, optional: true, required: false
    _ipv4;
    get ipv4() {
        return this.getStringAttribute('ipv4');
    }
    set ipv4(value) {
        this._ipv4 = value;
    }
    resetIpv4() {
        this._ipv4 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipv4Input() {
        return this._ipv4;
    }
    // ipv4_fallback - computed: true, optional: true, required: false
    _ipv4Fallback;
    get ipv4Fallback() {
        return this.getStringAttribute('ipv4_fallback');
    }
    set ipv4Fallback(value) {
        this._ipv4Fallback = value;
    }
    resetIpv4Fallback() {
        this._ipv4Fallback = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipv4FallbackInput() {
        return this._ipv4Fallback;
    }
    // ipv6 - computed: true, optional: true, required: false
    _ipv6;
    get ipv6() {
        return this.getStringAttribute('ipv6');
    }
    set ipv6(value) {
        this._ipv6 = value;
    }
    resetIpv6() {
        this._ipv6 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipv6Input() {
        return this._ipv6;
    }
}
export function zeroTrustGatewayPolicyRuleSettingsForensicCopyToTerraform(struct) {
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
export function zeroTrustGatewayPolicyRuleSettingsForensicCopyToHclTerraform(struct) {
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
export class ZeroTrustGatewayPolicyRuleSettingsForensicCopyOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustGatewayPolicyRuleSettingsL4OverrideToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        ip: cdktf.stringToTerraform(struct.ip),
        port: cdktf.numberToTerraform(struct.port),
    };
}
export function zeroTrustGatewayPolicyRuleSettingsL4OverrideToHclTerraform(struct) {
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
export class ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference extends cdktf.ComplexObject {
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
            this._ip = undefined;
            this._port = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ip = value.ip;
            this._port = value.port;
        }
    }
    // ip - computed: true, optional: true, required: false
    _ip;
    get ip() {
        return this.getStringAttribute('ip');
    }
    set ip(value) {
        this._ip = value;
    }
    resetIp() {
        this._ip = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipInput() {
        return this._ip;
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
export function zeroTrustGatewayPolicyRuleSettingsNotificationSettingsToTerraform(struct) {
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
export function zeroTrustGatewayPolicyRuleSettingsNotificationSettingsToHclTerraform(struct) {
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
export class ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustGatewayPolicyRuleSettingsPayloadLogToTerraform(struct) {
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
export function zeroTrustGatewayPolicyRuleSettingsPayloadLogToHclTerraform(struct) {
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
export class ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustGatewayPolicyRuleSettingsQuarantineToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        file_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.fileTypes),
    };
}
export function zeroTrustGatewayPolicyRuleSettingsQuarantineToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        file_types: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.fileTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference extends cdktf.ComplexObject {
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
        if (this._fileTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.fileTypes = this._fileTypes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fileTypes = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fileTypes = value.fileTypes;
        }
    }
    // file_types - computed: true, optional: true, required: false
    _fileTypes;
    get fileTypes() {
        return this.getListAttribute('file_types');
    }
    set fileTypes(value) {
        this._fileTypes = value;
    }
    resetFileTypes() {
        this._fileTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fileTypesInput() {
        return this._fileTypes;
    }
}
export function zeroTrustGatewayPolicyRuleSettingsRedirectToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        include_context: cdktf.booleanToTerraform(struct.includeContext),
        preserve_path_and_query: cdktf.booleanToTerraform(struct.preservePathAndQuery),
        target_uri: cdktf.stringToTerraform(struct.targetUri),
    };
}
export function zeroTrustGatewayPolicyRuleSettingsRedirectToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        include_context: {
            value: cdktf.booleanToHclTerraform(struct.includeContext),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        preserve_path_and_query: {
            value: cdktf.booleanToHclTerraform(struct.preservePathAndQuery),
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
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference extends cdktf.ComplexObject {
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
        if (this._includeContext !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeContext = this._includeContext;
        }
        if (this._preservePathAndQuery !== undefined) {
            hasAnyValues = true;
            internalValueResult.preservePathAndQuery = this._preservePathAndQuery;
        }
        if (this._targetUri !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetUri = this._targetUri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._includeContext = undefined;
            this._preservePathAndQuery = undefined;
            this._targetUri = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._includeContext = value.includeContext;
            this._preservePathAndQuery = value.preservePathAndQuery;
            this._targetUri = value.targetUri;
        }
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
    // preserve_path_and_query - computed: true, optional: true, required: false
    _preservePathAndQuery;
    get preservePathAndQuery() {
        return this.getBooleanAttribute('preserve_path_and_query');
    }
    set preservePathAndQuery(value) {
        this._preservePathAndQuery = value;
    }
    resetPreservePathAndQuery() {
        this._preservePathAndQuery = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get preservePathAndQueryInput() {
        return this._preservePathAndQuery;
    }
    // target_uri - computed: true, optional: false, required: true
    _targetUri;
    get targetUri() {
        return this.getStringAttribute('target_uri');
    }
    set targetUri(value) {
        this._targetUri = value;
    }
    // Temporarily expose input value. Use with caution.
    get targetUriInput() {
        return this._targetUri;
    }
}
export function zeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        fallback: cdktf.stringToTerraform(struct.fallback),
        view_id: cdktf.stringToTerraform(struct.viewId),
    };
}
export function zeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        fallback: {
            value: cdktf.stringToHclTerraform(struct.fallback),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        view_id: {
            value: cdktf.stringToHclTerraform(struct.viewId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference extends cdktf.ComplexObject {
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
        if (this._fallback !== undefined) {
            hasAnyValues = true;
            internalValueResult.fallback = this._fallback;
        }
        if (this._viewId !== undefined) {
            hasAnyValues = true;
            internalValueResult.viewId = this._viewId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fallback = undefined;
            this._viewId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fallback = value.fallback;
            this._viewId = value.viewId;
        }
    }
    // fallback - computed: true, optional: true, required: false
    _fallback;
    get fallback() {
        return this.getStringAttribute('fallback');
    }
    set fallback(value) {
        this._fallback = value;
    }
    resetFallback() {
        this._fallback = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fallbackInput() {
        return this._fallback;
    }
    // view_id - computed: true, optional: true, required: false
    _viewId;
    get viewId() {
        return this.getStringAttribute('view_id');
    }
    set viewId(value) {
        this._viewId = value;
    }
    resetViewId() {
        this._viewId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get viewIdInput() {
        return this._viewId;
    }
}
export function zeroTrustGatewayPolicyRuleSettingsUntrustedCertToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        action: cdktf.stringToTerraform(struct.action),
    };
}
export function zeroTrustGatewayPolicyRuleSettingsUntrustedCertToHclTerraform(struct) {
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
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._action = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._action = value.action;
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
}
export function zeroTrustGatewayPolicyRuleSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        add_headers: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct.addHeaders),
        allow_child_bypass: cdktf.booleanToTerraform(struct.allowChildBypass),
        audit_ssh: zeroTrustGatewayPolicyRuleSettingsAuditSshToTerraform(struct.auditSsh),
        biso_admin_controls: zeroTrustGatewayPolicyRuleSettingsBisoAdminControlsToTerraform(struct.bisoAdminControls),
        block_page: zeroTrustGatewayPolicyRuleSettingsBlockPageToTerraform(struct.blockPage),
        block_page_enabled: cdktf.booleanToTerraform(struct.blockPageEnabled),
        block_reason: cdktf.stringToTerraform(struct.blockReason),
        bypass_parent_rule: cdktf.booleanToTerraform(struct.bypassParentRule),
        check_session: zeroTrustGatewayPolicyRuleSettingsCheckSessionToTerraform(struct.checkSession),
        dns_resolvers: zeroTrustGatewayPolicyRuleSettingsDnsResolversToTerraform(struct.dnsResolvers),
        egress: zeroTrustGatewayPolicyRuleSettingsEgressToTerraform(struct.egress),
        forensic_copy: zeroTrustGatewayPolicyRuleSettingsForensicCopyToTerraform(struct.forensicCopy),
        ignore_cname_category_matches: cdktf.booleanToTerraform(struct.ignoreCnameCategoryMatches),
        insecure_disable_dnssec_validation: cdktf.booleanToTerraform(struct.insecureDisableDnssecValidation),
        ip_categories: cdktf.booleanToTerraform(struct.ipCategories),
        ip_indicator_feeds: cdktf.booleanToTerraform(struct.ipIndicatorFeeds),
        l4override: zeroTrustGatewayPolicyRuleSettingsL4OverrideToTerraform(struct.l4Override),
        notification_settings: zeroTrustGatewayPolicyRuleSettingsNotificationSettingsToTerraform(struct.notificationSettings),
        override_host: cdktf.stringToTerraform(struct.overrideHost),
        override_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.overrideIps),
        payload_log: zeroTrustGatewayPolicyRuleSettingsPayloadLogToTerraform(struct.payloadLog),
        quarantine: zeroTrustGatewayPolicyRuleSettingsQuarantineToTerraform(struct.quarantine),
        redirect: zeroTrustGatewayPolicyRuleSettingsRedirectToTerraform(struct.redirect),
        resolve_dns_internally: zeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyToTerraform(struct.resolveDnsInternally),
        resolve_dns_through_cloudflare: cdktf.booleanToTerraform(struct.resolveDnsThroughCloudflare),
        untrusted_cert: zeroTrustGatewayPolicyRuleSettingsUntrustedCertToTerraform(struct.untrustedCert),
    };
}
export function zeroTrustGatewayPolicyRuleSettingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        add_headers: {
            value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct.addHeaders),
            isBlock: false,
            type: "map",
            storageClassType: "stringListMap",
        },
        allow_child_bypass: {
            value: cdktf.booleanToHclTerraform(struct.allowChildBypass),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        audit_ssh: {
            value: zeroTrustGatewayPolicyRuleSettingsAuditSshToHclTerraform(struct.auditSsh),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustGatewayPolicyRuleSettingsAuditSsh",
        },
        biso_admin_controls: {
            value: zeroTrustGatewayPolicyRuleSettingsBisoAdminControlsToHclTerraform(struct.bisoAdminControls),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls",
        },
        block_page: {
            value: zeroTrustGatewayPolicyRuleSettingsBlockPageToHclTerraform(struct.blockPage),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustGatewayPolicyRuleSettingsBlockPage",
        },
        block_page_enabled: {
            value: cdktf.booleanToHclTerraform(struct.blockPageEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        block_reason: {
            value: cdktf.stringToHclTerraform(struct.blockReason),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        bypass_parent_rule: {
            value: cdktf.booleanToHclTerraform(struct.bypassParentRule),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        check_session: {
            value: zeroTrustGatewayPolicyRuleSettingsCheckSessionToHclTerraform(struct.checkSession),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustGatewayPolicyRuleSettingsCheckSession",
        },
        dns_resolvers: {
            value: zeroTrustGatewayPolicyRuleSettingsDnsResolversToHclTerraform(struct.dnsResolvers),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustGatewayPolicyRuleSettingsDnsResolvers",
        },
        egress: {
            value: zeroTrustGatewayPolicyRuleSettingsEgressToHclTerraform(struct.egress),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustGatewayPolicyRuleSettingsEgress",
        },
        forensic_copy: {
            value: zeroTrustGatewayPolicyRuleSettingsForensicCopyToHclTerraform(struct.forensicCopy),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustGatewayPolicyRuleSettingsForensicCopy",
        },
        ignore_cname_category_matches: {
            value: cdktf.booleanToHclTerraform(struct.ignoreCnameCategoryMatches),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        insecure_disable_dnssec_validation: {
            value: cdktf.booleanToHclTerraform(struct.insecureDisableDnssecValidation),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        ip_categories: {
            value: cdktf.booleanToHclTerraform(struct.ipCategories),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        ip_indicator_feeds: {
            value: cdktf.booleanToHclTerraform(struct.ipIndicatorFeeds),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        l4override: {
            value: zeroTrustGatewayPolicyRuleSettingsL4OverrideToHclTerraform(struct.l4Override),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustGatewayPolicyRuleSettingsL4Override",
        },
        notification_settings: {
            value: zeroTrustGatewayPolicyRuleSettingsNotificationSettingsToHclTerraform(struct.notificationSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustGatewayPolicyRuleSettingsNotificationSettings",
        },
        override_host: {
            value: cdktf.stringToHclTerraform(struct.overrideHost),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        override_ips: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.overrideIps),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        payload_log: {
            value: zeroTrustGatewayPolicyRuleSettingsPayloadLogToHclTerraform(struct.payloadLog),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustGatewayPolicyRuleSettingsPayloadLog",
        },
        quarantine: {
            value: zeroTrustGatewayPolicyRuleSettingsQuarantineToHclTerraform(struct.quarantine),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustGatewayPolicyRuleSettingsQuarantine",
        },
        redirect: {
            value: zeroTrustGatewayPolicyRuleSettingsRedirectToHclTerraform(struct.redirect),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustGatewayPolicyRuleSettingsRedirect",
        },
        resolve_dns_internally: {
            value: zeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyToHclTerraform(struct.resolveDnsInternally),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternally",
        },
        resolve_dns_through_cloudflare: {
            value: cdktf.booleanToHclTerraform(struct.resolveDnsThroughCloudflare),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        untrusted_cert: {
            value: zeroTrustGatewayPolicyRuleSettingsUntrustedCertToHclTerraform(struct.untrustedCert),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustGatewayPolicyRuleSettingsUntrustedCert",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustGatewayPolicyRuleSettingsOutputReference extends cdktf.ComplexObject {
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
        if (this._addHeaders !== undefined) {
            hasAnyValues = true;
            internalValueResult.addHeaders = this._addHeaders;
        }
        if (this._allowChildBypass !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowChildBypass = this._allowChildBypass;
        }
        if (this._auditSsh?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.auditSsh = this._auditSsh?.internalValue;
        }
        if (this._bisoAdminControls?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.bisoAdminControls = this._bisoAdminControls?.internalValue;
        }
        if (this._blockPage?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.blockPage = this._blockPage?.internalValue;
        }
        if (this._blockPageEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.blockPageEnabled = this._blockPageEnabled;
        }
        if (this._blockReason !== undefined) {
            hasAnyValues = true;
            internalValueResult.blockReason = this._blockReason;
        }
        if (this._bypassParentRule !== undefined) {
            hasAnyValues = true;
            internalValueResult.bypassParentRule = this._bypassParentRule;
        }
        if (this._checkSession?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.checkSession = this._checkSession?.internalValue;
        }
        if (this._dnsResolvers?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dnsResolvers = this._dnsResolvers?.internalValue;
        }
        if (this._egress?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.egress = this._egress?.internalValue;
        }
        if (this._forensicCopy?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.forensicCopy = this._forensicCopy?.internalValue;
        }
        if (this._ignoreCnameCategoryMatches !== undefined) {
            hasAnyValues = true;
            internalValueResult.ignoreCnameCategoryMatches = this._ignoreCnameCategoryMatches;
        }
        if (this._insecureDisableDnssecValidation !== undefined) {
            hasAnyValues = true;
            internalValueResult.insecureDisableDnssecValidation = this._insecureDisableDnssecValidation;
        }
        if (this._ipCategories !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipCategories = this._ipCategories;
        }
        if (this._ipIndicatorFeeds !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipIndicatorFeeds = this._ipIndicatorFeeds;
        }
        if (this._l4Override?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.l4Override = this._l4Override?.internalValue;
        }
        if (this._notificationSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.notificationSettings = this._notificationSettings?.internalValue;
        }
        if (this._overrideHost !== undefined) {
            hasAnyValues = true;
            internalValueResult.overrideHost = this._overrideHost;
        }
        if (this._overrideIps !== undefined) {
            hasAnyValues = true;
            internalValueResult.overrideIps = this._overrideIps;
        }
        if (this._payloadLog?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.payloadLog = this._payloadLog?.internalValue;
        }
        if (this._quarantine?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.quarantine = this._quarantine?.internalValue;
        }
        if (this._redirect?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.redirect = this._redirect?.internalValue;
        }
        if (this._resolveDnsInternally?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resolveDnsInternally = this._resolveDnsInternally?.internalValue;
        }
        if (this._resolveDnsThroughCloudflare !== undefined) {
            hasAnyValues = true;
            internalValueResult.resolveDnsThroughCloudflare = this._resolveDnsThroughCloudflare;
        }
        if (this._untrustedCert?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.untrustedCert = this._untrustedCert?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._addHeaders = undefined;
            this._allowChildBypass = undefined;
            this._auditSsh.internalValue = undefined;
            this._bisoAdminControls.internalValue = undefined;
            this._blockPage.internalValue = undefined;
            this._blockPageEnabled = undefined;
            this._blockReason = undefined;
            this._bypassParentRule = undefined;
            this._checkSession.internalValue = undefined;
            this._dnsResolvers.internalValue = undefined;
            this._egress.internalValue = undefined;
            this._forensicCopy.internalValue = undefined;
            this._ignoreCnameCategoryMatches = undefined;
            this._insecureDisableDnssecValidation = undefined;
            this._ipCategories = undefined;
            this._ipIndicatorFeeds = undefined;
            this._l4Override.internalValue = undefined;
            this._notificationSettings.internalValue = undefined;
            this._overrideHost = undefined;
            this._overrideIps = undefined;
            this._payloadLog.internalValue = undefined;
            this._quarantine.internalValue = undefined;
            this._redirect.internalValue = undefined;
            this._resolveDnsInternally.internalValue = undefined;
            this._resolveDnsThroughCloudflare = undefined;
            this._untrustedCert.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._addHeaders = value.addHeaders;
            this._allowChildBypass = value.allowChildBypass;
            this._auditSsh.internalValue = value.auditSsh;
            this._bisoAdminControls.internalValue = value.bisoAdminControls;
            this._blockPage.internalValue = value.blockPage;
            this._blockPageEnabled = value.blockPageEnabled;
            this._blockReason = value.blockReason;
            this._bypassParentRule = value.bypassParentRule;
            this._checkSession.internalValue = value.checkSession;
            this._dnsResolvers.internalValue = value.dnsResolvers;
            this._egress.internalValue = value.egress;
            this._forensicCopy.internalValue = value.forensicCopy;
            this._ignoreCnameCategoryMatches = value.ignoreCnameCategoryMatches;
            this._insecureDisableDnssecValidation = value.insecureDisableDnssecValidation;
            this._ipCategories = value.ipCategories;
            this._ipIndicatorFeeds = value.ipIndicatorFeeds;
            this._l4Override.internalValue = value.l4Override;
            this._notificationSettings.internalValue = value.notificationSettings;
            this._overrideHost = value.overrideHost;
            this._overrideIps = value.overrideIps;
            this._payloadLog.internalValue = value.payloadLog;
            this._quarantine.internalValue = value.quarantine;
            this._redirect.internalValue = value.redirect;
            this._resolveDnsInternally.internalValue = value.resolveDnsInternally;
            this._resolveDnsThroughCloudflare = value.resolveDnsThroughCloudflare;
            this._untrustedCert.internalValue = value.untrustedCert;
        }
    }
    // add_headers - computed: true, optional: true, required: false
    _addHeaders;
    get addHeaders() {
        return this.interpolationForAttribute('add_headers');
    }
    set addHeaders(value) {
        this._addHeaders = value;
    }
    resetAddHeaders() {
        this._addHeaders = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get addHeadersInput() {
        return this._addHeaders;
    }
    // allow_child_bypass - computed: true, optional: true, required: false
    _allowChildBypass;
    get allowChildBypass() {
        return this.getBooleanAttribute('allow_child_bypass');
    }
    set allowChildBypass(value) {
        this._allowChildBypass = value;
    }
    resetAllowChildBypass() {
        this._allowChildBypass = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowChildBypassInput() {
        return this._allowChildBypass;
    }
    // audit_ssh - computed: true, optional: true, required: false
    _auditSsh = new ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference(this, "audit_ssh");
    get auditSsh() {
        return this._auditSsh;
    }
    putAuditSsh(value) {
        this._auditSsh.internalValue = value;
    }
    resetAuditSsh() {
        this._auditSsh.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get auditSshInput() {
        return this._auditSsh.internalValue;
    }
    // biso_admin_controls - computed: true, optional: true, required: false
    _bisoAdminControls = new ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference(this, "biso_admin_controls");
    get bisoAdminControls() {
        return this._bisoAdminControls;
    }
    putBisoAdminControls(value) {
        this._bisoAdminControls.internalValue = value;
    }
    resetBisoAdminControls() {
        this._bisoAdminControls.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bisoAdminControlsInput() {
        return this._bisoAdminControls.internalValue;
    }
    // block_page - computed: true, optional: true, required: false
    _blockPage = new ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference(this, "block_page");
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
    // block_page_enabled - computed: true, optional: true, required: false
    _blockPageEnabled;
    get blockPageEnabled() {
        return this.getBooleanAttribute('block_page_enabled');
    }
    set blockPageEnabled(value) {
        this._blockPageEnabled = value;
    }
    resetBlockPageEnabled() {
        this._blockPageEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get blockPageEnabledInput() {
        return this._blockPageEnabled;
    }
    // block_reason - computed: true, optional: true, required: false
    _blockReason;
    get blockReason() {
        return this.getStringAttribute('block_reason');
    }
    set blockReason(value) {
        this._blockReason = value;
    }
    resetBlockReason() {
        this._blockReason = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get blockReasonInput() {
        return this._blockReason;
    }
    // bypass_parent_rule - computed: true, optional: true, required: false
    _bypassParentRule;
    get bypassParentRule() {
        return this.getBooleanAttribute('bypass_parent_rule');
    }
    set bypassParentRule(value) {
        this._bypassParentRule = value;
    }
    resetBypassParentRule() {
        this._bypassParentRule = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bypassParentRuleInput() {
        return this._bypassParentRule;
    }
    // check_session - computed: true, optional: true, required: false
    _checkSession = new ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference(this, "check_session");
    get checkSession() {
        return this._checkSession;
    }
    putCheckSession(value) {
        this._checkSession.internalValue = value;
    }
    resetCheckSession() {
        this._checkSession.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get checkSessionInput() {
        return this._checkSession.internalValue;
    }
    // dns_resolvers - computed: true, optional: true, required: false
    _dnsResolvers = new ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference(this, "dns_resolvers");
    get dnsResolvers() {
        return this._dnsResolvers;
    }
    putDnsResolvers(value) {
        this._dnsResolvers.internalValue = value;
    }
    resetDnsResolvers() {
        this._dnsResolvers.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dnsResolversInput() {
        return this._dnsResolvers.internalValue;
    }
    // egress - computed: true, optional: true, required: false
    _egress = new ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference(this, "egress");
    get egress() {
        return this._egress;
    }
    putEgress(value) {
        this._egress.internalValue = value;
    }
    resetEgress() {
        this._egress.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get egressInput() {
        return this._egress.internalValue;
    }
    // forensic_copy - computed: true, optional: true, required: false
    _forensicCopy = new ZeroTrustGatewayPolicyRuleSettingsForensicCopyOutputReference(this, "forensic_copy");
    get forensicCopy() {
        return this._forensicCopy;
    }
    putForensicCopy(value) {
        this._forensicCopy.internalValue = value;
    }
    resetForensicCopy() {
        this._forensicCopy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get forensicCopyInput() {
        return this._forensicCopy.internalValue;
    }
    // ignore_cname_category_matches - computed: true, optional: true, required: false
    _ignoreCnameCategoryMatches;
    get ignoreCnameCategoryMatches() {
        return this.getBooleanAttribute('ignore_cname_category_matches');
    }
    set ignoreCnameCategoryMatches(value) {
        this._ignoreCnameCategoryMatches = value;
    }
    resetIgnoreCnameCategoryMatches() {
        this._ignoreCnameCategoryMatches = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ignoreCnameCategoryMatchesInput() {
        return this._ignoreCnameCategoryMatches;
    }
    // insecure_disable_dnssec_validation - computed: true, optional: true, required: false
    _insecureDisableDnssecValidation;
    get insecureDisableDnssecValidation() {
        return this.getBooleanAttribute('insecure_disable_dnssec_validation');
    }
    set insecureDisableDnssecValidation(value) {
        this._insecureDisableDnssecValidation = value;
    }
    resetInsecureDisableDnssecValidation() {
        this._insecureDisableDnssecValidation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get insecureDisableDnssecValidationInput() {
        return this._insecureDisableDnssecValidation;
    }
    // ip_categories - computed: true, optional: true, required: false
    _ipCategories;
    get ipCategories() {
        return this.getBooleanAttribute('ip_categories');
    }
    set ipCategories(value) {
        this._ipCategories = value;
    }
    resetIpCategories() {
        this._ipCategories = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipCategoriesInput() {
        return this._ipCategories;
    }
    // ip_indicator_feeds - computed: true, optional: true, required: false
    _ipIndicatorFeeds;
    get ipIndicatorFeeds() {
        return this.getBooleanAttribute('ip_indicator_feeds');
    }
    set ipIndicatorFeeds(value) {
        this._ipIndicatorFeeds = value;
    }
    resetIpIndicatorFeeds() {
        this._ipIndicatorFeeds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipIndicatorFeedsInput() {
        return this._ipIndicatorFeeds;
    }
    // l4override - computed: true, optional: true, required: false
    _l4Override = new ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference(this, "l4override");
    get l4Override() {
        return this._l4Override;
    }
    putL4Override(value) {
        this._l4Override.internalValue = value;
    }
    resetL4Override() {
        this._l4Override.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get l4OverrideInput() {
        return this._l4Override.internalValue;
    }
    // notification_settings - computed: true, optional: true, required: false
    _notificationSettings = new ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference(this, "notification_settings");
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
    // override_host - computed: true, optional: true, required: false
    _overrideHost;
    get overrideHost() {
        return this.getStringAttribute('override_host');
    }
    set overrideHost(value) {
        this._overrideHost = value;
    }
    resetOverrideHost() {
        this._overrideHost = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get overrideHostInput() {
        return this._overrideHost;
    }
    // override_ips - computed: true, optional: true, required: false
    _overrideIps;
    get overrideIps() {
        return this.getListAttribute('override_ips');
    }
    set overrideIps(value) {
        this._overrideIps = value;
    }
    resetOverrideIps() {
        this._overrideIps = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get overrideIpsInput() {
        return this._overrideIps;
    }
    // payload_log - computed: true, optional: true, required: false
    _payloadLog = new ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference(this, "payload_log");
    get payloadLog() {
        return this._payloadLog;
    }
    putPayloadLog(value) {
        this._payloadLog.internalValue = value;
    }
    resetPayloadLog() {
        this._payloadLog.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get payloadLogInput() {
        return this._payloadLog.internalValue;
    }
    // quarantine - computed: true, optional: true, required: false
    _quarantine = new ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference(this, "quarantine");
    get quarantine() {
        return this._quarantine;
    }
    putQuarantine(value) {
        this._quarantine.internalValue = value;
    }
    resetQuarantine() {
        this._quarantine.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get quarantineInput() {
        return this._quarantine.internalValue;
    }
    // redirect - computed: true, optional: true, required: false
    _redirect = new ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference(this, "redirect");
    get redirect() {
        return this._redirect;
    }
    putRedirect(value) {
        this._redirect.internalValue = value;
    }
    resetRedirect() {
        this._redirect.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get redirectInput() {
        return this._redirect.internalValue;
    }
    // resolve_dns_internally - computed: true, optional: true, required: false
    _resolveDnsInternally = new ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference(this, "resolve_dns_internally");
    get resolveDnsInternally() {
        return this._resolveDnsInternally;
    }
    putResolveDnsInternally(value) {
        this._resolveDnsInternally.internalValue = value;
    }
    resetResolveDnsInternally() {
        this._resolveDnsInternally.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get resolveDnsInternallyInput() {
        return this._resolveDnsInternally.internalValue;
    }
    // resolve_dns_through_cloudflare - computed: true, optional: true, required: false
    _resolveDnsThroughCloudflare;
    get resolveDnsThroughCloudflare() {
        return this.getBooleanAttribute('resolve_dns_through_cloudflare');
    }
    set resolveDnsThroughCloudflare(value) {
        this._resolveDnsThroughCloudflare = value;
    }
    resetResolveDnsThroughCloudflare() {
        this._resolveDnsThroughCloudflare = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get resolveDnsThroughCloudflareInput() {
        return this._resolveDnsThroughCloudflare;
    }
    // untrusted_cert - computed: true, optional: true, required: false
    _untrustedCert = new ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference(this, "untrusted_cert");
    get untrustedCert() {
        return this._untrustedCert;
    }
    putUntrustedCert(value) {
        this._untrustedCert.internalValue = value;
    }
    resetUntrustedCert() {
        this._untrustedCert.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get untrustedCertInput() {
        return this._untrustedCert.internalValue;
    }
}
export function zeroTrustGatewayPolicyScheduleToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        fri: cdktf.stringToTerraform(struct.fri),
        mon: cdktf.stringToTerraform(struct.mon),
        sat: cdktf.stringToTerraform(struct.sat),
        sun: cdktf.stringToTerraform(struct.sun),
        thu: cdktf.stringToTerraform(struct.thu),
        time_zone: cdktf.stringToTerraform(struct.timeZone),
        tue: cdktf.stringToTerraform(struct.tue),
        wed: cdktf.stringToTerraform(struct.wed),
    };
}
export function zeroTrustGatewayPolicyScheduleToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        fri: {
            value: cdktf.stringToHclTerraform(struct.fri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mon: {
            value: cdktf.stringToHclTerraform(struct.mon),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sat: {
            value: cdktf.stringToHclTerraform(struct.sat),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sun: {
            value: cdktf.stringToHclTerraform(struct.sun),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        thu: {
            value: cdktf.stringToHclTerraform(struct.thu),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        time_zone: {
            value: cdktf.stringToHclTerraform(struct.timeZone),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tue: {
            value: cdktf.stringToHclTerraform(struct.tue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        wed: {
            value: cdktf.stringToHclTerraform(struct.wed),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustGatewayPolicyScheduleOutputReference extends cdktf.ComplexObject {
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
        if (this._fri !== undefined) {
            hasAnyValues = true;
            internalValueResult.fri = this._fri;
        }
        if (this._mon !== undefined) {
            hasAnyValues = true;
            internalValueResult.mon = this._mon;
        }
        if (this._sat !== undefined) {
            hasAnyValues = true;
            internalValueResult.sat = this._sat;
        }
        if (this._sun !== undefined) {
            hasAnyValues = true;
            internalValueResult.sun = this._sun;
        }
        if (this._thu !== undefined) {
            hasAnyValues = true;
            internalValueResult.thu = this._thu;
        }
        if (this._timeZone !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeZone = this._timeZone;
        }
        if (this._tue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tue = this._tue;
        }
        if (this._wed !== undefined) {
            hasAnyValues = true;
            internalValueResult.wed = this._wed;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fri = undefined;
            this._mon = undefined;
            this._sat = undefined;
            this._sun = undefined;
            this._thu = undefined;
            this._timeZone = undefined;
            this._tue = undefined;
            this._wed = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fri = value.fri;
            this._mon = value.mon;
            this._sat = value.sat;
            this._sun = value.sun;
            this._thu = value.thu;
            this._timeZone = value.timeZone;
            this._tue = value.tue;
            this._wed = value.wed;
        }
    }
    // fri - computed: true, optional: true, required: false
    _fri;
    get fri() {
        return this.getStringAttribute('fri');
    }
    set fri(value) {
        this._fri = value;
    }
    resetFri() {
        this._fri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get friInput() {
        return this._fri;
    }
    // mon - computed: true, optional: true, required: false
    _mon;
    get mon() {
        return this.getStringAttribute('mon');
    }
    set mon(value) {
        this._mon = value;
    }
    resetMon() {
        this._mon = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get monInput() {
        return this._mon;
    }
    // sat - computed: true, optional: true, required: false
    _sat;
    get sat() {
        return this.getStringAttribute('sat');
    }
    set sat(value) {
        this._sat = value;
    }
    resetSat() {
        this._sat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get satInput() {
        return this._sat;
    }
    // sun - computed: true, optional: true, required: false
    _sun;
    get sun() {
        return this.getStringAttribute('sun');
    }
    set sun(value) {
        this._sun = value;
    }
    resetSun() {
        this._sun = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sunInput() {
        return this._sun;
    }
    // thu - computed: true, optional: true, required: false
    _thu;
    get thu() {
        return this.getStringAttribute('thu');
    }
    set thu(value) {
        this._thu = value;
    }
    resetThu() {
        this._thu = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get thuInput() {
        return this._thu;
    }
    // time_zone - computed: true, optional: true, required: false
    _timeZone;
    get timeZone() {
        return this.getStringAttribute('time_zone');
    }
    set timeZone(value) {
        this._timeZone = value;
    }
    resetTimeZone() {
        this._timeZone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get timeZoneInput() {
        return this._timeZone;
    }
    // tue - computed: true, optional: true, required: false
    _tue;
    get tue() {
        return this.getStringAttribute('tue');
    }
    set tue(value) {
        this._tue = value;
    }
    resetTue() {
        this._tue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tueInput() {
        return this._tue;
    }
    // wed - computed: true, optional: true, required: false
    _wed;
    get wed() {
        return this.getStringAttribute('wed');
    }
    set wed(value) {
        this._wed = value;
    }
    resetWed() {
        this._wed = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get wedInput() {
        return this._wed;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy cloudflare_zero_trust_gateway_policy}
*/
export class ZeroTrustGatewayPolicy extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_zero_trust_gateway_policy";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ZeroTrustGatewayPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustGatewayPolicy to import
    * @param importFromId The id of the existing ZeroTrustGatewayPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustGatewayPolicy to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_gateway_policy", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy cloudflare_zero_trust_gateway_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustGatewayPolicyConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_gateway_policy',
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
        this._action = config.action;
        this._description = config.description;
        this._devicePosture = config.devicePosture;
        this._enabled = config.enabled;
        this._expiration.internalValue = config.expiration;
        this._filters = config.filters;
        this._identity = config.identity;
        this._name = config.name;
        this._precedence = config.precedence;
        this._ruleSettings.internalValue = config.ruleSettings;
        this._schedule.internalValue = config.schedule;
        this._traffic = config.traffic;
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
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.getStringAttribute('created_at');
    }
    // deleted_at - computed: true, optional: false, required: false
    get deletedAt() {
        return this.getStringAttribute('deleted_at');
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
    // device_posture - computed: true, optional: true, required: false
    _devicePosture;
    get devicePosture() {
        return this.getStringAttribute('device_posture');
    }
    set devicePosture(value) {
        this._devicePosture = value;
    }
    resetDevicePosture() {
        this._devicePosture = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get devicePostureInput() {
        return this._devicePosture;
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
    // expiration - computed: true, optional: true, required: false
    _expiration = new ZeroTrustGatewayPolicyExpirationOutputReference(this, "expiration");
    get expiration() {
        return this._expiration;
    }
    putExpiration(value) {
        this._expiration.internalValue = value;
    }
    resetExpiration() {
        this._expiration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get expirationInput() {
        return this._expiration.internalValue;
    }
    // filters - computed: true, optional: true, required: false
    _filters;
    get filters() {
        return this.getListAttribute('filters');
    }
    set filters(value) {
        this._filters = value;
    }
    resetFilters() {
        this._filters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get filtersInput() {
        return this._filters;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // identity - computed: true, optional: true, required: false
    _identity;
    get identity() {
        return this.getStringAttribute('identity');
    }
    set identity(value) {
        this._identity = value;
    }
    resetIdentity() {
        this._identity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get identityInput() {
        return this._identity;
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
    // read_only - computed: true, optional: false, required: false
    get readOnly() {
        return this.getBooleanAttribute('read_only');
    }
    // rule_settings - computed: true, optional: true, required: false
    _ruleSettings = new ZeroTrustGatewayPolicyRuleSettingsOutputReference(this, "rule_settings");
    get ruleSettings() {
        return this._ruleSettings;
    }
    putRuleSettings(value) {
        this._ruleSettings.internalValue = value;
    }
    resetRuleSettings() {
        this._ruleSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ruleSettingsInput() {
        return this._ruleSettings.internalValue;
    }
    // schedule - computed: true, optional: true, required: false
    _schedule = new ZeroTrustGatewayPolicyScheduleOutputReference(this, "schedule");
    get schedule() {
        return this._schedule;
    }
    putSchedule(value) {
        this._schedule.internalValue = value;
    }
    resetSchedule() {
        this._schedule.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get scheduleInput() {
        return this._schedule.internalValue;
    }
    // sharable - computed: true, optional: false, required: false
    get sharable() {
        return this.getBooleanAttribute('sharable');
    }
    // source_account - computed: true, optional: false, required: false
    get sourceAccount() {
        return this.getStringAttribute('source_account');
    }
    // traffic - computed: true, optional: true, required: false
    _traffic;
    get traffic() {
        return this.getStringAttribute('traffic');
    }
    set traffic(value) {
        this._traffic = value;
    }
    resetTraffic() {
        this._traffic = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get trafficInput() {
        return this._traffic;
    }
    // updated_at - computed: true, optional: false, required: false
    get updatedAt() {
        return this.getStringAttribute('updated_at');
    }
    // version - computed: true, optional: false, required: false
    get version() {
        return this.getNumberAttribute('version');
    }
    // warning_status - computed: true, optional: false, required: false
    get warningStatus() {
        return this.getStringAttribute('warning_status');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            action: cdktf.stringToTerraform(this._action),
            description: cdktf.stringToTerraform(this._description),
            device_posture: cdktf.stringToTerraform(this._devicePosture),
            enabled: cdktf.booleanToTerraform(this._enabled),
            expiration: zeroTrustGatewayPolicyExpirationToTerraform(this._expiration.internalValue),
            filters: cdktf.listMapper(cdktf.stringToTerraform, false)(this._filters),
            identity: cdktf.stringToTerraform(this._identity),
            name: cdktf.stringToTerraform(this._name),
            precedence: cdktf.numberToTerraform(this._precedence),
            rule_settings: zeroTrustGatewayPolicyRuleSettingsToTerraform(this._ruleSettings.internalValue),
            schedule: zeroTrustGatewayPolicyScheduleToTerraform(this._schedule.internalValue),
            traffic: cdktf.stringToTerraform(this._traffic),
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
            action: {
                value: cdktf.stringToHclTerraform(this._action),
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
            device_posture: {
                value: cdktf.stringToHclTerraform(this._devicePosture),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            enabled: {
                value: cdktf.booleanToHclTerraform(this._enabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            expiration: {
                value: zeroTrustGatewayPolicyExpirationToHclTerraform(this._expiration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ZeroTrustGatewayPolicyExpiration",
            },
            filters: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._filters),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            identity: {
                value: cdktf.stringToHclTerraform(this._identity),
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
            precedence: {
                value: cdktf.numberToHclTerraform(this._precedence),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            rule_settings: {
                value: zeroTrustGatewayPolicyRuleSettingsToHclTerraform(this._ruleSettings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ZeroTrustGatewayPolicyRuleSettings",
            },
            schedule: {
                value: zeroTrustGatewayPolicyScheduleToHclTerraform(this._schedule.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ZeroTrustGatewayPolicySchedule",
            },
            traffic: {
                value: cdktf.stringToHclTerraform(this._traffic),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
