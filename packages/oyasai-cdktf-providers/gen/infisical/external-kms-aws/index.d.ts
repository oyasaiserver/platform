import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ExternalKmsAwsConfig extends cdktf.TerraformMetaArguments {
    /**
    * The configuration for the AWS External KMS
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/external_kms_aws#configuration ExternalKmsAws#configuration}
    */
    readonly configuration: ExternalKmsAwsConfiguration;
    /**
    * An optional description for the KMS.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/external_kms_aws#description ExternalKmsAws#description}
    */
    readonly description?: string;
    /**
    * The name of the KMS to create. Must be slug-friendly
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/external_kms_aws#name ExternalKmsAws#name}
    */
    readonly name: string;
}
export interface ExternalKmsAwsConfigurationCredential {
    /**
    * The AWS Access Key ID used to authenticate requests to AWS services. Required for access-key type. For more details, refer to the documentation here https://infisical.com/docs/documentation/platform/kms-configuration/aws-kms#param-access-key-id
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/external_kms_aws#access_key_id ExternalKmsAws#access_key_id}
    */
    readonly accessKeyId?: string;
    /**
    * The Amazon Resource Name (ARN) of the IAM role to assume for performing operations. Infisical will assume this role using AWS Security Token Service (STS). Required for assume-role type. For more details, refer to the documentation here https://infisical.com/docs/documentation/platform/kms-configuration/aws-kms#param-iam-role-arn-for-role-assumption
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/external_kms_aws#role_arn ExternalKmsAws#role_arn}
    */
    readonly roleArn?: string;
    /**
    * The external ID of the role to assume for performing operations. Required for assume-role type. For more details, refer to the documentation here https://infisical.com/docs/documentation/platform/kms-configuration/aws-kms#param-assume-role-external-id
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/external_kms_aws#role_external_id ExternalKmsAws#role_external_id}
    */
    readonly roleExternalId?: string;
    /**
    * The AWS Secret Access Key associated with the Access Key ID to authenticate requests to AWS services. Required for access-key type. For more details, refer to the documentation here https://infisical.com/docs/documentation/platform/kms-configuration/aws-kms#param-secret-access-key
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/external_kms_aws#secret_access_key ExternalKmsAws#secret_access_key}
    */
    readonly secretAccessKey?: string;
}
export declare function externalKmsAwsConfigurationCredentialToTerraform(struct?: ExternalKmsAwsConfigurationCredential | cdktf.IResolvable): any;
export declare function externalKmsAwsConfigurationCredentialToHclTerraform(struct?: ExternalKmsAwsConfigurationCredential | cdktf.IResolvable): any;
export declare class ExternalKmsAwsConfigurationCredentialOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ExternalKmsAwsConfigurationCredential | cdktf.IResolvable | undefined;
    set internalValue(value: ExternalKmsAwsConfigurationCredential | cdktf.IResolvable | undefined);
    private _accessKeyId?;
    get accessKeyId(): string;
    set accessKeyId(value: string);
    resetAccessKeyId(): void;
    get accessKeyIdInput(): string;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    resetRoleArn(): void;
    get roleArnInput(): string;
    private _roleExternalId?;
    get roleExternalId(): string;
    set roleExternalId(value: string);
    resetRoleExternalId(): void;
    get roleExternalIdInput(): string;
    private _secretAccessKey?;
    get secretAccessKey(): string;
    set secretAccessKey(value: string);
    resetSecretAccessKey(): void;
    get secretAccessKeyInput(): string;
}
export interface ExternalKmsAwsConfiguration {
    /**
    * The AWS KMS key ID to use for the external KMS. For more details, refer to the documentation here https://infisical.com/docs/documentation/platform/kms-configuration/aws-kms#param-aws-kms-key-id
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/external_kms_aws#aws_kms_key_id ExternalKmsAws#aws_kms_key_id}
    */
    readonly awsKmsKeyId: string;
    /**
    * The AWS region where the KMS key is located
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/external_kms_aws#aws_region ExternalKmsAws#aws_region}
    */
    readonly awsRegion: string;
    /**
    * The AWS credentials for the external KMS
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/external_kms_aws#credential ExternalKmsAws#credential}
    */
    readonly credential: ExternalKmsAwsConfigurationCredential;
    /**
    * The Authentication Type to use. Must be access-key or assume-role
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/external_kms_aws#type ExternalKmsAws#type}
    */
    readonly type: string;
}
export declare function externalKmsAwsConfigurationToTerraform(struct?: ExternalKmsAwsConfiguration | cdktf.IResolvable): any;
export declare function externalKmsAwsConfigurationToHclTerraform(struct?: ExternalKmsAwsConfiguration | cdktf.IResolvable): any;
export declare class ExternalKmsAwsConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ExternalKmsAwsConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: ExternalKmsAwsConfiguration | cdktf.IResolvable | undefined);
    private _awsKmsKeyId?;
    get awsKmsKeyId(): string;
    set awsKmsKeyId(value: string);
    get awsKmsKeyIdInput(): string;
    private _awsRegion?;
    get awsRegion(): string;
    set awsRegion(value: string);
    get awsRegionInput(): string;
    private _credential;
    get credential(): ExternalKmsAwsConfigurationCredentialOutputReference;
    putCredential(value: ExternalKmsAwsConfigurationCredential): void;
    get credentialInput(): any;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/external_kms_aws infisical_external_kms_aws}
*/
export declare class ExternalKmsAws extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_external_kms_aws";
    /**
    * Generates CDKTF code for importing a ExternalKmsAws resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ExternalKmsAws to import
    * @param importFromId The id of the existing ExternalKmsAws that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/external_kms_aws#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ExternalKmsAws to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/external_kms_aws infisical_external_kms_aws} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ExternalKmsAwsConfig
    */
    constructor(scope: Construct, id: string, config: ExternalKmsAwsConfig);
    private _configuration;
    get configuration(): ExternalKmsAwsConfigurationOutputReference;
    putConfiguration(value: ExternalKmsAwsConfiguration): void;
    get configurationInput(): any;
    get credentialsHash(): any;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get id(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
