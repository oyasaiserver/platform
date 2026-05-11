// https://registry.terraform.io/providers/infisical/infisical/0.16.22/docs/resources/cert_manager_ca_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CertManagerCaCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the certificate authority to generate a certificate for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.22/docs/resources/cert_manager_ca_certificate#ca_id CertManagerCaCertificate#ca_id}
  */
  readonly caId: string;
  /**
  * The maximum number of intermediate CAs that may follow this CA in the certificate chain. Use -1 for no path limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.22/docs/resources/cert_manager_ca_certificate#max_path_length CertManagerCaCertificate#max_path_length}
  */
  readonly maxPathLength?: number;
  /**
  * The date and time when the CA expires in RFC3339 format (e.g., '2034-01-01T00:00:00Z')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.22/docs/resources/cert_manager_ca_certificate#not_after CertManagerCaCertificate#not_after}
  */
  readonly notAfter: string;
  /**
  * The date and time when the CA becomes valid in RFC3339 format (e.g., '2024-01-01T00:00:00Z')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.22/docs/resources/cert_manager_ca_certificate#not_before CertManagerCaCertificate#not_before}
  */
  readonly notBefore: string;
  /**
  * The ID of the parent CA (required for intermediate CAs)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.22/docs/resources/cert_manager_ca_certificate#parent_ca_id CertManagerCaCertificate#parent_ca_id}
  */
  readonly parentCaId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.22/docs/resources/cert_manager_ca_certificate infisical_cert_manager_ca_certificate}
*/
export class CertManagerCaCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_cert_manager_ca_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CertManagerCaCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CertManagerCaCertificate to import
  * @param importFromId The id of the existing CertManagerCaCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.22/docs/resources/cert_manager_ca_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CertManagerCaCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_cert_manager_ca_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.22/docs/resources/cert_manager_ca_certificate infisical_cert_manager_ca_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CertManagerCaCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: CertManagerCaCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_cert_manager_ca_certificate',
      terraformGeneratorMetadata: {
        providerName: 'infisical',
        providerVersion: '0.16.22'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._caId = config.caId;
    this._maxPathLength = config.maxPathLength;
    this._notAfter = config.notAfter;
    this._notBefore = config.notBefore;
    this._parentCaId = config.parentCaId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ca_id - computed: false, optional: false, required: true
  private _caId?: string; 
  public get caId() {
    return this.getStringAttribute('ca_id');
  }
  public set caId(value: string) {
    this._caId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caIdInput() {
    return this._caId;
  }

  // certificate - computed: true, optional: false, required: false
  public get certificate() {
    return this.getStringAttribute('certificate');
  }

  // certificate_chain - computed: true, optional: false, required: false
  public get certificateChain() {
    return this.getStringAttribute('certificate_chain');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_path_length - computed: true, optional: true, required: false
  private _maxPathLength?: number; 
  public get maxPathLength() {
    return this.getNumberAttribute('max_path_length');
  }
  public set maxPathLength(value: number) {
    this._maxPathLength = value;
  }
  public resetMaxPathLength() {
    this._maxPathLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPathLengthInput() {
    return this._maxPathLength;
  }

  // not_after - computed: false, optional: false, required: true
  private _notAfter?: string; 
  public get notAfter() {
    return this.getStringAttribute('not_after');
  }
  public set notAfter(value: string) {
    this._notAfter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notAfterInput() {
    return this._notAfter;
  }

  // not_before - computed: false, optional: false, required: true
  private _notBefore?: string; 
  public get notBefore() {
    return this.getStringAttribute('not_before');
  }
  public set notBefore(value: string) {
    this._notBefore = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notBeforeInput() {
    return this._notBefore;
  }

  // parent_ca_id - computed: false, optional: true, required: false
  private _parentCaId?: string; 
  public get parentCaId() {
    return this.getStringAttribute('parent_ca_id');
  }
  public set parentCaId(value: string) {
    this._parentCaId = value;
  }
  public resetParentCaId() {
    this._parentCaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentCaIdInput() {
    return this._parentCaId;
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ca_id: cdktf.stringToTerraform(this._caId),
      max_path_length: cdktf.numberToTerraform(this._maxPathLength),
      not_after: cdktf.stringToTerraform(this._notAfter),
      not_before: cdktf.stringToTerraform(this._notBefore),
      parent_ca_id: cdktf.stringToTerraform(this._parentCaId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ca_id: {
        value: cdktf.stringToHclTerraform(this._caId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_path_length: {
        value: cdktf.numberToHclTerraform(this._maxPathLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      not_after: {
        value: cdktf.stringToHclTerraform(this._notAfter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      not_before: {
        value: cdktf.stringToHclTerraform(this._notBefore),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_ca_id: {
        value: cdktf.stringToHclTerraform(this._parentCaId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
