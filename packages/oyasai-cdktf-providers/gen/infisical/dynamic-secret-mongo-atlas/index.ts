// https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/dynamic_secret_mongo_atlas
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DynamicSecretMongoAtlasConfig extends cdktf.TerraformMetaArguments {
  /**
  * The configuration of the dynamic secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/dynamic_secret_mongo_atlas#configuration DynamicSecretMongoAtlas#configuration}
  */
  readonly configuration: DynamicSecretMongoAtlasConfiguration;
  /**
  * The default TTL that will be applied for all the leases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/dynamic_secret_mongo_atlas#default_ttl DynamicSecretMongoAtlas#default_ttl}
  */
  readonly defaultTtl: string;
  /**
  * The slug of the environment to create the dynamic secret in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/dynamic_secret_mongo_atlas#environment_slug DynamicSecretMongoAtlas#environment_slug}
  */
  readonly environmentSlug: string;
  /**
  * The maximum limit a TTL can be leased or renewed for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/dynamic_secret_mongo_atlas#max_ttl DynamicSecretMongoAtlas#max_ttl}
  */
  readonly maxTtl?: string;
  /**
  * The metadata associated with this dynamic secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/dynamic_secret_mongo_atlas#metadata DynamicSecretMongoAtlas#metadata}
  */
  readonly metadata?: DynamicSecretMongoAtlasMetadata[] | cdktf.IResolvable;
  /**
  * The name of the dynamic secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/dynamic_secret_mongo_atlas#name DynamicSecretMongoAtlas#name}
  */
  readonly name: string;
  /**
  * The path to create the dynamic secret in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/dynamic_secret_mongo_atlas#path DynamicSecretMongoAtlas#path}
  */
  readonly path: string;
  /**
  * The slug of the project to create dynamic secret in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/dynamic_secret_mongo_atlas#project_slug DynamicSecretMongoAtlas#project_slug}
  */
  readonly projectSlug: string;
  /**
  * The username template of the dynamic secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/dynamic_secret_mongo_atlas#username_template DynamicSecretMongoAtlas#username_template}
  */
  readonly usernameTemplate?: string;
}
export interface DynamicSecretMongoAtlasConfigurationRoles {
  /**
  * Collection on which this role applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/dynamic_secret_mongo_atlas#collection_name DynamicSecretMongoAtlas#collection_name}
  */
  readonly collectionName?: string;
  /**
  * Database to which the user is granted access privileges.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/dynamic_secret_mongo_atlas#database_name DynamicSecretMongoAtlas#database_name}
  */
  readonly databaseName: string;
  /**
  * Human-readable label that identifies a group of privileges assigned to a database user. This value can either be a built-in role or a custom role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/dynamic_secret_mongo_atlas#role_name DynamicSecretMongoAtlas#role_name}
  */
  readonly roleName: string;
}

export function dynamicSecretMongoAtlasConfigurationRolesToTerraform(struct?: DynamicSecretMongoAtlasConfigurationRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collection_name: cdktf.stringToTerraform(struct!.collectionName),
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    role_name: cdktf.stringToTerraform(struct!.roleName),
  }
}


