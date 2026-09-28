// https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_outgoing_webhook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OncallOutgoingWebhookConfig extends cdktf.TerraformMetaArguments {
  /**
  * The auth data of the webhook. Used in Authorization header instead of user/password auth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_outgoing_webhook#authorization_header OncallOutgoingWebhook#authorization_header}
  */
  readonly authorizationHeader?: string;
  /**
  * The data of the webhook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_outgoing_webhook#data OncallOutgoingWebhook#data}
  */
  readonly data?: string;
  /**
  * Toggle to send the entire webhook payload instead of using the values in the Data field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_outgoing_webhook#forward_whole_payload OncallOutgoingWebhook#forward_whole_payload}
  */
  readonly forwardWholePayload?: boolean | cdktf.IResolvable;
  /**
  * Headers to add to the outgoing webhook request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_outgoing_webhook#headers OncallOutgoingWebhook#headers}
  */
  readonly headers?: string;
  /**
  * The HTTP method used in the request made by the outgoing webhook. Defaults to `POST`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_outgoing_webhook#http_method OncallOutgoingWebhook#http_method}
  */
  readonly httpMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_outgoing_webhook#id OncallOutgoingWebhook#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Restricts the outgoing webhook to only trigger if the event came from a selected integration. If no integrations are selected the outgoing webhook will trigger for any integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_outgoing_webhook#integration_filter OncallOutgoingWebhook#integration_filter}
  */
  readonly integrationFilter?: string[];
  /**
  * Controls whether the outgoing webhook will trigger or is ignored. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_outgoing_webhook#is_webhook_enabled OncallOutgoingWebhook#is_webhook_enabled}
  */
  readonly isWebhookEnabled?: boolean | cdktf.IResolvable;
  /**
  * The name of the outgoing webhook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_outgoing_webhook#name OncallOutgoingWebhook#name}
  */
  readonly name: string;
  /**
  * The auth data of the webhook. Used for Basic authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_outgoing_webhook#password OncallOutgoingWebhook#password}
  */
  readonly password?: string;
  /**
  * The preset of the outgoing webhook. Possible values are: `simple_webhook`, `advanced_webhook`, `grafana_sift`, `grafana_assistant`, `incident_webhook`. If no preset is set, the default preset is `advanced_webhook`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_outgoing_webhook#preset OncallOutgoingWebhook#preset}
  */
  readonly preset?: string;
  /**
  * The ID of the OnCall team (using the `grafana_oncall_team` datasource).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_outgoing_webhook#team_id OncallOutgoingWebhook#team_id}
  */
  readonly teamId?: string;
  /**
  * A template used to dynamically determine whether the webhook should execute based on the content of the payload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_outgoing_webhook#trigger_template OncallOutgoingWebhook#trigger_template}
  */
  readonly triggerTemplate?: string;
  /**
  * The type of event that will cause this outgoing webhook to execute. The events available will depend on the preset used. For alert group webhooks, the possible triggers are: `escalation`, `alert group created`, `status change`, `acknowledge`, `resolve`, `silence`, `unsilence`, `unresolve`, `unacknowledge`, `resolution note added`, `personal notification`; for incident webhooks: `incident declared`, `incident changed`, `incident resolved`. Defaults to `escalation`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_outgoing_webhook#trigger_type OncallOutgoingWebhook#trigger_type}
  */
  readonly triggerType?: string;
  /**
  * The webhook URL. Required when not using a preset that controls this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_outgoing_webhook#url OncallOutgoingWebhook#url}
  */
  readonly url?: string;
  /**
  * Username to use when making the outgoing webhook request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_outgoing_webhook#user OncallOutgoingWebhook#user}
  */
  readonly user?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_outgoing_webhook grafana_oncall_outgoing_webhook}
