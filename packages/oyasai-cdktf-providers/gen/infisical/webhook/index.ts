// https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/webhook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebhookConfig extends cdktf.TerraformMetaArguments {
  /**
  * The slug of the environment the webhook listens to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/webhook#environment Webhook#environment}
  */
  readonly environment: string;
  /**
  * The events that trigger the webhook. Options: secrets.modified, secrets.rotation-failed. An empty set means the webhook fires on every supported event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/webhook#events_filter Webhook#events_filter}
  */
  readonly eventsFilter?: string[];
  /**
  * Whether the webhook is disabled. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/webhook#is_disabled Webhook#is_disabled}
  */
  readonly isDisabled?: boolean | cdktf.IResolvable;
  /**
  * The ID of the project the webhook belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/webhook#project_id Webhook#project_id}
  */
  readonly projectId: string;
  /**
  * The secret path the webhook listens to. Defaults to '/'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/webhook#secret_path Webhook#secret_path}
  */
  readonly secretPath?: string;
  /**
  * The webhook type. Options: general, slack, microsoft-teams. Defaults to 'general'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/webhook#type Webhook#type}
  */
  readonly type?: string;
  /**
  * The secret key used to sign the webhook payload so the receiver can verify it. Write-only: it is never returned by the API, so it cannot be imported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/webhook#webhook_secret_key Webhook#webhook_secret_key}
  */
  readonly webhookSecretKey?: string;
  /**
  * The URL Infisical sends the event payload to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/webhook#webhook_url Webhook#webhook_url}
  */
  readonly webhookUrl: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/webhook infisical_webhook}
*/
export class Webhook extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_webhook";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Webhook resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Webhook to import
  * @param importFromId The id of the existing Webhook that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/webhook#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Webhook to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_webhook", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/webhook infisical_webhook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebhookConfig
  */
  public constructor(scope: Construct, id: string, config: WebhookConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_webhook',
      terraformGeneratorMetadata: {
        providerName: 'infisical',
        providerVersion: '0.16.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._environment = config.environment;
    this._eventsFilter = config.eventsFilter;
    this._isDisabled = config.isDisabled;
    this._projectId = config.projectId;
    this._secretPath = config.secretPath;
    this._type = config.type;
    this._webhookSecretKey = config.webhookSecretKey;
    this._webhookUrl = config.webhookUrl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // environment - computed: false, optional: false, required: true
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // events_filter - computed: true, optional: true, required: false
  private _eventsFilter?: string[]; 
  public get eventsFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('events_filter'));
  }
  public set eventsFilter(value: string[]) {
    this._eventsFilter = value;
  }
  public resetEventsFilter() {
    this._eventsFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsFilterInput() {
    return this._eventsFilter;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_disabled - computed: true, optional: true, required: false
  private _isDisabled?: boolean | cdktf.IResolvable; 
  public get isDisabled() {
    return this.getBooleanAttribute('is_disabled');
  }
  public set isDisabled(value: boolean | cdktf.IResolvable) {
    this._isDisabled = value;
  }
  public resetIsDisabled() {
    this._isDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDisabledInput() {
    return this._isDisabled;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // secret_path - computed: true, optional: true, required: false
  private _secretPath?: string; 
  public get secretPath() {
    return this.getStringAttribute('secret_path');
  }
  public set secretPath(value: string) {
    this._secretPath = value;
  }
  public resetSecretPath() {
    this._secretPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretPathInput() {
    return this._secretPath;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // webhook_secret_key - computed: false, optional: true, required: false
  private _webhookSecretKey?: string; 
  public get webhookSecretKey() {
    return this.getStringAttribute('webhook_secret_key');
  }
  public set webhookSecretKey(value: string) {
    this._webhookSecretKey = value;
  }
  public resetWebhookSecretKey() {
    this._webhookSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookSecretKeyInput() {
    return this._webhookSecretKey;
  }

  // webhook_url - computed: false, optional: false, required: true
  private _webhookUrl?: string; 
  public get webhookUrl() {
    return this.getStringAttribute('webhook_url');
  }
  public set webhookUrl(value: string) {
    this._webhookUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookUrlInput() {
    return this._webhookUrl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      environment: cdktf.stringToTerraform(this._environment),
      events_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(this._eventsFilter),
      is_disabled: cdktf.booleanToTerraform(this._isDisabled),
      project_id: cdktf.stringToTerraform(this._projectId),
      secret_path: cdktf.stringToTerraform(this._secretPath),
      type: cdktf.stringToTerraform(this._type),
      webhook_secret_key: cdktf.stringToTerraform(this._webhookSecretKey),
      webhook_url: cdktf.stringToTerraform(this._webhookUrl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      environment: {
        value: cdktf.stringToHclTerraform(this._environment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      events_filter: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._eventsFilter),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      is_disabled: {
        value: cdktf.booleanToHclTerraform(this._isDisabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_path: {
        value: cdktf.stringToHclTerraform(this._secretPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webhook_secret_key: {
        value: cdktf.stringToHclTerraform(this._webhookSecretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webhook_url: {
        value: cdktf.stringToHclTerraform(this._webhookUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
