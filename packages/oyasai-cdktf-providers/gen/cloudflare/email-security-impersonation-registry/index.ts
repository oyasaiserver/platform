// https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/email_security_impersonation_registry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EmailSecurityImpersonationRegistryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/email_security_impersonation_registry#account_id EmailSecurityImpersonationRegistry#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/email_security_impersonation_registry#comments EmailSecurityImpersonationRegistry#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/email_security_impersonation_registry#directory_id EmailSecurityImpersonationRegistry#directory_id}
  */
  readonly directoryId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/email_security_impersonation_registry#directory_node_id EmailSecurityImpersonationRegistry#directory_node_id}
  */
  readonly directoryNodeId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/email_security_impersonation_registry#email EmailSecurityImpersonationRegistry#email}
  */
  readonly email: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/email_security_impersonation_registry#external_directory_node_id EmailSecurityImpersonationRegistry#external_directory_node_id}
  */
  readonly externalDirectoryNodeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/email_security_impersonation_registry#is_email_regex EmailSecurityImpersonationRegistry#is_email_regex}
  */
  readonly isEmailRegex: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/email_security_impersonation_registry#name EmailSecurityImpersonationRegistry#name}
  */
  readonly name: string;
  /**
  * Available values: "A1S_INTERNAL", "SNOOPY-CASB_OFFICE_365", "SNOOPY-OFFICE_365", "SNOOPY-GOOGLE_DIRECTORY".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/email_security_impersonation_registry#provenance EmailSecurityImpersonationRegistry#provenance}
  */
  readonly provenance?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/email_security_impersonation_registry cloudflare_email_security_impersonation_registry}
*/
export class EmailSecurityImpersonationRegistry extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_email_security_impersonation_registry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EmailSecurityImpersonationRegistry resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EmailSecurityImpersonationRegistry to import
  * @param importFromId The id of the existing EmailSecurityImpersonationRegistry that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/email_security_impersonation_registry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EmailSecurityImpersonationRegistry to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_email_security_impersonation_registry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/email_security_impersonation_registry cloudflare_email_security_impersonation_registry} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EmailSecurityImpersonationRegistryConfig
  */
  public constructor(scope: Construct, id: string, config: EmailSecurityImpersonationRegistryConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_email_security_impersonation_registry',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.22.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._comments = config.comments;
    this._directoryId = config.directoryId;
    this._directoryNodeId = config.directoryNodeId;
    this._email = config.email;
    this._externalDirectoryNodeId = config.externalDirectoryNodeId;
    this._isEmailRegex = config.isEmailRegex;
    this._name = config.name;
    this._provenance = config.provenance;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // directory_id - computed: false, optional: true, required: false
  private _directoryId?: number; 
  public get directoryId() {
    return this.getNumberAttribute('directory_id');
  }
  public set directoryId(value: number) {
    this._directoryId = value;
  }
  public resetDirectoryId() {
    this._directoryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryIdInput() {
    return this._directoryId;
  }

  // directory_node_id - computed: false, optional: true, required: false
  private _directoryNodeId?: number; 
  public get directoryNodeId() {
    return this.getNumberAttribute('directory_node_id');
  }
  public set directoryNodeId(value: number) {
    this._directoryNodeId = value;
  }
  public resetDirectoryNodeId() {
    this._directoryNodeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryNodeIdInput() {
    return this._directoryNodeId;
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // external_directory_node_id - computed: false, optional: true, required: false
  private _externalDirectoryNodeId?: string; 
  public get externalDirectoryNodeId() {
    return this.getStringAttribute('external_directory_node_id');
  }
  public set externalDirectoryNodeId(value: string) {
    this._externalDirectoryNodeId = value;
  }
  public resetExternalDirectoryNodeId() {
    this._externalDirectoryNodeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalDirectoryNodeIdInput() {
    return this._externalDirectoryNodeId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_email_regex - computed: false, optional: false, required: true
  private _isEmailRegex?: boolean | cdktf.IResolvable; 
  public get isEmailRegex() {
    return this.getBooleanAttribute('is_email_regex');
  }
  public set isEmailRegex(value: boolean | cdktf.IResolvable) {
    this._isEmailRegex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isEmailRegexInput() {
    return this._isEmailRegex;
  }

  // last_modified - computed: true, optional: false, required: false
  public get lastModified() {
    return this.getStringAttribute('last_modified');
  }

  // modified_at - computed: true, optional: false, required: false
  public get modifiedAt() {
    return this.getStringAttribute('modified_at');
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

  // provenance - computed: false, optional: true, required: false
  private _provenance?: string; 
  public get provenance() {
    return this.getStringAttribute('provenance');
  }
  public set provenance(value: string) {
    this._provenance = value;
  }
  public resetProvenance() {
    this._provenance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provenanceInput() {
    return this._provenance;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      comments: cdktf.stringToTerraform(this._comments),
      directory_id: cdktf.numberToTerraform(this._directoryId),
      directory_node_id: cdktf.numberToTerraform(this._directoryNodeId),
      email: cdktf.stringToTerraform(this._email),
      external_directory_node_id: cdktf.stringToTerraform(this._externalDirectoryNodeId),
      is_email_regex: cdktf.booleanToTerraform(this._isEmailRegex),
      name: cdktf.stringToTerraform(this._name),
      provenance: cdktf.stringToTerraform(this._provenance),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      directory_id: {
        value: cdktf.numberToHclTerraform(this._directoryId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      directory_node_id: {
        value: cdktf.numberToHclTerraform(this._directoryNodeId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_directory_node_id: {
        value: cdktf.stringToHclTerraform(this._externalDirectoryNodeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_email_regex: {
        value: cdktf.booleanToHclTerraform(this._isEmailRegex),
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
      provenance: {
        value: cdktf.stringToHclTerraform(this._provenance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
