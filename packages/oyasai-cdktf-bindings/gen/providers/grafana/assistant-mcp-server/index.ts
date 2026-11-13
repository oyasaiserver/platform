// https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/assistant_mcp_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AssistantMcpServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Applications where this resource applies. Valid values: `assistant`, `loop`, `all`. Defaults to all applications when unset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/assistant_mcp_server#applications AssistantMcpServer#applications}
  */
  readonly applications?: string[];
  /**
  * Custom HTTP headers sent to the MCP server. Values are write-only and not returned by the API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/assistant_mcp_server#custom_headers AssistantMcpServer#custom_headers}
  */
  readonly customHeaders?: { [key: string]: string };
  /**
  * Optional description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/assistant_mcp_server#description AssistantMcpServer#description}
  */
  readonly description?: string;
  /**
  * Whether the resource is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/assistant_mcp_server#enabled AssistantMcpServer#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The MCP server integration name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/assistant_mcp_server#name AssistantMcpServer#name}
  */
  readonly name: string;
  /**
  * Whether the resource is visible to the whole tenant (`tenant`) or only the creating user (`user`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/assistant_mcp_server#scope AssistantMcpServer#scope}
  */
  readonly scope: string;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/assistant_mcp_server#configuration AssistantMcpServer#configuration}
  */
  readonly configuration?: AssistantMcpServerConfiguration;
  /**
  * github_app block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/assistant_mcp_server#github_app AssistantMcpServer#github_app}
  */
  readonly githubApp?: AssistantMcpServerGithubApp;
}
export interface AssistantMcpServerConfiguration {
  /**
  * Built-in provider ID (e.g. cursor). When set, tools are provided locally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/assistant_mcp_server#builtin_id AssistantMcpServer#builtin_id}
  */
  readonly builtinId?: string;
  /**
  * Tool approval policies keyed by tool name (`auto_approve`, `always_ask`, or empty for default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/assistant_mcp_server#tool_approval_policies AssistantMcpServer#tool_approval_policies}
  */
  readonly toolApprovalPolicies?: { [key: string]: string };
  /**
  * Tool preferences keyed by tool name (`enabled` or `disabled`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/assistant_mcp_server#tool_preferences AssistantMcpServer#tool_preferences}
  */
  readonly toolPreferences?: { [key: string]: string };
  /**
  * MCP server URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/assistant_mcp_server#url AssistantMcpServer#url}
  */
  readonly url?: string;
}

