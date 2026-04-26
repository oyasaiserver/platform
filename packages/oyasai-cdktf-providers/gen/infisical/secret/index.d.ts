import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SecretConfig extends cdktf.TerraformMetaArguments {
    /**
    * The environment slug of the secret to modify/create
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret#env_slug Secret#env_slug}
    */
    readonly envSlug: string;
    /**
    * The path to the folder where the given secret resides
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret#folder_path Secret#folder_path}
    */
    readonly folderPath: string;
    /**
    * Metadata associated with the secret as key-value pairs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret#metadata Secret#metadata}
    */
    readonly metadata?: {
        [key: string]: string;
    };
    /**
    * The name of the secret
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret#name Secret#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret#secret_reminder Secret#secret_reminder}
    */
    readonly secretReminder?: SecretSecretReminder;
    /**
    * Tag ids to be attached for the secrets.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret#tag_ids Secret#tag_ids}
    */
    readonly tagIds?: string[];
    /**
    * The value of the secret in plain text. This is required if `value_wo` is not set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret#value Secret#value}
    */
    readonly value?: string;
    /**
    * The value of the secret in plain text as a write-only secret. If set, the secret value will not be stored in state. This is required if `value` is not set. Requires Terraform version 1.11.0 or higher.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret#value_wo Secret#value_wo}
    */
    readonly valueWo?: string;
    /**
    * Used together with value_wo to trigger an update. Increment this value when an update to the value_wo is required.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret#value_wo_version Secret#value_wo_version}
    */
    readonly valueWoVersion?: number;
    /**
    * The Infisical project ID (Required for Machine Identity auth, and service tokens with multiple scopes)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret#workspace_id Secret#workspace_id}
    */
    readonly workspaceId?: string;
}
export interface SecretSecretReminder {
    /**
    * Note for the secret rotation reminder
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret#note Secret#note}
    */
    readonly note?: string;
    /**
    * Frequency of secret rotation reminder in days
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret#repeat_days Secret#repeat_days}
    */
    readonly repeatDays: number;
}
export declare function secretSecretReminderToTerraform(struct?: SecretSecretReminder | cdktf.IResolvable): any;
export declare function secretSecretReminderToHclTerraform(struct?: SecretSecretReminder | cdktf.IResolvable): any;
export declare class SecretSecretReminderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecretSecretReminder | cdktf.IResolvable | undefined;
    set internalValue(value: SecretSecretReminder | cdktf.IResolvable | undefined);
    private _note?;
    get note(): string;
    set note(value: string);
    resetNote(): void;
    get noteInput(): string;
    private _repeatDays?;
    get repeatDays(): number;
    set repeatDays(value: number);
    get repeatDaysInput(): number;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret infisical_secret}
*/
export declare class Secret extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_secret";
    /**
    * Generates CDKTF code for importing a Secret resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Secret to import
    * @param importFromId The id of the existing Secret that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Secret to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret infisical_secret} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecretConfig
    */
    constructor(scope: Construct, id: string, config: SecretConfig);
    private _envSlug?;
    get envSlug(): string;
    set envSlug(value: string);
    get envSlugInput(): string;
    private _folderPath?;
    get folderPath(): string;
    set folderPath(value: string);
    get folderPathInput(): string;
    get id(): any;
    get lastUpdated(): any;
    private _metadata?;
    get metadata(): {
        [key: string]: string;
    };
    set metadata(value: {
        [key: string]: string;
    });
    resetMetadata(): void;
    get metadataInput(): {
        [key: string]: string;
    };
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _secretReminder;
    get secretReminder(): SecretSecretReminderOutputReference;
    putSecretReminder(value: SecretSecretReminder): void;
    resetSecretReminder(): void;
    get secretReminderInput(): any;
    private _tagIds?;
    get tagIds(): string[];
    set tagIds(value: string[]);
    resetTagIds(): void;
    get tagIdsInput(): string[];
    private _value?;
    get value(): string;
    set value(value: string);
    resetValue(): void;
    get valueInput(): string;
    private _valueWo?;
    get valueWo(): string;
    set valueWo(value: string);
    resetValueWo(): void;
    get valueWoInput(): string;
    private _valueWoVersion?;
    get valueWoVersion(): number;
    set valueWoVersion(value: number);
    resetValueWoVersion(): void;
    get valueWoVersionInput(): number;
    private _workspaceId?;
    get workspaceId(): string;
    set workspaceId(value: string);
    resetWorkspaceId(): void;
    get workspaceIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
