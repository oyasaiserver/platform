// https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareEmailSecurityAllowPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#account_id DataCloudflareEmailSecurityAllowPolicy#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#filter DataCloudflareEmailSecurityAllowPolicy#filter}
  */
  readonly filter?: DataCloudflareEmailSecurityAllowPolicyFilter;
  /**
  * Allow policy identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#policy_id DataCloudflareEmailSecurityAllowPolicy#policy_id}
  */
  readonly policyId?: string;
}
export interface DataCloudflareEmailSecurityAllowPolicyFilter {
  /**
  * The sorting direction.
  * Available values: "asc", "desc".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#direction DataCloudflareEmailSecurityAllowPolicy#direction}
  */
  readonly direction?: string;
  /**
  * Filter to show only policies where messages from the sender are exempted from Spam, Spoof, and Bulk dispositions (not Malicious or Suspicious).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#is_acceptable_sender DataCloudflareEmailSecurityAllowPolicy#is_acceptable_sender}
  */
  readonly isAcceptableSender?: boolean | cdktf.IResolvable;
  /**
  * Filter to show only policies where messages to the recipient bypass all detections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#is_exempt_recipient DataCloudflareEmailSecurityAllowPolicy#is_exempt_recipient}
  */
  readonly isExemptRecipient?: boolean | cdktf.IResolvable;
  /**
  * Filter to show only policies where messages from the sender bypass all detections and link following.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#is_trusted_sender DataCloudflareEmailSecurityAllowPolicy#is_trusted_sender}
  */
  readonly isTrustedSender?: boolean | cdktf.IResolvable;
  /**
  * Field to sort by.
  * Available values: "pattern", "created_at".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#order DataCloudflareEmailSecurityAllowPolicy#order}
  */
  readonly order?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#pattern DataCloudflareEmailSecurityAllowPolicy#pattern}
  */
  readonly pattern?: string;
  /**
  * Type of pattern matching.
  * - EMAIL: matches a full email address (e.g. `user@example.com`)
  * - DOMAIN: matches a domain name (e.g. `example.com`)
  * - IP: matches a plain IPv4 or IPv6 address (e.g. `1.2.3.4` or `2606:4700:4700::1111`) or CIDR block (e.g. `1.2.3.0/24` or `2606:4700:4700::/48`). The API rejects private or unique-local, loopback, link-local, unspecified, and IPv4 broadcast addresses, including their IPv4-mapped IPv6 equivalents.
  * - UNKNOWN: deprecated; you cannot use this when creating or updating policies, but it may appear on existing entries.
  * Available values: "EMAIL", "DOMAIN", "IP", "UNKNOWN".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#pattern_type DataCloudflareEmailSecurityAllowPolicy#pattern_type}
  */
  readonly patternType?: string;
  /**
  * Search term for filtering records. Behavior may change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#search DataCloudflareEmailSecurityAllowPolicy#search}
  */
  readonly search?: string;
  /**
  * Filter to show only policies that enforce DMARC, SPF, or DKIM authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#verify_sender DataCloudflareEmailSecurityAllowPolicy#verify_sender}
  */
  readonly verifySender?: boolean | cdktf.IResolvable;
}

export function dataCloudflareEmailSecurityAllowPolicyFilterToTerraform(struct?: DataCloudflareEmailSecurityAllowPolicyFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    is_acceptable_sender: cdktf.booleanToTerraform(struct!.isAcceptableSender),
    is_exempt_recipient: cdktf.booleanToTerraform(struct!.isExemptRecipient),
    is_trusted_sender: cdktf.booleanToTerraform(struct!.isTrustedSender),
    order: cdktf.stringToTerraform(struct!.order),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    pattern_type: cdktf.stringToTerraform(struct!.patternType),
    search: cdktf.stringToTerraform(struct!.search),
    verify_sender: cdktf.booleanToTerraform(struct!.verifySender),
  }
}


