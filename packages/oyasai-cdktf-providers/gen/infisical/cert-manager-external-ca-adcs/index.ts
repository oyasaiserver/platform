// https://registry.terraform.io/providers/infisical/infisical/0.16.17/docs/resources/cert_manager_external_ca_adcs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CertManagerExternalCaAdcsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the Azure ADCS app connection for certificate issuance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.17/docs/resources/cert_manager_external_ca_adcs#azure_adcs_connection_id CertManagerExternalCaAdcs#azure_adcs_connection_id}
  */
  readonly azureAdcsConnectionId: string;
  /**
  * The name of the ADCS CA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.17/docs/resources/cert_manager_external_ca_adcs#name CertManagerExternalCaAdcs#name}
  */
  readonly name: string;
  /**
  * The slug of the cert-manager project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.17/docs/resources/cert_manager_external_ca_adcs#project_slug CertManagerExternalCaAdcs#project_slug}
  */
  readonly projectSlug: string;
  /**
  * The status of the CA. Supported values: active, disabled. Defaults to 'active'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.17/docs/resources/cert_manager_external_ca_adcs#status CertManagerExternalCaAdcs#status}
  */
  readonly status?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.17/docs/resources/cert_manager_external_ca_adcs infisical_cert_manager_external_ca_adcs}
*/
export class CertManagerExternalCaAdcs extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_cert_manager_external_ca_adcs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CertManagerExternalCaAdcs resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CertManagerExternalCaAdcs to import
  * @param importFromId The id of the existing CertManagerExternalCaAdcs that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.17/docs/resources/cert_manager_external_ca_adcs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CertManagerExternalCaAdcs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_cert_manager_external_ca_adcs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.17/docs/resources/cert_manager_external_ca_adcs infisical_cert_manager_external_ca_adcs} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CertManagerExternalCaAdcsConfig
  */
  public constructor(scope: Construct, id: string, config: CertManagerExternalCaAdcsConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_cert_manager_external_ca_adcs',
      terraformGeneratorMetadata: {
        providerName: 'infisical',
        providerVersion: '0.16.17'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._azureAdcsConnectionId = config.azureAdcsConnectionId;
    this._name = config.name;
    this._projectSlug = config.projectSlug;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // azure_adcs_connection_id - computed: false, optional: false, required: true
  private _azureAdcsConnectionId?: string; 
  public get azureAdcsConnectionId() {
    return this.getStringAttribute('azure_adcs_connection_id');
  }
  public set azureAdcsConnectionId(value: string) {
    this._azureAdcsConnectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azureAdcsConnectionIdInput() {
    return this._azureAdcsConnectionId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // project_slug - computed: false, optional: false, required: true
  private _projectSlug?: string; 
  public get projectSlug() {
    return this.getStringAttribute('project_slug');
  }
  public set projectSlug(value: string) {
    this._projectSlug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectSlugInput() {
    return this._projectSlug;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      azure_adcs_connection_id: cdktf.stringToTerraform(this._azureAdcsConnectionId),
      name: cdktf.stringToTerraform(this._name),
      project_slug: cdktf.stringToTerraform(this._projectSlug),
      status: cdktf.stringToTerraform(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      azure_adcs_connection_id: {
        value: cdktf.stringToHclTerraform(this._azureAdcsConnectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_slug: {
        value: cdktf.stringToHclTerraform(this._projectSlug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
