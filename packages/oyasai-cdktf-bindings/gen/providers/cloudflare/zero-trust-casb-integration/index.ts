// https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZeroTrustCasbIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cloudflare account identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_integration#account_id ZeroTrustCasbIntegration#account_id}
  */
  readonly accountId: string;
  /**
  * Anthropic integration configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_integration#anthropic ZeroTrustCasbIntegration#anthropic}
  */
  readonly anthropic?: ZeroTrustCasbIntegrationAnthropic;
  /**
  * AWS integration configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_integration#aws ZeroTrustCasbIntegration#aws}
  */
  readonly aws?: ZeroTrustCasbIntegrationAws;
  /**
  * Box integration configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_integration#box ZeroTrustCasbIntegration#box}
  */
  readonly box?: ZeroTrustCasbIntegrationBox;
  /**
  * DLP profile IDs to associate with the integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_integration#dlp_profiles ZeroTrustCasbIntegration#dlp_profiles}
  */
  readonly dlpProfiles?: string[];
  /**
  * Google Cloud Platform integration configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_integration#google_cloud_platform ZeroTrustCasbIntegration#google_cloud_platform}
  */
  readonly googleCloudPlatform?: ZeroTrustCasbIntegrationGoogleCloudPlatform;
  /**
  * Google Workspace integration configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_integration#google_workspace ZeroTrustCasbIntegration#google_workspace}
  */
  readonly googleWorkspace?: ZeroTrustCasbIntegrationGoogleWorkspace;
  /**
  * Name of the integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_integration#name ZeroTrustCasbIntegration#name}
  */
  readonly name: string;
  /**
  * OpenAI integration configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_integration#openai ZeroTrustCasbIntegration#openai}
  */
  readonly openai?: ZeroTrustCasbIntegrationOpenai;
  /**
  * Whether the integration is paused.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_integration#paused ZeroTrustCasbIntegration#paused}
  */
  readonly paused: boolean | cdktf.IResolvable;
  /**
  * Permission scopes granted to the integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_integration#permissions ZeroTrustCasbIntegration#permissions}
  */
  readonly permissions?: string[];
  /**
  * Use cases to enroll the integration in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_integration#use_cases ZeroTrustCasbIntegration#use_cases}
  */
  readonly useCases?: string[];
}
export interface ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKey {
  /**
  * Anthropic Admin API key. This value is write-only and is never persisted to Terraform state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_integration#api_key ZeroTrustCasbIntegration#api_key}
  */
  readonly apiKey: string;
  /**
  * Organization ID. Auto-extracted from the key if not provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_integration#tenant_id ZeroTrustCasbIntegration#tenant_id}
  */
  readonly tenantId?: string;
}

export function zeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyToTerraform(struct?: ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}


export function zeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyToHclTerraform(struct?: ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key: {
      value: cdktf.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey = undefined;
      this._tenantId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey = value.apiKey;
      this._tenantId = value.tenantId;
    }
  }

  // api_key - computed: false, optional: false, required: true
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }
}
export interface ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKey {
  /**
  * Anthropic Compliance API key. This value is write-only and is never persisted to Terraform state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_integration#compliance_api_key ZeroTrustCasbIntegration#compliance_api_key}
  */
  readonly complianceApiKey: string;
  /**
  * Organization ID. Auto-extracted from the key if not provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_integration#tenant_id ZeroTrustCasbIntegration#tenant_id}
  */
  readonly tenantId?: string;
}

export function zeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyToTerraform(struct?: ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compliance_api_key: cdktf.stringToTerraform(struct!.complianceApiKey),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}


export function zeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyToHclTerraform(struct?: ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compliance_api_key: {
      value: cdktf.stringToHclTerraform(struct!.complianceApiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._complianceApiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.complianceApiKey = this._complianceApiKey;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._complianceApiKey = undefined;
      this._tenantId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._complianceApiKey = value.complianceApiKey;
      this._tenantId = value.tenantId;
    }
  }

  // compliance_api_key - computed: false, optional: false, required: true
  private _complianceApiKey?: string; 
  public get complianceApiKey() {
    return this.getStringAttribute('compliance_api_key');
  }
  public set complianceApiKey(value: string) {
    this._complianceApiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceApiKeyInput() {
    return this._complianceApiKey;
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }
}
export interface ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKey {
  /**
  * Anthropic Workspace API key. This value is write-only and is never persisted to Terraform state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_integration#api_key ZeroTrustCasbIntegration#api_key}
  */
  readonly apiKey: string;
  /**
  * Workspace ID, found in the Anthropic Console URL after /workspaces/.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_integration#tenant_id ZeroTrustCasbIntegration#tenant_id}
  */
  readonly tenantId: string;
}

export function zeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyToTerraform(struct?: ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}


export function zeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyToHclTerraform(struct?: ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key: {
      value: cdktf.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey = undefined;
      this._tenantId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey = value.apiKey;
      this._tenantId = value.tenantId;
    }
  }

  // api_key - computed: false, optional: false, required: true
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }
}
export interface ZeroTrustCasbIntegrationAnthropic {
  /**
  * Authenticate with an Anthropic Admin API key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_integration#anthropic_admin_api_key ZeroTrustCasbIntegration#anthropic_admin_api_key}
  */
  readonly anthropicAdminApiKey?: ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKey;
  /**
  * Authenticate with an Anthropic Compliance API key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_integration#anthropic_compliance_api_key ZeroTrustCasbIntegration#anthropic_compliance_api_key}
  */
  readonly anthropicComplianceApiKey?: ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKey;
  /**
  * Authenticate with an Anthropic Workspace API key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_integration#anthropic_workspace_api_key ZeroTrustCasbIntegration#anthropic_workspace_api_key}
  */
  readonly anthropicWorkspaceApiKey?: ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKey;
}

