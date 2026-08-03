// https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/mtls_certificate_associations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareMtlsCertificateAssociationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/mtls_certificate_associations#account_id DataCloudflareMtlsCertificateAssociations#account_id}
  */
  readonly accountId: string;
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/mtls_certificate_associations#mtls_certificate_id DataCloudflareMtlsCertificateAssociations#mtls_certificate_id}
  */
  readonly mtlsCertificateId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/mtls_certificate_associations cloudflare_mtls_certificate_associations}
*/
export class DataCloudflareMtlsCertificateAssociations extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_mtls_certificate_associations";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareMtlsCertificateAssociations resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareMtlsCertificateAssociations to import
  * @param importFromId The id of the existing DataCloudflareMtlsCertificateAssociations that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/mtls_certificate_associations#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareMtlsCertificateAssociations to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_mtls_certificate_associations", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/mtls_certificate_associations cloudflare_mtls_certificate_associations} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareMtlsCertificateAssociationsConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareMtlsCertificateAssociationsConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_mtls_certificate_associations',
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
    this._mtlsCertificateId = config.mtlsCertificateId;
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

  // mtls_certificate_id - computed: false, optional: false, required: true
  private _mtlsCertificateId?: string; 
  public get mtlsCertificateId() {
    return this.getStringAttribute('mtls_certificate_id');
  }
  public set mtlsCertificateId(value: string) {
    this._mtlsCertificateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mtlsCertificateIdInput() {
    return this._mtlsCertificateId;
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    return this.getStringAttribute('service');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      mtls_certificate_id: cdktf.stringToTerraform(this._mtlsCertificateId),
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
      mtls_certificate_id: {
        value: cdktf.stringToHclTerraform(this._mtlsCertificateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