export function dataCloudflareEmailSecurityAllowPolicyFilterToHclTerraform(struct?: DataCloudflareEmailSecurityAllowPolicyFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_acceptable_sender: {
      value: cdktf.booleanToHclTerraform(struct!.isAcceptableSender),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_exempt_recipient: {
      value: cdktf.booleanToHclTerraform(struct!.isExemptRecipient),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_trusted_sender: {
      value: cdktf.booleanToHclTerraform(struct!.isTrustedSender),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    order: {
      value: cdktf.stringToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern_type: {
      value: cdktf.stringToHclTerraform(struct!.patternType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search: {
      value: cdktf.stringToHclTerraform(struct!.search),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verify_sender: {
      value: cdktf.booleanToHclTerraform(struct!.verifySender),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCloudflareEmailSecurityAllowPolicyFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareEmailSecurityAllowPolicyFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._isAcceptableSender !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAcceptableSender = this._isAcceptableSender;
    }
    if (this._isExemptRecipient !== undefined) {
      hasAnyValues = true;
      internalValueResult.isExemptRecipient = this._isExemptRecipient;
    }
    if (this._isTrustedSender !== undefined) {
      hasAnyValues = true;
      internalValueResult.isTrustedSender = this._isTrustedSender;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._patternType !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternType = this._patternType;
    }
    if (this._search !== undefined) {
      hasAnyValues = true;
      internalValueResult.search = this._search;
    }
    if (this._verifySender !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifySender = this._verifySender;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareEmailSecurityAllowPolicyFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._direction = undefined;
      this._isAcceptableSender = undefined;
      this._isExemptRecipient = undefined;
      this._isTrustedSender = undefined;
      this._order = undefined;
      this._pattern = undefined;
      this._patternType = undefined;
      this._search = undefined;
      this._verifySender = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._direction = value.direction;
      this._isAcceptableSender = value.isAcceptableSender;
      this._isExemptRecipient = value.isExemptRecipient;
      this._isTrustedSender = value.isTrustedSender;
      this._order = value.order;
      this._pattern = value.pattern;
      this._patternType = value.patternType;
      this._search = value.search;
      this._verifySender = value.verifySender;
    }
  }

  // direction - computed: false, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // is_acceptable_sender - computed: false, optional: true, required: false
  private _isAcceptableSender?: boolean | cdktf.IResolvable; 
  public get isAcceptableSender() {
    return this.getBooleanAttribute('is_acceptable_sender');
  }
  public set isAcceptableSender(value: boolean | cdktf.IResolvable) {
    this._isAcceptableSender = value;
  }
  public resetIsAcceptableSender() {
    this._isAcceptableSender = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAcceptableSenderInput() {
    return this._isAcceptableSender;
  }

  // is_exempt_recipient - computed: false, optional: true, required: false
  private _isExemptRecipient?: boolean | cdktf.IResolvable; 
  public get isExemptRecipient() {
    return this.getBooleanAttribute('is_exempt_recipient');
  }
  public set isExemptRecipient(value: boolean | cdktf.IResolvable) {
    this._isExemptRecipient = value;
  }
  public resetIsExemptRecipient() {
    this._isExemptRecipient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isExemptRecipientInput() {
    return this._isExemptRecipient;
  }

  // is_trusted_sender - computed: false, optional: true, required: false
  private _isTrustedSender?: boolean | cdktf.IResolvable; 
  public get isTrustedSender() {
    return this.getBooleanAttribute('is_trusted_sender');
  }
  public set isTrustedSender(value: boolean | cdktf.IResolvable) {
    this._isTrustedSender = value;
  }
  public resetIsTrustedSender() {
    this._isTrustedSender = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isTrustedSenderInput() {
    return this._isTrustedSender;
  }

  // order - computed: false, optional: true, required: false
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // pattern_type - computed: false, optional: true, required: false
  private _patternType?: string; 
  public get patternType() {
    return this.getStringAttribute('pattern_type');
  }
  public set patternType(value: string) {
    this._patternType = value;
  }
  public resetPatternType() {
    this._patternType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternTypeInput() {
    return this._patternType;
  }

  // search - computed: false, optional: true, required: false
  private _search?: string; 
  public get search() {
    return this.getStringAttribute('search');
  }
  public set search(value: string) {
    this._search = value;
  }
  public resetSearch() {
    this._search = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search;
  }

  // verify_sender - computed: false, optional: true, required: false
  private _verifySender?: boolean | cdktf.IResolvable; 
  public get verifySender() {
    return this.getBooleanAttribute('verify_sender');
  }
  public set verifySender(value: boolean | cdktf.IResolvable) {
    this._verifySender = value;
  }
  public resetVerifySender() {
    this._verifySender = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifySenderInput() {
    return this._verifySender;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy cloudflare_email_security_allow_policy}
*/
export class DataCloudflareEmailSecurityAllowPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_email_security_allow_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareEmailSecurityAllowPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareEmailSecurityAllowPolicy to import
  * @param importFromId The id of the existing DataCloudflareEmailSecurityAllowPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareEmailSecurityAllowPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_email_security_allow_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy cloudflare_email_security_allow_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareEmailSecurityAllowPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareEmailSecurityAllowPolicyConfig) {
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
    this._filter.internalValue = config.filter;
    this._policyId = config.policyId;
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

  // comments - computed: true, optional: false, required: false
  public get comments() {
    return this.getStringAttribute('comments');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataCloudflareEmailSecurityAllowPolicyFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataCloudflareEmailSecurityAllowPolicyFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_acceptable_sender - computed: true, optional: false, required: false
  public get isAcceptableSender() {
    return this.getBooleanAttribute('is_acceptable_sender');
  }

  // is_exempt_recipient - computed: true, optional: false, required: false
  public get isExemptRecipient() {
    return this.getBooleanAttribute('is_exempt_recipient');
  }

  // is_recipient - computed: true, optional: false, required: false
  public get isRecipient() {
    return this.getBooleanAttribute('is_recipient');
  }

  // is_regex - computed: true, optional: false, required: false
  public get isRegex() {
    return this.getBooleanAttribute('is_regex');
  }

  // is_sender - computed: true, optional: false, required: false
  public get isSender() {
    return this.getBooleanAttribute('is_sender');
  }

  // is_spoof - computed: true, optional: false, required: false
  public get isSpoof() {
    return this.getBooleanAttribute('is_spoof');
  }

  // is_trusted_sender - computed: true, optional: false, required: false
  public get isTrustedSender() {
    return this.getBooleanAttribute('is_trusted_sender');
  }

  // last_modified - computed: true, optional: false, required: false
  public get lastModified() {
    return this.getStringAttribute('last_modified');
  }

  // modified_at - computed: true, optional: false, required: false
  public get modifiedAt() {
    return this.getStringAttribute('modified_at');
  }

  // pattern - computed: true, optional: false, required: false
  public get pattern() {
    return this.getStringAttribute('pattern');
  }

  // pattern_type - computed: true, optional: false, required: false
  public get patternType() {
    return this.getStringAttribute('pattern_type');
  }

  // policy_id - computed: false, optional: true, required: false
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  public resetPolicyId() {
    this._policyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // verify_sender - computed: true, optional: false, required: false
  public get verifySender() {
    return this.getBooleanAttribute('verify_sender');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      filter: dataCloudflareEmailSecurityAllowPolicyFilterToTerraform(this._filter.internalValue),
      policy_id: cdktf.stringToTerraform(this._policyId),
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
      filter: {
        value: dataCloudflareEmailSecurityAllowPolicyFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataCloudflareEmailSecurityAllowPolicyFilter",
      },
      policy_id: {
        value: cdktf.stringToHclTerraform(this._policyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