export function zeroTrustCasbIntegrationAnthropicToTerraform(struct?: ZeroTrustCasbIntegrationAnthropic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    anthropic_admin_api_key: zeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyToTerraform(struct!.anthropicAdminApiKey),
    anthropic_compliance_api_key: zeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyToTerraform(struct!.anthropicComplianceApiKey),
    anthropic_workspace_api_key: zeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyToTerraform(struct!.anthropicWorkspaceApiKey),
  }
}


export function zeroTrustCasbIntegrationAnthropicToHclTerraform(struct?: ZeroTrustCasbIntegrationAnthropic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    anthropic_admin_api_key: {
      value: zeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyToHclTerraform(struct!.anthropicAdminApiKey),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKey",
    },
    anthropic_compliance_api_key: {
      value: zeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyToHclTerraform(struct!.anthropicComplianceApiKey),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKey",
    },
    anthropic_workspace_api_key: {
      value: zeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyToHclTerraform(struct!.anthropicWorkspaceApiKey),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustCasbIntegrationAnthropicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustCasbIntegrationAnthropic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anthropicAdminApiKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.anthropicAdminApiKey = this._anthropicAdminApiKey?.internalValue;
    }
    if (this._anthropicComplianceApiKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.anthropicComplianceApiKey = this._anthropicComplianceApiKey?.internalValue;
    }
    if (this._anthropicWorkspaceApiKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.anthropicWorkspaceApiKey = this._anthropicWorkspaceApiKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustCasbIntegrationAnthropic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anthropicAdminApiKey.internalValue = undefined;
      this._anthropicComplianceApiKey.internalValue = undefined;
      this._anthropicWorkspaceApiKey.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anthropicAdminApiKey.internalValue = value.anthropicAdminApiKey;
      this._anthropicComplianceApiKey.internalValue = value.anthropicComplianceApiKey;
      this._anthropicWorkspaceApiKey.internalValue = value.anthropicWorkspaceApiKey;
    }
  }

  // anthropic_admin_api_key - computed: false, optional: true, required: false
  private _anthropicAdminApiKey = new ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference(this, "anthropic_admin_api_key");
  public get anthropicAdminApiKey() {
    return this._anthropicAdminApiKey;
  }
  public putAnthropicAdminApiKey(value: ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKey) {
    this._anthropicAdminApiKey.internalValue = value;
  }
  public resetAnthropicAdminApiKey() {
    this._anthropicAdminApiKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anthropicAdminApiKeyInput() {
    return this._anthropicAdminApiKey.internalValue;
  }

  // anthropic_compliance_api_key - computed: false, optional: true, required: false
  private _anthropicComplianceApiKey = new ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference(this, "anthropic_compliance_api_key");
  public get anthropicComplianceApiKey() {
    return this._anthropicComplianceApiKey;
  }
  public putAnthropicComplianceApiKey(value: ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKey) {
    this._anthropicComplianceApiKey.internalValue = value;
  }
  public resetAnthropicComplianceApiKey() {
    this._anthropicComplianceApiKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anthropicComplianceApiKeyInput() {
    return this._anthropicComplianceApiKey.internalValue;
  }

  // anthropic_workspace_api_key - computed: false, optional: true, required: false
  private _anthropicWorkspaceApiKey = new ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyOutputReference(this, "anthropic_workspace_api_key");
  public get anthropicWorkspaceApiKey() {
    return this._anthropicWorkspaceApiKey;
  }
  public putAnthropicWorkspaceApiKey(value: ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKey) {
    this._anthropicWorkspaceApiKey.internalValue = value;
  }
  public resetAnthropicWorkspaceApiKey() {
    this._anthropicWorkspaceApiKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anthropicWorkspaceApiKeyInput() {
    return this._anthropicWorkspaceApiKey.internalValue;
  }
}
export interface ZeroTrustCasbIntegrationAwsAwsIamRole {
  /**
  * External ID required when assuming the IAM role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_integration#external_id ZeroTrustCasbIntegration#external_id}
  */
  readonly externalId: string;
  /**
  * ARN of the cross-account IAM role Cloudflare will assume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_integration#role_arn ZeroTrustCasbIntegration#role_arn}
  */
  readonly roleArn: string;
}

export function zeroTrustCasbIntegrationAwsAwsIamRoleToTerraform(struct?: ZeroTrustCasbIntegrationAwsAwsIamRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_id: cdktf.stringToTerraform(struct!.externalId),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}


export function zeroTrustCasbIntegrationAwsAwsIamRoleToHclTerraform(struct?: ZeroTrustCasbIntegrationAwsAwsIamRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_id: {
      value: cdktf.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustCasbIntegrationAwsAwsIamRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustCasbIntegrationAwsAwsIamRole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustCasbIntegrationAwsAwsIamRole | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._externalId = undefined;
      this._roleArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._externalId = value.externalId;
      this._roleArn = value.roleArn;
    }
  }

  // external_id - computed: false, optional: false, required: true
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}
export interface ZeroTrustCasbIntegrationAws {
  /**
  * Authenticate by delegating to a cross-account IAM role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_integration#aws_iam_role ZeroTrustCasbIntegration#aws_iam_role}
  */
  readonly awsIamRole?: ZeroTrustCasbIntegrationAwsAwsIamRole;
}

export function zeroTrustCasbIntegrationAwsToTerraform(struct?: ZeroTrustCasbIntegrationAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_iam_role: zeroTrustCasbIntegrationAwsAwsIamRoleToTerraform(struct!.awsIamRole),
  }
}


