// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_aws_iam
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DynamicSecretAwsIamConfig extends cdktf.TerraformMetaArguments {
  /**
  * The configuration of the dynamic secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_aws_iam#configuration DynamicSecretAwsIam#configuration}
  */
  readonly configuration: DynamicSecretAwsIamConfiguration;
  /**
  * The default TTL that will be applied for all the leases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_aws_iam#default_ttl DynamicSecretAwsIam#default_ttl}
  */
  readonly defaultTtl: string;
  /**
  * The slug of the environment to create the dynamic secret in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_aws_iam#environment_slug DynamicSecretAwsIam#environment_slug}
  */
  readonly environmentSlug: string;
  /**
  * The maximum limit a TTL can be leased or renewed for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_aws_iam#max_ttl DynamicSecretAwsIam#max_ttl}
  */
  readonly maxTtl?: string;
  /**
  * The metadata associated with this dynamic secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_aws_iam#metadata DynamicSecretAwsIam#metadata}
  */
  readonly metadata?: DynamicSecretAwsIamMetadata[] | cdktf.IResolvable;
  /**
  * The name of the dynamic secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_aws_iam#name DynamicSecretAwsIam#name}
  */
  readonly name: string;
  /**
  * The path to create the dynamic secret in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_aws_iam#path DynamicSecretAwsIam#path}
  */
  readonly path: string;
  /**
  * The slug of the project to create dynamic secret in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_aws_iam#project_slug DynamicSecretAwsIam#project_slug}
  */
  readonly projectSlug: string;
  /**
  * The username template of the dynamic secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_aws_iam#username_template DynamicSecretAwsIam#username_template}
  */
  readonly usernameTemplate?: string;
}
export interface DynamicSecretAwsIamConfigurationAccessKeyConfig {
  /**
  * The managing AWS IAM User Access Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_aws_iam#access_key DynamicSecretAwsIam#access_key}
  */
  readonly accessKey: string;
  /**
  * The managing AWS IAM User Secret Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_aws_iam#secret_access_key DynamicSecretAwsIam#secret_access_key}
  */
  readonly secretAccessKey: string;
}

export function dynamicSecretAwsIamConfigurationAccessKeyConfigToTerraform(struct?: DynamicSecretAwsIamConfigurationAccessKeyConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    secret_access_key: cdktf.stringToTerraform(struct!.secretAccessKey),
  }
}


