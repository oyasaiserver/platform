// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_logging
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function zeroTrustGatewayLoggingSettingsByRuleTypeDnsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        log_all: cdktf.booleanToTerraform(struct.logAll),
        log_blocks: cdktf.booleanToTerraform(struct.logBlocks),
    };
}
export function zeroTrustGatewayLoggingSettingsByRuleTypeDnsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        log_all: {
            value: cdktf.booleanToHclTerraform(struct.logAll),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        log_blocks: {
            value: cdktf.booleanToHclTerraform(struct.logBlocks),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference extends cdktf.ComplexObject {
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
        if (this._logAll !== undefined) {
            hasAnyValues = true;
            internalValueResult.logAll = this._logAll;
        }
        if (this._logBlocks !== undefined) {
            hasAnyValues = true;
            internalValueResult.logBlocks = this._logBlocks;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._logAll = undefined;
            this._logBlocks = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._logAll = value.logAll;
            this._logBlocks = value.logBlocks;
        }
    }
    // log_all - computed: true, optional: true, required: false
    _logAll;
    get logAll() {
        return this.getBooleanAttribute('log_all');
    }
    set logAll(value) {
        this._logAll = value;
    }
    resetLogAll() {
        this._logAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get logAllInput() {
        return this._logAll;
    }
    // log_blocks - computed: true, optional: true, required: false
    _logBlocks;
    get logBlocks() {
        return this.getBooleanAttribute('log_blocks');
    }
    set logBlocks(value) {
        this._logBlocks = value;
    }
    resetLogBlocks() {
        this._logBlocks = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get logBlocksInput() {
        return this._logBlocks;
    }
}
export function zeroTrustGatewayLoggingSettingsByRuleTypeHttpToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        log_all: cdktf.booleanToTerraform(struct.logAll),
        log_blocks: cdktf.booleanToTerraform(struct.logBlocks),
    };
}
export function zeroTrustGatewayLoggingSettingsByRuleTypeHttpToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        log_all: {
            value: cdktf.booleanToHclTerraform(struct.logAll),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        log_blocks: {
            value: cdktf.booleanToHclTerraform(struct.logBlocks),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference extends cdktf.ComplexObject {
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
        if (this._logAll !== undefined) {
            hasAnyValues = true;
            internalValueResult.logAll = this._logAll;
        }
        if (this._logBlocks !== undefined) {
            hasAnyValues = true;
            internalValueResult.logBlocks = this._logBlocks;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._logAll = undefined;
            this._logBlocks = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._logAll = value.logAll;
            this._logBlocks = value.logBlocks;
        }
    }
    // log_all - computed: true, optional: true, required: false
    _logAll;
    get logAll() {
        return this.getBooleanAttribute('log_all');
    }
    set logAll(value) {
        this._logAll = value;
    }
    resetLogAll() {
        this._logAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get logAllInput() {
        return this._logAll;
    }
    // log_blocks - computed: true, optional: true, required: false
    _logBlocks;
    get logBlocks() {
        return this.getBooleanAttribute('log_blocks');
    }
    set logBlocks(value) {
        this._logBlocks = value;
    }
    resetLogBlocks() {
        this._logBlocks = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get logBlocksInput() {
        return this._logBlocks;
    }
}
export function zeroTrustGatewayLoggingSettingsByRuleTypeL4ToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        log_all: cdktf.booleanToTerraform(struct.logAll),
        log_blocks: cdktf.booleanToTerraform(struct.logBlocks),
    };
}
export function zeroTrustGatewayLoggingSettingsByRuleTypeL4ToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        log_all: {
            value: cdktf.booleanToHclTerraform(struct.logAll),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        log_blocks: {
            value: cdktf.booleanToHclTerraform(struct.logBlocks),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference extends cdktf.ComplexObject {
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
        if (this._logAll !== undefined) {
            hasAnyValues = true;
            internalValueResult.logAll = this._logAll;
        }
        if (this._logBlocks !== undefined) {
            hasAnyValues = true;
            internalValueResult.logBlocks = this._logBlocks;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._logAll = undefined;
            this._logBlocks = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._logAll = value.logAll;
            this._logBlocks = value.logBlocks;
        }
    }
    // log_all - computed: true, optional: true, required: false
    _logAll;
    get logAll() {
        return this.getBooleanAttribute('log_all');
    }
    set logAll(value) {
        this._logAll = value;
    }
    resetLogAll() {
        this._logAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get logAllInput() {
        return this._logAll;
    }
    // log_blocks - computed: true, optional: true, required: false
    _logBlocks;
    get logBlocks() {
        return this.getBooleanAttribute('log_blocks');
    }
    set logBlocks(value) {
        this._logBlocks = value;
    }
    resetLogBlocks() {
        this._logBlocks = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get logBlocksInput() {
        return this._logBlocks;
    }
}
export function zeroTrustGatewayLoggingSettingsByRuleTypeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        dns: zeroTrustGatewayLoggingSettingsByRuleTypeDnsToTerraform(struct.dns),
        http: zeroTrustGatewayLoggingSettingsByRuleTypeHttpToTerraform(struct.http),
        l4: zeroTrustGatewayLoggingSettingsByRuleTypeL4ToTerraform(struct.l4),
    };
}
export function zeroTrustGatewayLoggingSettingsByRuleTypeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        dns: {
            value: zeroTrustGatewayLoggingSettingsByRuleTypeDnsToHclTerraform(struct.dns),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustGatewayLoggingSettingsByRuleTypeDns",
        },
        http: {
            value: zeroTrustGatewayLoggingSettingsByRuleTypeHttpToHclTerraform(struct.http),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustGatewayLoggingSettingsByRuleTypeHttp",
        },
        l4: {
            value: zeroTrustGatewayLoggingSettingsByRuleTypeL4ToHclTerraform(struct.l4),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustGatewayLoggingSettingsByRuleTypeL4",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference extends cdktf.ComplexObject {
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
        if (this._dns?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dns = this._dns?.internalValue;
        }
        if (this._http?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.http = this._http?.internalValue;
        }
        if (this._l4?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.l4 = this._l4?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dns.internalValue = undefined;
            this._http.internalValue = undefined;
            this._l4.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dns.internalValue = value.dns;
            this._http.internalValue = value.http;
            this._l4.internalValue = value.l4;
        }
    }
    // dns - computed: true, optional: true, required: false
    _dns = new ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference(this, "dns");
    get dns() {
        return this._dns;
    }
    putDns(value) {
        this._dns.internalValue = value;
    }
    resetDns() {
        this._dns.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dnsInput() {
        return this._dns.internalValue;
    }
    // http - computed: true, optional: true, required: false
    _http = new ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference(this, "http");
    get http() {
        return this._http;
    }
    putHttp(value) {
        this._http.internalValue = value;
    }
    resetHttp() {
        this._http.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get httpInput() {
        return this._http.internalValue;
    }
    // l4 - computed: true, optional: true, required: false
    _l4 = new ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference(this, "l4");
    get l4() {
        return this._l4;
    }
    putL4(value) {
        this._l4.internalValue = value;
    }
    resetL4() {
        this._l4.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get l4Input() {
        return this._l4.internalValue;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_logging cloudflare_zero_trust_gateway_logging}
*/
export class ZeroTrustGatewayLogging extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_zero_trust_gateway_logging";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ZeroTrustGatewayLogging resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustGatewayLogging to import
    * @param importFromId The id of the existing ZeroTrustGatewayLogging that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_logging#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustGatewayLogging to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_gateway_logging", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_logging cloudflare_zero_trust_gateway_logging} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustGatewayLoggingConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_gateway_logging',
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
        this._redactPii = config.redactPii;
        this._settingsByRuleType.internalValue = config.settingsByRuleType;
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
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // redact_pii - computed: true, optional: true, required: false
    _redactPii;
    get redactPii() {
        return this.getBooleanAttribute('redact_pii');
    }
    set redactPii(value) {
        this._redactPii = value;
    }
    resetRedactPii() {
        this._redactPii = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get redactPiiInput() {
        return this._redactPii;
    }
    // settings_by_rule_type - computed: true, optional: true, required: false
    _settingsByRuleType = new ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference(this, "settings_by_rule_type");
    get settingsByRuleType() {
        return this._settingsByRuleType;
    }
    putSettingsByRuleType(value) {
        this._settingsByRuleType.internalValue = value;
    }
    resetSettingsByRuleType() {
        this._settingsByRuleType.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get settingsByRuleTypeInput() {
        return this._settingsByRuleType.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            redact_pii: cdktf.booleanToTerraform(this._redactPii),
            settings_by_rule_type: zeroTrustGatewayLoggingSettingsByRuleTypeToTerraform(this._settingsByRuleType.internalValue),
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
            redact_pii: {
                value: cdktf.booleanToHclTerraform(this._redactPii),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            settings_by_rule_type: {
                value: zeroTrustGatewayLoggingSettingsByRuleTypeToHclTerraform(this._settingsByRuleType.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ZeroTrustGatewayLoggingSettingsByRuleType",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