export function zeroTrustCasbIntegrationAwsToHclTerraform(struct?: ZeroTrustCasbIntegrationAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_iam_role: {
      value: zeroTrustCasbIntegrationAwsAwsIamRoleToHclTerraform(struct!.awsIamRole),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustCasbIntegrationAwsAwsIamRole",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustCasbIntegrationAwsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustCasbIntegrationAws | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsIamRole?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsIamRole = this._awsIamRole?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustCasbIntegrationAws | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsIamRole.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsIamRole.internalValue = value.awsIamRole;
    }
  }

  // aws_iam_role - computed: false, optional: true, required: false
  private _awsIamRole = new ZeroTrustCasbIntegrationAwsAwsIamRoleOutputReference(this, "aws_iam_role");
  public get awsIamRole() {
    return this._awsIamRole;
  }
  public putAwsIamRole(value: ZeroTrustCasbIntegrationAwsAwsIamRole) {
    this._awsIamRole.internalValue = value;
  }
  public resetAwsIamRole() {
    this._awsIamRole.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsIamRoleInput() {
    return this._awsIamRole.internalValue;
  }
}
export interface ZeroTrustCasbIntegrationBoxBoxServerAuthentication {
  /**
  * Box Enterprise ID from Admin Console > Accounts & Billing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_integration#enterprise_id ZeroTrustCasbIntegration#enterprise_id}
  */
  readonly enterpriseId: string;
}

export function zeroTrustCasbIntegrationBoxBoxServerAuthenticationToTerraform(struct?: ZeroTrustCasbIntegrationBoxBoxServerAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enterprise_id: cdktf.stringToTerraform(struct!.enterpriseId),
  }
}


export function zeroTrustCasbIntegrationBoxBoxServerAuthenticationToHclTerraform(struct?: ZeroTrustCasbIntegrationBoxBoxServerAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enterprise_id: {
      value: cdktf.stringToHclTerraform(struct!.enterpriseId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustCasbIntegrationBoxBoxServerAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustCasbIntegrationBoxBoxServerAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enterpriseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.enterpriseId = this._enterpriseId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustCasbIntegrationBoxBoxServerAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enterpriseId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enterpriseId = value.enterpriseId;
    }
  }

  // enterprise_id - computed: false, optional: false, required: true
  private _enterpriseId?: string; 
  public get enterpriseId() {
    return this.getStringAttribute('enterprise_id');
  }
  public set enterpriseId(value: string) {
    this._enterpriseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseIdInput() {
    return this._enterpriseId;
  }
}
export interface ZeroTrustCasbIntegrationBox {
  /**
  * Authenticate with Box server authentication. Before creating the integration, add the Cloudflare CASB application in Box Admin Console > Integrations > Platform Apps Manager > Server Authentication Apps using client ID `puaghckpy0578r8p6f3g0rf860unup4r`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_integration#box_server_authentication ZeroTrustCasbIntegration#box_server_authentication}
  */
  readonly boxServerAuthentication?: ZeroTrustCasbIntegrationBoxBoxServerAuthentication;
}

export function zeroTrustCasbIntegrationBoxToTerraform(struct?: ZeroTrustCasbIntegrationBox | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    box_server_authentication: zeroTrustCasbIntegrationBoxBoxServerAuthenticationToTerraform(struct!.boxServerAuthentication),
  }
}