export function dynamicSecretAwsIamConfigurationAccessKeyConfigToHclTerraform(struct?: DynamicSecretAwsIamConfigurationAccessKeyConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key: {
      value: cdktf.stringToHclTerraform(struct!.accessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_access_key: {
      value: cdktf.stringToHclTerraform(struct!.secretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamicSecretAwsIamConfigurationAccessKeyConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamicSecretAwsIamConfigurationAccessKeyConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    if (this._secretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKey = this._secretAccessKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamicSecretAwsIamConfigurationAccessKeyConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessKey = undefined;
      this._secretAccessKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessKey = value.accessKey;
      this._secretAccessKey = value.secretAccessKey;
    }
  }

  // access_key - computed: false, optional: false, required: true
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // secret_access_key - computed: false, optional: false, required: true
  private _secretAccessKey?: string; 
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }
  public set secretAccessKey(value: string) {
    this._secretAccessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyInput() {
    return this._secretAccessKey;
  }
}
export interface DynamicSecretAwsIamConfigurationAssumeRoleConfig {
  /**
  * The ARN of the AWS Role to assume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_aws_iam#role_arn DynamicSecretAwsIam#role_arn}
  */
  readonly roleArn: string;
}

export function dynamicSecretAwsIamConfigurationAssumeRoleConfigToTerraform(struct?: DynamicSecretAwsIamConfigurationAssumeRoleConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}


export function dynamicSecretAwsIamConfigurationAssumeRoleConfigToHclTerraform(struct?: DynamicSecretAwsIamConfigurationAssumeRoleConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamicSecretAwsIamConfigurationAssumeRoleConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamicSecretAwsIamConfigurationAssumeRoleConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamicSecretAwsIamConfigurationAssumeRoleConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._roleArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._roleArn = value.roleArn;
    }
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}
export interface DynamicSecretAwsIamConfiguration {
  /**
  * Configuration for the 'access_key' authentication method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_aws_iam#access_key_config DynamicSecretAwsIam#access_key_config}
  */
  readonly accessKeyConfig?: DynamicSecretAwsIamConfigurationAccessKeyConfig;
  /**
  * Configuration for the 'assume_role' authentication method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_aws_iam#assume_role_config DynamicSecretAwsIam#assume_role_config}
  */
  readonly assumeRoleConfig?: DynamicSecretAwsIamConfigurationAssumeRoleConfig;
  /**
  * IAM AWS Path to scope created IAM User resource access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_aws_iam#aws_path DynamicSecretAwsIam#aws_path}
  */
  readonly awsPath?: string;
  /**
  * The authentication method to use. Must be 'access_key' or 'assume_role'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_aws_iam#method DynamicSecretAwsIam#method}
  */
  readonly method: string;
  /**
  * The IAM Policy ARN of the AWS Permissions Boundary to attach to IAM users created in the role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_aws_iam#permission_boundary_policy_arn DynamicSecretAwsIam#permission_boundary_policy_arn}
  */
  readonly permissionBoundaryPolicyArn?: string;
  /**
  * The AWS IAM managed policies that should be attached to the created users. Multiple values can be provided by separating them with commas
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_aws_iam#policy_arns DynamicSecretAwsIam#policy_arns}
  */
  readonly policyArns?: string;
  /**
  * The AWS IAM inline policy that should be attached to the created users. Multiple values can be provided by separating them with commas
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_aws_iam#policy_document DynamicSecretAwsIam#policy_document}
  */
  readonly policyDocument?: string;
  /**
  * The AWS data center region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_aws_iam#region DynamicSecretAwsIam#region}
  */
  readonly region: string;
  /**
  * The AWS IAM groups that should be assigned to the created users. Multiple values can be provided by separating them with commas
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_aws_iam#user_groups DynamicSecretAwsIam#user_groups}
  */
  readonly userGroups?: string;
}

export function dynamicSecretAwsIamConfigurationToTerraform(struct?: DynamicSecretAwsIamConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_config: dynamicSecretAwsIamConfigurationAccessKeyConfigToTerraform(struct!.accessKeyConfig),
    assume_role_config: dynamicSecretAwsIamConfigurationAssumeRoleConfigToTerraform(struct!.assumeRoleConfig),
    aws_path: cdktf.stringToTerraform(struct!.awsPath),
    method: cdktf.stringToTerraform(struct!.method),
    permission_boundary_policy_arn: cdktf.stringToTerraform(struct!.permissionBoundaryPolicyArn),
    policy_arns: cdktf.stringToTerraform(struct!.policyArns),
    policy_document: cdktf.stringToTerraform(struct!.policyDocument),
    region: cdktf.stringToTerraform(struct!.region),
    user_groups: cdktf.stringToTerraform(struct!.userGroups),
  }
}


export function dynamicSecretAwsIamConfigurationToHclTerraform(struct?: DynamicSecretAwsIamConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key_config: {
      value: dynamicSecretAwsIamConfigurationAccessKeyConfigToHclTerraform(struct!.accessKeyConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamicSecretAwsIamConfigurationAccessKeyConfig",
    },
    assume_role_config: {
      value: dynamicSecretAwsIamConfigurationAssumeRoleConfigToHclTerraform(struct!.assumeRoleConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamicSecretAwsIamConfigurationAssumeRoleConfig",
    },
    aws_path: {
      value: cdktf.stringToHclTerraform(struct!.awsPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permission_boundary_policy_arn: {
      value: cdktf.stringToHclTerraform(struct!.permissionBoundaryPolicyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_arns: {
      value: cdktf.stringToHclTerraform(struct!.policyArns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_document: {
      value: cdktf.stringToHclTerraform(struct!.policyDocument),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_groups: {
      value: cdktf.stringToHclTerraform(struct!.userGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamicSecretAwsIamConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamicSecretAwsIamConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyConfig = this._accessKeyConfig?.internalValue;
    }
    if (this._assumeRoleConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assumeRoleConfig = this._assumeRoleConfig?.internalValue;
    }
    if (this._awsPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsPath = this._awsPath;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._permissionBoundaryPolicyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissionBoundaryPolicyArn = this._permissionBoundaryPolicyArn;
    }
    if (this._policyArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyArns = this._policyArns;
    }
    if (this._policyDocument !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyDocument = this._policyDocument;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._userGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.userGroups = this._userGroups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamicSecretAwsIamConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessKeyConfig.internalValue = undefined;
      this._assumeRoleConfig.internalValue = undefined;
      this._awsPath = undefined;
      this._method = undefined;
      this._permissionBoundaryPolicyArn = undefined;
      this._policyArns = undefined;
      this._policyDocument = undefined;
      this._region = undefined;
      this._userGroups = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessKeyConfig.internalValue = value.accessKeyConfig;
      this._assumeRoleConfig.internalValue = value.assumeRoleConfig;
      this._awsPath = value.awsPath;
      this._method = value.method;
      this._permissionBoundaryPolicyArn = value.permissionBoundaryPolicyArn;
      this._policyArns = value.policyArns;
      this._policyDocument = value.policyDocument;
      this._region = value.region;
      this._userGroups = value.userGroups;
    }
  }

  // access_key_config - computed: false, optional: true, required: false
  private _accessKeyConfig = new DynamicSecretAwsIamConfigurationAccessKeyConfigOutputReference(this, "access_key_config");
  public get accessKeyConfig() {
    return this._accessKeyConfig;
  }
  public putAccessKeyConfig(value: DynamicSecretAwsIamConfigurationAccessKeyConfig) {
    this._accessKeyConfig.internalValue = value;
  }
  public resetAccessKeyConfig() {
    this._accessKeyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyConfigInput() {
    return this._accessKeyConfig.internalValue;
  }

  // assume_role_config - computed: false, optional: true, required: false
  private _assumeRoleConfig = new DynamicSecretAwsIamConfigurationAssumeRoleConfigOutputReference(this, "assume_role_config");
  public get assumeRoleConfig() {
    return this._assumeRoleConfig;
  }
  public putAssumeRoleConfig(value: DynamicSecretAwsIamConfigurationAssumeRoleConfig) {
    this._assumeRoleConfig.internalValue = value;
  }
  public resetAssumeRoleConfig() {
    this._assumeRoleConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assumeRoleConfigInput() {
    return this._assumeRoleConfig.internalValue;
  }

  // aws_path - computed: false, optional: true, required: false
  private _awsPath?: string; 
  public get awsPath() {
    return this.getStringAttribute('aws_path');
  }
  public set awsPath(value: string) {
    this._awsPath = value;
  }
  public resetAwsPath() {
    this._awsPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsPathInput() {
    return this._awsPath;
  }

  // method - computed: false, optional: false, required: true
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // permission_boundary_policy_arn - computed: false, optional: true, required: false
  private _permissionBoundaryPolicyArn?: string; 
  public get permissionBoundaryPolicyArn() {
    return this.getStringAttribute('permission_boundary_policy_arn');
  }
  public set permissionBoundaryPolicyArn(value: string) {
    this._permissionBoundaryPolicyArn = value;
  }
  public resetPermissionBoundaryPolicyArn() {
    this._permissionBoundaryPolicyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionBoundaryPolicyArnInput() {
    return this._permissionBoundaryPolicyArn;
  }

  // policy_arns - computed: false, optional: true, required: false
  private _policyArns?: string; 
  public get policyArns() {
    return this.getStringAttribute('policy_arns');
  }
  public set policyArns(value: string) {
    this._policyArns = value;
  }
  public resetPolicyArns() {
    this._policyArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyArnsInput() {
    return this._policyArns;
  }

  // policy_document - computed: false, optional: true, required: false
  private _policyDocument?: string; 
  public get policyDocument() {
    return this.getStringAttribute('policy_document');
  }
  public set policyDocument(value: string) {
    this._policyDocument = value;
  }
  public resetPolicyDocument() {
    this._policyDocument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDocumentInput() {
    return this._policyDocument;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // user_groups - computed: false, optional: true, required: false
  private _userGroups?: string; 
  public get userGroups() {
    return this.getStringAttribute('user_groups');
  }
  public set userGroups(value: string) {
    this._userGroups = value;
  }
  public resetUserGroups() {
    this._userGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupsInput() {
    return this._userGroups;
  }
}
export interface DynamicSecretAwsIamMetadata {
  /**
  * The key of the metadata object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_aws_iam#key DynamicSecretAwsIam#key}
  */
  readonly key: string;
  /**
  * The value of the metadata object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_aws_iam#value DynamicSecretAwsIam#value}
  */
  readonly value: string;
}

export function dynamicSecretAwsIamMetadataToTerraform(struct?: DynamicSecretAwsIamMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dynamicSecretAwsIamMetadataToHclTerraform(struct?: DynamicSecretAwsIamMetadata | cdktf.IResolvable): any {
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

export class DynamicSecretAwsIamMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DynamicSecretAwsIamMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DynamicSecretAwsIamMetadata | cdktf.IResolvable | undefined) {
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

export class DynamicSecretAwsIamMetadataList extends cdktf.ComplexList {
  public internalValue? : DynamicSecretAwsIamMetadata[] | cdktf.IResolvable

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
  public get(index: number): DynamicSecretAwsIamMetadataOutputReference {
    return new DynamicSecretAwsIamMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_aws_iam infisical_dynamic_secret_aws_iam}
*/
export class DynamicSecretAwsIam extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_dynamic_secret_aws_iam";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DynamicSecretAwsIam resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DynamicSecretAwsIam to import
  * @param importFromId The id of the existing DynamicSecretAwsIam that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_aws_iam#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DynamicSecretAwsIam to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_dynamic_secret_aws_iam", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_aws_iam infisical_dynamic_secret_aws_iam} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DynamicSecretAwsIamConfig
  */
  public constructor(scope: Construct, id: string, config: DynamicSecretAwsIamConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_dynamic_secret_aws_iam',
      terraformGeneratorMetadata: {
        providerName: 'infisical',
        providerVersion: '0.16.18'
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
  private _configuration = new DynamicSecretAwsIamConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: DynamicSecretAwsIamConfiguration) {
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
  private _metadata = new DynamicSecretAwsIamMetadataList(this, "metadata", true);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DynamicSecretAwsIamMetadata[] | cdktf.IResolvable) {
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
      configuration: dynamicSecretAwsIamConfigurationToTerraform(this._configuration.internalValue),
      default_ttl: cdktf.stringToTerraform(this._defaultTtl),
      environment_slug: cdktf.stringToTerraform(this._environmentSlug),
      max_ttl: cdktf.stringToTerraform(this._maxTtl),
      metadata: cdktf.listMapper(dynamicSecretAwsIamMetadataToTerraform, false)(this._metadata.internalValue),
      name: cdktf.stringToTerraform(this._name),
      path: cdktf.stringToTerraform(this._path),
      project_slug: cdktf.stringToTerraform(this._projectSlug),
      username_template: cdktf.stringToTerraform(this._usernameTemplate),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: dynamicSecretAwsIamConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DynamicSecretAwsIamConfiguration",
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
        value: cdktf.listMapperHcl(dynamicSecretAwsIamMetadataToHclTerraform, false)(this._metadata.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DynamicSecretAwsIamMetadataList",
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
