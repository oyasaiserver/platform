import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SecretRotationAwsIamUserSecretConfig extends cdktf.TerraformMetaArguments {
    /**
    * Whether secrets should be automatically rotated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_aws_iam_user_secret#auto_rotation_enabled SecretRotationAwsIamUserSecret#auto_rotation_enabled}
    */
    readonly autoRotationEnabled?: boolean | cdktf.IResolvable;
    /**
    * The ID of the connection to use for the secret rotation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_aws_iam_user_secret#connection_id SecretRotationAwsIamUserSecret#connection_id}
    */
    readonly connectionId: string;
    /**
    * The description of the secret rotation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_aws_iam_user_secret#description SecretRotationAwsIamUserSecret#description}
    */
    readonly description?: string;
    /**
    * The slug of the project environment to rotate secrets from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_aws_iam_user_secret#environment SecretRotationAwsIamUserSecret#environment}
    */
    readonly environment: string;
    /**
    * The name of the secret rotation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_aws_iam_user_secret#name SecretRotationAwsIamUserSecret#name}
    */
    readonly name: string;
    /**
    * Parameters to modify how secrets are rotated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_aws_iam_user_secret#parameters SecretRotationAwsIamUserSecret#parameters}
    */
    readonly parameters: SecretRotationAwsIamUserSecretParameters;
    /**
    * The ID of the Infisical project to create the secret rotation in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_aws_iam_user_secret#project_id SecretRotationAwsIamUserSecret#project_id}
    */
    readonly projectId: string;
    /**
    * At which UTC time the rotation should occur.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_aws_iam_user_secret#rotate_at_utc SecretRotationAwsIamUserSecret#rotate_at_utc}
    */
    readonly rotateAtUtc?: SecretRotationAwsIamUserSecretRotateAtUtc;
    /**
    * How many days to wait between each rotation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_aws_iam_user_secret#rotation_interval SecretRotationAwsIamUserSecret#rotation_interval}
    */
    readonly rotationInterval?: number;
    /**
    * The folder path to rotate secrets from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_aws_iam_user_secret#secret_path SecretRotationAwsIamUserSecret#secret_path}
    */
    readonly secretPath: string;
    /**
    * Secret mappings to modify how secrets are rotated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_aws_iam_user_secret#secrets_mapping SecretRotationAwsIamUserSecret#secrets_mapping}
    */
    readonly secretsMapping: SecretRotationAwsIamUserSecretSecretsMapping;
    /**
    * Temporary parameters to modify how secrets are rotated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_aws_iam_user_secret#temporary_parameters SecretRotationAwsIamUserSecret#temporary_parameters}
    */
    readonly temporaryParameters?: SecretRotationAwsIamUserSecretTemporaryParameters;
}
export interface SecretRotationAwsIamUserSecretParameters {
    /**
    * The AWS region the client is present in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_aws_iam_user_secret#region SecretRotationAwsIamUserSecret#region}
    */
    readonly region: string;
    /**
    * The name of the client to rotate credentials for.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_aws_iam_user_secret#user_name SecretRotationAwsIamUserSecret#user_name}
    */
    readonly userName: string;
}
export declare function secretRotationAwsIamUserSecretParametersToTerraform(struct?: SecretRotationAwsIamUserSecretParameters | cdktf.IResolvable): any;
export declare function secretRotationAwsIamUserSecretParametersToHclTerraform(struct?: SecretRotationAwsIamUserSecretParameters | cdktf.IResolvable): any;
export declare class SecretRotationAwsIamUserSecretParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecretRotationAwsIamUserSecretParameters | cdktf.IResolvable | undefined;
    set internalValue(value: SecretRotationAwsIamUserSecretParameters | cdktf.IResolvable | undefined);
    private _region?;
    get region(): string;
    set region(value: string);
    get regionInput(): string;
    private _userName?;
    get userName(): string;
    set userName(value: string);
    get userNameInput(): string;
}
export interface SecretRotationAwsIamUserSecretRotateAtUtc {
    /**
    * The hour at which the rotation should occur (UTC).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_aws_iam_user_secret#hours SecretRotationAwsIamUserSecret#hours}
    */
    readonly hours?: number;
    /**
    * The minute at which the rotation should occur (UTC).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_aws_iam_user_secret#minutes SecretRotationAwsIamUserSecret#minutes}
    */
    readonly minutes?: number;
}
export declare function secretRotationAwsIamUserSecretRotateAtUtcToTerraform(struct?: SecretRotationAwsIamUserSecretRotateAtUtc | cdktf.IResolvable): any;
export declare function secretRotationAwsIamUserSecretRotateAtUtcToHclTerraform(struct?: SecretRotationAwsIamUserSecretRotateAtUtc | cdktf.IResolvable): any;
export declare class SecretRotationAwsIamUserSecretRotateAtUtcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecretRotationAwsIamUserSecretRotateAtUtc | cdktf.IResolvable | undefined;
    set internalValue(value: SecretRotationAwsIamUserSecretRotateAtUtc | cdktf.IResolvable | undefined);
    private _hours?;
    get hours(): number;
    set hours(value: number);
    resetHours(): void;
    get hoursInput(): number;
    private _minutes?;
    get minutes(): number;
    set minutes(value: number);
    resetMinutes(): void;
    get minutesInput(): number;
}
export interface SecretRotationAwsIamUserSecretSecretsMapping {
    /**
    * The name of the secret that the access key ID will be mapped to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_aws_iam_user_secret#access_key_id SecretRotationAwsIamUserSecret#access_key_id}
    */
    readonly accessKeyId: string;
    /**
    * The name of the secret that the rotated secret access key will be mapped to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_aws_iam_user_secret#secret_access_key SecretRotationAwsIamUserSecret#secret_access_key}
    */
    readonly secretAccessKey: string;
}
export declare function secretRotationAwsIamUserSecretSecretsMappingToTerraform(struct?: SecretRotationAwsIamUserSecretSecretsMapping | cdktf.IResolvable): any;
export declare function secretRotationAwsIamUserSecretSecretsMappingToHclTerraform(struct?: SecretRotationAwsIamUserSecretSecretsMapping | cdktf.IResolvable): any;
export declare class SecretRotationAwsIamUserSecretSecretsMappingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecretRotationAwsIamUserSecretSecretsMapping | cdktf.IResolvable | undefined;
    set internalValue(value: SecretRotationAwsIamUserSecretSecretsMapping | cdktf.IResolvable | undefined);
    private _accessKeyId?;
    get accessKeyId(): string;
    set accessKeyId(value: string);
    get accessKeyIdInput(): string;
    private _secretAccessKey?;
    get secretAccessKey(): string;
    set secretAccessKey(value: string);
    get secretAccessKeyInput(): string;
}
export interface SecretRotationAwsIamUserSecretTemporaryParameters {
}
export declare function secretRotationAwsIamUserSecretTemporaryParametersToTerraform(struct?: SecretRotationAwsIamUserSecretTemporaryParameters | cdktf.IResolvable): any;
export declare function secretRotationAwsIamUserSecretTemporaryParametersToHclTerraform(struct?: SecretRotationAwsIamUserSecretTemporaryParameters | cdktf.IResolvable): any;
export declare class SecretRotationAwsIamUserSecretTemporaryParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecretRotationAwsIamUserSecretTemporaryParameters | cdktf.IResolvable | undefined;
    set internalValue(value: SecretRotationAwsIamUserSecretTemporaryParameters | cdktf.IResolvable | undefined);
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_aws_iam_user_secret infisical_secret_rotation_aws_iam_user_secret}
*/
export declare class SecretRotationAwsIamUserSecret extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_secret_rotation_aws_iam_user_secret";
    /**
    * Generates CDKTF code for importing a SecretRotationAwsIamUserSecret resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SecretRotationAwsIamUserSecret to import
    * @param importFromId The id of the existing SecretRotationAwsIamUserSecret that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_aws_iam_user_secret#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SecretRotationAwsIamUserSecret to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_aws_iam_user_secret infisical_secret_rotation_aws_iam_user_secret} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecretRotationAwsIamUserSecretConfig
    */
    constructor(scope: Construct, id: string, config: SecretRotationAwsIamUserSecretConfig);
    private _autoRotationEnabled?;
    get autoRotationEnabled(): boolean | cdktf.IResolvable;
    set autoRotationEnabled(value: boolean | cdktf.IResolvable);
    resetAutoRotationEnabled(): void;
    get autoRotationEnabledInput(): any;
    private _connectionId?;
    get connectionId(): string;
    set connectionId(value: string);
    get connectionIdInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _environment?;
    get environment(): string;
    set environment(value: string);
    get environmentInput(): string;
    get id(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _parameters;
    get parameters(): SecretRotationAwsIamUserSecretParametersOutputReference;
    putParameters(value: SecretRotationAwsIamUserSecretParameters): void;
    get parametersInput(): any;
    private _projectId?;
    get projectId(): string;
    set projectId(value: string);
    get projectIdInput(): string;
    private _rotateAtUtc;
    get rotateAtUtc(): SecretRotationAwsIamUserSecretRotateAtUtcOutputReference;
    putRotateAtUtc(value: SecretRotationAwsIamUserSecretRotateAtUtc): void;
    resetRotateAtUtc(): void;
    get rotateAtUtcInput(): any;
    private _rotationInterval?;
    get rotationInterval(): number;
    set rotationInterval(value: number);
    resetRotationInterval(): void;
    get rotationIntervalInput(): number;
    private _secretPath?;
    get secretPath(): string;
    set secretPath(value: string);
    get secretPathInput(): string;
    private _secretsMapping;
    get secretsMapping(): SecretRotationAwsIamUserSecretSecretsMappingOutputReference;
    putSecretsMapping(value: SecretRotationAwsIamUserSecretSecretsMapping): void;
    get secretsMappingInput(): any;
    private _temporaryParameters;
    get temporaryParameters(): SecretRotationAwsIamUserSecretTemporaryParametersOutputReference;
    putTemporaryParameters(value: SecretRotationAwsIamUserSecretTemporaryParameters): void;
    resetTemporaryParameters(): void;
    get temporaryParametersInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
