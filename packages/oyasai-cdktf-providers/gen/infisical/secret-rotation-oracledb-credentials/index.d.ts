import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SecretRotationOracledbCredentialsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Whether secrets should be automatically rotated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_oracledb_credentials#auto_rotation_enabled SecretRotationOracledbCredentials#auto_rotation_enabled}
    */
    readonly autoRotationEnabled?: boolean | cdktf.IResolvable;
    /**
    * The ID of the connection to use for the secret rotation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_oracledb_credentials#connection_id SecretRotationOracledbCredentials#connection_id}
    */
    readonly connectionId: string;
    /**
    * The description of the secret rotation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_oracledb_credentials#description SecretRotationOracledbCredentials#description}
    */
    readonly description?: string;
    /**
    * The slug of the project environment to rotate secrets from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_oracledb_credentials#environment SecretRotationOracledbCredentials#environment}
    */
    readonly environment: string;
    /**
    * The name of the secret rotation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_oracledb_credentials#name SecretRotationOracledbCredentials#name}
    */
    readonly name: string;
    /**
    * Parameters to modify how secrets are rotated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_oracledb_credentials#parameters SecretRotationOracledbCredentials#parameters}
    */
    readonly parameters: SecretRotationOracledbCredentialsParameters;
    /**
    * The ID of the Infisical project to create the secret rotation in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_oracledb_credentials#project_id SecretRotationOracledbCredentials#project_id}
    */
    readonly projectId: string;
    /**
    * At which UTC time the rotation should occur.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_oracledb_credentials#rotate_at_utc SecretRotationOracledbCredentials#rotate_at_utc}
    */
    readonly rotateAtUtc?: SecretRotationOracledbCredentialsRotateAtUtc;
    /**
    * How many days to wait between each rotation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_oracledb_credentials#rotation_interval SecretRotationOracledbCredentials#rotation_interval}
    */
    readonly rotationInterval?: number;
    /**
    * The folder path to rotate secrets from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_oracledb_credentials#secret_path SecretRotationOracledbCredentials#secret_path}
    */
    readonly secretPath: string;
    /**
    * Secret mappings to modify how secrets are rotated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_oracledb_credentials#secrets_mapping SecretRotationOracledbCredentials#secrets_mapping}
    */
    readonly secretsMapping: SecretRotationOracledbCredentialsSecretsMapping;
    /**
    * Temporary parameters to modify how secrets are rotated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_oracledb_credentials#temporary_parameters SecretRotationOracledbCredentials#temporary_parameters}
    */
    readonly temporaryParameters?: SecretRotationOracledbCredentialsTemporaryParameters;
}
export interface SecretRotationOracledbCredentialsParameters {
    /**
    * The username of the first login to rotate passwords for. This user must already exists in your database.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_oracledb_credentials#username1 SecretRotationOracledbCredentials#username1}
    */
    readonly username1: string;
    /**
    * The username of the second login to rotate passwords for. This user must already exists in your database.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_oracledb_credentials#username2 SecretRotationOracledbCredentials#username2}
    */
    readonly username2: string;
}
export declare function secretRotationOracledbCredentialsParametersToTerraform(struct?: SecretRotationOracledbCredentialsParameters | cdktf.IResolvable): any;
export declare function secretRotationOracledbCredentialsParametersToHclTerraform(struct?: SecretRotationOracledbCredentialsParameters | cdktf.IResolvable): any;
export declare class SecretRotationOracledbCredentialsParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecretRotationOracledbCredentialsParameters | cdktf.IResolvable | undefined;
    set internalValue(value: SecretRotationOracledbCredentialsParameters | cdktf.IResolvable | undefined);
    private _username1?;
    get username1(): string;
    set username1(value: string);
    get username1Input(): string;
    private _username2?;
    get username2(): string;
    set username2(value: string);
    get username2Input(): string;
}
export interface SecretRotationOracledbCredentialsRotateAtUtc {
    /**
    * The hour at which the rotation should occur (UTC).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_oracledb_credentials#hours SecretRotationOracledbCredentials#hours}
    */
    readonly hours?: number;
    /**
    * The minute at which the rotation should occur (UTC).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_oracledb_credentials#minutes SecretRotationOracledbCredentials#minutes}
    */
    readonly minutes?: number;
}
export declare function secretRotationOracledbCredentialsRotateAtUtcToTerraform(struct?: SecretRotationOracledbCredentialsRotateAtUtc | cdktf.IResolvable): any;
export declare function secretRotationOracledbCredentialsRotateAtUtcToHclTerraform(struct?: SecretRotationOracledbCredentialsRotateAtUtc | cdktf.IResolvable): any;
export declare class SecretRotationOracledbCredentialsRotateAtUtcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecretRotationOracledbCredentialsRotateAtUtc | cdktf.IResolvable | undefined;
    set internalValue(value: SecretRotationOracledbCredentialsRotateAtUtc | cdktf.IResolvable | undefined);
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
export interface SecretRotationOracledbCredentialsSecretsMapping {
    /**
    * The name of the secret that the generated password will be mapped to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_oracledb_credentials#password SecretRotationOracledbCredentials#password}
    */
    readonly password: string;
    /**
    * The name of the secret that the active username will be mapped to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_oracledb_credentials#username SecretRotationOracledbCredentials#username}
    */
    readonly username: string;
}
export declare function secretRotationOracledbCredentialsSecretsMappingToTerraform(struct?: SecretRotationOracledbCredentialsSecretsMapping | cdktf.IResolvable): any;
export declare function secretRotationOracledbCredentialsSecretsMappingToHclTerraform(struct?: SecretRotationOracledbCredentialsSecretsMapping | cdktf.IResolvable): any;
export declare class SecretRotationOracledbCredentialsSecretsMappingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecretRotationOracledbCredentialsSecretsMapping | cdktf.IResolvable | undefined;
    set internalValue(value: SecretRotationOracledbCredentialsSecretsMapping | cdktf.IResolvable | undefined);
    private _password?;
    get password(): string;
    set password(value: string);
    get passwordInput(): string;
    private _username?;
    get username(): string;
    set username(value: string);
    get usernameInput(): string;
}
export interface SecretRotationOracledbCredentialsTemporaryParameters {
}
export declare function secretRotationOracledbCredentialsTemporaryParametersToTerraform(struct?: SecretRotationOracledbCredentialsTemporaryParameters | cdktf.IResolvable): any;
export declare function secretRotationOracledbCredentialsTemporaryParametersToHclTerraform(struct?: SecretRotationOracledbCredentialsTemporaryParameters | cdktf.IResolvable): any;
export declare class SecretRotationOracledbCredentialsTemporaryParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecretRotationOracledbCredentialsTemporaryParameters | cdktf.IResolvable | undefined;
    set internalValue(value: SecretRotationOracledbCredentialsTemporaryParameters | cdktf.IResolvable | undefined);
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_oracledb_credentials infisical_secret_rotation_oracledb_credentials}
*/
export declare class SecretRotationOracledbCredentials extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_secret_rotation_oracledb_credentials";
    /**
    * Generates CDKTF code for importing a SecretRotationOracledbCredentials resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SecretRotationOracledbCredentials to import
    * @param importFromId The id of the existing SecretRotationOracledbCredentials that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_oracledb_credentials#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SecretRotationOracledbCredentials to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_oracledb_credentials infisical_secret_rotation_oracledb_credentials} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecretRotationOracledbCredentialsConfig
    */
    constructor(scope: Construct, id: string, config: SecretRotationOracledbCredentialsConfig);
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
    get parameters(): SecretRotationOracledbCredentialsParametersOutputReference;
    putParameters(value: SecretRotationOracledbCredentialsParameters): void;
    get parametersInput(): any;
    private _projectId?;
    get projectId(): string;
    set projectId(value: string);
    get projectIdInput(): string;
    private _rotateAtUtc;
    get rotateAtUtc(): SecretRotationOracledbCredentialsRotateAtUtcOutputReference;
    putRotateAtUtc(value: SecretRotationOracledbCredentialsRotateAtUtc): void;
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
    get secretsMapping(): SecretRotationOracledbCredentialsSecretsMappingOutputReference;
    putSecretsMapping(value: SecretRotationOracledbCredentialsSecretsMapping): void;
    get secretsMappingInput(): any;
    private _temporaryParameters;
    get temporaryParameters(): SecretRotationOracledbCredentialsTemporaryParametersOutputReference;
    putTemporaryParameters(value: SecretRotationOracledbCredentialsTemporaryParameters): void;
    resetTemporaryParameters(): void;
    get temporaryParametersInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
