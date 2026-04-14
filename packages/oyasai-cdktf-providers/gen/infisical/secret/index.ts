// https://registry.terraform.io/providers/infisical/infisical/0.16.15/docs/resources/secret
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecretConfig extends cdktf.TerraformMetaArguments {
  /**
  * The environment slug of the secret to modify/create
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.15/docs/resources/secret#env_slug Secret#env_slug}
  */
  readonly envSlug: string;
  /**
  * The path to the folder where the given secret resides
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.15/docs/resources/secret#folder_path Secret#folder_path}
  */
  readonly folderPath: string;
  /**
  * Metadata associated with the secret as key-value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.15/docs/resources/secret#metadata Secret#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * The name of the secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.15/docs/resources/secret#name Secret#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.15/docs/resources/secret#secret_reminder Secret#secret_reminder}
  */
  readonly secretReminder?: SecretSecretReminder;
  /**
  * Tag ids to be attached for the secrets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.15/docs/resources/secret#tag_ids Secret#tag_ids}
  */
  readonly tagIds?: string[];
  /**
  * The value of the secret in plain text. This is required if `value_wo` is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.15/docs/resources/secret#value Secret#value}
  */
  readonly value?: string;
  /**
  * The value of the secret in plain text as a write-only secret. If set, the secret value will not be stored in state. This is required if `value` is not set. Requires Terraform version 1.11.0 or higher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.15/docs/resources/secret#value_wo Secret#value_wo}
  */
  readonly valueWo?: string;
  /**
  * Used together with value_wo to trigger an update. Increment this value when an update to the value_wo is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.15/docs/resources/secret#value_wo_version Secret#value_wo_version}
  */
  readonly valueWoVersion?: number;
  /**
  * The Infisical project ID (Required for Machine Identity auth, and service tokens with multiple scopes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.15/docs/resources/secret#workspace_id Secret#workspace_id}
  */
  readonly workspaceId?: string;
}
export interface SecretSecretReminder {
  /**
  * Note for the secret rotation reminder
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.15/docs/resources/secret#note Secret#note}
  */
  readonly note?: string;
  /**
  * Frequency of secret rotation reminder in days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.15/docs/resources/secret#repeat_days Secret#repeat_days}
  */
  readonly repeatDays: number;
}

export function secretSecretReminderToTerraform(struct?: SecretSecretReminder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    note: cdktf.stringToTerraform(struct!.note),
    repeat_days: cdktf.numberToTerraform(struct!.repeatDays),
  }
}


export function secretSecretReminderToHclTerraform(struct?: SecretSecretReminder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    note: {
      value: cdktf.stringToHclTerraform(struct!.note),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repeat_days: {
      value: cdktf.numberToHclTerraform(struct!.repeatDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecretSecretReminderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecretSecretReminder | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._note !== undefined) {
      hasAnyValues = true;
      internalValueResult.note = this._note;
    }
    if (this._repeatDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeatDays = this._repeatDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretSecretReminder | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._note = undefined;
      this._repeatDays = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._note = value.note;
      this._repeatDays = value.repeatDays;
    }
  }

  // note - computed: false, optional: true, required: false
  private _note?: string; 
  public get note() {
    return this.getStringAttribute('note');
  }
  public set note(value: string) {
    this._note = value;
  }
  public resetNote() {
    this._note = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noteInput() {
    return this._note;
  }

  // repeat_days - computed: false, optional: false, required: true
  private _repeatDays?: number; 
  public get repeatDays() {
    return this.getNumberAttribute('repeat_days');
  }
  public set repeatDays(value: number) {
    this._repeatDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatDaysInput() {
    return this._repeatDays;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.15/docs/resources/secret infisical_secret}
*/
export class Secret extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_secret";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Secret resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Secret to import
  * @param importFromId The id of the existing Secret that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.15/docs/resources/secret#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Secret to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_secret", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.15/docs/resources/secret infisical_secret} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecretConfig
  */
  public constructor(scope: Construct, id: string, config: SecretConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_secret',
      terraformGeneratorMetadata: {
        providerName: 'infisical',
        providerVersion: '0.16.15'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._envSlug = config.envSlug;
    this._folderPath = config.folderPath;
    this._metadata = config.metadata;
    this._name = config.name;
    this._secretReminder.internalValue = config.secretReminder;
    this._tagIds = config.tagIds;
    this._value = config.value;
    this._valueWo = config.valueWo;
    this._valueWoVersion = config.valueWoVersion;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // env_slug - computed: false, optional: false, required: true
  private _envSlug?: string; 
  public get envSlug() {
    return this.getStringAttribute('env_slug');
  }
  public set envSlug(value: string) {
    this._envSlug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get envSlugInput() {
    return this._envSlug;
  }

  // folder_path - computed: false, optional: false, required: true
  private _folderPath?: string; 
  public get folderPath() {
    return this.getStringAttribute('folder_path');
  }
  public set folderPath(value: string) {
    this._folderPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get folderPathInput() {
    return this._folderPath;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // secret_reminder - computed: false, optional: true, required: false
  private _secretReminder = new SecretSecretReminderOutputReference(this, "secret_reminder");
  public get secretReminder() {
    return this._secretReminder;
  }
  public putSecretReminder(value: SecretSecretReminder) {
    this._secretReminder.internalValue = value;
  }
  public resetSecretReminder() {
    this._secretReminder.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretReminderInput() {
    return this._secretReminder.internalValue;
  }

  // tag_ids - computed: false, optional: true, required: false
  private _tagIds?: string[]; 
  public get tagIds() {
    return this.getListAttribute('tag_ids');
  }
  public set tagIds(value: string[]) {
    this._tagIds = value;
  }
  public resetTagIds() {
    this._tagIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagIdsInput() {
    return this._tagIds;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // value_wo - computed: false, optional: true, required: false
  private _valueWo?: string; 
  public get valueWo() {
    return this.getStringAttribute('value_wo');
  }
  public set valueWo(value: string) {
    this._valueWo = value;
  }
  public resetValueWo() {
    this._valueWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueWoInput() {
    return this._valueWo;
  }

  // value_wo_version - computed: false, optional: true, required: false
  private _valueWoVersion?: number; 
  public get valueWoVersion() {
    return this.getNumberAttribute('value_wo_version');
  }
  public set valueWoVersion(value: number) {
    this._valueWoVersion = value;
  }
  public resetValueWoVersion() {
    this._valueWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueWoVersionInput() {
    return this._valueWoVersion;
  }

  // workspace_id - computed: true, optional: true, required: false
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  public resetWorkspaceId() {
    this._workspaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      env_slug: cdktf.stringToTerraform(this._envSlug),
      folder_path: cdktf.stringToTerraform(this._folderPath),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      secret_reminder: secretSecretReminderToTerraform(this._secretReminder.internalValue),
      tag_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tagIds),
      value: cdktf.stringToTerraform(this._value),
      value_wo: cdktf.stringToTerraform(this._valueWo),
      value_wo_version: cdktf.numberToTerraform(this._valueWoVersion),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      env_slug: {
        value: cdktf.stringToHclTerraform(this._envSlug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder_path: {
        value: cdktf.stringToHclTerraform(this._folderPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._metadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_reminder: {
        value: secretSecretReminderToHclTerraform(this._secretReminder.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecretSecretReminder",
      },
      tag_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tagIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      value: {
        value: cdktf.stringToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value_wo: {
        value: cdktf.stringToHclTerraform(this._valueWo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value_wo_version: {
        value: cdktf.numberToHclTerraform(this._valueWoVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
