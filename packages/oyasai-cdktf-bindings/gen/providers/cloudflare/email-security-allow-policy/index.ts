// https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EmailSecurityAllowPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#account_id EmailSecurityAllowPolicy#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#comments EmailSecurityAllowPolicy#comments}
  */
  readonly comments?: string;
  /**
  * Exempts messages from this sender from Spam, Spoof and Bulk dispositions only; Malicious and Suspicious dispositions still apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#is_acceptable_sender EmailSecurityAllowPolicy#is_acceptable_sender}
  */
  readonly isAcceptableSender: boolean | cdktf.IResolvable;
  /**
  * Bypasses all detections for messages to this recipient.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#is_exempt_recipient EmailSecurityAllowPolicy#is_exempt_recipient}
  */
  readonly isExemptRecipient: boolean | cdktf.IResolvable;
  /**
  * Deprecated as of July 1, 2025. Use `is_exempt_recipient` instead. End of life: July 1, 2026.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#is_recipient EmailSecurityAllowPolicy#is_recipient}
  */
  readonly isRecipient?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#is_regex EmailSecurityAllowPolicy#is_regex}
  */
  readonly isRegex: boolean | cdktf.IResolvable;
  /**
  * Deprecated as of July 1, 2025. Use `is_trusted_sender` instead. End of life: July 1, 2026.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#is_sender EmailSecurityAllowPolicy#is_sender}
  */
  readonly isSender?: boolean | cdktf.IResolvable;
  /**
  * Deprecated as of July 1, 2025. Use `is_acceptable_sender` instead. End of life: July 1, 2026.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#is_spoof EmailSecurityAllowPolicy#is_spoof}
  */
  readonly isSpoof?: boolean | cdktf.IResolvable;
  /**
  * Bypasses all detections and link following for messages from this sender.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#is_trusted_sender EmailSecurityAllowPolicy#is_trusted_sender}
  */
  readonly isTrustedSender: boolean | cdktf.IResolvable;
  /**
  * The pattern value to match. The format depends on `pattern_type`: a valid email address for EMAIL (e.g. `user@example.com`), a valid domain name for DOMAIN (e.g. `example.com`), or a plain IPv4 or IPv6 address or CIDR block for IP (e.g. `1.2.3.4`, `1.2.3.0/24`, `2606:4700:4700::1111`, or `2606:4700:4700::/48`); the API rejects private or unique-local, loopback, link-local, unspecified, and IPv4 broadcast addresses, including their IPv4-mapped IPv6 equivalents.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#pattern EmailSecurityAllowPolicy#pattern}
  */
  readonly pattern: string;
  /**
  * Type of pattern matching.
  * - EMAIL: matches a full email address (e.g. `user@example.com`)
  * - DOMAIN: matches a domain name (e.g. `example.com`)
  * - IP: matches a plain IPv4 or IPv6 address (e.g. `1.2.3.4` or `2606:4700:4700::1111`) or CIDR block (e.g. `1.2.3.0/24` or `2606:4700:4700::/48`). The API rejects private or unique-local, loopback, link-local, unspecified, and IPv4 broadcast addresses, including their IPv4-mapped IPv6 equivalents.
  * - UNKNOWN: deprecated; you cannot use this when creating or updating policies, but it may appear on existing entries.
  * Available values: "EMAIL", "DOMAIN", "IP", "UNKNOWN".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#pattern_type EmailSecurityAllowPolicy#pattern_type}
  */
  readonly patternType: string;
  /**
  * Enforce DMARC, SPF or DKIM authentication. When on, Email Security only honors policies that pass authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#verify_sender EmailSecurityAllowPolicy#verify_sender}
  */
  readonly verifySender: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy cloudflare_email_security_allow_policy}
