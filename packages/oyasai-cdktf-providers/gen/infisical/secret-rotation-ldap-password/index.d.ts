import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SecretRotationLdapPasswordConfig extends cdktf.TerraformMetaArguments {
    /**
    * Whether secrets should be automatically rotated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_ldap_password#auto_rotation_enabled SecretRotationLdapPassword#auto_rotation_enabled}
    */
    readonly autoRotationEnabled?: boolean | cdktf.IResolvable;
    /**
    * The ID of the connection to use for the secret rotation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_ldap_password#connection_id SecretRotationLdapPassword#connection_id}
    */
    readonly connectionId: string;
    /**
    * The description of the secret rotation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_ldap_password#description SecretRotationLdapPassword#description}
    */
    readonly description?: string;
    /**
    * The slug of the project environment to rotate secrets from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_ldap_password#environment SecretRotationLdapPassword#environment}
    */
    readonly environment: string;
    /**
    * The name of the secret rotation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_ldap_password#name SecretRotationLdapPassword#name}
    */
    readonly name: string;
    /**
    * Parameters to modify how secrets are rotated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_ldap_password#parameters SecretRotationLdapPassword#parameters}
    */
    readonly parameters: SecretRotationLdapPasswordParameters;
    /**
    * The ID of the Infisical project to create the secret rotation in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_ldap_password#project_id SecretRotationLdapPassword#project_id}
    */
    readonly projectId: string;
    /**
    * At which UTC time the rotation should occur.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_ldap_password#rotate_at_utc SecretRotationLdapPassword#rotate_at_utc}
    */
    readonly rotateAtUtc?: SecretRotationLdapPasswordRotateAtUtc;
    /**
    * How many days to wait between each rotation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_ldap_password#rotation_interval SecretRotationLdapPassword#rotation_interval}
    */
    readonly rotationInterval?: number;
    /**
    * The folder path to rotate secrets from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_ldap_password#secret_path SecretRotationLdapPassword#secret_path}
    */
    readonly secretPath: string;
    /**
    * Secret mappings to modify how secrets are rotated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_ldap_password#secrets_mapping SecretRotationLdapPassword#secrets_mapping}
    */
    readonly secretsMapping: SecretRotationLdapPasswordSecretsMapping;
    /**
    * Temporary parameters to modify how secrets are rotated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_ldap_password#temporary_parameters SecretRotationLdapPassword#temporary_parameters}
    */
    readonly temporaryParameters?: SecretRotationLdapPasswordTemporaryParameters;
}
export interface SecretRotationLdapPasswordParametersPasswordRequirementsRequired {
    /**
    * Minimum number of digits required in the password.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_ldap_password#digits SecretRotationLdapPassword#digits}
    */
    readonly digits: number;
    /**
    * Minimum number of lowercase letters required in the password.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_ldap_password#lowercase SecretRotationLdapPassword#lowercase}
    */
    readonly lowercase: number;
    /**
    * Minimum number of symbols required in the password.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_ldap_password#symbols SecretRotationLdapPassword#symbols}
    */
    readonly symbols: number;
    /**
    * Minimum number of uppercase letters required in the password.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_ldap_password#uppercase SecretRotationLdapPassword#uppercase}
    */
    readonly uppercase: number;
}
export declare function secretRotationLdapPasswordParametersPasswordRequirementsRequiredToTerraform(struct?: SecretRotationLdapPasswordParametersPasswordRequirementsRequired | cdktf.IResolvable): any;
export declare function secretRotationLdapPasswordParametersPasswordRequirementsRequiredToHclTerraform(struct?: SecretRotationLdapPasswordParametersPasswordRequirementsRequired | cdktf.IResolvable): any;
export declare class SecretRotationLdapPasswordParametersPasswordRequirementsRequiredOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecretRotationLdapPasswordParametersPasswordRequirementsRequired | cdktf.IResolvable | undefined;
    set internalValue(value: SecretRotationLdapPasswordParametersPasswordRequirementsRequired | cdktf.IResolvable | undefined);
    private _digits?;
    get digits(): number;
    set digits(value: number);
    get digitsInput(): number;
    private _lowercase?;
    get lowercase(): number;
    set lowercase(value: number);
    get lowercaseInput(): number;
    private _symbols?;
    get symbols(): number;
    set symbols(value: number);
    get symbolsInput(): number;
    private _uppercase?;
    get uppercase(): number;
    set uppercase(value: number);
    get uppercaseInput(): number;
}
export interface SecretRotationLdapPasswordParametersPasswordRequirements {
    /**
    * String of allowed symbols for password generation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_ldap_password#allowed_symbols SecretRotationLdapPassword#allowed_symbols}
    */
    readonly allowedSymbols?: string;
    /**
    * The length of the generated password.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_ldap_password#length SecretRotationLdapPassword#length}
    */
    readonly length: number;
    /**
    * Required character types in the generated password.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_ldap_password#required SecretRotationLdapPassword#required}
    */
    readonly required: SecretRotationLdapPasswordParametersPasswordRequirementsRequired;
}
export declare function secretRotationLdapPasswordParametersPasswordRequirementsToTerraform(struct?: SecretRotationLdapPasswordParametersPasswordRequirements | cdktf.IResolvable): any;
export declare function secretRotationLdapPasswordParametersPasswordRequirementsToHclTerraform(struct?: SecretRotationLdapPasswordParametersPasswordRequirements | cdktf.IResolvable): any;
export declare class SecretRotationLdapPasswordParametersPasswordRequirementsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecretRotationLdapPasswordParametersPasswordRequirements | cdktf.IResolvable | undefined;
    set internalValue(value: SecretRotationLdapPasswordParametersPasswordRequirements | cdktf.IResolvable | undefined);
    private _allowedSymbols?;
    get allowedSymbols(): string;
    set allowedSymbols(value: string);
    resetAllowedSymbols(): void;
    get allowedSymbolsInput(): string;
    private _length?;
    get length(): number;
    set length(value: number);
    get lengthInput(): number;
    private _required;
    get required(): SecretRotationLdapPasswordParametersPasswordRequirementsRequiredOutputReference;
    putRequired(value: SecretRotationLdapPasswordParametersPasswordRequirementsRequired): void;
    get requiredInput(): any;
}
export interface SecretRotationLdapPasswordParameters {
    /**
    * The Distinguished Name (DN) of the LDAP entry to rotate the password for.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_ldap_password#dn SecretRotationLdapPassword#dn}
    */
    readonly dn: string;
    /**
    * Password generation requirements.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_ldap_password#password_requirements SecretRotationLdapPassword#password_requirements}
    */
    readonly passwordRequirements: SecretRotationLdapPasswordParametersPasswordRequirements;
    /**
    * The method to use for rotating the password. Supported options: connection-principal and target-principal (default: connection-principal)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_ldap_password#rotation_method SecretRotationLdapPassword#rotation_method}
    */
    readonly rotationMethod?: string;
}
export declare function secretRotationLdapPasswordParametersToTerraform(struct?: SecretRotationLdapPasswordParameters | cdktf.IResolvable): any;
export declare function secretRotationLdapPasswordParametersToHclTerraform(struct?: SecretRotationLdapPasswordParameters | cdktf.IResolvable): any;
export declare class SecretRotationLdapPasswordParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecretRotationLdapPasswordParameters | cdktf.IResolvable | undefined;
    set internalValue(value: SecretRotationLdapPasswordParameters | cdktf.IResolvable | undefined);
    private _dn?;
    get dn(): string;
    set dn(value: string);
    get dnInput(): string;
    private _passwordRequirements;
    get passwordRequirements(): SecretRotationLdapPasswordParametersPasswordRequirementsOutputReference;
    putPasswordRequirements(value: SecretRotationLdapPasswordParametersPasswordRequirements): void;
    get passwordRequirementsInput(): any;
    private _rotationMethod?;
    get rotationMethod(): string;
    set rotationMethod(value: string);
    resetRotationMethod(): void;
    get rotationMethodInput(): string;
}
export interface SecretRotationLdapPasswordRotateAtUtc {
    /**
    * The hour at which the rotation should occur (UTC).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_ldap_password#hours SecretRotationLdapPassword#hours}
    */
    readonly hours?: number;
    /**
    * The minute at which the rotation should occur (UTC).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_ldap_password#minutes SecretRotationLdapPassword#minutes}
    */
    readonly minutes?: number;
}
export declare function secretRotationLdapPasswordRotateAtUtcToTerraform(struct?: SecretRotationLdapPasswordRotateAtUtc | cdktf.IResolvable): any;
export declare function secretRotationLdapPasswordRotateAtUtcToHclTerraform(struct?: SecretRotationLdapPasswordRotateAtUtc | cdktf.IResolvable): any;
export declare class SecretRotationLdapPasswordRotateAtUtcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecretRotationLdapPasswordRotateAtUtc | cdktf.IResolvable | undefined;
    set internalValue(value: SecretRotationLdapPasswordRotateAtUtc | cdktf.IResolvable | undefined);
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
export interface SecretRotationLdapPasswordSecretsMapping {
    /**
    * The name of the secret that the Distinguished Name will be mapped to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_ldap_password#dn SecretRotationLdapPassword#dn}
    */
    readonly dn: string;
    /**
    * The name of the secret that the generated password will be mapped to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_ldap_password#password SecretRotationLdapPassword#password}
    */
    readonly password: string;
}
export declare function secretRotationLdapPasswordSecretsMappingToTerraform(struct?: SecretRotationLdapPasswordSecretsMapping | cdktf.IResolvable): any;
export declare function secretRotationLdapPasswordSecretsMappingToHclTerraform(struct?: SecretRotationLdapPasswordSecretsMapping | cdktf.IResolvable): any;
export declare class SecretRotationLdapPasswordSecretsMappingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecretRotationLdapPasswordSecretsMapping | cdktf.IResolvable | undefined;
    set internalValue(value: SecretRotationLdapPasswordSecretsMapping | cdktf.IResolvable | undefined);
    private _dn?;
    get dn(): string;
    set dn(value: string);
    get dnInput(): string;
    private _password?;
    get password(): string;
    set password(value: string);
    get passwordInput(): string;
}
export interface SecretRotationLdapPasswordTemporaryParameters {
    /**
    * The password of the provided principal if 'parameters.rotation_method' is set to 'target-principal'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_ldap_password#password SecretRotationLdapPassword#password}
    */
    readonly password?: string;
}
export declare function secretRotationLdapPasswordTemporaryParametersToTerraform(struct?: SecretRotationLdapPasswordTemporaryParameters | cdktf.IResolvable): any;
export declare function secretRotationLdapPasswordTemporaryParametersToHclTerraform(struct?: SecretRotationLdapPasswordTemporaryParameters | cdktf.IResolvable): any;
export declare class SecretRotationLdapPasswordTemporaryParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecretRotationLdapPasswordTemporaryParameters | cdktf.IResolvable | undefined;
    set internalValue(value: SecretRotationLdapPasswordTemporaryParameters | cdktf.IResolvable | undefined);
    private _password?;
    get password(): string;
    set password(value: string);
    resetPassword(): void;
    get passwordInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_ldap_password infisical_secret_rotation_ldap_password}
