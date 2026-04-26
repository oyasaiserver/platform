import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IntegrationAwsParameterStoreConfig extends cdktf.TerraformMetaArguments {
    /**
    * The AWS access key ID. Used to authenticate with AWS Parameter Store. You must either set secret_access_key and access_key_id, or set assume_role_arn to assume a role.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_aws_parameter_store#access_key_id IntegrationAwsParameterStore#access_key_id}
    */
    readonly accessKeyId?: string;
    /**
    * The ARN of the role to assume when syncing secrets to AWS Parameter Store. You must either set secret_access_key and access_key_id, or set assume_role_arn to assume a role.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_aws_parameter_store#assume_role_arn IntegrationAwsParameterStore#assume_role_arn}
    */
    readonly assumeRoleArn?: string;
    /**
    * The AWS region to sync secrets to. (us-east-1, us-east-2, etc)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_aws_parameter_store#aws_region IntegrationAwsParameterStore#aws_region}
    */
    readonly awsRegion: string;
    /**
    * The slug of the environment to sync to AWS Parameter Store (prod, dev, staging, etc).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_aws_parameter_store#environment IntegrationAwsParameterStore#environment}
    */
    readonly environment: string;
    /**
    * Integration options
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_aws_parameter_store#options IntegrationAwsParameterStore#options}
    */
    readonly options?: IntegrationAwsParameterStoreOptions;
    /**
    * The path in AWS Parameter Store to sync secrets to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_aws_parameter_store#parameter_store_path IntegrationAwsParameterStore#parameter_store_path}
    */
    readonly parameterStorePath: string;
    /**
    * The ID of your Infisical project.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_aws_parameter_store#project_id IntegrationAwsParameterStore#project_id}
    */
    readonly projectId: string;
    /**
    * The AWS secret access key. Used to authenticate with AWS Parameter Store. You must either set secret_access_key and access_key_id, or set assume_role_arn to assume a role.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_aws_parameter_store#secret_access_key IntegrationAwsParameterStore#secret_access_key}
    */
    readonly secretAccessKey?: string;
    /**
    * The secret path in Infisical to sync secrets from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_aws_parameter_store#secret_path IntegrationAwsParameterStore#secret_path}
    */
    readonly secretPath: string;
}
export interface IntegrationAwsParameterStoreOptionsAwsTags {
    /**
    * The key of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_aws_parameter_store#key IntegrationAwsParameterStore#key}
    */
    readonly key?: string;
    /**
    * The value of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_aws_parameter_store#value IntegrationAwsParameterStore#value}
    */
    readonly value?: string;
}
export declare function integrationAwsParameterStoreOptionsAwsTagsToTerraform(struct?: IntegrationAwsParameterStoreOptionsAwsTags | cdktf.IResolvable): any;
export declare function integrationAwsParameterStoreOptionsAwsTagsToHclTerraform(struct?: IntegrationAwsParameterStoreOptionsAwsTags | cdktf.IResolvable): any;
export declare class IntegrationAwsParameterStoreOptionsAwsTagsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): IntegrationAwsParameterStoreOptionsAwsTags | cdktf.IResolvable | undefined;
    set internalValue(value: IntegrationAwsParameterStoreOptionsAwsTags | cdktf.IResolvable | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string;
    private _value?;
    get value(): string;
    set value(value: string);
    resetValue(): void;
    get valueInput(): string;
}
export declare class IntegrationAwsParameterStoreOptionsAwsTagsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: IntegrationAwsParameterStoreOptionsAwsTags[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): IntegrationAwsParameterStoreOptionsAwsTagsOutputReference;
}
export interface IntegrationAwsParameterStoreOptions {
    /**
    * Tags to attach to the AWS parameter store secrets.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_aws_parameter_store#aws_tags IntegrationAwsParameterStore#aws_tags}
    */
    readonly awsTags?: IntegrationAwsParameterStoreOptionsAwsTags[] | cdktf.IResolvable;
    /**
    * Whether to disable deletion of existing secrets in AWS Parameter Store.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_aws_parameter_store#should_disable_delete IntegrationAwsParameterStore#should_disable_delete}
    */
    readonly shouldDisableDelete?: boolean | cdktf.IResolvable;
}
export declare function integrationAwsParameterStoreOptionsToTerraform(struct?: IntegrationAwsParameterStoreOptions | cdktf.IResolvable): any;
export declare function integrationAwsParameterStoreOptionsToHclTerraform(struct?: IntegrationAwsParameterStoreOptions | cdktf.IResolvable): any;
export declare class IntegrationAwsParameterStoreOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): IntegrationAwsParameterStoreOptions | cdktf.IResolvable | undefined;
    set internalValue(value: IntegrationAwsParameterStoreOptions | cdktf.IResolvable | undefined);
    private _awsTags;
    get awsTags(): IntegrationAwsParameterStoreOptionsAwsTagsList;
    putAwsTags(value: IntegrationAwsParameterStoreOptionsAwsTags[] | cdktf.IResolvable): void;
    resetAwsTags(): void;
    get awsTagsInput(): any;
    private _shouldDisableDelete?;
    get shouldDisableDelete(): boolean | cdktf.IResolvable;
    set shouldDisableDelete(value: boolean | cdktf.IResolvable);
    resetShouldDisableDelete(): void;
    get shouldDisableDeleteInput(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_aws_parameter_store infisical_integration_aws_parameter_store}
*/
export declare class IntegrationAwsParameterStore extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_integration_aws_parameter_store";
    /**
    * Generates CDKTF code for importing a IntegrationAwsParameterStore resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IntegrationAwsParameterStore to import
    * @param importFromId The id of the existing IntegrationAwsParameterStore that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_aws_parameter_store#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IntegrationAwsParameterStore to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_aws_parameter_store infisical_integration_aws_parameter_store} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IntegrationAwsParameterStoreConfig
    */
    constructor(scope: Construct, id: string, config: IntegrationAwsParameterStoreConfig);
    private _accessKeyId?;
    get accessKeyId(): string;
    set accessKeyId(value: string);
    resetAccessKeyId(): void;
    get accessKeyIdInput(): string;
    private _assumeRoleArn?;
    get assumeRoleArn(): string;
    set assumeRoleArn(value: string);
    resetAssumeRoleArn(): void;
    get assumeRoleArnInput(): string;
    private _awsRegion?;
    get awsRegion(): string;
    set awsRegion(value: string);
    get awsRegionInput(): string;
    private _environment?;
    get environment(): string;
    set environment(value: string);
    get environmentInput(): string;
    get integrationAuthId(): any;
    get integrationId(): any;
    private _options;
    get options(): IntegrationAwsParameterStoreOptionsOutputReference;
    putOptions(value: IntegrationAwsParameterStoreOptions): void;
    resetOptions(): void;
    get optionsInput(): any;
    private _parameterStorePath?;
    get parameterStorePath(): string;
    set parameterStorePath(value: string);
    get parameterStorePathInput(): string;
    private _projectId?;
    get projectId(): string;
    set projectId(value: string);
    get projectIdInput(): string;
    private _secretAccessKey?;
    get secretAccessKey(): string;
    set secretAccessKey(value: string);
    resetSecretAccessKey(): void;
    get secretAccessKeyInput(): string;
    private _secretPath?;
    get secretPath(): string;
    set secretPath(value: string);
    get secretPathInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
