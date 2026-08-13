// https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/zero_trust_dlp_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZeroTrustDlpSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/zero_trust_dlp_settings#account_id ZeroTrustDlpSettings#account_id}
  */
  readonly accountId: string;
  /**
  * Whether AI context analysis is enabled at the account level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/zero_trust_dlp_settings#ai_context_analysis ZeroTrustDlpSettings#ai_context_analysis}
  */
  readonly aiContextAnalysis?: boolean | cdktf.IResolvable;
  /**
  * Whether OCR is enabled at the account level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/zero_trust_dlp_settings#ocr ZeroTrustDlpSettings#ocr}
  */
  readonly ocr?: boolean | cdktf.IResolvable;
  /**
  * Request model for payload log settings within the DLP settings endpoint.
  * Unlike the legacy endpoint, null and missing are treated identically here
  * (both mean "not provided" for PATCH, "reset to default" for PUT).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/zero_trust_dlp_settings#payload_logging ZeroTrustDlpSettings#payload_logging}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/zero_trust_dlp_settings#masking_level ZeroTrustDlpSettings#masking_level}
  */
  readonly maskingLevel?: string;
  /**
  * Base64-encoded public key for encrypting payload logs.
  * 
  * - Set to a non-empty base64 string to enable payload logging with the given key.
  * - Set to an empty string to disable payload logging.
  * - Omit or set to null to leave unchanged (PATCH) or reset to disabled (PUT).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/zero_trust_dlp_settings#public_key ZeroTrustDlpSettings#public_key}
  */
  readonly publicKey?: string;
}

export function zeroTrustDlpSettingsPayloadLoggingToTerraform(struct?: ZeroTrustDlpSettingsPayloadLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    masking_level: cdktf.stringToTerraform(struct!.maskingLevel),
    public_key: cdktf.stringToTerraform(struct!.publicKey),
  }
}


export function zeroTrustDlpSettingsPayloadLoggingToHclTerraform(struct?: ZeroTrustDlpSettingsPayloadLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    masking_level: {
      value: cdktf.stringToHclTerraform(struct!.maskingLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_key: {
      value: cdktf.stringToHclTerraform(struct!.publicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustDlpSettingsPayloadLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustDlpSettingsPayloadLogging | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maskingLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.maskingLevel = this._maskingLevel;
    }
    if (this._publicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKey = this._publicKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustDlpSettingsPayloadLogging | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maskingLevel = undefined;
      this._publicKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maskingLevel = value.maskingLevel;
      this._publicKey = value.publicKey;
    }
  }

  // masking_level - computed: true, optional: true, required: false
  private _maskingLevel?: string; 
  public get maskingLevel() {
    return this.getStringAttribute('masking_level');
  }
  public set maskingLevel(value: string) {
    this._maskingLevel = value;
  }
  public resetMaskingLevel() {
    this._maskingLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskingLevelInput() {
    return this._maskingLevel;
  }

  // public_key - computed: true, optional: true, required: false
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  public resetPublicKey() {
    this._publicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/zero_trust_dlp_settings cloudflare_zero_trust_dlp_settings}
*/
export class ZeroTrustDlpSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_dlp_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZeroTrustDlpSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZeroTrustDlpSettings to import
  * @param importFromId The id of the existing ZeroTrustDlpSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/zero_trust_dlp_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZeroTrustDlpSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_dlp_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/zero_trust_dlp_settings cloudflare_zero_trust_dlp_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZeroTrustDlpSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: ZeroTrustDlpSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_dlp_settings',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.22.0'
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
    this._aiContextAnalysis = config.aiContextAnalysis;
    this._ocr = config.ocr;
    this._payloadLogging.internalValue = config.payloadLogging;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // ai_context_analysis - computed: true, optional: true, required: false
  private _aiContextAnalysis?: boolean | cdktf.IResolvable; 
  public get aiContextAnalysis() {
    return this.getBooleanAttribute('ai_context_analysis');
  }
  public set aiContextAnalysis(value: boolean | cdktf.IResolvable) {
    this._aiContextAnalysis = value;
  }
  public resetAiContextAnalysis() {
    this._aiContextAnalysis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aiContextAnalysisInput() {
    return this._aiContextAnalysis;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ocr - computed: true, optional: true, required: false
  private _ocr?: boolean | cdktf.IResolvable; 
  public get ocr() {
    return this.getBooleanAttribute('ocr');
  }
  public set ocr(value: boolean | cdktf.IResolvable) {
    this._ocr = value;
  }
  public resetOcr() {
    this._ocr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocrInput() {
    return this._ocr;
  }

  // payload_logging - computed: true, optional: true, required: false
  private _payloadLogging = new ZeroTrustDlpSettingsPayloadLoggingOutputReference(this, "payload_logging");
  public get payloadLogging() {
    return this._payloadLogging;
  }
  public putPayloadLogging(value: ZeroTrustDlpSettingsPayloadLogging) {
    this._payloadLogging.internalValue = value;
  }
  public resetPayloadLogging() {
    this._payloadLogging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadLoggingInput() {
    return this._payloadLogging.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      ai_context_analysis: cdktf.booleanToTerraform(this._aiContextAnalysis),
      ocr: cdktf.booleanToTerraform(this._ocr),
      payload_logging: zeroTrustDlpSettingsPayloadLoggingToTerraform(this._payloadLogging.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ai_context_analysis: {
        value: cdktf.booleanToHclTerraform(this._aiContextAnalysis),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ocr: {
        value: cdktf.booleanToHclTerraform(this._ocr),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      payload_logging: {
        value: zeroTrustDlpSettingsPayloadLoggingToHclTerraform(this._payloadLogging.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ZeroTrustDlpSettingsPayloadLogging",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