export function dynamicSecretMongoAtlasConfigurationRolesToHclTerraform(struct?: DynamicSecretMongoAtlasConfigurationRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collection_name: {
      value: cdktf.stringToHclTerraform(struct!.collectionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_name: {
      value: cdktf.stringToHclTerraform(struct!.roleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamicSecretMongoAtlasConfigurationRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DynamicSecretMongoAtlasConfigurationRoles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectionName = this._collectionName;
    }
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._roleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleName = this._roleName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamicSecretMongoAtlasConfigurationRoles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collectionName = undefined;
      this._databaseName = undefined;
      this._roleName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collectionName = value.collectionName;
      this._databaseName = value.databaseName;
      this._roleName = value.roleName;
    }
  }

  // collection_name - computed: false, optional: true, required: false
  private _collectionName?: string; 
  public get collectionName() {
    return this.getStringAttribute('collection_name');
  }
  public set collectionName(value: string) {
    this._collectionName = value;
  }
  public resetCollectionName() {
    this._collectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionNameInput() {
    return this._collectionName;
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // role_name - computed: false, optional: false, required: true
  private _roleName?: string; 
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string) {
    this._roleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName;
  }
}

export class DynamicSecretMongoAtlasConfigurationRolesList extends cdktf.ComplexList {
  public internalValue? : DynamicSecretMongoAtlasConfigurationRoles[] | cdktf.IResolvable

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
  public get(index: number): DynamicSecretMongoAtlasConfigurationRolesOutputReference {
    return new DynamicSecretMongoAtlasConfigurationRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DynamicSecretMongoAtlasConfigurationScopes {
  /**
  * Human-readable label that identifies the cluster or MongoDB Atlas Data Lake that this database user can access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/dynamic_secret_mongo_atlas#name DynamicSecretMongoAtlas#name}
  */
  readonly name: string;
  /**
  * Category of resource that this database user can access. Supported options: CLUSTER, DATA_LAKE, STREAM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/dynamic_secret_mongo_atlas#type DynamicSecretMongoAtlas#type}
  */
  readonly type: string;
}

export function dynamicSecretMongoAtlasConfigurationScopesToTerraform(struct?: DynamicSecretMongoAtlasConfigurationScopes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dynamicSecretMongoAtlasConfigurationScopesToHclTerraform(struct?: DynamicSecretMongoAtlasConfigurationScopes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamicSecretMongoAtlasConfigurationScopesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DynamicSecretMongoAtlasConfigurationScopes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamicSecretMongoAtlasConfigurationScopes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // name - computed: true, optional: false, required: true
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

  // type - computed: true, optional: false, required: true
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
}

export class DynamicSecretMongoAtlasConfigurationScopesList extends cdktf.ComplexList {
  public internalValue? : DynamicSecretMongoAtlasConfigurationScopes[] | cdktf.IResolvable

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
  public get(index: number): DynamicSecretMongoAtlasConfigurationScopesOutputReference {
    return new DynamicSecretMongoAtlasConfigurationScopesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DynamicSecretMongoAtlasConfiguration {
  /**
  * Admin user private API key. This value is stored in the Terraform state; use admin_private_key_wo to keep it out of state. Exactly one of admin_private_key or admin_private_key_wo must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/dynamic_secret_mongo_atlas#admin_private_key DynamicSecretMongoAtlas#admin_private_key}
  */
  readonly adminPrivateKey?: string;
  /**
  * Admin user private API key (write-only). This value is never stored in the Terraform state and can accept ephemeral values. Because it is not stored, changes to it are not detected; increment admin_private_key_wo_version to push a new value. Requires Terraform 1.11+.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/dynamic_secret_mongo_atlas#admin_private_key_wo DynamicSecretMongoAtlas#admin_private_key_wo}
  */
  readonly adminPrivateKeyWo?: string;
  /**
  * The version of the admin_private_key_wo value. Increment this to trigger an update of the private key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/dynamic_secret_mongo_atlas#admin_private_key_wo_version DynamicSecretMongoAtlas#admin_private_key_wo_version}
  */
  readonly adminPrivateKeyWoVersion?: number;
  /**
  * Admin user public API key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/dynamic_secret_mongo_atlas#admin_public_key DynamicSecretMongoAtlas#admin_public_key}
  */
  readonly adminPublicKey: string;
  /**
  * Unique 24-hexadecimal digit string that identifies your project. This is the same as the project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/dynamic_secret_mongo_atlas#group_id DynamicSecretMongoAtlas#group_id}
  */
  readonly groupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/dynamic_secret_mongo_atlas#roles DynamicSecretMongoAtlas#roles}
  */
  readonly roles: DynamicSecretMongoAtlasConfigurationRoles[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/dynamic_secret_mongo_atlas#scopes DynamicSecretMongoAtlas#scopes}
  */
  readonly scopes?: DynamicSecretMongoAtlasConfigurationScopes[] | cdktf.IResolvable;
}

export function dynamicSecretMongoAtlasConfigurationToTerraform(struct?: DynamicSecretMongoAtlasConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_private_key: cdktf.stringToTerraform(struct!.adminPrivateKey),
    admin_private_key_wo: cdktf.stringToTerraform(struct!.adminPrivateKeyWo),
    admin_private_key_wo_version: cdktf.numberToTerraform(struct!.adminPrivateKeyWoVersion),
    admin_public_key: cdktf.stringToTerraform(struct!.adminPublicKey),
    group_id: cdktf.stringToTerraform(struct!.groupId),
    roles: cdktf.listMapper(dynamicSecretMongoAtlasConfigurationRolesToTerraform, false)(struct!.roles),
    scopes: cdktf.listMapper(dynamicSecretMongoAtlasConfigurationScopesToTerraform, false)(struct!.scopes),
  }
}


export function dynamicSecretMongoAtlasConfigurationToHclTerraform(struct?: DynamicSecretMongoAtlasConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_private_key: {
      value: cdktf.stringToHclTerraform(struct!.adminPrivateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    admin_private_key_wo: {
      value: cdktf.stringToHclTerraform(struct!.adminPrivateKeyWo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    admin_private_key_wo_version: {
      value: cdktf.numberToHclTerraform(struct!.adminPrivateKeyWoVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    admin_public_key: {
      value: cdktf.stringToHclTerraform(struct!.adminPublicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_id: {
      value: cdktf.stringToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    roles: {
      value: cdktf.listMapperHcl(dynamicSecretMongoAtlasConfigurationRolesToHclTerraform, false)(struct!.roles),
      isBlock: true,
      type: "list",
      storageClassType: "DynamicSecretMongoAtlasConfigurationRolesList",
    },
    scopes: {
      value: cdktf.listMapperHcl(dynamicSecretMongoAtlasConfigurationScopesToHclTerraform, false)(struct!.scopes),
      isBlock: true,
      type: "list",
      storageClassType: "DynamicSecretMongoAtlasConfigurationScopesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamicSecretMongoAtlasConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamicSecretMongoAtlasConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminPrivateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminPrivateKey = this._adminPrivateKey;
    }
    if (this._adminPrivateKeyWo !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminPrivateKeyWo = this._adminPrivateKeyWo;
    }
    if (this._adminPrivateKeyWoVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminPrivateKeyWoVersion = this._adminPrivateKeyWoVersion;
    }
    if (this._adminPublicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminPublicKey = this._adminPublicKey;
    }
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._roles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles?.internalValue;
    }
    if (this._scopes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamicSecretMongoAtlasConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminPrivateKey = undefined;
      this._adminPrivateKeyWo = undefined;
      this._adminPrivateKeyWoVersion = undefined;
      this._adminPublicKey = undefined;
      this._groupId = undefined;
      this._roles.internalValue = undefined;
      this._scopes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminPrivateKey = value.adminPrivateKey;
      this._adminPrivateKeyWo = value.adminPrivateKeyWo;
      this._adminPrivateKeyWoVersion = value.adminPrivateKeyWoVersion;
      this._adminPublicKey = value.adminPublicKey;
      this._groupId = value.groupId;
      this._roles.internalValue = value.roles;
      this._scopes.internalValue = value.scopes;
    }
  }

  // admin_private_key - computed: false, optional: true, required: false
  private _adminPrivateKey?: string; 
  public get adminPrivateKey() {
    return this.getStringAttribute('admin_private_key');
  }
  public set adminPrivateKey(value: string) {
    this._adminPrivateKey = value;
  }
  public resetAdminPrivateKey() {
    this._adminPrivateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPrivateKeyInput() {
    return this._adminPrivateKey;
  }

  // admin_private_key_wo - computed: false, optional: true, required: false
  private _adminPrivateKeyWo?: string; 
  public get adminPrivateKeyWo() {
    return this.getStringAttribute('admin_private_key_wo');
  }
  public set adminPrivateKeyWo(value: string) {
    this._adminPrivateKeyWo = value;
  }
  public resetAdminPrivateKeyWo() {
    this._adminPrivateKeyWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPrivateKeyWoInput() {
    return this._adminPrivateKeyWo;
  }

  // admin_private_key_wo_version - computed: false, optional: true, required: false
  private _adminPrivateKeyWoVersion?: number; 
  public get adminPrivateKeyWoVersion() {
    return this.getNumberAttribute('admin_private_key_wo_version');
  }
  public set adminPrivateKeyWoVersion(value: number) {
    this._adminPrivateKeyWoVersion = value;
  }
  public resetAdminPrivateKeyWoVersion() {
    this._adminPrivateKeyWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPrivateKeyWoVersionInput() {
    return this._adminPrivateKeyWoVersion;
  }

  // admin_public_key - computed: false, optional: false, required: true
  private _adminPublicKey?: string; 
  public get adminPublicKey() {
    return this.getStringAttribute('admin_public_key');
  }
  public set adminPublicKey(value: string) {
    this._adminPublicKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPublicKeyInput() {
    return this._adminPublicKey;
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

  // roles - computed: false, optional: false, required: true
  private _roles = new DynamicSecretMongoAtlasConfigurationRolesList(this, "roles", false);
  public get roles() {
    return this._roles;
  }
  public putRoles(value: DynamicSecretMongoAtlasConfigurationRoles[] | cdktf.IResolvable) {
    this._roles.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles.internalValue;
  }

  // scopes - computed: true, optional: true, required: false
  private _scopes = new DynamicSecretMongoAtlasConfigurationScopesList(this, "scopes", false);
  public get scopes() {
    return this._scopes;
  }
  public putScopes(value: DynamicSecretMongoAtlasConfigurationScopes[] | cdktf.IResolvable) {
    this._scopes.internalValue = value;
  }
  public resetScopes() {
    this._scopes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes.internalValue;
  }
}
export interface DynamicSecretMongoAtlasMetadata {
  /**
  * The key of the metadata object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/dynamic_secret_mongo_atlas#key DynamicSecretMongoAtlas#key}
  */
  readonly key: string;
  /**
  * The value of the metadata object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/dynamic_secret_mongo_atlas#value DynamicSecretMongoAtlas#value}
  */
  readonly value: string;
}

export function dynamicSecretMongoAtlasMetadataToTerraform(struct?: DynamicSecretMongoAtlasMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dynamicSecretMongoAtlasMetadataToHclTerraform(struct?: DynamicSecretMongoAtlasMetadata | cdktf.IResolvable): any {
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

export class DynamicSecretMongoAtlasMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DynamicSecretMongoAtlasMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DynamicSecretMongoAtlasMetadata | cdktf.IResolvable | undefined) {
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

export class DynamicSecretMongoAtlasMetadataList extends cdktf.ComplexList {
  public internalValue? : DynamicSecretMongoAtlasMetadata[] | cdktf.IResolvable

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
  public get(index: number): DynamicSecretMongoAtlasMetadataOutputReference {
    return new DynamicSecretMongoAtlasMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/dynamic_secret_mongo_atlas infisical_dynamic_secret_mongo_atlas}
*/
export class DynamicSecretMongoAtlas extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_dynamic_secret_mongo_atlas";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DynamicSecretMongoAtlas resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DynamicSecretMongoAtlas to import
  * @param importFromId The id of the existing DynamicSecretMongoAtlas that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/dynamic_secret_mongo_atlas#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DynamicSecretMongoAtlas to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_dynamic_secret_mongo_atlas", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/dynamic_secret_mongo_atlas infisical_dynamic_secret_mongo_atlas} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DynamicSecretMongoAtlasConfig
  */
  public constructor(scope: Construct, id: string, config: DynamicSecretMongoAtlasConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_dynamic_secret_mongo_atlas',
      terraformGeneratorMetadata: {
        providerName: 'infisical',
        providerVersion: '0.19.26'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configuration.internalValue = config.configuration;
    this._defaultTtl = config.defaultTtl;
    this._environmentSlug = config.environmentSlug;
    this._maxTtl = config.maxTtl;
    this._metadata.internalValue = config.metadata;
    this._name = config.name;
    this._path = config.path;
    this._projectSlug = config.projectSlug;
    this._usernameTemplate = config.usernameTemplate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration - computed: false, optional: false, required: true
  private _configuration = new DynamicSecretMongoAtlasConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: DynamicSecretMongoAtlasConfiguration) {
    this._configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // default_ttl - computed: false, optional: false, required: true
  private _defaultTtl?: string; 
  public get defaultTtl() {
    return this.getStringAttribute('default_ttl');
  }
  public set defaultTtl(value: string) {
    this._defaultTtl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTtlInput() {
    return this._defaultTtl;
  }

  // environment_slug - computed: false, optional: false, required: true
  private _environmentSlug?: string; 
  public get environmentSlug() {
    return this.getStringAttribute('environment_slug');
  }
  public set environmentSlug(value: string) {
    this._environmentSlug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentSlugInput() {
    return this._environmentSlug;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_ttl - computed: false, optional: true, required: false
  private _maxTtl?: string; 
  public get maxTtl() {
    return this.getStringAttribute('max_ttl');
  }
  public set maxTtl(value: string) {
    this._maxTtl = value;
  }
  public resetMaxTtl() {
    this._maxTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTtlInput() {
    return this._maxTtl;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DynamicSecretMongoAtlasMetadataList(this, "metadata", true);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DynamicSecretMongoAtlasMetadata[] | cdktf.IResolvable) {
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

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // project_slug - computed: false, optional: false, required: true
  private _projectSlug?: string; 
  public get projectSlug() {
    return this.getStringAttribute('project_slug');
  }
  public set projectSlug(value: string) {
    this._projectSlug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectSlugInput() {
    return this._projectSlug;
  }

  // username_template - computed: false, optional: true, required: false
  private _usernameTemplate?: string; 
  public get usernameTemplate() {
    return this.getStringAttribute('username_template');
  }
  public set usernameTemplate(value: string) {
    this._usernameTemplate = value;
  }
  public resetUsernameTemplate() {
    this._usernameTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameTemplateInput() {
    return this._usernameTemplate;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configuration: dynamicSecretMongoAtlasConfigurationToTerraform(this._configuration.internalValue),
      default_ttl: cdktf.stringToTerraform(this._defaultTtl),
      environment_slug: cdktf.stringToTerraform(this._environmentSlug),
      max_ttl: cdktf.stringToTerraform(this._maxTtl),
      metadata: cdktf.listMapper(dynamicSecretMongoAtlasMetadataToTerraform, false)(this._metadata.internalValue),
      name: cdktf.stringToTerraform(this._name),
      path: cdktf.stringToTerraform(this._path),
      project_slug: cdktf.stringToTerraform(this._projectSlug),
      username_template: cdktf.stringToTerraform(this._usernameTemplate),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: dynamicSecretMongoAtlasConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DynamicSecretMongoAtlasConfiguration",
      },
      default_ttl: {
        value: cdktf.stringToHclTerraform(this._defaultTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_slug: {
        value: cdktf.stringToHclTerraform(this._environmentSlug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_ttl: {
        value: cdktf.stringToHclTerraform(this._maxTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata: {
        value: cdktf.listMapperHcl(dynamicSecretMongoAtlasMetadataToHclTerraform, false)(this._metadata.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DynamicSecretMongoAtlasMetadataList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_slug: {
        value: cdktf.stringToHclTerraform(this._projectSlug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username_template: {
        value: cdktf.stringToHclTerraform(this._usernameTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