export function zeroTrustCasbIntegrationBoxToHclTerraform(struct?: ZeroTrustCasbIntegrationBox | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    box_server_authentication: {
      value: zeroTrustCasbIntegrationBoxBoxServerAuthenticationToHclTerraform(struct!.boxServerAuthentication),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustCasbIntegrationBoxBoxServerAuthentication",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustCasbIntegrationBoxOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustCasbIntegrationBox | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._boxServerAuthentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.boxServerAuthentication = this._boxServerAuthentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustCasbIntegrationBox | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._boxServerAuthentication.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._boxServerAuthentication.internalValue = value.boxServerAuthentication;
    }
  }

  // box_server_authentication - computed: false, optional: true, required: false
  private _boxServerAuthentication = new ZeroTrustCasbIntegrationBoxBoxServerAuthenticationOutputReference(this, "box_server_authentication");
  public get boxServerAuthentication() {
    return this._boxServerAuthentication;
  }
  public putBoxServerAuthentication(value: ZeroTrustCasbIntegrationBoxBoxServerAuthentication) {
    this._boxServerAuthentication.internalValue = value;
  }
  public resetBoxServerAuthentication() {
    this._boxServerAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boxServerAuthenticationInput() {
    return this._boxServerAuthentication.internalValue;
  }
}
export interface ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccount {
  /**
  * Contents of a Google service account JSON key file. This value is write-only and is never persisted to Terraform state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_integration#service_account_key_json ZeroTrustCasbIntegration#service_account_key_json}
  */
  readonly serviceAccountKeyJson: string;
}

export function zeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccountToTerraform(struct?: ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_account_key_json: cdktf.stringToTerraform(struct!.serviceAccountKeyJson),
  }
}


export function zeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccountToHclTerraform(struct?: ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_account_key_json: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountKeyJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceAccountKeyJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountKeyJson = this._serviceAccountKeyJson;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccount | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serviceAccountKeyJson = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serviceAccountKeyJson = value.serviceAccountKeyJson;
    }
  }

  // service_account_key_json - computed: false, optional: false, required: true
  private _serviceAccountKeyJson?: string; 
  public get serviceAccountKeyJson() {
    return this.getStringAttribute('service_account_key_json');
  }
  public set serviceAccountKeyJson(value: string) {
    this._serviceAccountKeyJson = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountKeyJsonInput() {
    return this._serviceAccountKeyJson;
  }
}
export interface ZeroTrustCasbIntegrationGoogleCloudPlatform {
  /**
  * Authenticate with a service account key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_integration#google_cloud_platform_service_account ZeroTrustCasbIntegration#google_cloud_platform_service_account}
  */
  readonly googleCloudPlatformServiceAccount?: ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccount;
}

export function zeroTrustCasbIntegrationGoogleCloudPlatformToTerraform(struct?: ZeroTrustCasbIntegrationGoogleCloudPlatform | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    google_cloud_platform_service_account: zeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccountToTerraform(struct!.googleCloudPlatformServiceAccount),
  }
}


export function zeroTrustCasbIntegrationGoogleCloudPlatformToHclTerraform(struct?: ZeroTrustCasbIntegrationGoogleCloudPlatform | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    google_cloud_platform_service_account: {
      value: zeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccountToHclTerraform(struct!.googleCloudPlatformServiceAccount),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccount",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustCasbIntegrationGoogleCloudPlatformOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustCasbIntegrationGoogleCloudPlatform | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._googleCloudPlatformServiceAccount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleCloudPlatformServiceAccount = this._googleCloudPlatformServiceAccount?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustCasbIntegrationGoogleCloudPlatform | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._googleCloudPlatformServiceAccount.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._googleCloudPlatformServiceAccount.internalValue = value.googleCloudPlatformServiceAccount;
    }
  }

  // google_cloud_platform_service_account - computed: false, optional: true, required: false
  private _googleCloudPlatformServiceAccount = new ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccountOutputReference(this, "google_cloud_platform_service_account");
  public get googleCloudPlatformServiceAccount() {
    return this._googleCloudPlatformServiceAccount;
  }
  public putGoogleCloudPlatformServiceAccount(value: ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccount) {
    this._googleCloudPlatformServiceAccount.internalValue = value;
  }
  public resetGoogleCloudPlatformServiceAccount() {
    this._googleCloudPlatformServiceAccount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleCloudPlatformServiceAccountInput() {
    return this._googleCloudPlatformServiceAccount.internalValue;
  }
}
export interface ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccount {
  /**
  * A Google Workspace super administrator email address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_integration#administrator_email ZeroTrustCasbIntegration#administrator_email}
  */
  readonly administratorEmail: string;
  /**
  * Contents of a Google service account JSON key file. This value is write-only and is never persisted to Terraform state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_integration#service_account_key_json ZeroTrustCasbIntegration#service_account_key_json}
  */
  readonly serviceAccountKeyJson: string;
}

export function zeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountToTerraform(struct?: ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    administrator_email: cdktf.stringToTerraform(struct!.administratorEmail),
    service_account_key_json: cdktf.stringToTerraform(struct!.serviceAccountKeyJson),
  }
}


