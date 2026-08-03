// https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/zero_trust_access_ai_controls_mcp_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZeroTrustAccessAiControlsMcpServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/zero_trust_access_ai_controls_mcp_server#account_id ZeroTrustAccessAiControlsMcpServer#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/zero_trust_access_ai_controls_mcp_server#auth_credentials ZeroTrustAccessAiControlsMcpServer#auth_credentials}
  */
  readonly authCredentials?: string;
  /**
  * Available values: "oauth", "bearer", "unauthenticated".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/zero_trust_access_ai_controls_mcp_server#auth_type ZeroTrustAccessAiControlsMcpServer#auth_type}
  */
  readonly authType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/zero_trust_access_ai_controls_mcp_server#description ZeroTrustAccessAiControlsMcpServer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/zero_trust_access_ai_controls_mcp_server#hostname ZeroTrustAccessAiControlsMcpServer#hostname}
  */
  readonly hostname: string;
  /**
  * server id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/zero_trust_access_ai_controls_mcp_server#id ZeroTrustAccessAiControlsMcpServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * When true, the gateway worker uses the shared Cloudflare-owned OAuth callback endpoint as the redirect_uri for upstream on-behalf OAuth, instead of the customer portal hostname. New public server creates default to true; existing servers default to false from migration until explicitly updated. Effective behavior is gated by the gateway worker's per-env rollout mode KV key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/zero_trust_access_ai_controls_mcp_server#is_shared_oauth_callback_enabled ZeroTrustAccessAiControlsMcpServer#is_shared_oauth_callback_enabled}
  */
  readonly isSharedOauthCallbackEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/zero_trust_access_ai_controls_mcp_server#name ZeroTrustAccessAiControlsMcpServer#name}
  */
  readonly name: string;
  /**
  * Route outbound traffic to this MCP server through Zero Trust Secure Web Gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/zero_trust_access_ai_controls_mcp_server#secure_web_gateway ZeroTrustAccessAiControlsMcpServer#secure_web_gateway}
  */
  readonly secureWebGateway?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/zero_trust_access_ai_controls_mcp_server#updated_prompts ZeroTrustAccessAiControlsMcpServer#updated_prompts}
  */
  readonly updatedPrompts?: ZeroTrustAccessAiControlsMcpServerUpdatedPrompts[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/zero_trust_access_ai_controls_mcp_server#updated_tools ZeroTrustAccessAiControlsMcpServer#updated_tools}
  */
  readonly updatedTools?: ZeroTrustAccessAiControlsMcpServerUpdatedTools[] | cdktf.IResolvable;
}
export interface ZeroTrustAccessAiControlsMcpServerErrorDetails {
}

export function zeroTrustAccessAiControlsMcpServerErrorDetailsToTerraform(struct?: ZeroTrustAccessAiControlsMcpServerErrorDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function zeroTrustAccessAiControlsMcpServerErrorDetailsToHclTerraform(struct?: ZeroTrustAccessAiControlsMcpServerErrorDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessAiControlsMcpServerErrorDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessAiControlsMcpServerErrorDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cause - computed: true, optional: false, required: false
  public get cause() {
    return this.getStringAttribute('cause');
  }

  // is_upstream - computed: true, optional: false, required: false
  public get isUpstream() {
    return this.getBooleanAttribute('is_upstream');
  }

  // mcp_code - computed: true, optional: false, required: false
  public get mcpCode() {
    return this.getNumberAttribute('mcp_code');
  }

  // retryable - computed: true, optional: false, required: false
  public get retryable() {
    return this.getBooleanAttribute('retryable');
  }

  // status_code - computed: true, optional: false, required: false
  public get statusCode() {
    return this.getNumberAttribute('status_code');
  }
}
export interface ZeroTrustAccessAiControlsMcpServerUpdatedPrompts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/zero_trust_access_ai_controls_mcp_server#alias ZeroTrustAccessAiControlsMcpServer#alias}
  */
  readonly alias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/zero_trust_access_ai_controls_mcp_server#description ZeroTrustAccessAiControlsMcpServer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/zero_trust_access_ai_controls_mcp_server#enabled ZeroTrustAccessAiControlsMcpServer#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/zero_trust_access_ai_controls_mcp_server#name ZeroTrustAccessAiControlsMcpServer#name}
  */
  readonly name: string;
}

