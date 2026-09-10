// https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_provisioning_repository_v0alpha1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppsProvisioningRepositoryV0Alpha1Config extends cdktf.TerraformMetaArguments {
  /**
  * Set this to 1 when using `secure`, then increment it to trigger re-application of secure values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_provisioning_repository_v0alpha1#secure_version AppsProvisioningRepositoryV0Alpha1#secure_version}
  */
  readonly secureVersion?: number;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_provisioning_repository_v0alpha1#metadata AppsProvisioningRepositoryV0Alpha1#metadata}
  */
  readonly metadata?: AppsProvisioningRepositoryV0Alpha1Metadata;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_provisioning_repository_v0alpha1#options AppsProvisioningRepositoryV0Alpha1#options}
  */
  readonly options?: AppsProvisioningRepositoryV0Alpha1Options;
  /**
  * secure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_provisioning_repository_v0alpha1#secure AppsProvisioningRepositoryV0Alpha1#secure}
  */
  readonly secure?: AppsProvisioningRepositoryV0Alpha1Secure;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_provisioning_repository_v0alpha1#spec AppsProvisioningRepositoryV0Alpha1#spec}
  */
  readonly spec?: AppsProvisioningRepositoryV0Alpha1Spec;
}
export interface AppsProvisioningRepositoryV0Alpha1Metadata {
  /**
  * The UID of the folder to save the resource in. For example, it's supported for dashboards and folders. To know if it's supported for the specific resource you're using check the documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_provisioning_repository_v0alpha1#folder_uid AppsProvisioningRepositoryV0Alpha1#folder_uid}
  */
  readonly folderUid?: string;
  /**
  * The unique identifier of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_provisioning_repository_v0alpha1#uid AppsProvisioningRepositoryV0Alpha1#uid}
  */
  readonly uid: string;
}

