import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SecretRotationPostgresCredentialsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Whether secrets should be automatically rotated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_postgres_credentials#auto_rotation_enabled SecretRotationPostgresCredentials#auto_rotation_enabled}
    */
    readonly autoRotationEnabled?: boolean | cdktf.IResolvable;
    /**
    * The ID of the connection to use for the secret rotation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_postgres_credentials#connection_id SecretRotationPostgresCredentials#connection_id}
    */
    readonly connectionId: string;
    /**
    * The description of the secret rotation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_postgres_credentials#description SecretRotationPostgresCredentials#description}
    */
    readonly description?: string;
    /**
    * The slug of the project environment to rotate secrets from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_postgres_credentials#environment SecretRotationPostgresCredentials#environment}
    */
    readonly environment: string;
    /**
    * The name of the secret rotation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_postgres_credentials#name SecretRotationPostgresCredentials#name}
    */
    readonly name: string;
    /**
    * Parameters to modify how secrets are rotated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_postgres_credentials#parameters SecretRotationPostgresCredentials#parameters}
    */
    readonly parameters: SecretRotationPostgresCredentialsParameters;
    /**
    * The ID of the Infisical project to create the secret rotation in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_postgres_credentials#project_id SecretRotationPostgresCredentials#project_id}
    */
    readonly projectId: string;
    /**
    * At which UTC time the rotation should occur.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_postgres_credentials#rotate_at_utc SecretRotationPostgresCredentials#rotate_at_utc}
    */
    readonly rotateAtUtc?: SecretRotationPostgresCredentialsRotateAtUtc;
    /**
    * How many days to wait between each rotation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_postgres_credentials#rotation_interval SecretRotationPostgresCredentials#rotation_interval}
    */
    readonly rotationInterval?: number;
    /**
    * The folder path to rotate secrets from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_postgres_credentials#secret_path SecretRotationPostgresCredentials#secret_path}
    */
    readonly secretPath: string;
    /**
    * Secret mappings to modify how secrets are rotated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_postgres_credentials#secrets_mapping SecretRotationPostgresCredentials#secrets_mapping}
    */
    readonly secretsMapping: SecretRotationPostgresCredentialsSecretsMapping;
    /**
    * Temporary parameters to modify how secrets are rotated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_postgres_credentials#temporary_parameters SecretRotationPostgresCredentials#temporary_parameters}
    */
    readonly temporaryParameters?: SecretRotationPostgresCredentialsTemporaryParameters;
}
export interface SecretRotationPostgresCredentialsParameters {
    /**
    * The username of the first login to rotate passwords for. This user must already exists in your database.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_postgres_credentials#username1 SecretRotationPostgresCredentials#username1}
    */
    readonly username1: string;
    /**
    * The username of the second login to rotate passwords for. This user must already exists in your database.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_postgres_credentials#username2 SecretRotationPostgresCredentials#username2}
    */
    readonly username2: string;
}
export declare function secretRotationPostgresCredentialsParametersToTerraform(struct?: SecretRotationPostgresCredentialsParameters | cdktf.IResolvable): any;
export declare function secretRotationPostgresCredentialsParametersToHclTerraform(struct?: SecretRotationPostgresCredentialsParameters | cdktf.IResolvable): any;
export declare class SecretRotationPostgresCredentialsParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecretRotationPostgresCredentialsParameters | cdktf.IResolvable | undefined;
    set internalValue(value: SecretRotationPostgresCredentialsParameters | cdktf.IResolvable | undefined);
    private _username1?;
    get username1(): string;
    set username1(value: string);
    get username1Input(): string;
    private _username2?;
    get username2(): string;
    set username2(value: string);
    get username2Input(): string;
}
export interface SecretRotationPostgresCredentialsRotateAtUtc {
    /**
    * The hour at which the rotation should occur (UTC).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_postgres_credentials#hours SecretRotationPostgresCredentials#hours}
    */
    readonly hours?: number;
    /**
    * The minute at which the rotation should occur (UTC).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_postgres_credentials#minutes SecretRotationPostgresCredentials#minutes}
    */
    readonly minutes?: number;
}
export declare function secretRotationPostgresCredentialsRotateAtUtcToTerraform(struct?: SecretRotationPostgresCredentialsRotateAtUtc | cdktf.IResolvable): any;
export declare function secretRotationPostgresCredentialsRotateAtUtcToHclTerraform(struct?: SecretRotationPostgresCredentialsRotateAtUtc | cdktf.IResolvable): any;
export declare class SecretRotationPostgresCredentialsRotateAtUtcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecretRotationPostgresCredentialsRotateAtUtc | cdktf.IResolvable | undefined;
    set internalValue(value: SecretRotationPostgresCredentialsRotateAtUtc | cdktf.IResolvable | undefined);
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
export interface SecretRotationPostgresCredentialsSecretsMapping {
    /**
    * The name of the secret that the generated password will be mapped to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_postgres_credentials#password SecretRotationPostgresCredentials#password}
    */
    readonly password: string;
    /**
    * The name of the secret that the active username will be mapped to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_postgres_credentials#username SecretRotationPostgresCredentials#username}
    */
    readonly username: string;
}
export declare function secretRotationPostgresCredentialsSecretsMappingToTerraform(struct?: SecretRotationPostgresCredentialsSecretsMapping | cdktf.IResolvable): any;
export declare function secretRotationPostgresCredentialsSecretsMappingToHclTerraform(struct?: SecretRotationPostgresCredentialsSecretsMapping | cdktf.IResolvable): any;
export declare class SecretRotationPostgresCredentialsSecretsMappingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecretRotationPostgresCredentialsSecretsMapping | cdktf.IResolvable | undefined;
    set internalValue(value: SecretRotationPostgresCredentialsSecretsMapping | cdktf.IResolvable | undefined);
    private _password?;
    get password(): string;
    set password(value: string);
    get passwordInput(): string;
    private _username?;
    get username(): string;
    set username(value: string);
    get usernameInput(): string;
}
export interface SecretRotationPostgresCredentialsTemporaryParameters {
}
export declare function secretRotationPostgresCredentialsTemporaryParametersToTerraform(struct?: SecretRotationPostgresCredentialsTemporaryParameters | cdktf.IResolvable): any;
export declare function secretRotationPostgresCredentialsTemporaryParametersToHclTerraform(struct?: SecretRotationPostgresCredentialsTemporaryParameters | cdktf.IResolvable): any;
export declare class SecretRotationPostgresCredentialsTemporaryParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecretRotationPostgresCredentialsTemporaryParameters | cdktf.IResolvable | undefined;
    set internalValue(value: SecretRotationPostgresCredentialsTemporaryParameters | cdktf.IResolvable | undefined);
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_postgres_credentials infisical_secret_rotation_postgres_credentials}
*/
export declare class SecretRotationPostgresCredentials extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_secret_rotation_postgres_credentials";
    /**
    * Generates CDKTF code for importing a SecretRotationPostgresCredentials resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SecretRotationPostgresCredentials to import
    * @param importFromId The id of the existing SecretRotationPostgresCredentials that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_postgres_credentials#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SecretRotationPostgresCredentials to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_postgres_credentials infisical_secret_rotation_postgres_credentials} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecretRotationPostgresCredentialsConfig
    */
    constructor(scope: Construct, id: string, config: SecretRotationPostgresCredentialsConfig);
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
    get parameters(): SecretRotationPostgresCredentialsParametersOutputReference;
    putParameters(value: SecretRotationPostgresCredentialsParameters): void;
    get parametersInput(): any;
    private _projectId?;
    get projectId(): string;
    set projectId(value: string);
    get projectIdInput(): string;
    private _rotateAtUtc;
    get rotateAtUtc(): SecretRotationPostgresCredentialsRotateAtUtcOutputReference;
    putRotateAtUtc(value: SecretRotationPostgresCredentialsRotateAtUtc): void;
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
    get secretsMapping(): SecretRotationPostgresCredentialsSecretsMappingOutputReference;
    putSecretsMapping(value: SecretRotationPostgresCredentialsSecretsMapping): void;
    get secretsMappingInput(): any;
    private _temporaryParameters;
    get temporaryParameters(): SecretRotationPostgresCredentialsTemporaryParametersOutputReference;
    putTemporaryParameters(value: SecretRotationPostgresCredentialsTemporaryParameters): void;
    resetTemporaryParameters(): void;
    get temporaryParametersInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
