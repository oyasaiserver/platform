import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ZeroTrustDlpSettingsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_settings#account_id ZeroTrustDlpSettings#account_id}
    */
    readonly accountId: string;
    /**
    * Whether AI context analysis is enabled at the account level.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_settings#ai_context_analysis ZeroTrustDlpSettings#ai_context_analysis}
    */
    readonly aiContextAnalysis?: boolean | cdktf.IResolvable;
    /**
    * Whether OCR is enabled at the account level.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_settings#ocr ZeroTrustDlpSettings#ocr}
    */
    readonly ocr?: boolean | cdktf.IResolvable;
    /**
    * Request model for payload log settings within the DLP settings endpoint.
    * Unlike the legacy endpoint, null and missing are treated identically here
    * (both mean "not provided" for PATCH, "reset to default" for PUT).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_settings#payload_logging ZeroTrustDlpSettings#payload_logging}
    */
    readonly payloadLogging?: ZeroTrustDlpSettingsPayloadLogging;
}
export interface ZeroTrustDlpSettingsPayloadLogging {
    /**
    * Masking level for payload logs.
    *
    * - `full`: The entire payload is masked.
    * - `partial`: Only partial payload content is masked.
    * - `clear`: No masking is applied to the payload content.
    * - `default`: DLP uses its default masking behavior.
    * Available values: "full", "partial", "clear", "default".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_settings#masking_level ZeroTrustDlpSettings#masking_level}
    */
    readonly maskingLevel?: string;
    /**
    * Base64-encoded public key for encrypting payload logs.
    *
    * - Set to a non-empty base64 string to enable payload logging with the given key.
    * - Set to an empty string to disable payload logging.
    * - Omit or set to null to leave unchanged (PATCH) or reset to disabled (PUT).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_settings#public_key ZeroTrustDlpSettings#public_key}
    */
    readonly publicKey?: string;
}
export declare function zeroTrustDlpSettingsPayloadLoggingToTerraform(struct?: ZeroTrustDlpSettingsPayloadLogging | cdktf.IResolvable): any;
export declare function zeroTrustDlpSettingsPayloadLoggingToHclTerraform(struct?: ZeroTrustDlpSettingsPayloadLogging | cdktf.IResolvable): any;
export declare class ZeroTrustDlpSettingsPayloadLoggingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustDlpSettingsPayloadLogging | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustDlpSettingsPayloadLogging | cdktf.IResolvable | undefined);
    private _maskingLevel?;
    get maskingLevel(): string;
    set maskingLevel(value: string);
    resetMaskingLevel(): void;
    get maskingLevelInput(): string;
    private _publicKey?;
    get publicKey(): string;
    set publicKey(value: string);
    resetPublicKey(): void;
    get publicKeyInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_settings cloudflare_zero_trust_dlp_settings}
*/
export declare class ZeroTrustDlpSettings extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_zero_trust_dlp_settings";
    /**
    * Generates CDKTF code for importing a ZeroTrustDlpSettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustDlpSettings to import
    * @param importFromId The id of the existing ZeroTrustDlpSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustDlpSettings to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_settings cloudflare_zero_trust_dlp_settings} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustDlpSettingsConfig
    */
    constructor(scope: Construct, id: string, config: ZeroTrustDlpSettingsConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    get accountIdInput(): string;
    private _aiContextAnalysis?;
    get aiContextAnalysis(): boolean | cdktf.IResolvable;
    set aiContextAnalysis(value: boolean | cdktf.IResolvable);
    resetAiContextAnalysis(): void;
    get aiContextAnalysisInput(): any;
    get id(): any;
    private _ocr?;
    get ocr(): boolean | cdktf.IResolvable;
    set ocr(value: boolean | cdktf.IResolvable);
    resetOcr(): void;
    get ocrInput(): any;
    private _payloadLogging;
    get payloadLogging(): ZeroTrustDlpSettingsPayloadLoggingOutputReference;
    putPayloadLogging(value: ZeroTrustDlpSettingsPayloadLogging): void;
    resetPayloadLogging(): void;
    get payloadLoggingInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
