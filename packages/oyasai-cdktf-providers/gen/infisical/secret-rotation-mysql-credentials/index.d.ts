import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SecretRotationMysqlCredentialsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Whether secrets should be automatically rotated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_mysql_credentials#auto_rotation_enabled SecretRotationMysqlCredentials#auto_rotation_enabled}
    */
    readonly autoRotationEnabled?: boolean | cdktf.IResolvable;
    /**
    * The ID of the connection to use for the secret rotation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_mysql_credentials#connection_id SecretRotationMysqlCredentials#connection_id}
    */
    readonly connectionId: string;
    /**
    * The description of the secret rotation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_mysql_credentials#description SecretRotationMysqlCredentials#description}
    */
    readonly description?: string;
    /**
    * The slug of the project environment to rotate secrets from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_mysql_credentials#environment SecretRotationMysqlCredentials#environment}
    */
    readonly environment: string;
    /**
    * The name of the secret rotation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_mysql_credentials#name SecretRotationMysqlCredentials#name}
    */
    readonly name: string;
    /**
    * Parameters to modify how secrets are rotated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_mysql_credentials#parameters SecretRotationMysqlCredentials#parameters}
    */
    readonly parameters: SecretRotationMysqlCredentialsParameters;
    /**
    * The ID of the Infisical project to create the secret rotation in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_mysql_credentials#project_id SecretRotationMysqlCredentials#project_id}
    */
    readonly projectId: string;
    /**
    * At which UTC time the rotation should occur.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_mysql_credentials#rotate_at_utc SecretRotationMysqlCredentials#rotate_at_utc}
    */
    readonly rotateAtUtc?: SecretRotationMysqlCredentialsRotateAtUtc;
    /**
    * How many days to wait between each rotation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_mysql_credentials#rotation_interval SecretRotationMysqlCredentials#rotation_interval}
    */
    readonly rotationInterval?: number;
    /**
    * The folder path to rotate secrets from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_mysql_credentials#secret_path SecretRotationMysqlCredentials#secret_path}
    */
    readonly secretPath: string;
    /**
    * Secret mappings to modify how secrets are rotated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_mysql_credentials#secrets_mapping SecretRotationMysqlCredentials#secrets_mapping}
    */
    readonly secretsMapping: SecretRotationMysqlCredentialsSecretsMapping;
    /**
    * Temporary parameters to modify how secrets are rotated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_mysql_credentials#temporary_parameters SecretRotationMysqlCredentials#temporary_parameters}
    */
    readonly temporaryParameters?: SecretRotationMysqlCredentialsTemporaryParameters;
}
export interface SecretRotationMysqlCredentialsParameters {
    /**
    * The username of the first login to rotate passwords for. This user must already exists in your database.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_mysql_credentials#username1 SecretRotationMysqlCredentials#username1}
    */
    readonly username1: string;
    /**
    * The username of the second login to rotate passwords for. This user must already exists in your database.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_mysql_credentials#username2 SecretRotationMysqlCredentials#username2}
    */
    readonly username2: string;
}
export declare function secretRotationMysqlCredentialsParametersToTerraform(struct?: SecretRotationMysqlCredentialsParameters | cdktf.IResolvable): any;
export declare function secretRotationMysqlCredentialsParametersToHclTerraform(struct?: SecretRotationMysqlCredentialsParameters | cdktf.IResolvable): any;
export declare class SecretRotationMysqlCredentialsParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecretRotationMysqlCredentialsParameters | cdktf.IResolvable | undefined;
    set internalValue(value: SecretRotationMysqlCredentialsParameters | cdktf.IResolvable | undefined);
    private _username1?;
    get username1(): string;
    set username1(value: string);
    get username1Input(): string;
    private _username2?;
    get username2(): string;
    set username2(value: string);
    get username2Input(): string;
}
export interface SecretRotationMysqlCredentialsRotateAtUtc {
    /**
    * The hour at which the rotation should occur (UTC).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_mysql_credentials#hours SecretRotationMysqlCredentials#hours}
    */
    readonly hours?: number;
    /**
    * The minute at which the rotation should occur (UTC).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_mysql_credentials#minutes SecretRotationMysqlCredentials#minutes}
    */
    readonly minutes?: number;
}
export declare function secretRotationMysqlCredentialsRotateAtUtcToTerraform(struct?: SecretRotationMysqlCredentialsRotateAtUtc | cdktf.IResolvable): any;
export declare function secretRotationMysqlCredentialsRotateAtUtcToHclTerraform(struct?: SecretRotationMysqlCredentialsRotateAtUtc | cdktf.IResolvable): any;
export declare class SecretRotationMysqlCredentialsRotateAtUtcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecretRotationMysqlCredentialsRotateAtUtc | cdktf.IResolvable | undefined;
    set internalValue(value: SecretRotationMysqlCredentialsRotateAtUtc | cdktf.IResolvable | undefined);
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
export interface SecretRotationMysqlCredentialsSecretsMapping {
    /**
    * The name of the secret that the generated password will be mapped to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_mysql_credentials#password SecretRotationMysqlCredentials#password}
    */
    readonly password: string;
    /**
    * The name of the secret that the active username will be mapped to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_mysql_credentials#username SecretRotationMysqlCredentials#username}
    */
    readonly username: string;
}
export declare function secretRotationMysqlCredentialsSecretsMappingToTerraform(struct?: SecretRotationMysqlCredentialsSecretsMapping | cdktf.IResolvable): any;
export declare function secretRotationMysqlCredentialsSecretsMappingToHclTerraform(struct?: SecretRotationMysqlCredentialsSecretsMapping | cdktf.IResolvable): any;
export declare class SecretRotationMysqlCredentialsSecretsMappingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecretRotationMysqlCredentialsSecretsMapping | cdktf.IResolvable | undefined;
    set internalValue(value: SecretRotationMysqlCredentialsSecretsMapping | cdktf.IResolvable | undefined);
    private _password?;
    get password(): string;
    set password(value: string);
    get passwordInput(): string;
    private _username?;
    get username(): string;
    set username(value: string);
    get usernameInput(): string;
}
export interface SecretRotationMysqlCredentialsTemporaryParameters {
}
export declare function secretRotationMysqlCredentialsTemporaryParametersToTerraform(struct?: SecretRotationMysqlCredentialsTemporaryParameters | cdktf.IResolvable): any;
export declare function secretRotationMysqlCredentialsTemporaryParametersToHclTerraform(struct?: SecretRotationMysqlCredentialsTemporaryParameters | cdktf.IResolvable): any;
export declare class SecretRotationMysqlCredentialsTemporaryParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecretRotationMysqlCredentialsTemporaryParameters | cdktf.IResolvable | undefined;
    set internalValue(value: SecretRotationMysqlCredentialsTemporaryParameters | cdktf.IResolvable | undefined);
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_mysql_credentials infisical_secret_rotation_mysql_credentials}
*/
export declare class SecretRotationMysqlCredentials extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_secret_rotation_mysql_credentials";
    /**
    * Generates CDKTF code for importing a SecretRotationMysqlCredentials resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SecretRotationMysqlCredentials to import
    * @param importFromId The id of the existing SecretRotationMysqlCredentials that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_mysql_credentials#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SecretRotationMysqlCredentials to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_mysql_credentials infisical_secret_rotation_mysql_credentials} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecretRotationMysqlCredentialsConfig
    */
    constructor(scope: Construct, id: string, config: SecretRotationMysqlCredentialsConfig);
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
    get parameters(): SecretRotationMysqlCredentialsParametersOutputReference;
    putParameters(value: SecretRotationMysqlCredentialsParameters): void;
    get parametersInput(): any;
    private _projectId?;
    get projectId(): string;
    set projectId(value: string);
    get projectIdInput(): string;
    private _rotateAtUtc;
    get rotateAtUtc(): SecretRotationMysqlCredentialsRotateAtUtcOutputReference;
    putRotateAtUtc(value: SecretRotationMysqlCredentialsRotateAtUtc): void;
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
    get secretsMapping(): SecretRotationMysqlCredentialsSecretsMappingOutputReference;
    putSecretsMapping(value: SecretRotationMysqlCredentialsSecretsMapping): void;
    get secretsMappingInput(): any;
    private _temporaryParameters;
    get temporaryParameters(): SecretRotationMysqlCredentialsTemporaryParametersOutputReference;
    putTemporaryParameters(value: SecretRotationMysqlCredentialsTemporaryParameters): void;
    resetTemporaryParameters(): void;
    get temporaryParametersInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
