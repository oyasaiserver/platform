// https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_sending_subdomain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EmailSendingSubdomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether a send request that includes a recipient suppressed on
  * this subdomain drops that recipient and still delivers to the
  * rest, instead of failing the entire request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_sending_subdomain#drop_suppressed_recipients EmailSendingSubdomain#drop_suppressed_recipients}
  */
  readonly dropSuppressedRecipients?: boolean | cdktf.IResolvable;
  /**
  * The domain name within the zone. A wildcard is allowed only as the complete leftmost label (`*.example.com`) and requires the account wildcard Email Sending entitlement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_sending_subdomain#name EmailSendingSubdomain#name}
  */
  readonly name: string;
  /**
  * Whether sent messages from this subdomain can be previewed in the activity log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_sending_subdomain#preview_enabled EmailSendingSubdomain#preview_enabled}
  */
  readonly previewEnabled?: boolean | cdktf.IResolvable;
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_sending_subdomain#zone_id EmailSendingSubdomain#zone_id}
  */
  readonly zoneId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_sending_subdomain cloudflare_email_sending_subdomain}
*/
export class EmailSendingSubdomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_email_sending_subdomain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EmailSendingSubdomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EmailSendingSubdomain to import
  * @param importFromId The id of the existing EmailSendingSubdomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_sending_subdomain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EmailSendingSubdomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_email_sending_subdomain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_sending_subdomain cloudflare_email_sending_subdomain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EmailSendingSubdomainConfig
  */
  public constructor(scope: Construct, id: string, config: EmailSendingSubdomainConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_email_sending_subdomain',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dropSuppressedRecipients = config.dropSuppressedRecipients;
    this._name = config.name;
    this._previewEnabled = config.previewEnabled;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // dkim_selector - computed: true, optional: false, required: false
  public get dkimSelector() {
    return this.getStringAttribute('dkim_selector');
  }

  // drop_suppressed_recipients - computed: true, optional: true, required: false
  private _dropSuppressedRecipients?: boolean | cdktf.IResolvable; 
  public get dropSuppressedRecipients() {
    return this.getBooleanAttribute('drop_suppressed_recipients');
  }
  public set dropSuppressedRecipients(value: boolean | cdktf.IResolvable) {
    this._dropSuppressedRecipients = value;
  }
  public resetDropSuppressedRecipients() {
    this._dropSuppressedRecipients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropSuppressedRecipientsInput() {
    return this._dropSuppressedRecipients;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // modified - computed: true, optional: false, required: false
  public get modified() {
    return this.getStringAttribute('modified');
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

  // preview_enabled - computed: true, optional: true, required: false
  private _previewEnabled?: boolean | cdktf.IResolvable; 
  public get previewEnabled() {
    return this.getBooleanAttribute('preview_enabled');
  }
  public set previewEnabled(value: boolean | cdktf.IResolvable) {
    this._previewEnabled = value;
  }
  public resetPreviewEnabled() {
    this._previewEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previewEnabledInput() {
    return this._previewEnabled;
  }

  // return_path_domain - computed: true, optional: false, required: false
  public get returnPathDomain() {
    return this.getStringAttribute('return_path_domain');
  }

  // tag - computed: true, optional: false, required: false
  public get tag() {
    return this.getStringAttribute('tag');
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      drop_suppressed_recipients: cdktf.booleanToTerraform(this._dropSuppressedRecipients),
      name: cdktf.stringToTerraform(this._name),
      preview_enabled: cdktf.booleanToTerraform(this._previewEnabled),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      drop_suppressed_recipients: {
        value: cdktf.booleanToHclTerraform(this._dropSuppressedRecipients),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preview_enabled: {
        value: cdktf.booleanToHclTerraform(this._previewEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
