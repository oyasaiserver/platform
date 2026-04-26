import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ZeroTrustGatewayLoggingConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_logging#account_id ZeroTrustGatewayLogging#account_id}
    */
    readonly accountId: string;
    /**
    * Indicate whether to redact personally identifiable information from activity logging (PII fields include source IP, user email, user ID, device ID, URL, referrer, and user agent).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_logging#redact_pii ZeroTrustGatewayLogging#redact_pii}
    */
    readonly redactPii?: boolean | cdktf.IResolvable;
    /**
    * Configure logging settings for each rule type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_logging#settings_by_rule_type ZeroTrustGatewayLogging#settings_by_rule_type}
    */
    readonly settingsByRuleType?: ZeroTrustGatewayLoggingSettingsByRuleType;
}
export interface ZeroTrustGatewayLoggingSettingsByRuleTypeDns {
    /**
    * Specify whether to log all requests to this service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_logging#log_all ZeroTrustGatewayLogging#log_all}
    */
    readonly logAll?: boolean | cdktf.IResolvable;
    /**
    * Specify whether to log only blocking requests to this service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_logging#log_blocks ZeroTrustGatewayLogging#log_blocks}
    */
    readonly logBlocks?: boolean | cdktf.IResolvable;
}
export declare function zeroTrustGatewayLoggingSettingsByRuleTypeDnsToTerraform(struct?: ZeroTrustGatewayLoggingSettingsByRuleTypeDns | cdktf.IResolvable): any;
export declare function zeroTrustGatewayLoggingSettingsByRuleTypeDnsToHclTerraform(struct?: ZeroTrustGatewayLoggingSettingsByRuleTypeDns | cdktf.IResolvable): any;
export declare class ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustGatewayLoggingSettingsByRuleTypeDns | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustGatewayLoggingSettingsByRuleTypeDns | cdktf.IResolvable | undefined);
    private _logAll?;
    get logAll(): boolean | cdktf.IResolvable;
    set logAll(value: boolean | cdktf.IResolvable);
    resetLogAll(): void;
    get logAllInput(): any;
    private _logBlocks?;
    get logBlocks(): boolean | cdktf.IResolvable;
    set logBlocks(value: boolean | cdktf.IResolvable);
    resetLogBlocks(): void;
    get logBlocksInput(): any;
}
export interface ZeroTrustGatewayLoggingSettingsByRuleTypeHttp {
    /**
    * Specify whether to log all requests to this service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_logging#log_all ZeroTrustGatewayLogging#log_all}
    */
    readonly logAll?: boolean | cdktf.IResolvable;
    /**
    * Specify whether to log only blocking requests to this service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_logging#log_blocks ZeroTrustGatewayLogging#log_blocks}
    */
    readonly logBlocks?: boolean | cdktf.IResolvable;
}
export declare function zeroTrustGatewayLoggingSettingsByRuleTypeHttpToTerraform(struct?: ZeroTrustGatewayLoggingSettingsByRuleTypeHttp | cdktf.IResolvable): any;
export declare function zeroTrustGatewayLoggingSettingsByRuleTypeHttpToHclTerraform(struct?: ZeroTrustGatewayLoggingSettingsByRuleTypeHttp | cdktf.IResolvable): any;
export declare class ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustGatewayLoggingSettingsByRuleTypeHttp | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustGatewayLoggingSettingsByRuleTypeHttp | cdktf.IResolvable | undefined);
    private _logAll?;
    get logAll(): boolean | cdktf.IResolvable;
    set logAll(value: boolean | cdktf.IResolvable);
    resetLogAll(): void;
    get logAllInput(): any;
    private _logBlocks?;
    get logBlocks(): boolean | cdktf.IResolvable;
    set logBlocks(value: boolean | cdktf.IResolvable);
    resetLogBlocks(): void;
    get logBlocksInput(): any;
}
export interface ZeroTrustGatewayLoggingSettingsByRuleTypeL4 {
    /**
    * Specify whether to log all requests to this service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_logging#log_all ZeroTrustGatewayLogging#log_all}
    */
    readonly logAll?: boolean | cdktf.IResolvable;
    /**
    * Specify whether to log only blocking requests to this service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_logging#log_blocks ZeroTrustGatewayLogging#log_blocks}
    */
    readonly logBlocks?: boolean | cdktf.IResolvable;
}
export declare function zeroTrustGatewayLoggingSettingsByRuleTypeL4ToTerraform(struct?: ZeroTrustGatewayLoggingSettingsByRuleTypeL4 | cdktf.IResolvable): any;
export declare function zeroTrustGatewayLoggingSettingsByRuleTypeL4ToHclTerraform(struct?: ZeroTrustGatewayLoggingSettingsByRuleTypeL4 | cdktf.IResolvable): any;
export declare class ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustGatewayLoggingSettingsByRuleTypeL4 | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustGatewayLoggingSettingsByRuleTypeL4 | cdktf.IResolvable | undefined);
    private _logAll?;
    get logAll(): boolean | cdktf.IResolvable;
    set logAll(value: boolean | cdktf.IResolvable);
    resetLogAll(): void;
    get logAllInput(): any;
    private _logBlocks?;
    get logBlocks(): boolean | cdktf.IResolvable;
    set logBlocks(value: boolean | cdktf.IResolvable);
    resetLogBlocks(): void;
    get logBlocksInput(): any;
}
export interface ZeroTrustGatewayLoggingSettingsByRuleType {
    /**
    * Configure logging settings for DNS firewall.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_logging#dns ZeroTrustGatewayLogging#dns}
    */
    readonly dns?: ZeroTrustGatewayLoggingSettingsByRuleTypeDns;
    /**
    * Configure logging settings for HTTP/HTTPS firewall.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_logging#http ZeroTrustGatewayLogging#http}
    */
    readonly http?: ZeroTrustGatewayLoggingSettingsByRuleTypeHttp;
    /**
    * Configure logging settings for Network firewall.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_logging#l4 ZeroTrustGatewayLogging#l4}
    */
    readonly l4?: ZeroTrustGatewayLoggingSettingsByRuleTypeL4;
}
export declare function zeroTrustGatewayLoggingSettingsByRuleTypeToTerraform(struct?: ZeroTrustGatewayLoggingSettingsByRuleType | cdktf.IResolvable): any;
export declare function zeroTrustGatewayLoggingSettingsByRuleTypeToHclTerraform(struct?: ZeroTrustGatewayLoggingSettingsByRuleType | cdktf.IResolvable): any;
export declare class ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustGatewayLoggingSettingsByRuleType | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustGatewayLoggingSettingsByRuleType | cdktf.IResolvable | undefined);
    private _dns;
    get dns(): ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference;
    putDns(value: ZeroTrustGatewayLoggingSettingsByRuleTypeDns): void;
    resetDns(): void;
    get dnsInput(): any;
    private _http;
    get http(): ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference;
    putHttp(value: ZeroTrustGatewayLoggingSettingsByRuleTypeHttp): void;
    resetHttp(): void;
    get httpInput(): any;
    private _l4;
    get l4(): ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference;
    putL4(value: ZeroTrustGatewayLoggingSettingsByRuleTypeL4): void;
    resetL4(): void;
    get l4Input(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_logging cloudflare_zero_trust_gateway_logging}
*/
export declare class ZeroTrustGatewayLogging extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_zero_trust_gateway_logging";
    /**
    * Generates CDKTF code for importing a ZeroTrustGatewayLogging resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustGatewayLogging to import
    * @param importFromId The id of the existing ZeroTrustGatewayLogging that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_logging#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustGatewayLogging to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_logging cloudflare_zero_trust_gateway_logging} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustGatewayLoggingConfig
    */
    constructor(scope: Construct, id: string, config: ZeroTrustGatewayLoggingConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    get accountIdInput(): string;
    get id(): any;
    private _redactPii?;
    get redactPii(): boolean | cdktf.IResolvable;
    set redactPii(value: boolean | cdktf.IResolvable);
    resetRedactPii(): void;
    get redactPiiInput(): any;
    private _settingsByRuleType;
    get settingsByRuleType(): ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference;
    putSettingsByRuleType(value: ZeroTrustGatewayLoggingSettingsByRuleType): void;
    resetSettingsByRuleType(): void;
    get settingsByRuleTypeInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
