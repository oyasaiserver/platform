// https://registry.terraform.io/providers/infisical/infisical/0.16.28/docs/resources/project_identity_provisioning
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectIdentityProvisioningConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether the identity has delete protection enabled. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.28/docs/resources/project_identity_provisioning#has_delete_protection ProjectIdentityProvisioning#has_delete_protection}
  */
  readonly hasDeleteProtection?: boolean | cdktf.IResolvable;
  /**
  * The metadata associated with this identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.28/docs/resources/project_identity_provisioning#metadata ProjectIdentityProvisioning#metadata}
  */
  readonly metadata?: ProjectIdentityProvisioningMetadata[] | cdktf.IResolvable;
  /**
  * The name of the identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.28/docs/resources/project_identity_provisioning#name ProjectIdentityProvisioning#name}
  */
  readonly name: string;
  /**
  * The ID of the project that owns this identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.28/docs/resources/project_identity_provisioning#project_id ProjectIdentityProvisioning#project_id}
  */
  readonly projectId: string;
}
export interface ProjectIdentityProvisioningMetadata {
  /**
  * The key of the metadata entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.28/docs/resources/project_identity_provisioning#key ProjectIdentityProvisioning#key}
  */
  readonly key: string;
  /**
  * The value of the metadata entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.28/docs/resources/project_identity_provisioning#value ProjectIdentityProvisioning#value}
  */
  readonly value: string;
}

export function projectIdentityProvisioningMetadataToTerraform(struct?: ProjectIdentityProvisioningMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function projectIdentityProvisioningMetadataToHclTerraform(struct?: ProjectIdentityProvisioningMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectIdentityProvisioningMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectIdentityProvisioningMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectIdentityProvisioningMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ProjectIdentityProvisioningMetadataList extends cdktf.ComplexList {
  public internalValue? : ProjectIdentityProvisioningMetadata[] | cdktf.IResolvable

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
  public get(index: number): ProjectIdentityProvisioningMetadataOutputReference {
    return new ProjectIdentityProvisioningMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.28/docs/resources/project_identity_provisioning infisical_project_identity_provisioning}
*/
export class ProjectIdentityProvisioning extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_project_identity_provisioning";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProjectIdentityProvisioning resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProjectIdentityProvisioning to import
  * @param importFromId The id of the existing ProjectIdentityProvisioning that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.28/docs/resources/project_identity_provisioning#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProjectIdentityProvisioning to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_project_identity_provisioning", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.28/docs/resources/project_identity_provisioning infisical_project_identity_provisioning} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectIdentityProvisioningConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectIdentityProvisioningConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_project_identity_provisioning',
      terraformGeneratorMetadata: {
        providerName: 'infisical',
        providerVersion: '0.16.28'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._hasDeleteProtection = config.hasDeleteProtection;
    this._metadata.internalValue = config.metadata;
    this._name = config.name;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_methods - computed: true, optional: false, required: false
  public get authMethods() {
    return this.getListAttribute('auth_methods');
  }

  // has_delete_protection - computed: true, optional: true, required: false
  private _hasDeleteProtection?: boolean | cdktf.IResolvable; 
  public get hasDeleteProtection() {
    return this.getBooleanAttribute('has_delete_protection');
  }
  public set hasDeleteProtection(value: boolean | cdktf.IResolvable) {
    this._hasDeleteProtection = value;
  }
  public resetHasDeleteProtection() {
    this._hasDeleteProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasDeleteProtectionInput() {
    return this._hasDeleteProtection;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new ProjectIdentityProvisioningMetadataList(this, "metadata", true);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: ProjectIdentityProvisioningMetadata[] | cdktf.IResolvable) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      has_delete_protection: cdktf.booleanToTerraform(this._hasDeleteProtection),
      metadata: cdktf.listMapper(projectIdentityProvisioningMetadataToTerraform, false)(this._metadata.internalValue),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      has_delete_protection: {
        value: cdktf.booleanToHclTerraform(this._hasDeleteProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      metadata: {
        value: cdktf.listMapperHcl(projectIdentityProvisioningMetadataToHclTerraform, false)(this._metadata.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ProjectIdentityProvisioningMetadataList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
