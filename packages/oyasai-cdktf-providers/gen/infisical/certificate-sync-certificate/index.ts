// https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/certificate_sync_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CertificateSyncCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the certificate to associate with the certificate sync.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/certificate_sync_certificate#certificate_id CertificateSyncCertificate#certificate_id}
  */
  readonly certificateId: string;
  /**
  * The ID of the certificate sync to associate the certificate with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/certificate_sync_certificate#certificate_sync_id CertificateSyncCertificate#certificate_sync_id}
  */
  readonly certificateSyncId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/certificate_sync_certificate infisical_certificate_sync_certificate}
*/
export class CertificateSyncCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_certificate_sync_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CertificateSyncCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CertificateSyncCertificate to import
  * @param importFromId The id of the existing CertificateSyncCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/certificate_sync_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CertificateSyncCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_certificate_sync_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/certificate_sync_certificate infisical_certificate_sync_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CertificateSyncCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: CertificateSyncCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_certificate_sync_certificate',
      terraformGeneratorMetadata: {
        providerName: 'infisical',
        providerVersion: '0.19.26'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certificateId = config.certificateId;
    this._certificateSyncId = config.certificateSyncId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_id - computed: false, optional: false, required: true
  private _certificateId?: string; 
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }
  public set certificateId(value: string) {
    this._certificateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdInput() {
    return this._certificateId;
  }

  // certificate_sync_id - computed: false, optional: false, required: true
  private _certificateSyncId?: string; 
  public get certificateSyncId() {
    return this.getStringAttribute('certificate_sync_id');
  }
  public set certificateSyncId(value: string) {
    this._certificateSyncId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateSyncIdInput() {
    return this._certificateSyncId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_id: cdktf.stringToTerraform(this._certificateId),
      certificate_sync_id: cdktf.stringToTerraform(this._certificateSyncId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificate_id: {
        value: cdktf.stringToHclTerraform(this._certificateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_sync_id: {
        value: cdktf.stringToHclTerraform(this._certificateSyncId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