export function assistantMcpServerConfigurationToTerraform(struct?: AssistantMcpServerConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    builtin_id: cdktf.stringToTerraform(struct!.builtinId),
    tool_approval_policies: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.toolApprovalPolicies),
    tool_preferences: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.toolPreferences),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function assistantMcpServerConfigurationToHclTerraform(struct?: AssistantMcpServerConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    builtin_id: {
      value: cdktf.stringToHclTerraform(struct!.builtinId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tool_approval_policies: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.toolApprovalPolicies),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    tool_preferences: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.toolPreferences),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AssistantMcpServerConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AssistantMcpServerConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._builtinId !== undefined) {
      hasAnyValues = true;
      internalValueResult.builtinId = this._builtinId;
    }
    if (this._toolApprovalPolicies !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolApprovalPolicies = this._toolApprovalPolicies;
    }
    if (this._toolPreferences !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolPreferences = this._toolPreferences;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssistantMcpServerConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._builtinId = undefined;
      this._toolApprovalPolicies = undefined;
      this._toolPreferences = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._builtinId = value.builtinId;
      this._toolApprovalPolicies = value.toolApprovalPolicies;
      this._toolPreferences = value.toolPreferences;
      this._url = value.url;
    }
  }

  // builtin_id - computed: false, optional: true, required: false
  private _builtinId?: string; 
  public get builtinId() {
    return this.getStringAttribute('builtin_id');
  }
  public set builtinId(value: string) {
    this._builtinId = value;
  }
  public resetBuiltinId() {
    this._builtinId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get builtinIdInput() {
    return this._builtinId;
  }

  // tool_approval_policies - computed: false, optional: true, required: false
  private _toolApprovalPolicies?: { [key: string]: string }; 
  public get toolApprovalPolicies() {
    return this.getStringMapAttribute('tool_approval_policies');
  }
  public set toolApprovalPolicies(value: { [key: string]: string }) {
    this._toolApprovalPolicies = value;
  }
  public resetToolApprovalPolicies() {
    this._toolApprovalPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolApprovalPoliciesInput() {
    return this._toolApprovalPolicies;
  }

  // tool_preferences - computed: false, optional: true, required: false
  private _toolPreferences?: { [key: string]: string }; 
  public get toolPreferences() {
    return this.getStringMapAttribute('tool_preferences');
  }
  public set toolPreferences(value: { [key: string]: string }) {
    this._toolPreferences = value;
  }
  public resetToolPreferences() {
    this._toolPreferences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolPreferencesInput() {
    return this._toolPreferences;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface AssistantMcpServerGithubApp {
  /**
  * The GitHub App ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/assistant_mcp_server#app_id AssistantMcpServer#app_id}
  */
  readonly appId?: number;
  /**
  * The ID of the GitHub App installation on your organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/assistant_mcp_server#installation_id AssistantMcpServer#installation_id}
  */
  readonly installationId?: number;
  /**
  * The GitHub App private key in PEM format. Terraform sends it to the API but never stores it in state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/assistant_mcp_server#private_key AssistantMcpServer#private_key}
  */
  readonly privateKey?: string;
}

export function assistantMcpServerGithubAppToTerraform(struct?: AssistantMcpServerGithubApp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_id: cdktf.numberToTerraform(struct!.appId),
    installation_id: cdktf.numberToTerraform(struct!.installationId),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
  }
}


export function assistantMcpServerGithubAppToHclTerraform(struct?: AssistantMcpServerGithubApp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_id: {
      value: cdktf.numberToHclTerraform(struct!.appId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    installation_id: {
      value: cdktf.numberToHclTerraform(struct!.installationId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AssistantMcpServerGithubAppOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AssistantMcpServerGithubApp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appId !== undefined) {
      hasAnyValues = true;
      internalValueResult.appId = this._appId;
    }
    if (this._installationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.installationId = this._installationId;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssistantMcpServerGithubApp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appId = undefined;
      this._installationId = undefined;
      this._privateKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appId = value.appId;
      this._installationId = value.installationId;
      this._privateKey = value.privateKey;
    }
  }

  // app_id - computed: false, optional: true, required: false
  private _appId?: number; 
  public get appId() {
    return this.getNumberAttribute('app_id');
  }
  public set appId(value: number) {
    this._appId = value;
  }
  public resetAppId() {
    this._appId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
  }

  // installation_id - computed: false, optional: true, required: false
  private _installationId?: number; 
  public get installationId() {
    return this.getNumberAttribute('installation_id');
  }
  public set installationId(value: number) {
    this._installationId = value;
  }
  public resetInstallationId() {
    this._installationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installationIdInput() {
    return this._installationId;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // private_key_hash - computed: true, optional: false, required: false
  public get privateKeyHash() {
    return this.getStringAttribute('private_key_hash');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/assistant_mcp_server grafana_assistant_mcp_server}
*/
export class AssistantMcpServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_assistant_mcp_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AssistantMcpServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AssistantMcpServer to import
  * @param importFromId The id of the existing AssistantMcpServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/assistant_mcp_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AssistantMcpServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_assistant_mcp_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/assistant_mcp_server grafana_assistant_mcp_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AssistantMcpServerConfig
  */
  public constructor(scope: Construct, id: string, config: AssistantMcpServerConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_assistant_mcp_server',
      terraformGeneratorMetadata: {
        providerName: 'grafana',
        providerVersion: '4.54.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applications = config.applications;
    this._customHeaders = config.customHeaders;
    this._description = config.description;
    this._enabled = config.enabled;
    this._name = config.name;
    this._scope = config.scope;
    this._configuration.internalValue = config.configuration;
    this._githubApp.internalValue = config.githubApp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // applications - computed: true, optional: true, required: false
  private _applications?: string[]; 
  public get applications() {
    return this.getListAttribute('applications');
  }
  public set applications(value: string[]) {
    this._applications = value;
  }
  public resetApplications() {
    this._applications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationsInput() {
    return this._applications;
  }

  // custom_headers - computed: false, optional: true, required: false
  private _customHeaders?: { [key: string]: string }; 
  public get customHeaders() {
    return this.getStringMapAttribute('custom_headers');
  }
  public set customHeaders(value: { [key: string]: string }) {
    this._customHeaders = value;
  }
  public resetCustomHeaders() {
    this._customHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHeadersInput() {
    return this._customHeaders;
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

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration = new AssistantMcpServerConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: AssistantMcpServerConfiguration) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // github_app - computed: false, optional: true, required: false
  private _githubApp = new AssistantMcpServerGithubAppOutputReference(this, "github_app");
  public get githubApp() {
    return this._githubApp;
  }
  public putGithubApp(value: AssistantMcpServerGithubApp) {
    this._githubApp.internalValue = value;
  }
  public resetGithubApp() {
    this._githubApp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubAppInput() {
    return this._githubApp.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      applications: cdktf.listMapper(cdktf.stringToTerraform, false)(this._applications),
      custom_headers: cdktf.hashMapper(cdktf.stringToTerraform)(this._customHeaders),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      name: cdktf.stringToTerraform(this._name),
      scope: cdktf.stringToTerraform(this._scope),
      configuration: assistantMcpServerConfigurationToTerraform(this._configuration.internalValue),
      github_app: assistantMcpServerGithubAppToTerraform(this._githubApp.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      applications: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._applications),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      custom_headers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._customHeaders),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration: {
        value: assistantMcpServerConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AssistantMcpServerConfiguration",
      },
      github_app: {
        value: assistantMcpServerGithubAppToHclTerraform(this._githubApp.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AssistantMcpServerGithubApp",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
