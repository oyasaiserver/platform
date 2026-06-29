// https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs/data-sources/project_identity
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataInfisicalProjectIdentityConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the identity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs/data-sources/project_identity#identity_id DataInfisicalProjectIdentity#identity_id}
  */
  readonly identityId: string;
  /**
  * The ID of the project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs/data-sources/project_identity#project_id DataInfisicalProjectIdentity#project_id}
  */
  readonly projectId: string;
}
export interface DataInfisicalProjectIdentityRoles {
}

export function dataInfisicalProjectIdentityRolesToTerraform(struct?: DataInfisicalProjectIdentityRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataInfisicalProjectIdentityRolesToHclTerraform(struct?: DataInfisicalProjectIdentityRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataInfisicalProjectIdentityRolesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataInfisicalProjectIdentityRoles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInfisicalProjectIdentityRoles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_role_id - computed: true, optional: false, required: false
  public get customRoleId() {
    return this.getStringAttribute('custom_role_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_temporary - computed: true, optional: false, required: false
  public get isTemporary() {
    return this.getBooleanAttribute('is_temporary');
  }

  // role_slug - computed: true, optional: false, required: false
  public get roleSlug() {
    return this.getStringAttribute('role_slug');
  }

  // temporary_access_end_time - computed: true, optional: false, required: false
  public get temporaryAccessEndTime() {
    return this.getStringAttribute('temporary_access_end_time');
  }

  // temporary_access_start_time - computed: true, optional: false, required: false
  public get temporaryAccessStartTime() {
    return this.getStringAttribute('temporary_access_start_time');
  }

  // temporary_mode - computed: true, optional: false, required: false
  public get temporaryMode() {
    return this.getStringAttribute('temporary_mode');
  }

  // temporary_range - computed: true, optional: false, required: false
  public get temporaryRange() {
    return this.getStringAttribute('temporary_range');
  }
}

export class DataInfisicalProjectIdentityRolesList extends cdktf.ComplexList {

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
  public get(index: number): DataInfisicalProjectIdentityRolesOutputReference {
    return new DataInfisicalProjectIdentityRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs/data-sources/project_identity infisical_project_identity}
*/
export class DataInfisicalProjectIdentity extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_project_identity";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataInfisicalProjectIdentity resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataInfisicalProjectIdentity to import
  * @param importFromId The id of the existing DataInfisicalProjectIdentity that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs/data-sources/project_identity#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataInfisicalProjectIdentity to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_project_identity", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs/data-sources/project_identity infisical_project_identity} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataInfisicalProjectIdentityConfig
  */
  public constructor(scope: Construct, id: string, config: DataInfisicalProjectIdentityConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_project_identity',
      terraformGeneratorMetadata: {
        providerName: 'infisical',
        providerVersion: '0.16.35'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._identityId = config.identityId;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // identity_id - computed: false, optional: false, required: true
  private _identityId?: string; 
  public get identityId() {
    return this.getStringAttribute('identity_id');
  }
  public set identityId(value: string) {
    this._identityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdInput() {
    return this._identityId;
  }

  // membership_id - computed: true, optional: false, required: false
  public get membershipId() {
    return this.getStringAttribute('membership_id');
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

  // roles - computed: true, optional: false, required: false
  private _roles = new DataInfisicalProjectIdentityRolesList(this, "roles", false);
  public get roles() {
    return this._roles;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      identity_id: cdktf.stringToTerraform(this._identityId),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      identity_id: {
        value: cdktf.stringToHclTerraform(this._identityId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