*/
export declare class SecretRotationLdapPassword extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_secret_rotation_ldap_password";
    /**
    * Generates CDKTF code for importing a SecretRotationLdapPassword resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SecretRotationLdapPassword to import
    * @param importFromId The id of the existing SecretRotationLdapPassword that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_ldap_password#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SecretRotationLdapPassword to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_ldap_password infisical_secret_rotation_ldap_password} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecretRotationLdapPasswordConfig
    */
    constructor(scope: Construct, id: string, config: SecretRotationLdapPasswordConfig);
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
    get parameters(): SecretRotationLdapPasswordParametersOutputReference;
    putParameters(value: SecretRotationLdapPasswordParameters): void;
    get parametersInput(): any;
    private _projectId?;
    get projectId(): string;
    set projectId(value: string);
    get projectIdInput(): string;
    private _rotateAtUtc;
    get rotateAtUtc(): SecretRotationLdapPasswordRotateAtUtcOutputReference;
    putRotateAtUtc(value: SecretRotationLdapPasswordRotateAtUtc): void;
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
    get secretsMapping(): SecretRotationLdapPasswordSecretsMappingOutputReference;
    putSecretsMapping(value: SecretRotationLdapPasswordSecretsMapping): void;
    get secretsMappingInput(): any;
    private _temporaryParameters;
    get temporaryParameters(): SecretRotationLdapPasswordTemporaryParametersOutputReference;
    putTemporaryParameters(value: SecretRotationLdapPasswordTemporaryParameters): void;
    resetTemporaryParameters(): void;
    get temporaryParametersInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