*/
export class EmailSecurityAllowPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_email_security_allow_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EmailSecurityAllowPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EmailSecurityAllowPolicy to import
  * @param importFromId The id of the existing EmailSecurityAllowPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EmailSecurityAllowPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_email_security_allow_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy cloudflare_email_security_allow_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EmailSecurityAllowPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: EmailSecurityAllowPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_email_security_allow_policy',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.25.0'
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
    this._comments = config.comments;
    this._isAcceptableSender = config.isAcceptableSender;
    this._isExemptRecipient = config.isExemptRecipient;
    this._isRecipient = config.isRecipient;
    this._isRegex = config.isRegex;
    this._isSender = config.isSender;
    this._isSpoof = config.isSpoof;
    this._isTrustedSender = config.isTrustedSender;
    this._pattern = config.pattern;
    this._patternType = config.patternType;
    this._verifySender = config.verifySender;
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

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_acceptable_sender - computed: false, optional: false, required: true
  private _isAcceptableSender?: boolean | cdktf.IResolvable; 
  public get isAcceptableSender() {
    return this.getBooleanAttribute('is_acceptable_sender');
  }
  public set isAcceptableSender(value: boolean | cdktf.IResolvable) {
    this._isAcceptableSender = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isAcceptableSenderInput() {
    return this._isAcceptableSender;
  }

  // is_exempt_recipient - computed: false, optional: false, required: true
  private _isExemptRecipient?: boolean | cdktf.IResolvable; 
  public get isExemptRecipient() {
    return this.getBooleanAttribute('is_exempt_recipient');
  }
  public set isExemptRecipient(value: boolean | cdktf.IResolvable) {
    this._isExemptRecipient = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isExemptRecipientInput() {
    return this._isExemptRecipient;
  }

  // is_recipient - computed: false, optional: true, required: false
  private _isRecipient?: boolean | cdktf.IResolvable; 
  public get isRecipient() {
    return this.getBooleanAttribute('is_recipient');
  }
  public set isRecipient(value: boolean | cdktf.IResolvable) {
    this._isRecipient = value;
  }
  public resetIsRecipient() {
    this._isRecipient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRecipientInput() {
    return this._isRecipient;
  }

  // is_regex - computed: false, optional: false, required: true
  private _isRegex?: boolean | cdktf.IResolvable; 
  public get isRegex() {
    return this.getBooleanAttribute('is_regex');
  }
  public set isRegex(value: boolean | cdktf.IResolvable) {
    this._isRegex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isRegexInput() {
    return this._isRegex;
  }

  // is_sender - computed: false, optional: true, required: false
  private _isSender?: boolean | cdktf.IResolvable; 
  public get isSender() {
    return this.getBooleanAttribute('is_sender');
  }
  public set isSender(value: boolean | cdktf.IResolvable) {
    this._isSender = value;
  }
  public resetIsSender() {
    this._isSender = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSenderInput() {
    return this._isSender;
  }

  // is_spoof - computed: false, optional: true, required: false
  private _isSpoof?: boolean | cdktf.IResolvable; 
  public get isSpoof() {
    return this.getBooleanAttribute('is_spoof');
  }
  public set isSpoof(value: boolean | cdktf.IResolvable) {
    this._isSpoof = value;
  }
  public resetIsSpoof() {
    this._isSpoof = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSpoofInput() {
    return this._isSpoof;
  }

  // is_trusted_sender - computed: false, optional: false, required: true
  private _isTrustedSender?: boolean | cdktf.IResolvable; 
  public get isTrustedSender() {
    return this.getBooleanAttribute('is_trusted_sender');
  }
  public set isTrustedSender(value: boolean | cdktf.IResolvable) {
    this._isTrustedSender = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isTrustedSenderInput() {
    return this._isTrustedSender;
  }

  // last_modified - computed: true, optional: false, required: false
  public get lastModified() {
    return this.getStringAttribute('last_modified');
  }

  // modified_at - computed: true, optional: false, required: false
  public get modifiedAt() {
    return this.getStringAttribute('modified_at');
  }

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // pattern_type - computed: false, optional: false, required: true
  private _patternType?: string; 
  public get patternType() {
    return this.getStringAttribute('pattern_type');
  }
  public set patternType(value: string) {
    this._patternType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternTypeInput() {
    return this._patternType;
  }

  // verify_sender - computed: false, optional: false, required: true
  private _verifySender?: boolean | cdktf.IResolvable; 
  public get verifySender() {
    return this.getBooleanAttribute('verify_sender');
  }
  public set verifySender(value: boolean | cdktf.IResolvable) {
    this._verifySender = value;
  }
  // Temporarily expose input value. Use with caution.
  public get verifySenderInput() {
    return this._verifySender;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      comments: cdktf.stringToTerraform(this._comments),
      is_acceptable_sender: cdktf.booleanToTerraform(this._isAcceptableSender),
      is_exempt_recipient: cdktf.booleanToTerraform(this._isExemptRecipient),
      is_recipient: cdktf.booleanToTerraform(this._isRecipient),
      is_regex: cdktf.booleanToTerraform(this._isRegex),
      is_sender: cdktf.booleanToTerraform(this._isSender),
      is_spoof: cdktf.booleanToTerraform(this._isSpoof),
      is_trusted_sender: cdktf.booleanToTerraform(this._isTrustedSender),
      pattern: cdktf.stringToTerraform(this._pattern),
      pattern_type: cdktf.stringToTerraform(this._patternType),
      verify_sender: cdktf.booleanToTerraform(this._verifySender),
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
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_acceptable_sender: {
        value: cdktf.booleanToHclTerraform(this._isAcceptableSender),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_exempt_recipient: {
        value: cdktf.booleanToHclTerraform(this._isExemptRecipient),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_recipient: {
        value: cdktf.booleanToHclTerraform(this._isRecipient),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_regex: {
        value: cdktf.booleanToHclTerraform(this._isRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_sender: {
        value: cdktf.booleanToHclTerraform(this._isSender),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_spoof: {
        value: cdktf.booleanToHclTerraform(this._isSpoof),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_trusted_sender: {
        value: cdktf.booleanToHclTerraform(this._isTrustedSender),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      pattern: {
        value: cdktf.stringToHclTerraform(this._pattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pattern_type: {
        value: cdktf.stringToHclTerraform(this._patternType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      verify_sender: {
        value: cdktf.booleanToHclTerraform(this._verifySender),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