export function appsProvisioningRepositoryV0Alpha1MetadataToTerraform(struct?: AppsProvisioningRepositoryV0Alpha1Metadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    folder_uid: cdktf.stringToTerraform(struct!.folderUid),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function appsProvisioningRepositoryV0Alpha1MetadataToHclTerraform(struct?: AppsProvisioningRepositoryV0Alpha1Metadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    folder_uid: {
      value: cdktf.stringToHclTerraform(struct!.folderUid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uid: {
      value: cdktf.stringToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsProvisioningRepositoryV0Alpha1MetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsProvisioningRepositoryV0Alpha1Metadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._folderUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.folderUid = this._folderUid;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsProvisioningRepositoryV0Alpha1Metadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._folderUid = undefined;
      this._uid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._folderUid = value.folderUid;
      this._uid = value.uid;
    }
  }

  // annotations - computed: true, optional: false, required: false
  private _annotations = new cdktf.StringMap(this, "annotations");
  public get annotations() {
    return this._annotations;
  }

  // folder_uid - computed: false, optional: true, required: false
  private _folderUid?: string; 
  public get folderUid() {
    return this.getStringAttribute('folder_uid');
  }
  public set folderUid(value: string) {
    this._folderUid = value;
  }
  public resetFolderUid() {
    this._folderUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderUidInput() {
    return this._folderUid;
  }

  // uid - computed: false, optional: false, required: true
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}
export interface AppsProvisioningRepositoryV0Alpha1Options {
  /**
  * Override the identity stamped on this resource's manager metadata. Defaults to "grafana-terraform-provider". Use this to distinguish resources managed by different Terraform workspaces targeting the same Grafana instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_provisioning_repository_v0alpha1#manager_identity AppsProvisioningRepositoryV0Alpha1#manager_identity}
  */
  readonly managerIdentity?: string;
  /**
  * Set to true if you want to overwrite existing resource with newer version, same resource title in folder or same resource uid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_provisioning_repository_v0alpha1#overwrite AppsProvisioningRepositoryV0Alpha1#overwrite}
  */
  readonly overwrite?: boolean | cdktf.IResolvable;
}

export function appsProvisioningRepositoryV0Alpha1OptionsToTerraform(struct?: AppsProvisioningRepositoryV0Alpha1Options | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    manager_identity: cdktf.stringToTerraform(struct!.managerIdentity),
    overwrite: cdktf.booleanToTerraform(struct!.overwrite),
  }
}


export function appsProvisioningRepositoryV0Alpha1OptionsToHclTerraform(struct?: AppsProvisioningRepositoryV0Alpha1Options | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    manager_identity: {
      value: cdktf.stringToHclTerraform(struct!.managerIdentity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overwrite: {
      value: cdktf.booleanToHclTerraform(struct!.overwrite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsProvisioningRepositoryV0Alpha1OptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsProvisioningRepositoryV0Alpha1Options | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._managerIdentity !== undefined) {
      hasAnyValues = true;
      internalValueResult.managerIdentity = this._managerIdentity;
    }
    if (this._overwrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwrite = this._overwrite;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsProvisioningRepositoryV0Alpha1Options | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._managerIdentity = undefined;
      this._overwrite = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._managerIdentity = value.managerIdentity;
      this._overwrite = value.overwrite;
    }
  }

  // manager_identity - computed: false, optional: true, required: false
  private _managerIdentity?: string; 
  public get managerIdentity() {
    return this.getStringAttribute('manager_identity');
  }
  public set managerIdentity(value: string) {
    this._managerIdentity = value;
  }
  public resetManagerIdentity() {
    this._managerIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managerIdentityInput() {
    return this._managerIdentity;
  }

  // overwrite - computed: false, optional: true, required: false
  private _overwrite?: boolean | cdktf.IResolvable; 
  public get overwrite() {
    return this.getBooleanAttribute('overwrite');
  }
  public set overwrite(value: boolean | cdktf.IResolvable) {
    this._overwrite = value;
  }
  public resetOverwrite() {
    this._overwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteInput() {
    return this._overwrite;
  }
}
export interface AppsProvisioningRepositoryV0Alpha1Secure {
  /**
  * Private key used to sign commits the repository writes back. The format is selected by `spec.commit.signing_method`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_provisioning_repository_v0alpha1#commit_signing_key AppsProvisioningRepositoryV0Alpha1#commit_signing_key}
  */
  readonly commitSigningKey?: { [key: string]: string };
  /**
  * Token for repository authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_provisioning_repository_v0alpha1#token AppsProvisioningRepositoryV0Alpha1#token}
  */
  readonly token?: { [key: string]: string };
  /**
  * Webhook secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_provisioning_repository_v0alpha1#webhook_secret AppsProvisioningRepositoryV0Alpha1#webhook_secret}
  */
  readonly webhookSecret?: { [key: string]: string };
}

export function appsProvisioningRepositoryV0Alpha1SecureToTerraform(struct?: AppsProvisioningRepositoryV0Alpha1Secure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    commit_signing_key: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.commitSigningKey),
    token: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.token),
    webhook_secret: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.webhookSecret),
  }
}


export function appsProvisioningRepositoryV0Alpha1SecureToHclTerraform(struct?: AppsProvisioningRepositoryV0Alpha1Secure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    commit_signing_key: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.commitSigningKey),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    token: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.token),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    webhook_secret: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.webhookSecret),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsProvisioningRepositoryV0Alpha1SecureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsProvisioningRepositoryV0Alpha1Secure | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commitSigningKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.commitSigningKey = this._commitSigningKey;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    if (this._webhookSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhookSecret = this._webhookSecret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsProvisioningRepositoryV0Alpha1Secure | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commitSigningKey = undefined;
      this._token = undefined;
      this._webhookSecret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commitSigningKey = value.commitSigningKey;
      this._token = value.token;
      this._webhookSecret = value.webhookSecret;
    }
  }

  // commit_signing_key - computed: false, optional: true, required: false
  private _commitSigningKey?: { [key: string]: string }; 
  public get commitSigningKey() {
    return this.getStringMapAttribute('commit_signing_key');
  }
  public set commitSigningKey(value: { [key: string]: string }) {
    this._commitSigningKey = value;
  }
  public resetCommitSigningKey() {
    this._commitSigningKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitSigningKeyInput() {
    return this._commitSigningKey;
  }

  // token - computed: false, optional: true, required: false
  private _token?: { [key: string]: string }; 
  public get token() {
    return this.getStringMapAttribute('token');
  }
  public set token(value: { [key: string]: string }) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // webhook_secret - computed: false, optional: true, required: false
  private _webhookSecret?: { [key: string]: string }; 
  public get webhookSecret() {
    return this.getStringMapAttribute('webhook_secret');
  }
  public set webhookSecret(value: { [key: string]: string }) {
    this._webhookSecret = value;
  }
  public resetWebhookSecret() {
    this._webhookSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookSecretInput() {
    return this._webhookSecret;
  }
}
export interface AppsProvisioningRepositoryV0Alpha1SpecBitbucket {
  /**
  * Branch to sync.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_provisioning_repository_v0alpha1#branch AppsProvisioningRepositoryV0Alpha1#branch}
  */
  readonly branch?: string;
  /**
  * Optional subdirectory path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_provisioning_repository_v0alpha1#path AppsProvisioningRepositoryV0Alpha1#path}
  */
  readonly path?: string;
  /**
  * Username for PAT auth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_provisioning_repository_v0alpha1#token_user AppsProvisioningRepositoryV0Alpha1#token_user}
  */
  readonly tokenUser?: string;
  /**
  * Repository URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_provisioning_repository_v0alpha1#url AppsProvisioningRepositoryV0Alpha1#url}
  */
  readonly url?: string;
}

export function appsProvisioningRepositoryV0Alpha1SpecBitbucketToTerraform(struct?: AppsProvisioningRepositoryV0Alpha1SpecBitbucket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch: cdktf.stringToTerraform(struct!.branch),
    path: cdktf.stringToTerraform(struct!.path),
    token_user: cdktf.stringToTerraform(struct!.tokenUser),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function appsProvisioningRepositoryV0Alpha1SpecBitbucketToHclTerraform(struct?: AppsProvisioningRepositoryV0Alpha1SpecBitbucket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    branch: {
      value: cdktf.stringToHclTerraform(struct!.branch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_user: {
      value: cdktf.stringToHclTerraform(struct!.tokenUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsProvisioningRepositoryV0Alpha1SpecBitbucketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsProvisioningRepositoryV0Alpha1SpecBitbucket | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._tokenUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenUser = this._tokenUser;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsProvisioningRepositoryV0Alpha1SpecBitbucket | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._branch = undefined;
      this._path = undefined;
      this._tokenUser = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._branch = value.branch;
      this._path = value.path;
      this._tokenUser = value.tokenUser;
      this._url = value.url;
    }
  }

  // branch - computed: false, optional: true, required: false
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  public resetBranch() {
    this._branch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // token_user - computed: false, optional: true, required: false
  private _tokenUser?: string; 
  public get tokenUser() {
    return this.getStringAttribute('token_user');
  }
  public set tokenUser(value: string) {
    this._tokenUser = value;
  }
  public resetTokenUser() {
    this._tokenUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenUserInput() {
    return this._tokenUser;
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
}
export interface AppsProvisioningRepositoryV0Alpha1SpecBranch {
  /**
  * When true, the branch name field in Save drawers is read-only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_provisioning_repository_v0alpha1#enforce_template AppsProvisioningRepositoryV0Alpha1#enforce_template}
  */
  readonly enforceTemplate?: boolean | cdktf.IResolvable;
  /**
  * Template for the branch name created in the branch workflow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_provisioning_repository_v0alpha1#name_template AppsProvisioningRepositoryV0Alpha1#name_template}
  */
  readonly nameTemplate?: string;
}

export function appsProvisioningRepositoryV0Alpha1SpecBranchToTerraform(struct?: AppsProvisioningRepositoryV0Alpha1SpecBranch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enforce_template: cdktf.booleanToTerraform(struct!.enforceTemplate),
    name_template: cdktf.stringToTerraform(struct!.nameTemplate),
  }
}


export function appsProvisioningRepositoryV0Alpha1SpecBranchToHclTerraform(struct?: AppsProvisioningRepositoryV0Alpha1SpecBranch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enforce_template: {
      value: cdktf.booleanToHclTerraform(struct!.enforceTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name_template: {
      value: cdktf.stringToHclTerraform(struct!.nameTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsProvisioningRepositoryV0Alpha1SpecBranchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsProvisioningRepositoryV0Alpha1SpecBranch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enforceTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceTemplate = this._enforceTemplate;
    }
    if (this._nameTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameTemplate = this._nameTemplate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsProvisioningRepositoryV0Alpha1SpecBranch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enforceTemplate = undefined;
      this._nameTemplate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enforceTemplate = value.enforceTemplate;
      this._nameTemplate = value.nameTemplate;
    }
  }

  // enforce_template - computed: false, optional: true, required: false
  private _enforceTemplate?: boolean | cdktf.IResolvable; 
  public get enforceTemplate() {
    return this.getBooleanAttribute('enforce_template');
  }
  public set enforceTemplate(value: boolean | cdktf.IResolvable) {
    this._enforceTemplate = value;
  }
  public resetEnforceTemplate() {
    this._enforceTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceTemplateInput() {
    return this._enforceTemplate;
  }

  // name_template - computed: false, optional: true, required: false
  private _nameTemplate?: string; 
  public get nameTemplate() {
    return this.getStringAttribute('name_template');
  }
  public set nameTemplate(value: string) {
    this._nameTemplate = value;
  }
  public resetNameTemplate() {
    this._nameTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameTemplateInput() {
    return this._nameTemplate;
  }
}
export interface AppsProvisioningRepositoryV0Alpha1SpecCommit {
  /**
  * When true, the commit message field in Save drawers is pre-filled from the template and rendered read-only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_provisioning_repository_v0alpha1#enforce_template AppsProvisioningRepositoryV0Alpha1#enforce_template}
  */
  readonly enforceTemplate?: boolean | cdktf.IResolvable;
  /**
  * Email used as the commit signer. Defaults to "noreply@grafana.com" when empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_provisioning_repository_v0alpha1#signer_email AppsProvisioningRepositoryV0Alpha1#signer_email}
  */
  readonly signerEmail?: string;
  /**
  * Name used as the commit signer. Defaults to "Grafana" when empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_provisioning_repository_v0alpha1#signer_name AppsProvisioningRepositoryV0Alpha1#signer_name}
  */
  readonly signerName?: string;
  /**
  * Method used to sign commits with the key in `secure.commit_signing_key`: gpg, ssh, or smime. When empty, commits are not signed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_provisioning_repository_v0alpha1#signing_method AppsProvisioningRepositoryV0Alpha1#signing_method}
  */
  readonly signingMethod?: string;
  /**
  * Template for commit messages produced by single-resource UI operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_provisioning_repository_v0alpha1#single_resource_message_template AppsProvisioningRepositoryV0Alpha1#single_resource_message_template}
  */
  readonly singleResourceMessageTemplate?: string;
  /**
  * PEM-encoded X.509 certificate paired with `secure.commit_signing_key` when `signing_method` is smime. This is public, not a secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_provisioning_repository_v0alpha1#smime_certificate AppsProvisioningRepositoryV0Alpha1#smime_certificate}
  */
  readonly smimeCertificate?: string;
}

export function appsProvisioningRepositoryV0Alpha1SpecCommitToTerraform(struct?: AppsProvisioningRepositoryV0Alpha1SpecCommit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enforce_template: cdktf.booleanToTerraform(struct!.enforceTemplate),
    signer_email: cdktf.stringToTerraform(struct!.signerEmail),
    signer_name: cdktf.stringToTerraform(struct!.signerName),
    signing_method: cdktf.stringToTerraform(struct!.signingMethod),
    single_resource_message_template: cdktf.stringToTerraform(struct!.singleResourceMessageTemplate),
    smime_certificate: cdktf.stringToTerraform(struct!.smimeCertificate),
  }
}


export function appsProvisioningRepositoryV0Alpha1SpecCommitToHclTerraform(struct?: AppsProvisioningRepositoryV0Alpha1SpecCommit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enforce_template: {
      value: cdktf.booleanToHclTerraform(struct!.enforceTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    signer_email: {
      value: cdktf.stringToHclTerraform(struct!.signerEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signer_name: {
      value: cdktf.stringToHclTerraform(struct!.signerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signing_method: {
      value: cdktf.stringToHclTerraform(struct!.signingMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    single_resource_message_template: {
      value: cdktf.stringToHclTerraform(struct!.singleResourceMessageTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    smime_certificate: {
      value: cdktf.stringToHclTerraform(struct!.smimeCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsProvisioningRepositoryV0Alpha1SpecCommitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsProvisioningRepositoryV0Alpha1SpecCommit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enforceTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceTemplate = this._enforceTemplate;
    }
    if (this._signerEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.signerEmail = this._signerEmail;
    }
    if (this._signerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.signerName = this._signerName;
    }
    if (this._signingMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.signingMethod = this._signingMethod;
    }
    if (this._singleResourceMessageTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleResourceMessageTemplate = this._singleResourceMessageTemplate;
    }
    if (this._smimeCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.smimeCertificate = this._smimeCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsProvisioningRepositoryV0Alpha1SpecCommit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enforceTemplate = undefined;
      this._signerEmail = undefined;
      this._signerName = undefined;
      this._signingMethod = undefined;
      this._singleResourceMessageTemplate = undefined;
      this._smimeCertificate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enforceTemplate = value.enforceTemplate;
      this._signerEmail = value.signerEmail;
      this._signerName = value.signerName;
      this._signingMethod = value.signingMethod;
      this._singleResourceMessageTemplate = value.singleResourceMessageTemplate;
      this._smimeCertificate = value.smimeCertificate;
    }
  }

  // enforce_template - computed: false, optional: true, required: false
  private _enforceTemplate?: boolean | cdktf.IResolvable; 
  public get enforceTemplate() {
    return this.getBooleanAttribute('enforce_template');
  }
  public set enforceTemplate(value: boolean | cdktf.IResolvable) {
    this._enforceTemplate = value;
  }
  public resetEnforceTemplate() {
    this._enforceTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceTemplateInput() {
    return this._enforceTemplate;
  }

  // signer_email - computed: false, optional: true, required: false
  private _signerEmail?: string; 
  public get signerEmail() {
    return this.getStringAttribute('signer_email');
  }
  public set signerEmail(value: string) {
    this._signerEmail = value;
  }
  public resetSignerEmail() {
    this._signerEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signerEmailInput() {
    return this._signerEmail;
  }

  // signer_name - computed: false, optional: true, required: false
  private _signerName?: string; 
  public get signerName() {
    return this.getStringAttribute('signer_name');
  }
  public set signerName(value: string) {
    this._signerName = value;
  }
  public resetSignerName() {
    this._signerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signerNameInput() {
    return this._signerName;
  }

  // signing_method - computed: false, optional: true, required: false
  private _signingMethod?: string; 
  public get signingMethod() {
    return this.getStringAttribute('signing_method');
  }
  public set signingMethod(value: string) {
    this._signingMethod = value;
  }
  public resetSigningMethod() {
    this._signingMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingMethodInput() {
    return this._signingMethod;
  }

  // single_resource_message_template - computed: false, optional: true, required: false
  private _singleResourceMessageTemplate?: string; 
  public get singleResourceMessageTemplate() {
    return this.getStringAttribute('single_resource_message_template');
  }
  public set singleResourceMessageTemplate(value: string) {
    this._singleResourceMessageTemplate = value;
  }
  public resetSingleResourceMessageTemplate() {
    this._singleResourceMessageTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleResourceMessageTemplateInput() {
    return this._singleResourceMessageTemplate;
  }

  // smime_certificate - computed: false, optional: true, required: false
  private _smimeCertificate?: string; 
  public get smimeCertificate() {
    return this.getStringAttribute('smime_certificate');
  }
  public set smimeCertificate(value: string) {
    this._smimeCertificate = value;
  }
  public resetSmimeCertificate() {
    this._smimeCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smimeCertificateInput() {
    return this._smimeCertificate;
  }
}
export interface AppsProvisioningRepositoryV0Alpha1SpecConnection {
  /**
  * Connection resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_provisioning_repository_v0alpha1#name AppsProvisioningRepositoryV0Alpha1#name}
  */
  readonly name?: string;
}

export function appsProvisioningRepositoryV0Alpha1SpecConnectionToTerraform(struct?: AppsProvisioningRepositoryV0Alpha1SpecConnection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function appsProvisioningRepositoryV0Alpha1SpecConnectionToHclTerraform(struct?: AppsProvisioningRepositoryV0Alpha1SpecConnection | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsProvisioningRepositoryV0Alpha1SpecConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsProvisioningRepositoryV0Alpha1SpecConnection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsProvisioningRepositoryV0Alpha1SpecConnection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface AppsProvisioningRepositoryV0Alpha1SpecGit {
  /**
  * Branch to sync.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_provisioning_repository_v0alpha1#branch AppsProvisioningRepositoryV0Alpha1#branch}
  */
  readonly branch?: string;
  /**
  * Optional subdirectory path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_provisioning_repository_v0alpha1#path AppsProvisioningRepositoryV0Alpha1#path}
  */
  readonly path?: string;
  /**
  * Username for PAT auth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_provisioning_repository_v0alpha1#token_user AppsProvisioningRepositoryV0Alpha1#token_user}
  */
  readonly tokenUser?: string;
  /**
  * Repository URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_provisioning_repository_v0alpha1#url AppsProvisioningRepositoryV0Alpha1#url}
  */
  readonly url?: string;
}

export function appsProvisioningRepositoryV0Alpha1SpecGitToTerraform(struct?: AppsProvisioningRepositoryV0Alpha1SpecGit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch: cdktf.stringToTerraform(struct!.branch),
    path: cdktf.stringToTerraform(struct!.path),
    token_user: cdktf.stringToTerraform(struct!.tokenUser),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function appsProvisioningRepositoryV0Alpha1SpecGitToHclTerraform(struct?: AppsProvisioningRepositoryV0Alpha1SpecGit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    branch: {
      value: cdktf.stringToHclTerraform(struct!.branch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_user: {
      value: cdktf.stringToHclTerraform(struct!.tokenUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsProvisioningRepositoryV0Alpha1SpecGitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsProvisioningRepositoryV0Alpha1SpecGit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._tokenUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenUser = this._tokenUser;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsProvisioningRepositoryV0Alpha1SpecGit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._branch = undefined;
      this._path = undefined;
      this._tokenUser = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._branch = value.branch;
      this._path = value.path;
      this._tokenUser = value.tokenUser;
      this._url = value.url;
    }
  }

  // branch - computed: false, optional: true, required: false
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  public resetBranch() {
    this._branch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // token_user - computed: false, optional: true, required: false
  private _tokenUser?: string; 
  public get tokenUser() {
    return this.getStringAttribute('token_user');
  }
  public set tokenUser(value: string) {
    this._tokenUser = value;
  }
  public resetTokenUser() {
    this._tokenUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenUserInput() {
    return this._tokenUser;
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
}
export interface AppsProvisioningRepositoryV0Alpha1SpecGithub {
  /**
  * Branch to sync.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_provisioning_repository_v0alpha1#branch AppsProvisioningRepositoryV0Alpha1#branch}
  */
  readonly branch?: string;
  /**
  * Whether to generate dashboard previews.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_provisioning_repository_v0alpha1#generate_dashboard_previews AppsProvisioningRepositoryV0Alpha1#generate_dashboard_previews}
  */
  readonly generateDashboardPreviews?: boolean | cdktf.IResolvable;
  /**
  * Optional subdirectory path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_provisioning_repository_v0alpha1#path AppsProvisioningRepositoryV0Alpha1#path}
  */
  readonly path?: string;
  /**
  * Repository URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_provisioning_repository_v0alpha1#url AppsProvisioningRepositoryV0Alpha1#url}
  */
  readonly url?: string;
}

export function appsProvisioningRepositoryV0Alpha1SpecGithubToTerraform(struct?: AppsProvisioningRepositoryV0Alpha1SpecGithub | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch: cdktf.stringToTerraform(struct!.branch),
    generate_dashboard_previews: cdktf.booleanToTerraform(struct!.generateDashboardPreviews),
    path: cdktf.stringToTerraform(struct!.path),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function appsProvisioningRepositoryV0Alpha1SpecGithubToHclTerraform(struct?: AppsProvisioningRepositoryV0Alpha1SpecGithub | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    branch: {
      value: cdktf.stringToHclTerraform(struct!.branch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    generate_dashboard_previews: {
      value: cdktf.booleanToHclTerraform(struct!.generateDashboardPreviews),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsProvisioningRepositoryV0Alpha1SpecGithubOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsProvisioningRepositoryV0Alpha1SpecGithub | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._generateDashboardPreviews !== undefined) {
      hasAnyValues = true;
      internalValueResult.generateDashboardPreviews = this._generateDashboardPreviews;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsProvisioningRepositoryV0Alpha1SpecGithub | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._branch = undefined;
      this._generateDashboardPreviews = undefined;
      this._path = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._branch = value.branch;
      this._generateDashboardPreviews = value.generateDashboardPreviews;
      this._path = value.path;
      this._url = value.url;
    }
  }

  // branch - computed: false, optional: true, required: false
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  public resetBranch() {
    this._branch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // generate_dashboard_previews - computed: false, optional: true, required: false
  private _generateDashboardPreviews?: boolean | cdktf.IResolvable; 
  public get generateDashboardPreviews() {
    return this.getBooleanAttribute('generate_dashboard_previews');
  }
  public set generateDashboardPreviews(value: boolean | cdktf.IResolvable) {
    this._generateDashboardPreviews = value;
  }
  public resetGenerateDashboardPreviews() {
    this._generateDashboardPreviews = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateDashboardPreviewsInput() {
    return this._generateDashboardPreviews;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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
}
export interface AppsProvisioningRepositoryV0Alpha1SpecGithubEnterprise {
  /**
  * Branch to sync.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_provisioning_repository_v0alpha1#branch AppsProvisioningRepositoryV0Alpha1#branch}
  */
  readonly branch?: string;
  /**
  * Whether to generate dashboard previews.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_provisioning_repository_v0alpha1#generate_dashboard_previews AppsProvisioningRepositoryV0Alpha1#generate_dashboard_previews}
  */
  readonly generateDashboardPreviews?: boolean | cdktf.IResolvable;
  /**
  * Optional subdirectory path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_provisioning_repository_v0alpha1#path AppsProvisioningRepositoryV0Alpha1#path}
  */
  readonly path?: string;
  /**
  * Base URL of the self-managed GitHub Enterprise Server instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_provisioning_repository_v0alpha1#server_url AppsProvisioningRepositoryV0Alpha1#server_url}
  */
  readonly serverUrl?: string;
  /**
  * Repository URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_provisioning_repository_v0alpha1#url AppsProvisioningRepositoryV0Alpha1#url}
  */
  readonly url?: string;
}

export function appsProvisioningRepositoryV0Alpha1SpecGithubEnterpriseToTerraform(struct?: AppsProvisioningRepositoryV0Alpha1SpecGithubEnterprise | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch: cdktf.stringToTerraform(struct!.branch),
    generate_dashboard_previews: cdktf.booleanToTerraform(struct!.generateDashboardPreviews),
    path: cdktf.stringToTerraform(struct!.path),
    server_url: cdktf.stringToTerraform(struct!.serverUrl),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function appsProvisioningRepositoryV0Alpha1SpecGithubEnterpriseToHclTerraform(struct?: AppsProvisioningRepositoryV0Alpha1SpecGithubEnterprise | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    branch: {
      value: cdktf.stringToHclTerraform(struct!.branch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    generate_dashboard_previews: {
      value: cdktf.booleanToHclTerraform(struct!.generateDashboardPreviews),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_url: {
      value: cdktf.stringToHclTerraform(struct!.serverUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsProvisioningRepositoryV0Alpha1SpecGithubEnterpriseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsProvisioningRepositoryV0Alpha1SpecGithubEnterprise | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._generateDashboardPreviews !== undefined) {
      hasAnyValues = true;
      internalValueResult.generateDashboardPreviews = this._generateDashboardPreviews;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._serverUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverUrl = this._serverUrl;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsProvisioningRepositoryV0Alpha1SpecGithubEnterprise | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._branch = undefined;
      this._generateDashboardPreviews = undefined;
      this._path = undefined;
      this._serverUrl = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._branch = value.branch;
      this._generateDashboardPreviews = value.generateDashboardPreviews;
      this._path = value.path;
      this._serverUrl = value.serverUrl;
      this._url = value.url;
    }
  }

  // branch - computed: false, optional: true, required: false
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  public resetBranch() {
    this._branch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // generate_dashboard_previews - computed: false, optional: true, required: false
  private _generateDashboardPreviews?: boolean | cdktf.IResolvable; 
  public get generateDashboardPreviews() {
    return this.getBooleanAttribute('generate_dashboard_previews');
  }
  public set generateDashboardPreviews(value: boolean | cdktf.IResolvable) {
    this._generateDashboardPreviews = value;
  }
  public resetGenerateDashboardPreviews() {
    this._generateDashboardPreviews = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateDashboardPreviewsInput() {
    return this._generateDashboardPreviews;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // server_url - computed: false, optional: true, required: false
  private _serverUrl?: string; 
  public get serverUrl() {
    return this.getStringAttribute('server_url');
  }
  public set serverUrl(value: string) {
    this._serverUrl = value;
  }
  public resetServerUrl() {
    this._serverUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverUrlInput() {
    return this._serverUrl;
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
}
export interface AppsProvisioningRepositoryV0Alpha1SpecGitlab {
  /**
  * Branch to sync.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_provisioning_repository_v0alpha1#branch AppsProvisioningRepositoryV0Alpha1#branch}
  */
  readonly branch?: string;
  /**
  * Optional subdirectory path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_provisioning_repository_v0alpha1#path AppsProvisioningRepositoryV0Alpha1#path}
  */
  readonly path?: string;
  /**
  * Repository URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_provisioning_repository_v0alpha1#url AppsProvisioningRepositoryV0Alpha1#url}
  */
  readonly url?: string;
}

export function appsProvisioningRepositoryV0Alpha1SpecGitlabToTerraform(struct?: AppsProvisioningRepositoryV0Alpha1SpecGitlab | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch: cdktf.stringToTerraform(struct!.branch),
    path: cdktf.stringToTerraform(struct!.path),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function appsProvisioningRepositoryV0Alpha1SpecGitlabToHclTerraform(struct?: AppsProvisioningRepositoryV0Alpha1SpecGitlab | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    branch: {
      value: cdktf.stringToHclTerraform(struct!.branch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsProvisioningRepositoryV0Alpha1SpecGitlabOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsProvisioningRepositoryV0Alpha1SpecGitlab | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsProvisioningRepositoryV0Alpha1SpecGitlab | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._branch = undefined;
      this._path = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._branch = value.branch;
      this._path = value.path;
      this._url = value.url;
    }
  }

  // branch - computed: false, optional: true, required: false
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  public resetBranch() {
    this._branch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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
}
export interface AppsProvisioningRepositoryV0Alpha1SpecLocal {
  /**
  * Filesystem path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_provisioning_repository_v0alpha1#path AppsProvisioningRepositoryV0Alpha1#path}
  */
  readonly path?: string;
}

export function appsProvisioningRepositoryV0Alpha1SpecLocalToTerraform(struct?: AppsProvisioningRepositoryV0Alpha1SpecLocal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function appsProvisioningRepositoryV0Alpha1SpecLocalToHclTerraform(struct?: AppsProvisioningRepositoryV0Alpha1SpecLocal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsProvisioningRepositoryV0Alpha1SpecLocalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsProvisioningRepositoryV0Alpha1SpecLocal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsProvisioningRepositoryV0Alpha1SpecLocal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
    }
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface AppsProvisioningRepositoryV0Alpha1SpecPullRequest {
  /**
  * When true, the pull request title field in Save drawers is read-only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_provisioning_repository_v0alpha1#enforce_template AppsProvisioningRepositoryV0Alpha1#enforce_template}
  */
  readonly enforceTemplate?: boolean | cdktf.IResolvable;
  /**
  * Template for pull request titles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_provisioning_repository_v0alpha1#title_template AppsProvisioningRepositoryV0Alpha1#title_template}
  */
  readonly titleTemplate?: string;
}

export function appsProvisioningRepositoryV0Alpha1SpecPullRequestToTerraform(struct?: AppsProvisioningRepositoryV0Alpha1SpecPullRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enforce_template: cdktf.booleanToTerraform(struct!.enforceTemplate),
    title_template: cdktf.stringToTerraform(struct!.titleTemplate),
  }
}


export function appsProvisioningRepositoryV0Alpha1SpecPullRequestToHclTerraform(struct?: AppsProvisioningRepositoryV0Alpha1SpecPullRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enforce_template: {
      value: cdktf.booleanToHclTerraform(struct!.enforceTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    title_template: {
      value: cdktf.stringToHclTerraform(struct!.titleTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsProvisioningRepositoryV0Alpha1SpecPullRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsProvisioningRepositoryV0Alpha1SpecPullRequest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enforceTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceTemplate = this._enforceTemplate;
    }
    if (this._titleTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.titleTemplate = this._titleTemplate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsProvisioningRepositoryV0Alpha1SpecPullRequest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enforceTemplate = undefined;
      this._titleTemplate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enforceTemplate = value.enforceTemplate;
      this._titleTemplate = value.titleTemplate;
    }
  }

  // enforce_template - computed: false, optional: true, required: false
  private _enforceTemplate?: boolean | cdktf.IResolvable; 
  public get enforceTemplate() {
    return this.getBooleanAttribute('enforce_template');
  }
  public set enforceTemplate(value: boolean | cdktf.IResolvable) {
    this._enforceTemplate = value;
  }
  public resetEnforceTemplate() {
    this._enforceTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceTemplateInput() {
    return this._enforceTemplate;
  }

  // title_template - computed: false, optional: true, required: false
  private _titleTemplate?: string; 
  public get titleTemplate() {
    return this.getStringAttribute('title_template');
  }
  public set titleTemplate(value: string) {
    this._titleTemplate = value;
  }
  public resetTitleTemplate() {
    this._titleTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleTemplateInput() {
    return this._titleTemplate;
  }
}
export interface AppsProvisioningRepositoryV0Alpha1SpecSync {
  /**
  * Whether sync is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_provisioning_repository_v0alpha1#enabled AppsProvisioningRepositoryV0Alpha1#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Sync interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_provisioning_repository_v0alpha1#interval_seconds AppsProvisioningRepositoryV0Alpha1#interval_seconds}
  */
  readonly intervalSeconds?: number;
  /**
  * Sync target: instance, folder, or folderless.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_provisioning_repository_v0alpha1#target AppsProvisioningRepositoryV0Alpha1#target}
  */
  readonly target: string;
}

export function appsProvisioningRepositoryV0Alpha1SpecSyncToTerraform(struct?: AppsProvisioningRepositoryV0Alpha1SpecSync | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    interval_seconds: cdktf.numberToTerraform(struct!.intervalSeconds),
    target: cdktf.stringToTerraform(struct!.target),
  }
}


export function appsProvisioningRepositoryV0Alpha1SpecSyncToHclTerraform(struct?: AppsProvisioningRepositoryV0Alpha1SpecSync | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interval_seconds: {
      value: cdktf.numberToHclTerraform(struct!.intervalSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsProvisioningRepositoryV0Alpha1SpecSyncOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsProvisioningRepositoryV0Alpha1SpecSync | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._intervalSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalSeconds = this._intervalSeconds;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsProvisioningRepositoryV0Alpha1SpecSync | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._intervalSeconds = undefined;
      this._target = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._intervalSeconds = value.intervalSeconds;
      this._target = value.target;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // interval_seconds - computed: false, optional: true, required: false
  private _intervalSeconds?: number; 
  public get intervalSeconds() {
    return this.getNumberAttribute('interval_seconds');
  }
  public set intervalSeconds(value: number) {
    this._intervalSeconds = value;
  }
  public resetIntervalSeconds() {
    this._intervalSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalSecondsInput() {
    return this._intervalSeconds;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}
export interface AppsProvisioningRepositoryV0Alpha1SpecWebhook {
  /**
  * Optional public webhook base URL override used when incoming webhook delivery must target a different host than the Grafana UI URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_provisioning_repository_v0alpha1#base_url AppsProvisioningRepositoryV0Alpha1#base_url}
  */
  readonly baseUrl?: string;
}

export function appsProvisioningRepositoryV0Alpha1SpecWebhookToTerraform(struct?: AppsProvisioningRepositoryV0Alpha1SpecWebhook | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_url: cdktf.stringToTerraform(struct!.baseUrl),
  }
}


export function appsProvisioningRepositoryV0Alpha1SpecWebhookToHclTerraform(struct?: AppsProvisioningRepositoryV0Alpha1SpecWebhook | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_url: {
      value: cdktf.stringToHclTerraform(struct!.baseUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsProvisioningRepositoryV0Alpha1SpecWebhookOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsProvisioningRepositoryV0Alpha1SpecWebhook | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseUrl = this._baseUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsProvisioningRepositoryV0Alpha1SpecWebhook | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseUrl = value.baseUrl;
    }
  }

  // base_url - computed: false, optional: true, required: false
  private _baseUrl?: string; 
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }
  public set baseUrl(value: string) {
    this._baseUrl = value;
  }
  public resetBaseUrl() {
    this._baseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
  }
}
export interface AppsProvisioningRepositoryV0Alpha1Spec {
  /**
  * Repository description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_provisioning_repository_v0alpha1#description AppsProvisioningRepositoryV0Alpha1#description}
  */
  readonly description?: string;
  /**
  * Display name shown in the UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_provisioning_repository_v0alpha1#title AppsProvisioningRepositoryV0Alpha1#title}
  */
  readonly title: string;
  /**
  * Repository provider type: local, github, githubEnterprise, git, bitbucket, or gitlab.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_provisioning_repository_v0alpha1#type AppsProvisioningRepositoryV0Alpha1#type}
  */
  readonly type: string;
  /**
  * Allowed change workflows: write, branch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_provisioning_repository_v0alpha1#workflows AppsProvisioningRepositoryV0Alpha1#workflows}
  */
  readonly workflows?: string[];
  /**
  * bitbucket block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_provisioning_repository_v0alpha1#bitbucket AppsProvisioningRepositoryV0Alpha1#bitbucket}
  */
  readonly bitbucket?: AppsProvisioningRepositoryV0Alpha1SpecBitbucket;
  /**
  * branch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_provisioning_repository_v0alpha1#branch AppsProvisioningRepositoryV0Alpha1#branch}
  */
  readonly branch?: AppsProvisioningRepositoryV0Alpha1SpecBranch;
  /**
  * commit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_provisioning_repository_v0alpha1#commit AppsProvisioningRepositoryV0Alpha1#commit}
  */
  readonly commit?: AppsProvisioningRepositoryV0Alpha1SpecCommit;
  /**
  * connection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_provisioning_repository_v0alpha1#connection AppsProvisioningRepositoryV0Alpha1#connection}
  */
  readonly connection?: AppsProvisioningRepositoryV0Alpha1SpecConnection;
  /**
  * git block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_provisioning_repository_v0alpha1#git AppsProvisioningRepositoryV0Alpha1#git}
  */
  readonly git?: AppsProvisioningRepositoryV0Alpha1SpecGit;
  /**
  * github block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_provisioning_repository_v0alpha1#github AppsProvisioningRepositoryV0Alpha1#github}
  */
  readonly github?: AppsProvisioningRepositoryV0Alpha1SpecGithub;
  /**
  * github_enterprise block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_provisioning_repository_v0alpha1#github_enterprise AppsProvisioningRepositoryV0Alpha1#github_enterprise}
  */
  readonly githubEnterprise?: AppsProvisioningRepositoryV0Alpha1SpecGithubEnterprise;
  /**
  * gitlab block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_provisioning_repository_v0alpha1#gitlab AppsProvisioningRepositoryV0Alpha1#gitlab}
  */
  readonly gitlab?: AppsProvisioningRepositoryV0Alpha1SpecGitlab;
  /**
  * local block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_provisioning_repository_v0alpha1#local AppsProvisioningRepositoryV0Alpha1#local}
  */
  readonly local?: AppsProvisioningRepositoryV0Alpha1SpecLocal;
  /**
  * pull_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_provisioning_repository_v0alpha1#pull_request AppsProvisioningRepositoryV0Alpha1#pull_request}
  */
  readonly pullRequest?: AppsProvisioningRepositoryV0Alpha1SpecPullRequest;
  /**
  * sync block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_provisioning_repository_v0alpha1#sync AppsProvisioningRepositoryV0Alpha1#sync}
  */
  readonly sync?: AppsProvisioningRepositoryV0Alpha1SpecSync;
  /**
  * webhook block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_provisioning_repository_v0alpha1#webhook AppsProvisioningRepositoryV0Alpha1#webhook}
  */
  readonly webhook?: AppsProvisioningRepositoryV0Alpha1SpecWebhook;
}

export function appsProvisioningRepositoryV0Alpha1SpecToTerraform(struct?: AppsProvisioningRepositoryV0Alpha1Spec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    title: cdktf.stringToTerraform(struct!.title),
    type: cdktf.stringToTerraform(struct!.type),
    workflows: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.workflows),
    bitbucket: appsProvisioningRepositoryV0Alpha1SpecBitbucketToTerraform(struct!.bitbucket),
    branch: appsProvisioningRepositoryV0Alpha1SpecBranchToTerraform(struct!.branch),
    commit: appsProvisioningRepositoryV0Alpha1SpecCommitToTerraform(struct!.commit),
    connection: appsProvisioningRepositoryV0Alpha1SpecConnectionToTerraform(struct!.connection),
    git: appsProvisioningRepositoryV0Alpha1SpecGitToTerraform(struct!.git),
    github: appsProvisioningRepositoryV0Alpha1SpecGithubToTerraform(struct!.github),
    github_enterprise: appsProvisioningRepositoryV0Alpha1SpecGithubEnterpriseToTerraform(struct!.githubEnterprise),
    gitlab: appsProvisioningRepositoryV0Alpha1SpecGitlabToTerraform(struct!.gitlab),
    local: appsProvisioningRepositoryV0Alpha1SpecLocalToTerraform(struct!.local),
    pull_request: appsProvisioningRepositoryV0Alpha1SpecPullRequestToTerraform(struct!.pullRequest),
    sync: appsProvisioningRepositoryV0Alpha1SpecSyncToTerraform(struct!.sync),
    webhook: appsProvisioningRepositoryV0Alpha1SpecWebhookToTerraform(struct!.webhook),
  }
}


export function appsProvisioningRepositoryV0Alpha1SpecToHclTerraform(struct?: AppsProvisioningRepositoryV0Alpha1Spec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
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
    workflows: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.workflows),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    bitbucket: {
      value: appsProvisioningRepositoryV0Alpha1SpecBitbucketToHclTerraform(struct!.bitbucket),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsProvisioningRepositoryV0Alpha1SpecBitbucket",
    },
    branch: {
      value: appsProvisioningRepositoryV0Alpha1SpecBranchToHclTerraform(struct!.branch),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsProvisioningRepositoryV0Alpha1SpecBranch",
    },
    commit: {
      value: appsProvisioningRepositoryV0Alpha1SpecCommitToHclTerraform(struct!.commit),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsProvisioningRepositoryV0Alpha1SpecCommit",
    },
    connection: {
      value: appsProvisioningRepositoryV0Alpha1SpecConnectionToHclTerraform(struct!.connection),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsProvisioningRepositoryV0Alpha1SpecConnection",
    },
    git: {
      value: appsProvisioningRepositoryV0Alpha1SpecGitToHclTerraform(struct!.git),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsProvisioningRepositoryV0Alpha1SpecGit",
    },
    github: {
      value: appsProvisioningRepositoryV0Alpha1SpecGithubToHclTerraform(struct!.github),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsProvisioningRepositoryV0Alpha1SpecGithub",
    },
    github_enterprise: {
      value: appsProvisioningRepositoryV0Alpha1SpecGithubEnterpriseToHclTerraform(struct!.githubEnterprise),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsProvisioningRepositoryV0Alpha1SpecGithubEnterprise",
    },
    gitlab: {
      value: appsProvisioningRepositoryV0Alpha1SpecGitlabToHclTerraform(struct!.gitlab),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsProvisioningRepositoryV0Alpha1SpecGitlab",
    },
    local: {
      value: appsProvisioningRepositoryV0Alpha1SpecLocalToHclTerraform(struct!.local),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsProvisioningRepositoryV0Alpha1SpecLocal",
    },
    pull_request: {
      value: appsProvisioningRepositoryV0Alpha1SpecPullRequestToHclTerraform(struct!.pullRequest),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsProvisioningRepositoryV0Alpha1SpecPullRequest",
    },
    sync: {
      value: appsProvisioningRepositoryV0Alpha1SpecSyncToHclTerraform(struct!.sync),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsProvisioningRepositoryV0Alpha1SpecSync",
    },
    webhook: {
      value: appsProvisioningRepositoryV0Alpha1SpecWebhookToHclTerraform(struct!.webhook),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsProvisioningRepositoryV0Alpha1SpecWebhook",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsProvisioningRepositoryV0Alpha1SpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsProvisioningRepositoryV0Alpha1Spec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._workflows !== undefined) {
      hasAnyValues = true;
      internalValueResult.workflows = this._workflows;
    }
    if (this._bitbucket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitbucket = this._bitbucket?.internalValue;
    }
    if (this._branch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch?.internalValue;
    }
    if (this._commit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.commit = this._commit?.internalValue;
    }
    if (this._connection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connection = this._connection?.internalValue;
    }
    if (this._git?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.git = this._git?.internalValue;
    }
    if (this._github?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.github = this._github?.internalValue;
    }
    if (this._githubEnterprise?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.githubEnterprise = this._githubEnterprise?.internalValue;
    }
    if (this._gitlab?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitlab = this._gitlab?.internalValue;
    }
    if (this._local?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.local = this._local?.internalValue;
    }
    if (this._pullRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullRequest = this._pullRequest?.internalValue;
    }
    if (this._sync?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sync = this._sync?.internalValue;
    }
    if (this._webhook?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhook = this._webhook?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsProvisioningRepositoryV0Alpha1Spec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._title = undefined;
      this._type = undefined;
      this._workflows = undefined;
      this._bitbucket.internalValue = undefined;
      this._branch.internalValue = undefined;
      this._commit.internalValue = undefined;
      this._connection.internalValue = undefined;
      this._git.internalValue = undefined;
      this._github.internalValue = undefined;
      this._githubEnterprise.internalValue = undefined;
      this._gitlab.internalValue = undefined;
      this._local.internalValue = undefined;
      this._pullRequest.internalValue = undefined;
      this._sync.internalValue = undefined;
      this._webhook.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._title = value.title;
      this._type = value.type;
      this._workflows = value.workflows;
      this._bitbucket.internalValue = value.bitbucket;
      this._branch.internalValue = value.branch;
      this._commit.internalValue = value.commit;
      this._connection.internalValue = value.connection;
      this._git.internalValue = value.git;
      this._github.internalValue = value.github;
      this._githubEnterprise.internalValue = value.githubEnterprise;
      this._gitlab.internalValue = value.gitlab;
      this._local.internalValue = value.local;
      this._pullRequest.internalValue = value.pullRequest;
      this._sync.internalValue = value.sync;
      this._webhook.internalValue = value.webhook;
    }
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

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
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

  // workflows - computed: false, optional: true, required: false
  private _workflows?: string[]; 
  public get workflows() {
    return this.getListAttribute('workflows');
  }
  public set workflows(value: string[]) {
    this._workflows = value;
  }
  public resetWorkflows() {
    this._workflows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowsInput() {
    return this._workflows;
  }

  // bitbucket - computed: false, optional: true, required: false
  private _bitbucket = new AppsProvisioningRepositoryV0Alpha1SpecBitbucketOutputReference(this, "bitbucket");
  public get bitbucket() {
    return this._bitbucket;
  }
  public putBitbucket(value: AppsProvisioningRepositoryV0Alpha1SpecBitbucket) {
    this._bitbucket.internalValue = value;
  }
  public resetBitbucket() {
    this._bitbucket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitbucketInput() {
    return this._bitbucket.internalValue;
  }

  // branch - computed: false, optional: true, required: false
  private _branch = new AppsProvisioningRepositoryV0Alpha1SpecBranchOutputReference(this, "branch");
  public get branch() {
    return this._branch;
  }
  public putBranch(value: AppsProvisioningRepositoryV0Alpha1SpecBranch) {
    this._branch.internalValue = value;
  }
  public resetBranch() {
    this._branch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch.internalValue;
  }

  // commit - computed: false, optional: true, required: false
  private _commit = new AppsProvisioningRepositoryV0Alpha1SpecCommitOutputReference(this, "commit");
  public get commit() {
    return this._commit;
  }
  public putCommit(value: AppsProvisioningRepositoryV0Alpha1SpecCommit) {
    this._commit.internalValue = value;
  }
  public resetCommit() {
    this._commit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitInput() {
    return this._commit.internalValue;
  }

  // connection - computed: false, optional: true, required: false
  private _connection = new AppsProvisioningRepositoryV0Alpha1SpecConnectionOutputReference(this, "connection");
  public get connection() {
    return this._connection;
  }
  public putConnection(value: AppsProvisioningRepositoryV0Alpha1SpecConnection) {
    this._connection.internalValue = value;
  }
  public resetConnection() {
    this._connection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionInput() {
    return this._connection.internalValue;
  }

  // git - computed: false, optional: true, required: false
  private _git = new AppsProvisioningRepositoryV0Alpha1SpecGitOutputReference(this, "git");
  public get git() {
    return this._git;
  }
  public putGit(value: AppsProvisioningRepositoryV0Alpha1SpecGit) {
    this._git.internalValue = value;
  }
  public resetGit() {
    this._git.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitInput() {
    return this._git.internalValue;
  }

  // github - computed: false, optional: true, required: false
  private _github = new AppsProvisioningRepositoryV0Alpha1SpecGithubOutputReference(this, "github");
  public get github() {
    return this._github;
  }
  public putGithub(value: AppsProvisioningRepositoryV0Alpha1SpecGithub) {
    this._github.internalValue = value;
  }
  public resetGithub() {
    this._github.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubInput() {
    return this._github.internalValue;
  }

  // github_enterprise - computed: false, optional: true, required: false
  private _githubEnterprise = new AppsProvisioningRepositoryV0Alpha1SpecGithubEnterpriseOutputReference(this, "github_enterprise");
  public get githubEnterprise() {
    return this._githubEnterprise;
  }
  public putGithubEnterprise(value: AppsProvisioningRepositoryV0Alpha1SpecGithubEnterprise) {
    this._githubEnterprise.internalValue = value;
  }
  public resetGithubEnterprise() {
    this._githubEnterprise.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubEnterpriseInput() {
    return this._githubEnterprise.internalValue;
  }

  // gitlab - computed: false, optional: true, required: false
  private _gitlab = new AppsProvisioningRepositoryV0Alpha1SpecGitlabOutputReference(this, "gitlab");
  public get gitlab() {
    return this._gitlab;
  }
  public putGitlab(value: AppsProvisioningRepositoryV0Alpha1SpecGitlab) {
    this._gitlab.internalValue = value;
  }
  public resetGitlab() {
    this._gitlab.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitlabInput() {
    return this._gitlab.internalValue;
  }

  // local - computed: false, optional: true, required: false
  private _local = new AppsProvisioningRepositoryV0Alpha1SpecLocalOutputReference(this, "local");
  public get local() {
    return this._local;
  }
  public putLocal(value: AppsProvisioningRepositoryV0Alpha1SpecLocal) {
    this._local.internalValue = value;
  }
  public resetLocal() {
    this._local.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localInput() {
    return this._local.internalValue;
  }

  // pull_request - computed: false, optional: true, required: false
  private _pullRequest = new AppsProvisioningRepositoryV0Alpha1SpecPullRequestOutputReference(this, "pull_request");
  public get pullRequest() {
    return this._pullRequest;
  }
  public putPullRequest(value: AppsProvisioningRepositoryV0Alpha1SpecPullRequest) {
    this._pullRequest.internalValue = value;
  }
  public resetPullRequest() {
    this._pullRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullRequestInput() {
    return this._pullRequest.internalValue;
  }

  // sync - computed: false, optional: true, required: false
  private _sync = new AppsProvisioningRepositoryV0Alpha1SpecSyncOutputReference(this, "sync");
  public get sync() {
    return this._sync;
  }
  public putSync(value: AppsProvisioningRepositoryV0Alpha1SpecSync) {
    this._sync.internalValue = value;
  }
  public resetSync() {
    this._sync.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncInput() {
    return this._sync.internalValue;
  }

  // webhook - computed: false, optional: true, required: false
  private _webhook = new AppsProvisioningRepositoryV0Alpha1SpecWebhookOutputReference(this, "webhook");
  public get webhook() {
    return this._webhook;
  }
  public putWebhook(value: AppsProvisioningRepositoryV0Alpha1SpecWebhook) {
    this._webhook.internalValue = value;
  }
  public resetWebhook() {
    this._webhook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookInput() {
    return this._webhook.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_provisioning_repository_v0alpha1 grafana_apps_provisioning_repository_v0alpha1}
*/
export class AppsProvisioningRepositoryV0Alpha1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_apps_provisioning_repository_v0alpha1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppsProvisioningRepositoryV0Alpha1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppsProvisioningRepositoryV0Alpha1 to import
  * @param importFromId The id of the existing AppsProvisioningRepositoryV0Alpha1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_provisioning_repository_v0alpha1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppsProvisioningRepositoryV0Alpha1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_apps_provisioning_repository_v0alpha1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_provisioning_repository_v0alpha1 grafana_apps_provisioning_repository_v0alpha1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppsProvisioningRepositoryV0Alpha1Config = {}
  */
  public constructor(scope: Construct, id: string, config: AppsProvisioningRepositoryV0Alpha1Config = {}) {
    super(scope, id, {
      terraformResourceType: 'grafana_apps_provisioning_repository_v0alpha1',
      terraformGeneratorMetadata: {
        providerName: 'grafana',
        providerVersion: '4.45.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._secureVersion = config.secureVersion;
    this._metadata.internalValue = config.metadata;
    this._options.internalValue = config.options;
    this._secure.internalValue = config.secure;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // secure_version - computed: false, optional: true, required: false
  private _secureVersion?: number; 
  public get secureVersion() {
    return this.getNumberAttribute('secure_version');
  }
  public set secureVersion(value: number) {
    this._secureVersion = value;
  }
  public resetSecureVersion() {
    this._secureVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureVersionInput() {
    return this._secureVersion;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new AppsProvisioningRepositoryV0Alpha1MetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: AppsProvisioningRepositoryV0Alpha1Metadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // options - computed: false, optional: true, required: false
  private _options = new AppsProvisioningRepositoryV0Alpha1OptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: AppsProvisioningRepositoryV0Alpha1Options) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // secure - computed: false, optional: true, required: false
  private _secure = new AppsProvisioningRepositoryV0Alpha1SecureOutputReference(this, "secure");
  public get secure() {
    return this._secure;
  }
  public putSecure(value: AppsProvisioningRepositoryV0Alpha1Secure) {
    this._secure.internalValue = value;
  }
  public resetSecure() {
    this._secure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureInput() {
    return this._secure.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new AppsProvisioningRepositoryV0Alpha1SpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: AppsProvisioningRepositoryV0Alpha1Spec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      secure_version: cdktf.numberToTerraform(this._secureVersion),
      metadata: appsProvisioningRepositoryV0Alpha1MetadataToTerraform(this._metadata.internalValue),
      options: appsProvisioningRepositoryV0Alpha1OptionsToTerraform(this._options.internalValue),
      secure: appsProvisioningRepositoryV0Alpha1SecureToTerraform(this._secure.internalValue),
      spec: appsProvisioningRepositoryV0Alpha1SpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      secure_version: {
        value: cdktf.numberToHclTerraform(this._secureVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      metadata: {
        value: appsProvisioningRepositoryV0Alpha1MetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppsProvisioningRepositoryV0Alpha1Metadata",
      },
      options: {
        value: appsProvisioningRepositoryV0Alpha1OptionsToHclTerraform(this._options.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppsProvisioningRepositoryV0Alpha1Options",
      },
      secure: {
        value: appsProvisioningRepositoryV0Alpha1SecureToHclTerraform(this._secure.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppsProvisioningRepositoryV0Alpha1Secure",
      },
      spec: {
        value: appsProvisioningRepositoryV0Alpha1SpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppsProvisioningRepositoryV0Alpha1Spec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
