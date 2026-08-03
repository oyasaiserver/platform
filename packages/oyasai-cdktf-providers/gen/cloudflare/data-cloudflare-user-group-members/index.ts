// https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/user_group_members
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareUserGroupMembersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account identifier tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/user_group_members#account_id DataCloudflareUserGroupMembers#account_id}
  */
  readonly accountId: string;
  /**
  * The sort order of returned user group members by email.
  * Available values: "asc", "desc".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/user_group_members#direction DataCloudflareUserGroupMembers#direction}
  */
  readonly direction?: string;
  /**
  * A string used for filtering members by partial email match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/user_group_members#fuzzy_email DataCloudflareUserGroupMembers#fuzzy_email}
  */
  readonly fuzzyEmail?: string;
  /**
  * User Group identifier tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/user_group_members#user_group_id DataCloudflareUserGroupMembers#user_group_id}
  */
  readonly userGroupId: string;
}
export interface DataCloudflareUserGroupMembersMembers {
}

export function dataCloudflareUserGroupMembersMembersToTerraform(struct?: DataCloudflareUserGroupMembersMembers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareUserGroupMembersMembersToHclTerraform(struct?: DataCloudflareUserGroupMembersMembers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareUserGroupMembersMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareUserGroupMembersMembers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareUserGroupMembersMembers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataCloudflareUserGroupMembersMembersList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareUserGroupMembersMembersOutputReference {
    return new DataCloudflareUserGroupMembersMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/user_group_members cloudflare_user_group_members}
*/
export class DataCloudflareUserGroupMembers extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_user_group_members";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareUserGroupMembers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareUserGroupMembers to import
  * @param importFromId The id of the existing DataCloudflareUserGroupMembers that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/user_group_members#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareUserGroupMembers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_user_group_members", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/user_group_members cloudflare_user_group_members} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareUserGroupMembersConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareUserGroupMembersConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_user_group_members',
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
    this._direction = config.direction;
    this._fuzzyEmail = config.fuzzyEmail;
    this._userGroupId = config.userGroupId;
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

  // direction - computed: true, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // fuzzy_email - computed: false, optional: true, required: false
  private _fuzzyEmail?: string; 
  public get fuzzyEmail() {
    return this.getStringAttribute('fuzzy_email');
  }
  public set fuzzyEmail(value: string) {
    this._fuzzyEmail = value;
  }
  public resetFuzzyEmail() {
    this._fuzzyEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fuzzyEmailInput() {
    return this._fuzzyEmail;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // members - computed: true, optional: false, required: false
  private _members = new DataCloudflareUserGroupMembersMembersList(this, "members", false);
  public get members() {
    return this._members;
  }

  // user_group_id - computed: false, optional: false, required: true
  private _userGroupId?: string; 
  public get userGroupId() {
    return this.getStringAttribute('user_group_id');
  }
  public set userGroupId(value: string) {
    this._userGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupIdInput() {
    return this._userGroupId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      direction: cdktf.stringToTerraform(this._direction),
      fuzzy_email: cdktf.stringToTerraform(this._fuzzyEmail),
      user_group_id: cdktf.stringToTerraform(this._userGroupId),
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
      direction: {
        value: cdktf.stringToHclTerraform(this._direction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fuzzy_email: {
        value: cdktf.stringToHclTerraform(this._fuzzyEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_group_id: {
        value: cdktf.stringToHclTerraform(this._userGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
