// https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_user_notification_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OncallUserNotificationRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * A time in seconds to wait (when `type=wait`). Can be 60, 300, 900, 1800, 3600
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_user_notification_rule#duration OncallUserNotificationRule#duration}
  */
  readonly duration?: number;
  /**
  * Boolean value which indicates if a rule is “important”
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_user_notification_rule#important OncallUserNotificationRule#important}
  */
  readonly important?: boolean | cdktf.IResolvable;
  /**
  * Personal notification rules execute one after another starting from position=0. A new escalation policy created with a position of an existing escalation policy will move the old one (and all following) down on the list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_user_notification_rule#position OncallUserNotificationRule#position}
  */
  readonly position?: number;
  /**
  * The type of notification rule. Can be wait, notify_by_slack, notify_by_msteams, notify_by_sms, notify_by_phone_call, notify_by_telegram, notify_by_email, notify_by_mobile_app, notify_by_mobile_app_critical. NOTE: `notify_by_msteams` is only available for Grafana Cloud customers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_user_notification_rule#type OncallUserNotificationRule#type}
  */
  readonly type: string;
  /**
  * User ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_user_notification_rule#user_id OncallUserNotificationRule#user_id}
  */
  readonly userId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_user_notification_rule grafana_oncall_user_notification_rule}
*/
export class OncallUserNotificationRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_oncall_user_notification_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OncallUserNotificationRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OncallUserNotificationRule to import
  * @param importFromId The id of the existing OncallUserNotificationRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_user_notification_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OncallUserNotificationRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_oncall_user_notification_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_user_notification_rule grafana_oncall_user_notification_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OncallUserNotificationRuleConfig
  */
  public constructor(scope: Construct, id: string, config: OncallUserNotificationRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_oncall_user_notification_rule',
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
    this._duration = config.duration;
    this._important = config.important;
    this._position = config.position;
    this._type = config.type;
    this._userId = config.userId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // duration - computed: false, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // important - computed: true, optional: true, required: false
  private _important?: boolean | cdktf.IResolvable; 
  public get important() {
    return this.getBooleanAttribute('important');
  }
  public set important(value: boolean | cdktf.IResolvable) {
    this._important = value;
  }
  public resetImportant() {
    this._important = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importantInput() {
    return this._important;
  }

  // position - computed: false, optional: true, required: false
  private _position?: number; 
  public get position() {
    return this.getNumberAttribute('position');
  }
  public set position(value: number) {
    this._position = value;
  }
  public resetPosition() {
    this._position = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // user_id - computed: false, optional: false, required: true
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      duration: cdktf.numberToTerraform(this._duration),
      important: cdktf.booleanToTerraform(this._important),
      position: cdktf.numberToTerraform(this._position),
      type: cdktf.stringToTerraform(this._type),
      user_id: cdktf.stringToTerraform(this._userId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      duration: {
        value: cdktf.numberToHclTerraform(this._duration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      important: {
        value: cdktf.booleanToHclTerraform(this._important),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      position: {
        value: cdktf.numberToHclTerraform(this._position),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_id: {
        value: cdktf.stringToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
