import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SecretRotationAzureClientSecretConfig extends cdktf.TerraformMetaArguments {
    /**
    * Whether secrets should be automatically rotated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_azure_client_secret#auto_rotation_enabled SecretRotationAzureClientSecret#auto_rotation_enabled}
    */
    readonly autoRotationEnabled?: boolean | cdktf.IResolvable;
    /**
    * The ID of the connection to use for the secret rotation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_azure_client_secret#connection_id SecretRotationAzureClientSecret#connection_id}
    */
    readonly connectionId: string;
    /**
    * The description of the secret rotation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_azure_client_secret#description SecretRotationAzureClientSecret#description}
    */
    readonly description?: string;
    /**
    * The slug of the project environment to rotate secrets from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_azure_client_secret#environment SecretRotationAzureClientSecret#environment}
    */
    readonly environment: string;
    /**
    * The name of the secret rotation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_azure_client_secret#name SecretRotationAzureClientSecret#name}
    */
    readonly name: string;
    /**
    * Parameters to modify how secrets are rotated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_azure_client_secret#parameters SecretRotationAzureClientSecret#parameters}
    */
    readonly parameters: SecretRotationAzureClientSecretParameters;
    /**
    * The ID of the Infisical project to create the secret rotation in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_azure_client_secret#project_id SecretRotationAzureClientSecret#project_id}
    */
    readonly projectId: string;
    /**
    * At which UTC time the rotation should occur.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_azure_client_secret#rotate_at_utc SecretRotationAzureClientSecret#rotate_at_utc}
    */
    readonly rotateAtUtc?: SecretRotationAzureClientSecretRotateAtUtc;
    /**
    * How many days to wait between each rotation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_azure_client_secret#rotation_interval SecretRotationAzureClientSecret#rotation_interval}
    */
    readonly rotationInterval?: number;
    /**
    * The folder path to rotate secrets from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_azure_client_secret#secret_path SecretRotationAzureClientSecret#secret_path}
    */
    readonly secretPath: string;
    /**
    * Secret mappings to modify how secrets are rotated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_azure_client_secret#secrets_mapping SecretRotationAzureClientSecret#secrets_mapping}
    */
    readonly secretsMapping: SecretRotationAzureClientSecretSecretsMapping;
    /**
    * Temporary parameters to modify how secrets are rotated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_azure_client_secret#temporary_parameters SecretRotationAzureClientSecret#temporary_parameters}
    */
    readonly temporaryParameters?: SecretRotationAzureClientSecretTemporaryParameters;
}
export interface SecretRotationAzureClientSecretParameters {
    /**
    * The client ID of the Azure Application to rotate the client secret for.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_azure_client_secret#client_id SecretRotationAzureClientSecret#client_id}
    */
    readonly clientId: string;
    /**
    * The ID of the Azure Application to rotate the client secret for.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_azure_client_secret#object_id SecretRotationAzureClientSecret#object_id}
    */
    readonly objectId: string;
}
export declare function secretRotationAzureClientSecretParametersToTerraform(struct?: SecretRotationAzureClientSecretParameters | cdktf.IResolvable): any;
export declare function secretRotationAzureClientSecretParametersToHclTerraform(struct?: SecretRotationAzureClientSecretParameters | cdktf.IResolvable): any;
export declare class SecretRotationAzureClientSecretParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecretRotationAzureClientSecretParameters | cdktf.IResolvable | undefined;
    set internalValue(value: SecretRotationAzureClientSecretParameters | cdktf.IResolvable | undefined);
    private _clientId?;
    get clientId(): string;
    set clientId(value: string);
    get clientIdInput(): string;
    private _objectId?;
    get objectId(): string;
    set objectId(value: string);
    get objectIdInput(): string;
}
export interface SecretRotationAzureClientSecretRotateAtUtc {
    /**
    * The hour at which the rotation should occur (UTC).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_azure_client_secret#hours SecretRotationAzureClientSecret#hours}
    */
    readonly hours?: number;
    /**
    * The minute at which the rotation should occur (UTC).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_azure_client_secret#minutes SecretRotationAzureClientSecret#minutes}
    */
    readonly minutes?: number;
}
export declare function secretRotationAzureClientSecretRotateAtUtcToTerraform(struct?: SecretRotationAzureClientSecretRotateAtUtc | cdktf.IResolvable): any;
export declare function secretRotationAzureClientSecretRotateAtUtcToHclTerraform(struct?: SecretRotationAzureClientSecretRotateAtUtc | cdktf.IResolvable): any;
export declare class SecretRotationAzureClientSecretRotateAtUtcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecretRotationAzureClientSecretRotateAtUtc | cdktf.IResolvable | undefined;
    set internalValue(value: SecretRotationAzureClientSecretRotateAtUtc | cdktf.IResolvable | undefined);
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
export interface SecretRotationAzureClientSecretSecretsMapping {
    /**
    * The name of the secret that the client ID will be mapped to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_azure_client_secret#client_id SecretRotationAzureClientSecret#client_id}
    */
    readonly clientId: string;
    /**
    * The name of the secret that the rotated client secret will be mapped to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_azure_client_secret#client_secret SecretRotationAzureClientSecret#client_secret}
    */
    readonly clientSecret: string;
}
export declare function secretRotationAzureClientSecretSecretsMappingToTerraform(struct?: SecretRotationAzureClientSecretSecretsMapping | cdktf.IResolvable): any;
export declare function secretRotationAzureClientSecretSecretsMappingToHclTerraform(struct?: SecretRotationAzureClientSecretSecretsMapping | cdktf.IResolvable): any;
export declare class SecretRotationAzureClientSecretSecretsMappingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecretRotationAzureClientSecretSecretsMapping | cdktf.IResolvable | undefined;
    set internalValue(value: SecretRotationAzureClientSecretSecretsMapping | cdktf.IResolvable | undefined);
    private _clientId?;
    get clientId(): string;
    set clientId(value: string);
    get clientIdInput(): string;
    private _clientSecret?;
    get clientSecret(): string;
    set clientSecret(value: string);
    get clientSecretInput(): string;
}
export interface SecretRotationAzureClientSecretTemporaryParameters {
}
export declare function secretRotationAzureClientSecretTemporaryParametersToTerraform(struct?: SecretRotationAzureClientSecretTemporaryParameters | cdktf.IResolvable): any;
export declare function secretRotationAzureClientSecretTemporaryParametersToHclTerraform(struct?: SecretRotationAzureClientSecretTemporaryParameters | cdktf.IResolvable): any;
export declare class SecretRotationAzureClientSecretTemporaryParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecretRotationAzureClientSecretTemporaryParameters | cdktf.IResolvable | undefined;
    set internalValue(value: SecretRotationAzureClientSecretTemporaryParameters | cdktf.IResolvable | undefined);
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_azure_client_secret infisical_secret_rotation_azure_client_secret}
*/
export declare class SecretRotationAzureClientSecret extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_secret_rotation_azure_client_secret";
    /**
    * Generates CDKTF code for importing a SecretRotationAzureClientSecret resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SecretRotationAzureClientSecret to import
    * @param importFromId The id of the existing SecretRotationAzureClientSecret that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_azure_client_secret#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SecretRotationAzureClientSecret to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_azure_client_secret infisical_secret_rotation_azure_client_secret} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecretRotationAzureClientSecretConfig
    */
    constructor(scope: Construct, id: string, config: SecretRotationAzureClientSecretConfig);
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
    get parameters(): SecretRotationAzureClientSecretParametersOutputReference;
    putParameters(value: SecretRotationAzureClientSecretParameters): void;
    get parametersInput(): any;
    private _projectId?;
    get projectId(): string;
    set projectId(value: string);
    get projectIdInput(): string;
    private _rotateAtUtc;
    get rotateAtUtc(): SecretRotationAzureClientSecretRotateAtUtcOutputReference;
    putRotateAtUtc(value: SecretRotationAzureClientSecretRotateAtUtc): void;
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
    get secretsMapping(): SecretRotationAzureClientSecretSecretsMappingOutputReference;
    putSecretsMapping(value: SecretRotationAzureClientSecretSecretsMapping): void;
    get secretsMappingInput(): any;
    private _temporaryParameters;
    get temporaryParameters(): SecretRotationAzureClientSecretTemporaryParametersOutputReference;
    putTemporaryParameters(value: SecretRotationAzureClientSecretTemporaryParameters): void;
    resetTemporaryParameters(): void;
    get temporaryParametersInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
