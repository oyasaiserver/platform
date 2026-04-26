import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SecretRotationMssqlCredentialsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Whether secrets should be automatically rotated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_mssql_credentials#auto_rotation_enabled SecretRotationMssqlCredentials#auto_rotation_enabled}
    */
    readonly autoRotationEnabled?: boolean | cdktf.IResolvable;
    /**
    * The ID of the connection to use for the secret rotation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_mssql_credentials#connection_id SecretRotationMssqlCredentials#connection_id}
    */
    readonly connectionId: string;
    /**
    * The description of the secret rotation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_mssql_credentials#description SecretRotationMssqlCredentials#description}
    */
    readonly description?: string;
    /**
    * The slug of the project environment to rotate secrets from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_mssql_credentials#environment SecretRotationMssqlCredentials#environment}
    */
    readonly environment: string;
    /**
    * The name of the secret rotation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_mssql_credentials#name SecretRotationMssqlCredentials#name}
    */
    readonly name: string;
    /**
    * Parameters to modify how secrets are rotated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_mssql_credentials#parameters SecretRotationMssqlCredentials#parameters}
    */
    readonly parameters: SecretRotationMssqlCredentialsParameters;
    /**
    * The ID of the Infisical project to create the secret rotation in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_mssql_credentials#project_id SecretRotationMssqlCredentials#project_id}
    */
    readonly projectId: string;
    /**
    * At which UTC time the rotation should occur.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_mssql_credentials#rotate_at_utc SecretRotationMssqlCredentials#rotate_at_utc}
    */
    readonly rotateAtUtc?: SecretRotationMssqlCredentialsRotateAtUtc;
    /**
    * How many days to wait between each rotation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_mssql_credentials#rotation_interval SecretRotationMssqlCredentials#rotation_interval}
    */
    readonly rotationInterval?: number;
    /**
    * The folder path to rotate secrets from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_mssql_credentials#secret_path SecretRotationMssqlCredentials#secret_path}
    */
    readonly secretPath: string;
    /**
    * Secret mappings to modify how secrets are rotated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_mssql_credentials#secrets_mapping SecretRotationMssqlCredentials#secrets_mapping}
    */
    readonly secretsMapping: SecretRotationMssqlCredentialsSecretsMapping;
    /**
    * Temporary parameters to modify how secrets are rotated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_mssql_credentials#temporary_parameters SecretRotationMssqlCredentials#temporary_parameters}
    */
    readonly temporaryParameters?: SecretRotationMssqlCredentialsTemporaryParameters;
}
export interface SecretRotationMssqlCredentialsParameters {
    /**
    * The username of the first login to rotate passwords for. This user must already exists in your database.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_mssql_credentials#username1 SecretRotationMssqlCredentials#username1}
    */
    readonly username1: string;
    /**
    * The username of the second login to rotate passwords for. This user must already exists in your database.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_mssql_credentials#username2 SecretRotationMssqlCredentials#username2}
    */
    readonly username2: string;
}
export declare function secretRotationMssqlCredentialsParametersToTerraform(struct?: SecretRotationMssqlCredentialsParameters | cdktf.IResolvable): any;
export declare function secretRotationMssqlCredentialsParametersToHclTerraform(struct?: SecretRotationMssqlCredentialsParameters | cdktf.IResolvable): any;
export declare class SecretRotationMssqlCredentialsParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecretRotationMssqlCredentialsParameters | cdktf.IResolvable | undefined;
    set internalValue(value: SecretRotationMssqlCredentialsParameters | cdktf.IResolvable | undefined);
    private _username1?;
    get username1(): string;
    set username1(value: string);
    get username1Input(): string;
    private _username2?;
    get username2(): string;
    set username2(value: string);
    get username2Input(): string;
}
export interface SecretRotationMssqlCredentialsRotateAtUtc {
    /**
    * The hour at which the rotation should occur (UTC).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_mssql_credentials#hours SecretRotationMssqlCredentials#hours}
    */
    readonly hours?: number;
    /**
    * The minute at which the rotation should occur (UTC).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_mssql_credentials#minutes SecretRotationMssqlCredentials#minutes}
    */
    readonly minutes?: number;
}
export declare function secretRotationMssqlCredentialsRotateAtUtcToTerraform(struct?: SecretRotationMssqlCredentialsRotateAtUtc | cdktf.IResolvable): any;
export declare function secretRotationMssqlCredentialsRotateAtUtcToHclTerraform(struct?: SecretRotationMssqlCredentialsRotateAtUtc | cdktf.IResolvable): any;
export declare class SecretRotationMssqlCredentialsRotateAtUtcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecretRotationMssqlCredentialsRotateAtUtc | cdktf.IResolvable | undefined;
    set internalValue(value: SecretRotationMssqlCredentialsRotateAtUtc | cdktf.IResolvable | undefined);
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
export interface SecretRotationMssqlCredentialsSecretsMapping {
    /**
    * The name of the secret that the generated password will be mapped to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_mssql_credentials#password SecretRotationMssqlCredentials#password}
    */
    readonly password: string;
    /**
    * The name of the secret that the active username will be mapped to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_mssql_credentials#username SecretRotationMssqlCredentials#username}
    */
    readonly username: string;
}
export declare function secretRotationMssqlCredentialsSecretsMappingToTerraform(struct?: SecretRotationMssqlCredentialsSecretsMapping | cdktf.IResolvable): any;
export declare function secretRotationMssqlCredentialsSecretsMappingToHclTerraform(struct?: SecretRotationMssqlCredentialsSecretsMapping | cdktf.IResolvable): any;
export declare class SecretRotationMssqlCredentialsSecretsMappingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecretRotationMssqlCredentialsSecretsMapping | cdktf.IResolvable | undefined;
    set internalValue(value: SecretRotationMssqlCredentialsSecretsMapping | cdktf.IResolvable | undefined);
    private _password?;
    get password(): string;
    set password(value: string);
    get passwordInput(): string;
    private _username?;
    get username(): string;
    set username(value: string);
    get usernameInput(): string;
}
export interface SecretRotationMssqlCredentialsTemporaryParameters {
}
export declare function secretRotationMssqlCredentialsTemporaryParametersToTerraform(struct?: SecretRotationMssqlCredentialsTemporaryParameters | cdktf.IResolvable): any;
export declare function secretRotationMssqlCredentialsTemporaryParametersToHclTerraform(struct?: SecretRotationMssqlCredentialsTemporaryParameters | cdktf.IResolvable): any;
export declare class SecretRotationMssqlCredentialsTemporaryParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecretRotationMssqlCredentialsTemporaryParameters | cdktf.IResolvable | undefined;
    set internalValue(value: SecretRotationMssqlCredentialsTemporaryParameters | cdktf.IResolvable | undefined);
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_mssql_credentials infisical_secret_rotation_mssql_credentials}
*/
export declare class SecretRotationMssqlCredentials extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_secret_rotation_mssql_credentials";
    /**
    * Generates CDKTF code for importing a SecretRotationMssqlCredentials resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SecretRotationMssqlCredentials to import
    * @param importFromId The id of the existing SecretRotationMssqlCredentials that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_mssql_credentials#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SecretRotationMssqlCredentials to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_mssql_credentials infisical_secret_rotation_mssql_credentials} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecretRotationMssqlCredentialsConfig
    */
    constructor(scope: Construct, id: string, config: SecretRotationMssqlCredentialsConfig);
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
    get parameters(): SecretRotationMssqlCredentialsParametersOutputReference;
    putParameters(value: SecretRotationMssqlCredentialsParameters): void;
    get parametersInput(): any;
    private _projectId?;
    get projectId(): string;
    set projectId(value: string);
    get projectIdInput(): string;
    private _rotateAtUtc;
    get rotateAtUtc(): SecretRotationMssqlCredentialsRotateAtUtcOutputReference;
    putRotateAtUtc(value: SecretRotationMssqlCredentialsRotateAtUtc): void;
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
    get secretsMapping(): SecretRotationMssqlCredentialsSecretsMappingOutputReference;
    putSecretsMapping(value: SecretRotationMssqlCredentialsSecretsMapping): void;
    get secretsMappingInput(): any;
    private _temporaryParameters;
    get temporaryParameters(): SecretRotationMssqlCredentialsTemporaryParametersOutputReference;
    putTemporaryParameters(value: SecretRotationMssqlCredentialsTemporaryParameters): void;
    resetTemporaryParameters(): void;
    get temporaryParametersInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