export function zeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountToHclTerraform(struct?: ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    administrator_email: {
      value: cdktf.stringToHclTerraform(struct!.administratorEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_key_json: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountKeyJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._administratorEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.administratorEmail = this._administratorEmail;
    }
    if (this._serviceAccountKeyJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountKeyJson = this._serviceAccountKeyJson;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccount | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._administratorEmail = undefined;
      this._serviceAccountKeyJson = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._administratorEmail = value.administratorEmail;
      this._serviceAccountKeyJson = value.serviceAccountKeyJson;
    }
  }

  // administrator_email - computed: false, optional: false, required: true
  private _administratorEmail?: string; 
  public get administratorEmail() {
    return this.getStringAttribute('administrator_email');
  }
  public set administratorEmail(value: string) {
    this._administratorEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get administratorEmailInput() {
    return this._administratorEmail;
  }

  // service_account_key_json - computed: false, optional: false, required: true
  private _serviceAccountKeyJson?: string; 
  public get serviceAccountKeyJson() {
    return this.getStringAttribute('service_account_key_json');
  }
  public set serviceAccountKeyJson(value: string) {
    this._serviceAccountKeyJson = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountKeyJsonInput() {
    return this._serviceAccountKeyJson;
  }
}
export interface ZeroTrustCasbIntegrationGoogleWorkspace {
  /**
  * Authenticate with a service account granted domain-wide delegation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_integration#google_domain_wide_delegation_service_account ZeroTrustCasbIntegration#google_domain_wide_delegation_service_account}
  */
  readonly googleDomainWideDelegationServiceAccount?: ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccount;
}

export function zeroTrustCasbIntegrationGoogleWorkspaceToTerraform(struct?: ZeroTrustCasbIntegrationGoogleWorkspace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    google_domain_wide_delegation_service_account: zeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountToTerraform(struct!.googleDomainWideDelegationServiceAccount),
  }
}


export function zeroTrustCasbIntegrationGoogleWorkspaceToHclTerraform(struct?: ZeroTrustCasbIntegrationGoogleWorkspace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    google_domain_wide_delegation_service_account: {
      value: zeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountToHclTerraform(struct!.googleDomainWideDelegationServiceAccount),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccount",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustCasbIntegrationGoogleWorkspace | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._googleDomainWideDelegationServiceAccount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleDomainWideDelegationServiceAccount = this._googleDomainWideDelegationServiceAccount?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustCasbIntegrationGoogleWorkspace | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._googleDomainWideDelegationServiceAccount.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._googleDomainWideDelegationServiceAccount.internalValue = value.googleDomainWideDelegationServiceAccount;
    }
  }

  // google_domain_wide_delegation_service_account - computed: false, optional: true, required: false
  private _googleDomainWideDelegationServiceAccount = new ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountOutputReference(this, "google_domain_wide_delegation_service_account");
  public get googleDomainWideDelegationServiceAccount() {
    return this._googleDomainWideDelegationServiceAccount;
  }
  public putGoogleDomainWideDelegationServiceAccount(value: ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccount) {
    this._googleDomainWideDelegationServiceAccount.internalValue = value;
  }
  public resetGoogleDomainWideDelegationServiceAccount() {
    this._googleDomainWideDelegationServiceAccount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleDomainWideDelegationServiceAccountInput() {
    return this._googleDomainWideDelegationServiceAccount.internalValue;
  }
}
export interface ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKey {
  /**
  * OpenAI Admin API key with api.management.read access. This value is write-only and is never persisted to Terraform state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_integration#admin_api_key ZeroTrustCasbIntegration#admin_api_key}
  */
  readonly adminApiKey: string;
  /**
  * OpenAI Compliance API key for audit logs. This value is write-only and is never persisted to Terraform state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_integration#compliance_api_key ZeroTrustCasbIntegration#compliance_api_key}
  */
  readonly complianceApiKey: string;
  /**
  * OpenAI Organization ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_integration#organization_id ZeroTrustCasbIntegration#organization_id}
  */
  readonly organizationId: string;
  /**
  * OpenAI Project API key, used for DLP. This value is write-only and is never persisted to Terraform state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_integration#project_api_key ZeroTrustCasbIntegration#project_api_key}
  */
  readonly projectApiKey?: string;
  /**
  * OpenAI Project ID, used for DLP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_integration#project_id ZeroTrustCasbIntegration#project_id}
  */
  readonly projectId?: string;
  /**
  * OpenAI Workspace ID for compliance data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_integration#workspace_id ZeroTrustCasbIntegration#workspace_id}
  */
  readonly workspaceId: string;
}

export function zeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyToTerraform(struct?: ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_api_key: cdktf.stringToTerraform(struct!.adminApiKey),
    compliance_api_key: cdktf.stringToTerraform(struct!.complianceApiKey),
    organization_id: cdktf.stringToTerraform(struct!.organizationId),
    project_api_key: cdktf.stringToTerraform(struct!.projectApiKey),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    workspace_id: cdktf.stringToTerraform(struct!.workspaceId),
  }
}