export function zeroTrustAccessAiControlsMcpServerUpdatedPromptsToTerraform(struct?: ZeroTrustAccessAiControlsMcpServerUpdatedPrompts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    description: cdktf.stringToTerraform(struct!.description),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function zeroTrustAccessAiControlsMcpServerUpdatedPromptsToHclTerraform(struct?: ZeroTrustAccessAiControlsMcpServerUpdatedPrompts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias: {
      value: cdktf.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ZeroTrustAccessAiControlsMcpServerUpdatedPrompts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessAiControlsMcpServerUpdatedPrompts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._description = undefined;
      this._enabled = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._description = value.description;
      this._enabled = value.enabled;
      this._name = value.name;
    }
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
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

  // enabled - computed: false, optional: true, required: false
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
}

export class ZeroTrustAccessAiControlsMcpServerUpdatedPromptsList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessAiControlsMcpServerUpdatedPrompts[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference {
    return new ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustAccessAiControlsMcpServerUpdatedTools {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/zero_trust_access_ai_controls_mcp_server#alias ZeroTrustAccessAiControlsMcpServer#alias}
  */
  readonly alias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/zero_trust_access_ai_controls_mcp_server#description ZeroTrustAccessAiControlsMcpServer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/zero_trust_access_ai_controls_mcp_server#enabled ZeroTrustAccessAiControlsMcpServer#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/zero_trust_access_ai_controls_mcp_server#name ZeroTrustAccessAiControlsMcpServer#name}
  */
  readonly name: string;
}

export function zeroTrustAccessAiControlsMcpServerUpdatedToolsToTerraform(struct?: ZeroTrustAccessAiControlsMcpServerUpdatedTools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    description: cdktf.stringToTerraform(struct!.description),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function zeroTrustAccessAiControlsMcpServerUpdatedToolsToHclTerraform(struct?: ZeroTrustAccessAiControlsMcpServerUpdatedTools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias: {
      value: cdktf.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ZeroTrustAccessAiControlsMcpServerUpdatedTools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessAiControlsMcpServerUpdatedTools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._description = undefined;
      this._enabled = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._description = value.description;
      this._enabled = value.enabled;
      this._name = value.name;
    }
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
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

  // enabled - computed: false, optional: true, required: false
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
}

export class ZeroTrustAccessAiControlsMcpServerUpdatedToolsList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessAiControlsMcpServerUpdatedTools[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference {
    return new ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/zero_trust_access_ai_controls_mcp_server cloudflare_zero_trust_access_ai_controls_mcp_server}
*/
export class ZeroTrustAccessAiControlsMcpServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_access_ai_controls_mcp_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZeroTrustAccessAiControlsMcpServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZeroTrustAccessAiControlsMcpServer to import
  * @param importFromId The id of the existing ZeroTrustAccessAiControlsMcpServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/zero_trust_access_ai_controls_mcp_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZeroTrustAccessAiControlsMcpServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_access_ai_controls_mcp_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/zero_trust_access_ai_controls_mcp_server cloudflare_zero_trust_access_ai_controls_mcp_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZeroTrustAccessAiControlsMcpServerConfig
  */
  public constructor(scope: Construct, id: string, config: ZeroTrustAccessAiControlsMcpServerConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_access_ai_controls_mcp_server',
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
    this._authCredentials = config.authCredentials;
    this._authType = config.authType;
    this._description = config.description;
    this._hostname = config.hostname;
    this._id = config.id;
    this._isSharedOauthCallbackEnabled = config.isSharedOauthCallbackEnabled;
    this._name = config.name;
    this._secureWebGateway = config.secureWebGateway;
    this._updatedPrompts.internalValue = config.updatedPrompts;
    this._updatedTools.internalValue = config.updatedTools;
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

  // auth_credentials - computed: false, optional: true, required: false
  private _authCredentials?: string; 
  public get authCredentials() {
    return this.getStringAttribute('auth_credentials');
  }
  public set authCredentials(value: string) {
    this._authCredentials = value;
  }
  public resetAuthCredentials() {
    this._authCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authCredentialsInput() {
    return this._authCredentials;
  }

  // auth_type - computed: false, optional: false, required: true
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
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

  // error - computed: true, optional: false, required: false
  public get error() {
    return this.getStringAttribute('error');
  }

  // error_details - computed: true, optional: false, required: false
  private _errorDetails = new ZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference(this, "error_details");
  public get errorDetails() {
    return this._errorDetails;
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // is_shared_oauth_callback_enabled - computed: false, optional: true, required: false
  private _isSharedOauthCallbackEnabled?: boolean | cdktf.IResolvable; 
  public get isSharedOauthCallbackEnabled() {
    return this.getBooleanAttribute('is_shared_oauth_callback_enabled');
  }
  public set isSharedOauthCallbackEnabled(value: boolean | cdktf.IResolvable) {
    this._isSharedOauthCallbackEnabled = value;
  }
  public resetIsSharedOauthCallbackEnabled() {
    this._isSharedOauthCallbackEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSharedOauthCallbackEnabledInput() {
    return this._isSharedOauthCallbackEnabled;
  }

  // last_successful_sync - computed: true, optional: false, required: false
  public get lastSuccessfulSync() {
    return this.getStringAttribute('last_successful_sync');
  }

  // last_synced - computed: true, optional: false, required: false
  public get lastSynced() {
    return this.getStringAttribute('last_synced');
  }

  // modified_at - computed: true, optional: false, required: false
  public get modifiedAt() {
    return this.getStringAttribute('modified_at');
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
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

  // prompts - computed: true, optional: false, required: false
  private _prompts = new cdktf.StringMapList(this, "prompts", false);
  public get prompts() {
    return this._prompts;
  }

  // secure_web_gateway - computed: true, optional: true, required: false
  private _secureWebGateway?: boolean | cdktf.IResolvable; 
  public get secureWebGateway() {
    return this.getBooleanAttribute('secure_web_gateway');
  }
  public set secureWebGateway(value: boolean | cdktf.IResolvable) {
    this._secureWebGateway = value;
  }
  public resetSecureWebGateway() {
    this._secureWebGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureWebGatewayInput() {
    return this._secureWebGateway;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tools - computed: true, optional: false, required: false
  private _tools = new cdktf.StringMapList(this, "tools", false);
  public get tools() {
    return this._tools;
  }

  // updated_prompts - computed: false, optional: true, required: false
  private _updatedPrompts = new ZeroTrustAccessAiControlsMcpServerUpdatedPromptsList(this, "updated_prompts", false);
  public get updatedPrompts() {
    return this._updatedPrompts;
  }
  public putUpdatedPrompts(value: ZeroTrustAccessAiControlsMcpServerUpdatedPrompts[] | cdktf.IResolvable) {
    this._updatedPrompts.internalValue = value;
  }
  public resetUpdatedPrompts() {
    this._updatedPrompts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedPromptsInput() {
    return this._updatedPrompts.internalValue;
  }

  // updated_tools - computed: false, optional: true, required: false
  private _updatedTools = new ZeroTrustAccessAiControlsMcpServerUpdatedToolsList(this, "updated_tools", false);
  public get updatedTools() {
    return this._updatedTools;
  }
  public putUpdatedTools(value: ZeroTrustAccessAiControlsMcpServerUpdatedTools[] | cdktf.IResolvable) {
    this._updatedTools.internalValue = value;
  }
  public resetUpdatedTools() {
    this._updatedTools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedToolsInput() {
    return this._updatedTools.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      auth_credentials: cdktf.stringToTerraform(this._authCredentials),
      auth_type: cdktf.stringToTerraform(this._authType),
      description: cdktf.stringToTerraform(this._description),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      is_shared_oauth_callback_enabled: cdktf.booleanToTerraform(this._isSharedOauthCallbackEnabled),
      name: cdktf.stringToTerraform(this._name),
      secure_web_gateway: cdktf.booleanToTerraform(this._secureWebGateway),
      updated_prompts: cdktf.listMapper(zeroTrustAccessAiControlsMcpServerUpdatedPromptsToTerraform, false)(this._updatedPrompts.internalValue),
      updated_tools: cdktf.listMapper(zeroTrustAccessAiControlsMcpServerUpdatedToolsToTerraform, false)(this._updatedTools.internalValue),
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
      auth_credentials: {
        value: cdktf.stringToHclTerraform(this._authCredentials),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_type: {
        value: cdktf.stringToHclTerraform(this._authType),
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
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_shared_oauth_callback_enabled: {
        value: cdktf.booleanToHclTerraform(this._isSharedOauthCallbackEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secure_web_gateway: {
        value: cdktf.booleanToHclTerraform(this._secureWebGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      updated_prompts: {
        value: cdktf.listMapperHcl(zeroTrustAccessAiControlsMcpServerUpdatedPromptsToHclTerraform, false)(this._updatedPrompts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ZeroTrustAccessAiControlsMcpServerUpdatedPromptsList",
      },
      updated_tools: {
        value: cdktf.listMapperHcl(zeroTrustAccessAiControlsMcpServerUpdatedToolsToHclTerraform, false)(this._updatedTools.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ZeroTrustAccessAiControlsMcpServerUpdatedToolsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
