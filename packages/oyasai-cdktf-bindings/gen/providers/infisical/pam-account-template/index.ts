// https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PamAccountTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The type of account the template applies to. Changing it creates a new template. Options: ssh, postgres, mysql, mssql, oracledb, mongodb, redis, snowflake, clickhouse, kubernetes, aws-iam, gcp-service-account, azure-cli, windows, windows-ad.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_template#account_type PamAccountTemplate#account_type}
  */
  readonly accountType: string;
  /**
  * An optional description of the account template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_template#description PamAccountTemplate#description}
  */
  readonly description?: string;
  /**
  * The ID of the gateway that accounts using the template connect through, unless an account sets its own.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_template#gateway_id PamAccountTemplate#gateway_id}
  */
  readonly gatewayId?: string;
  /**
  * The ID of the gateway pool that accounts using the template connect through, unless an account sets its own.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_template#gateway_pool_id PamAccountTemplate#gateway_pool_id}
  */
  readonly gatewayPoolId?: string;
  /**
  * The name of the account template, unique in the organization. Must be lowercase letters, numbers and hyphens, at most 64 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_template#name PamAccountTemplate#name}
  */
  readonly name: string;
  /**
  * Access policies applied to every account using the template. A policy left unset is off.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_template#policies PamAccountTemplate#policies}
  */
  readonly policies?: PamAccountTemplatePolicies;
  /**
  * Session recording, log masking, health check and rotation settings. Unset values take their defaults.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_template#settings PamAccountTemplate#settings}
  */
  readonly settings?: PamAccountTemplateSettings;
}
export interface PamAccountTemplatePolicies {
  /**
  * Whether requests that pass one of the folder's auto-approval rules are approved instantly. Has no effect unless `requires_approval` is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_template#allow_auto_approval PamAccountTemplate#allow_auto_approval}
  */
  readonly allowAutoApproval?: boolean | cdktf.IResolvable;
  /**
  * Whether the folder's break-glass users can grant themselves access in an emergency. Has no effect unless `requires_approval` is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_template#allow_break_glass PamAccountTemplate#allow_break_glass}
  */
  readonly allowBreakGlass?: boolean | cdktf.IResolvable;
  /**
  * Regular expressions, one per command or statement to reject during a session. Only for `ssh`, `snowflake`, `clickhouse` templates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_template#command_blocking PamAccountTemplate#command_blocking}
  */
  readonly commandBlocking?: string[];
  /**
  * The maximum session length in seconds, from 60 to 86400 (900 to 3600 for `aws-iam` templates).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_template#max_session_duration PamAccountTemplate#max_session_duration}
  */
  readonly maxSessionDuration?: number;
  /**
  * Whether users must re-authenticate with MFA before accessing an account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_template#require_mfa PamAccountTemplate#require_mfa}
  */
  readonly requireMfa?: boolean | cdktf.IResolvable;
  /**
  * Whether users must give a reason before accessing an account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_template#require_reason PamAccountTemplate#require_reason}
  */
  readonly requireReason?: boolean | cdktf.IResolvable;
  /**
  * Whether users must request and receive approval before launching a session or viewing credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_template#requires_approval PamAccountTemplate#requires_approval}
  */
  readonly requiresApproval?: boolean | cdktf.IResolvable;
}

export function pamAccountTemplatePoliciesToTerraform(struct?: PamAccountTemplatePolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_auto_approval: cdktf.booleanToTerraform(struct!.allowAutoApproval),
    allow_break_glass: cdktf.booleanToTerraform(struct!.allowBreakGlass),
    command_blocking: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.commandBlocking),
    max_session_duration: cdktf.numberToTerraform(struct!.maxSessionDuration),
    require_mfa: cdktf.booleanToTerraform(struct!.requireMfa),
    require_reason: cdktf.booleanToTerraform(struct!.requireReason),
    requires_approval: cdktf.booleanToTerraform(struct!.requiresApproval),
  }
}