export function zeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyToHclTerraform(struct?: ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_api_key: {
      value: cdktf.stringToHclTerraform(struct!.adminApiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compliance_api_key: {
      value: cdktf.stringToHclTerraform(struct!.complianceApiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization_id: {
      value: cdktf.stringToHclTerraform(struct!.organizationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_api_key: {
      value: cdktf.stringToHclTerraform(struct!.projectApiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workspace_id: {
      value: cdktf.stringToHclTerraform(struct!.workspaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminApiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminApiKey = this._adminApiKey;
    }
    if (this._complianceApiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.complianceApiKey = this._complianceApiKey;
    }
    if (this._organizationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationId = this._organizationId;
    }
    if (this._projectApiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectApiKey = this._projectApiKey;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminApiKey = undefined;
      this._complianceApiKey = undefined;
      this._organizationId = undefined;
      this._projectApiKey = undefined;
      this._projectId = undefined;
      this._workspaceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminApiKey = value.adminApiKey;
      this._complianceApiKey = value.complianceApiKey;
      this._organizationId = value.organizationId;
      this._projectApiKey = value.projectApiKey;
      this._projectId = value.projectId;
      this._workspaceId = value.workspaceId;
    }
  }

  // admin_api_key - computed: false, optional: false, required: true
  private _adminApiKey?: string; 
  public get adminApiKey() {
    return this.getStringAttribute('admin_api_key');
  }
  public set adminApiKey(value: string) {
    this._adminApiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminApiKeyInput() {
    return this._adminApiKey;
  }

  // compliance_api_key - computed: false, optional: false, required: true
  private _complianceApiKey?: string; 
  public get complianceApiKey() {
    return this.getStringAttribute('compliance_api_key');
  }
  public set complianceApiKey(value: string) {
    this._complianceApiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceApiKeyInput() {
    return this._complianceApiKey;
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // project_api_key - computed: false, optional: true, required: false
  private _projectApiKey?: string; 
  public get projectApiKey() {
    return this.getStringAttribute('project_api_key');
  }
  public set projectApiKey(value: string) {
    this._projectApiKey = value;
  }
  public resetProjectApiKey() {
    this._projectApiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectApiKeyInput() {
    return this._projectApiKey;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }
}
export interface ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKey {
  /**
  * OpenAI Admin API key with api.management.read access. This value is write-only and is never persisted to Terraform state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_integration#admin_api_key ZeroTrustCasbIntegration#admin_api_key}
  */
  readonly adminApiKey: string;
  /**
  * OpenAI Organization ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_integration#organization_id ZeroTrustCasbIntegration#organization_id}
  */
  readonly organizationId: string;
  /**
  * OpenAI Project API key, used for DLP. This value is write-only and is never persisted to Terraform state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_integration#project_api_key ZeroTrustCasbIntegration#project_api_key}
  */
  readonly projectApiKey?: string;
  /**
  * OpenAI Project ID, used for DLP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_integration#project_id ZeroTrustCasbIntegration#project_id}
  */
  readonly projectId?: string;
}

export function zeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyToTerraform(struct?: ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_api_key: cdktf.stringToTerraform(struct!.adminApiKey),
    organization_id: cdktf.stringToTerraform(struct!.organizationId),
    project_api_key: cdktf.stringToTerraform(struct!.projectApiKey),
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function zeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyToHclTerraform(struct?: ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_api_key: {
      value: cdktf.stringToHclTerraform(struct!.adminApiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization_id: {
      value: cdktf.stringToHclTerraform(struct!.organizationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_api_key: {
      value: cdktf.stringToHclTerraform(struct!.projectApiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminApiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminApiKey = this._adminApiKey;
    }
    if (this._organizationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationId = this._organizationId;
    }
    if (this._projectApiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectApiKey = this._projectApiKey;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminApiKey = undefined;
      this._organizationId = undefined;
      this._projectApiKey = undefined;
      this._projectId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminApiKey = value.adminApiKey;
      this._organizationId = value.organizationId;
      this._projectApiKey = value.projectApiKey;
      this._projectId = value.projectId;
    }
  }

  // admin_api_key - computed: false, optional: false, required: true
  private _adminApiKey?: string; 
  public get adminApiKey() {
    return this.getStringAttribute('admin_api_key');
  }
  public set adminApiKey(value: string) {
    this._adminApiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminApiKeyInput() {
    return this._adminApiKey;
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // project_api_key - computed: false, optional: true, required: false
  private _projectApiKey?: string; 
  public get projectApiKey() {
    return this.getStringAttribute('project_api_key');
  }
  public set projectApiKey(value: string) {
    this._projectApiKey = value;
  }
  public resetProjectApiKey() {
    this._projectApiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectApiKeyInput() {
    return this._projectApiKey;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }
}
export interface ZeroTrustCasbIntegrationOpenai {
  /**
  * Authenticate with an OpenAI Compliance API key. Requires an Enterprise plan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_integration#chatgpt_compliance_api_key ZeroTrustCasbIntegration#chatgpt_compliance_api_key}
  */
  readonly chatgptComplianceApiKey?: ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKey;
  /**
  * Authenticate with an OpenAI Admin API key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_integration#chatgpt_standard_api_key ZeroTrustCasbIntegration#chatgpt_standard_api_key}
  */
  readonly chatgptStandardApiKey?: ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKey;
}

export function zeroTrustCasbIntegrationOpenaiToTerraform(struct?: ZeroTrustCasbIntegrationOpenai | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chatgpt_compliance_api_key: zeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyToTerraform(struct!.chatgptComplianceApiKey),
    chatgpt_standard_api_key: zeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyToTerraform(struct!.chatgptStandardApiKey),
  }
}


export function zeroTrustCasbIntegrationOpenaiToHclTerraform(struct?: ZeroTrustCasbIntegrationOpenai | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chatgpt_compliance_api_key: {
      value: zeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyToHclTerraform(struct!.chatgptComplianceApiKey),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKey",
    },
    chatgpt_standard_api_key: {
      value: zeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyToHclTerraform(struct!.chatgptStandardApiKey),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustCasbIntegrationOpenaiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustCasbIntegrationOpenai | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chatgptComplianceApiKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.chatgptComplianceApiKey = this._chatgptComplianceApiKey?.internalValue;
    }
    if (this._chatgptStandardApiKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.chatgptStandardApiKey = this._chatgptStandardApiKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustCasbIntegrationOpenai | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chatgptComplianceApiKey.internalValue = undefined;
      this._chatgptStandardApiKey.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chatgptComplianceApiKey.internalValue = value.chatgptComplianceApiKey;
      this._chatgptStandardApiKey.internalValue = value.chatgptStandardApiKey;
    }
  }

  // chatgpt_compliance_api_key - computed: false, optional: true, required: false
  private _chatgptComplianceApiKey = new ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference(this, "chatgpt_compliance_api_key");
  public get chatgptComplianceApiKey() {
    return this._chatgptComplianceApiKey;
  }
  public putChatgptComplianceApiKey(value: ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKey) {
    this._chatgptComplianceApiKey.internalValue = value;
  }
  public resetChatgptComplianceApiKey() {
    this._chatgptComplianceApiKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chatgptComplianceApiKeyInput() {
    return this._chatgptComplianceApiKey.internalValue;
  }

  // chatgpt_standard_api_key - computed: false, optional: true, required: false
  private _chatgptStandardApiKey = new ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference(this, "chatgpt_standard_api_key");
  public get chatgptStandardApiKey() {
    return this._chatgptStandardApiKey;
  }
  public putChatgptStandardApiKey(value: ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKey) {
    this._chatgptStandardApiKey.internalValue = value;
  }
  public resetChatgptStandardApiKey() {
    this._chatgptStandardApiKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chatgptStandardApiKeyInput() {
    return this._chatgptStandardApiKey.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_integration cloudflare_zero_trust_casb_integration}
*/
export class ZeroTrustCasbIntegration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_casb_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZeroTrustCasbIntegration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZeroTrustCasbIntegration to import
  * @param importFromId The id of the existing ZeroTrustCasbIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZeroTrustCasbIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_casb_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_integration cloudflare_zero_trust_casb_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZeroTrustCasbIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: ZeroTrustCasbIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_casb_integration',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.29.0'
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
    this._anthropic.internalValue = config.anthropic;
    this._aws.internalValue = config.aws;
    this._box.internalValue = config.box;
    this._dlpProfiles = config.dlpProfiles;
    this._googleCloudPlatform.internalValue = config.googleCloudPlatform;
    this._googleWorkspace.internalValue = config.googleWorkspace;
    this._name = config.name;
    this._openai.internalValue = config.openai;
    this._paused = config.paused;
    this._permissions = config.permissions;
    this._useCases = config.useCases;
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

  // anthropic - computed: false, optional: true, required: false
  private _anthropic = new ZeroTrustCasbIntegrationAnthropicOutputReference(this, "anthropic");
  public get anthropic() {
    return this._anthropic;
  }
  public putAnthropic(value: ZeroTrustCasbIntegrationAnthropic) {
    this._anthropic.internalValue = value;
  }
  public resetAnthropic() {
    this._anthropic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anthropicInput() {
    return this._anthropic.internalValue;
  }

  // aws - computed: false, optional: true, required: false
  private _aws = new ZeroTrustCasbIntegrationAwsOutputReference(this, "aws");
  public get aws() {
    return this._aws;
  }
  public putAws(value: ZeroTrustCasbIntegrationAws) {
    this._aws.internalValue = value;
  }
  public resetAws() {
    this._aws.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsInput() {
    return this._aws.internalValue;
  }

  // box - computed: false, optional: true, required: false
  private _box = new ZeroTrustCasbIntegrationBoxOutputReference(this, "box");
  public get box() {
    return this._box;
  }
  public putBox(value: ZeroTrustCasbIntegrationBox) {
    this._box.internalValue = value;
  }
  public resetBox() {
    this._box.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boxInput() {
    return this._box.internalValue;
  }

  // dlp_profiles - computed: true, optional: true, required: false
  private _dlpProfiles?: string[]; 
  public get dlpProfiles() {
    return cdktf.Fn.tolist(this.getListAttribute('dlp_profiles'));
  }
  public set dlpProfiles(value: string[]) {
    this._dlpProfiles = value;
  }
  public resetDlpProfiles() {
    this._dlpProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dlpProfilesInput() {
    return this._dlpProfiles;
  }

  // google_cloud_platform - computed: false, optional: true, required: false
  private _googleCloudPlatform = new ZeroTrustCasbIntegrationGoogleCloudPlatformOutputReference(this, "google_cloud_platform");
  public get googleCloudPlatform() {
    return this._googleCloudPlatform;
  }
  public putGoogleCloudPlatform(value: ZeroTrustCasbIntegrationGoogleCloudPlatform) {
    this._googleCloudPlatform.internalValue = value;
  }
  public resetGoogleCloudPlatform() {
    this._googleCloudPlatform.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleCloudPlatformInput() {
    return this._googleCloudPlatform.internalValue;
  }

  // google_workspace - computed: false, optional: true, required: false
  private _googleWorkspace = new ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference(this, "google_workspace");
  public get googleWorkspace() {
    return this._googleWorkspace;
  }
  public putGoogleWorkspace(value: ZeroTrustCasbIntegrationGoogleWorkspace) {
    this._googleWorkspace.internalValue = value;
  }
  public resetGoogleWorkspace() {
    this._googleWorkspace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleWorkspaceInput() {
    return this._googleWorkspace.internalValue;
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

  // openai - computed: false, optional: true, required: false
  private _openai = new ZeroTrustCasbIntegrationOpenaiOutputReference(this, "openai");
  public get openai() {
    return this._openai;
  }
  public putOpenai(value: ZeroTrustCasbIntegrationOpenai) {
    this._openai.internalValue = value;
  }
  public resetOpenai() {
    this._openai.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openaiInput() {
    return this._openai.internalValue;
  }

  // paused - computed: false, optional: false, required: true
  private _paused?: boolean | cdktf.IResolvable; 
  public get paused() {
    return this.getBooleanAttribute('paused');
  }
  public set paused(value: boolean | cdktf.IResolvable) {
    this._paused = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pausedInput() {
    return this._paused;
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions?: string[]; 
  public get permissions() {
    return cdktf.Fn.tolist(this.getListAttribute('permissions'));
  }
  public set permissions(value: string[]) {
    this._permissions = value;
  }
  public resetPermissions() {
    this._permissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }

  // secrets_digest - computed: true, optional: false, required: false
  public get secretsDigest() {
    return this.getStringAttribute('secrets_digest');
  }

  // use_cases - computed: true, optional: true, required: false
  private _useCases?: string[]; 
  public get useCases() {
    return cdktf.Fn.tolist(this.getListAttribute('use_cases'));
  }
  public set useCases(value: string[]) {
    this._useCases = value;
  }
  public resetUseCases() {
    this._useCases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCasesInput() {
    return this._useCases;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      anthropic: zeroTrustCasbIntegrationAnthropicToTerraform(this._anthropic.internalValue),
      aws: zeroTrustCasbIntegrationAwsToTerraform(this._aws.internalValue),
      box: zeroTrustCasbIntegrationBoxToTerraform(this._box.internalValue),
      dlp_profiles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dlpProfiles),
      google_cloud_platform: zeroTrustCasbIntegrationGoogleCloudPlatformToTerraform(this._googleCloudPlatform.internalValue),
      google_workspace: zeroTrustCasbIntegrationGoogleWorkspaceToTerraform(this._googleWorkspace.internalValue),
      name: cdktf.stringToTerraform(this._name),
      openai: zeroTrustCasbIntegrationOpenaiToTerraform(this._openai.internalValue),
      paused: cdktf.booleanToTerraform(this._paused),
      permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._permissions),
      use_cases: cdktf.listMapper(cdktf.stringToTerraform, false)(this._useCases),
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
      anthropic: {
        value: zeroTrustCasbIntegrationAnthropicToHclTerraform(this._anthropic.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ZeroTrustCasbIntegrationAnthropic",
      },
      aws: {
        value: zeroTrustCasbIntegrationAwsToHclTerraform(this._aws.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ZeroTrustCasbIntegrationAws",
      },
      box: {
        value: zeroTrustCasbIntegrationBoxToHclTerraform(this._box.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ZeroTrustCasbIntegrationBox",
      },
      dlp_profiles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dlpProfiles),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      google_cloud_platform: {
        value: zeroTrustCasbIntegrationGoogleCloudPlatformToHclTerraform(this._googleCloudPlatform.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ZeroTrustCasbIntegrationGoogleCloudPlatform",
      },
      google_workspace: {
        value: zeroTrustCasbIntegrationGoogleWorkspaceToHclTerraform(this._googleWorkspace.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ZeroTrustCasbIntegrationGoogleWorkspace",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      openai: {
        value: zeroTrustCasbIntegrationOpenaiToHclTerraform(this._openai.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ZeroTrustCasbIntegrationOpenai",
      },
      paused: {
        value: cdktf.booleanToHclTerraform(this._paused),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      permissions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._permissions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      use_cases: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._useCases),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
