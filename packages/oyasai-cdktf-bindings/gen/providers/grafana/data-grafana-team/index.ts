// https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/data-sources/team
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGrafanaTeamConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Grafana team.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/data-sources/team#name DataGrafanaTeam#name}
  */
  readonly name: string;
  /**
  * The Organization ID. If not set, the default organization is used for basic authentication, or the one that owns your service account for token authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/data-sources/team#org_id DataGrafanaTeam#org_id}
  */
  readonly orgId?: string;
  /**
  * Whether to read the team sync settings. This is only available in Grafana Enterprise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/data-sources/team#read_team_sync DataGrafanaTeam#read_team_sync}
  */
  readonly readTeamSync?: boolean | cdktf.IResolvable;
  /**
  * preferences block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/data-sources/team#preferences DataGrafanaTeam#preferences}
  */
  readonly preferences?: DataGrafanaTeamPreferences[] | cdktf.IResolvable;
  /**
  * team_sync block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/data-sources/team#team_sync DataGrafanaTeam#team_sync}
  */
  readonly teamSync?: DataGrafanaTeamTeamSync[] | cdktf.IResolvable;
}
export interface DataGrafanaTeamPreferences {
}

export function dataGrafanaTeamPreferencesToTerraform(struct?: DataGrafanaTeamPreferences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGrafanaTeamPreferencesToHclTerraform(struct?: DataGrafanaTeamPreferences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGrafanaTeamPreferencesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGrafanaTeamPreferences | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGrafanaTeamPreferences | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // home_dashboard_uid - computed: true, optional: false, required: false
  public get homeDashboardUid() {
    return this.getStringAttribute('home_dashboard_uid');
  }

  // theme - computed: true, optional: false, required: false
  public get theme() {
    return this.getStringAttribute('theme');
  }

  // timezone - computed: true, optional: false, required: false
  public get timezone() {
    return this.getStringAttribute('timezone');
  }

  // week_start - computed: true, optional: false, required: false
  public get weekStart() {
    return this.getStringAttribute('week_start');
  }
}

export class DataGrafanaTeamPreferencesList extends cdktf.ComplexList {
  public internalValue? : DataGrafanaTeamPreferences[] | cdktf.IResolvable

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
  public get(index: number): DataGrafanaTeamPreferencesOutputReference {
    return new DataGrafanaTeamPreferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGrafanaTeamTeamSync {
}

export function dataGrafanaTeamTeamSyncToTerraform(struct?: DataGrafanaTeamTeamSync | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGrafanaTeamTeamSyncToHclTerraform(struct?: DataGrafanaTeamTeamSync | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGrafanaTeamTeamSyncOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGrafanaTeamTeamSync | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGrafanaTeamTeamSync | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // groups - computed: true, optional: false, required: false
  public get groups() {
    return cdktf.Fn.tolist(this.getListAttribute('groups'));
  }
}

export class DataGrafanaTeamTeamSyncList extends cdktf.ComplexList {
  public internalValue? : DataGrafanaTeamTeamSync[] | cdktf.IResolvable

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
  public get(index: number): DataGrafanaTeamTeamSyncOutputReference {
    return new DataGrafanaTeamTeamSyncOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/data-sources/team grafana_team}
*/
export class DataGrafanaTeam extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_team";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGrafanaTeam resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGrafanaTeam to import
  * @param importFromId The id of the existing DataGrafanaTeam that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/data-sources/team#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGrafanaTeam to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_team", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/data-sources/team grafana_team} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGrafanaTeamConfig
  */
  public constructor(scope: Construct, id: string, config: DataGrafanaTeamConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_team',
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
    this._name = config.name;
    this._orgId = config.orgId;
    this._readTeamSync = config.readTeamSync;
    this._preferences.internalValue = config.preferences;
    this._teamSync.internalValue = config.teamSync;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admins - computed: true, optional: false, required: false
  public get admins() {
    return cdktf.Fn.tolist(this.getListAttribute('admins'));
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // members - computed: true, optional: false, required: false
  public get members() {
    return cdktf.Fn.tolist(this.getListAttribute('members'));
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

  // read_team_sync - computed: false, optional: true, required: false
  private _readTeamSync?: boolean | cdktf.IResolvable; 
  public get readTeamSync() {
    return this.getBooleanAttribute('read_team_sync');
  }
  public set readTeamSync(value: boolean | cdktf.IResolvable) {
    this._readTeamSync = value;
  }
  public resetReadTeamSync() {
    this._readTeamSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readTeamSyncInput() {
    return this._readTeamSync;
  }

  // team_id - computed: true, optional: false, required: false
  public get teamId() {
    return this.getNumberAttribute('team_id');
  }

  // team_uid - computed: true, optional: false, required: false
  public get teamUid() {
    return this.getStringAttribute('team_uid');
  }

  // preferences - computed: false, optional: true, required: false
  private _preferences = new DataGrafanaTeamPreferencesList(this, "preferences", false);
  public get preferences() {
    return this._preferences;
  }
  public putPreferences(value: DataGrafanaTeamPreferences[] | cdktf.IResolvable) {
    this._preferences.internalValue = value;
  }
  public resetPreferences() {
    this._preferences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferencesInput() {
    return this._preferences.internalValue;
  }

  // team_sync - computed: false, optional: true, required: false
  private _teamSync = new DataGrafanaTeamTeamSyncList(this, "team_sync", false);
  public get teamSync() {
    return this._teamSync;
  }
  public putTeamSync(value: DataGrafanaTeamTeamSync[] | cdktf.IResolvable) {
    this._teamSync.internalValue = value;
  }
  public resetTeamSync() {
    this._teamSync.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamSyncInput() {
    return this._teamSync.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      read_team_sync: cdktf.booleanToTerraform(this._readTeamSync),
      preferences: cdktf.listMapper(dataGrafanaTeamPreferencesToTerraform, true)(this._preferences.internalValue),
      team_sync: cdktf.listMapper(dataGrafanaTeamTeamSyncToTerraform, true)(this._teamSync.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      read_team_sync: {
        value: cdktf.booleanToHclTerraform(this._readTeamSync),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      preferences: {
        value: cdktf.listMapperHcl(dataGrafanaTeamPreferencesToHclTerraform, true)(this._preferences.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataGrafanaTeamPreferencesList",
      },
      team_sync: {
        value: cdktf.listMapperHcl(dataGrafanaTeamTeamSyncToHclTerraform, true)(this._teamSync.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataGrafanaTeamTeamSyncList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