*/
export class OncallOutgoingWebhook extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_oncall_outgoing_webhook";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OncallOutgoingWebhook resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OncallOutgoingWebhook to import
  * @param importFromId The id of the existing OncallOutgoingWebhook that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_outgoing_webhook#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OncallOutgoingWebhook to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_oncall_outgoing_webhook", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_outgoing_webhook grafana_oncall_outgoing_webhook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OncallOutgoingWebhookConfig
  */
  public constructor(scope: Construct, id: string, config: OncallOutgoingWebhookConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_oncall_outgoing_webhook',
      terraformGeneratorMetadata: {
        providerName: 'grafana',
        providerVersion: '4.46.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authorizationHeader = config.authorizationHeader;
    this._data = config.data;
    this._forwardWholePayload = config.forwardWholePayload;
    this._headers = config.headers;
    this._httpMethod = config.httpMethod;
    this._id = config.id;
    this._integrationFilter = config.integrationFilter;
    this._isWebhookEnabled = config.isWebhookEnabled;
    this._name = config.name;
    this._password = config.password;
    this._preset = config.preset;
    this._teamId = config.teamId;
    this._triggerTemplate = config.triggerTemplate;
    this._triggerType = config.triggerType;
    this._url = config.url;
    this._user = config.user;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorization_header - computed: false, optional: true, required: false
  private _authorizationHeader?: string; 
  public get authorizationHeader() {
    return this.getStringAttribute('authorization_header');
  }
  public set authorizationHeader(value: string) {
    this._authorizationHeader = value;
  }
  public resetAuthorizationHeader() {
    this._authorizationHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationHeaderInput() {
    return this._authorizationHeader;
  }

  // data - computed: false, optional: true, required: false
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // forward_whole_payload - computed: false, optional: true, required: false
  private _forwardWholePayload?: boolean | cdktf.IResolvable; 
  public get forwardWholePayload() {
    return this.getBooleanAttribute('forward_whole_payload');
  }
  public set forwardWholePayload(value: boolean | cdktf.IResolvable) {
    this._forwardWholePayload = value;
  }
  public resetForwardWholePayload() {
    this._forwardWholePayload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardWholePayloadInput() {
    return this._forwardWholePayload;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: string; 
  public get headers() {
    return this.getStringAttribute('headers');
  }
  public set headers(value: string) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // http_method - computed: false, optional: true, required: false
  private _httpMethod?: string; 
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }
  public set httpMethod(value: string) {
    this._httpMethod = value;
  }
  public resetHttpMethod() {
    this._httpMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // integration_filter - computed: false, optional: true, required: false
  private _integrationFilter?: string[]; 
  public get integrationFilter() {
    return this.getListAttribute('integration_filter');
  }
  public set integrationFilter(value: string[]) {
    this._integrationFilter = value;
  }
  public resetIntegrationFilter() {
    this._integrationFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationFilterInput() {
    return this._integrationFilter;
  }

  // is_webhook_enabled - computed: false, optional: true, required: false
  private _isWebhookEnabled?: boolean | cdktf.IResolvable; 
  public get isWebhookEnabled() {
    return this.getBooleanAttribute('is_webhook_enabled');
  }
  public set isWebhookEnabled(value: boolean | cdktf.IResolvable) {
    this._isWebhookEnabled = value;
  }
  public resetIsWebhookEnabled() {
    this._isWebhookEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isWebhookEnabledInput() {
    return this._isWebhookEnabled;
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // preset - computed: false, optional: true, required: false
  private _preset?: string; 
  public get preset() {
    return this.getStringAttribute('preset');
  }
  public set preset(value: string) {
    this._preset = value;
  }
  public resetPreset() {
    this._preset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presetInput() {
    return this._preset;
  }

  // team_id - computed: false, optional: true, required: false
  private _teamId?: string; 
  public get teamId() {
    return this.getStringAttribute('team_id');
  }
  public set teamId(value: string) {
    this._teamId = value;
  }
  public resetTeamId() {
    this._teamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdInput() {
    return this._teamId;
  }

  // trigger_template - computed: false, optional: true, required: false
  private _triggerTemplate?: string; 
  public get triggerTemplate() {
    return this.getStringAttribute('trigger_template');
  }
  public set triggerTemplate(value: string) {
    this._triggerTemplate = value;
  }
  public resetTriggerTemplate() {
    this._triggerTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerTemplateInput() {
    return this._triggerTemplate;
  }

  // trigger_type - computed: false, optional: true, required: false
  private _triggerType?: string; 
  public get triggerType() {
    return this.getStringAttribute('trigger_type');
  }
  public set triggerType(value: string) {
    this._triggerType = value;
  }
  public resetTriggerType() {
    this._triggerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerTypeInput() {
    return this._triggerType;
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

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authorization_header: cdktf.stringToTerraform(this._authorizationHeader),
      data: cdktf.stringToTerraform(this._data),
      forward_whole_payload: cdktf.booleanToTerraform(this._forwardWholePayload),
      headers: cdktf.stringToTerraform(this._headers),
      http_method: cdktf.stringToTerraform(this._httpMethod),
      id: cdktf.stringToTerraform(this._id),
      integration_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(this._integrationFilter),
      is_webhook_enabled: cdktf.booleanToTerraform(this._isWebhookEnabled),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      preset: cdktf.stringToTerraform(this._preset),
      team_id: cdktf.stringToTerraform(this._teamId),
      trigger_template: cdktf.stringToTerraform(this._triggerTemplate),
      trigger_type: cdktf.stringToTerraform(this._triggerType),
      url: cdktf.stringToTerraform(this._url),
      user: cdktf.stringToTerraform(this._user),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authorization_header: {
        value: cdktf.stringToHclTerraform(this._authorizationHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data: {
        value: cdktf.stringToHclTerraform(this._data),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forward_whole_payload: {
        value: cdktf.booleanToHclTerraform(this._forwardWholePayload),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      headers: {
        value: cdktf.stringToHclTerraform(this._headers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_method: {
        value: cdktf.stringToHclTerraform(this._httpMethod),
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
      integration_filter: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._integrationFilter),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      is_webhook_enabled: {
        value: cdktf.booleanToHclTerraform(this._isWebhookEnabled),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preset: {
        value: cdktf.stringToHclTerraform(this._preset),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      team_id: {
        value: cdktf.stringToHclTerraform(this._teamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trigger_template: {
        value: cdktf.stringToHclTerraform(this._triggerTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trigger_type: {
        value: cdktf.stringToHclTerraform(this._triggerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user: {
        value: cdktf.stringToHclTerraform(this._user),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
