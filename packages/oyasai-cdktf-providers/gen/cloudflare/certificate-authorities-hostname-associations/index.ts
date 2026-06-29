// https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/certificate_authorities_hostname_associations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CertificateAuthoritiesHostnameAssociationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/certificate_authorities_hostname_associations#hostnames CertificateAuthoritiesHostnameAssociations#hostnames}
  */
  readonly hostnames?: string[];
  /**
  * The UUID for a certificate that was uploaded to the mTLS Certificate Management endpoint. If no mtls_certificate_id is given, the hostnames will be associated to your active Cloudflare Managed CA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/certificate_authorities_hostname_associations#mtls_certificate_id CertificateAuthoritiesHostnameAssociations#mtls_certificate_id}
  */
  readonly mtlsCertificateId?: string;
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/certificate_authorities_hostname_associations#zone_id CertificateAuthoritiesHostnameAssociations#zone_id}
  */
  readonly zoneId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/certificate_authorities_hostname_associations cloudflare_certificate_authorities_hostname_associations}
*/
export class CertificateAuthoritiesHostnameAssociations extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_certificate_authorities_hostname_associations";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CertificateAuthoritiesHostnameAssociations resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CertificateAuthoritiesHostnameAssociations to import
  * @param importFromId The id of the existing CertificateAuthoritiesHostnameAssociations that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/certificate_authorities_hostname_associations#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CertificateAuthoritiesHostnameAssociations to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_certificate_authorities_hostname_associations", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/certificate_authorities_hostname_associations cloudflare_certificate_authorities_hostname_associations} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CertificateAuthoritiesHostnameAssociationsConfig
  */
  public constructor(scope: Construct, id: string, config: CertificateAuthoritiesHostnameAssociationsConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_certificate_authorities_hostname_associations',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.21.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._hostnames = config.hostnames;
    this._mtlsCertificateId = config.mtlsCertificateId;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // hostnames - computed: false, optional: true, required: false
  private _hostnames?: string[]; 
  public get hostnames() {
    return this.getListAttribute('hostnames');
  }
  public set hostnames(value: string[]) {
    this._hostnames = value;
  }
  public resetHostnames() {
    this._hostnames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnamesInput() {
    return this._hostnames;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mtls_certificate_id - computed: false, optional: true, required: false
  private _mtlsCertificateId?: string; 
  public get mtlsCertificateId() {
    return this.getStringAttribute('mtls_certificate_id');
  }
  public set mtlsCertificateId(value: string) {
    this._mtlsCertificateId = value;
  }
  public resetMtlsCertificateId() {
    this._mtlsCertificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtlsCertificateIdInput() {
    return this._mtlsCertificateId;
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
      hostnames: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hostnames),
      mtls_certificate_id: cdktf.stringToTerraform(this._mtlsCertificateId),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      hostnames: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hostnames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      mtls_certificate_id: {
        value: cdktf.stringToHclTerraform(this._mtlsCertificateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