export function pamAccountTemplatePoliciesToHclTerraform(struct?: PamAccountTemplatePolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_auto_approval: {
      value: cdktf.booleanToHclTerraform(struct!.allowAutoApproval),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_break_glass: {
      value: cdktf.booleanToHclTerraform(struct!.allowBreakGlass),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    command_blocking: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.commandBlocking),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_session_duration: {
      value: cdktf.numberToHclTerraform(struct!.maxSessionDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    require_mfa: {
      value: cdktf.booleanToHclTerraform(struct!.requireMfa),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_reason: {
      value: cdktf.booleanToHclTerraform(struct!.requireReason),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    requires_approval: {
      value: cdktf.booleanToHclTerraform(struct!.requiresApproval),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PamAccountTemplatePoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PamAccountTemplatePolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowAutoApproval !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAutoApproval = this._allowAutoApproval;
    }
    if (this._allowBreakGlass !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowBreakGlass = this._allowBreakGlass;
    }
    if (this._commandBlocking !== undefined) {
      hasAnyValues = true;
      internalValueResult.commandBlocking = this._commandBlocking;
    }
    if (this._maxSessionDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSessionDuration = this._maxSessionDuration;
    }
    if (this._requireMfa !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireMfa = this._requireMfa;
    }
    if (this._requireReason !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireReason = this._requireReason;
    }
    if (this._requiresApproval !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiresApproval = this._requiresApproval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PamAccountTemplatePolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowAutoApproval = undefined;
      this._allowBreakGlass = undefined;
      this._commandBlocking = undefined;
      this._maxSessionDuration = undefined;
      this._requireMfa = undefined;
      this._requireReason = undefined;
      this._requiresApproval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowAutoApproval = value.allowAutoApproval;
      this._allowBreakGlass = value.allowBreakGlass;
      this._commandBlocking = value.commandBlocking;
      this._maxSessionDuration = value.maxSessionDuration;
      this._requireMfa = value.requireMfa;
      this._requireReason = value.requireReason;
      this._requiresApproval = value.requiresApproval;
    }
  }

  // allow_auto_approval - computed: false, optional: true, required: false
  private _allowAutoApproval?: boolean | cdktf.IResolvable; 
  public get allowAutoApproval() {
    return this.getBooleanAttribute('allow_auto_approval');
  }
  public set allowAutoApproval(value: boolean | cdktf.IResolvable) {
    this._allowAutoApproval = value;
  }
  public resetAllowAutoApproval() {
    this._allowAutoApproval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAutoApprovalInput() {
    return this._allowAutoApproval;
  }

  // allow_break_glass - computed: false, optional: true, required: false
  private _allowBreakGlass?: boolean | cdktf.IResolvable; 
  public get allowBreakGlass() {
    return this.getBooleanAttribute('allow_break_glass');
  }
  public set allowBreakGlass(value: boolean | cdktf.IResolvable) {
    this._allowBreakGlass = value;
  }
  public resetAllowBreakGlass() {
    this._allowBreakGlass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowBreakGlassInput() {
    return this._allowBreakGlass;
  }

  // command_blocking - computed: false, optional: true, required: false
  private _commandBlocking?: string[]; 
  public get commandBlocking() {
    return this.getListAttribute('command_blocking');
  }
  public set commandBlocking(value: string[]) {
    this._commandBlocking = value;
  }
  public resetCommandBlocking() {
    this._commandBlocking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandBlockingInput() {
    return this._commandBlocking;
  }

  // max_session_duration - computed: false, optional: true, required: false
  private _maxSessionDuration?: number; 
  public get maxSessionDuration() {
    return this.getNumberAttribute('max_session_duration');
  }
  public set maxSessionDuration(value: number) {
    this._maxSessionDuration = value;
  }
  public resetMaxSessionDuration() {
    this._maxSessionDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSessionDurationInput() {
    return this._maxSessionDuration;
  }

  // require_mfa - computed: false, optional: true, required: false
  private _requireMfa?: boolean | cdktf.IResolvable; 
  public get requireMfa() {
    return this.getBooleanAttribute('require_mfa');
  }
  public set requireMfa(value: boolean | cdktf.IResolvable) {
    this._requireMfa = value;
  }
  public resetRequireMfa() {
    this._requireMfa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireMfaInput() {
    return this._requireMfa;
  }

  // require_reason - computed: false, optional: true, required: false
  private _requireReason?: boolean | cdktf.IResolvable; 
  public get requireReason() {
    return this.getBooleanAttribute('require_reason');
  }
  public set requireReason(value: boolean | cdktf.IResolvable) {
    this._requireReason = value;
  }
  public resetRequireReason() {
    this._requireReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireReasonInput() {
    return this._requireReason;
  }

  // requires_approval - computed: false, optional: true, required: false
  private _requiresApproval?: boolean | cdktf.IResolvable; 
  public get requiresApproval() {
    return this.getBooleanAttribute('requires_approval');
  }
  public set requiresApproval(value: boolean | cdktf.IResolvable) {
    this._requiresApproval = value;
  }
  public resetRequiresApproval() {
    this._requiresApproval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiresApprovalInput() {
    return this._requiresApproval;
  }
}
export interface PamAccountTemplateSettingsHeartbeat {
  /**
  * Whether credential health checking is on. Set `interval_seconds` as well to run it on a schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_template#enabled PamAccountTemplate#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * How often credential health checking runs, in seconds, from 3600 to 31536000. Leave unset to run it only on demand.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_template#interval_seconds PamAccountTemplate#interval_seconds}
  */
  readonly intervalSeconds?: number;
}

export function pamAccountTemplateSettingsHeartbeatToTerraform(struct?: PamAccountTemplateSettingsHeartbeat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    interval_seconds: cdktf.numberToTerraform(struct!.intervalSeconds),
  }
}


export function pamAccountTemplateSettingsHeartbeatToHclTerraform(struct?: PamAccountTemplateSettingsHeartbeat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interval_seconds: {
      value: cdktf.numberToHclTerraform(struct!.intervalSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PamAccountTemplateSettingsHeartbeatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PamAccountTemplateSettingsHeartbeat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._intervalSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalSeconds = this._intervalSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PamAccountTemplateSettingsHeartbeat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._intervalSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._intervalSeconds = value.intervalSeconds;
    }
  }

  // enabled - computed: true, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // interval_seconds - computed: true, optional: true, required: false
  private _intervalSeconds?: number; 
  public get intervalSeconds() {
    return this.getNumberAttribute('interval_seconds');
  }
  public set intervalSeconds(value: number) {
    this._intervalSeconds = value;
  }
  public resetIntervalSeconds() {
    this._intervalSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalSecondsInput() {
    return this._intervalSeconds;
  }
}
export interface PamAccountTemplateSettingsPasswordRequirementsRequired {
  /**
  * The minimum number of digits in the password. Defaults to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_template#digits PamAccountTemplate#digits}
  */
  readonly digits?: number;
  /**
  * The minimum number of lowercase letters in the password. Defaults to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_template#lowercase PamAccountTemplate#lowercase}
  */
  readonly lowercase?: number;
  /**
  * The minimum number of symbols in the password. Defaults to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_template#symbols PamAccountTemplate#symbols}
  */
  readonly symbols?: number;
  /**
  * The minimum number of uppercase letters in the password. Defaults to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_template#uppercase PamAccountTemplate#uppercase}
  */
  readonly uppercase?: number;
}

export function pamAccountTemplateSettingsPasswordRequirementsRequiredToTerraform(struct?: PamAccountTemplateSettingsPasswordRequirementsRequired): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    digits: cdktf.numberToTerraform(struct!.digits),
    lowercase: cdktf.numberToTerraform(struct!.lowercase),
    symbols: cdktf.numberToTerraform(struct!.symbols),
    uppercase: cdktf.numberToTerraform(struct!.uppercase),
  }
}


export function pamAccountTemplateSettingsPasswordRequirementsRequiredToHclTerraform(struct?: PamAccountTemplateSettingsPasswordRequirementsRequired): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    digits: {
      value: cdktf.numberToHclTerraform(struct!.digits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lowercase: {
      value: cdktf.numberToHclTerraform(struct!.lowercase),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    symbols: {
      value: cdktf.numberToHclTerraform(struct!.symbols),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uppercase: {
      value: cdktf.numberToHclTerraform(struct!.uppercase),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PamAccountTemplateSettingsPasswordRequirementsRequiredOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PamAccountTemplateSettingsPasswordRequirementsRequired | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._digits !== undefined) {
      hasAnyValues = true;
      internalValueResult.digits = this._digits;
    }
    if (this._lowercase !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowercase = this._lowercase;
    }
    if (this._symbols !== undefined) {
      hasAnyValues = true;
      internalValueResult.symbols = this._symbols;
    }
    if (this._uppercase !== undefined) {
      hasAnyValues = true;
      internalValueResult.uppercase = this._uppercase;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PamAccountTemplateSettingsPasswordRequirementsRequired | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._digits = undefined;
      this._lowercase = undefined;
      this._symbols = undefined;
      this._uppercase = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._digits = value.digits;
      this._lowercase = value.lowercase;
      this._symbols = value.symbols;
      this._uppercase = value.uppercase;
    }
  }

  // digits - computed: true, optional: true, required: false
  private _digits?: number; 
  public get digits() {
    return this.getNumberAttribute('digits');
  }
  public set digits(value: number) {
    this._digits = value;
  }
  public resetDigits() {
    this._digits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digitsInput() {
    return this._digits;
  }

  // lowercase - computed: true, optional: true, required: false
  private _lowercase?: number; 
  public get lowercase() {
    return this.getNumberAttribute('lowercase');
  }
  public set lowercase(value: number) {
    this._lowercase = value;
  }
  public resetLowercase() {
    this._lowercase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowercaseInput() {
    return this._lowercase;
  }

  // symbols - computed: true, optional: true, required: false
  private _symbols?: number; 
  public get symbols() {
    return this.getNumberAttribute('symbols');
  }
  public set symbols(value: number) {
    this._symbols = value;
  }
  public resetSymbols() {
    this._symbols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get symbolsInput() {
    return this._symbols;
  }

  // uppercase - computed: true, optional: true, required: false
  private _uppercase?: number; 
  public get uppercase() {
    return this.getNumberAttribute('uppercase');
  }
  public set uppercase(value: number) {
    this._uppercase = value;
  }
  public resetUppercase() {
    this._uppercase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uppercaseInput() {
    return this._uppercase;
  }
}
export interface PamAccountTemplateSettingsPasswordRequirements {
  /**
  * The symbols the password may contain, drawn from `!@#$%^&*()-_=+[]{}|:,.<>/~`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_template#allowed_symbols PamAccountTemplate#allowed_symbols}
  */
  readonly allowedSymbols?: string;
  /**
  * The length of the password, from 1 to 250 (at most 30 for `oracledb` templates).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_template#length PamAccountTemplate#length}
  */
  readonly length: number;
  /**
  * The minimum number of each kind of character. At least one must be above 0, and together they can't exceed `length`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_template#required PamAccountTemplate#required}
  */
  readonly required: PamAccountTemplateSettingsPasswordRequirementsRequired;
}

export function pamAccountTemplateSettingsPasswordRequirementsToTerraform(struct?: PamAccountTemplateSettingsPasswordRequirements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_symbols: cdktf.stringToTerraform(struct!.allowedSymbols),
    length: cdktf.numberToTerraform(struct!.length),
    required: pamAccountTemplateSettingsPasswordRequirementsRequiredToTerraform(struct!.required),
  }
}


export function pamAccountTemplateSettingsPasswordRequirementsToHclTerraform(struct?: PamAccountTemplateSettingsPasswordRequirements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_symbols: {
      value: cdktf.stringToHclTerraform(struct!.allowedSymbols),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    length: {
      value: cdktf.numberToHclTerraform(struct!.length),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    required: {
      value: pamAccountTemplateSettingsPasswordRequirementsRequiredToHclTerraform(struct!.required),
      isBlock: true,
      type: "struct",
      storageClassType: "PamAccountTemplateSettingsPasswordRequirementsRequired",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PamAccountTemplateSettingsPasswordRequirementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PamAccountTemplateSettingsPasswordRequirements | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedSymbols !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedSymbols = this._allowedSymbols;
    }
    if (this._length !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length;
    }
    if (this._required?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PamAccountTemplateSettingsPasswordRequirements | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedSymbols = undefined;
      this._length = undefined;
      this._required.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedSymbols = value.allowedSymbols;
      this._length = value.length;
      this._required.internalValue = value.required;
    }
  }

  // allowed_symbols - computed: true, optional: true, required: false
  private _allowedSymbols?: string; 
  public get allowedSymbols() {
    return this.getStringAttribute('allowed_symbols');
  }
  public set allowedSymbols(value: string) {
    this._allowedSymbols = value;
  }
  public resetAllowedSymbols() {
    this._allowedSymbols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedSymbolsInput() {
    return this._allowedSymbols;
  }

  // length - computed: true, optional: false, required: true
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }

  // required - computed: true, optional: false, required: true
  private _required = new PamAccountTemplateSettingsPasswordRequirementsRequiredOutputReference(this, "required");
  public get required() {
    return this._required;
  }
  public putRequired(value: PamAccountTemplateSettingsPasswordRequirementsRequired) {
    this._required.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required.internalValue;
  }
}
export interface PamAccountTemplateSettingsRecordingS3 {
  /**
  * The name of the bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_template#bucket PamAccountTemplate#bucket}
  */
  readonly bucket: string;
  /**
  * An optional prefix for the recording object keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_template#key_prefix PamAccountTemplate#key_prefix}
  */
  readonly keyPrefix?: string;
  /**
  * The AWS region of the bucket. Leave unset for S3-Compatible Storage connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_template#region PamAccountTemplate#region}
  */
  readonly region?: string;
}

export function pamAccountTemplateSettingsRecordingS3ToTerraform(struct?: PamAccountTemplateSettingsRecordingS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    key_prefix: cdktf.stringToTerraform(struct!.keyPrefix),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function pamAccountTemplateSettingsRecordingS3ToHclTerraform(struct?: PamAccountTemplateSettingsRecordingS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_prefix: {
      value: cdktf.stringToHclTerraform(struct!.keyPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PamAccountTemplateSettingsRecordingS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PamAccountTemplateSettingsRecordingS3 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._keyPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPrefix = this._keyPrefix;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PamAccountTemplateSettingsRecordingS3 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._keyPrefix = undefined;
      this._region = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._keyPrefix = value.keyPrefix;
      this._region = value.region;
    }
  }

  // bucket - computed: true, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // key_prefix - computed: true, optional: true, required: false
  private _keyPrefix?: string; 
  public get keyPrefix() {
    return this.getStringAttribute('key_prefix');
  }
  public set keyPrefix(value: string) {
    this._keyPrefix = value;
  }
  public resetKeyPrefix() {
    this._keyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPrefixInput() {
    return this._keyPrefix;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface PamAccountTemplateSettingsRecording {
  /**
  * The ID of the AWS or S3-Compatible Storage app connection used to store recordings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_template#connection_id PamAccountTemplate#connection_id}
  */
  readonly connectionId?: string;
  /**
  * Whether sessions are recorded. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_template#enabled PamAccountTemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The bucket recordings are stored in when `storage_backend` is `aws-s3`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_template#s3 PamAccountTemplate#s3}
  */
  readonly s3?: PamAccountTemplateSettingsRecordingS3;
  /**
  * Where recordings are stored: `postgres` (Infisical's database) or `aws-s3`, which needs `connection_id` and `s3`. Defaults to `postgres`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_template#storage_backend PamAccountTemplate#storage_backend}
  */
  readonly storageBackend?: string;
}

export function pamAccountTemplateSettingsRecordingToTerraform(struct?: PamAccountTemplateSettingsRecording | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_id: cdktf.stringToTerraform(struct!.connectionId),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    s3: pamAccountTemplateSettingsRecordingS3ToTerraform(struct!.s3),
    storage_backend: cdktf.stringToTerraform(struct!.storageBackend),
  }
}


export function pamAccountTemplateSettingsRecordingToHclTerraform(struct?: PamAccountTemplateSettingsRecording | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_id: {
      value: cdktf.stringToHclTerraform(struct!.connectionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    s3: {
      value: pamAccountTemplateSettingsRecordingS3ToHclTerraform(struct!.s3),
      isBlock: true,
      type: "struct",
      storageClassType: "PamAccountTemplateSettingsRecordingS3",
    },
    storage_backend: {
      value: cdktf.stringToHclTerraform(struct!.storageBackend),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PamAccountTemplateSettingsRecordingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PamAccountTemplateSettingsRecording | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionId = this._connectionId;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    if (this._storageBackend !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageBackend = this._storageBackend;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PamAccountTemplateSettingsRecording | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionId = undefined;
      this._enabled = undefined;
      this._s3.internalValue = undefined;
      this._storageBackend = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionId = value.connectionId;
      this._enabled = value.enabled;
      this._s3.internalValue = value.s3;
      this._storageBackend = value.storageBackend;
    }
  }

  // connection_id - computed: true, optional: true, required: false
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  public resetConnectionId() {
    this._connectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // s3 - computed: true, optional: true, required: false
  private _s3 = new PamAccountTemplateSettingsRecordingS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: PamAccountTemplateSettingsRecordingS3) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }

  // storage_backend - computed: true, optional: true, required: false
  private _storageBackend?: string; 
  public get storageBackend() {
    return this.getStringAttribute('storage_backend');
  }
  public set storageBackend(value: string) {
    this._storageBackend = value;
  }
  public resetStorageBackend() {
    this._storageBackend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageBackendInput() {
    return this._storageBackend;
  }
}
export interface PamAccountTemplateSettingsRotation {
  /**
  * Whether credential rotation is on. Set `interval_seconds` as well to run it on a schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_template#enabled PamAccountTemplate#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * How often credential rotation runs, in seconds, from 3600 to 31536000. Leave unset to run it only on demand.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_template#interval_seconds PamAccountTemplate#interval_seconds}
  */
  readonly intervalSeconds?: number;
}

export function pamAccountTemplateSettingsRotationToTerraform(struct?: PamAccountTemplateSettingsRotation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    interval_seconds: cdktf.numberToTerraform(struct!.intervalSeconds),
  }
}


export function pamAccountTemplateSettingsRotationToHclTerraform(struct?: PamAccountTemplateSettingsRotation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interval_seconds: {
      value: cdktf.numberToHclTerraform(struct!.intervalSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PamAccountTemplateSettingsRotationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PamAccountTemplateSettingsRotation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._intervalSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalSeconds = this._intervalSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PamAccountTemplateSettingsRotation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._intervalSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._intervalSeconds = value.intervalSeconds;
    }
  }

  // enabled - computed: true, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // interval_seconds - computed: true, optional: true, required: false
  private _intervalSeconds?: number; 
  public get intervalSeconds() {
    return this.getNumberAttribute('interval_seconds');
  }
  public set intervalSeconds(value: number) {
    this._intervalSeconds = value;
  }
  public resetIntervalSeconds() {
    this._intervalSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalSecondsInput() {
    return this._intervalSeconds;
  }
}
export interface PamAccountTemplateSettingsSessionLogMasking {
  /**
  * Whether common secrets are masked without a pattern. Defaults to true, except for `windows`, `windows-ad` and `aws-iam` templates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_template#built_in_detection PamAccountTemplate#built_in_detection}
  */
  readonly builtInDetection?: boolean | cdktf.IResolvable;
  /**
  * Regular expressions whose matches are masked in session logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_template#patterns PamAccountTemplate#patterns}
  */
  readonly patterns?: string[];
}

export function pamAccountTemplateSettingsSessionLogMaskingToTerraform(struct?: PamAccountTemplateSettingsSessionLogMasking | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    built_in_detection: cdktf.booleanToTerraform(struct!.builtInDetection),
    patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.patterns),
  }
}


export function pamAccountTemplateSettingsSessionLogMaskingToHclTerraform(struct?: PamAccountTemplateSettingsSessionLogMasking | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    built_in_detection: {
      value: cdktf.booleanToHclTerraform(struct!.builtInDetection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    patterns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.patterns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PamAccountTemplateSettingsSessionLogMaskingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PamAccountTemplateSettingsSessionLogMasking | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._builtInDetection !== undefined) {
      hasAnyValues = true;
      internalValueResult.builtInDetection = this._builtInDetection;
    }
    if (this._patterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.patterns = this._patterns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PamAccountTemplateSettingsSessionLogMasking | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._builtInDetection = undefined;
      this._patterns = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._builtInDetection = value.builtInDetection;
      this._patterns = value.patterns;
    }
  }

  // built_in_detection - computed: true, optional: true, required: false
  private _builtInDetection?: boolean | cdktf.IResolvable; 
  public get builtInDetection() {
    return this.getBooleanAttribute('built_in_detection');
  }
  public set builtInDetection(value: boolean | cdktf.IResolvable) {
    this._builtInDetection = value;
  }
  public resetBuiltInDetection() {
    this._builtInDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get builtInDetectionInput() {
    return this._builtInDetection;
  }

  // patterns - computed: true, optional: true, required: false
  private _patterns?: string[]; 
  public get patterns() {
    return this.getListAttribute('patterns');
  }
  public set patterns(value: string[]) {
    this._patterns = value;
  }
  public resetPatterns() {
    this._patterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternsInput() {
    return this._patterns;
  }
}
export interface PamAccountTemplateSettings {
  /**
  * Scheduled checks that each account's stored credential still works. Defaults to a daily check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_template#heartbeat PamAccountTemplate#heartbeat}
  */
  readonly heartbeat?: PamAccountTemplateSettingsHeartbeat;
  /**
  * Requirements for the passwords rotation generates and for passwords set on accounts. Only for `postgres`, `mysql`, `mssql`, `oracledb`, `windows`, `windows-ad` templates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_template#password_requirements PamAccountTemplate#password_requirements}
  */
  readonly passwordRequirements?: PamAccountTemplateSettingsPasswordRequirements;
  /**
  * Session recording. Defaults to recording every session into Infisical's database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_template#recording PamAccountTemplate#recording}
  */
  readonly recording?: PamAccountTemplateSettingsRecording;
  /**
  * Scheduled credential rotation. Only for `postgres`, `mysql`, `mssql`, `oracledb`, `windows`, `windows-ad` templates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_template#rotation PamAccountTemplate#rotation}
  */
  readonly rotation?: PamAccountTemplateSettingsRotation;
  /**
  * Masking of sensitive values in session logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_template#session_log_masking PamAccountTemplate#session_log_masking}
  */
  readonly sessionLogMasking?: PamAccountTemplateSettingsSessionLogMasking;
}

export function pamAccountTemplateSettingsToTerraform(struct?: PamAccountTemplateSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    heartbeat: pamAccountTemplateSettingsHeartbeatToTerraform(struct!.heartbeat),
    password_requirements: pamAccountTemplateSettingsPasswordRequirementsToTerraform(struct!.passwordRequirements),
    recording: pamAccountTemplateSettingsRecordingToTerraform(struct!.recording),
    rotation: pamAccountTemplateSettingsRotationToTerraform(struct!.rotation),
    session_log_masking: pamAccountTemplateSettingsSessionLogMaskingToTerraform(struct!.sessionLogMasking),
  }
}


export function pamAccountTemplateSettingsToHclTerraform(struct?: PamAccountTemplateSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    heartbeat: {
      value: pamAccountTemplateSettingsHeartbeatToHclTerraform(struct!.heartbeat),
      isBlock: true,
      type: "struct",
      storageClassType: "PamAccountTemplateSettingsHeartbeat",
    },
    password_requirements: {
      value: pamAccountTemplateSettingsPasswordRequirementsToHclTerraform(struct!.passwordRequirements),
      isBlock: true,
      type: "struct",
      storageClassType: "PamAccountTemplateSettingsPasswordRequirements",
    },
    recording: {
      value: pamAccountTemplateSettingsRecordingToHclTerraform(struct!.recording),
      isBlock: true,
      type: "struct",
      storageClassType: "PamAccountTemplateSettingsRecording",
    },
    rotation: {
      value: pamAccountTemplateSettingsRotationToHclTerraform(struct!.rotation),
      isBlock: true,
      type: "struct",
      storageClassType: "PamAccountTemplateSettingsRotation",
    },
    session_log_masking: {
      value: pamAccountTemplateSettingsSessionLogMaskingToHclTerraform(struct!.sessionLogMasking),
      isBlock: true,
      type: "struct",
      storageClassType: "PamAccountTemplateSettingsSessionLogMasking",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PamAccountTemplateSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PamAccountTemplateSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._heartbeat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.heartbeat = this._heartbeat?.internalValue;
    }
    if (this._passwordRequirements?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordRequirements = this._passwordRequirements?.internalValue;
    }
    if (this._recording?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recording = this._recording?.internalValue;
    }
    if (this._rotation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rotation = this._rotation?.internalValue;
    }
    if (this._sessionLogMasking?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionLogMasking = this._sessionLogMasking?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PamAccountTemplateSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._heartbeat.internalValue = undefined;
      this._passwordRequirements.internalValue = undefined;
      this._recording.internalValue = undefined;
      this._rotation.internalValue = undefined;
      this._sessionLogMasking.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._heartbeat.internalValue = value.heartbeat;
      this._passwordRequirements.internalValue = value.passwordRequirements;
      this._recording.internalValue = value.recording;
      this._rotation.internalValue = value.rotation;
      this._sessionLogMasking.internalValue = value.sessionLogMasking;
    }
  }

  // heartbeat - computed: true, optional: true, required: false
  private _heartbeat = new PamAccountTemplateSettingsHeartbeatOutputReference(this, "heartbeat");
  public get heartbeat() {
    return this._heartbeat;
  }
  public putHeartbeat(value: PamAccountTemplateSettingsHeartbeat) {
    this._heartbeat.internalValue = value;
  }
  public resetHeartbeat() {
    this._heartbeat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heartbeatInput() {
    return this._heartbeat.internalValue;
  }

  // password_requirements - computed: true, optional: true, required: false
  private _passwordRequirements = new PamAccountTemplateSettingsPasswordRequirementsOutputReference(this, "password_requirements");
  public get passwordRequirements() {
    return this._passwordRequirements;
  }
  public putPasswordRequirements(value: PamAccountTemplateSettingsPasswordRequirements) {
    this._passwordRequirements.internalValue = value;
  }
  public resetPasswordRequirements() {
    this._passwordRequirements.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordRequirementsInput() {
    return this._passwordRequirements.internalValue;
  }

  // recording - computed: true, optional: true, required: false
  private _recording = new PamAccountTemplateSettingsRecordingOutputReference(this, "recording");
  public get recording() {
    return this._recording;
  }
  public putRecording(value: PamAccountTemplateSettingsRecording) {
    this._recording.internalValue = value;
  }
  public resetRecording() {
    this._recording.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordingInput() {
    return this._recording.internalValue;
  }

  // rotation - computed: true, optional: true, required: false
  private _rotation = new PamAccountTemplateSettingsRotationOutputReference(this, "rotation");
  public get rotation() {
    return this._rotation;
  }
  public putRotation(value: PamAccountTemplateSettingsRotation) {
    this._rotation.internalValue = value;
  }
  public resetRotation() {
    this._rotation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationInput() {
    return this._rotation.internalValue;
  }

  // session_log_masking - computed: true, optional: true, required: false
  private _sessionLogMasking = new PamAccountTemplateSettingsSessionLogMaskingOutputReference(this, "session_log_masking");
  public get sessionLogMasking() {
    return this._sessionLogMasking;
  }
  public putSessionLogMasking(value: PamAccountTemplateSettingsSessionLogMasking) {
    this._sessionLogMasking.internalValue = value;
  }
  public resetSessionLogMasking() {
    this._sessionLogMasking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionLogMaskingInput() {
    return this._sessionLogMasking.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_template infisical_pam_account_template}
*/
export class PamAccountTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_pam_account_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PamAccountTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PamAccountTemplate to import
  * @param importFromId The id of the existing PamAccountTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PamAccountTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_pam_account_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/pam_account_template infisical_pam_account_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PamAccountTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: PamAccountTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_pam_account_template',
      terraformGeneratorMetadata: {
        providerName: 'infisical',
        providerVersion: '0.20.14'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountType = config.accountType;
    this._description = config.description;
    this._gatewayId = config.gatewayId;
    this._gatewayPoolId = config.gatewayPoolId;
    this._name = config.name;
    this._policies.internalValue = config.policies;
    this._settings.internalValue = config.settings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_type - computed: false, optional: false, required: true
  private _accountType?: string; 
  public get accountType() {
    return this.getStringAttribute('account_type');
  }
  public set accountType(value: string) {
    this._accountType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountTypeInput() {
    return this._accountType;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // gateway_id - computed: false, optional: true, required: false
  private _gatewayId?: string; 
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }
  public set gatewayId(value: string) {
    this._gatewayId = value;
  }
  public resetGatewayId() {
    this._gatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIdInput() {
    return this._gatewayId;
  }

  // gateway_pool_id - computed: false, optional: true, required: false
  private _gatewayPoolId?: string; 
  public get gatewayPoolId() {
    return this.getStringAttribute('gateway_pool_id');
  }
  public set gatewayPoolId(value: string) {
    this._gatewayPoolId = value;
  }
  public resetGatewayPoolId() {
    this._gatewayPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayPoolIdInput() {
    return this._gatewayPoolId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // policies - computed: false, optional: true, required: false
  private _policies = new PamAccountTemplatePoliciesOutputReference(this, "policies");
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: PamAccountTemplatePolicies) {
    this._policies.internalValue = value;
  }
  public resetPolicies() {
    this._policies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies.internalValue;
  }

  // settings - computed: true, optional: true, required: false
  private _settings = new PamAccountTemplateSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: PamAccountTemplateSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_type: cdktf.stringToTerraform(this._accountType),
      description: cdktf.stringToTerraform(this._description),
      gateway_id: cdktf.stringToTerraform(this._gatewayId),
      gateway_pool_id: cdktf.stringToTerraform(this._gatewayPoolId),
      name: cdktf.stringToTerraform(this._name),
      policies: pamAccountTemplatePoliciesToTerraform(this._policies.internalValue),
      settings: pamAccountTemplateSettingsToTerraform(this._settings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_type: {
        value: cdktf.stringToHclTerraform(this._accountType),
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
      gateway_id: {
        value: cdktf.stringToHclTerraform(this._gatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway_pool_id: {
        value: cdktf.stringToHclTerraform(this._gatewayPoolId),
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
      policies: {
        value: pamAccountTemplatePoliciesToHclTerraform(this._policies.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PamAccountTemplatePolicies",
      },
      settings: {
        value: pamAccountTemplateSettingsToHclTerraform(this._settings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PamAccountTemplateSettings",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
