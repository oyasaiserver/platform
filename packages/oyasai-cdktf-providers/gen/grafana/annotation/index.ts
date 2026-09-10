// https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/annotation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AnnotationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The UID of the dashboard on which to create the annotation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/annotation#dashboard_uid Annotation#dashboard_uid}
  */
  readonly dashboardUid?: string;
  /**
  * The Organization ID. If not set, the default organization is used for basic authentication, or the one that owns your service account for token authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/annotation#org_id Annotation#org_id}
  */
  readonly orgId?: string;
  /**
  * The ID of the dashboard panel on which to create the annotation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/annotation#panel_id Annotation#panel_id}
  */
  readonly panelId?: number;
  /**
  * The tags to associate with the annotation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/annotation#tags Annotation#tags}
  */
  readonly tags?: string[];
  /**
  * The text to associate with the annotation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/annotation#text Annotation#text}
  */
  readonly text: string;
  /**
  * The RFC 3339-formatted time string indicating the annotation's time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/annotation#time Annotation#time}
  */
  readonly time?: string;
  /**
  * The RFC 3339-formatted time string indicating the annotation's end time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/annotation#time_end Annotation#time_end}
  */
  readonly timeEnd?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/annotation grafana_annotation}
*/
export class Annotation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_annotation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Annotation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Annotation to import
  * @param importFromId The id of the existing Annotation that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/annotation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Annotation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_annotation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/annotation grafana_annotation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AnnotationConfig
  */
  public constructor(scope: Construct, id: string, config: AnnotationConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_annotation',
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
    this._dashboardUid = config.dashboardUid;
    this._orgId = config.orgId;
    this._panelId = config.panelId;
    this._tags = config.tags;
    this._text = config.text;
    this._time = config.time;
    this._timeEnd = config.timeEnd;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dashboard_uid - computed: false, optional: true, required: false
  private _dashboardUid?: string; 
  public get dashboardUid() {
    return this.getStringAttribute('dashboard_uid');
  }
  public set dashboardUid(value: string) {
    this._dashboardUid = value;
  }
  public resetDashboardUid() {
    this._dashboardUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardUidInput() {
    return this._dashboardUid;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // org_id - computed: true, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // panel_id - computed: false, optional: true, required: false
  private _panelId?: number; 
  public get panelId() {
    return this.getNumberAttribute('panel_id');
  }
  public set panelId(value: number) {
    this._panelId = value;
  }
  public resetPanelId() {
    this._panelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panelIdInput() {
    return this._panelId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // text - computed: false, optional: false, required: true
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // time - computed: true, optional: true, required: false
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  public resetTime() {
    this._time = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }

  // time_end - computed: true, optional: true, required: false
  private _timeEnd?: string; 
  public get timeEnd() {
    return this.getStringAttribute('time_end');
  }
  public set timeEnd(value: string) {
    this._timeEnd = value;
  }
  public resetTimeEnd() {
    this._timeEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeEndInput() {
    return this._timeEnd;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dashboard_uid: cdktf.stringToTerraform(this._dashboardUid),
      org_id: cdktf.stringToTerraform(this._orgId),
      panel_id: cdktf.numberToTerraform(this._panelId),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      text: cdktf.stringToTerraform(this._text),
      time: cdktf.stringToTerraform(this._time),
      time_end: cdktf.stringToTerraform(this._timeEnd),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dashboard_uid: {
        value: cdktf.stringToHclTerraform(this._dashboardUid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      panel_id: {
        value: cdktf.numberToHclTerraform(this._panelId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      text: {
        value: cdktf.stringToHclTerraform(this._text),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time: {
        value: cdktf.stringToHclTerraform(this._time),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_end: {
        value: cdktf.stringToHclTerraform(this._timeEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
