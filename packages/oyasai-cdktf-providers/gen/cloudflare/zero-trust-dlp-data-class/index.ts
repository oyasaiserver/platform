// https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/zero_trust_dlp_data_class
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZeroTrustDlpDataClassConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/zero_trust_dlp_data_class#account_id ZeroTrustDlpDataClass#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/zero_trust_dlp_data_class#data_tags ZeroTrustDlpDataClass#data_tags}
  */
  readonly dataTags: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/zero_trust_dlp_data_class#description ZeroTrustDlpDataClass#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/zero_trust_dlp_data_class#expression ZeroTrustDlpDataClass#expression}
  */
  readonly expression: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/zero_trust_dlp_data_class#name ZeroTrustDlpDataClass#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/zero_trust_dlp_data_class#sensitivity_levels ZeroTrustDlpDataClass#sensitivity_levels}
  */
  readonly sensitivityLevels: ZeroTrustDlpDataClassSensitivityLevels[] | cdktf.IResolvable;
}
export interface ZeroTrustDlpDataClassSensitivityLevels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/zero_trust_dlp_data_class#group_id ZeroTrustDlpDataClass#group_id}
  */
  readonly groupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/zero_trust_dlp_data_class#level_id ZeroTrustDlpDataClass#level_id}
  */
  readonly levelId: string;
}

export function zeroTrustDlpDataClassSensitivityLevelsToTerraform(struct?: ZeroTrustDlpDataClassSensitivityLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_id: cdktf.stringToTerraform(struct!.groupId),
    level_id: cdktf.stringToTerraform(struct!.levelId),
  }
}


export function zeroTrustDlpDataClassSensitivityLevelsToHclTerraform(struct?: ZeroTrustDlpDataClassSensitivityLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_id: {
      value: cdktf.stringToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    level_id: {
      value: cdktf.stringToHclTerraform(struct!.levelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustDlpDataClassSensitivityLevelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZeroTrustDlpDataClassSensitivityLevels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._levelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.levelId = this._levelId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustDlpDataClassSensitivityLevels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupId = undefined;
      this._levelId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupId = value.groupId;
      this._levelId = value.levelId;
    }
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // level_id - computed: false, optional: false, required: true
  private _levelId?: string; 
  public get levelId() {
    return this.getStringAttribute('level_id');
  }
  public set levelId(value: string) {
    this._levelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelIdInput() {
    return this._levelId;
  }
}

export class ZeroTrustDlpDataClassSensitivityLevelsList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustDlpDataClassSensitivityLevels[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustDlpDataClassSensitivityLevelsOutputReference {
    return new ZeroTrustDlpDataClassSensitivityLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/zero_trust_dlp_data_class cloudflare_zero_trust_dlp_data_class}
*/
export class ZeroTrustDlpDataClass extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_dlp_data_class";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZeroTrustDlpDataClass resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZeroTrustDlpDataClass to import
  * @param importFromId The id of the existing ZeroTrustDlpDataClass that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/zero_trust_dlp_data_class#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZeroTrustDlpDataClass to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_dlp_data_class", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/zero_trust_dlp_data_class cloudflare_zero_trust_dlp_data_class} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZeroTrustDlpDataClassConfig
  */
  public constructor(scope: Construct, id: string, config: ZeroTrustDlpDataClassConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_dlp_data_class',
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
    this._dataTags = config.dataTags;
    this._description = config.description;
    this._expression = config.expression;
    this._name = config.name;
    this._sensitivityLevels.internalValue = config.sensitivityLevels;
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

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // data_tags - computed: false, optional: false, required: true
  private _dataTags?: string[]; 
  public get dataTags() {
    return this.getListAttribute('data_tags');
  }
  public set dataTags(value: string[]) {
    this._dataTags = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTagsInput() {
    return this._dataTags;
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

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
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

  // sensitivity_levels - computed: false, optional: false, required: true
  private _sensitivityLevels = new ZeroTrustDlpDataClassSensitivityLevelsList(this, "sensitivity_levels", false);
  public get sensitivityLevels() {
    return this._sensitivityLevels;
  }
  public putSensitivityLevels(value: ZeroTrustDlpDataClassSensitivityLevels[] | cdktf.IResolvable) {
    this._sensitivityLevels.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityLevelsInput() {
    return this._sensitivityLevels.internalValue;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      data_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dataTags),
      description: cdktf.stringToTerraform(this._description),
      expression: cdktf.stringToTerraform(this._expression),
      name: cdktf.stringToTerraform(this._name),
      sensitivity_levels: cdktf.listMapper(zeroTrustDlpDataClassSensitivityLevelsToTerraform, false)(this._sensitivityLevels.internalValue),
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
      data_tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dataTags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expression: {
        value: cdktf.stringToHclTerraform(this._expression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sensitivity_levels: {
        value: cdktf.listMapperHcl(zeroTrustDlpDataClassSensitivityLevelsToHclTerraform, false)(this._sensitivityLevels.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ZeroTrustDlpDataClassSensitivityLevelsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
